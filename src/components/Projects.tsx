import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";
import profileData from "@/data/profile.json";

const Projects = () => {
  const { projects } = profileData;
  const featuredProjects = projects.filter((project) => project.featured);

  const ProjectCard = ({ project }: { project: any }) => (
    <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-smooth hover:-translate-y-2 overflow-hidden">
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-accent/90 text-accent-foreground">
            <Star className="w-3 h-3 mr-1 fill-current" />
            Featured
          </Badge>
        </div>
      )}

      {project.image && (
        <div className="relative h-48 bg-gradient-secondary overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies
            .slice(0, 4)
            .map((tech: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 4} more
            </Badge>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          {project.github && (
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-primary/30 hover:bg-primary/10"
              onClick={() => window.open(project.github, "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
          {project.demo && (
            <Button
              size="sm"
              className="flex-1 bg-gradient-primary hover:shadow-glow"
              onClick={() => window.open(project.demo, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* All projects grid */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10"
            onClick={() => window.open(profileData?.social?.github, "_blank")}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
