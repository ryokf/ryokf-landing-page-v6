import Hero from "@/components/Hero";
import { FloatingNav } from '../components/ui/FloatingNav';
import Grid from "@/components/Grid";
import { FaHome } from "react-icons/fa";
import { FaCode, FaEnvelope, FaUser } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "About", link: "/#about", icon: <FaUser /> },
            { name: "Projects", link: "/#projects", icon: <FaCode /> },
            { name: "Contact", link: "/#contact",   icon: <FaEnvelope /> },
          ]}
        />
        <Hero></Hero>
        <Grid></Grid>
        <div className="my-96"></div>
      </div>
    </main>
  );
}
