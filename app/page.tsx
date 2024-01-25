import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import MainSection from "./components/MainSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-4/5 mx-auto">
        <MainSection />
        <AboutMe />
        <div className="h-screen">
          <ol className="relative border-s border-gray-200 ml-3">

            <li className="mb-10 ms-4">
              <div
                className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"
              >
              </div>
              <time
                className="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80">
                  Actualmente...
              </time>
              <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mt-2">
              Creador de Contenido − Twitch 
              </h3>
              <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
              Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub. 
              </p>
            </li>

          </ol>
        </div>
      </main >
    </>

  );
}
