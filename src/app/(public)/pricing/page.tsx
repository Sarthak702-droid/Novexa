import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const biTiers = [
  {
    name: 'Student / Small Brand',
    price: '₹499',
    description: 'For individuals and early-stage brands getting started with data.',
    features: [
      'Access to 3 templates/month',
      '1 user seat',
      'Basic analytics dashboard',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth Brands',
    price: '₹1499',
    isPopular: true,
    description: 'For growing businesses ready to scale with deeper insights.',
    features: [
      'Access to 10 templates/month',
      '3 user seats',
      'Advanced analytics & dashboards',
      'Competitor price mapping',
      'Priority email support',
    ],
    cta: 'Choose Growth',
  },
  {
    name: 'SMEs',
    price: '₹4999',
    description: 'The complete toolkit for established businesses that need unlimited power.',
    features: [
      'Unlimited templates access',
      '10 user seats',
      'All BI features included',
      'Launch feasibility simulator',
      'Dedicated support channel',
    ],
    cta: 'Go Pro',
  },
];

const rdTiers = [
    {
        name: 'Small Challenge',
        price: '₹10k – ₹40k',
        description: 'Ideal for well-defined problems, feasibility studies, or algorithmic tasks.',
        examples: ['Data conversion script', 'Simple ML model', 'Component design']
    },
     {
        name: 'Medium Challenge',
        price: '₹40k – ₹1.5L',
        description: 'For complex problems requiring system integration or a functional prototype.',
        examples: ['Basic robotic arm task', 'Custom BI dashboard', 'IoT sensor integration']
    },
     {
        name: 'Large Automation Project',
        price: 'Custom',
        description: 'For end-to-end automation, complex robotics, or large-scale software projects.',
        examples: ['Full factory automation module', 'Enterprise-grade ML pipeline', 'Custom hardware/software solution']
    }
];

export default function PricingPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">
            Simple, Honest Pricing
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
            Choose the plan that’s right for you. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container">
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            BI SaaS Pricing
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {biTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`flex flex-col ${
                  tier.isPopular ? 'border-primary shadow-lg' : ''
                }`}
              >
                {tier.isPopular && (
                  <div className="py-2 px-4 bg-primary text-primary-foreground text-sm font-semibold text-center rounded-t-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader className="items-center text-center">
                  <CardTitle>{tier.name}</CardTitle>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={tier.isPopular ? 'default' : 'outline'}
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section className="pb-16 md:pb-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            R&amp;D Marketplace Pricing
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {rdTiers.map(tier => (
                <Card key={tier.name} className="flex flex-col">
                    <CardHeader>
                        <CardTitle>{tier.name}</CardTitle>
                        <p className="text-3xl font-bold pt-2">{tier.price}</p>
                        <CardDescription>{tier.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <p className="font-semibold text-sm mb-2">Use cases:</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {tier.examples.map(ex => (
                                <li key={ex} className="flex items-start">
                                    <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-primary" />
                                    <span>{ex}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button variant="accent" className="w-full" asChild>
                            <Link href="/onboarding/enterprise">
                                {tier.name === 'Large Automation Project' ? 'Contact Sales' : 'Submit Challenge'}
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
