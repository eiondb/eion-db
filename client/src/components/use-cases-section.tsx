import { motion } from "framer-motion";
import { Scale, DollarSign, Heart, Code, Search, MessageCircle } from "lucide-react";

export default function UseCasesSection() {
  const useCases = [
    {
      icon: Scale,
      title: "Legal Research Assistant",
      description: "Connect legal research agents to share case precedents, statutes, and expert analysis across multiple jurisdictions and practice areas.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: DollarSign,
      title: "Financial Intelligence Engine",
      description: "Coordinate market analysis agents to share insights on trends, risk assessments, and investment opportunities in real-time.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Heart,
      title: "Healthcare Coordination",
      description: "Enable medical AI agents to share patient data, treatment protocols, and research findings while maintaining privacy and compliance.",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Connect coding assistants, testing agents, and documentation bots to collaborate on complex software projects with shared context.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Search,
      title: "Research Collaboration",
      description: "Link research agents across different domains to share findings, methodologies, and insights for breakthrough discoveries.",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: MessageCircle,
      title: "Customer Support Network",
      description: "Coordinate support agents to share customer history, solutions, and best practices for seamless service delivery.",
      color: "text-teal-600",
      bgColor: "bg-teal-100"
    }
  ];

  return (
    <section className="py-20 bg-white section-reveal">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--eion-navy)' }}>
            Use Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Eion's multi-agent coordination platform transforms complex workflows across industries, enabling AI agents to think together.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${useCase.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <useCase.icon className={`w-8 h-8 ${useCase.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[var(--eion-navy)] transition-colors duration-300">
                {useCase.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 