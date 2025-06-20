import { motion } from "framer-motion";

export default function CodeExampleSection() {
  const codeString = `# Initialize shared memory for multi-agent system
from eion import SharedMemory, Agent

# Create unified knowledge graph
memory = SharedMemory()

# Connect agents to shared intelligence
agent_a = Agent("research", memory=memory)
agent_b = Agent("analysis", memory=memory)

# Agent A discovers new knowledge
agent_a.store_insight("user_preferences", {
    "category": "shopping",
    "confidence": 0.95,
    "context": "frequent_purchases"
})

# Agent B instantly accesses shared knowledge
insights = agent_b.query_memory("user_preferences")
print(f"Shared knowledge: {insights}")

# The first shared thought is born`;

  return (
    <section className="py-20 bg-white section-reveal">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-4xl font-bold mb-4" style={{ color: 'var(--eion-navy)' }}>
            The First Connection
          </h2>
          <p className="text-xl text-gray-600">
            See how easy it is to enable shared intelligence between agents
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 shadow-2xl"
          style={{ backgroundColor: 'var(--eion-navy)' }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <span className="text-sm" style={{ color: 'rgba(240, 224, 199, 0.6)' }}>shared_memory.py</span>
          </div>
          
          <pre className="font-mono text-sm overflow-x-auto" style={{ color: 'var(--eion-cream)' }}>
            <code>
              {codeString.split('\n').map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="block"
                >
                  {line.startsWith('#') ? (
                    <span className="text-gray-400">{line}</span>
                  ) : line.includes('from') || line.includes('import') ? (
                    <span>
                      <span className="text-blue-300">from</span> <span className="text-green-300">eion</span> <span className="text-blue-300">import</span> SharedMemory, Agent
                    </span>
                  ) : line.includes('=') && !line.includes('print') ? (
                    <span>
                      <span className="text-yellow-300">{line.split('=')[0].trim()}</span> = {line.split('=')[1]}
                    </span>
                  ) : line.includes('print') ? (
                    <span>
                      <span className="text-blue-300">print</span>(<span className="text-green-300">f"Shared knowledge: {'{insights}'}"</span>)
                    </span>
                  ) : (
                    line
                  )}
                </motion.div>
              ))}
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
