import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadCV = () => {
    // In a real implementation, this would download the actual CV
    console.log("Downloading CV...")
  }

  return (
    <section id="home" className="min-h-screen hero-bg flex items-center relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Main Headline */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="gradient-text">Shivansh</span>{" "}
              <span className="wave">👋</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              CSE student | Python & AI enthusiast | Future Data Scientist
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold px-8 py-3 neon-glow transition-all duration-300 hover:scale-105"
            >
              Let's build something cool!
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={downloadCV}
              className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary px-8 py-3 transition-all duration-300 hover:scale-105"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse hidden lg:block"></div>
          <div className="absolute bottom-32 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse hidden lg:block"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <ArrowDown className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>

      <style>{`
        .wave {
          animation: wave 2s infinite;
          transform-origin: 70% 70%;
        }

        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </section>
  )
}

export default Hero