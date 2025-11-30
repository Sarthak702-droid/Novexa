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
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const profitabilityDiagnostics = [
  {
    title: 'Launch Planner (Break-even/ROI)',
    description:
      'Validate new product ventures by instantly calculating break-even points and forecasting return on investment before you commit.',
    imageId: 'bi-feature-planner',
  },
  {
    title: 'Unit Economics (CAC vs. LTV)',
    description:
      'Understand the core of your business health by comparing Customer Acquisition Cost to Lifetime Value, ensuring sustainable growth.',
    imageId: 'bi-feature-economics',
  },
];

const operationalHealth = [
  {
    title: 'Inventory Health',
    description:
      'Identify dead stock and optimize turnover ratios to improve cash flow and increase warehouse efficiency.',
    imageId: 'bi-feature-inventory',
  },
  {
    title: 'Supplier Scorecard',
    description:
      'Quantify supply chain reliability by tracking on-time delivery, scope adherence, and quality to reduce procurement risk.',
    imageId: 'bi-feature-supplier',
  },
];

const marketSensing = [
  {
    title: 'Review Analyzer',
    description:
      'Go beyond star ratings. Our AI extracts key sentiment and keywords from customer reviews to tell you what they truly think.',
    imageId: 'bi-feature-sentiment',
  },
  {
    title: 'Sales Dashboard',
    description:
      'A holistic view of your revenue, margins, and growth trends, allowing you to connect the dots between actions and outcomes.',
    imageId: 'bi-feature-growth',
  },
  {
    title: 'Price Recommendation',
    description:
      'AI-driven suggestions to optimize your product pricing for maximum profitability against market competition.',
    imageId: 'bi-feature-price',
  },
  {
    title: 'Product Analytics',
    description:
      'Analyze performance of your current portfolio to identify winners, losers, and opportunities for growth.',
    imageId: 'bi-feature-analytics',
  },
];

export default function BIPlatformPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">
              Standard Analytics: The Instant Self-Diagnosis Layer
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

      <div className="container space-y-16 pb-16 md:pb-24">
        {/* Profitability Diagnostics */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">
              Profitability Diagnostics
            </h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Validate financial viability and ensure every venture is built
              on a solid foundation.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {profitabilityDiagnostics.map((feature) => {
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
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
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
        </section>

        {/* Operational Health Check */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">
              Operational Health Check
            </h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Streamline your operations, from warehouse to supplier
              relations, for maximum efficiency.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {operationalHealth.map((feature) => {
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
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
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
        </section>

        {/* Customer & Market Sensing */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">
              Customer &amp; Market Sensing
            </h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Instantly connect qualitative customer feedback to quantitative
              financial results.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {marketSensing.map((feature) => {
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
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
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
        </section>
      </div>

      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-headline tracking-tight lg:text-4xl">
                Ready for More Power?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                When you're ready to move from diagnosis to autonomous action,
                our AI Hub provides a virtual workforce to execute your
                strategy.
              </p>
              <Button size="lg" className="mt-8" asChild>
                <Link href="/rd-marketplace">
                  Explore the AI Hub <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
