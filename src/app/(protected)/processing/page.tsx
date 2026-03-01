"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Loader2,
  FileText,
  Search,
  Cpu,
  Database,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Uploading CV",
    description: "Securely storing your document...",
    icon: FileText,
  },
  {
    id: 2,
    title: "Extracting Text",
    description: "Running OCR and parsing structure...",
    icon: Search,
  },
  {
    id: 3,
    title: "AI Analysis",
    description: "Analyzing skills, experience, and gaps...",
    icon: Cpu,
  },
  {
    id: 4,
    title: "Job Scraping",
    description: "Searching for matching roles across platforms...",
    icon: Database,
  },
  {
    id: 5,
    title: "Finalizing",
    description: "Compiling your personalized report...",
    icon: CheckCircle2,
  },
];

export default function ProcessingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        setTimeout(() => router.push("/results"), 1000); // Redirect after last step
        return prev;
      });
    }, 2000); // 2 seconds per step

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block p-4 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-6"
          >
            <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Processing your CV
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Please wait while our AI analyzes your profile and finds the best
            jobs for you.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            const isPending = index > currentStep;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center p-4 rounded-lg border transition-all duration-300 ${
                  isActive
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-sm scale-105"
                    : isCompleted
                    ? "border-green-200 bg-green-50 dark:bg-green-900/10 opacity-70"
                    : "border-gray-200 dark:border-gray-700 opacity-40"
                }`}
              >
                <div
                  className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-4 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : isCompleted
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-400"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-6 w-6" />
                  ) : (
                    <Icon className="h-5 w-5" />
                  )}
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-semibold ${
                      isActive
                        ? "text-blue-700 dark:text-blue-300"
                        : "text-gray-900 dark:text-gray-100"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
                {isActive && (
                  <div className="ml-4">
                    <Loader2 className="h-5 w-5 text-blue-600 animate-spin" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
          <motion.div
            className="bg-blue-600 h-2.5 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}
