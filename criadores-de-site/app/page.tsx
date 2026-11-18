import { BentoGrid } from "@/components/sections/bento-grid";
import { Footer } from "@/components/sections/footer";
import { HeroAppleDark } from "@/components/sections/hero-apple-dark";
import { Navbar } from "@/components/sections/navbar";
import { ShowcaseAndCapture } from "@/components/sections/showcase-and-capture";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroAppleDark />
        <BentoGrid />
        <ShowcaseAndCapture />
      </main>
      <Footer />
    </>
  );
}
