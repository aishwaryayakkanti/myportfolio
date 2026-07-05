
import { useState, useEffect, useRef } from "react";
import CertificationCard from "@/components/CertificationCard";
import { BookOpen, Sparkles, Brain, Cpu, Network, Zap, BarChart2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Import logo images
import ciscoLogo from "../assets/images/cisco_networking_academy1_logo.jpg";
import ibmLogo from "../assets/images/ibm_logo.jpg";
import microsoftLogo from "../assets/logos/microsoft.jpg";
import nptelLogo from "../assets/logos/nptel.png";

// Certification categories for filtering
type Category = "All" | "Programming" | "AI/ML" | "Web Development" | "NPTEL";

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [animateItems, setAnimateItems] = useState(false);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  // Add animation effect when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateItems(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Create floating elements for futuristic background
  useEffect(() => {
    if (!floatingElementsRef.current) return;

    const container = floatingElementsRef.current;
    container.innerHTML = '';

    // Create circuit nodes and AI elements
    const elements = [
      { size: '80px', delay: '0s', duration: '15s', top: '10%', left: '5%' },
      { size: '120px', delay: '2s', duration: '20s', top: '30%', left: '15%' },
      { size: '60px', delay: '4s', duration: '18s', top: '70%', left: '8%' },
      { size: '100px', delay: '1s', duration: '22s', top: '20%', left: '80%' },
      { size: '70px', delay: '3s', duration: '17s', top: '60%', left: '85%' },
      { size: '90px', delay: '5s', duration: '19s', top: '80%', left: '70%' },
    ];

    elements.forEach((el) => {
      const element = document.createElement('div');
      element.className = 'floating-element';
      element.style.width = el.size;
      element.style.height = el.size;
      element.style.top = el.top;
      element.style.left = el.left;
      element.style.animationDelay = el.delay;
      element.style.animationDuration = el.duration;
      container.appendChild(element);
    });
  }, []);

  // Certification data

  const certifications = [
    {
      name: "Python Essentials 1",
      issuer: "Cisco",
      date: "February 2026",
      link: "https://drive.google.com/file/d/1DHP9HRxvolCZjdPPJfmsEPLHJPnu42H6/view?usp=sharing",
      category: "Programming",
      image: ciscoLogo,
    },
    {
      name: "AI Fundamentals",
      issuer: "IBM",
      date: "October 2024",
      link: "https://drive.google.com/file/d/1AVotGXXY1e2fgS2lBUsdcSB0KkDzFrnz/view?usp=sharing",
      category: "AI/ML",
      image: ibmLogo,
    },
    {
      name: "Web Development Fundamentals",
      issuer: "Microsoft",
      date: "February 2026",
      link: "https://drive.google.com/file/d/1Isgc-7yJ2wfjBuqz9TIj6LGRct8O25n2/view?usp=sharing",
      category: "Web Development",
      image: microsoftLogo,
    },
    {
      name: "Cloud Computing",
      issuer: "NPTEL",
      date: "January2025",
      link: "https://drive.google.com/file/d/1wL4sg_y0ZUahy0yBXkbdtdU5vMlECI4p/view?usp=sharing",
      category: "NPTEL",
      image: nptelLogo,
    },
    {
      name: "Introduction to Industry 4.0 and Industrial Internet of Things",
      issuer: "NPTEL",
      date: "January 2026",
      link: "https://drive.google.com/file/d/13zGCoqo9SgTv-toztpjctyx5eiTB0lVY/view?usp=sharing",
      category: "NPTEL",
      image: nptelLogo,
    },
    {
      name: "Social Networks",
      issuer: "NPTEL",
      date: "January 2026",
      link: "https://drive.google.com/file/d/1zAd_oUmPmCS00s9AwRBQyTt2HzPAjWYL/view?usp=drive_link",
      category: "NPTEL",
      image: nptelLogo,
    },
  ] as const;

  const filteredCertifications = activeCategory === "All"
    ? certifications
    : certifications.filter((cert) => cert.category === activeCategory);

  // Category metadata with icons
  const categoryMeta = {
    "All": { icon: Sparkles, color: "bg-gradient-to-r from-blue-500 to-indigo-500" },
    "Programming": { icon: Cpu, color: "bg-gradient-to-r from-emerald-500 to-teal-500" },
    "AI/ML": { icon: Brain, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    "Web Development": { icon: Network, color: "bg-gradient-to-r from-blue-400 to-cyan-500" },
    "NPTEL": { icon: BarChart2, color: "bg-gradient-to-r from-amber-500 to-orange-500" }
  };

  const categories: Category[] = ["All", "Programming", "AI/ML", "Web Development", "NPTEL"];

  return (
    <div className="pt-20">
      {/* Hero section with futuristic AI background */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 z-0"></div>
        <div className="absolute inset-0 ai-hexagon-pattern opacity-70 z-0"></div>
        <div className="absolute inset-0 futuristic-grid z-0"></div>
        <div ref={floatingElementsRef} className="floating-elements"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform relative z-10",
            animateItems ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="inline-flex items-center justify-center p-1 mb-6 rounded-full bg-white/30 backdrop-blur-md border border-primary/20 futuristic-glow">
              <span className="flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/80 shadow-soft">
                <Brain className="h-4 w-4 text-primary animate-pulse-subtle" />
                <span className="text-sm font-medium">AI-Enhanced Credentials</span>
              </span>
            </div>

            <div className="relative inline-block mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-lg blur-md opacity-70"></div>
              <h1 className="relative text-4xl md:text-5xl font-bold text-gradient z-10">
                My Certifications
              </h1>
            </div>

            <div className="relative tech-scanline p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-primary/10 max-w-2xl mx-auto">
              <p className="text-lg text-foreground/90">
                Professional certifications I've earned to enhance my skills and knowledge in various domains of technology and design.
              </p>
            </div>
          </div>

          <div className={cn(
            "mb-16 flex justify-center transition-all duration-700 delay-100 transform relative z-10",
            animateItems ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="inline-flex flex-wrap justify-center gap-2 md:flex-nowrap bg-white/60 backdrop-blur-md p-2 rounded-xl shadow-soft border border-primary/20 futuristic-border glowing-border">
              {categories.map((category) => {
                const CategoryIcon = categoryMeta[category].icon;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2",
                      activeCategory === category
                        ? `${categoryMeta[category].color} text-white shadow-md ai-glow`
                        : "bg-white/50 text-foreground hover:bg-primary/5 hover:text-primary backdrop-blur-sm border border-primary/10"
                    )}
                  >
                    <CategoryIcon className="h-4 w-4" />
                    <span>{category}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertifications.map((cert, index) => (
              <div
                key={index}
                className={cn(
                  "transition-all duration-700 transform",
                  animateItems ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                  // Add staggered delay based on index
                  `delay-[${200 + (index * 100)}ms]`
                )}
              >
                <CertificationCard
                  name={cert.name}
                  issuer={cert.issuer}
                  date={cert.date}
                  link={cert.link}
                  category={cert.category}
                  image={cert.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced continuous learning section with futuristic AI theme */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-blue-500/5 to-background z-0"></div>
        <div className="absolute inset-0 ai-circuit-pattern opacity-70 z-0"></div>
        <div className="absolute inset-0 ai-dots-pattern opacity-50 z-0"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className={cn(
            "max-w-4xl mx-auto text-center transition-all duration-700 transform relative z-10",
            animateItems ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="inline-flex items-center justify-center p-1 mb-6 rounded-full bg-white/30 backdrop-blur-md border border-primary/20 futuristic-glow">
              <span className="flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/80 shadow-soft">
                <Zap className="h-4 w-4 text-primary animate-pulse-subtle" />
                <span className="text-sm font-medium">AI-Powered Learning</span>
              </span>
            </div>

            <div className="relative inline-block mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-lg blur-md opacity-70"></div>
              <h2 className="relative text-3xl md:text-4xl font-bold text-gradient z-10">Continuous Learning Journey</h2>
            </div>

            <div className="relative tech-scanline p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-primary/10 max-w-2xl mx-auto mb-10">
              <p className="text-lg text-foreground/90">
                I'm committed to ongoing education and staying current with the latest technologies and best practices in the industry. Learning is a lifelong journey that keeps me at the cutting edge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-soft border border-primary/20 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 futuristic-border ai-glow">
                <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 border border-primary/10 futuristic-glow">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">AI-Enhanced Courses</h3>
                <p className="text-foreground/80">Leveraging AI-powered learning platforms to expand my knowledge base efficiently</p>
              </div>

              <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-soft border border-primary/20 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 futuristic-border ai-glow">
                <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 border border-primary/10 futuristic-glow">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Technical Certifications</h3>
                <p className="text-foreground/80">Pursuing cutting-edge industry certifications to validate and showcase technical expertise</p>
              </div>

              <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-soft border border-primary/20 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 futuristic-border ai-glow">
                <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 border border-primary/10 futuristic-glow">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Research Projects</h3>
                <p className="text-foreground/80">Building innovative AI-powered projects to apply and reinforce advanced technical skills</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
