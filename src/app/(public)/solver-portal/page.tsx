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
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  BadgeDollarSign,
  BarChart,
  ShieldAlert,
  Trophy,
  Check,
  ArrowRight,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: BarChart,
    title: 'Skill-Based Levels',
    description:
      'Start at Bronze and prove your skills to advance to Silver, Gold, and Expert levels, unlocking higher-value challenges.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Substantial Earnings',
    description:
      'Earn significant rewards for solving real-world problems. Payments are secured via an escrow system.',
  },
  {
    icon: Trophy,
    title: 'Build Your Portfolio',
    description:
      'Every win adds a verified project and badges to your public portfolio, showcasing your talent to the world.',
  },
  {
    icon: ShieldAlert,
    title: 'Strict Anti-Cheating Rules',
    description:
      'Our platform uses AI to detect plagiarism and code similarity, ensuring a fair and competitive environment for all solvers.',
  },
];

const liveChallenges = [
    { title: 'Optimize Warehouse Routing Algorithm', prize: '₹80,000' },
    { title: 'Image Recognition for Retail Shelves', prize: '₹1,20,000' },
    { title: 'Sentiment Analysis Model for Hindi Reviews', prize: '₹45,000' },
]

export default function SolverPortalPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'solver-hero');
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">
                Solve the World's Toughest Problems. Get Paid for It.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Join an elite global community of engineers, data scientists,
                and researchers. Apply your skills to fascinating R&amp;D
                challenges from leading companies, build your portfolio, and
                earn significant rewards.
              </p>
              <Button size="lg" variant="accent" className="mt-8" asChild>
                <Link href="/signup">Apply to be a Solver</Link>
              </Button>
            </div>
            {heroImage && (
              <div className="bg-muted p-4 rounded-lg">
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={1200}
                  height={600}
                  className="rounded-md"
                  data-ai-hint={heroImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="pt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid lg:grid-cols-2 gap-12">
            <div>
                <h2 className="text-3xl font-bold font-headline">Live Challenges</h2>
                <p className="text-muted-foreground mt-2">Here's a sample of what's active right now.</p>
                <div className="mt-8 space-y-4">
                    {liveChallenges.map(challenge => (
                        <Card key={challenge.title} className="transition-all hover:shadow-md hover:-translate-y-1">
                            <CardContent className="p-4 flex justify-between items-center">
                                <div>
                                    <p className="font-semibold">{challenge.title}</p>
                                    <p className="text-sm text-muted-foreground">Prize Pool: <span className="font-bold text-primary">{challenge.prize}</span></p>
                                </div>
                                <Button variant="outline" size="sm">View <ArrowRight className="ml-2 w-4 h-4" /></Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                 <Button variant="link" className="mt-4 px-0" asChild>
                    <Link href="/community">See All Competitions <ArrowRight className="w-4 h-4 ml-2" /></Link>
                 </Button>
            </div>
             <div>
                <h2 className="text-3xl font-bold font-headline">How to Succeed</h2>
                <p className="text-muted-foreground mt-2">Follow these steps to climb the leaderboard.</p>
                 <ul className="mt-8 space-y-6">
                    <li className="flex items-start gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">1</div>
                        <div>
                            <h4 className="font-semibold">Pass the Skill Tests</h4>
                            <p className="text-muted-foreground">Our initial assessment verifies your fundamental knowledge in your chosen domains.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">2</div>
                        <div>
                            <h4 className="font-semibold">Submit High-Quality Solutions</h4>
                            <p className="text-muted-foreground">Deliver well-documented, efficient, and innovative solutions to challenges.</p>
                        </div>
                    </li>
                     <li className="flex items-start gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">3</div>
                        <div>
                            <h4 className="font-semibold">Win Challenges &amp; Earn Badges</h4>
                            <p className="text-muted-foreground">Winning not only earns you money but also reputation points and badges, helping you level up.</p>
                        </div>
                    </li>
                 </ul>
            </div>
        </div>
      </section>
    </>
  );
}
