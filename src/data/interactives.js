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
  },
  {
    id: 9,
    title: 'NAD+ & Longevity Quiz',
    type: 'Quiz',
    category: 'Science & Technology',
    level: 'Intermediate',
    description: 'Test your knowledge about NAD+ and its role in aging and cellular health',
    duration: '6 min',
    questions: 8,
    plays: 1234,
    featured: false,
    icon: '⚡',
    color: 'from-yellow-500 to-amber-600',
    content: {
      intro: 'How much do you know about NAD+ and longevity science?',
      questions: [
        {
          question: 'What does NAD+ stand for?',
          options: ['Nicotinamide Adenine Dinucleotide', 'Nitrogen Active Dioxide', 'Neural Activation Driver', 'Nucleic Acid Dehydrogenase'],
          correct: 0,
          explanation: 'NAD+ is Nicotinamide Adenine Dinucleotide, a crucial coenzyme found in all living cells.'
        },
        {
          question: 'What happens to NAD+ levels as we age?',
          options: ['They increase', 'They stay the same', 'They decline', 'They fluctuate randomly'],
          correct: 2,
          explanation: 'NAD+ levels decline with age, which is thought to contribute to many age-related health issues.'
        },
        {
          question: 'Which of these is a precursor to NAD+?',
          options: ['Vitamin C', 'NMN (Nicotinamide Mononucleotide)', 'Calcium', 'Iron'],
          correct: 1,
          explanation: 'NMN is a direct precursor to NAD+ and is being studied for its potential anti-aging effects.'
        },
        {
          question: 'What cellular process does NAD+ support?',
          options: ['Only digestion', 'Only muscle growth', 'Energy metabolism and DNA repair', 'Only bone formation'],
          correct: 2,
          explanation: 'NAD+ is essential for energy metabolism, DNA repair, and activating sirtuins - proteins linked to longevity.'
        },
        {
          question: 'What are sirtuins?',
          options: ['A type of bacteria', 'Proteins that regulate cellular health and longevity', 'Sugar molecules', 'Immune cells'],
          correct: 1,
          explanation: 'Sirtuins are a family of proteins that require NAD+ to function and are involved in regulating cellular health, metabolism, and aging.'
        },
        {
          question: 'Which activity naturally boosts NAD+ levels?',
          options: ['Sleeping more', 'Exercise and fasting', 'Eating more sugar', 'Drinking alcohol'],
          correct: 1,
          explanation: 'Exercise and fasting have been shown to naturally increase NAD+ levels by activating pathways that synthesize it.'
        },
        {
          question: 'What is NR (Nicotinamide Riboside)?',
          options: ['A type of sugar', 'Another NAD+ precursor supplement', 'A protein', 'A mineral'],
          correct: 1,
          explanation: 'NR is another precursor to NAD+ that can be taken as a supplement, similar to NMN.'
        },
        {
          question: 'In which cellular organelle is NAD+ most important for energy production?',
          options: ['Nucleus', 'Mitochondria', 'Ribosomes', 'Cell membrane'],
          correct: 1,
          explanation: 'NAD+ is crucial in the mitochondria where it plays a key role in the electron transport chain for ATP production.'
        }
      ]
    }
  },
  {
    id: 10,
    title: 'Heart Health Risk Assessment',
    type: 'Interactive Tool',
    category: 'Health & Wellness',
    level: 'Beginner',
    description: 'Evaluate your cardiovascular health risk based on lifestyle and biomarkers',
    duration: '4 min',
    plays: 2567,
    featured: true,
    icon: '❤️',
    color: 'from-red-500 to-rose-600',
    content: {
      intro: 'Answer questions about your lifestyle and known biomarkers to assess your heart health risk.',
      factors: [
        { question: 'What is your resting heart rate?', options: ['<60 bpm', '60-80 bpm', '80-100 bpm', '>100 bpm'], scores: [0, 1, 2, 3] },
        { question: 'Do you have high blood pressure?', options: ['No', 'Borderline', 'Yes, controlled', 'Yes, uncontrolled'], scores: [0, 1, 2, 3] },
        { question: 'What is your Omega-3 Index?', options: ['8%+', '4-8%', '<4%', 'Unknown'], scores: [0, 1, 3, 2] },
        { question: 'Family history of heart disease?', options: ['None', 'Distant relative', 'Parent/sibling after 60', 'Parent/sibling before 60'], scores: [0, 1, 2, 3] },
        { question: 'Do you smoke?', options: ['Never', 'Quit 5+ years ago', 'Quit recently', 'Currently smoke'], scores: [0, 1, 2, 3] }
      ],
      results: {
        low: 'Your cardiovascular risk appears low. Keep up the healthy habits!',
        moderate: 'You have some risk factors. Consider lifestyle modifications and regular check-ups.',
        high: 'Multiple risk factors detected. Consult with a healthcare provider for personalized advice.'
      }
    }
  },
  {
    id: 11,
    title: 'Vitamin Deficiency Checker',
    type: 'Interactive Tool',
    category: 'Food & Nutrition',
    level: 'Beginner',
    description: 'Identify potential vitamin deficiencies based on symptoms and diet',
    duration: '5 min',
    plays: 3421,
    featured: true,
    icon: '💊',
    color: 'from-orange-500 to-yellow-600',
    content: {
      intro: 'Select any symptoms you experience to identify potential vitamin deficiencies.',
      symptoms: [
        { symptom: 'Fatigue and weakness', vitamins: ['B12', 'Iron', 'Vitamin D'] },
        { symptom: 'Brittle nails', vitamins: ['Biotin', 'Iron', 'Zinc'] },
        { symptom: 'Hair loss', vitamins: ['Biotin', 'Iron', 'Zinc', 'Vitamin D'] },
        { symptom: 'Muscle cramps', vitamins: ['Magnesium', 'Potassium', 'Calcium'] },
        { symptom: 'Poor night vision', vitamins: ['Vitamin A'] },
        { symptom: 'Bleeding gums', vitamins: ['Vitamin C'] },
        { symptom: 'Bone pain', vitamins: ['Vitamin D', 'Calcium'] },
        { symptom: 'Brain fog', vitamins: ['B12', 'Omega-3', 'Iron'] },
        { symptom: 'Slow wound healing', vitamins: ['Vitamin C', 'Zinc'] },
        { symptom: 'Tingling in hands/feet', vitamins: ['B12', 'B6'] }
      ]
    }
  },
  {
    id: 12,
    title: 'Scientific Term Scramble',
    type: 'Game',
    category: 'Science & Technology',
    level: 'Intermediate',
    description: 'Unscramble scientific terms related to metabolomics and biochemistry',
    duration: '4 min',
    plays: 1876,
    featured: false,
    icon: '🔤',
    color: 'from-cyan-500 to-blue-600',
    content: {
      intro: 'Unscramble these metabolomics and biochemistry terms!',
      words: [
        { scrambled: 'RBIAMKORE', answer: 'BIOMARKER', hint: 'A measurable indicator of health' },
        { scrambled: 'BTOILAMEMES', answer: 'METABOLITES', hint: 'Small molecules in metabolism' },
        { scrambled: 'TMIOHOCNRDAI', answer: 'MITOCHONDRIA', hint: 'Powerhouse of the cell' },
        { scrambled: 'NAMZITOXDI', answer: 'ANTIOXIDANT', hint: 'Fights free radicals' },
        { scrambled: 'LPIDI', answer: 'LIPID', hint: 'Type of fat molecule' },
        { scrambled: 'ENYEZM', answer: 'ENZYME', hint: 'Biological catalyst' },
        { scrambled: 'OGRPHCATAMORY', answer: 'CHROMATOGRAPHY', hint: 'Separation technique' },
        { scrambled: 'TEOIRPN', answer: 'PROTEIN', hint: 'Made of amino acids' }
      ]
    }
  },
  {
    id: 13,
    title: 'Sleep Quality Analyzer',
    type: 'Interactive Tool',
    category: 'Brain & Behavior',
    level: 'Beginner',
    description: 'Assess your sleep quality and get personalized improvement tips',
    duration: '4 min',
    plays: 2943,
    featured: false,
    icon: '😴',
    color: 'from-indigo-500 to-violet-600',
    content: {
      intro: 'Answer questions about your sleep habits to get personalized recommendations.',
      questions: [
        { question: 'How long does it take you to fall asleep?', options: ['<15 min', '15-30 min', '30-60 min', '>60 min'], scores: [0, 1, 2, 3] },
        { question: 'How often do you wake up at night?', options: ['Never', '1-2 times', '3-4 times', '5+ times'], scores: [0, 1, 2, 3] },
        { question: 'Do you use screens before bed?', options: ['Never', 'Sometimes', 'Often', 'Always'], scores: [0, 1, 2, 3] },
        { question: 'Is your bedroom completely dark?', options: ['Yes', 'Mostly', 'Somewhat', 'No'], scores: [0, 1, 2, 3] },
        { question: 'Do you consume caffeine after 2pm?', options: ['Never', 'Rarely', 'Sometimes', 'Daily'], scores: [0, 1, 2, 3] },
        { question: 'How consistent is your sleep schedule?', options: ['Very consistent', 'Mostly consistent', 'Somewhat variable', 'Very irregular'], scores: [0, 1, 2, 3] }
      ],
      tips: {
        sleepHygiene: 'Improve your sleep environment - keep it dark, cool, and quiet.',
        screenTime: 'Reduce blue light exposure by avoiding screens 1-2 hours before bed.',
        caffeine: 'Limit caffeine intake to morning hours only.',
        schedule: 'Try to maintain a consistent sleep and wake time, even on weekends.'
      }
    }
  },
  {
    id: 14,
    title: 'Nutrition Label Showdown',
    type: 'Game',
    category: 'Food & Nutrition',
    level: 'Intermediate',
    description: 'Compare food products and pick the healthier option',
    duration: '5 min',
    plays: 2156,
    featured: false,
    icon: '⚖️',
    color: 'from-green-500 to-emerald-600',
    content: {
      intro: 'Two products go head-to-head. Can you pick the healthier choice?',
      matchups: [
        {
          productA: { name: 'Granola Bar A', calories: 190, sugar: '12g', fiber: '2g', protein: '3g' },
          productB: { name: 'Granola Bar B', calories: 150, sugar: '6g', fiber: '4g', protein: '5g' },
          winner: 'B',
          explanation: 'Product B has less sugar, more fiber, and more protein - making it the better choice.'
        },
        {
          productA: { name: 'Orange Juice', calories: 110, sugar: '22g', fiber: '0g', vitaminC: '100%' },
          productB: { name: 'Whole Orange', calories: 62, sugar: '12g', fiber: '3g', vitaminC: '70%' },
          winner: 'B',
          explanation: 'The whole fruit has less sugar, provides fiber, and still offers plenty of vitamin C.'
        },
        {
          productA: { name: 'Greek Yogurt', calories: 100, sugar: '6g', protein: '17g', fat: '0g' },
          productB: { name: 'Regular Yogurt', calories: 150, sugar: '17g', protein: '5g', fat: '3g' },
          winner: 'A',
          explanation: 'Greek yogurt has much more protein and less sugar, making it more nutritious.'
        },
        {
          productA: { name: 'Salmon (3oz)', calories: 177, omega3: '1.8g', protein: '17g', satFat: '1g' },
          productB: { name: 'Tilapia (3oz)', calories: 109, omega3: '0.1g', protein: '21g', satFat: '0.5g' },
          winner: 'A',
          explanation: 'While tilapia is leaner, salmon provides significantly more heart-healthy omega-3s.'
        }
      ]
    }
  },
  {
    id: 15,
    title: 'Cellular Energy Journey',
    type: 'Interactive Tool',
    category: 'Science & Technology',
    level: 'Advanced',
    description: 'Explore how cells produce energy through ATP synthesis',
    duration: '8 min',
    plays: 756,
    featured: false,
    icon: '⚡',
    color: 'from-blue-500 to-purple-600',
    content: {
      intro: 'Take a journey through the cell and discover how energy is produced.',
      stages: [
        {
          name: 'Glycolysis',
          location: 'Cytoplasm',
          input: 'Glucose',
          output: '2 Pyruvate + 2 ATP + 2 NADH',
          description: 'Glucose is broken down into pyruvate, producing a small amount of ATP.'
        },
        {
          name: 'Pyruvate Oxidation',
          location: 'Mitochondrial Matrix',
          input: 'Pyruvate',
          output: 'Acetyl-CoA + CO2 + NADH',
          description: 'Pyruvate enters the mitochondria and is converted to Acetyl-CoA.'
        },
        {
          name: 'Citric Acid Cycle',
          location: 'Mitochondrial Matrix',
          input: 'Acetyl-CoA',
          output: 'CO2 + NADH + FADH2 + ATP',
          description: 'Also known as the Krebs cycle, this produces electron carriers for the final stage.'
        },
        {
          name: 'Electron Transport Chain',
          location: 'Inner Mitochondrial Membrane',
          input: 'NADH + FADH2 + O2',
          output: '~34 ATP + H2O',
          description: 'The majority of ATP is produced here through oxidative phosphorylation.'
        }
      ]
    }
  },
  {
    id: 16,
    title: 'Stress Response Quiz',
    type: 'Quiz',
    category: 'Brain & Behavior',
    level: 'Beginner',
    description: 'Learn about how your body responds to stress and ways to manage it',
    duration: '5 min',
    questions: 6,
    plays: 1987,
    featured: false,
    icon: '🧘',
    color: 'from-teal-500 to-cyan-600',
    content: {
      intro: 'Test your knowledge about the stress response and stress management!',
      questions: [
        {
          question: 'Which hormone is known as the "stress hormone"?',
          options: ['Insulin', 'Cortisol', 'Melatonin', 'Dopamine'],
          correct: 1,
          explanation: 'Cortisol is released during stress and helps mobilize energy, but chronic elevation can be harmful.'
        },
        {
          question: 'What is the fight-or-flight response controlled by?',
          options: ['Digestive system', 'Sympathetic nervous system', 'Immune system', 'Skeletal system'],
          correct: 1,
          explanation: 'The sympathetic nervous system triggers the fight-or-flight response during perceived threats.'
        },
        {
          question: 'Which nutrient can help reduce cortisol levels?',
          options: ['Sodium', 'Omega-3 fatty acids', 'Caffeine', 'Sugar'],
          correct: 1,
          explanation: 'Omega-3 fatty acids have been shown to help reduce cortisol and anxiety levels.'
        },
        {
          question: 'What happens to digestion during acute stress?',
          options: ['Speeds up', 'Slows down', 'Stays the same', 'Stops completely'],
          correct: 1,
          explanation: 'During stress, blood flow is diverted away from digestion to muscles and vital organs.'
        },
        {
          question: 'Which part of the brain is most associated with the stress response?',
          options: ['Cerebellum', 'Amygdala', 'Occipital lobe', 'Motor cortex'],
          correct: 1,
          explanation: 'The amygdala processes emotions and triggers the stress response when it perceives a threat.'
        },
        {
          question: 'What is the "rest and digest" system called?',
          options: ['Sympathetic nervous system', 'Parasympathetic nervous system', 'Central nervous system', 'Somatic nervous system'],
          correct: 1,
          explanation: 'The parasympathetic nervous system promotes relaxation, digestion, and recovery after stress.'
        }
      ]
    }
  },
  {
    id: 17,
    title: 'Antioxidant Power Rankings',
    type: 'Game',
    category: 'Food & Nutrition',
    level: 'Intermediate',
    description: 'Rank foods by their antioxidant content in this sorting challenge',
    duration: '4 min',
    plays: 1654,
    featured: false,
    icon: '🏆',
    color: 'from-purple-500 to-pink-600',
    content: {
      intro: 'Rank these foods from highest to lowest antioxidant content!',
      challenges: [
        {
          foods: ['Blueberries', 'Spinach', 'Dark Chocolate', 'Green Tea'],
          correctOrder: ['Dark Chocolate', 'Blueberries', 'Green Tea', 'Spinach'],
          metric: 'ORAC score per 100g',
          explanation: 'Dark chocolate has one of the highest ORAC (antioxidant) scores of common foods.'
        },
        {
          foods: ['Kale', 'Pecans', 'Goji Berries', 'Artichokes'],
          correctOrder: ['Goji Berries', 'Pecans', 'Artichokes', 'Kale'],
          metric: 'ORAC score per 100g',
          explanation: 'Goji berries are antioxidant powerhouses, followed by pecans and artichokes.'
        },
        {
          foods: ['Vitamin E', 'Vitamin C', 'Glutathione', 'CoQ10'],
          correctOrder: ['Glutathione', 'Vitamin C', 'Vitamin E', 'CoQ10'],
          metric: 'Overall antioxidant importance',
          explanation: 'Glutathione is considered the master antioxidant as it recycles other antioxidants.'
        }
      ]
    }
  },
  {
    id: 18,
    title: 'Blood Sugar Simulator',
    type: 'Interactive Tool',
    category: 'Health & Wellness',
    level: 'Intermediate',
    description: 'See how different foods affect blood sugar levels over time',
    duration: '6 min',
    plays: 2234,
    featured: true,
    icon: '📈',
    color: 'from-pink-500 to-rose-600',
    content: {
      intro: 'Explore how different foods impact your blood sugar response.',
      foods: [
        { name: 'White Bread', gi: 75, spike: 'high', duration: 'short', description: 'Causes rapid spike and crash' },
        { name: 'Brown Rice', gi: 50, spike: 'moderate', duration: 'medium', description: 'Gradual rise and fall' },
        { name: 'Lentils', gi: 32, spike: 'low', duration: 'long', description: 'Slow, sustained energy' },
        { name: 'Apple', gi: 36, spike: 'low', duration: 'medium', description: 'Fiber slows absorption' },
        { name: 'Watermelon', gi: 76, spike: 'high', duration: 'short', description: 'High GI but low glycemic load' },
        { name: 'Oatmeal', gi: 55, spike: 'moderate', duration: 'long', description: 'Beta-glucan fiber helps' },
        { name: 'Sweet Potato', gi: 63, spike: 'moderate', duration: 'medium', description: 'Better than white potato' },
        { name: 'Chickpeas', gi: 28, spike: 'low', duration: 'long', description: 'Excellent for blood sugar control' }
      ],
      tips: [
        'Pair high-GI foods with protein or fat to slow absorption',
        'Fiber helps moderate blood sugar response',
        'Eat carbs last in a meal to reduce spikes',
        'Physical activity improves insulin sensitivity'
      ]
    }
  },
  {
    id: 19,
    title: 'Hormone Balance Quiz',
    type: 'Quiz',
    category: 'Health & Wellness',
    level: 'Intermediate',
    description: 'Test your understanding of hormones and how they affect your body',
    duration: '6 min',
    questions: 8,
    plays: 1432,
    featured: false,
    icon: '🔄',
    color: 'from-fuchsia-500 to-purple-600',
    content: {
      intro: 'How well do you understand the endocrine system?',
      questions: [
        {
          question: 'Which hormone regulates sleep-wake cycles?',
          options: ['Cortisol', 'Insulin', 'Melatonin', 'Adrenaline'],
          correct: 2,
          explanation: 'Melatonin is produced by the pineal gland and regulates your circadian rhythm.'
        },
        {
          question: 'What triggers insulin release?',
          options: ['Exercise', 'Rising blood glucose', 'Sleep', 'Stress'],
          correct: 1,
          explanation: 'When blood glucose rises after eating, the pancreas releases insulin to help cells absorb glucose.'
        },
        {
          question: 'Which gland produces thyroid hormones?',
          options: ['Pituitary', 'Adrenal', 'Thyroid', 'Pancreas'],
          correct: 2,
          explanation: 'The thyroid gland in your neck produces T3 and T4, which regulate metabolism.'
        },
        {
          question: 'What does leptin do?',
          options: ['Increases hunger', 'Signals fullness', 'Promotes sleep', 'Builds muscle'],
          correct: 1,
          explanation: 'Leptin is produced by fat cells and signals to your brain that you have enough energy stored.'
        },
        {
          question: 'Which hormone is released during exercise and creates a "feel good" sensation?',
          options: ['Cortisol', 'Insulin', 'Endorphins', 'Glucagon'],
          correct: 2,
          explanation: 'Endorphins are natural painkillers that create feelings of pleasure and well-being during and after exercise.'
        },
        {
          question: 'What does ghrelin do?',
          options: ['Suppresses appetite', 'Stimulates hunger', 'Regulates body temperature', 'Controls heart rate'],
          correct: 1,
          explanation: 'Ghrelin is known as the "hunger hormone" and is released by the stomach to signal that it\'s time to eat.'
        },
        {
          question: 'Which gland is often called the "master gland" of the endocrine system?',
          options: ['Thyroid', 'Adrenal', 'Pituitary', 'Pineal'],
          correct: 2,
          explanation: 'The pituitary gland controls many other glands and produces hormones that regulate growth, metabolism, and reproduction.'
        },
        {
          question: 'What happens to cortisol levels in the morning?',
          options: ['They drop to their lowest', 'They peak to help you wake up', 'They stay constant', 'They fluctuate randomly'],
          correct: 1,
          explanation: 'Cortisol follows a natural rhythm, peaking in the morning to help you wake up and gradually decreasing throughout the day.'
        }
      ]
    }
  },
  {
    id: 20,
    title: 'Detox Myth Buster',
    type: 'Quiz',
    category: 'Health & Wellness',
    level: 'Beginner',
    description: 'Separate fact from fiction about detox and cleansing',
    duration: '4 min',
    questions: 6,
    plays: 2876,
    featured: false,
    icon: '🚫',
    color: 'from-slate-500 to-zinc-600',
    content: {
      intro: 'Can you identify the myths about detox and cleansing?',
      questions: [
        {
          question: 'Your body needs special juice cleanses to remove toxins.',
          options: ['Fact', 'Myth'],
          correct: 1,
          explanation: 'Your liver and kidneys naturally detoxify your body. There is no scientific evidence that juice cleanses provide additional benefit.'
        },
        {
          question: 'Sweating removes significant toxins from your body.',
          options: ['Fact', 'Myth'],
          correct: 1,
          explanation: 'Sweat is primarily water and salt. The liver and kidneys, not sweat glands, are responsible for removing toxins.'
        },
        {
          question: 'The liver is the body\'s primary detoxification organ.',
          options: ['Fact', 'Myth'],
          correct: 0,
          explanation: 'The liver processes toxins, drugs, and metabolic waste products, making them easier to eliminate.'
        },
        {
          question: 'Activated charcoal supplements are proven to detoxify your body.',
          options: ['Fact', 'Myth'],
          correct: 1,
          explanation: 'While activated charcoal is used in emergency medicine for poisoning, regular supplements don\'t provide detox benefits.'
        },
        {
          question: 'Drinking lots of water helps your kidneys filter waste.',
          options: ['Fact', 'Myth'],
          correct: 0,
          explanation: 'Adequate hydration does help your kidneys function properly and flush out waste products through urine.'
        },
        {
          question: 'Foot pads can draw toxins out through your feet while you sleep.',
          options: ['Fact', 'Myth'],
          correct: 1,
          explanation: 'There is no scientific evidence that foot pads remove toxins. The dark color they turn is from moisture and oxidation, not toxins.'
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
