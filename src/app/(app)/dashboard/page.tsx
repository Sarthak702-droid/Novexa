'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  FileText,
  Rocket,
  Lightbulb,
  BarChart,
  Eye,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.2 },
  };

  return (
    <div className="flex-1 space-y-4 p-4 sm:p-8 pt-6">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className="flex items-center justify-between space-y-2"
      >
        <motion.h1
          variants={cardVariants}
          className="text-3xl font-bold tracking-tight font-headline"
        >
          Unified Dashboard
        </motion.h1>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={cardVariants} whileHover={hoverEffect}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                BI Analytics
              </CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={cardVariants} whileHover={hoverEffect}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active R&amp;D Challenges
              </CardTitle>
              <Lightbulb className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                1 recently completed
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={cardVariants} whileHover={hoverEffect}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Solver Submissions
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+25</div>
              <p className="text-xs text-muted-foreground">awaiting review</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={cardVariants} whileHover={hoverEffect}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                IP Transfers
              </CardTitle>
              <ShieldCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">
                completed this quarter
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1, delay: 0.4 }}
        className="grid gap-8 pt-8 md:grid-cols-2"
      >
        <motion.div variants={cardVariants} whileHover={hoverEffect} className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>BI Platform</CardTitle>
              <CardDescription>
                Your AI-powered product intelligence hub.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Access growth dashboards, analyze customer sentiment, and
                optimize your pricing strategy.
              </p>
              <Button>Explore BI Templates</Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={cardVariants} whileHover={hoverEffect} className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>R&amp;D Marketplace</CardTitle>
              <CardDescription>
                Need a custom solution? Let our solvers build it.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Post a challenge and get working prototypes from our global
                network of engineers and experts.
              </p>
              <Button variant="accent">
                <Rocket className="mr-2 h-4 w-4" /> Request R&amp;D Assistance
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
        variants={cardVariants}
         whileHover={{...hoverEffect, scale: 1.02}}
      >
        <Card>
          <CardHeader>
            <CardTitle>Challenge Status Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Robotic Arm Sorter</p>
                  <p className="text-sm text-muted-foreground">
                    Status: Evaluating Submissions
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" /> View Submissions
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">ML Demand Forecaster</p>
                  <p className="text-sm text-muted-foreground">
                    Status: Final Deliverables Received
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <ShieldCheck className="mr-2 h-4 w-4" /> Begin IP Transfer
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
