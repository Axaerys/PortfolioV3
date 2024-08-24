import Hero from "./components/hero";

export default function App() {
  return (
    <>
      <main className="bg-bg min-h-screen text-white padding-a py-8 flex max-sm:justify-center max-sm:items-center">
        <section className="flex">
          <Hero />
        </section>
      </main>
    </>
  );
}
