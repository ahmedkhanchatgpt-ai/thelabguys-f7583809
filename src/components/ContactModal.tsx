import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { teamMembers } from "@/data/teamMembers";
import { Mail, Sparkles, Zap, Shield, TrendingUp, Palette, Brain } from "lucide-react";

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
  <Brain key="6" className="w-5 h-5" />,
];

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0 overflow-visible border-0 bg-transparent shadow-none [&>button]:text-white [&>button]:hover:text-white">
        <div className="relative">
          {/* Gradient glow border - outer blur */}
          <div className="absolute -inset-[3px] rounded-xl bg-gradient-to-br from-purple-500 via-cyan-500 to-pink-500 blur-md opacity-70" />
          {/* Gradient border - sharp */}
          <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-br from-purple-500 via-cyan-500 to-pink-500" />
          
          {/* Content container */}
          <div className="relative rounded-xl bg-background/95 backdrop-blur-xl p-6">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl font-bold text-center">
                Who would you like to <span className="text-gradient">contact?</span>
              </DialogTitle>
              <DialogDescription className="text-center text-muted-foreground">
                Select a team member to send them an email directly.
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-6 space-y-3">
              {teamMembers.map((member, index) => (
                <a
                  key={member.id}
                  href={`mailto:${member.email}`}
                  className="group flex items-center gap-4 p-4 rounded-2xl glass border-2 border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/60 hover:shadow-[0_0_25px_3px_rgba(168,85,247,0.5),0_0_50px_6px_rgba(236,72,153,0.3),inset_0_0_20px_rgba(168,85,247,0.1)]"
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
              ))}
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
