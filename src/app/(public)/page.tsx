import Link from "next/link";
import { ArrowRight, CheckCircle, FileText, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Optimize your CV with</span>{" "}
                  <span className="block text-blue-600 xl:inline">
                    AI Power
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Get instant feedback on your resume, discover skill gaps, and
                  find jobs that perfectly match your profile using our advanced
                  AI analysis.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/login"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/login"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                    >
                      Log In
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 p-8 opacity-50">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg transform rotate-3">
              <FileText className="h-8 w-8 text-blue-500 mb-2" />
              <div className="h-2 w-24 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
              <div className="h-2 w-16 bg-gray-200 dark:bg-gray-600 rounded"></div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg transform -rotate-3 translate-y-8">
              <Search className="h-8 w-8 text-green-500 mb-2" />
              <div className="h-2 w-20 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
              <div className="h-2 w-12 bg-gray-200 dark:bg-gray-600 rounded"></div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg transform -rotate-6">
              <CheckCircle className="h-8 w-8 text-purple-500 mb-2" />
              <div className="h-2 w-22 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
              <div className="h-2 w-14 bg-gray-200 dark:bg-gray-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
