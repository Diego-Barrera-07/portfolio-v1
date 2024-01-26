import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Header from "./components/Header";
import MainSection from "./components/MainSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-4/5 mx-auto">
        <MainSection />
        <Experience />
        <AboutMe />
      </main >
    </>

  );
}
