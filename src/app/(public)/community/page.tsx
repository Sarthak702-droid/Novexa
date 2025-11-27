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
import { Trophy, Calendar, Database, Award, Users } from 'lucide-react';
import Link from 'next/link';

const competitions = [
  {
    title: 'AI Supply Chain Hackathon',
    status: 'Live',
    prize: '₹50,000',
    participants: 128,
    endsIn: '14 days',
  },
  {
    title: 'Retail Demand Forecasting Challenge',
    status: 'Upcoming',
    prize: '₹30,000',
    participants: 0,
    startsIn: '2 weeks',
  },
  {
    title: 'IoT Predictive Maintenance Model',
    status: 'Completed',
    prize: '₹75,000',
    participants: 96,
    winner: 'Team_Innovate',
  },
];

const leaderboard = [
    { rank: 1, name: 'Solver_AI_Pro', level: 'Expert', points: 12500, badge: '🥇' },
    { rank: 2, name: 'CodeWizard_007', level: 'Gold', points: 11200, badge: '🥈' },
    { rank: 3, name: 'DataQueen', level: 'Gold', points: 10500, badge: '🥉' },
    { rank: 4, name: 'ProtoTyper', level: 'Silver', points: 8900, badge: '' },
    { rank: 5, name: 'ML_Maverick', level: 'Silver', points: 8250, badge: '' },
]

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
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            
            <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">
              Innovate. Compete. Grow.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Our community is the heart of InnoGrid. Join talented solvers
              from around the world, participate in high-stakes challenges, and
              build the future of technology.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <Link href="/solver-portal">Become a Solver</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="competitions" className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center font-headline">
            Live &amp; Upcoming Competitions
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {competitions.map((comp) => (
              <Card key={comp.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{comp.title}</CardTitle>
                    <Badge variant={comp.status === 'Live' ? 'destructive' : 'secondary'}>
                      {comp.status}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2 pt-2">
                    <Trophy className="w-4 h-4 text-amber-500" />
                    <span>Prize Pool: {comp.prize}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {comp.participants} Participants</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {comp.status === 'Live' ? `${comp.endsIn} left` : `Starts in ${comp.startsIn}`}</span>
                  </div>
                  <Button className="w-full mt-6" disabled={comp.status !== 'Live'}>
                    {comp.status === 'Live' ? 'Enter Competition' : 'Register Interest'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold font-headline">Community Leaderboard</h2>
            <p className="text-muted-foreground mt-2">Top solvers of the month. Climb the ranks by winning challenges and earning points.</p>
             <div className="mt-8">
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                  {leaderboard.map(solver => (
                    <div key={solver.rank} className="flex items-center p-4">
                      <div className="text-lg font-bold w-12 text-center">{solver.badge || solver.rank}</div>
                      <div className="flex-1">
                        <p className="font-semibold">{solver.name}</p>
                        <p className="text-sm text-muted-foreground">{solver.level} Level</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{solver.points.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">Points</p>
                      </div>
                    </div>
                  ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="lg:col-span-3">
             <h2 className="text-3xl font-bold font-headline">Community Resources</h2>
             <p className="text-muted-foreground mt-2">Everything you need to succeed as a solver.</p>
             <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <Award className="w-8 h-8 text-primary mb-2" />
                    <CardTitle>Badges &amp; Certificates</CardTitle>
                    <CardDescription>Earn verifiable credentials for every challenge you win to showcase on your portfolio.</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Database className="w-8 h-8 text-primary mb-2" />
                    <CardTitle>Dataset Library</CardTitle>
                    <CardDescription>Access a rich library of redacted and synthetic datasets to practice and hone your skills.</CardDescription>
                  </CardHeader>
                </Card>
             </div>
          </div>
        </div>
      </section>

    </>
  );
}
