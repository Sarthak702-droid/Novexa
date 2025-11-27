import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function EnterpriseOnboardingPage() {
  return (
    <div className="flex-1 space-y-4 p-4 sm:p-8 pt-6">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="font-headline">
            Submit an R&amp;D Challenge
          </CardTitle>
          <CardDescription>
            Describe your problem and let our network of solvers build a
            prototype for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="problem-statement">Problem Statement</Label>
              <Textarea
                id="problem-statement"
                rows={6}
                placeholder="Describe the problem you're trying to solve in detail. What are the objectives, constraints, and desired outcomes?"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="data-availability">Data Availability</Label>
              <Textarea
                id="data-availability"
                placeholder="Describe the data you have available. What is the size, format, and quality? Is it anonymized?"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="benchmarks">Benchmark Examples</Label>
              <Textarea
                id="benchmarks"
                placeholder="Are there any existing solutions, research papers, or benchmarks for similar problems? Please provide links or descriptions."
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="ip-rules">IP Rules</Label>
                <Select>
                  <SelectTrigger id="ip-rules">
                    <SelectValue placeholder="Select IP transfer model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-transfer">
                      Full IP Transfer to Company
                    </SelectItem>
                    <SelectItem value="shared-ownership">
                      Shared Ownership
                    </SelectItem>
                    <SelectItem value="custom">Custom Agreement</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <Select>
                  <SelectTrigger id="budget">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small: ₹10k–₹40k</SelectItem>
                    <SelectItem value="medium">Medium: ₹40k–₹1.5L</SelectItem>
                    <SelectItem value="large">Large: Custom Pricing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            

            <div className="flex justify-end">
              <Button type="submit">Submit Challenge</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
