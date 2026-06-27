import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Cloud, Database, Server, Brain, Layers } from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: "programming" | "web" | "core" | "frameworks";
}

interface SkillTagsProps {
  className?: string;
}

const SkillTags = ({ className }: SkillTagsProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skills: Skill[] = [
    { name: "Python", icon: <Code className="h-3 w-3" />, category: "programming" },
    { name: "Java", icon: <Server className="h-3 w-3" />, category: "programming" },
    { name: "C", icon: <Code className="h-3 w-3" />, category: "programming" },
    { name: "JavaScript", icon: <Code className="h-3 w-3" />, category: "programming" },

    { name: "HTML", icon: <Code className="h-3 w-3" />, category: "web" },
    { name: "CSS", icon: <Code className="h-3 w-3" />, category: "web" },
    { name: "JavaScript", icon: <Code className="h-3 w-3" />, category: "web" },

    { name: "Core Python", icon: <Brain className="h-3 w-3" />, category: "core" },
    { name: "Data Structures & Algorithms (DSA)", icon: <Database className="h-3 w-3" />, category: "core" },
    { name: "Linux", icon: <Cloud className="h-3 w-3" />, category: "core" },

    { name: "NumPy", icon: <Layers className="h-3 w-3" />, category: "frameworks" },
    { name: "Pandas", icon: <Layers className="h-3 w-3" />, category: "frameworks" },
    { name: "Matplotlib", icon: <Layers className="h-3 w-3" />, category: "frameworks" },
  ];

  const filteredSkills = activeCategory
    ? skills.filter((skill) => skill.category === activeCategory)
    : skills;

  return (
    <div className={cn("", className)}>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button
          onClick={() => setActiveCategory(null)}
          className={cn(
            "text-xs px-4 py-1.5 rounded-full transition-all duration-300 border shadow-sm",
            activeCategory === null
              ? "bg-primary text-white border-primary/80 shadow-md"
              : "bg-white/80 dark:bg-gray-800/80 text-foreground dark:text-gray-200 hover:bg-primary/10 border-border/30 dark:border-gray-700/30"
          )}
        >
          All
        </button>
        <button
          onClick={() => setActiveCategory("programming")}
          className={cn(
            "text-xs px-4 py-1.5 rounded-full transition-all duration-300 border shadow-sm",
            activeCategory === "programming"
              ? "bg-blue-500 text-white border-blue-500/80 shadow-md"
              : "bg-white/80 dark:bg-gray-800/80 text-foreground dark:text-gray-200 hover:bg-blue-500/10 border-border/30 dark:border-gray-700/30"
          )}
        >
          Programming Languages
        </button>
        <button
          onClick={() => setActiveCategory("web")}
          className={cn(
            "text-xs px-4 py-1.5 rounded-full transition-all duration-300 border shadow-sm",
            activeCategory === "web"
              ? "bg-green-500 text-white border-green-500/80 shadow-md"
              : "bg-white/80 dark:bg-gray-800/80 text-foreground dark:text-gray-200 hover:bg-green-500/10 border-border/30 dark:border-gray-700/30"
          )}
        >
          Web Technologies
        </button>
        <button
          onClick={() => setActiveCategory("core")}
          className={cn(
            "text-xs px-4 py-1.5 rounded-full transition-all duration-300 border shadow-sm",
            activeCategory === "core"
              ? "bg-cyan-500 text-white border-cyan-500/80 shadow-md"
              : "bg-white/80 dark:bg-gray-800/80 text-foreground dark:text-gray-200 hover:bg-cyan-500/10 border-border/30 dark:border-gray-700/30"
          )}
        >
          Core Skills
        </button>
        <button
          onClick={() => setActiveCategory("frameworks")}
          className={cn(
            "text-xs px-4 py-1.5 rounded-full transition-all duration-300 border shadow-sm",
            activeCategory === "frameworks"
              ? "bg-purple-500 text-white border-purple-500/80 shadow-md"
              : "bg-white/80 dark:bg-gray-800/80 text-foreground dark:text-gray-200 hover:bg-purple-500/10 border-border/30 dark:border-gray-700/30"
          )}
        >
          Frameworks & Libraries
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-2 transition-all duration-500">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="skill-tag group"
          >
            <span className="mr-1.5 group-hover:text-primary transition-colors">{skill.icon}</span>
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTags;
