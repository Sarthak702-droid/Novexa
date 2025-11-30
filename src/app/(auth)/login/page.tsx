import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Particles from '@/components/ui/Particles';

export default function LoginPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-muted relative">
       <div className="absolute inset-0 z-0">
          <Particles
            particleColors={['#29ABE2', '#F9A825']}
            particleCount={100}
            particleSpread={15}
            speed={0.1}
            particleBaseSize={20}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
      </div>
      <Card className="w-[350px] z-10 bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="font-headline text-2xl font-bold">
              InnoGrid
            </span>
          </Link>
          <h1 className="text-3xl font-bold font-headline">Login</h1>
          <p className="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="login-as">Who is logging in</Label>
              <Select>
                <SelectTrigger id="login-as">
                  <SelectValue placeholder="Select user type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="brand">Brand</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                  <SelectItem value="solver">Solver</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="interest">Area of Interest</Label>
              <Select>
                <SelectTrigger id="interest">
                  <SelectValue placeholder="Select area of interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rnd">RnD</SelectItem>
                  <SelectItem value="analysis">Analysis</SelectItem>
                  <SelectItem value="deep-research">Deep research</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" asChild>
              <Link href="/dashboard">Login</Link>
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
