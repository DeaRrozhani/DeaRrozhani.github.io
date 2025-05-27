'use client';

import Image from "next/image";
import { FormEvent, useState } from 'react';

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setFormStatus('success');
      e.currentTarget.reset();
    } catch (error) {
      setFormStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Dea Rrozhani</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            {/* Curious builder, thoughtful leader, lifelong learner. */}
            {/* On a journey to create, connect, and contribute. */}
            {/* Passionate about learning, building, and helping others. */}
            Driven by curiosity, guided by purpose.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.linkedin.com/in/drrozhani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-lg font-medium transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
              LinkedIn
            </a>
            <a
              href="mailto:drrozhani@gmail.com"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-lg font-medium transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v16H4V4zm0 0l8 8 8-8" /></svg>
              Email
            </a>
          </div>
          <a
            href="#about"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/aboutphoto.jpg"
                alt="Dea Rrozhani"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/800x800?text=Your+Photo";
                }}
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I'm a Computer Science graduate (B.S.E.) and current Robotics master's student at the University of Pennsylvania, passionate about building technology that drives real-world change. My journey spans software, hardware, and leadership—whether developing award-winning apps, leading engineering teams, or representing my country on the global stage. I thrive at the intersection of innovation, education, and impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Programming Languages */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-lg font-medium">Programming Languages</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                Java, Python, TypeScript, C
              </p>
            </div>
            {/* Web */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-lg font-medium">Web</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                React, HTML, CSS
              </p>
            </div>
            {/* Backend */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-lg font-medium">Backend</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                REST, NodeJS
              </p>
            </div>
            {/* Data */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-medium">Data</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                SQL, Pandas, Apache Spark, Excel
              </p>
            </div>
            {/* Tools */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-lg font-medium">Tools</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                Git, AWS, Docker, Firebase
              </p>
            </div>
            {/* Mobile */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-medium">Mobile</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                Android Development
              </p>
            </div>
            {/* Machine Learning */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-lg font-medium">Machine Learning</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                PyTorch, Matplotlib, Scikit-learn
              </p>
            </div>
            {/* Design */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-medium">Design</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                Figma, UI/UX
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Penn Electric Racing (FSAE) */}
            <div className="bg-white dark:bg-black rounded-lg overflow-hidden shadow-lg flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/per2.jpg"
                  alt="Penn Electric Racing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">Penn Electric Racing (FSAE)</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Dashboard app developer, PCB designer, and operations lead for Penn's Formula SAE team. Led technical and business initiatives, including a major sponsorship and internship pipeline. Skills: React, JavaScript, PCB Design, Altium.
                </p>
                <div className="mt-auto flex space-x-4">
                  <a
                    href="https://www.pennelectricracing.com"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* GjejZa App */}
            <div className="bg-white dark:bg-black rounded-lg overflow-hidden shadow-lg flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/gjejzaphones.jpg"
                  alt="GjejZa App"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">GjejZa App</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Co-founder and lead engineer of an award-winning app fighting gender-based violence in Albania. 1000+ downloads, featured in Forbes, and recognized by the U.S. Department of State, UN Women, and UNICEF. Skills: Java, Android Studio, Firebase.
                </p>
                <div className="mt-auto flex space-x-4">
                  <a
                    href="https://tinyurl.com/GjejZaPlayStore"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Play Store
                  </a>
                  <a
                    href="https://tinyurl.com/GjejZaForbes"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Forbes Feature
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Penn SWE - Professional Development Co-Director */}
            <div className="bg-white dark:bg-black rounded-lg p-6 shadow-lg flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 mr-4">
                  <span className="text-2xl">👩‍💼</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Professional Development Co-Director</h3>
                  <p className="text-gray-600 dark:text-gray-400">Penn Society of Women Engineers</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 flex-1">
                Co-organized Penn SWE's Corporate Dinner, connecting 200+ students with 13 companies. Led all event logistics and sponsor relations.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Event Planning
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Leadership
                </span>
              </div>
            </div>
            {/* Head Teaching Assistant - ESE 1110 & ESE 1900 */}
            <div className="bg-white dark:bg-black rounded-lg p-6 shadow-lg flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 mr-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Head Teaching Assistant</h3>
                  <p className="text-gray-600 dark:text-gray-400">ESE 1110 & ESE 1900, UPenn</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 flex-1">
                Led recitations, mentored students, and coordinated logistics for foundational engineering courses for 3 years, supporting hundreds of students.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Teaching
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Mentorship
                </span>
              </div>
            </div>
            {/* Penn Electric Racing - Operations & Sponsorship */}
            <div className="bg-white dark:bg-black rounded-lg p-6 shadow-lg flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 mr-4">
                  <span className="text-2xl">🏎️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Operations & Sponsorship Lead</h3>
                  <p className="text-gray-600 dark:text-gray-400">Penn Electric Racing</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 flex-1">
                Negotiated a sponsorship deal and established an internship pipeline, providing free machined parts and career opportunities for the team.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Sponsorship
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Operations
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Negotiation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honors & Awards Section */}
      <section id="honors" className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Honors & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Technovation Grand Prize Winner */}
            <div className="bg-gradient-to-br from-cyan-100 to-cyan-300 dark:from-cyan-900 dark:to-cyan-700 rounded-lg p-6 shadow-lg flex flex-col items-start">
              <span className="text-3xl mb-2">🏆</span>
              <h3 className="text-xl font-bold mb-1">Technovation Grand Prize Winner</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-1">GjejZa App</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">August 2019, Silicon Valley</p>
            </div>
            {/* Penn World Scholar */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-900 dark:to-blue-700 rounded-lg p-6 shadow-lg flex flex-col items-start">
              <span className="text-3xl mb-2">🌍</span>
              <h3 className="text-xl font-bold mb-1">Penn World Scholar</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">University of Pennsylvania</p>
              <p className="text-gray-700 dark:text-gray-200 text-base">A highly selective program recognizing exceptional leadership and academic achievement among international students at Penn.</p>
            </div>
            {/* Silver Medal: Clara Barton Award */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-300 dark:from-purple-900 dark:to-purple-700 rounded-lg p-6 shadow-lg flex flex-col items-start">
              <span className="text-3xl mb-2">🥈</span>
              <h3 className="text-xl font-bold mb-1">Silver Medal: Clara Barton Award</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-1">FIRST Global (Team Albania)</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">October 2019, Dubai</p>
            </div>
            {/* Speaker at U.S. Embassy 4th of July */}
            <div className="bg-gradient-to-br from-cyan-100 to-cyan-300 dark:from-cyan-900 dark:to-cyan-700 rounded-lg p-6 shadow-lg flex flex-col items-start">
              <span className="text-3xl mb-2">🎤</span>
              <h3 className="text-xl font-bold mb-1">Speaker, U.S. Embassy 4th of July Celebration</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Tirana, 2021</p>
              <p className="text-gray-700 dark:text-gray-200 text-base">Chosen to represent Albania at the U.S. Embassy 4th of July Celebration in Tirana, 2021.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section id="volunteering" className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Volunteering & Community</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* FIRST Global Volunteering */}
            <div className="w-full md:w-1/3 aspect-[3/2] relative rounded-lg overflow-hidden">
              <Image
                src="/volunteering.jpg"
                alt="FIRST Global Volunteering"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/600x400?text=Volunteering";
                }}
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">FIRST Global</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Representative (2023 Singapore, 2024 Greece), Technical Award Judge (Panama 2025)
              </p>
              <p className="text-gray-600 dark:text-gray-400 flex-1">
                Volunteered at FIRST Global, an olympic-style robotics competition with 190+ countries. As a Representative, communicated with Ambassadors, government officials, and sponsors. In 2025, serving as a Technical Award Judge, reviewing and assessing teams' robot designs.
              </p>
              <div className="mt-4">
                <a
                  href="https://first.global/"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
                  required
                  disabled={formStatus === 'loading'}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
                  required
                  disabled={formStatus === 'loading'}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
                  required
                  disabled={formStatus === 'loading'}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={formStatus === 'loading'}
              >
                {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {formStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
