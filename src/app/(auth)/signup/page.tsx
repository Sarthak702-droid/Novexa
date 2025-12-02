'use client';

import { useState } from 'react';
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function SignupPage() {
  const [userType, setUserType] = useState('brand');
  const [interest, setInterest] = useState('');

  const getRedirectUrl = () => {
    if (userType === 'brand' && interest === 'rnd') {
      return '/onboarding/enterprise';
    }
    return '/dashboard';
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="font-headline text-2xl font-bold">Novexa</span>
          </Link>
          <CardTitle className="text-2xl font-headline">Sign Up</CardTitle>
          <CardDescription>
            Choose your account type and start your journey with us.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label>I am a...</Label>
              <RadioGroup
                defaultValue={userType}
                onValueChange={setUserType}
                className="grid grid-cols-2 gap-4"
              >
                <div>
                  <RadioGroupItem
                    value="brand"
                    id="r1"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="r1"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    Brand/Enterprise
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value="solver"
                    id="r2"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="r2"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    Solver
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {userType === 'brand' && (
              <div className="grid gap-2">
                <Label htmlFor="interest">Area of Interest</Label>
                <Select onValueChange={setInterest} value={interest}>
                  <SelectTrigger id="interest">
                    <SelectValue placeholder="Select area of interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rnd">R&amp;D Challenge</SelectItem>
                    <SelectItem value="analysis">BI &amp; Analytics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
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
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full" asChild>
              <Link href={getRedirectUrl()}>Create an account</Link>
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
