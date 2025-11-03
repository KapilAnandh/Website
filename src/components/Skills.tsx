import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "MySQL"]
  },
  {
    category: "AI/ML",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Computer Vision", "OpenCV", "Transformers", "LLMs", "RAG", "NLP", "AI Agents", "Pandas", "NumPy"]
  },
  {
    category: "Data Engineering",
    skills: ["ETL Pipelines", "Data Wrangling", "Feature Engineering", "Model Optimization"]
  },
  {
    category: "Visualization",
    skills: ["Power BI (DAX)", "Tableau", "Matplotlib", "Seaborn"]
  },
  {
    category: "Cloud & Deployment",
    skills: ["AWS (EC2, S3)", "GCP", "API Integration", "Docker", "Jupyter", "Colab"]
  },
  {
    category: "Soft Skills",
    skills: ["Leadership", "Analytical Thinking", "Problem Solving", "Team Collaboration"]
  }
];

export const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 glow-text">
          Technical Skills
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-sm">
          Full-stack AI/ML expertise from research to production
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all animate-fade-in-up border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary"
                    className="bg-muted/50 border-border text-foreground hover:bg-muted transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
