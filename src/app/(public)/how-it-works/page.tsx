import { Button } from '@/components/ui/button';
import {
  FilePlus,
  Scale,
  Users,
  Lightbulb,
  CheckCircle,
  Package,
} from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    icon: FilePlus,
    title: '1. Post Your Challenge',
    description:
      "Submit a detailed description of your R&D problem. Include objectives, constraints, and any available data. Our platform helps you structure the problem for clarity.",
  },
  {
    icon: Scale,
    title: '2. Get Cost & Timeline Estimates',
    description:
      "Our AI analyzes your problem's complexity to provide an estimated cost and timeline. You set the final prize money and timeline before the challenge goes live.",
  },
  {
    icon: Users,
    title: '3. Attract Global Talent',
    description:
      "Your challenge is broadcast to our vetted network of thousands of students, engineers, and researchers. Solvers start working on your problem immediately.",
  },
  {
    icon: Lightbulb,
    title: '4. Receive Multiple Solutions',
    description:
      "Instead of one internal team's idea, you get multiple, diverse prototype solutions. Our AI pre-filters submissions for plagiarism and quality.",
  },
  {
    icon: CheckCircle,
    title: '5. Expert Evaluation',
    description:
      "Domain experts from your industry review the top submissions. They validate the prototypes against your success criteria, providing a detailed evaluation report.",
  },
  {
    icon: Package,
    title: '6. Get Your Deliverables',
    description:
      "You receive the winning prototype, all associated code, documentation, and full IP rights are transferred to you. Launch your product faster and cheaper.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">
              From Problem to Prototype in 6 Steps
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Our streamlined process is designed for speed, efficiency, and
              results. Turn complex R&D challenges into market-ready prototypes
              with InnoGrid’s crowdsourcing engine.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-6 top-0 bottom-0 w-0.5 bg-border -z-10 md:left-1/2 md:-translate-x-1/2"
                aria-hidden="true"
              ></div>

              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative flex items-start group"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-background border-2 border-border shadow-md group-hover:bg-primary group-hover:border-primary transition-colors">
                    <step.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="ml-8 pb-16">
                    <h3 className="text-2xl font-bold font-headline">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold font-headline">
              Ready to Solve Your Toughest R&amp;D Challenge?
            </h2>
            <p className="mt-2 max-w-xl mx-auto">
              Post your problem today and tap into a global network of innovators.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/rd-marketplace">Submit a Problem</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-primary border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                 <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
