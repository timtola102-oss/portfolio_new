import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { renderSocialIcon, Icons } from './Icons';

export default function Contact() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState({ type: null, text: '' });

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({ type: null, text: '' });

    if (!formName.trim()) {
      setFormStatus({ type: 'error', text: 'Please fill out your name.' });
      return;
    }

    if (!formEmail.trim() || !/\S+@\S+\.\S+/.test(formEmail)) {
      setFormStatus({ type: 'error', text: 'Please provide a valid email address.' });
      return;
    }

    if (formMessage.trim().length < 10) {
      setFormStatus({ type: 'error', text: 'Message must be at least 10 characters long.' });
      return;
    }

    setFormStatus({
      type: 'loading',
      text: 'Sending message...'
    });

    try {
      const response = await fetch(
        "https://formspree.io/f/mojzvnpn",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formName,
            email: formEmail,
            message: formMessage,
          }),
        }
      );

      if (response.ok) {
        setFormStatus({
          type: "success",
          text: "Message sent successfully!"
        });

        setFormName("");
        setFormEmail("");
        setFormMessage("");
      } else {
        throw new Error();
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        text: "Failed to send message. Please try again."
      });
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 space-y-12">

      <div className="text-center space-y-4 max-w-xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Get In Touch</h2>
        <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full"></div>
        <p className="text-slate-500 dark:text-slate-400">Have an idea or looking for a builder? Say hello!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">

        <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Let's talk about your next venture</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              I enjoy discussing scalable system architectures, React optimal state flow patterns, and beautiful design patterns. Reach out to ask questions or simply grab a coffee!
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                <span className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg text-teal-500">
                  <Icons.Email />
                </span>
                <span className="font-semibold text-sm">tola.tim@student.passerellesnumeriques.org</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                <span className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg text-teal-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="font-semibold text-sm">BP 511, Phum Tropeang Chhuk (Borey Sorla) Sangtak, Street 371, Phnom Penh</span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Connect Elsewhere</p>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 border border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 rounded-xl text-sm font-semibold transition-all"
                >
                  {renderSocialIcon(link.icon)}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-6 md:p-8 rounded-3xl shadow-sm">
          <form onSubmit={handleContactSubmit} className="space-y-6">

            {formStatus.text && (
              <div className={`p-4 rounded-xl text-sm font-medium ${formStatus.type === 'error'
                  ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400 border border-rose-200/45 dark:border-rose-900/50'
                  : formStatus.type === 'success'
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 border border-emerald-200/45 dark:border-emerald-900/50'
                    : 'bg-teal-50 text-teal-700 dark:bg-teal-950/30 dark:text-teal-400 border border-teal-200/45 dark:border-teal-900/50 animate-pulse'
                }`}>
                {formStatus.text}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 dark:border-slate-800 dark:focus:ring-teal-500/30 dark:focus:border-teal-400 text-sm"
                disabled={formStatus.type === 'loading'}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 dark:border-slate-800 dark:focus:ring-teal-500/30 dark:focus:border-teal-400 text-sm"
                disabled={formStatus.type === 'loading'}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                Message Body
              </label>
              <textarea
                id="message"
                rows={5}
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                placeholder="Tell me briefly about your project plans..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 dark:border-slate-800 dark:focus:ring-teal-500/30 dark:focus:border-teal-400 text-sm resize-none"
                disabled={formStatus.type === 'loading'}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-teal-500 text-white font-bold rounded-xl shadow-lg shadow-teal-500/10 hover:bg-teal-600 transition-all duration-200 transform active:scale-[0.99] disabled:opacity-50"
              disabled={formStatus.type === 'loading'}
            >
              {formStatus.type === 'loading' ? 'Securing transmission...' : 'Submit Message'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}