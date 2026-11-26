import { useState, useRef, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

// Strict validation & security schema matching the SS form fields
const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name is required")
    .max(80, "Name must be under 80 characters")
    .regex(/^[^<>'"`;]+$/, "Special characters are not allowed"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(100, "Email must be under 100 characters"),
  phone: z
    .string()
    .trim()
    .min(6, "Please enter a valid phone number")
    .max(25, "Phone number is too long")
    .regex(/^[+0-9\s\-()]+$/, "Please enter a valid phone number format"),
  subject: z
    .string()
    .trim()
    .min(2, "Subject is required")
    .max(120, "Subject must be under 120 characters")
    .regex(/^[^<>'"`;]+$/, "Special characters are not allowed"),
  message: z
    .string()
    .trim()
    .min(5, "Message must be at least 5 characters")
    .max(2000, "Message must be under 2000 characters"),
  // Invisible bot honeypot field
  hp_website_trap: z.string().max(0, "Bot detected").optional().default(""),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface EnhancedContactFormProps {
  onSuccess?: () => void;
}

const EnhancedContactForm = ({ onSuccess }: EnhancedContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const lastSubmitTimeRef = useRef<number>(0);
  const formLoadTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    formLoadTimeRef.current = Date.now();
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      hp_website_trap: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // 1. Anti-bot honeypot check
    if (data.hp_website_trap && data.hp_website_trap.trim().length > 0) {
      setIsSubmitted(true);
      return;
    }

    // 2. Fast-submit bot check
    if (Date.now() - formLoadTimeRef.current < 1200) {
      toast.error("Submission was too fast. Please take your time.");
      return;
    }

    // 3. Rate limiting (5s cooldown)
    const now = Date.now();
    if (now - lastSubmitTimeRef.current < 5000) {
      toast.warning("Please wait a few seconds before submitting again.");
      return;
    }
    lastSubmitTimeRef.current = now;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully! We will get back to you shortly.");

    if (onSuccess) {
      setTimeout(onSuccess, 2000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-10 px-4 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-6">
          <CheckCircle className="w-8 h-8 text-blue-400" />
        </div>
        <h3 className="font-display text-2xl font-bold mb-2 text-white">Thank You!</h3>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-6">
          Your message has been received. Our team will get back to you promptly.
        </p>
        <Button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            form.reset();
          }}
          variant="outline"
          className="rounded-full px-6 border-white/20 hover:border-white/40"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  autoComplete="name"
                  placeholder="Full Name*"
                  className="h-12 bg-white/[0.03] border-white/10 rounded-lg text-white placeholder:text-muted-foreground/60 text-base sm:text-sm focus-visible:ring-1 focus-visible:ring-blue-500/60 focus-visible:border-blue-500/50 transition-all"
                />
              </FormControl>
              <FormMessage className="text-[11px] text-red-400" />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="Email*"
                  className="h-12 bg-white/[0.03] border-white/10 rounded-lg text-white placeholder:text-muted-foreground/60 text-base sm:text-sm focus-visible:ring-1 focus-visible:ring-blue-500/60 focus-visible:border-blue-500/50 transition-all"
                />
              </FormControl>
              <FormMessage className="text-[11px] text-red-400" />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="Phone*"
                  className="h-12 bg-white/[0.03] border-white/10 rounded-lg text-white placeholder:text-muted-foreground/60 text-base sm:text-sm focus-visible:ring-1 focus-visible:ring-blue-500/60 focus-visible:border-blue-500/50 transition-all"
                />
              </FormControl>
              <FormMessage className="text-[11px] text-red-400" />
            </FormItem>
          )}
        />

        {/* Subject */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Subject*"
                  className="h-12 bg-white/[0.03] border-white/10 rounded-lg text-white placeholder:text-muted-foreground/60 text-base sm:text-sm focus-visible:ring-1 focus-visible:ring-blue-500/60 focus-visible:border-blue-500/50 transition-all"
                />
              </FormControl>
              <FormMessage className="text-[11px] text-red-400" />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  rows={4}
                  placeholder="Message*"
                  className="resize-none bg-white/[0.03] border-white/10 rounded-lg text-white placeholder:text-muted-foreground/60 text-base sm:text-sm focus-visible:ring-1 focus-visible:ring-blue-500/60 focus-visible:border-blue-500/50 transition-all"
                />
              </FormControl>
              <FormMessage className="text-[11px] text-red-400" />
            </FormItem>
          )}
        />

        {/* Honeypot field (hidden from human visitors) */}
        <div className="hidden opacity-0 h-0 w-0 pointer-events-none overflow-hidden" aria-hidden="true" tabIndex={-1}>
          <FormField
            control={form.control}
            name="hp_website_trap"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} tabIndex={-1} autoComplete="off" />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-12 h-12 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] hover:scale-105 transition-all duration-300"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                SENDING...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                SUBMIT
                <Send className="w-3.5 h-3.5 ml-1" />
              </span>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EnhancedContactForm;
