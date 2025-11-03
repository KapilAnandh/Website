import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  "AWS Certified Associate Machine Learning Engineer (Udemy - Ongoing)",
  "TensorFlow Developer Certification",
  "Master in Artificial Intelligence (Udemy)",
  "Developing AI Applications with Python & Flask (IBM – Coursera)",
  "Databases and SQL for Data Science with Python (Coursera)",
  "Smart Analytics, Machine Learning, and AI on Google Cloud (Coursera)",
  "Google Cloud Training Certificate (Coursera)",
  "Generative AI: Introduction & Application (IBM – Coursera)",
  "Generative AI: Prompt Engineering Basics (IBM – Coursera)",
  "Building GenAI Powered Applications with Python (IBM – Coursera)",
  "Machine Learning & Deep Learning Specialization (Simplilearn)",
  "Data Visualization in Excel (Coursera)",
  "IELTS - Overall band score of 7.0 (2022)"
];

export const Certifications = () => {
  return (
    <section className="py-20 px-4" id="certifications">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 glow-text">
          Certifications
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-sm">
          Continuous learning and professional development
        </p>

        <div className="glass-card p-8 rounded-2xl border-primary/20">
          <div className="grid gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/30 transition-all group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <p className="flex-1 text-foreground group-hover:text-primary transition-colors">
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Badge className="bg-gradient-to-r from-primary to-accent text-background px-6 py-2 text-sm">
            13+ Professional Certifications
          </Badge>
        </div>
      </div>
    </section>
  );
};
