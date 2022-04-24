import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";
import { MdWorkOutline } from 'react-icons/md';

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 relative min-h-screen sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="backdrop-blur-sm bg-white/10 relative shadow-xl sm:overflow-hidden sm:rounded-2xl">

            <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-32 lg:pt-32 lg:pb-32 ">
              <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-8xl lg:text-8xl">
                <span className="block uppercase text-white drop-shadow-md">
                  Tatiana Moreira
                </span>
              </h1>
              <p className=" mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                Hi there! I'm Tati a software engineer in love with the web.
              </p>
         

            </div>

          </div>
        </div>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex justify-center">
          <div className="max-w-xl content-center p-3 mt-8 backdrop-blur-sm bg-white/10 relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="flex">
              <Link
                to="/posts"
                className="mr-3 underline"
              >
                <MdWorkOutline size='26px' className="text-white" />
              </Link>

              <svg
                className="w-6 h-6 text-white fill-current mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                >
                </path>
              </svg>
              <svg aria-hidden="true" className="octicon text-white octicon-mark-github fill-current" height="24" version="1.1" viewBox="0 0 16 16" width="24">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                </path>
              </svg>


            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
