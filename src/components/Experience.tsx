import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section className="py-20 px-4" id="experience">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 glow-text">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {/* Experience Card */}
          <div className="ml-20 mb-12 group animate-fade-in-up">
            <div className="absolute left-6 w-5 h-5 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform" />
            
            <div className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/30">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-1">
                    AI/ML Engineer
                  </h3>
                  <p className="text-lg text-secondary font-semibold mb-2">
                    Charky Labs Pvt. Ltd, Coimbatore
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Intern | Apr 2025 – Present
                  </p>
                  
                  <ul className="space-y-2 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Engineered and deployed a real-time <strong>Speech-to-Speech model</strong> with voice cloning, achieving ~2s inference latency.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Designed and optimized <strong>blendshape-based STF and STT transcription models</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Researched, benchmarked, and fine-tuned <strong>30+ open-source AI models</strong> (Speech, NLP, Vision) for scalable deployment.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Built <strong>computer vision pipelines</strong> for gender, race, and garment color detection.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Automated <strong>AWS EC2 model deployments</strong> with API integration, reducing system latency by 25%.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
