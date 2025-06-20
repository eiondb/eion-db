import { motion } from "framer-motion";

export default function QuickstartSection() {
  const steps = [
    {
      number: "01",
      title: "Install",
      code: "pip install eion"
    },
    {
      number: "02", 
      title: "Connect",
      code: "memory = SharedMemory()"
    },
    {
      number: "03",
      title: "Build", 
      code: "agent.connect(memory)"
    }
  ];

  return (
    <section id="quickstart" className="py-20 section-reveal" style={{ background: 'linear-gradient(to right, var(--eion-navy), var(--eion-dark))' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--eion-cream)' }}>
            Begin the Connection
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(240, 224, 199, 0.8)' }}>
            Join the future of AI collaboration. Start building with Eion's shared memory capabilities today.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--eion-cream)' }}>
                {step.number}
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--eion-cream)' }}>
                {step.title}
              </h3>
              <div className="bg-black/30 rounded-lg p-3 text-left">
                <code className="text-green-300 text-sm">{step.code}</code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
