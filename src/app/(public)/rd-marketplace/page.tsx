import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  FileCode,
  FlaskConical,
  Clock,
  Zap,
  ShieldCheck,
  Package,
  ArrowRight,
  Users,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const benefits = [
  {
    icon: Package,
    title: 'Functional Prototype',
    description:
      'Receive a working prototype that demonstrates the core solution to your problem.',
  },
  {
    icon: FileCode,
    title: 'Code & IP Transfer',
    description:
      'Get the full source code, documentation, and IP rights for the winning solution.',
  },
  {
    icon: ShieldCheck,
    title: 'Expert Evaluation Report',
    description:
      'A detailed report from a domain expert validating the prototype’s effectiveness and viability.',
  },
];

const exampleProblems = [
  {
    title: 'Robotics & Automation',
    description:
      'Automate repetitive tasks, from sorting products with computer vision to robotic assembly.',
    imageId: 'rd-problem-robotics',
  },
  {
    title: 'Machine Learning Models',
    description:
      'Develop custom ML models for forecasting, anomaly detection, or natural language processing.',
    imageId: 'rd-problem-ml',
  },
  {
    title: 'Textile Automation',
    description:
      'Create solutions for automated defect detection, color matching, or material handling in textile manufacturing.',
    imageId: 'rd-problem-textile',
  },
];

export default function RDMarketplacePage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">
                The R&amp;D Marketplace for Hard Problems
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Turn your toughest innovation challenges into tangible
                prototypes. Access a global network of verified engineers and
                scientists who compete to build your solution, faster and at a
                fraction of the cost.
              </p>
              <div className="mt-8 flex gap-4">
                <Button size="lg" variant="accent" asChild>
                  <Link href="/onboarding/enterprise">Submit Your Challenge</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/how-it-works">How It Works</Link>
                </Button>
              </div>
            </div>
            <div className="bg-muted p-4 rounded-lg">
                <Image
                    src="https://picsum.photos/seed/rd-hero/800/600"
                    alt="R&D Marketplace Hero"
                    width={800}
                    height={600}
                    className="rounded-md"
                    data-ai-hint="futuristic laboratory"
                />
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">
              A Simple, Powerful Process
            </h2>
             <Link href="/how-it-works">
                <Button variant="link" className="mt-2 text-lg">
                  See the full 6-step flow <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mb-4">
                <FlaskConical className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold font-headline">1. Post a Problem</h3>
              <p className="text-muted-foreground mt-2">
                Define your challenge, and our AI helps scope it.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold font-headline">2. Get Solutions</h3>
              <p className="text-muted-foreground mt-2">
                Top solvers compete to build the best prototype.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mb-4">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold font-headline">3. Receive Prototype</h3>
              <p className="text-muted-foreground mt-2">
                You get the code, the IP, and a working model.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="deliverables" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">
              What Your Company Gets
            </h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              We deliver a complete package, not just an idea. Every winning
              submission includes:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cost-model" className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold font-headline">
                Faster &amp; More Affordable R&amp;D
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our crowdsourced model fundamentally changes the economics of
                innovation. By parallelizing the effort and eliminating hiring
                overheads, we deliver results at a fraction of the traditional
                cost and time.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg">
                  <Clock className="w-8 h-8 text-primary mb-2" />
                  <p className="text-3xl font-bold">7–30 Days</p>
                  <p className="text-muted-foreground">
                    Typical prototype delivery timeline, depending on complexity.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <Zap className="w-8 h-8 text-primary mb-2" />
                  <p className="text-3xl font-bold">~70% Cheaper</p>
                  <p className="text-muted-foreground">
                    Than typical in-house R&amp;D project costs.
                  </p>
                </div>
              </div>
            </div>
            <div>
                <h3 className="text-xl font-bold font-headline mb-4">Example Problems We Solve</h3>
                <div className="space-y-4">
                    {exampleProblems.map(problem => {
                        const image = PlaceHolderImages.find(img => img.id === problem.imageId);
                        return (
                            <Card key={problem.title} className="hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 p-4">
                                    {image && <Image src={image.imageUrl} alt={problem.title} width={100} height={75} className="rounded-md object-cover" data-ai-hint={image.imageHint} />}
                                    <div>
                                        <h4 className="font-semibold">{problem.title}</h4>
                                        <p className="text-sm text-muted-foreground">{problem.description}</p>
                                    </div>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
