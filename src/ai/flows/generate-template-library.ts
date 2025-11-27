'use server';

/**
 * @fileOverview Generates template suggestions based on user data and industry trends.
 *
 * - generateTemplateSuggestions - A function that generates template suggestions.
 * - TemplateSuggestionInput - The input type for the generateTemplateSuggestions function.
 * - TemplateSuggestionOutput - The return type for the generateTemplateSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TemplateSuggestionInputSchema = z.object({
  userDataSummary: z
    .string()
    .describe(
      'A summary of the user data, including industry, data types, and business goals.'
    ),
  industryTrends: z.string().describe('A summary of current industry trends.'),
});
export type TemplateSuggestionInput = z.infer<typeof TemplateSuggestionInputSchema>;

const TemplateSuggestionOutputSchema = z.object({
  templateSuggestions: z
    .array(z.string())
    .describe(
      'A list of template suggestions based on the user data and industry trends.'
    ),
});
export type TemplateSuggestionOutput = z.infer<typeof TemplateSuggestionOutputSchema>;

export async function generateTemplateSuggestions(
  input: TemplateSuggestionInput
): Promise<TemplateSuggestionOutput> {
  return generateTemplateSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'templateSuggestionPrompt',
  input: {schema: TemplateSuggestionInputSchema},
  output: {schema: TemplateSuggestionOutputSchema},
  prompt: `You are an expert in suggesting relevant ML-powered BI templates based on user data and industry trends.

  Given the following user data summary:
  {{userDataSummary}}

  And the following industry trends:
  {{industryTrends}}

  Suggest a list of relevant template names that would be most helpful to the user. Only suggest templates listed on this website in the template library page.
  Here are some of the template suggestions:
    - Existing Product Analytics
    - Review Summarizer
    - Launch Planner
    - Price Optimization
    - Unit Economics & Margin Simulator
    - Competitor Price Mapping
    - Sales Forecast

  Return the template names in a JSON array.
  `,
});

const generateTemplateSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateTemplateSuggestionsFlow',
    inputSchema: TemplateSuggestionInputSchema,
    outputSchema: TemplateSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
