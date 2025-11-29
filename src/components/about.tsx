import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const highlights = [
  "Expert team of AI engineers and data scientists",
  "Proven track record across multiple industries",
  "Agile development methodology",
  "End-to-end project management",
  "24/7 support and maintenance",
  "Cutting-edge technology stack"
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-4/3 rounded-2xl overflow-hidden bg-linear-to-br from-blue-100 to-purple-100">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjM5NzQwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-linear-to-br from-purple-400 to-pink-400 rounded-2xl opacity-20 blur-2xl"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-gray-900">
              Building the Future with AI Excellence
            </h2>
            
            <p className="text-gray-600">
              At NexusAI, we're more than just consultants—we're your innovation partners. With a decade of combined experience in AI and software development, our team brings deep technical expertise and business acumen to every project.
            </p>

            <p className="text-gray-600">
              We believe in the transformative power of AI and are committed to making it accessible and impactful for businesses of all sizes. Our human-centered approach ensures that technology serves your goals, not the other way around.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
