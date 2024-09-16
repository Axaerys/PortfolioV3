import About from "./components/About";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

export default function App() {
  return (
    <>
      <main className="bg-bg min-h-screen h-full lg:overflow-hidden text-white padding-a py-8  max-sm:py-4 flex max-sm:justify-center max-sm:items-start lg:max-h-screen">
        <div className="flex max-lg:flex-col sm:w-full gap-2">
          <section className="h-full">
            <Hero />
          </section>
          <section className="max-container h-full scroll-smooth w-full bg-dark-gray rounded-3xl lg:overflow-y-scroll ">
            <Resume />
            <Portfolio />
            <About />
          </section>
        </div>
      </main>
    </>
  );
}
