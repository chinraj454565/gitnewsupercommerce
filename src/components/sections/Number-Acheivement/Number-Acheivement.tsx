"use client";

import React, { useState } from 'react';

const NumberAchievement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'github' | 'slack'>('github');

  const stats = [
    { value: '26,603', label: 'Commits' },
    { value: '863', label: 'Contributors' },
    { value: '7063', label: 'Slack members' },
    { value: '15,001', label: 'Github stars' },
    { value: '5,149', label: 'Forks' },
    { value: '2,586,192', label: 'Downloads' },
  ];

  return (
    <div className="w-full bg-[#F7F7F6] py-16 px-6 sm:px-8 md:py-20 md:px-12 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Mobile Layout (2 column grid) - Up to sm */}
        <div className="md:hidden">
          <h2 className="text-[32px] leading-tight font-light text-[#1a1a1a] mb-8">
          super open-source
            <br />
            community
          </h2>

          <div className="flex gap-3 mb-12">
            <button
              onClick={() => setActiveTab('github')}
              className={`px-7 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                activeTab === 'github'
                  ? 'bg-[#0d1117] text-white'
                  : 'bg-white text-[#1a1a1a]'
              }`}
            >
              Github
            </button>
            <button
              onClick={() => setActiveTab('slack')}
              className={`px-7 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                activeTab === 'slack'
                  ? 'bg-[#0d1117] text-white'
                  : 'bg-white text-[#1a1a1a]'
              }`}
            >
              Slack
            </button>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-12">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-[40px] leading-none font-light text-[#1a1a1a] mb-2">
                  {stat.value}
                </div>
                <div className="text-[15px] text-[#666666]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet Layout (md) - Stacked with 2 columns */}
        <div className="hidden md:block lg:hidden">
          <h2 className="text-[36px] leading-tight font-light text-[#1a1a1a] mb-8">
          super open-source
            <br />
            community
          </h2>

          <div className="flex gap-3 mb-12">
            <button
              onClick={() => setActiveTab('github')}
              className={`px-7 py-3.5 rounded-lg text-[15px] font-medium transition-colors ${
                activeTab === 'github'
                  ? 'bg-[#0d1117] text-white'
                  : 'bg-white text-[#1a1a1a]'
              }`}
            >
              Github
            </button>
            <button
              onClick={() => setActiveTab('slack')}
              className={`px-7 py-3.5 rounded-lg text-[15px] font-medium transition-colors ${
                activeTab === 'slack'
                  ? 'bg-[#0d1117] text-white'
                  : 'bg-white text-[#1a1a1a]'
              }`}
            >
              Slack
            </button>
          </div>

          {/* 2 column grid for tablets */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-14">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-[48px] leading-none font-light text-[#1a1a1a] mb-2">
                  {stat.value}
                </div>
                <div className="text-[15px] text-[#666666]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout (Left sidebar + Right 3x2 grid) - lg and up */}
        <div className="hidden lg:flex lg:gap-16 xl:gap-24">
          {/* Left Sidebar */}
          <div className="flex-shrink-0 w-[280px] xl:w-[320px]">
            <h2 className="text-[38px] xl:text-[42px] leading-tight font-light text-[#1a1a1a] mb-10">
            super open-source
              <br />
              community
            </h2>

            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('github')}
                className={`px-8 py-3.5 rounded-lg text-[15px] font-medium transition-colors ${
                  activeTab === 'github'
                    ? 'bg-[#0d1117] text-white'
                    : 'bg-white text-[#1a1a1a]'
                }`}
              >
                Github
              </button>
              <button
                onClick={() => setActiveTab('slack')}
                className={`px-8 py-3.5 rounded-lg text-[15px] font-medium transition-colors ${
                  activeTab === 'slack'
                    ? 'bg-[#0d1117] text-white'
                    : 'bg-white text-[#1a1a1a]'
                }`}
              >
                Slack
              </button>
            </div>
          </div>

          {/* Right Stats Grid - 3 columns x 2 rows */}
          <div className="flex-1 grid grid-cols-3 gap-x-12 lg:gap-x-16 xl:gap-x-20 gap-y-14 xl:gap-y-16">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-[48px] xl:text-[56px] leading-none font-light text-[#1a1a1a] mb-2">
                  {stat.value}
                </div>
                <div className="text-[15px] text-[#666666]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberAchievement;