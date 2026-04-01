import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Word } from '../types';
import dbData from '../../db.json';

const bundledVocabulary: Word[] = dbData.vocabulary as Word[];

interface VocabularyContextType {
  vocabulary: Word[];
  savedWordIds: string[];
  isLoading: boolean;
  error: string | null;
  refreshVocabulary: () => Promise<void>;
  submitSuggestion: (suggestedData: { word: string; category: string; description: string }) => Promise<void>;
  toggleSavedWord: (id: string) => void;
}

const VocabularyContext = createContext<VocabularyContextType>({
  vocabulary: [],
  savedWordIds: [],
  isLoading: false,
  error: null,
  refreshVocabulary: async () => {},
  submitSuggestion: async () => {},
  toggleSavedWord: () => {},
});

export const useVocabulary = () => useContext(VocabularyContext);

export const VocabularyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [vocabulary] = useState<Word[]>(bundledVocabulary);
  const [savedWordIds, setSavedWordIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('savedWords');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const isLoading = false;
  const error = null;

  const refreshVocabulary = async () => {};

  const submitSuggestion = async (suggestedData: { word: string; category: string; description: string }) => {
    const suggestions = JSON.parse(localStorage.getItem('suggestions') || '[]');
    suggestions.push({ ...suggestedData, id: `suggestion-${Date.now()}`, status: 'pending', submittedAt: new Date().toISOString() });
    localStorage.setItem('suggestions', JSON.stringify(suggestions));
  };

  const toggleSavedWord = (id: string) => {
    setSavedWordIds((prevIds) => {
      const newIds = prevIds.includes(id) ? prevIds.filter(wordId => wordId !== id) : [...prevIds, id];
      localStorage.setItem('savedWords', JSON.stringify(newIds));
      return newIds;
    });
  };

  return (
    <VocabularyContext.Provider value={{ vocabulary, savedWordIds, isLoading, error, refreshVocabulary, submitSuggestion, toggleSavedWord }}>
      {children}
    </VocabularyContext.Provider>
  );
};
