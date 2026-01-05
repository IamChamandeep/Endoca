import React, { useState } from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ProductShowcase from './components/ProductShowcase';
import SocialProof from './components/SocialProof';
import WhyUs from './components/WhyUs';
import UrgencyGuarantee from './components/UrgencyGuarantee';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';
import QuizModal from './components/QuizModal';

function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openQuiz = () => setIsQuizOpen(true);
  const closeQuiz = () => setIsQuizOpen(false);

  return (
    <div className="min-h-screen bg-cream font-sans text-charcoal">
      <StickyBar />
      <Hero onOpenQuiz={openQuiz} />
      <ProblemSection />
      <SolutionSection />
      <ProductShowcase />
      <SocialProof />
      <WhyUs />
      <UrgencyGuarantee />
      <FAQ />
      <FinalCTA onOpenQuiz={openQuiz} />
      <Footer />
      
      <QuizModal isOpen={isQuizOpen} onClose={closeQuiz} />
    </div>
  );
}

export default App;