import Image from "next/image";
import Hero from "./components/ui/Section/HeroSection";
import  "../app/components/css/Custome.css"
import ScrollProgress from "./components/ui/ScrollProgress";
import Footer from "./components/Footer/footer";
import FeaturedWork from "./components/ui/Cards/FeaturedWork"
import Clients from "./components/ui/Section/Client"
import WhereCreativityThrives from "./components/ui/Section/WhereCreativityThrives"
import Navigationbar from "./components/ui/Navigationbar";
import DeviceCheck from "./components/DeviceCheck";
// data




export default function Home() {
  return (
    <>
    <DeviceCheck>
        <Navigationbar/>
        <ScrollProgress/>
        <Hero/>

        <div className="relative z-30 ">

        <FeaturedWork />
        <Clients/>
        {/* <WhereCreativityThrives /> */}
        <Footer />

        </div>
    </DeviceCheck>



    </>
  );
}
