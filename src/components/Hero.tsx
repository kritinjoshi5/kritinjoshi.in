import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import profileData from "@/data/profile.json";

const Hero = () => {
  const { personal, social } = profileData;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-[3rem]">
        <div className="flex flex-col md:flex-row">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-26 sm:w-32 sm:h-38 rounded-[3.2rem] bg-gradient-primary p-1 shadow-glow">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full rounded-[3rem] object-cover bg-card"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center ml-[2rem]">
            {/* Content */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-in slide-in-from-bottom-8 duration-1000">
              {personal.name}
            </h1>

            <p className="text-xl md:text-2xl text-primary mb-4 animate-in slide-in-from-bottom-8 duration-1000 delay-200">
              {personal.title}
            </p>
          </div>
        </div>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-in slide-in-from-bottom-8 duration-1000 delay-300">
          {personal.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in slide-in-from-bottom-8 duration-1000 delay-500">
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-smooth"
          >
            <Mail className="mr-2 h-5 w-5" />
            Let's Get In Touch
          </Button>
          {/* <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10 transition-smooth"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            View My Work
          </Button> */}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 animate-in slide-in-from-bottom-8 duration-1000 delay-700">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
