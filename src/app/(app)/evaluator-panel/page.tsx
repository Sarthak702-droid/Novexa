import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, XCircle, Percent, Code, Bot } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function EvaluatorPanelPage() {
  return (
    <div className="flex-1 space-y-4 p-4 sm:p-8 pt-6">
      <h1 className="text-3xl font-bold tracking-tight font-headline">
        Evaluator Panel
      </h1>
      <p className="text-muted-foreground">
        Review solver submissions with AI-assisted analysis.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Submission: Advanced Robotic Sorter Logic</CardTitle>
          <CardDescription>
            Submitted by: Solver_789 (Gold Level)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">AI Filter Outcomes</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Plagiarism
                  </CardTitle>
                  <Percent className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7%</div>
                  <Progress value={7} className="h-2 mt-2" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Code Similarity
                  </CardTitle>
                  <Code className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12%</div>
                   <Progress value={12} className="h-2 mt-2" />
                </CardContent>
              </Card>
               <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    AI Content
                  </CardTitle>
                  <Bot className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3%</div>
                   <Progress value={3} className="h-2 mt-2" />
                </CardContent>
              </Card>
               <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Overall Score
                  </CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">94/100</div>
                   <p className="text-xs text-muted-foreground">Excellent</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="font-semibold mb-4">Evaluation Sheet</h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                    <span>Code Quality &amp; Readability</span>
                    <Badge variant="outline" className="text-green-600 border-green-300">Excellent</Badge>
                </div>
                <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                    <span>Performance &amp; Efficiency</span>
                     <Badge variant="outline" className="text-green-600 border-green-300">Excellent</Badge>
                </div>
                 <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                    <span>Documentation</span>
                     <Badge variant="outline" className="text-yellow-600 border-yellow-400">Good</Badge>
                </div>
                 <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                    <span>Prototype Viability</span>
                     <Badge variant="outline" className="text-green-600 border-green-300">High</Badge>
                </div>
            </div>
          </div>

          <Separator />

          <div className="flex justify-end space-x-2">
            <Button variant="destructive">
              <XCircle className="mr-2 h-4 w-4" /> Reject Submission
            </Button>
            <Button variant="outline">Request Revisions</Button>
            <Button>
              <CheckCircle className="mr-2 h-4 w-4" /> Approve &amp; Release Milestone
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
