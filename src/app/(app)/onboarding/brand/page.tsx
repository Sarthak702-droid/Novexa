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
import { Upload } from 'lucide-react';

export default function BrandOnboardingPage() {
  return (
    <div className="flex-1 space-y-4 p-4 sm:p-8 pt-6">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="font-headline">
            Brand Onboarding
          </CardTitle>
          <CardDescription>
            Tell us about your brand to get started with our BI templates.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="sector">Sector/Industry</Label>
              <Select>
                <SelectTrigger id="sector">
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="textile">Textile &amp; Apparel</SelectItem>
                  <SelectItem value="electronics">
                    Electronics &amp; Accessories
                  </SelectItem>
                  <SelectItem value="fmcg">FMCG</SelectItem>
                  <SelectItem value="lifestyle">Lifestyle &amp; Home</SelectItem>
                  <SelectItem value="cosmetic">Cosmetics</SelectItem>
                  <SelectItem value="d2c">Other D2C</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="data-upload">Upload Data Templates</Label>
              <div className="flex items-center justify-center w-full">
                <Label
                  htmlFor="data-upload"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-muted"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                      XLS, CSV, or other data files
                    </p>
                  </div>
                  <Input id="data-upload" type="file" className="hidden" />
                </Label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="insights">Required Insights</Label>
              <Textarea
                id="insights"
                placeholder="e.g., understand customer churn, optimize pricing for product X, forecast sales for next quarter..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range (Monthly)</Label>
                 <Select>
                  <SelectTrigger id="budget">
                    <SelectValue placeholder="Select your budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="499">₹499/mo (Student/Small)</SelectItem>
                    <SelectItem value="1499">₹1499/mo (Growth)</SelectItem>
                    <SelectItem value="4999">₹4999/mo (SME)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline">Expected Timeline</Label>
                <Input
                  id="timeline"
                  placeholder="e.g., Insights needed by end of month"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="submit">Submit for Onboarding</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
