import { useState } from "react";
import Button from "@mui/material/Button";
import AnimatedPage from "./AnimatedPage";
const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:sampuranpandey03@gmail.com?subject=Contact from ${form.name}&body=Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0AMessage: ${form.message}`;

    window.location.href = mailtoLink;
  };

  return (
    <AnimatedPage>
      <main className="px-6 py-2 text-gray-800 max-w-5xl mx-auto leading-relaxed">
        <div className=" w-full  p-2 overflow-y-auto rounded-lg bg-white shadow-lg">
          <div className=" w-full max-w-2xl  rounded-lg mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>

            <div className="mb-6 text-center">
              <a
                href="mailto:sampuranpandey03@gmail.com"
                className="mr-4 text-blue-600 font-semibold underline"
              >
                Email Us
              </a>
              <a
                href="https://wa.me/9097778000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 font-semibold underline"
              >
                WhatsApp Us
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="w-full border border-gray-300 p-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <Button variant="contained" className="!bg-gray-800">
                Send
              </Button>
            </form>
          </div>
        </div>
      </main>
    </AnimatedPage>
  );
};

export default ContactUs;
