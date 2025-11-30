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
  TrendingUp,
  FlaskConical,
  MessageSquare,
  Globe,
  ArrowRight,
  Users,
  TestTube,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aiAgents = [
  {
    icon: TrendingUp,
    title: 'The Trend Spotter',
    description:
      'Predicts color, fabric, and feature trends 3 months in advance by scanning global social media, Pantone, and viral keywords.',
    outcome: 'Predict Demand & Reduce Dead Stock',
    imageId: 'ai-hub-trends',
  },
  {
    icon: MessageSquare,
    title: 'Virtual Focus Group',
    description:
      'Critiques your product ideas using 100 virtual personas (Students, Housewives, Geeks) to provide instant, diverse feedback.',
    outcome: 'Save R&D Costs & Time-to-Market',
    imageId: 'ai-hub-focus-group',
  },
  {
    icon: Globe,
    title: 'Supply Chain Sentinel',
    description:
      'Monitors global news and geopolitics for risks like chip shortages or port strikes, delivering real-time warnings.',
    outcome: 'Avoid Delays & Secure Pricing',
    imageId: 'ai-hub-supply-chain',
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
                The AI Hub: Your Virtual Workforce
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Go beyond analytics. Our autonomous agents replace manual analysis with proactive, strategic execution. This is your dedicated team of virtual analysts, working 24/7.
              </p>
              <div className="mt-8 flex gap-4">
                <Button size="lg" variant="accent" asChild>
                  <Link href="/onboarding/enterprise">Request a Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="bg-muted p-4 rounded-lg">
                <Image
                    src="https://picsum.photos/seed/rd-hero/800/600"
                    alt="AI Hub Hero"
                    width={800}
                    height={600}
                    className="rounded-md"
                    data-ai-hint="futuristic command center"
                />
            </div>
          </div>
        </div>
      </section>

      <section id="ai-agents" className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">
              Autonomous Strategic Agents
            </h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              These are not just tools; they are proactive team members delivering quantifiable business outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiAgents.map((agent) => {
                 const image = PlaceHolderImages.find(img => img.id === agent.imageId);
                return (
                 <Card key={agent.title} className="flex flex-col">
                    <CardHeader>
                         <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground mb-4">
                            <agent.icon className="w-6 h-6" />
                        </div>
                        <CardTitle>{agent.title}</CardTitle>
                        <CardDescription>{agent.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                         {image && <Image src={image.imageUrl} alt={agent.title} width={600} height={400} className="rounded-md border object-cover aspect-video" data-ai-hint={image.imageHint} />}
                    </CardContent>
                     <CardContent>
                        <p className="text-sm font-semibold text-primary">Outcome: <span className="text-foreground font-medium">{agent.outcome}</span></p>
                    </CardContent>
                </Card>
            )})}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold font-headline">
              Need Something More?
            </h2>
            <p className="mt-2 max-w-xl mx-auto">
              For truly novel challenges, our Beta Labs connects you with a global community of innovators to build custom solutions from the ground up.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/community">Explore Beta Labs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
