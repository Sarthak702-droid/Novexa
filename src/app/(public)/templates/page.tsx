import InfiniteMenu from '@/components/ui/InfiniteMenu';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const templates = [
  {
    title: 'Existing Product Analytics',
    description: 'Deep-dive into your product performance, sales trends, and customer behavior.',
    imageId: 'bi-feature-analytics',
    link: '/signup'
  },
  {
    title: 'Review Summarizer',
    description: 'AI-powered summary of thousands of customer reviews to find key themes.',
    imageId: 'bi-feature-summary',
    link: '/signup'
  },
  {
    title: 'Launch Planner',
    description: 'Structure your new product launch and track progress against key milestones.',
    imageId: 'bi-feature-planner',
    link: '/signup'
  },
  {
    title: 'Price Optimization',
    description: 'Analyze market data and costs to find the optimal price for your products.',
    imageId: 'bi-feature-price',
    link: '/signup'
  },
  {
    title: 'Unit Economics & Margin Simulator',
    description: 'Model your costs and revenue to understand profitability at a granular level.',
    imageId: 'bi-feature-economics',
    link: '/signup'
  },
  {
    title: 'Competitor Price Mapping',
    description: 'Track competitor pricing automatically to stay competitive in the market.',
    imageId: 'bi-feature-price',
    link: '/signup'
  },
    {
    title: 'Sales Forecast',
    description: 'Use historical data to predict future sales trends and manage inventory.',
    imageId: 'bi-feature-simulation',
    link: '/signup'
  },
];

export default function TemplatesPage() {

  const menuItems = templates.map(template => {
    const image = PlaceHolderImages.find(
      (img) => img.id === template.imageId
    );
    return {
      image: image?.imageUrl || 'https://picsum.photos/600/600?grayscale',
      link: template.link,
      title: template.title,
      description: template.description
    }
  });


  return (
    <>
      <section className="py-16 md:py-24 bg-muted">
        <div className="container text-center">
          <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">
            BI Template Library
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Get from data to decision in minutes. Our library of ML-powered
            templates provides ready-to-use analyses for the most common
            business questions. Just upload your data and get insights.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container h-[80vh] min-h-[600px] relative">
           <InfiniteMenu items={menuItems}/>
        </div>
      </section>
    </>
  );
}
