"use client";

import Footer from "@/components/footer/footer";
import Hero from "@/components/Home/Hero";
import ProblemSection from "@/components/Home/problem";
import ReservationSection from "@/components/Home/ReservationSection";
import SolutionSection from "@/components/Home/solution";
import SplitTextAnimationWithStyles from "@/components/Home/text";
import AdvancedVisionSection from "@/components/Home/vision";
import localFont from 'next/font/local';

// Load Posterama font locally for this page only
const posterama = localFont({
  src: '../public/posterama/posteramaregular.ttf',
  display: 'swap',
});

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Apply posterama font to the Hero heading */}
      <div className={posterama.className}>
        <Hero/>
      </div>
      <SplitTextAnimationWithStyles/>
      <AdvancedVisionSection/>
      <ProblemSection/>
      <SolutionSection/>
      <ReservationSection/>
      <Footer/>
    </main>
  );
}