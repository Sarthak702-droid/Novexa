import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'Growth Dashboard',
    description: 'Get a real-time, comprehensive view of your key business metrics in one place.',
    imageId: 'bi-feature-growth',
  },
  {
    title: 'Review Sentiment Analysis',
    description: 'Automatically analyze customer reviews to understand what they love and hate.',
    imageId: 'bi-feature-sentiment',
  },
  {
    title: 'Price Recommendation Engine',
    description: 'AI-driven suggestions to optimize your product pricing for maximum profitability.',
    imageId: 'bi-feature-price',
  },
  {
    title: 'Unit Economics Calculator',
    description: 'Deep dive into your costs and margins to ensure every sale is profitable.',
    imageId: 'bi-feature-economics',
  },
  {
    title: 'Launch Simulation',
    description: 'Forecast the potential success of new products under various market scenarios.',
    imageId: 'bi-feature-simulation',
  },
  {
    title: 'Existing Product Analytics',
    description: 'Analyze performance of your current portfolio to identify winners and losers.',
    imageId: 'bi-feature-analytics',
  },
  {
    title: 'Feedback Summarizer',
    description: 'Condense thousands of reviews into actionable, concise summaries.',
    imageId: 'bi-feature-summary',
  },
  {
    title: 'Launch Planner',
    description: 'Organize your product launch with our template, tracking tasks and milestones.',
    imageId: 'bi-feature-planner',
  },
];

export default function BIPlatformPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">
              The BI Platform for Growing Brands
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Stop guessing. Start making data-driven decisions. Our suite of
              AI-powered tools is designed specifically for small brands to
              unlock growth, optimize pricing, and understand customers.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                 <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((feature) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === feature.imageId
              );
              return (
                <Card
                  key={feature.title}
                  className="flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    {image && (
                      <div className="aspect-video overflow-hidden rounded-md border">
                        <Image
                          src={image.imageUrl}
                          alt={feature.title}
                          width={600}
                          height={400}
                          data-ai-hint={image.imageHint}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
         <div className="container">
           <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold font-headline tracking-tight lg:text-4xl">All-in-One Analytics Solution</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Everything you need to turn raw data into actionable intelligence.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Auto-Cleaning &amp; Validation:</strong> Upload your raw data, and we'll handle the messy part.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Template Library:</strong> Get started instantly with pre-built templates for common analyses.</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Export &amp; Share:</strong> Easily export reports to PDF/Excel or share insights with your team.</span>
                  </li>
                </ul>
                <Button size="lg" className="mt-8" asChild>
                    <Link href="/contact">Book a Demo</Link>
                </Button>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-lg">
                  <Image
                      src="https://picsum.photos/seed/bi-main/800/600"
                      alt="BI Platform Dashboard"
                      width={800}
                      height={600}
                      data-ai-hint="dashboard analytics"
                      className="rounded-md"
                  />
              </div>
           </div>
         </div>
      </section>
    </>
  );
}
