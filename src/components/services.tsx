import { Brain, Code, LineChart, Cpu, Zap, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { motion } from "motion/react";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description: "Navigate your AI transformation journey with expert guidance. We help identify opportunities, design roadmaps, and ensure ROI.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Build scalable, robust applications tailored to your needs. From web apps to mobile solutions, we deliver excellence.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Cpu,
    title: "Machine Learning Solutions",
    description: "Leverage advanced ML models to automate processes, predict outcomes, and unlock insights from your data.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: LineChart,
    title: "Data Analytics & BI",
    description: "Transform raw data into actionable insights. We build intelligent dashboards and analytics platforms.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation. Reduce costs and increase efficiency across your organization.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "AI Integration & Deployment",
    description: "Seamlessly integrate AI capabilities into your existing systems. We ensure smooth deployment and ongoing support.",
    gradient: "from-indigo-500 to-purple-500"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600">
            Comprehensive AI and software development services designed to accelerate your digital transformation and drive measurable business outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-gray-200">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
