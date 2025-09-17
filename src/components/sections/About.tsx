import profileImage from "@/assets/profile-placeholder.jpg"

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about technology and driven by curiosity to solve real-world problems through code.
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl border border-border/40 glass-card p-2">
                <img
                  src={profileImage}
                  alt="Shivansh Gupta"
                  className="w-full rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl"></div>
              </div>
              {/* Floating decorations */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse"></div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6">
              <div className="glass-card p-8 rounded-2xl border border-border/40">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">
                  Hello there! 🚀
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a first-year Computer Science & Engineering student with an insatiable 
                    curiosity for artificial intelligence and data science. My journey into tech 
                    began with a simple "Hello, World!" and has evolved into a passionate pursuit 
                    of innovative solutions.
                  </p>
                  <p>
                    When I'm not buried in code or exploring the latest ML frameworks, you'll 
                    find me contributing to open-source projects, participating in hackathons, 
                    or diving deep into research papers about the future of AI.
                  </p>
                  <p>
                    My goal is to leverage technology to create meaningful impact, whether it's 
                    through developing intelligent systems, analyzing complex datasets, or building 
                    user-centric applications that solve real-world problems.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">2nd</div>
                    <div className="text-sm text-muted-foreground">Year CSE Student</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">5+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About