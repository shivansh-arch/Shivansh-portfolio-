import { Heart, Code } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {currentYear} Shivansh Gupta. Made with</span>
            <Heart className="w-4 h-4 text-primary animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-secondary" />
          </div>

          {/* Tech Stack */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <span className="gradient-text font-medium">React</span>
            <span>+</span>
            <span className="gradient-text font-medium">TypeScript</span>
            <span>+</span>
            <span className="gradient-text font-medium">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer