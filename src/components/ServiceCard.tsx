import { forwardRef } from "react";
import { ArrowUpRight } from "lucide-react";
import type { ServiceItem } from "@/data/teamMembers";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  gradient: string;
  iconBg: string;
  email: string;
}

const ServiceCard = forwardRef<HTMLAnchorElement, ServiceCardProps>(
  ({ service, index, gradient, iconBg, email }, ref) => {
    return (
      <a
        ref={ref}
        href={`mailto:${email}?subject=Inquiry about ${service.title}`}
        className="group relative glass rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 block overflow-hidden"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Background gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Corner accent */}
        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradient} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity`} />
        
        {/* Number indicator */}
        <div className="absolute top-6 right-6 text-5xl font-display font-bold text-white/5 group-hover:text-white/10 transition-colors">
          {String(index + 1).padStart(2, '0')}
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
            <div className="w-5 h-5 rounded-full bg-white/90" />
          </div>

          <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-gradient transition-all">
            {service.title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            {service.description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Learn more</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
      </a>
    );
  }
);

ServiceCard.displayName = "ServiceCard";

export default ServiceCard;
