/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  BiBuilding,
  BiCalendar,
  BiChevronRight,
  BiLocationPlus,
  BiTargetLock,
} from "react-icons/bi";
import { experience } from ".";
import { CgLock } from "react-icons/cg";
import { FiZap } from "react-icons/fi";

const CarrerTImeline = () => {
  const [selectedExperience, setSelectedExperience] = useState(1);
  return (
    <motion.div
      key="experience"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="grid lg:grid-cols-12 gap-8 mt-4"
    >
      {/* Timeline Navigation */}
      <div className="lg:col-span-4">
        <div className="sticky top-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <BiBuilding className="h-8 w-8 mr-2 text-blue-400" />
            <span>Career Timeline</span>
          </h3>
          <div className="space-y-4">
            {experience.map((exp: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedExperience(index)}
                className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 ${
                  selectedExperience === index
                    ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/50"
                    : "bg-zinc-900/30 border-zinc-800/50 hover:bg-zinc-900/50 hover:border-zinc-700/50"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white text-normal">
                    {exp.role}
                  </h3>
                  {index === 0 && (
                    <div className="bg-green-500/20 text-green-400 px-2 text-xs rounded-full border-green-500/30 border-1">
                      Current
                    </div>
                  )}
                </div>
                <p className="text-zinc-400 text-sm mb-2">{exp.company}</p>
                <div className="flex items-center text-sm text-zinc-500">
                  <BiCalendar className="h-3 w-3 mr-1" />
                  {exp.date}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Details */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedExperience}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className=" border-1 border-gray-900 backdrop-blur-sm overflow-hidden rounded-xl">
              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                        <BiBuilding className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {experience[selectedExperience].role}
                        </h3>
                        <p className="text-blue-400 font-medium">
                          {experience[selectedExperience].company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center text-zinc-400">
                        <BiLocationPlus className="h-4 w-4 mr-2" />
                        <span>{experience[selectedExperience].location}</span>
                      </div>
                      <div className="flex items-center text-zinc-400">
                        <CgLock className="h-4 w-4 mr-2" />
                        <span>1 years</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start lg:items-end">
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-blue-500/30 mb-4">
                      <span className="text-sm font-medium text-blue-300">
                        {experience[selectedExperience].date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <BiTargetLock className="h-5 w-5 mr-2 text-green-400" />
                    Key Achievements
                  </h4>
                  <div className="space-y-4">
                    {experience?.[selectedExperience]?.description.map(
                      (desc: string, descIndex: number) => (
                        <motion.div
                          key={descIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: descIndex * 0.1 }}
                          className="flex items-start group"
                        >
                          <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                            <BiChevronRight className="h-3 w-3 text-white" />
                          </div>
                          <p className="text-zinc-300 leading-relaxed group-hover:text-white transition-colors duration-200">
                            {desc}
                          </p>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>

                {/* Skills Used */}
                <div className="border-t border-zinc-800/50 pt-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <FiZap className="h-5 w-5 mr-2 text-yellow-400" />
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(experience?.[selectedExperience]?.tech || []).map(
                      (tech: string, techIndex: number) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: techIndex * 0.05,
                          }}
                        >
                          <div className="bg-gradient-to-r rounded-full from-blue-500/20 px-2 to-purple-500/20 text-blue-300 border-blue-500/30 hover:scale-105 transition-transform duration-200">
                            {tech}
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CarrerTImeline;
