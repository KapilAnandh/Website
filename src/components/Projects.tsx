import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Image, Brain, Calendar, Activity, Eye } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "ChromaSign",
    subtitle: "Sign Language Recognition & Shirt Color Detection",
    date: "Sep 2025",
    description: "Developed a dual-task vision system using OpenCV, Mediapipe, and Transformers for sign language recognition and shirt color detection with high accuracy.",
    tags: ["Computer Vision", "OpenCV", "Mediapipe", "Transformers"]
  },
  {
    icon: Image,
    title: "SDXL Image Generator",
    subtitle: "Web-Based AI Art Creator",
    date: "Sep 2025",
    description: "A Gradio-powered web app that generates high-quality, photorealistic images from text prompts using Stable Diffusion XL.",
    tags: ["Stable Diffusion", "Gradio", "Generative AI"]
  },
  {
    icon: Activity,
    title: "MR-Image Based Self-Supervised Learning",
    subtitle: "Knee Injury Classification (Final Year Project)",
    date: "2025",
    description: "Built a self-supervised deep learning model in PyTorch for MRI-based knee injury detection, achieving 92% validation accuracy. Published in IEEE (2025).",
    tags: ["PyTorch", "Self-Supervised Learning", "Medical AI", "IEEE Published"]
  },
  {
    icon: Code2,
    title: "Heart Disease Analysis",
    subtitle: "ML Classification Pipeline",
    date: "2024",
    description: "Trained multiple classifiers (SVM, Random Forest, K-Means) on medical datasets; improved F1-score through model tuning.",
    tags: ["Scikit-learn", "SVM", "Random Forest"]
  },
  {
    icon: Calendar,
    title: "Smart Scheduling & Booking System",
    subtitle: "Car Dealerships Assistant",
    date: "2024",
    description: "Built a voice-controlled dealership assistant integrated with the Google Calendar API, automating scheduling tasks and boosting efficiency by 80%.",
    tags: ["Voice AI", "Google Calendar API", "Automation"]
  },
  {
    icon: Eye,
    title: "AI-Powered OCR",
    subtitle: "Multi-Format Document Processing",
    date: "2024",
    description: "Integrated Google Vision API for extracting text from scanned and handwritten documents with 95% recognition accuracy.",
    tags: ["Google Vision API", "OCR", "Document Processing"]
  }
];

export const Projects = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-background/50" id="projects">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 glow-text">
          Academic Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-sm">
          Transforming research into deployable AI solutions with measurable impact
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card p-6 hover:scale-[1.02] transition-all group animate-fade-in-up border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 group-hover:scale-110 transition-transform">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-secondary font-medium">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {project.date}
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge 
                    key={i} 
                    variant="outline" 
                    className="border-primary/30 text-primary bg-primary/5 hover:bg-primary/10"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
