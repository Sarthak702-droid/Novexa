'use server';
/**
 * @fileOverview Predicts the cost and timeline of an R&D challenge.
 *
 * - predictRandDChallengeCost - A function that handles the R&D challenge cost prediction process.
 * - PredictRandDChallengeCostInput - The input type for the predictRandDChallengeCost function.
 * - PredictRandDChallengeCostOutput - The return type for the predictRandDChallengeCost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PredictRandDChallengeCostInputSchema = z.object({
  problemStatement: z.string().describe('A detailed description of the R&D problem.'),
  dataAvailability: z
    .string()
    .describe(
      'The availability of data related to the problem, including size and format.'
    ),
  benchmarkExamples: z
    .string()
    .describe(
      'Examples of existing solutions or benchmarks for similar problems.'
    ),
  ipRules: z.string().describe('Specific intellectual property rules and requirements.'),
  budget: z.string().describe('The budget that the user has for this problem.'),
});
export type PredictRandDChallengeCostInput = z.infer<typeof PredictRandDChallengeCostInputSchema>;

const PredictRandDChallengeCostOutputSchema = z.object({
  costEstimate: z.string().describe('The estimated cost range for solving the R&D problem.'),
  timelineEstimate: z
    .string()
    .describe('The estimated timeline range (in days) for solving the R&D problem.'),
  justification: z.string().describe('A justification for the estimated cost and timeline.'),
});
export type PredictRandDChallengeCostOutput = z.infer<typeof PredictRandDChallengeCostOutputSchema>;

export async function predictRandDChallengeCost(
  input: PredictRandDChallengeCostInput
): Promise<PredictRandDChallengeCostOutput> {
  return predictRandDChallengeCostFlow(input);
}

const prompt = ai.definePrompt({
  name: 'predictRandDChallengeCostPrompt',
  input: {schema: PredictRandDChallengeCostInputSchema},
  output: {schema: PredictRandDChallengeCostOutputSchema},
  prompt: `You are an expert in estimating the cost and timeline for solving R&D challenges.  Based on the following information, provide an estimated cost range, timeline range, and a brief justification for your estimates.

Problem Statement: {{{problemStatement}}}
Data Availability: {{{dataAvailability}}}
Benchmark Examples: {{{benchmarkExamples}}}
IP Rules: {{{ipRules}}}
Budget: {{{budget}}}

Respond with a JSON object:
{
  "costEstimate": "estimated cost",
  "timelineEstimate": "estimated timeline in days",
  "justification": "justification for cost and timeline estimates"
}
`,
});

const predictRandDChallengeCostFlow = ai.defineFlow(
  {
    name: 'predictRandDChallengeCostFlow',
    inputSchema: PredictRandDChallengeCostInputSchema,
    outputSchema: PredictRandDChallengeCostOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
