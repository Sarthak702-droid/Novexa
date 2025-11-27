import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ShieldCheck,
  FileLock,
  DatabaseZap,
  GitBranch,
  FileSignature,
  Network,
  ListChecks,
  AlertTriangle,
} from 'lucide-react';

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: 'Zero-Download Sandbox',
    description:
      'Solvers work in a secure, cloud-based environment. Your sensitive data never leaves our servers and cannot be downloaded, ensuring maximum protection.',
  },
  {
    icon: FileSignature,
    title: 'Enforceable NDAs',
    description:
      'All solvers must sign a legally binding non-disclosure agreement before viewing any challenge details. This is digitally logged and enforced.',
  },
  {
    icon: FileLock,
    title: 'Ironclad IP Transfer Policy',
    description:
      'Upon completion and payment, 100% of the intellectual property for the winning solution is legally transferred to you. The process is clear, simple, and documented.',
  },
  {
    icon: GitBranch,
    title: 'Blockchain Audit Logs',
    description:
      'Every significant action on the platform—from data access to submission viewing—is recorded on an immutable blockchain ledger, providing an undeniable audit trail.',
  },
  {
    icon: DatabaseZap,
    title: 'Automated Dataset Redaction',
    description:
      'Our AI tools can automatically identify and redact or anonymize Personally Identifiable Information (PII) from your datasets before they are used in a challenge.',
  },
  {
    icon: Network,
    title: 'Secure Prototype Guidelines',
    description:
      'We enforce strict security protocols for prototype development, ensuring that solutions are built without vulnerabilities and with security best practices in mind.',
  },
  {
    icon: AlertTriangle,
    title: 'Liability &amp; Risk Management',
    description:
      'Our terms of service clearly outline liability, and our escrow payment system protects you financially. We have robust protocols to manage platform and project risks.',
  },
  {
    icon: ListChecks,
    title: 'Compliance &amp; Governance',
    description:
      'We are built to be compliant with major data privacy regulations like GDPR and provide the tools you need to maintain your own compliance posture.',
  },
];

export default function SecurityPage() {
  return (
    <>
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"
        ></div>
         <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent"></div>
        <div className="container relative text-center">
          <div className="flex justify-center">
            <ShieldCheck className="w-16 h-16 text-primary" />
          </div>
          <h1 className="mt-4 text-4xl font-bold font-headline tracking-tight lg:text-5xl">
            Security &amp; Trust
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Your data and intellectual property are your most valuable assets.
            We built our platform from the ground up with enterprise-grade
            security to protect them.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((feature) => (
              <Card key={feature.title} className="bg-card/80 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
