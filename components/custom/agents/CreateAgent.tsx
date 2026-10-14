"use client";
import { Button } from "@/components/ui/button";
import { ArrowUp, BriefcaseBusiness, Mail, Plus, Search } from "lucide-react";
import React, { useState } from "react";

const quickSuggestions = [
  {
    label: "Find AI Jobs",
    prompt:
      "Find the latest AI developer jobs posted this week that match my skills and summarize the best opportunities for me.",
  },
  {
    label: "Inbox Summary",
    prompt:
      "Check my inbox and summarize the most important emails, especially anything that requires my reply or attention.",
  },
  {
    label: "Research Topic",
    prompt:
      "Research a topic across the web, compare multiple sources, and give me a concise summary with the most important findings.",
  },
  {
    label: "Plan My Day",
    prompt:
      "Check my calendar and upcoming tasks, then create a prioritized plan for everything I should focus on today.",
  },
  {
    label: "Reddit Trends",
    prompt:
      "Find trending Reddit discussions about AI tools and agents, then summarize the most useful and interesting conversations.",
  },
];

const templates = [
  {
    title: "Find latest jobs",
    description: "Search the web for the latest jobs matching my profile.",
    icon: BriefcaseBusiness,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    border: "hover:border-orange-300",
    glow: "hover:shadow-orange-100",
  },
  {
    title: "Daily inbox summary",
    description:
      "Summarize important emails and highlight what needs my attention.",
    icon: Mail,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    border: "hover:border-blue-300",
    glow: "hover:shadow-blue-100",
  },
  {
    title: "Research a topic",
    description: "Search the web and create a useful research summary for me.",
    icon: Search,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    border: "hover:border-purple-300",
    glow: "hover:shadow-purple-100",
  },
];

const CreateAgent = () => {
  const [prompt, setPrompt] = useState("");
  return (
    <div className="mt-5">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Create New Agent
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Ask what type of agent you want to create, type your goal, task or
          workflow.
        </p>
      </div>
      {/* Prompt Box */}
      <div className="w-full border rounded-2xl bg-background p-3 mt-3 shadow-lg shadow-purple-100 hover:shadow-purple-200">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the agent you want to create..."
          className="min-h-[90px] w-full resize-none bg-transparent p-2 text-sm outline-none"
        />
        <div className="flex justify-between items-center">
          <div>
            <Button variant={"ghost"} size={"icon"}>
              <Plus />
            </Button>
          </div>
          <Button size={"icon"} className="size-9 rounded-full bg-purple-600">
            <ArrowUp />{" "}
          </Button>
        </div>
      </div>

      <div className="mt-3 flex gap-2 ">
        {quickSuggestions.map((suggestion, index) => (
          <Button
            onClick={() => setPrompt(suggestion.prompt)}
            variant={"outline"}
            className="hover:text-purple-600 hover:bg-purple-200 hover:border-purple-700"
            key={index}
          >
            {suggestion.label}
          </Button>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="flex text-lg justify-between items-center font-semibold">
          Get Started <span className="text-sm font-medium ">View All</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 ">
          {templates.map((template) => (
            <div
              className={`border rounded-2xl p-5 hover:cursor-pointer hover:shadow-lg ${template.border} ${template.glow}`}
            >
              <template.icon
                className={`size-12 p-2 ${template.iconBg} ${template.iconColor} rounded-xl `}
              />
              <div className="mt-6">
                <h2 className="font-semibold text-foreground">
                  {template.title}
                </h2>
                <p className="text-sm mt-2 leading-5 text-muted-foreground">
                  {template.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateAgent;
