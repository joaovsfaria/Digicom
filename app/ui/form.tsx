// components/ContactForm.tsx
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mb-24">
      <h2 className="text-2xl font-bold mb-4 text-[#2A4E6E]">Fale Conosco</h2>
      <p className="text-[#6A6D71] mb-4">
        Vulputate quis a nulla vitae malesuada. Ac gravida auctor cras elit. Integer ut sed erat viverra vitae.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md bg-[#F2F4F5]"
            placeholder="Content"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full rounded-md bg-[#F2F4F5]"
            placeholder="Content"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full rounded-md bg-[#F2F4F5]"
            placeholder="Placeholder"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            className="mt-1 p-2 w-full rounded-md bg-[#F2F4F5]"
            placeholder="Placeholder"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
        </div>
            <button
            type="submit"
            className="w-1/2 bg-[#F26409] text-white p-3 rounded-md"
            >
            Enviar
            </button>
      </form>
    </div>
  );
};

export default ContactForm;

