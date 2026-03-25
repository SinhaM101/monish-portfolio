"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles, Brain, BarChart3, Users, Clock, CheckCircle2, Zap, FileText, MessageSquare, Database, Cpu, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function SherwinWilliamsPage() {
  const [activeStep, setActiveStep] = useState(0);

  const pipelineSteps = [
    {
      id: 0,
      title: "Unstructured Business Inputs",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      description: "Natural language requests from business units describing their AI tool needs",
      examples: [
        "We need a chatbot for customer service",
        "Want to use Copilot for our sales team of 50",
        "Looking to implement document summarization",
        "Need AI for inventory forecasting"
      ]
    },
    {
      id: 1,
      title: "Copilot Studio Processing",
      icon: <Cpu className="h-6 w-6" />,
      color: "from-blue-500 to-indigo-500",
      description: "LLM-powered extraction and classification of key parameters",
      examples: [
        "Tool type identification",
        "User count extraction",
        "Use case classification",
        "Complexity assessment"
      ]
    },
    {
      id: 2,
      title: "Structured Data Output",
      icon: <Database className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-500",
      description: "Normalized parameters ready for cost modeling",
      examples: [
        "tool_type: 'copilot_m365'",
        "user_count: 50",
        "tier: 'enterprise'",
        "estimated_tokens: 1.2M/month"
      ]
    },
    {
      id: 3,
      title: "Cost Prediction Model",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      description: "ML model generates cost forecasts based on historical data",
      examples: [
        "Monthly cost: $2,450",
        "Annual projection: $29,400",
        "ROI timeline: 6 months",
        "Confidence: 94%"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/#experience"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Experience
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
              <Brain className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Featured Project
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
                GenAI Cost Forecasting Model
              </h1>
            </div>
          </div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl">
            A predictive system that transformed AI governance at Sherwin-Williams by forecasting 
            implementation costs before deployment—reducing approval cycles by 50%.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: <Clock className="h-5 w-5" />, value: "50%", label: "Faster Approvals" },
            { icon: <Users className="h-5 w-5" />, value: "64,000+", label: "Employees Impacted" },
            { icon: <Zap className="h-5 w-5" />, value: "6 weeks", label: "Development Time" },
            { icon: <CheckCircle2 className="h-5 w-5" />, value: "Enterprise", label: "Adoption" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-2">
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stat.value}</p>
              <p className="text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* The Story */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-yellow-500" />
            The Story
          </h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
              <p>
                During my internship at Sherwin-Williams, I noticed a critical bottleneck in the AI governance process. 
                Business units would submit requests for AI tools, but <strong className="text-zinc-900 dark:text-white">estimating costs was a manual, 
                time-consuming process</strong> that delayed approvals by weeks.
              </p>
              <p>
                Inspired by ML and economic forecasters who predict product costs for future planning, I asked: 
                <em className="text-blue-600 dark:text-blue-400"> &quot;Why couldn&apos;t we forecast the cost of implementing AI tools the same way?&quot;</em>
              </p>
              <p>
                I authored a white paper outlining the concept and pitched it to my manager, David Wendt. 
                He saw the potential and gave me the green light to develop it further while balancing my other 
                AI governance responsibilities.
              </p>
              <p>
                Working tirelessly with ML engineers to validate the approach, I developed a presentation and 
                presented to both my direct manager and the VP overseeing all AI initiatives at Sherwin-Williams. 
                <strong className="text-zinc-900 dark:text-white"> They loved it.</strong>
              </p>
              <p>
                Within <strong className="text-zinc-900 dark:text-white">six weeks</strong>, I led the team that brought this initiative from concept to production. 
                The tool fundamentally changed how Sherwin-Williams evaluates AI investments and was adopted enterprise-wide.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Pipeline Visualization */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-emerald-500" />
            How It Works
          </h2>
          
          {/* Pipeline Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-zinc-200 dark:bg-zinc-800 hidden md:block" />
            <div 
              className="absolute top-12 left-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 hidden md:block transition-all duration-500"
              style={{ width: `${(activeStep / (pipelineSteps.length - 1)) * 100}%` }}
            />
            
            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {pipelineSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    activeStep === index
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg scale-105"
                      : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700"
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} text-white mb-3`}>
                    {step.icon}
                  </div>
                  <h3 className={`font-semibold mb-1 ${activeStep === index ? "text-blue-600 dark:text-blue-400" : "text-zinc-900 dark:text-white"}`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-500 line-clamp-2">{step.description}</p>
                  
                  {/* Step number */}
                  <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    activeStep >= index 
                      ? "bg-blue-500 text-white" 
                      : "bg-zinc-200 dark:bg-zinc-700 text-zinc-500"
                  }`}>
                    {index + 1}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Step Detail */}
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br ${pipelineSteps[activeStep].color} text-white`}>
                  {pipelineSteps[activeStep].icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                    {pipelineSteps[activeStep].title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    {pipelineSteps[activeStep].description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pipelineSteps[activeStep].examples.map((example, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2 bg-white dark:bg-zinc-800 rounded-lg text-sm"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${pipelineSteps[activeStep].color}`} />
                        <code className="text-zinc-700 dark:text-zinc-300">{example}</code>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex justify-between mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </button>
                <button
                  onClick={() => setActiveStep(Math.min(pipelineSteps.length - 1, activeStep + 1))}
                  disabled={activeStep === pipelineSteps.length - 1}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Data Flow Diagram */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
            <FileText className="h-6 w-6 text-purple-500" />
            Data Transformation
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Input */}
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl border border-orange-200 dark:border-orange-800">
              <h3 className="font-bold text-orange-700 dark:text-orange-400 mb-4 flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Input: Business Request
              </h3>
              <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 font-mono text-sm">
                <p className="text-zinc-600 dark:text-zinc-400 italic">
                  &quot;Hi, our marketing team of about 50 people wants to start using Microsoft Copilot 
                  for creating presentations and analyzing campaign data. We&apos;d need it integrated 
                  with our existing SharePoint and Teams setup. What would this cost us annually?&quot;
                </p>
              </div>
            </div>

            {/* Processing */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800 flex flex-col justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white mb-4 animate-pulse">
                  <Cpu className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">
                  Copilot Studio LLM
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-300">
                  Extracts, classifies, and normalizes parameters
                </p>
              </div>
            </div>

            {/* Output */}
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800">
              <h3 className="font-bold text-emerald-700 dark:text-emerald-400 mb-4 flex items-center gap-2">
                <Database className="h-5 w-5" />
                Output: Structured Data
              </h3>
              <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 font-mono text-sm space-y-1">
                <p><span className="text-purple-600 dark:text-purple-400">tool:</span> <span className="text-emerald-600 dark:text-emerald-400">&quot;M365_Copilot&quot;</span></p>
                <p><span className="text-purple-600 dark:text-purple-400">users:</span> <span className="text-blue-600 dark:text-blue-400">50</span></p>
                <p><span className="text-purple-600 dark:text-purple-400">department:</span> <span className="text-emerald-600 dark:text-emerald-400">&quot;Marketing&quot;</span></p>
                <p><span className="text-purple-600 dark:text-purple-400">integrations:</span> <span className="text-emerald-600 dark:text-emerald-400">[&quot;SharePoint&quot;, &quot;Teams&quot;]</span></p>
                <p><span className="text-purple-600 dark:text-purple-400">use_cases:</span> <span className="text-emerald-600 dark:text-emerald-400">[&quot;presentations&quot;, &quot;analytics&quot;]</span></p>
                <p><span className="text-purple-600 dark:text-purple-400">tier:</span> <span className="text-emerald-600 dark:text-emerald-400">&quot;Enterprise&quot;</span></p>
              </div>
            </div>
          </div>

          {/* Arrow indicators for mobile */}
          <div className="flex justify-center my-4 md:hidden">
            <ArrowRight className="h-6 w-6 text-zinc-400 rotate-90" />
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Microsoft Copilot Studio",
              "Azure AI Services",
              "Power BI",
              "Python",
              "LLM/GPT Models",
              "Azure Cost Management",
              "Power Automate",
              "SharePoint"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Outcomes */}
        <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-white">
          <h2 className="text-2xl font-bold mb-6">Key Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Reduced AI proposal approval cycle time by 50%",
              "Adopted enterprise-wide across Sherwin-Williams",
              "Enabled data-driven AI investment decisions",
              "Presented to and approved by VP of AI",
              "Fundamentally changed AI governance process",
              "Supported ethical and cost-effective AI adoption for 64,000+ employees"
            ].map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
