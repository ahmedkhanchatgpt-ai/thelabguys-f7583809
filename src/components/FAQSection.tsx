import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "What services does The Lab Guys offer?",
    answer: "We offer a comprehensive range of digital services including SEO & GEO optimization, web development, cybersecurity consulting, video editing & graphic design, data analysis, and AI/software engineering. Our team covers all aspects of your digital transformation needs."
  },
  {
    question: "How do we get started working with you?",
    answer: "Simply click the 'Get in Touch' button and fill out our contact form. We'll schedule a free consultation call to understand your needs, discuss your project requirements, and provide a tailored proposal within 48 hours."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. Small projects typically take 1-2 weeks, medium projects 2-6 weeks, and larger enterprise solutions 2-3 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes! We offer flexible maintenance packages to keep your digital assets running smoothly. This includes regular updates, security patches, performance monitoring, and priority support. We believe in building long-term partnerships with our clients."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We've worked across diverse industries including e-commerce, fintech, healthcare, education, real estate, and startups. Our diverse team brings cross-industry insights that help us deliver innovative solutions regardless of your sector."
  },
  {
    question: "How do you ensure the security of our data?",
    answer: "Security is paramount. We follow industry best practices including encrypted communications, secure development protocols, regular security audits, and strict data handling policies. Our cybersecurity expert ensures all projects meet the highest security standards."
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about working with The Lab Guys
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl border border-white/10 px-6 data-[state=open]:bg-white/5 transition-colors"
              >
                <AccordionTrigger className="text-left font-display font-medium hover:text-gradient transition-all py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
