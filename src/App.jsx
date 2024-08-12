import ToggleTheme, { ThemeMode } from "./components/ToggleTheme";

export default function App() {
  return (
    <div className={`${ThemeMode() && "dark"}`}>
      <main className="flex min-h-screen flex-col p-12 bg-neutral-100 dark:bg-neutral-900 ">
        <nav className="grid grid-cols-3 items-center">
          <h1 className="text-xl font-semibold dark:text-white ">mhthe1</h1>
          <span className="justify-self-center text-blue-600 font-mono">
            Dark Mode Implementation with React and Tailwind
          </span>
          <ToggleTheme />
        </nav>
        <section className="w-[90%] max-w-3xl mx-auto mt-40 flex flex-col gap-8">
          <h1 className="text-blue-600 text-5xl font-semibold">
            The journey of a Developer!
          </h1>
          <p className="text-sky-800 dark:text-neutral-300 text-2xl tracking-wide leading-relaxed">
            I am Mehedi Hasan Tanvir, hailing from Dhaka, Bangladesh.
            I have been the curious kind since my childhood, trying out all sorts of stuff.
            Currently, I'm delving deep into the world of ReactJs
          </p>
          <div className="mt-12 text-neutral-900 dark:text-neutral-200">
            <h2 className="text-4xl font-bold text-blue-600 mb-6">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-lg">
              <div className="flex items-center">
                <span className="mr-2 text-2xl text-indigo-500">•</span> HTML
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-2xl text-green-500">•</span> CSS
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-2xl text-yellow-500">•</span> JavaScript
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-2xl text-blue-500">•</span> React
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-2xl text-purple-500">•</span> Tailwind CSS
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-2xl text-red-500">•</span> Python
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-2xl text-indigo-500">•</span> Flask
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-2xl text-green-500">•</span> Django
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-2xl text-yellow-500">•</span> C++
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-2xl text-blue-500">•</span> MySQL
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-2xl text-purple-500">•</span> DSA
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-2xl text-red-500">•</span> Git
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}