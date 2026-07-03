
import ExperienceCard from "@/components/ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Java Intern",
      company: "SkillDzire",
      location: "Remote",
      startDate: "June 2025",
      endDate: "",
      description: "Developed a weather forecasting application using Java and OpenWeatherMap API. Implemented API integration and JSON data handling for real-time weather updates. Improved backend logic and application performance.",
      project: "Weather Forecasting Application",
      highlights: [],
      skills: ["Java", "OpenWeatherMap API", "JSON", "HTTP Client"],
    },
    {
      title: "DevOps Intern",
      company: "CodeAlpha",
      location: "Remote",
      startDate: "March 2026",
      endDate: "",
      description: "Built and deployed a Docker-based web server project using Nginx. Managed container build, deployment, and port mapping. Gained practical experience in DevOps and deployment automation.",
      project: "Docker Web Server Project",
      highlights: [],
      skills: ["Docker", "Nginx", "HTML", "CSS"],
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-in-section">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">My Experience</h1>
            <p className="text-muted-foreground">
              A timeline of my professional journey and the experience I've gained along the way.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="timeline-line"></div>

            {/* Experience cards */}
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                title={exp.title}
                company={exp.company}
                location={exp.location}
                startDate={exp.startDate}
                endDate={exp.endDate}
                description={exp.description}
                project={exp.project}
                highlights={exp.highlights}
                isLeft={index % 2 === 0}
                skills={exp.skills}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 fade-in-section">
            <h2 className="text-3xl font-bold mb-4">Key Achievements</h2>
            <p className="text-muted-foreground">
              Highlights from my internship journey that I’m particularly proud of.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="fade-in-section card-glass p-6 rounded-xl">
              <div className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm inline-block mb-4">
                Performance
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Real-Time Weather Application
              </h3>
              <p className="text-muted-foreground">
                Built a weather forecasting application using Java and OpenWeatherMap API, delivering accurate real-time weather updates and improving backend data processing efficiency.
              </p>
            </div>

            <div className="fade-in-section card-glass p-6 rounded-xl">
              <div className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm inline-block mb-4">
                Leadership
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Project Development & Collaboration
              </h3>
              <p className="text-muted-foreground">
                Worked independently and collaboratively on internship projects, improving problem-solving skills and following structured development practices for better project execution.
              </p>
            </div>

            <div className="fade-in-section card-glass p-6 rounded-xl">
              <div className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm inline-block mb-4">
                Innovation
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Containerized Web Deployment
              </h3>
              <p className="text-muted-foreground">
                Designed and deployed a Docker-based web server using Nginx, improving application portability, deployment consistency, and server management practices.
              </p>
            </div>

            <div className="fade-in-section card-glass p-6 rounded-xl">
              <div className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm inline-block mb-4">
                Recognition
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Hands-on Industry Experience
              </h3>
              <p className="text-muted-foreground">
                Successfully completed Full Stack Java and DevOps internships, gaining practical exposure to real-world development, deployment workflows, and modern technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
