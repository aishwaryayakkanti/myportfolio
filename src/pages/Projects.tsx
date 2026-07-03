
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import weatherImg from "../assets/images/weather.png";
import dockerImg from "../assets/images/docker.png";
import curriculumForgeImg from "../assets/images/ciriculamforge.jpg";

// Project categories for filtering
type Category = "All" | "Java" | "Python" | "DevOps" | "AI/ML";

type Project = {
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  codeLink: string;
  category: Exclude<Category, "All">;
  featured?: boolean;
};

const projects: Project[] = [
    // Featured Web Projects
  {
  title: "Weather Forecasting Application",
  description: "A Java-based weather forecasting application for real-time weather updates and multi-day forecasts.",
  fullDescription: "Developed a full-stack weather forecasting application using Java, OpenWeatherMap API, JSON, and HTTP Client. The application provides real-time weather updates and future forecasts for any global location. Implemented API integration, authentication, and efficient JSON data parsing for accurate weather insights.",
  technologies: ["Java", "OpenWeatherMap API", "JSON", "HTTP Client"],
  image: weatherImg,
  codeLink: "https://github.com/aishwaryayakkanti/WeatherForecasting.git",
  category: "Java",
  featured: true
  },
 {
  title: "CurriculumForge AI-Powered Curriculum Management System",
  description: "An AI-powered curriculum management platform for automating syllabus generation and course planning.",
  fullDescription: "Developed an intelligent curriculum management system using Streamlit, OpenAI API, and Python to automate syllabus generation, course structure design, and learning outcome mapping for educational institutions. Built a multi-page web application for curriculum planning, resource management, and collaboration between faculty and administrators.",
  technologies: ["Streamlit", "OpenAI API", "Python"],
  image: curriculumForgeImg,
  codeLink: "https://github.com/AishwaryaYakkanti/CurriculumForge-AI-Powered-Curriculum-Management-System",
  category: "Python",
  featured: true
},
{
  title: "Docker Web Server Project",
  description: "A containerized web server deployed using Docker and Nginx.",
  fullDescription: "Built and deployed a Docker-based web server project using Docker, Nginx, HTML, and CSS. Managed container build, deployment, port mapping, and troubleshooting. Improved deployment efficiency and gained hands-on experience in DevOps practices.",
  technologies: ["Docker", "Nginx", "HTML", "CSS"],
  image: dockerImg,
  codeLink: "https://github.com/AishwaryaYakkanti/Docker-Web-Server-Project",
  category: "DevOps",
  featured: true
},
    {
      title: "Object Detection System",
      description: "Object detection using TensorFlow and deep learning techniques.",
      fullDescription: "An object detection system built with TensorFlow that can identify and locate multiple objects in images and video streams. The project implements state-of-the-art deep learning models for real-time object detection with high accuracy. It includes both still image processing and live webcam detection capabilities, with customizable confidence thresholds and support for multiple object classes.",
      technologies: ["Python", "TensorFlow", "Deep Learning", "Computer Vision", "Jupyter Notebook"],
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      codeLink: "https://github.com/karravulachandra/Object-Detection-By-Ankan",
      category: "AI/ML",
      featured: true
    },
    {
      title: "Malware Detection System",
      description: "Machine learning and deep learning approach to detect malware.",
      fullDescription: "A malware detection system that uses machine learning and deep learning techniques to identify malicious software. The project implements various classification algorithms to analyze file characteristics and behavior patterns to distinguish between benign and malicious files. The system achieves high accuracy in detecting both known and previously unseen malware variants through feature extraction and model optimization.",
      technologies: ["Python", "Machine Learning", "Deep Learning", "Jupyter Notebook", "Data Analysis"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      codeLink: "https://github.com/karravulachandra/Malware-detection-with-ML-and-deep-learning",
      category: "AI/ML"
    },
    

    // Python Projects
    {
      title: "MiniWare Assistant",
      description: "Voice-controlled desktop assistant with multiple functionalities.",
      fullDescription: "A voice-controlled desktop assistant built with Python that responds to various voice commands. Features include web searches on Google and YouTube, reading information from Wikipedia, playing random movies from a collection, providing time updates, and more. The assistant uses speech recognition and text-to-speech technologies to create a hands-free user experience for everyday computer tasks.",
      technologies: ["Python", "Speech Recognition", "Text-to-Speech", "APIs", "Automation"],
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      codeLink: "https://github.com/karravulachandra/Mini-Desktop-Assistant",
      category: "AI/ML"
    }
  ];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
  };

  const categories: Category[] = ["All", "Java", "Python", "DevOps", "AI/ML"];

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 fade-in-section">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-muted-foreground">
              A collection of my work, ranging from web applications to design projects.
            </p>
          </div>

          <div className="mb-12 flex justify-center fade-in-section">
            <div className="inline-flex bg-secondary/50 p-1 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-white shadow-soft text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                fullDescription={project.fullDescription}
                technologies={project.technologies}
                image={project.image}
                codeLink={project.codeLink}
                featured={project.featured}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
