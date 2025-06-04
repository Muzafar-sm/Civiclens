import { HfInference } from '@huggingface/inference';

if (!process.env.HUGGINGFACE_API_KEY) {
  throw new Error('HUGGINGFACE_API_KEY is not set in environment variables');
}

// Initialize the Hugging Face client with your API key
const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export async function analyzeDocument(text: string) {
  try {
    // Generate summary
    const summaryResponse = await hf.summarization({
      model: 'facebook/bart-large-cnn',
      inputs: text,
      parameters: {
        max_length: 130,
        min_length: 30,
        do_sample: false
      }
    });

    // Analyze sentiment
    // distilbert-base-uncased-finetuned-sst-2-english provides POSITIVE and NEGATIVE labels
    const sentimentResponse = await hf.textClassification({
      model: 'distilbert-base-uncased-finetuned-sst-2-english',
      inputs: text
    });

    // Calculate sentiment scores based on returned labels
    const sentiment = {
      positive: 0,
      negative: 0,
      neutral: 0
    };

    sentimentResponse.forEach(item => {
      if (item.label === 'POSITIVE') {
        sentiment.positive = item.score;
      } else if (item.label === 'NEGATIVE') {
        sentiment.negative = item.score;
      }
      // If there's a neutral label, handle it. Otherwise, neutral is 0.
      // For this specific model, we might only get POSITIVE/NEGATIVE, so Neutral remains 0
    });

    // For a binary classification model, you might want to normalize scores
    // or consider neutral based on scores being close to 0.5, but the model output is usually
    // a score for each class. Let's assume the scores sum to something meaningful or represent confidence.
    // A simple approach for binary is to assign the non-assigned score to neutral if needed,
    // but the sentimentResponse array should contain all relevant labels and scores.
    // Let's re-evaluate the sentiment calculation based on typical model output:
    // It usually returns [{label: 'POSITIVE', score: x}, {label: 'NEGATIVE', score: y}]
    // We can normalize these or just use the scores directly.
    // Let's stick to assigning scores to their labels and neutral is the remainder if not a 3-class model.
    // Re-calculating based on potential two-label output:
     const positiveScore = sentimentResponse.find(item => item.label === 'POSITIVE')?.score || 0;
     const negativeScore = sentimentResponse.find(item => item.label === 'NEGATIVE')?.score || 0;

     // Assuming it's a binary classification and scores are independent or not normalized to sum to 1
     // If we want to represent neutral, we might need a different model or interpretation.
     // For now, let's just use the positive and negative scores directly.
     // If the model output was like [{label: 'POSITIVE', score: 0.9}, {label: 'NEGATIVE', score: 0.1}],
     // the sum is 1. If it was [{label: 'POSITIVE', score: 0.6}], the interpretation is less clear.
     // Let's assume the model gives independent scores or we only care about positive/negative presence.
     // If we *must* show neutral, and it's a binary model, we could calculate it as 1 - (pos + neg)
     // but this assumes pos+neg <= 1, which isn't always the case for scores.
     // Let's revert to the original sentiment score assignment logic, but ensure we handle cases where labels might be missing.

     const finalSentiment = {
       positive: sentimentResponse.find(item => item.label === 'POSITIVE')?.score || 0,
       negative: sentimentResponse.find(item => item.label === 'NEGATIVE')?.score || 0,
       neutral: 0 // Assuming a binary model, neutral score is not directly provided
     };

     // If you need a neutral score derived from a binary model, you might consider:
     // neutral = 1 - (positive + negative) only if positive + negative <= 1
     // or based on a threshold around 0.5 if the model gives a single score for one class.
     // For now, setting neutral to 0 is safer if the model is strictly binary.


    // Translate to Spanish and French
    const translations = {
      es: await hf.translation({
        model: 'Helsinki-NLP/opus-mt-en-es',
        inputs: summaryResponse.summary_text
      }),
      fr: await hf.translation({
        model: 'Helsinki-NLP/opus-mt-en-fr',
        inputs: summaryResponse.summary_text
      })
    };

    return {
      summary: summaryResponse.summary_text,
      sentiment: finalSentiment, // Use the corrected sentiment object
      translations: {
        es: translations.es.translation_text,
        fr: translations.fr.translation_text
      }
    };
  } catch (error) {
    console.error('AI analysis error:', error);
    throw new Error('Failed to analyze document. Please try again.');
  }
} 