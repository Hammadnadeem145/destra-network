import {
  CloudSolutions,
  DestraNetWork,
  Hero,
  Navigation,
  Solutions,
  Video,
} from "@/components";

export default function Home() {
  return (
    <div className="bg-[#0A0A0B] h-full w-full text-white">
      <Navigation />
      <Hero />
      <DestraNetWork />
      <Video />
      <CloudSolutions />
      <Solutions />
    </div>
  );
}
