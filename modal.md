<button className="btn" onClick={() => setIsModalOpen(true)}>Sign In</button>
          {isModalOpen && (
            <dialog open className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <Login />
                <button className="btn mt-4" onClick={() => setIsModalOpen(false)}>Close</button>
              </div>
            </dialog>
          )}
          import React from 'react';
import { Link } from 'react-router-dom';

function Register({ setIsModalOpen, setModalContent }) {
  return (
    <section className="rounded-md bg-black/70 p-2">
      <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2">
            <img src='https://th.bing.com/th/id/OIP.2z1hf219bpy7qOWZX43lIAAAAA?rs=1&pid=ImgDetMain' alt='Etsy' width="60" height="800" />
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign up
              </button>
            </div>
          </form>

          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
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
                    d="M20 3.5c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.3 1.7-2.3-.7.4-1.6.8-2.5 1C16.2 2 15 1.5 13.8 1.5c-2.3 0-4 1.8-4 4 0 .3 0 .7.1 1-3.3-.1-6.2-1.7-8.2-4C1.3 3 1 4 1 5.2c0 1.4.7 2.7 1.7 3.4-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.6 3.3 4-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.7 2 2.9 3.8 2.9-1.4 1.1-3.2 1.8-5.1 1.8H3c1.8 1.2 4 1.8 6.3 1.8 7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.4-1.3 2-2.1z"
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
                    d="M10 0C4.5 0 0 4.5 0 10c0 4.4 2.9 8.1 6.9 9.4.5.1.7-.2.7-.5v-1.7c-2.8.6-3.3-1.2-3.3-1.2-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.2 1 2.8.7.1-.6.3-1 .6-1.2-2.3-.3-4.6-1.2-4.6-5.1 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1 .8-.2 1.7-.4 2.6-.4s1.8.1 2.6.4c1.9-1.4 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.8-4.6 5 .3.2.7.8.7 1.6v2.4c0 .3.2.6.7.5C17.1 18.1 20 14.4 20 10c0-5.5-4.5-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link 
              onClick={() => setModalContent('login')}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
