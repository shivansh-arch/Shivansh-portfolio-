import { Code, Database, Brain, Cloud, Globe, BarChart3 } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      skills: [
        { name: "Python", level: 2 },
        { name: "JavaScript", level: 2 },
        { name: "Java", level: 2 },
        { name: "C++", level: 4 },
        { name: "C", level: 4 },
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: [
        { name: "TensorFlow", level: 0 },
        { name: "PyTorch", level: 0 },
        { name: "Scikit-learn", level: 0 },
        { name: "Pandas", level: 2 },
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: BarChart3,
      title: "Data Science",
      skills: [
        { name: "NumPy", level: 2 },
        { name: "Matplotlib", level: 2 },
        { name: "Jupyter", level: 2 },
        { name: "Statistical Analysis", level: 0 },
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: [
        { name: "React", level: 4 },
        { name: "Node.js", level: 4 },
        { name: "TypeScript", level: 1 },
        { name: "Tailwind CSS", level: 4 },
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Cloud,
      title: "Cloud & Tools",
      skills: [
        { name: "AWS", level: 0 },
        { name: "Docker", level: 0 },
        { name: "Git", level: 2 },
        { name: "Linux", level: 0 },
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Database,
      title: "AI Platforms",
      skills: [
        { name: "Google AI", level: 4 },
        { name: "OpenAI", level: 4 },
        { name: "Hugging Face", level: 4 },
        { name: "Kaggle", level: 4 },
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A diverse toolkit built through hands-on projects and continuous learning.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={category.title}
                  className="glass-card p-6 rounded-2xl border border-border/40 hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Icon Header */}
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl ${category.bgColor} mr-4`}>
                      <Icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                        style={{
                          animationDelay: `${(index * 100) + (skillIndex * 50)}ms`,
                        }}
                      >
                        <span className="text-muted-foreground">{skill.name}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < skill.level
                                  ? "bg-gradient-to-r from-primary to-secondary"
                                  : "bg-muted"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className="mt-4 pt-4 border-t border-border/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-muted-foreground">
                      Continuously improving through practice and real-world projects
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Learning Banner */}
          <div className="mt-16 text-center">
            <div className="glass-card p-8 rounded-2xl border border-border/40 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Always Learning 📚
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Technology evolves rapidly, and so do I. Currently exploring advanced deep learning 
                architectures, cloud-native development, and the latest in generative AI. 
                The journey of learning never stops!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
