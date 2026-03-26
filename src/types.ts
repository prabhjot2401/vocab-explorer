export enum WordClass {
  VTI_2 = "VTI-2 (Verb Transitive Inanimate)",
  VTA = "VTA (Verb Transitive Animate)",
  VAI = "VAI (Verb Animate Intransitive)",
  VII = "VII (Verb Inanimate Intransitive)",
  NA = "NA (Noun Animate)",
  NI = "NI (Noun Inanimate)",
}

export interface Word {
  id: string;
  cree: string;
  phonetic: string;
  translation: string;
  wordClass: WordClass;
  tags: string[];
  examples: {
    cree: string;
    english: string;
  }[];
  usageNote?: string;
  linguisticAnalysis: {
    lemma: string;
    stem: string;
    prefix?: string;
    root: string;
    suffix?: string;
    aspect?: string;
  };
  relatedForms?: {
    word: string;
    meaning: string;
  }[];
  category: string;
}

export interface Node {
  id: string;
  label: string;
  type: 'root' | 'connected' | 'missing' | 'peripheral';
  x: number;
  y: number;
}

export interface Connection {
  from: string;
  to: string;
  dashed?: boolean;
}
