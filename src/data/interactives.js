export const interactives = [
  {
    id: 1,
    title: 'Omega-3 Quiz Challenge',
    type: 'Quiz',
    category: 'Health & Wellness',
    level: 'Beginner',
    description: 'Test your knowledge about omega-3 fatty acids and their health benefits',
    duration: '5 min',
    questions: 10,
    plays: 2847,
    featured: true,
    icon: '🧠',
    color: 'from-blue-500 to-cyan-600',
    content: {
      intro: 'How much do you know about omega-3 fatty acids? Take this quiz to find out!',
      questions: [
        {
          question: 'What are the two main omega-3 fatty acids found in fish oil?',
          options: ['EPA and DHA', 'ALA and EPA', 'DHA and ALA', 'Omega-6 and Omega-9'],
          correct: 0,
          explanation: 'EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid) are the primary omega-3s in fish oil and are most beneficial for health.'
        },
        {
          question: 'What is considered an optimal Omega-3 Index?',
          options: ['2-4%', '4-6%', '8% or higher', '12% or higher'],
          correct: 2,
          explanation: 'An Omega-3 Index of 8% or higher is associated with the lowest risk of cardiovascular events.'
        },
        {
          question: 'Which of these is NOT a good source of omega-3s?',
          options: ['Salmon', 'Walnuts', 'Chicken breast', 'Chia seeds'],
          correct: 2,
          explanation: 'Chicken breast contains very little omega-3. Fatty fish, nuts, and seeds are better sources.'
        },
        {
          question: 'How long does it take to significantly change your Omega-3 Index?',
          options: ['1-2 weeks', '3-4 months', '1-2 days', '1 year'],
          correct: 1,
          explanation: 'It takes about 3-4 months for omega-3 supplementation to significantly change your red blood cell membrane composition.'
        },
        {
          question: 'Which organ contains the highest concentration of DHA?',
          options: ['Heart', 'Liver', 'Brain', 'Kidneys'],
          correct: 2,
          explanation: 'The brain is composed of about 60% fat, with DHA being the most abundant omega-3 fatty acid in neural tissue.'
        }
      ]
    }
  },
  {
    id: 2,
    title: 'Biomarker Explorer',
    type: 'Interactive Tool',
    category: 'Science & Technology',
    level: 'Intermediate',
    description: 'Explore how different biomarkers relate to each other and what they indicate about health',
    duration: '10 min',
    plays: 1923,
    featured: true,
    icon: '🔬',
    color: 'from-purple-500 to-indigo-600',
    content: {
      intro: 'Discover the connections between different biomarkers and understand what your test results mean.',
      biomarkers: [
        {
          name: 'Omega-3 Index',
          category: 'Lipids',
          optimal: '8-12%',
          description: 'Measures EPA and DHA in red blood cell membranes',
          connections: ['Inflammation', 'Heart Health', 'Brain Function']
        },
        {
          name: 'hs-CRP',
          category: 'Inflammation',
          optimal: '<1.0 mg/L',
          description: 'High-sensitivity C-reactive protein indicates systemic inflammation',
          connections: ['Heart Disease Risk', 'Immune Response', 'Metabolic Health']
        },
        {
          name: 'HbA1c',
          category: 'Metabolic',
          optimal: '<5.7%',
          description: 'Reflects average blood sugar over 2-3 months',
          connections: ['Diabetes Risk', 'Energy Metabolism', 'Cardiovascular Health']
        }
      ]
    }
  },
  {
    id: 3,
    title: 'Molecule Match Game',
    type: 'Game',
    category: 'Science & Technology',
    level: 'Beginner',
    description: 'Match molecules with their functions in this fun memory game',
    duration: '3 min',
    plays: 4521,
    featured: true,
    icon: '🎮',
    color: 'from-emerald-500 to-teal-600',
    content: {
      intro: 'Test your memory while learning about important molecules!',
      pairs: [
        { molecule: 'NAD+', function: 'Energy production in cells' },
        { molecule: 'EPA', function: 'Reduces inflammation' },
        { molecule: 'DHA', function: 'Brain cell membrane structure' },
        { molecule: 'CoQ10', function: 'Mitochondrial energy' },
        { molecule: 'Glutathione', function: 'Master antioxidant' },
        { molecule: 'Melatonin', function: 'Sleep regulation' }
      ]
    }
  },
  {
    id: 4,
    title: 'Build Your Supplement Stack',
    type: 'Interactive Tool',
    category: 'Health & Wellness',
    level: 'Intermediate',
    description: 'Get personalized supplement recommendations based on your health goals',
    duration: '5 min',
    plays: 3156,
    featured: false,
    icon: '💊',
    color: 'from-amber-500 to-orange-600',
    content: {
      intro: 'Answer a few questions to get personalized supplement recommendations.',
      goals: [
        { id: 'energy', label: 'More Energy', supplements: ['CoQ10', 'B-Complex', 'Iron'] },
        { id: 'brain', label: 'Brain Health', supplements: ['Omega-3', 'Lions Mane', 'Phosphatidylserine'] },
        { id: 'sleep', label: 'Better Sleep', supplements: ['Magnesium', 'Melatonin', 'L-Theanine'] },
        { id: 'inflammation', label: 'Reduce Inflammation', supplements: ['Omega-3', 'Curcumin', 'Vitamin D'] }
      ]
    }
  },
  {
    id: 5,
    title: 'Metabolic Pathway Tracer',
    type: 'Interactive Tool',
    category: 'Science & Technology',
    level: 'Advanced',
    description: 'Follow nutrients through metabolic pathways and see how they\'re processed',
    duration: '15 min',
    plays: 892,
    featured: false,
    icon: '🔄',
    color: 'from-rose-500 to-pink-600',
    content: {
      intro: 'Trace how different nutrients move through your body\'s metabolic pathways.',
      pathways: [
        {
          name: 'Omega-3 Metabolism',
          steps: ['Dietary intake', 'Intestinal absorption', 'Liver processing', 'Cell membrane incorporation', 'Eicosanoid production']
        },
        {
          name: 'Glucose Metabolism',
          steps: ['Carbohydrate digestion', 'Blood glucose', 'Insulin response', 'Cellular uptake', 'ATP production']
        }
      ]
    }
  },
  {
    id: 6,
    title: 'Food Label Detective',
    type: 'Game',
    category: 'Food & Nutrition',
    level: 'Beginner',
    description: 'Learn to read food labels and spot hidden ingredients',
    duration: '5 min',
    plays: 2134,
    featured: false,
    icon: '🏷️',
    color: 'from-lime-500 to-green-600',
    content: {
      intro: 'Can you spot the hidden sugars and unhealthy ingredients?',
      challenges: [
        {
          product: 'Protein Bar',
          ingredients: ['Whey protein', 'Sugar', 'Palm oil', 'Natural flavors'],
          redFlags: ['Sugar', 'Palm oil'],
          explanation: 'Many protein bars contain added sugars and unhealthy fats despite their healthy image.'
        },
        {
          product: 'Yogurt',
          ingredients: ['Milk', 'Live cultures', 'Cane sugar', 'Fruit puree', 'Pectin'],
          redFlags: ['Cane sugar'],
          explanation: 'Flavored yogurts often contain as much sugar as desserts. Choose plain and add your own fruit.'
        }
      ]
    }
  },
  {
    id: 7,
    title: 'Inflammation Calculator',
    type: 'Interactive Tool',
    category: 'Health & Wellness',
    level: 'Intermediate',
    description: 'Estimate your inflammation risk based on lifestyle factors',
    duration: '3 min',
    plays: 1876,
    featured: false,
    icon: '🔥',
    color: 'from-red-500 to-orange-600',
    content: {
      intro: 'Answer questions about your lifestyle to estimate your inflammation risk.',
      factors: [
        { question: 'How often do you eat fatty fish?', options: ['Never', '1-2x/month', '1-2x/week', '3+x/week'], scores: [3, 2, 1, 0] },
        { question: 'How many hours of sleep do you get?', options: ['<5 hours', '5-6 hours', '7-8 hours', '8+ hours'], scores: [3, 2, 0, 1] },
        { question: 'How often do you exercise?', options: ['Never', '1-2x/week', '3-4x/week', 'Daily'], scores: [3, 2, 1, 0] },
        { question: 'How stressed are you?', options: ['Very', 'Moderately', 'Slightly', 'Not at all'], scores: [3, 2, 1, 0] }
      ]
    }
  },
  {
    id: 8,
    title: 'Gut Microbiome Quiz',
    type: 'Quiz',
    category: 'Brain & Behavior',
    level: 'Intermediate',
    description: 'Discover how much you know about the gut-brain connection',
    duration: '5 min',
    questions: 8,
    plays: 1543,
    featured: false,
    icon: '🦠',
    color: 'from-violet-500 to-purple-600',
    content: {
      intro: 'Test your knowledge about the fascinating gut-brain axis!',
      questions: [
        {
          question: 'What percentage of serotonin is produced in the gut?',
          options: ['10%', '50%', '90%', '100%'],
          correct: 2,
          explanation: 'About 90% of the body\'s serotonin is produced in the gut, highlighting the gut-brain connection.'
        },
        {
          question: 'What is the vagus nerve?',
          options: ['A brain region', 'A gut-brain communication highway', 'A type of bacteria', 'A digestive enzyme'],
          correct: 1,
          explanation: 'The vagus nerve is the main communication pathway between the gut and brain.'
        }
      ]
    }
  }
];

export const interactiveCategories = [
  'All',
  'Quiz',
  'Game',
  'Interactive Tool'
];
