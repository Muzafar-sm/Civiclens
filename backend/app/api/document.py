from fastapi import APIRouter, UploadFile, File, HTTPException
from typing import List, Optional, Dict, Any
import json
from ..ai.analysis import analyze_document_backend
import io

# Import Python PDF parsing library
# You might need to install pdfminer.six: pip install pdfminer.six
from pdfminer.high_level import extract_text_to_fp
from pdfminer.layout import LAParams

# Import a library for reading .docx if needed, e.g., python-docx
# You might need to install python-docx: pip install python-docx
# import docx

# Assuming BaseModel is imported from pydantic
from pydantic import BaseModel
import uuid # Import uuid for generating unique IDs

router = APIRouter()

class DocumentResponse(BaseModel):
    id: str
    title: str
    summary: str
    sentiment: Optional[Dict[str, float]] # Use Dict[str, float] for sentiment scores
    translations: Optional[Dict[str, str]] # Use Dict[str, str] for translations

@router.post("/upload", response_model=DocumentResponse)
async def upload_document(file: UploadFile = File(...)):
    """Upload and process a document"""
    print(f"Backend: Received file upload: {file.filename}, type: {file.content_type}")
    try:
        content = await file.read()
        text = ""
        
        # Handle different file types
        if file.content_type == 'application/pdf':
            print("Backend: Processing PDF file...")
            try:
                # Use pdfminer.six to extract text from PDF bytes
                output_string = io.StringIO()
                with io.BytesIO(content) as pdf_file:
                    extract_text_to_fp(pdf_file, output_string, laparams=LAParams())
                text = output_string.getvalue()
                print(f"Backend: PDF parsed, text length: {len(text)}")
            except Exception as e:
                print(f"Backend: PDF parsing error: {e}")
                raise HTTPException(status_code=400, detail=f"Failed to parse PDF file: {e}. Make sure the PDF is not scanned or image-based.")
        elif file.content_type == 'text/plain':
            print("Backend: Processing text file...")
            try:
                 text = content.decode('utf-8')
                 print(f"Backend: Text file processed, text length: {len(text)}")
            except Exception as e:
                 print(f"Backend: Text file processing error: {e}")
                 raise HTTPException(status_code=400, detail=f"Failed to process text file: {e}")
        # Add handling for .doc and .docx if necessary, requires a library like python-docx
        # elif file.content_type == 'application/msword' or file.content_type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        #     print("Backend: Processing Word file...")
        #     try:
        #         doc = docx.Document(io.BytesIO(content))
        #         text = '\n'.join([paragraph.text for paragraph in doc.paragraphs])
        #         print(f"Backend: Word file processed, text length: {len(text)}")
        #     except Exception as e:
        #         print(f"Backend: Word file processing error: {e}")
        #         raise HTTPException(status_code=400, detail=f"Failed to process Word file: {e}")
        else:
            print(f"Backend: Unsupported file type: {file.content_type}")
            raise HTTPException(status_code=400, detail="Unsupported file type. Please upload a PDF, Word document, or text file.")

        if not text or len(text) == 0:
            print("Backend: No text content found in file.")
            raise HTTPException(status_code=400, detail="No text content found in file. Please ensure the document contains readable text.")

        # Limit text length (optional, based on model constraints)
        maxLength = 5000 # Increased max length for backend processing
        if len(text) > maxLength:
            print(f"Backend: Text truncated from {len(text)} to {maxLength} characters.")
            text = text[:maxLength]


        # Process document with AI models
        print("Backend: Calling AI analysis function...")
        analysis_results = analyze_document_backend(text)
        print("Backend: AI analysis completed.")
        
        # TODO: Save document and analysis_results to database
        # For now, return the analysis results directly

        return DocumentResponse(
            id="doc_" + str(uuid.uuid4()), # Generate a unique ID in the backend
            title=file.filename,
            summary=analysis_results.get('summary', 'Summary not available.'),
            sentiment=analysis_results.get('sentiment'),
            translations=analysis_results.get('translations')
        )

    except HTTPException as http_exc:
        # Re-raise HTTPException so FastAPI handles it
        raise http_exc
    except Exception as e:
        print(f"Backend upload processing error: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to process upload: {e}")

from fastapi import Body

class QuestionRequest(BaseModel):
    question: str

from ..ai.models import ai_models
from fastapi import Body

@router.post("/{document_id}/ask")
async def ask_question(document_id: str, request: QuestionRequest = Body(...)):
    """Ask a question about the document"""
    try:
        question = request.question
        print(f"Backend: Received question for document {document_id}: {question}")

        # Simulate loading document text content (replace with actual DB or storage retrieval)
        document_text = (
            "The slow growth of .IN domain registrations before the new policy was introduced "
            "was mainly due to high registration costs, lack of awareness among potential users, "
            "and limited marketing efforts by the registry. Additionally, complex registration "
            "processes and restrictions on registrants contributed to the slow adoption."
        )

        # Get the QA pipeline
        qa_pipeline = ai_models.get_qa_pipeline()

        # Use the QA pipeline to answer the question based on the document text
        qa_result = qa_pipeline(question=question, context=document_text)

        answer = qa_result.get('answer', 'Answer not available.')
        confidence = qa_result.get('score', 0.0)

        print(f"Backend: QA answer generated: {answer} with confidence {confidence}")

        return {
            "answer": answer,
            "confidence": confidence
        }
    except Exception as e:
        print(f"Backend QA error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{document_id}/summary")
async def get_summary(document_id: str, complexity: str = "citizen"):
    """Get document summary at specified complexity level"""
    try:
        # TODO: Implement multi-level summarization using stored document content
        print(f"Backend: Received request for summary of document {document_id} at complexity {complexity}")
        
        # Placeholder logic
        # You would typically load the document content and generate summary based on complexity
        placeholder_summary = f"This is a placeholder summary for document {document_id} at {complexity} complexity."
        
        return {
            "summary": placeholder_summary,
            "complexity": complexity
        }
    except Exception as e:
        print(f"Backend summary error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{document_id}/sentiment")
async def get_sentiment(document_id: str):
    """Get sentiment analysis for the document"""
    try:
        # TODO: Implement sentiment analysis using stored document content
        print(f"Backend: Received request for sentiment of document {document_id}")
        
        # Placeholder logic
        # You would typically load the document content and perform sentiment analysis
        placeholder_sentiment = {
            "positive": 0.6,
            "negative": 0.3,
            "neutral": 0.1
        }
        
        return placeholder_sentiment
    except Exception as e:
        print(f"Backend sentiment error: {e}")
        raise HTTPException(status_code=500, detail=str(e)) 
