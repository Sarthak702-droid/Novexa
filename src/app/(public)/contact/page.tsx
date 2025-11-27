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
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Building, Users } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a question, a project idea, or want to see InnoGrid AI in
              action? We’d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Book a Demo or Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="e.g., Demo Request for BI Platform" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your needs..."
                    />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold font-headline">Contact Information</h3>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>contact@innogrid.ai</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 123 456 7890</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold font-headline">Looking for something else?</h3>
              <Card className="bg-muted/50">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Building className="w-8 h-8 text-primary" />
                    <div>
                        <CardTitle className="text-lg">For Brands &amp; Enterprises</CardTitle>
                        <CardDescription>Ready to submit a problem?</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Submit an R&amp;D Challenge</Button>
                  </CardContent>
              </Card>
              <Card className="bg-muted/50">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Users className="w-8 h-8 text-primary" />
                    <div>
                        <CardTitle className="text-lg">For Solvers</CardTitle>
                        <CardDescription>Want to join our network?</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Join the Solver Portal</Button>
                  </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
