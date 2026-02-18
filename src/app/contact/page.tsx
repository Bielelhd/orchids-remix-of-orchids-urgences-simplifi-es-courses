"use client";

import { useState } from "react";
import { Mail, Send, MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="brand-gradient py-16 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Contactez-<span className="text-orange-300">nous</span>
          </h1>
          <p className="text-lg text-purple-100">
            Une question sur nos formations ? Nous sommes là pour vous répondre.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Comment nous joindre
              </h2>

              {/* Email */}
              <div className="flex gap-4 p-5 rounded-2xl bg-purple-50 border border-purple-100 mb-4 card-hover">
                <div className="w-12 h-12 rounded-xl brand-gradient flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-sm text-gray-500 mb-1">
                    Réponse sous 24h ouvrées
                  </p>
                  <a
                    href="mailto:contact@urgences-simplifiees.com"
                    className="text-purple-700 font-semibold text-sm hover:text-purple-900 transition-colors"
                  >
                    contact@urgences-simplifiees.com
                  </a>
                </div>
              </div>

              {/* Telegram */}
              <div className="flex gap-4 p-5 rounded-2xl bg-blue-50 border border-blue-100 mb-8 card-hover">
                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Communauté Telegram
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Rejoignez des centaines de médecins et étudiants. Posez vos
                    questions, partagez vos expériences et progressez ensemble.
                  </p>
                  <a
                    href="https://t.me/urgences_simplifiees"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Rejoindre le groupe
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* FAQ shortcut */}
              <div className="p-5 rounded-2xl bg-orange-50 border border-orange-100">
                <h3 className="font-bold text-gray-900 mb-3">
                  Questions fréquentes
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "Comment payer la formation ?",
                    "Puis-je accéder depuis mon téléphone ?",
                    "Y a-t-il un accès de groupe pour les promotions ?",
                    "Puis-je acheter les deux formations ensemble ?",
                  ].map((q) => (
                    <li key={q} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      {q}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-gray-400">
                  Envoyez-nous un message et nous répondrons à toutes vos questions.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-100/50 overflow-hidden">
                <div className="brand-gradient px-6 py-5">
                  <h2 className="text-lg font-bold text-white">
                    Envoyer un message
                  </h2>
                  <p className="text-purple-200 text-sm">
                    Nous vous répondrons dans les meilleurs délais.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Message envoyé !
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Merci pour votre message. Nous vous répondrons sous 24h.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ nom: "", email: "", sujet: "", message: "" });
                      }}
                      className="mt-6 text-sm text-purple-700 hover:text-purple-900 font-semibold transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Nom complet <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.nom}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, nom: e.target.value }))
                          }
                          placeholder="Dr. Ahmed Benali"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, email: e.target.value }))
                          }
                          placeholder="votre@email.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Sujet <span className="text-red-400">*</span>
                      </label>
                      <select
                        required
                        value={form.sujet}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, sujet: e.target.value }))
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all text-gray-700"
                      >
                        <option value="">Sélectionner un sujet</option>
                        <option value="inscription">
                          S&apos;inscrire à une formation
                        </option>
                        <option value="pack">Acheter le pack complet</option>
                        <option value="question">
                          Question sur le contenu
                        </option>
                        <option value="technique">Problème technique</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, message: e.target.value }))
                        }
                        placeholder="Décrivez votre demande..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all placeholder:text-gray-400 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Envoyer le message
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      Vos informations sont traitées en toute confidentialité.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center mx-auto mb-5">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Rejoignez notre communauté Telegram
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto">
            Des centaines de médecins et étudiants y partagent leurs expériences,
            posent leurs questions et s&apos;entraident au quotidien.
          </p>
          <a
            href="https://t.me/urgences_simplifiees"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl transition-all shadow-xl text-base"
          >
            <Send className="w-5 h-5" />
            Rejoindre le groupe Telegram
          </a>
        </div>
      </section>
    </div>
  );
}
