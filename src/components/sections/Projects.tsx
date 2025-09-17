import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import project1 from "@/assets/project-1.jpg"
import project2 from "@/assets/project-2.jpg"
import project3 from "@/assets/project-3.jpg"
import project4 from "@/assets/project-4.jpg"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Music player",
      description: "Interactive Music player ",
      image: project1,
      technologies: ["Html", "css", "Javascript", "Node.js"],
      githubUrl: "https://github.com/shivansh-arch/Music_player-frontend",
      demoUrl: "https://music-player-frontend-bdwa.vercel.app/",
      featured: false,
    },
   
    {
      id: 2,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for analyzing and visualizing complex datasets with real-time updates. Features multiple chart types and filtering capabilities.",
      image: project2,
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      githubUrl: "/",
      demoUrl: "Work in progress",
      featured: false,
    },
    {
      id: 3,
      title: "Responsive Portfolio Website",
      description: "Modern, responsive portfolio website built with React and TypeScript. Features smooth animations, dark mode, and optimized performance.",
      image: project3,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/shivansh-arch/Shivansh-portfolio-",
      demoUrl: "https://shivansh-portfolio-wsvc.onrender.com/",
      featured: false,
    },
    {
      id: 4,
      title: "Banking system",
      description: "A app where send money(dummy) to one another",
      image: project4,
      technologies: ["Node.js", "React", "Taiwind", "GitHub "],
      githubUrl: "https://github.com/shivansh-arch/PayFront.git",
      demoUrl: "https://pay-front-chi.vercel.app/",
      featured: true,
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my journey in building solutions that matter, from AI models to full-stack applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`glass-card rounded-2xl border border-border/40 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] group ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full border border-border/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 rounded-2xl border border-border/40 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                More Projects Coming Soon! 🚀
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm constantly working on new projects and experiments. Check out my GitHub 
                for the latest updates and contributions to open-source projects.
              </p>
              <Button
                variant="outline"
                className="hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300"
                onClick={() => window.open("https://github.com/shivansh-arch", "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
