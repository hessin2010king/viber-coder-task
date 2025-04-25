import React, { useState } from 'react';
import heroImages from '../utils/heroData';

const HeroSection = () => {
  const [heroData, setHeroData] = useState({
    headline: 'Elevate Digital Experiences',
    subheadline: 'Innovative solutions at the intersection of design and technology',
    ctaText: 'Explore Possibilities',
    image: heroImages[0]
  });

  const [editMode, setEditMode] = useState({
    headline: false,
    subheadline: false,
    ctaText: false
  });

  const regenerateHero = () => {
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    const headlines = [
      'Elevate Digital Experiences',
      'Reimagine Innovation',
      'Future-Proof Solutions',
      'Transformative Technology',
      'Intelligent Design Ecosystem'
    ];
    const subheadlines = [
      'Innovative solutions at the intersection of design and technology',
      'Bridging creativity with cutting-edge digital strategies',
      'Empowering businesses through intelligent design',
      'Crafting seamless digital experiences',
      'Pioneering the next generation of digital transformation'
    ];
    const ctaTexts = [
      'Explore Possibilities',
      'Start Journey',
      'Discover More',
      'Unlock Potential',
      'Get Insights'
    ];

    setHeroData({
      headline: headlines[Math.floor(Math.random() * headlines.length)],
      subheadline: subheadlines[Math.floor(Math.random() * subheadlines.length)],
      ctaText: ctaTexts[Math.floor(Math.random() * ctaTexts.length)],
      image: heroImages[randomIndex]
    });
  };

  const handleEdit = (field, value) => {
    setHeroData(prev => ({ ...prev, [field]: value }));
  };

  const toggleEditMode = (field) => {
    setEditMode(prev => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center animate-fade-in-up">
        <div className="space-y-8">
          <div className="bg-primary-50/50 p-4 rounded-2xl inline-block">
            <span className="text-primary-600 font-medium text-sm tracking-wide">
              Next-Gen Digital Solutions
            </span>
          </div>

          {editMode.headline ? (
            <input
              type="text"
              value={heroData.headline}
              onChange={(e) => handleEdit('headline', e.target.value)}
              onBlur={() => toggleEditMode('headline')}
              className="text-5xl font-display font-bold w-full border-2 border-primary-300 p-3 rounded-3xl bg-white shadow-soft focus:ring-2 focus:ring-primary-500 transition"
              autoFocus
            />
          ) : (
            <h1 
              className="text-5xl font-display font-bold text-neutral-900 hover:text-primary-600 cursor-pointer transition duration-300 ease-in-out"
              onClick={() => toggleEditMode('headline')}
            >
              {heroData.headline}
            </h1>
          )}

          {editMode.subheadline ? (
            <input
              type="text"
              value={heroData.subheadline}
              onChange={(e) => handleEdit('subheadline', e.target.value)}
              onBlur={() => toggleEditMode('subheadline')}
              className="text-xl text-neutral-600 w-full border-2 border-primary-300 p-3 rounded-3xl bg-white shadow-soft focus:ring-2 focus:ring-primary-500 transition"
              autoFocus
            />
          ) : (
            <p 
              className="text-xl text-neutral-600 hover:text-primary-500 cursor-pointer transition duration-300 ease-in-out"
              onClick={() => toggleEditMode('subheadline')}
            >
              {heroData.subheadline}
            </p>
          )}

          <div className="flex space-x-4">
            {editMode.ctaText ? (
              <input
                type="text"
                value={heroData.ctaText}
                onChange={(e) => handleEdit('ctaText', e.target.value)}
                onBlur={() => toggleEditMode('ctaText')}
                className="px-6 py-4 bg-primary-500 text-white rounded-3xl border-2 border-primary-500 w-full focus:ring-2 focus:ring-primary-600 transition text-center"
                autoFocus
              />
            ) : (
              <button 
                className="px-8 py-4 bg-primary-500 text-white rounded-3xl hover:bg-primary-600 transition duration-300 ease-in-out shadow-medium hover:shadow-large transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                onClick={() => toggleEditMode('ctaText')}
              >
                <span>{heroData.ctaText}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            )}
            <button 
              className="px-8 py-4 bg-neutral-800 text-white rounded-3xl hover:bg-neutral-700 transition duration-300 ease-in-out shadow-medium hover:shadow-large transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              onClick={regenerateHero}
            >
              <span>Regenerate</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center relative">
          <div className="absolute -inset-4 bg-primary-100/50 rounded-4xl blur-3xl opacity-50 animate-subtle-bounce"></div>
          <img 
            src={heroData.image} 
            alt="Hero Illustration" 
            className="relative max-w-full h-auto rounded-4xl shadow-glass transform transition duration-500 hover:scale-105 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 