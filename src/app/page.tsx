import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { CodePreview } from '@/components/sections/CodePreview';
import { Showcase } from '@/components/sections/Showcase';
import { Performance } from '@/components/sections/Performance';
import { Philosophy } from '@/components/sections/Philosophy';
import { CTA } from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-20 sm:px-8">
      <Hero />
      <Features />
      <CodePreview />
      <Showcase />
      <Performance />
      <Philosophy />
      <CTA />
    </main>
  );
}
