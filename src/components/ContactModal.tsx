import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { teamMembers } from "@/data/teamMembers";
import { Mail, Sparkles, Zap, Shield, TrendingUp, Palette } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const icons = [
  <Sparkles key="1" className="w-5 h-5" />,
  <Zap key="2" className="w-5 h-5" />,
  <Shield key="3" className="w-5 h-5" />,
  <TrendingUp key="4" className="w-5 h-5" />,
  <Palette key="5" className="w-5 h-5" />,
];

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass border-white/10 max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-bold text-center">
            Who would you like to <span className="text-gradient">contact?</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-6 space-y-3">
          {teamMembers.map((member, index) => {
            const glowColors: Record<string, string> = {
              'bg-gradient-to-br from-cyan-500 to-blue-600': 'hover:shadow-[0_0_25px_5px_rgba(6,182,212,0.4)]',
              'bg-gradient-to-br from-orange-500 to-red-600': 'hover:shadow-[0_0_25px_5px_rgba(249,115,22,0.4)]',
              'bg-gradient-to-br from-amber-500 to-orange-600': 'hover:shadow-[0_0_25px_5px_rgba(245,158,11,0.4)]',
              'bg-gradient-to-br from-emerald-500 to-teal-600': 'hover:shadow-[0_0_25px_5px_rgba(16,185,129,0.4)]',
              'bg-gradient-to-br from-pink-500 to-rose-600': 'hover:shadow-[0_0_25px_5px_rgba(236,72,153,0.4)]',
              'bg-gradient-to-br from-red-500 to-rose-600': 'hover:shadow-[0_0_25px_5px_rgba(239,68,68,0.4)]',
            };
            const glowClass = glowColors[member.iconBg] || 'hover:shadow-[0_0_25px_5px_rgba(168,85,247,0.4)]';
            
            return (
              <a
                key={member.id}
                href={`mailto:${member.email}`}
                className={`group flex items-center gap-4 p-4 rounded-2xl glass border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] ${glowClass}`}
                onClick={() => onOpenChange(false)}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${member.iconBg} flex items-center justify-center text-white shadow-lg`}
                >
                  {icons[index]}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground group-hover:text-white transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
            );
          })}
        </div>
        
        <div className="mt-6 pt-4 border-t border-white/10">
          <a
            href="mailto:hello@thelabguys.com"
            className="block w-full text-center py-3 px-6 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] text-white font-medium hover:bg-[position:100%_0] transition-all duration-500"
            onClick={() => onOpenChange(false)}
          >
            Contact the whole team
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
