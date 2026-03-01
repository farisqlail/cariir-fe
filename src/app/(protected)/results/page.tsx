"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  CheckCircle,
  AlertTriangle,
  User,
  MapPin,
  Building2,
  DollarSign,
  TrendingUp,
  BarChart3,
  ArrowRight,
  Download,
  Share2,
} from "lucide-react";

// Mock Data
const profileData = {
  name: "Alex Johnson",
  role: "Senior Frontend Developer",
  experience: "5+ years",
  summary:
    "Experienced Frontend Developer with a strong background in React, TypeScript, and modern UI libraries. Proven track record of delivering high-performance web applications.",
  skills: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "GraphQL",
    "AWS",
  ],
};

const jobsData = [
  {
    id: 1,
    title: "Senior React Engineer",
    company: "TechFlow Inc.",
    location: "Remote",
    salary: "$120k - $150k",
    matchScore: 95,
    matchReason: "Perfect match for React & TypeScript skills.",
    missingSkills: [],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Frontend Lead",
    company: "InnovateX",
    location: "New York, NY",
    salary: "$140k - $170k",
    matchScore: 88,
    matchReason: "Strong profile, but requires some Vue.js knowledge.",
    missingSkills: ["Vue.js", "Team Management"],
    posted: "5 hours ago",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "StartUp Hub",
    location: "San Francisco, CA",
    salary: "$130k - $160k",
    matchScore: 82,
    matchReason: "Good fit, but backend skills need more depth.",
    missingSkills: ["Python", "Django"],
    posted: "1 week ago",
  },
];

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Navbar */}
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              CV
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Analysis Report
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <Share2 className="h-5 w-5" />
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </button>
            <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <User className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Profile Summary Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {profileData.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {profileData.name}
                </h1>
                <p className="text-gray-500 dark:text-gray-400 font-medium">
                  {profileData.role} • {profileData.experience}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profileData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800 text-center min-w-[140px]">
                <span className="block text-sm text-green-600 dark:text-green-400 font-medium">
                  Profile Score
                </span>
                <span className="block text-3xl font-bold text-green-700 dark:text-green-300">
                  92/100
                </span>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800 text-center min-w-[140px]">
                <span className="block text-sm text-purple-600 dark:text-purple-400 font-medium">
                  Job Matches
                </span>
                <span className="block text-3xl font-bold text-purple-700 dark:text-purple-300">
                  12+
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {profileData.summary}
            </p>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Job Recommendations */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                Recommended Jobs
              </h2>
              <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {jobsData.map((job) => (
                <div
                  key={job.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 rounded-l-xl" />
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 space-x-3">
                        <span className="flex items-center">
                          <Building2 className="h-3.5 w-3.5 mr-1" />
                          {job.company}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-3.5 w-3.5 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="h-3.5 w-3.5 mr-1" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          job.matchScore >= 90
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                            : job.matchScore >= 80
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                        }`}
                      >
                        {job.matchScore}% Match
                      </span>
                      <span className="text-xs text-gray-400 mt-1">
                        {job.posted}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                      <span className="font-semibold text-gray-700 dark:text-gray-200">
                        Why it matches:
                      </span>{" "}
                      {job.matchReason}
                    </p>
                  </div>

                  {job.missingSkills.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                        <AlertTriangle className="h-3 w-3 mr-1 text-amber-500" />
                        Missing Skills (Gap Analysis)
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.missingSkills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 border border-amber-100 dark:border-amber-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-5 flex items-center justify-end">
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center">
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Insights & Gaps */}
          <div className="space-y-6">
            {/* Market Insights */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
                Market Insights
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Average Salary
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    $135,000
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Demand Trend
                  </span>
                  <span className="font-semibold text-green-600 flex items-center">
                    +12% <TrendingUp className="h-3 w-3 ml-1" />
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Top Location
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Remote / SF
                  </span>
                </div>
              </div>
            </div>

            {/* Skill Gaps Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-amber-600" />
                Top Missing Skills
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Acquiring these skills could increase your match rate by 15%.
              </p>
              <div className="space-y-3">
                {["Vue.js", "Python", "Docker"].map((skill, idx) => (
                  <div key={skill} className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-200 dark:bg-amber-900/40 dark:text-amber-300">
                          {skill}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-amber-600 dark:text-amber-400">
                          {80 - idx * 10}% Demand
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amber-100 dark:bg-gray-700">
                      <div
                        style={{ width: `${80 - idx * 10}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber-500"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-2 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                View Learning Resources
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
