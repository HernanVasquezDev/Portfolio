import { useState, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

export const Contact = () => {
  const { t } = useTranslation();
  const toast = useRef<Toast>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.current?.show({
        severity: "warn",
        summary: t('contact.toast.incomplete.summary'),
        detail: t('contact.toast.incomplete.detail'),
        life: 3000,
      });
      return;
    }

    setIsSending(true);

    try {
      const res = await fetch("https://portfolio-backend-uy4v.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.current?.show({
          severity: "success",
          summary: t('contact.toast.success.summary'),
          detail: t('contact.toast.success.detail'),
          life: 4000,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.current?.show({
          severity: "error",
          summary: t('contact.toast.serverError.summary'),
          detail: t('contact.toast.serverError.detail'),
          life: 4000,
        });
      }
    } catch {
      toast.current?.show({
        severity: "error",
        summary: t('contact.toast.connectionError.summary'),
        detail: t('contact.toast.connectionError.detail'),
        life: 4000,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 px-6 py-24"
    >
      <Toast ref={toast} />
      <SectionTitle>{t('contact.title')}</SectionTitle>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-lg w-full bg-gray-900/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-800"
      >
        {/* title moved to SectionTitle for consistency */}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder={t('contact.namePlaceholder')}
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder={t('contact.emailPlaceholder')}
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            placeholder={t('contact.messagePlaceholder')}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 h-32 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
          <Button
            type="submit"
            label={isSending ? t('contact.sending') : t('contact.send')}
            icon={isSending ? "pi pi-spin pi-spinner" : "pi pi-send"}
            disabled={isSending}
            className="w-full !bg-cyan-300 !border-none !text-black !font-medium hover:opacity-90 transition"
          />
        </form>
      </motion.div>
    </section>
  );
};
