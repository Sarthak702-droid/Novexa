import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calendar, Database, Award, Users, TestTube2, Sprout, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const groundTruthProjects = [
  {
    title: 'Mandi Price Watch',
    description: 'Crowdsourcing local market prices to create a transparent, real-time inflation index for agricultural goods.',
    imageId: 'beta-labs-mandi',
  },
  {
    title: 'The Weaver Census',
    description: 'Mapping handloom weaver communities to preserve heritage crafts and connect them with global markets.',
    imageId: 'beta-labs-weaver',
  },
];

const solverArenaChallenges = [
  {
    title: 'Reduce Fabric Cutting Waste by 15%',
    prize: '₹2,50,000 + Contract',
    participants: 128,
    endsIn: '21 days',
    status: 'Live',
    industry: 'Textile',
  },
  {
    title: 'Low-Cost Cold Storage Sensor',
    prize: '₹1,00,000',
    participants: 94,
    endsIn: '45 days',
    status: 'Live',
    industry: 'Agriculture',
  },
];


export default function CommunityPage() {
  return (
    <>
      <section className="relative py-24 md:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <div className="container relative text-center">
             <div className="flex justify-center mb-4">
                <TestTube2 className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">
              InnoGrid Beta Labs
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Our forward-looking engine for open innovation, data acquisition, and talent engagement. This is where the future is built, together.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <Link href="/solver-portal">Become a Solver</Link>
            </Button>
        </div>
      </section>

      <section id="ground-truth" className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">
              Ground Truth Projects
            </h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              A volunteer network solving real-world problems by crowdsourcing authentic, local market data. These projects build unique datasets that power our entire ecosystem.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {groundTruthProjects.map((project) => {
              const image = PlaceHolderImages.find(img => img.id === project.imageId);
              return (
                <Card key={project.title} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    {image && <Image src={image.imageUrl} alt={project.title} width={800} height={500} className="rounded-t-lg object-cover aspect-[16/10]" data-ai-hint={image.imageHint} />}
                  </CardContent>
                  <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <Button variant="secondary">
                          <Sprout className="mr-2 h-4 w-4" /> Contribute
                      </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      <section id="solver-arena" className="py-16 md:py-24">
        <div className="container">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">
              Solver Arena – Applied R&D Challenges
            </h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Where industry problems meet global talent. We structure complex R&D needs into high-stakes competitions with cash prizes and contracts.
            </p>
          </div>
          <div className="space-y-4">
            {solverArenaChallenges.map(challenge => (
                <Card key={challenge.title} className="transition-all hover:shadow-md hover:-translate-y-1">
                    <div className="p-4 grid md:grid-cols-4 lg:grid-cols-5 items-center gap-4">
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-2">
                                <Badge variant={challenge.status === 'Live' ? 'destructive' : 'secondary'}>
                                {challenge.status}
                                </Badge>
                                <Badge variant="outline">{challenge.industry}</Badge>
                            </div>
                            <p className="font-semibold mt-2">{challenge.title}</p>
                        </div>
                        <div className="text-sm">
                            <p className="text-muted-foreground">Prize Pool</p>
                            <p className="font-bold text-primary">{challenge.prize}</p>
                        </div>
                         <div className="text-sm">
                            <p className="text-muted-foreground">Participants</p>
                            <p className="font-semibold">{challenge.participants}</p>
                        </div>
                        <div className="text-right">
                           <Button asChild>
                               <Link href="#">View Challenge <ArrowRight className="ml-2 w-4 h-4" /></Link>
                           </Button>
                        </div>
                    </div>
                </Card>
            ))}
          </div>
           <div className="text-center mt-8">
               <Button variant="outline" asChild>
                   <Link href="#">See All Challenges</Link>
               </Button>
           </div>
        </div>
      </section>
    </>
  );
}
