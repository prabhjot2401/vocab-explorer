import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const [learningMode, setLearningMode] = useState<'simple' | 'expert'>('simple');
  const [displayMode, setDisplayMode] = useState<'english' | 'cree'>('english');
  const [audioSource, setAudioSource] = useState<'y' | 'th' | 'both'>('both');

  const handleSignOut = () => {
    if (window.confirm('Are you sure you want to sign out?')) {
      // In a real app, handle sign out logic here
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] pt-14 md:pt-24 pb-28 md:pb-28 px-4 md:px-6 w-full max-w-[800px] space-y-6 md:space-y-10">
      {/* Top Bar */}
      <header className="fixed top-0 w-full md:w-[calc(100%-16rem)] md:left-64 z-50 bg-[#f9f9f9]/80 backdrop-blur-md flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-1.5 -ml-1.5 hover:bg-[#e8e8e8] transition-colors active:scale-95 duration-150 rounded-full flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[#1a1c1c]">arrow_back</span>
          </button>
          <h1 className="font-bold tracking-tight text-lg md:text-2xl text-[#1a1c1c]">Settings</h1>
        </div>
      </header>

      {/* Settings Group: Learning Mode */}
      <section className="space-y-3 md:space-y-6">
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[#004e99] text-[20px]">school</span>
          <h3 className="text-base md:text-lg font-bold tracking-tight">Learning Mode</h3>
        </div>
        <div className="bg-white p-1.5 md:p-2 rounded-xl md:rounded-2xl flex flex-col gap-0.5 md:gap-1 border border-[#c1c6d4]/10 shadow-sm">
          <label className="flex items-center justify-between p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-[#f3f3f3] transition-all cursor-pointer group">
            <div className="flex flex-col">
              <span className="font-semibold text-[#1a1c1c] text-sm md:text-base">Simple Mode</span>
              <span className="text-[10px] md:text-xs text-[#414752]">Beginner learners and students</span>
            </div>
            <input 
              type="radio" 
              name="learning_mode" 
              checked={learningMode === 'simple'} 
              onChange={() => setLearningMode('simple')}
              className="w-4 h-4 md:w-5 md:h-5 text-[#004e99] border-[#c1c6d4] focus:ring-[#004e99]" 
            />
          </label>
          <label className="flex items-center justify-between p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-[#f3f3f3] transition-all cursor-pointer group">
            <div className="flex flex-col">
              <span className="font-semibold text-[#1a1c1c] text-sm md:text-base">Expert Mode</span>
              <span className="text-[10px] md:text-xs text-[#414752]">Linguists and instructors</span>
            </div>
            <input 
              type="radio" 
              name="learning_mode" 
              checked={learningMode === 'expert'} 
              onChange={() => setLearningMode('expert')}
              className="w-4 h-4 md:w-5 md:h-5 text-[#004e99] border-[#c1c6d4] focus:ring-[#004e99]" 
            />
          </label>
        </div>
      </section>

      {/* Settings Group: Display Mode */}
      <section className="space-y-3 md:space-y-6">
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[#004e99] text-[20px]">visibility</span>
          <h3 className="text-base md:text-lg font-bold tracking-tight">Display Mode</h3>
        </div>
        <div className="bg-white p-1.5 md:p-2 rounded-xl md:rounded-2xl flex flex-col gap-0.5 md:gap-1 border border-[#c1c6d4]/10 shadow-sm">
          <label className="flex items-center justify-between p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-[#f3f3f3] transition-all cursor-pointer group">
            <div className="flex flex-col">
              <span className="font-semibold text-[#1a1c1c] text-sm md:text-base">Plain English Labels</span>
              <span className="text-[10px] md:text-xs text-[#414752]">Standard definitions and navigation</span>
            </div>
            <input 
              type="radio" 
              name="display_mode" 
              checked={displayMode === 'english'} 
              onChange={() => setDisplayMode('english')}
              className="w-4 h-4 md:w-5 md:h-5 text-[#004e99] border-[#c1c6d4] focus:ring-[#004e99]" 
            />
          </label>
          <label className="flex items-center justify-between p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-[#f3f3f3] transition-all cursor-pointer group">
            <div className="flex flex-col">
              <span className="font-semibold text-[#1a1c1c] text-sm md:text-base">nêhiyawêwin Labels</span>
              <span className="text-[10px] md:text-xs text-[#414752]">Immersive language interface mode</span>
            </div>
            <input 
              type="radio" 
              name="display_mode" 
              checked={displayMode === 'cree'} 
              onChange={() => setDisplayMode('cree')}
              className="w-4 h-4 md:w-5 md:h-5 text-[#004e99] border-[#c1c6d4] focus:ring-[#004e99]" 
            />
          </label>
        </div>
      </section>

      {/* Settings Group: Audio Source */}
      <section className="space-y-3 md:space-y-6">
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[#004e99] text-[20px]">spatial_audio_off</span>
          <h3 className="text-base md:text-lg font-bold tracking-tight">Audio Source</h3>
        </div>
        <div className="bg-white p-1.5 md:p-2 rounded-xl md:rounded-2xl flex flex-col gap-0.5 md:gap-1 border border-[#c1c6d4]/10 shadow-sm">
          <label className="flex items-center justify-between p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-[#f3f3f3] transition-all cursor-pointer">
            <span className="font-semibold text-[#1a1c1c] text-sm md:text-base">Plains Cree (Y-Dialect)</span>
            <input 
              type="radio" 
              name="audio_source" 
              checked={audioSource === 'y'} 
              onChange={() => setAudioSource('y')}
              className="w-4 h-4 md:w-5 md:h-5 text-[#004e99] border-[#c1c6d4] focus:ring-[#004e99]" 
            />
          </label>
          <label className="flex items-center justify-between p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-[#f3f3f3] transition-all cursor-pointer">
            <span className="font-semibold text-[#1a1c1c] text-sm md:text-base">Woods Cree (TH-Dialect)</span>
            <input 
              type="radio" 
              name="audio_source" 
              checked={audioSource === 'th'} 
              onChange={() => setAudioSource('th')}
              className="w-4 h-4 md:w-5 md:h-5 text-[#004e99] border-[#c1c6d4] focus:ring-[#004e99]" 
            />
          </label>
          <label className={`flex items-center justify-between p-3 md:p-4 rounded-lg md:rounded-xl transition-all cursor-pointer ${audioSource === 'both' ? 'bg-[#f3f3f3] border-2 border-[#004e99]/10' : 'hover:bg-[#f3f3f3]'}`}>
            <span className={`font-semibold text-sm md:text-base ${audioSource === 'both' ? 'text-[#004e99]' : 'text-[#1a1c1c]'}`}>Both Dialects</span>
            <input 
              type="radio" 
              name="audio_source" 
              checked={audioSource === 'both'} 
              onChange={() => setAudioSource('both')}
              className="w-4 h-4 md:w-5 md:h-5 text-[#004e99] border-[#c1c6d4] focus:ring-[#004e99]" 
            />
          </label>
        </div>
      </section>

      {/* Secondary Actions */}
      <section className="pt-4 md:pt-8 border-t border-[#c1c6d4]/20 flex flex-col gap-2.5 md:gap-4">
        <button className="w-full flex items-center justify-between p-3.5 md:p-4 bg-[#f3f3f3] rounded-xl font-bold text-[#414752] hover:bg-[#e8e8e8] transition-colors text-sm md:text-base">
          <span>Terms of Service</span>
          <span className="material-symbols-outlined text-sm">open_in_new</span>
        </button>
        <button 
          onClick={handleSignOut}
          className="w-full flex items-center justify-between p-3.5 md:p-4 bg-[#ba1a1a]/10 border border-[#ba1a1a]/10 rounded-xl font-bold text-[#ba1a1a] hover:bg-[#ba1a1a]/20 transition-colors text-sm md:text-base"
        >
          <span>Sign Out</span>
          <span className="material-symbols-outlined">logout</span>
        </button>
      </section>

      {/* Version Info */}
      <div className="text-center py-2 md:py-6">
        <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-[#c1c6d4] uppercase">Vocabulary Explorer v2.4.0 (Y-Dialect Focus)</p>
      </div>
    </div>
  );
};

export default Settings;
