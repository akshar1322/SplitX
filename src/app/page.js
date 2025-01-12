'use client';  // Marking this file as a Client Component

import { useEffect } from 'react';
import useDisableRightClick from './hooks/useDisableRightClick';
import useDisableInspect from './hooks/disableInspect';
import Image from 'next/image';
import Hero from './components/ui/Section/HeroSection';
import '../app/components/css/Custome.css';
import ScrollProgress from './components/ui/ScrollProgress';
import Footer from './components/Footer/footer';
import FeaturedWork from './components/ui/Cards/FeaturedWork';
import Clients from './components/ui/Section/Client';
import WhereCreativityThrives from './components/ui/Section/WhereCreativityThrives';
import Navigationbar from './components/ui/Navigationbar';
import DeviceCheck from './components/DeviceCheck';
import TextSlidingEffect from './components/ui/Section/TextSlidingEffect';
import Feedback from './components/ui/Cards/feedback'
import SkillsSection from './components/ui/Section/SkillsSection';
import FollowMe from './components/ui/Share/FollowMe'
import OffersPopup from './components/ui/Cards/OffersPopup'
export default function Home() {
  useDisableInspect();
  useDisableRightClick();

  return (
    <>
      <DeviceCheck>
        <Navigationbar />
        <ScrollProgress />
        <Hero />
        <OffersPopup/>

        <div className="relative z-30 no-scrollbar overflow-hidden bg-black">
          <FeaturedWork />
          <TextSlidingEffect title="Innovating today and tomorrow" />
          <Clients />
          <SkillsSection/>
          <Feedback/>
          {/* <WhereCreativityThrives /> */}
          <FollowMe/>
          <Footer />
        </div>
      </DeviceCheck>
    </>
  );
}
