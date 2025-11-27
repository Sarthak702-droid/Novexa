import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ArrowRight,
  BrainCircuit,
  Users,
  BookCopy,
  Database,
  BadgeDollarSign,
  Scaling,
  Rocket,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import LiquidEther from '@/components/ui/liquid-ether';
import BlurText from '@/components/ui/BlurText';

const whyFeatures = [
  {
    icon: BookCopy,
    title: 'Templates Ecosystem',
    description: 'Instantly access ML-powered BI templates for your specific industry needs.',
  },
  {
    icon: Users,
    title: 'Vetted Solvers & Experts',
    description: 'Tap into a global network of top-tier engineers, researchers, and domain experts.',
  },
  {
    icon: BrainCircuit,
    title: 'BI + R&D Integrated',
    description: 'Seamlessly move from data insights to creating custom R&D prototypes.',
  },
  {
    icon: Database,
    title: 'Proprietary Datasets',
    description: 'Leverage unique, redacted datasets for robust model training and benchmarking.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Lowest-Cost Prototypes',
    description: 'Get working prototypes at a fraction of the cost of in-house development.',
  },
  {
    icon: Scaling,
    title: 'Scalable Intelligence',
    description: 'From simple analytics to complex automation, our platform grows with you.',
  },
];

export default function HomePage() {
  const heroBiImage = PlaceHolderImages.find((img) => img.id === 'hero-bi');
  const heroRdImage = PlaceHolderImages.find((img) => img.id === 'hero-rd');

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <LiquidEther
              colors={['#29ABE2', '#F9A825', '#B19EEF']}
              mouseForce={20}
              cursorSize={100}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
          >
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
          </div>
          <div className="container relative">
            <div className="mx-auto max-w-4xl text-center">
              <BlurText
                text="AI Product Intelligence + R&D Crowdsourcing Platform"
                delay={100}
                animateBy="words"
                direction="top"
                className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground"
              />
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 text-lg text-muted-foreground">
                <p className="font-semibold">For small brands → better decisions</p>
                <p className="font-semibold">For enterprises → faster, cheaper prototypes</p>
              </div>
              <div className="mt-10 flex items-center justify-center gap-4">
                 <Button size="lg" asChild>
                    <Link href="/templates">Try BI Templates</Link>
                 </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/rd-marketplace">Submit R&D Problem</Link>
                 </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Engine Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-10 md:grid-cols-2">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="w-6 h-6 text-primary" />
                    <span>BI for Small Brands</span>
                  </CardTitle>
                  <CardDescription>
                    Unlock insights from your sales, marketing, and customer data with AI-powered dashboards and templates.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {heroBiImage && (
                    <Image
                      src={heroBiImage.imageUrl}
                      alt={heroBiImage.description}
                      width={800}
                      height={600}
                      className="rounded-lg object-cover"
                      data-ai-hint={heroBiImage.imageHint}
                    />
                  )}
                  <Button asChild variant="link" className="mt-4 px-0">
                    <Link href="/bi-platform">Explore BI Features <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BrainCircuit className="w-6 h-6 text-primary" />
                    <span>R&D for Enterprises</span>
                  </CardTitle>
                  <CardDescription>
                    Solve complex technical challenges by crowdsourcing solutions from a global talent pool of engineers and experts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {heroRdImage && (
                    <Image
                      src={heroRdImage.imageUrl}
                      alt={heroRdImage.description}
                      width={800}
                      height={600}
                      className="rounded-lg object-cover"
                      data-ai-hint={heroRdImage.imageHint}
                    />
                  )}
                   <Button asChild variant="link" className="mt-4 px-0">
                    <Link href="/rd-marketplace">See R&D Marketplace <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why InnoGrid Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                Your Unfair Advantage
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                InnoGrid isn't just another tool. It's an integrated ecosystem that provides an unmatched competitive edge.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyFeatures.map((feature) => (
                <Card key={feature.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

         {/* Solver CTA Section */}
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="relative overflow-hidden rounded-lg bg-primary/90 p-8 text-center md:p-12">
                     <div aria-hidden="true" className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                    <div className="relative">
                        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                           Join the Grid. Solve Challenges. Get Paid.
                        </h2>
                        <p className="mt-4 text-lg text-primary-foreground/80">
                            Are you an engineer, student, or researcher? Apply your skills to real-world problems and earn rewards.
                        </p>
                        <Button asChild size="lg" variant="secondary" className="mt-8">
                            <Link href="/solver-portal">Become a Solver <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
