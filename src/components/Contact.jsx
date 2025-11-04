import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { cn } from "../lib/utils";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import Map from "./Map";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const formInput = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(formInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // console.log(formData);

    setTimeout(() => {
      enqueueSnackbar(
        "Thank you for your message. We will get back to you soon."
      );
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary ">Touch</span>
        </h2>

        <p className="text-center text-sm text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate ? Feel free to reach out
          to us. We're always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 ">
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-start">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:manthemanmr@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Manthemanmr@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-start">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:2348065611409"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +234 (806) 561-1409
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-start w-full">
                  <h4 className="font-medium mb-2">Location</h4>
                  <Map/>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-col pt-4 justify-center items-center p-4 ">
              <h4 className=" py-4 text-start width-full">Connect with us</h4>
              <div className="flex space-x-4">
                <a target="_blank" href="www.linkedin.com">
                  <Linkedin />
                </a>
                <a target="_blank" href="www.x.com">
                  <X />
                </a>
                <a target="_blank" href="www.facebook.com">
                  <Facebook />
                </a>
                <a target="_blank" href="www.instagram.com">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="mb-2">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium mb-2 text-start "
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  value={formData.name}
                  onChange={handleFormChange}
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="given-name"
                  required
                  className="w-full p-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2 text-start "
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  value={formData.email}
                  onChange={handleFormChange}
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full p-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2 text-start "
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={handleFormChange}
                  id="message"
                  name="message"
                  required
                  className="w-full p-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Enter your message.."
                />
              </div>
              <div>
                <SnackbarProvider />
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2"
                  )}
                >
                  {isSubmitting ? "Sending.." : "Send Message"}
                  <Send size={16} />
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
        <div className="pt-8 md:hidden">
          <h4 className="p-4">Connect with us</h4>
          <div className="flex space-x-4 justify-center">
            <a target="_blank" href="www.linkedin.com">
              <Linkedin />
            </a>
            <a target="_blank" href="www.x.com">
              <X />
            </a>
            <a target="_blank" href="www.facebook.com">
              <Facebook />
            </a>
            <a target="_blank" href="www.instagram.com">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
