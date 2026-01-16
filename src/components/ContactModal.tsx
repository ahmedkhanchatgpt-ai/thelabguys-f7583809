import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { teamMembers } from "@/data/teamMembers";
import { Mail, Sparkles, Zap, Shield, TrendingUp, Palette, Brain, MessageSquare, Users } from "lucide-react";
import EnhancedContactForm from "./EnhancedContactForm";

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
  const [activeTab, setActiveTab] = useState("form");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-0 overflow-visible border-0 bg-transparent shadow-none [&>button]:text-white [&>button]:hover:text-white">
        <div className="relative">
          {/* Gradient glow border - outer blur */}
          <div className="absolute -inset-[3px] rounded-xl bg-gradient-to-br from-purple-500 via-cyan-500 to-pink-500 blur-md opacity-70" />
          {/* Gradient border - sharp */}
          <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-br from-purple-500 via-cyan-500 to-pink-500" />
          
          {/* Content container */}
          <div className="relative rounded-xl bg-background/95 backdrop-blur-xl p-5">
            <DialogHeader className="mb-4">
              <DialogTitle className="font-display text-xl font-bold text-center">
                Let's <span className="text-gradient">Connect</span>
              </DialogTitle>
              <DialogDescription className="text-center text-muted-foreground text-sm">
                Send us a message or contact a team member directly.
              </DialogDescription>
            </DialogHeader>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full grid grid-cols-2 mb-4 bg-muted/30">
                <TabsTrigger value="form" className="gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-pink-600/20">
                  <MessageSquare className="w-4 h-4" />
                  Contact Form
                </TabsTrigger>
                <TabsTrigger value="team" className="gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-pink-600/20">
                  <Users className="w-4 h-4" />
                  Team Members
                </TabsTrigger>
              </TabsList>

              <TabsContent value="form" className="mt-0 max-h-[60vh] overflow-y-auto pr-1">
                <EnhancedContactForm onSuccess={() => onOpenChange(false)} />
              </TabsContent>

              <TabsContent value="team" className="mt-0 max-h-[60vh] overflow-y-auto pr-1">
                <div className="space-y-2">
                  {teamMembers.map((member, index) => (
                    <a
                      key={member.id}
                      href={`mailto:${member.email}`}
                      className="group flex items-center gap-3 p-3 rounded-xl glass border-2 border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/60 hover:shadow-[0_0_25px_3px_rgba(168,85,247,0.5),0_0_50px_6px_rgba(236,72,153,0.3),inset_0_0_20px_rgba(168,85,247,0.1)]"
                      onClick={() => onOpenChange(false)}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg ${member.iconBg} flex items-center justify-center text-white shadow-lg`}
                      >
                        {icons[index]}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-semibold text-sm text-foreground group-hover:text-white transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                      <Mail className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
