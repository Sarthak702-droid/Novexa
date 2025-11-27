import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-review-feedback.ts';
import '@/ai/flows/predict-rand-d-challenge-cost.ts';
import '@/ai/flows/generate-template-library.ts';
import '@/ai/flows/filter-solver-submissions.ts';
import '@/ai/flows/suggest-price-optimization.ts';