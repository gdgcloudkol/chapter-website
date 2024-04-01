import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Technology from "@/components/Technology";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <section className="space-y-8 w-full">
      <Header />
      <About />
      <Technology />
      <Socials />
      <Footer />
    </section>
  );
}
