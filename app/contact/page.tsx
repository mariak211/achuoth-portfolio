
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { validateForm, FormErrors } from "@/lib/validation-contact-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { isValid, errors } = validateForm(formData);
    setErrors(errors);

    if (!isValid) {
      return;
    }

    try {
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        
        // Reset the form data to its initial state
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
        });

        // Clear the errors
        setErrors({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%]">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let's Connect</h3>
              <p className="text-white/60">
                Have a project in mind or just want to say hello? I'm eager to connect and learn more about how we can create something amazing together.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="firstname"
                    type="text"
                    placeholder="Firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className={errors.firstname ? 'border-red-500' : ''}
                  />
                  {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
                </div>
                <div>
                  <Input
                    name="lastname"
                    type="text"
                    placeholder="Lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className={errors.lastname ? 'border-red-500' : ''}
                  />
                  {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                  <Input
                    name="phone"
                    type="text"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'border-red-500' : ''}
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <Textarea
                  name="message"
                  className={`h-[200px] ${errors.message ? 'border-red-500' : ''}`}
                  placeholder="Type your message here."
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
            
              <Button size="md" className="max-w-40" type="submit">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
