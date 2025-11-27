'use server';

/**
 * @fileOverview An AI agent that provides price optimization suggestions.
 *
 * - suggestPriceOptimization - A function that provides price optimization suggestions based on product data.
 * - SuggestPriceOptimizationInput - The input type for the suggestPriceOptimization function.
 * - SuggestPriceOptimizationOutput - The return type for the suggestPriceOptimization function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPriceOptimizationInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  currentPrice: z.number().describe('The current price of the product.'),
  costPerUnit: z.number().describe('The cost per unit of the product.'),
  marketPriceRange: z.string().describe('The market price range for similar products.'),
  demand: z.string().describe('The current demand for the product (e.g., high, medium, low).'),
  historicalSalesData: z.string().describe('Historical sales data for the product.'),
  targetProfitMargin: z.number().describe('The target profit margin.'),
});
export type SuggestPriceOptimizationInput = z.infer<typeof SuggestPriceOptimizationInputSchema>;

const SuggestPriceOptimizationOutputSchema = z.object({
  suggestedPrice: z.number().describe('The suggested optimized price for the product.'),
  predictedProfitMargin: z.number().describe('The predicted profit margin at the suggested price.'),
  reasoning: z.string().describe('The reasoning behind the suggested price.'),
  competitivenessAnalysis: z.string().describe('An analysis of how the suggested price compares to competitors.'),
});
export type SuggestPriceOptimizationOutput = z.infer<typeof SuggestPriceOptimizationOutputSchema>;

export async function suggestPriceOptimization(input: SuggestPriceOptimizationInput): Promise<SuggestPriceOptimizationOutput> {
  return suggestPriceOptimizationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestPriceOptimizationPrompt',
  input: {schema: SuggestPriceOptimizationInputSchema},
  output: {schema: SuggestPriceOptimizationOutputSchema},
  prompt: `You are an expert pricing strategist. Given the following product data, suggest an optimized price to maximize profit while remaining competitive.\n\nProduct Name: {{{productName}}}\nCurrent Price: {{{currentPrice}}}\nCost Per Unit: {{{costPerUnit}}}\nMarket Price Range: {{{marketPriceRange}}}\nDemand: {{{demand}}}\nHistorical Sales Data: {{{historicalSalesData}}}\nTarget Profit Margin: {{{targetProfitMargin}}}\n\nConsider all factors and provide a well-reasoned suggestion. Include an analysis of competitiveness.\n\nSuggested Price:{
  "suggestedPrice": <new price>,
  "predictedProfitMargin": <predicted profit margin>,
  "reasoning": <reasoning behind price>,
  "competitivenessAnalysis": <analysis of competitive price>
}`,
});

const suggestPriceOptimizationFlow = ai.defineFlow(
  {
    name: 'suggestPriceOptimizationFlow',
    inputSchema: SuggestPriceOptimizationInputSchema,
    outputSchema: SuggestPriceOptimizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
