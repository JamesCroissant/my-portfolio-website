import Image from 'next/image';
import HeroSection from './components/HeroSection';
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    {/* // <main className="flex min-h-screen flex-col bg-red-500"> */}
      <Navbar />
      <div className="container mx-auto mt-20">
        <HeroSection />
      </div>
    </main>
  )
}
