import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

const templates = [
  {
    title: 'Existing Product Analytics',
    description: 'Deep-dive into your product performance, sales trends, and customer behavior.',
    imageId: 'bi-feature-analytics',
  },
  {
    title: 'Review Summarizer',
    description: 'AI-powered summary of thousands of customer reviews to find key themes.',
    imageId: 'bi-feature-summary',
  },
  {
    title: 'Launch Planner',
    description: 'Structure your new product launch and track progress against key milestones.',
    imageId: 'bi-feature-planner',
  },
  {
    title: 'Price Optimization',
    description: 'Analyze market data and costs to find the optimal price for your products.',
    imageId: 'bi-feature-price',
  },
  {
    title: 'Unit Economics & Margin Simulator',
    description: 'Model your costs and revenue to understand profitability at a granular level.',
    imageId: 'bi-feature-economics',
  },
  {
    title: 'Competitor Price Mapping',
    description: 'Track competitor pricing automatically to stay competitive in the market.',
    imageId: 'bi-feature-price', // Reusing an image
  },
    {
    title: 'Sales Forecast',
    description: 'Use historical data to predict future sales trends and manage inventory.',
    imageId: 'bi-feature-simulation', // Reusing an image
  },
];

export default function TemplatesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-muted">
        <div className="container text-center">
          <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">
            BI Template Library
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Get from data to decision in minutes. Our library of ML-powered
            templates provides ready-to-use analyses for the most common
            business questions. Just upload your data and get insights.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === template.imageId
              );
              return (
                <Card
                  key={template.title}
                  className="flex flex-col overflow-hidden transition-shadow hover:shadow-xl"
                >
                  <CardHeader>
                    <CardTitle>{template.title}</CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    {image && (
                      <div className="aspect-video overflow-hidden rounded-md border bg-muted">
                        <Image
                          src={image.imageUrl}
                          alt={template.title}
                          width={600}
                          height={400}
                          data-ai-hint={image.imageHint}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/signup">Try Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
