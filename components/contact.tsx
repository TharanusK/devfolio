"use client";

import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState, useTransition } from "react";
import { sendEmail } from "@/actions/send-email";

export function Contact() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setStatus(null);

    startTransition(async () => {
      const result = await sendEmail(formData);

      if (result.error) {
        setStatus({ success: false, message: result.error });
      } else {
        setStatus({
          success: true,
          message: "Message sent! I'll get back to you soon.",
        });
        (event.target as HTMLFormElement).reset();
      }
    });
  }

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-16 lg:py-20  bg-gray-50 dark:bg-zinc-900/50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <span className="text-sm font-bold tracking-wider text-purple-600 uppercase">
              Get in Touch
            </span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Contact Me
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions or want to collaborate? Reach out to me directly
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-600 text-white shadow-lg">
                <Mail className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-muted-foreground">tharanus.k@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-600 text-white shadow-lg">
                <Phone className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg">Phone</h3>
                <p className="text-muted-foreground">+66 89 041 8913</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-600 text-white shadow-lg">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg">Location</h3>
                <p className="text-muted-foreground">Nonthaburi, Thailand</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    disabled={isPending}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    disabled={isPending}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or question..."
                    className="min-h-[150px]"
                    required
                    disabled={isPending}
                  />
                </div>
                {status && (
                  <div
                    className={`text-sm p-3 rounded-md ${
                      status.success
                        ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
