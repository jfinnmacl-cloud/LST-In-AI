import React from "react";
import { motion } from "framer-motion";
import { Brain, Eye } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import PrincipleGrid from "../components/PrincipleGrid";
import { rootPrinciples, appliedPrinciples } from "../utils/data";

export default function PrinciplesPage() {
  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-100 py-16 relative scanline">
      <div className="eerie-overlay" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Doctrine"
          title="Root principles. Applied pressure."
          text="LST keeps four foundational principles at the root, then applies them through governance, material resistance, time, and networks."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glitch"
        >
          <PrincipleGrid title="Root Principles" items={rootPrinciples} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-glitch"
        >
          <PrincipleGrid title="Applied Principles" items={appliedPrinciples} iconOffset={1} />
        </motion.div>
      </div>
    </div>
  );
}
