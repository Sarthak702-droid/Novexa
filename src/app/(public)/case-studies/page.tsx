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
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    client: 'Elegant Textiles Inc.',
    title: 'Automated Fabric Defect Detection',
    challenge: 'High manual inspection costs and inconsistent quality control in fabric manufacturing. Needed a low-cost, automated solution to identify defects in real-time.',
    solution: 'Developed a computer vision model deployed on a Raspberry Pi that scans fabric rolls, identifying and flagging 12 types of common defects with 98% accuracy.',
    results: [
      '70% reduction in manual inspection hours.',
      '15% decrease in material wastage.',
      '99.5% consistency in quality control achieved.',
      'Prototype delivered in 28 days for under ₹1L.',
    ],
    beforeImageId: 'case-study-textile-before',
    afterImageId: 'case-study-textile-after',
    prototypeImageId: 'prototype-textile',
  },
  {
    client: 'GadgetFlow Accessories',
    title: 'Optimizing E-commerce Product Pricing',
    challenge: 'Struggling to price a new line of 50+ electronic accessories against competitors, leading to lost sales and low margins.',
    solution: 'Utilized Novexa\'s BI platform to map competitor prices, analyze market demand from reviews, and simulate unit economics. The Price Optimization template suggested dynamic pricing for each SKU.',
    results: [
      '25% increase in average profit margin.',
      '18% uplift in sales for optimized products.',
      'Reduced time-to-decision for pricing from weeks to hours.',
      'Achieved with the ₹1499/mo Growth Brands plan.',
    ],
    beforeImageId: 'case-study-electronics-before',
    afterImageId: 'case-study-electronics-after',
    prototypeImageId: 'prototype-electronics',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-muted">
        <div className="container text-center">
          <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">
            Real Problems, Real Results
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            See how brands and enterprises have leveraged Novexa to gain a
            competitive edge, from AI-driven insights to tangible R&amp;D prototypes.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-24">
            {caseStudies.map((study, index) => {
              const beforeImage = PlaceHolderImages.find(img => img.id === study.beforeImageId);
              const afterImage = PlaceHolderImages.find(img => img.id === study.afterImageId);
              const prototypeImage = PlaceHolderImages.find(img => img.id === study.prototypeImageId);

              return (
                <Card key={study.title} className="overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="p-8">
                      <CardHeader className="p-0 mb-6">
                        <p className="text-sm font-semibold text-primary">
                          {study.client}
                        </p>
                        <CardTitle className="text-3xl">
                          {study.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 space-y-6">
                        <div>
                          <h3 className="font-semibold font-headline">The Challenge</h3>
                          <p className="text-muted-foreground mt-1">{study.challenge}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold font-headline">The Novexa Solution</h3>
                          <p className="text-muted-foreground mt-1">{study.solution}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold font-headline">Key Results</h3>
                             <ul className="mt-2 space-y-2">
                                {study.results.map((result) => (
                                    <li key={result} className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="text-muted-foreground">{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                      </CardContent>
                    </div>

                    <div className="bg-muted p-8 space-y-4">
                        <h3 className="font-semibold font-headline text-center">Visual Evidence</h3>
                         <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-center mb-2">Before</p>
                                {beforeImage && <Image src={beforeImage.imageUrl} alt="Before" width={600} height={400} className="rounded-lg border" data-ai-hint={beforeImage.imageHint} />}
                            </div>
                             <div>
                                <p className="text-sm text-center mb-2">After</p>
                                {afterImage && <Image src={afterImage.imageUrl} alt="After" width={600} height={400} className="rounded-lg border" data-ai-hint={afterImage.imageHint} />}
                            </div>
                         </div>
                         <div className="pt-4">
                            <p className="text-sm text-center mb-2">Working Prototype</p>
                            {prototypeImage && <Image src={prototypeImage.imageUrl} alt="Prototype" width={600} height={400} className="rounded-lg border" data-ai-hint={prototypeImage.imageHint} />}
                         </div>
                    </div>

                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold font-headline">
              Have a challenge for us?
            </h2>
            <p className="mt-2 max-w-xl mx-auto">
              Whether you need smarter business insights or a complex R&amp;D
              problem solved, our platform is ready.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/rd-marketplace">Submit an R&amp;D Problem</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-primary border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                 <Link href="/contact">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
