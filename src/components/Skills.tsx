import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import profileData from "@/data/profile.json";
import { useEffect, useState } from "react";

const Skills = () => {
  const { skills } = profileData;
  const [skillCards, setSkillCards] = useState([]);
  const [allSkills, setAllSkills] = useState([]);

  useEffect(() => {
    const skillCards = Object.keys(skills).map((category) => ({
      category,
      skills: skills[category],
    }));
    const allSkills = skillCards.reduce((acc, card) => {
      return acc.concat(card.skills);
    }, []);
    setAllSkills(allSkills);

    setSkillCards(skillCards);
  }, [skills]);

  function clog(params: unknown) {
    console.log(params);
  }

  return (
    <section className="py-20 px-6 bg-gradient-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Skill cards */}
          {skillCards.map(({ category, skills }, index) => (
            <Card
              key={category + index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-smooth hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill + index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      {/* <Badge variant="secondary" className="text-xs">
                        {skill.level}%
                      </Badge> */}
                    </div>
                    {/* <Progress value={skill.level} className="h-2 bg-muted/50" /> */}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick skills overview */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6 text-foreground">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allSkills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-3 py-1 text-sm border-primary/30 hover:bg-primary/10 transition-smooth"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
