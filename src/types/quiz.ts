export type OptionId = string;

export interface Option {
  id: OptionId;
  label: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface StackScore {
  [stackId: string]: number;
}

export interface AffiliateLink {
  label: string;
  url: string;
  type: "amazon" | "note" | "udemy" | "claude";
}

export interface TechStack {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  affiliates: AffiliateLink[];
  noteUrl?: string;
}

export type Answers = Record<string, OptionId>;
