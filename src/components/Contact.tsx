import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import profileData from "@/data/profile.json";

const Contact = () => {
  const { personal, social } = profileData;

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personal.location,
      href: `https://maps.google.com?q=${encodeURIComponent(
        personal.location
      )}`,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: social.github,
      color: "hover:text-purple-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: social.linkedin,
      color: "hover:text-blue-400",
    },
    // {
    //   icon: Twitter,
    //   label: "Twitter",
    //   href: social.twitter,
    //   color: "hover:text-sky-400",
    // },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always open to discussing new
            opportunities and exciting projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-smooth">
            <CardHeader>
              <CardTitle className="text-xl">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={index}
                    href={method.href}
                    target={method.label === "Location" ? "_blank" : undefined}
                    rel={
                      method.label === "Location"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-smooth group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {method.label}
                      </p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </CardContent>
          </Card>

          {/* Quick Contact */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-smooth">
            <CardHeader>
              <CardTitle className="text-xl">Quick Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Prefer a more direct approach? Click below to send me an email
                or schedule a call to discuss your project.
              </p>

              <div className="space-y-3">
                <Button
                  className="w-full bg-gradient-primary hover:shadow-glow transition-smooth"
                  onClick={() =>
                    window.open(
                      `mailto:${personal.email}?subject=Project Inquiry`,
                      "_blank"
                    )
                  }
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary/10"
                  onClick={() =>
                    window.open("https://calendly.com/kritin-joshi", "_blank")
                  }
                >
                  Schedule a Call
                </Button>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with me on:
                </p>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-muted-foreground transition-smooth hover:scale-110 ${social.color}`}
                        title={social.label}
                      >
                        <Icon className="h-6 w-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Available for work indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-accent">
              Available for new projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
