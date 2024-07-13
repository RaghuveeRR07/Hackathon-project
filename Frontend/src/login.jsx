import Register from './register';
import {Link} from 'react-router-dom'; 
import React from 'react';
import { ArrowRight } from 'lucide-react';

function Login() {
  return (
    <section className="rounded-md bg-black/70 p-2">
      <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2">
          <img src='https://th.bing.com/th/id/OIP.2z1hf219bpy7qOWZX43lIAAAAA?rs=1&pid=ImgDetMain' alt='Etsy' width="60" height="800" ></img>

            {/* <svg
              width="50"
              height="56"
              viewBox="0 0 50 56"
              fill="none"
              //xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9001 35.2119 28.5681 34.0286 28.9625 33.0917C29.1588 32.6479 30.7367 31.3659 32.4625 30.2319C34.1882 29.0978 35.6182 27.9637 35.6182 27.8651C35.6182 27.7162 34.1882 26.6314 32.4625 25.4973C30.7367 24.3633 29.1588 23.0813 29.3568 22.6375C28.9625 21.7007 29.8993 20.5173 30.9348 20.5173C31.9702 20.5173 40.747 26.3356 41.0921 27.2231C41.4373 28.1106 40.4019 29.1953 35.4219 32.8441C32.1183 35.3095 31.2799 35.7039 30.491 35.3095C29.9979 35.0136 29.5542 34.3726 29.5542 33.8302C29.5542 33.2385 30.7867 31.9072 32.7591 30.3294C34.5341 28.9488 35.9641 27.7654 35.9641 27.6668C35.9641 27.6175 34.5341 26.6314 32.8084 25.4973C31.0826 24.3633 29.5047 23.0813 29.3568 22.6375C28.9625 21.7007 29.8993 20.5173 30.9348 20.5173C31.9702 20.5173 35.0323 22.6375 36.0932 23.2302Z"
                fill="#0F0F0F"
              />
            </svg> */}
          </div>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center mr-4">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="relative mt-6">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div>
              <a
                href="#"
                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
              >
                <span className="sr-only">Sign in with Facebook</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h8v-7H7v-3h3V8c0-3.1 1.9-4.8 4.7-4.8 1.3 0 2.4.1 2.7.1v3H15c-1.6 0-1.9.8-1.9 1.9v2.3H18l-.5 3h-2.6v7h4c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            <div>
              <a
                href="#"
                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
              >
                <span className="sr-only">Sign in with Twitter</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M5 18c6.6 0 10.2-5.5 10.2-10.2 0-.2 0-.5-.1-.7.7-.5 1.3-1.2 1.7-2-.6.3-1.3.5-2 .6.7-.4 1.2-1.1 1.5-1.8-.7.4-1.4.7-2.2.8-.6-.7-1.4-1.1-2.3-1.1-1.8 0-3.2 1.4-3.2 3.2 0 .2 0 .4.1.5C7.7 7.3 4.1 5.6 1.7 3.2c-.3.5-.5 1.1-.5 1.7 0 1.1.6 2.1 1.4 2.7-.6 0-1.1-.2-1.6-.4v.1c0 1.5 1 2.8 2.4 3.1-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.2 1.6 2.1 2.9 2.2-.7.5-1.5.7-2.3.7-.2 0-.4 0-.5-.1C2.8 16.8 4 17.5 5.3 17.5"
                  />
                </svg>
              </a>
            </div>

            <div>
              <a
                href="#"
                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
              >
                <span className="sr-only">Sign in with GitHub</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1 .1 1.5 1 1.5 1 .8 1.4 2 1 2.6.7.1-.6.3-1 .5-1.3-2.3-.3-4.8-1.2-4.8-5.4 0-1.2.4-2.2 1-3-.1-.3-.5-1.3.1-2.7 0 0 .8-.2 2.8 1 .8-.2 1.7-.3 2.5-.3.8 0 1.7.1 2.5.3 2-.2 2.8-1 2.8-1 .6 1.3.3 2.4.1 2.7.6.8 1 1.8 1 3 0 4.3-2.5 5.1-4.9 5.3.3.3.6.8.6 1.7v2.5c0 .3.2.6.7.5A10 10 0 0 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <p className="mt-2 text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <p
              
              className="font-medium text-indigo-600 hover:text-indigo-500"
              
             > 
             
            <Link to="/register">
            Sign up
               
               </Link>
            </p>
            {/* <SignUpFour/> */}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
