from transformers import (
    pipeline
)
from typing import Dict, Any
from ..ai.models import ai_models  # Make sure this import is valid
import torch # Import torch to check device

def analyze_document_backend(text: str) -> Dict[str, Any]:
    """Analyze document text using Hugging Face models."""
    print(f"Backend AI: Received text of length: {len(text)}")

    try:
        # Ensure models are initialized (should happen on app startup, but good to be safe)
        if not ai_models.models or not ai_models.pipelines:
             raise RuntimeError("AI models are not initialized. Please ensure the server startup completed successfully.")

        # Define safe maximum input lengths
        max_char_length_summarization = 4000 # Conservative character limit for summarization input
        max_token_length_sentiment = 512  # Safer token limit for BERT-like sentiment models

        # Prepare text for summarization (truncation)
        print(f"Backend AI: Preparing text for summarization (truncating to {max_char_length_summarization} characters)...")
        # Use summarization tokenizer to truncate by tokens
        summarization_tokenizer = ai_models.tokenizers.get('summarization')
        if summarization_tokenizer:
            encoded_input = summarization_tokenizer(text, truncation=True, max_length=1024, return_tensors="pt")
            truncated_text_summary = summarization_tokenizer.decode(encoded_input['input_ids'][0], skip_special_tokens=True)
            print(f"Backend AI: Truncated text length for summarization (tokens): {len(truncated_text_summary)}")
        else:
            truncated_text_summary = text[:max_char_length_summarization]
            print(f"Backend AI: Summarization tokenizer not found, fallback to char truncation: {len(truncated_text_summary)}")

        # Generate summary
        print("Backend AI: Generating summary...")
        summarization_pipeline = ai_models.get_summarization_pipeline()
        # Pass the truncated text for summarization
        summary_response = summarization_pipeline(truncated_text_summary, max_length=130, min_length=30, do_sample=False)
        summary_text = summary_response[0]['summary_text'] if summary_response and summary_response[0] else "Summary not available."
        print(f"Backend AI: Summary generated. Length: {len(summary_text)}")

        # Prepare text for sentiment analysis (truncation)
        print("Backend AI: Preparing text for sentiment analysis (truncating)...")
        truncated_text_sentiment = text # Start with full original text for tokenization
        sentiment_tokenizer = ai_models.tokenizers.get('sentiment')

        if sentiment_tokenizer:
             try:
                 # Encode the text and truncate to max_token_length_sentiment
                 encoded_input = sentiment_tokenizer(text, truncation=True, max_length=max_token_length_sentiment, return_tensors="pt")
                 # Decode the truncated tokens back to text
                 truncated_text_sentiment = sentiment_tokenizer.decode(encoded_input['input_ids'][0], skip_special_tokens=True)
                 print(f"Backend AI: Truncated text using sentiment tokenizer. Original length: {len(text)}, Truncated length: {len(truncated_text_sentiment)}, Token count: {len(encoded_input['input_ids'][0])}")
             except Exception as tokenizer_error:
                  print(f"Backend AI: Error during tokenization/truncation for sentiment: {tokenizer_error}. Falling back to character truncation.")
                  # Fallback to character truncation if tokenizer fails
                  char_limit = max_token_length_sentiment * 4 # Rough approximation
                  truncated_text_sentiment = text[:char_limit]
                  print(f"Backend AI: Truncated text for sentiment using character limit: {char_limit}")
        else:
             print("Backend AI: Sentiment tokenizer not found. Falling back to character truncation for sentiment.")
             # Fallback to character truncation if tokenizer is not found
             char_limit = max_token_length_sentiment * 4 # Rough approximation
             truncated_text_sentiment = text[:char_limit]
             print(f"Backend AI: Truncated text for sentiment using character limit: {char_limit}")

        # Analyze sentiment
        print("Backend AI: Analyzing sentiment...")
        print(f"Backend AI: Input text length for sentiment: {len(truncated_text_sentiment)}")
        sentiment_pipeline = ai_models.pipelines['sentiment'] # Use the initialized pipeline
        print(f"Backend AI: Sentiment pipeline object: {sentiment_pipeline}")
        # Pass the truncated text string directly to the sentiment pipeline
        sentiment_response = sentiment_pipeline(truncated_text_sentiment)
        
        # Calculate sentiment scores
        sentiment = {
            'positive': 0.0,
            'negative': 0.0,
            'neutral': 0.0
        }
        if sentiment_response:
             # Assuming the model output is like [{label: 'POSITIVE', score: x}, {label: 'NEGATIVE', score: y}]
             for item in sentiment_response:
                 label = item['label'].lower()
                 if 'positive' in label:
                     sentiment['positive'] = float(item['score'])
                 elif 'negative' in label:
                     sentiment['negative'] = float(item['score'])
             # For binary sentiment, neutral score is not directly provided. It remains 0.0.
        print(f"Backend AI: Sentiment analyzed. Results: {sentiment}")

        # Translate summary to Spanish and French
        print("Backend AI: Generating translations...")
        # Translate the summary text, as it's much shorter and already generated.
        print(f"Backend AI: Input text length for translation: {len(summary_text)}")

        translations = {
            "es": ai_models.pipelines['translation_en_to_es'](summary_text)[0]['translation_text'],
            "fr": ai_models.pipelines['translation_en_to_fr'](summary_text)[0]['translation_text']
        }
        print(f"Backend AI: Translations generated. Results: {translations}")

        return {
            "summary": summary_text,
            "sentiment": sentiment,
            "translations": translations
        }

    except Exception as e:
        print(f"Backend AI analysis error details: {e}")
        # Re-raise a more specific exception or just the error
        raise RuntimeError(f"AI analysis failed: {e}")
