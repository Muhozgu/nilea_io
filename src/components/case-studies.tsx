import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const caseStudies = [
  {
    title: "E-Commerce AI Personalization",
    industry: "Retail",
    description: "Implemented a recommendation engine that increased conversion rates by 45% and average order value by 32%.",
    impact: "+45% Conversion Rate",
    tags: ["Machine Learning", "Python", "AWS"]
  },
  {
    title: "Healthcare Diagnostics Platform",
    industry: "Healthcare",
    description: "Built an AI-powered diagnostic tool that reduced diagnosis time by 60% while maintaining 98% accuracy.",
    impact: "60% Faster Diagnoses",
    tags: ["Computer Vision", "TensorFlow", "React"]
  },
  {
    title: "Financial Fraud Detection",
    industry: "Finance",
    description: "Developed a real-time fraud detection system that prevented $2M in fraudulent transactions in the first quarter.",
    impact: "$2M Fraud Prevented",
    tags: ["Deep Learning", "Real-time", "Security"]
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-gray-900 mb-4">Success Stories</h2>
          <p className="text-gray-600">
            Real results from real clients. See how we've helped businesses transform with AI-powered solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all group cursor-pointer border-gray-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{study.industry}</Badge>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">{study.title}</CardTitle>
                  <CardDescription>{study.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 p-3 bg-green-50 rounded-lg">
                    <div className="text-green-700">{study.impact}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
