import { Moon, Utensils, Activity, Heart, Brain } from 'lucide-react';

export const categories = [
  {
    id: 'sleep-better',
    name: 'Sleep Better',
    icon: Moon,
    color: 'indigo',
    description: 'Evidence-based strategies for improving sleep quality and duration',
    overview: 'Sleep is foundational to nearly every aspect of health. Quality sleep affects cognitive function, emotional regulation, immune response, metabolic health, and longevity. Yet modern life often disrupts our natural sleep patterns.',
    outcomes: ['Cognitive performance', 'Emotional resilience', 'Immune function', 'Metabolic health', 'Physical recovery']
  },
  {
    id: 'eat-better',
    name: 'Eat Better',
    icon: Utensils,
    color: 'emerald',
    description: 'Navigate nutrition science with clarity and practical guidance',
    overview: 'Nutrition science is complex and often contradictory in headlines. We help you understand what the evidence actually shows, what remains uncertain, and how to make informed choices for your context.',
    outcomes: ['Energy levels', 'Body composition', 'Gut health', 'Metabolic markers', 'Long-term disease risk']
  },
  {
    id: 'move-better',
    name: 'Move Better',
    icon: Activity,
    color: 'orange',
    description: 'Build sustainable movement habits backed by exercise science',
    overview: 'Movement is medicine, but the dose matters. Whether you want to build strength, improve endurance, or simply move pain-free, understanding the evidence helps you train smarter.',
    outcomes: ['Cardiovascular health', 'Strength and mobility', 'Metabolic flexibility', 'Injury prevention', 'Longevity']
  },
  {
    id: 'feel-better',
    name: 'Feel Better',
    icon: Heart,
    color: 'rose',
    description: 'Support emotional wellbeing through evidence-informed practices',
    overview: 'Mental and emotional health are influenced by biology, behavior, and environment. We explore what research shows about stress management, mood regulation, and building psychological resilience.',
    outcomes: ['Stress resilience', 'Mood stability', 'Anxiety management', 'Emotional regulation', 'Social connection']
  },
  {
    id: 'focus-better',
    name: 'Focus Better',
    icon: Brain,
    color: 'violet',
    description: 'Optimize cognitive performance and sustained attention',
    overview: 'In an age of constant distraction, the ability to focus deeply is both rare and valuable. We examine what actually works for attention, memory, and cognitive performance.',
    outcomes: ['Sustained attention', 'Working memory', 'Learning speed', 'Mental clarity', 'Creative thinking']
  }
];

export const categoryColors = {
  indigo: {
    bg: 'bg-indigo-50',
    text: 'text-indigo-600',
    border: 'border-indigo-200',
    badge: 'bg-indigo-100 text-indigo-700',
    button: 'bg-indigo-600 hover:bg-indigo-700',
    light: 'bg-indigo-500/10'
  },
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-700',
    button: 'bg-emerald-600 hover:bg-emerald-700',
    light: 'bg-emerald-500/10'
  },
  orange: {
    bg: 'bg-orange-50',
    text: 'text-orange-600',
    border: 'border-orange-200',
    badge: 'bg-orange-100 text-orange-700',
    button: 'bg-orange-600 hover:bg-orange-700',
    light: 'bg-orange-500/10'
  },
  rose: {
    bg: 'bg-rose-50',
    text: 'text-rose-600',
    border: 'border-rose-200',
    badge: 'bg-rose-100 text-rose-700',
    button: 'bg-rose-600 hover:bg-rose-700',
    light: 'bg-rose-500/10'
  },
  violet: {
    bg: 'bg-violet-50',
    text: 'text-violet-600',
    border: 'border-violet-200',
    badge: 'bg-violet-100 text-violet-700',
    button: 'bg-violet-600 hover:bg-violet-700',
    light: 'bg-violet-500/10'
  }
};
