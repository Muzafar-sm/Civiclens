from transformers import (
    AutoModelForSeq2SeqLM,
    AutoTokenizer,
    pipeline,
    AutoModelForSequenceClassification,
    AutoModelForQuestionAnswering,
    AutoModelForCausalLM
)
from typing import Dict, Any
import torch

class AIModels:
    def __init__(self):
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.models: Dict[str, Any] = {}
        self.tokenizers: Dict[str, Any] = {}
        self.pipelines: Dict[str, Any] = {}
        
    def initialize_models(self):
        """Initialize all required models"""
        print("Initializing AI models...")
        # Summarization
        self.models['summarization'] = AutoModelForSeq2SeqLM.from_pretrained(
            "facebook/bart-large-cnn"
        ).to(self.device)
        self.tokenizers['summarization'] = AutoTokenizer.from_pretrained(
            "facebook/bart-large-cnn"
        )
        print("Summarization model and tokenizer loaded.")
        
        # Question Answering
        self.models['qa'] = AutoModelForQuestionAnswering.from_pretrained(
            "deepset/roberta-base-squad2"
        ).to(self.device)
        self.tokenizers['qa'] = AutoTokenizer.from_pretrained(
            "deepset/roberta-base-squad2"
        )
        print("Question Answering model and tokenizer loaded.")
        
        # Sentiment Analysis
        self.pipelines['sentiment'] = pipeline(
            "sentiment-analysis",
            model="distilbert-base-uncased-finetuned-sst-2-english",
            device=0 if torch.cuda.is_available() else -1
        )
        print("Sentiment analysis pipeline loaded.")
        
        # Translation English to Spanish
        self.pipelines['translation_en_to_es'] = pipeline(
            "translation_en_to_es",
            model="Helsinki-NLP/opus-mt-en-es",
            device=0 if torch.cuda.is_available() else -1
        )
        print("Translation English to Spanish pipeline loaded.")
        
        # Translation English to French
        self.pipelines['translation_en_to_fr'] = pipeline(
            "translation_en_to_fr",
            model="Helsinki-NLP/opus-mt-en-fr",
            device=0 if torch.cuda.is_available() else -1
        )
        print("Translation English to French pipeline loaded.")
        
        # Text Generation
        self.models['generation'] = AutoModelForCausalLM.from_pretrained(
            "gpt2"
        ).to(self.device)
        self.tokenizers['generation'] = AutoTokenizer.from_pretrained(
            "gpt2"
        )
        print("Text generation model and tokenizer loaded.")

    def get_summarization_pipeline(self):
        """Get the summarization pipeline"""
        return pipeline(
            "summarization",
            model=self.models['summarization'],
            tokenizer=self.tokenizers['summarization'],
            device=0 if torch.cuda.is_available() else -1
        )

    def get_qa_pipeline(self):
        """Get the question answering pipeline"""
        return pipeline(
            "question-answering",
            model=self.models['qa'],
            tokenizer=self.tokenizers['qa'],
            device=0 if torch.cuda.is_available() else -1
        )

# Create a global instance
ai_models = AIModels() 