import { motion } from "framer-motion";

export default function QuickstartSection() {
  const steps = [
    {
      number: "01",
      title: "Install",
      code: "pip install eiondb"
    },
    {
      number: "02", 
      title: "Connect",
      code: "client = EionClient()"
    },
    {
      number: "03",
      title: "Build", 
      code: "client.register_agent()"
    }
  ];

  return (
    <section id="quickstart" className="py-20 section-reveal" style={{ background: 'linear-gradient(to right, var(--eion-navy), var(--eion-dark))' }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
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
            Start building with EionDB's multi-agent coordination platform. Three simple steps to shared intelligence.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
            >
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--eion-cream)' }}>
                {step.number}
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--eion-cream)' }}>
                {step.title}
              </h3>
              <div className="bg-black/30 rounded-lg p-4 text-left">
                <code className="text-green-300 text-sm">{step.code}</code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
