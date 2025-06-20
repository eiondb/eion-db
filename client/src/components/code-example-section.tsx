import { motion } from "framer-motion";

export default function CodeExampleSection() {
  const codeString = `# Connect to EionDB cluster for multi-agent coordination
from eiondb import EionClient

# Initialize client connection
client = EionClient()

# Register collaborative agents
agent_a = client.register_agent(
    agent_id="researcher",
    name="Research Assistant", 
    permission="crud",
    description="Gathers and analyzes information"
)
agent_b = client.register_agent(
    agent_id="analyst", 
    name="Data Analyst",
    permission="crud",
    description="Processes research findings"
)

# The first shared mind is born`;

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
            See how easy it is to connect agents through EionDB's shared intelligence platform
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
            <span className="text-sm" style={{ color: 'rgba(240, 224, 199, 0.6)' }}>agent_connection.py</span>
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
                  ) : line.trim().startsWith('from') || line.trim().startsWith('import') ? (
                    <span>
                      {line.match(/^(\s*)/)?.[1]}<span className="text-blue-300">from</span> <span className="text-green-300">eiondb</span> <span className="text-blue-300">import</span> EionClient
                    </span>
                  ) : line.includes('=') && !line.includes('print') && line.trim() !== '' ? (
                    <span>
                      {line.match(/^(\s*)/)?.[1]}<span className="text-yellow-300">{line.split('=')[0].trim()}</span> = {line.split('=').slice(1).join('=')}
                    </span>
                  ) : line.includes('print') ? (
                    <span>
                      {line.match(/^(\s*)/)?.[1]}<span className="text-blue-300">print</span>(<span className="text-green-300">f"Connected agents: {'{len(client.list_agents())}'}"</span>)
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
