import { motion } from "framer-motion";
import { X, Clock, Zap } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: X,
      title: "Fragmented Knowledge",
      description: "Each AI agent learns independently, creating silos of knowledge that can't be shared or leveraged across systems.",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: Clock,
      title: "Inefficient Coordination",
      description: "Multi-agent systems struggle to coordinate effectively without shared memory and contextual understanding.",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: Zap,
      title: "Repeated Learning",
      description: "Agents must relearn common patterns and insights, wasting computational resources and time.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    }
  ];

  return (
    <section id="problem" className="py-20 bg-white section-reveal">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--eion-navy)' }}>
            Isolated Minds
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Current AI systems operate in isolation, unable to share knowledge or coordinate effectively across different applications and agents.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gray-50 rounded-2xl"
            >
              <div className={`w-16 h-16 ${problem.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <problem.icon className={`w-8 h-8 ${problem.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
