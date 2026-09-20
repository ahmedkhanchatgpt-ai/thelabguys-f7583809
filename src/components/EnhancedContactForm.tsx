import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2, User, Mail, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const contactSchema = z.object({
  firstName: z.string().trim().min(2, "First name is required"),
  lastName: z.string().trim().min(2, "Last name is required"),
  workEmail: z.string().trim().email("Please enter a valid work email"),
  companySize: z.string().min(1, "Please select a company size"),
  scheduleDemo: z.boolean().default(false),
});

type ContactFormData = z.infer<typeof contactSchema>;

const companySizes = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-500", label: "201-500 employees" },
  { value: "500+", label: "500+ employees" },
];

interface EnhancedContactFormProps {
  onSuccess?: () => void;
}

const EnhancedContactForm = ({ onSuccess }: EnhancedContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      workEmail: "",
      companySize: "",
      scheduleDemo: true,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully! We'll get back to you shortly.");
    
    if (onSuccess) {
      setTimeout(onSuccess, 2000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="font-display text-2xl font-bold mb-2">Thank you!</h3>
        <p className="text-muted-foreground">
          Our manager will contact you shortly and help with all your questions.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 ml-1">First name</FormLabel>
                <FormControl>
                  <div className="relative group">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/50 transition-colors group-focus-within:text-purple-400">
                      <User className="w-4 h-4" />
                    </div>
                    <Input 
                      placeholder="Enter your first name" 
                      className="h-12 pl-10 bg-white/5 border-white/10 hover:bg-white/10 focus-visible:bg-white/[0.15] focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:border-purple-500/50 rounded-xl transition-all duration-300 backdrop-blur-sm shadow-inner"
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 ml-1">Last name</FormLabel>
                <FormControl>
                  <div className="relative group">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/50 transition-colors group-focus-within:text-purple-400">
                      <User className="w-4 h-4" />
                    </div>
                    <Input 
                      placeholder="Enter your last name" 
                      className="h-12 pl-10 bg-white/5 border-white/10 hover:bg-white/10 focus-visible:bg-white/[0.15] focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:border-purple-500/50 rounded-xl transition-all duration-300 backdrop-blur-sm shadow-inner"
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Work Email */}
          <FormField
            control={form.control}
            name="workEmail"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 ml-1">Work email</FormLabel>
                <FormControl>
                  <div className="relative group">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/50 transition-colors group-focus-within:text-purple-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <Input 
                      type="email"
                      placeholder="Enter work email" 
                      className="h-12 pl-10 bg-white/5 border-white/10 hover:bg-white/10 focus-visible:bg-white/[0.15] focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:border-purple-500/50 rounded-xl transition-all duration-300 backdrop-blur-sm shadow-inner"
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company Size */}
          <FormField
            control={form.control}
            name="companySize"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 ml-1">Company size</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12 bg-white/5 border-white/10 hover:bg-white/10 focus:bg-white/[0.15] focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 rounded-xl transition-all duration-300 backdrop-blur-sm shadow-inner">
                      <div className="flex items-center gap-2.5">
                        <Building2 className="w-4 h-4 text-muted-foreground/50" />
                        <SelectValue placeholder="Select Company size" />
                      </div>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-background/95 border-white/10 rounded-xl backdrop-blur-xl">
                    {companySizes.map((size) => (
                      <SelectItem key={size.value} value={size.value} className="focus:bg-white/10 cursor-pointer">
                        {size.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Schedule Demo Toggle */}
        <div className="flex items-center justify-between p-5 rounded-xl bg-white/[0.03] border border-white/10 shadow-inner backdrop-blur-sm transition-all hover:bg-white/[0.05]">
          <div className="space-y-1.5">
            <h4 className="text-sm font-semibold text-white/90">Schedule a Demo Call</h4>
            <p className="text-xs text-muted-foreground/80">
              Our manager will contact you shortly to help with all your questions.
            </p>
          </div>
          <FormField
            control={form.control}
            name="scheduleDemo"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-500 data-[state=checked]:to-pink-500"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-14 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:opacity-90 text-white rounded-xl text-base font-semibold shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-500 hover:scale-[1.02]"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            "Submit"
          )}
        </Button>

        <p className="text-[11px] text-muted-foreground text-center pt-2">
          By contacting with us you agree to our <a href="#" className="text-white hover:underline">Terms</a> and <a href="#" className="text-white hover:underline">Privacy Policy</a>
        </p>
      </form>
    </Form>
  );
};

export default EnhancedContactForm;
