import Dolly from "./assets/dolly.svg";
import External from "./assets/external.svg";

export function App() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex flex-col justify-center items-center p-6 rounded-lg drop-shadow-xl bg-white">
        <Dolly className="w-60 h-60 drop-shadow-md" />
        <h1 className="text-3xl">Template Project</h1>
        <div className="text-xl flex flex-row">
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-500 hover:underline flex flex-row items-center"
          >
            <p>React</p>
            <External className="pl-1 w-5 h-5 inline-block" />
          </a>
          <span className="px-1"> + </span>
          <a
            href="https://parceljs.org/"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-500 hover:underline flex flex-row items-center"
          >
            Parcel
            <External className="pl-1 w-5 h-5 inline-block" />
          </a>
          <span className="px-1"> + </span>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-500 hover:underline flex flex-row items-center"
          >
            Tailwindcss
            <External className="pl-1 w-5 h-5 inline-block" />
          </a>
        </div>
      </div>
    </main>
  );
}
