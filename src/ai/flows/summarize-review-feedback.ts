'use server';

/**
 * @fileOverview A flow that summarizes customer review feedback.
 *
 * - summarizeReviewFeedback - A function that summarizes review feedback.
 * - SummarizeReviewFeedbackInput - The input type for the summarizeReviewFeedback function.
 * - SummarizeReviewFeedbackOutput - The return type for the summarizeReviewFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeReviewFeedbackInputSchema = z.object({
  reviewText: z.string().describe('The text of the customer reviews.'),
});

export type SummarizeReviewFeedbackInput = z.infer<
  typeof SummarizeReviewFeedbackInputSchema
>;

const SummarizeReviewFeedbackOutputSchema = z.object({
  summary: z.string().describe('A summary of the customer reviews.'),
});

export type SummarizeReviewFeedbackOutput = z.infer<
  typeof SummarizeReviewFeedbackOutputSchema
>;

export async function summarizeReviewFeedback(
  input: SummarizeReviewFeedbackInput
): Promise<SummarizeReviewFeedbackOutput> {
  return summarizeReviewFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeReviewFeedbackPrompt',
  input: {schema: SummarizeReviewFeedbackInputSchema},
  output: {schema: SummarizeReviewFeedbackOutputSchema},
  prompt: `You are an AI assistant helping a small brand understand customer feedback.
  Please summarize the following customer reviews into a concise summary:
  \n
  {{{reviewText}}}
  `,
});

const summarizeReviewFeedbackFlow = ai.defineFlow(
  {
    name: 'summarizeReviewFeedbackFlow',
    inputSchema: SummarizeReviewFeedbackInputSchema,
    outputSchema: SummarizeReviewFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
