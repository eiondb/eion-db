import { motion } from "framer-motion";
import { CheckCircle, Zap, Heart } from "lucide-react";

export default function SolutionSection() {
  const features = [
    {
      icon: CheckCircle,
      title: "Unified Knowledge Graph",
      description: "Create a shared semantic layer that all agents can read from and contribute to, building collective intelligence."
    },
    {
      icon: Zap,
      title: "Adaptive Deployment",
      description: "Scale from single LLM applications to complex multi-agency systems with the same unified architecture."
    },
    {
      icon: Heart,
      title: "Open Source",
      description: "Built for the community, fostering innovation and collaboration in the AI ecosystem."
    }
  ];

  return (
    <section id="features" className="py-20 section-reveal" style={{ background: 'linear-gradient(to bottom right, rgba(240, 224, 199, 0.2), rgba(74, 144, 164, 0.1))' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--eion-navy)' }}>
            Connected Intelligence
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Eion creates a shared memory layer that enables AI agents to think together, forming the first unified knowledge graph for multi-agent systems.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'var(--eion-navy)' }}
              >
                <feature.icon className="w-8 h-8" style={{ color: 'var(--eion-cream)' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
