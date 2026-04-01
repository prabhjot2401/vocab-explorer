import React, { createContext, useContext, useState, type ReactNode } from 'react';

type LearningMode = 'simple' | 'expert';

interface SettingsContextType {
  learningMode: LearningMode;
  setLearningMode: (mode: LearningMode) => void;
  showTutorial: boolean;
  completeTutorial: () => void;
  replayTutorial: () => void;
}

const SettingsContext = createContext<SettingsContextType>({
  learningMode: 'simple',
  setLearningMode: () => {},
  showTutorial: false,
  completeTutorial: () => {},
  replayTutorial: () => {},
});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [learningMode, setLearningMode] = useState<LearningMode>('simple');
  const [showTutorial, setShowTutorial] = useState(
    () => !window.localStorage.getItem('tutorialComplete')
  );

  const completeTutorial = () => {
    window.localStorage.setItem('tutorialComplete', 'true');
    setShowTutorial(false);
  };

  const replayTutorial = () => {
    window.localStorage.removeItem('tutorialComplete');
    setShowTutorial(true);
  };

  return (
    <SettingsContext.Provider value={{ learningMode, setLearningMode, showTutorial, completeTutorial, replayTutorial }}>
      {children}
    </SettingsContext.Provider>
  );
};
