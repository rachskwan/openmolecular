export const tracks = [
  { id: 1, title: 'Multi-Omics Foundations', modules: 6, hours: 8, level: 'Beginner', category: 'science', description: 'Master the fundamentals of genomics, transcriptomics, proteomics, and metabolomics.', skills: ['Omics Basics', 'Data Interpretation', 'Systems Biology'] },
  { id: 2, title: 'Mass Spec & Molecule Discovery', modules: 5, hours: 6, level: 'Intermediate', category: 'science', description: 'Learn how mass spectrometry reveals molecular secrets and enables discovery.', skills: ['LC-MS', 'GC-MS', 'Spectra Analysis'] },
  { id: 3, title: 'Molecular Pathways for Health', modules: 8, hours: 10, level: 'Intermediate', category: 'health', description: 'Understand the molecular mechanisms behind inflammation, aging, and disease.', skills: ['Pathway Analysis', 'Health Biomarkers', 'Disease Mechanisms'] },
  { id: 4, title: 'Biomarker Interpretation', modules: 4, hours: 5, level: 'Advanced', category: 'health', description: 'Learn to read and interpret biomarker panels for personalized health insights.', skills: ['Panel Analysis', 'Clinical Interpretation', 'Personalized Nutrition'] },
  { id: 5, title: 'Metabolic Biochemistry', modules: 7, hours: 9, level: 'Intermediate', category: 'nutrition', description: 'Deep dive into metabolic pathways and nutrient-gene interactions.', skills: ['Metabolism', 'Nutrient Signaling', 'Biochemistry'] },
  { id: 6, title: 'Neurobiology & Signaling', modules: 5, hours: 7, level: 'Advanced', category: 'brain', description: 'Explore cognitive biomarkers and the gut-brain molecular connection.', skills: ['Neuroscience', 'Molecular Signaling', 'Stress Biology'] },
];

export const trackDetails = {
  1: {
    id: 1,
    title: 'Multi-Omics Foundations',
    level: 'Beginner',
    category: 'Science & Technology',
    hours: 8,
    description: 'Master the fundamentals of genomics, transcriptomics, proteomics, and metabolomics.',
    longDescription: 'This comprehensive course introduces you to the exciting world of multi-omics sciences. You\'ll learn how different molecular layers—DNA, RNA, proteins, and metabolites—work together to create the complex systems of life. By the end, you\'ll understand how these technologies are revolutionizing personalized medicine and health research.',
    skills: ['Omics Basics', 'Data Interpretation', 'Systems Biology'],
    prerequisites: ['Basic biology knowledge', 'High school chemistry'],
    instructor: 'Dr. Sarah Chen',
    instructorBio: 'Dr. Chen is a systems biologist with 15 years of experience in multi-omics research.',
    enrolled: 2340,
    rating: 4.8,
    lessons: [
      {
        id: 1,
        title: 'Introduction to Omics Sciences',
        duration: '45 min',
        description: 'Discover what omics sciences are and why they matter for understanding health and disease.',
        content: [
          { type: 'video', title: 'What are Omics Sciences?', duration: '15 min' },
          { type: 'reading', title: 'The History of Molecular Biology', duration: '20 min' },
          { type: 'quiz', title: 'Knowledge Check', questions: 5 }
        ],
        learningObjectives: [
          'Define genomics, proteomics, and metabolomics',
          'Explain the central dogma of molecular biology',
          'Identify key milestones in omics history'
        ]
      },
      {
        id: 2,
        title: 'Genomics Fundamentals',
        duration: '60 min',
        description: 'Learn how DNA sequencing works and what your genome reveals about your health.',
        content: [
          { type: 'video', title: 'DNA Sequencing Technologies', duration: '20 min' },
          { type: 'reading', title: 'Understanding Gene Expression', duration: '25 min' },
          { type: 'interactive', title: 'Gene Mapping Exercise', duration: '15 min' }
        ],
        learningObjectives: [
          'Describe how DNA sequencing technologies work',
          'Interpret basic genetic variants',
          'Understand gene expression regulation'
        ]
      },
      {
        id: 3,
        title: 'Proteomics Essentials',
        duration: '55 min',
        description: 'Explore the world of proteins—the molecular machines that carry out cellular functions.',
        content: [
          { type: 'video', title: 'Protein Structure and Function', duration: '18 min' },
          { type: 'reading', title: 'Mass Spectrometry in Proteomics', duration: '22 min' },
          { type: 'quiz', title: 'Proteomics Quiz', questions: 8 }
        ],
        learningObjectives: [
          'Explain protein structure levels',
          'Describe how mass spectrometry identifies proteins',
          'Connect protein function to health outcomes'
        ]
      },
      {
        id: 4,
        title: 'Introduction to Metabolomics',
        duration: '50 min',
        description: 'Discover how small molecules provide a real-time snapshot of your metabolism.',
        content: [
          { type: 'video', title: 'What is Metabolomics?', duration: '15 min' },
          { type: 'reading', title: 'Metabolite Classes and Functions', duration: '20 min' },
          { type: 'interactive', title: 'Metabolite Identification', duration: '15 min' }
        ],
        learningObjectives: [
          'Define metabolomics and its applications',
          'Categorize major metabolite classes',
          'Interpret basic metabolomics data'
        ]
      },
      {
        id: 5,
        title: 'Integrating Multi-Omics Data',
        duration: '70 min',
        description: 'Learn how to combine different omics layers for comprehensive biological insights.',
        content: [
          { type: 'video', title: 'Systems Biology Approach', duration: '25 min' },
          { type: 'reading', title: 'Data Integration Strategies', duration: '30 min' },
          { type: 'case-study', title: 'Real-World Multi-Omics Analysis', duration: '15 min' }
        ],
        learningObjectives: [
          'Apply systems biology thinking',
          'Integrate data from multiple omics platforms',
          'Identify patterns across molecular layers'
        ]
      },
      {
        id: 6,
        title: 'Final Assessment',
        duration: '40 min',
        description: 'Test your knowledge and earn your course certificate.',
        content: [
          { type: 'quiz', title: 'Comprehensive Exam', questions: 25 },
          { type: 'certificate', title: 'Course Certificate' }
        ],
        learningObjectives: [
          'Demonstrate mastery of omics concepts',
          'Apply knowledge to real-world scenarios'
        ]
      }
    ]
  },
  2: {
    id: 2,
    title: 'Mass Spec & Molecule Discovery',
    level: 'Intermediate',
    category: 'Science & Technology',
    hours: 6,
    description: 'Learn how mass spectrometry reveals molecular secrets and enables discovery.',
    longDescription: 'Mass spectrometry is the cornerstone technology behind modern metabolomics and proteomics. This course takes you inside the instrument to understand how molecules are ionized, separated, and detected. You\'ll learn to interpret mass spectra and understand how this technology is used to discover new biomarkers and drug targets.',
    skills: ['LC-MS', 'GC-MS', 'Spectra Analysis'],
    prerequisites: ['Multi-Omics Foundations or equivalent', 'Basic chemistry'],
    instructor: 'Dr. James Park',
    instructorBio: 'Dr. Park leads a mass spectrometry core facility and has analyzed over 50,000 samples.',
    enrolled: 1856,
    rating: 4.9,
    lessons: [
      {
        id: 1,
        title: 'Principles of Mass Spectrometry',
        duration: '50 min',
        description: 'Understand the fundamental physics behind mass spectrometry.',
        content: [
          { type: 'video', title: 'How Mass Spectrometry Works', duration: '20 min' },
          { type: 'reading', title: 'Ionization Methods Explained', duration: '20 min' },
          { type: 'quiz', title: 'Principles Quiz', questions: 6 }
        ],
        learningObjectives: [
          'Explain the mass spectrometry workflow',
          'Compare different ionization methods',
          'Understand mass-to-charge ratio'
        ]
      },
      {
        id: 2,
        title: 'Chromatography Fundamentals',
        duration: '55 min',
        description: 'Learn how chromatography separates complex mixtures before mass analysis.',
        content: [
          { type: 'video', title: 'LC vs GC: When to Use Which', duration: '18 min' },
          { type: 'reading', title: 'Column Chemistry and Selection', duration: '22 min' },
          { type: 'interactive', title: 'Chromatogram Analysis', duration: '15 min' }
        ],
        learningObjectives: [
          'Distinguish LC-MS from GC-MS applications',
          'Interpret chromatographic peaks',
          'Select appropriate separation methods'
        ]
      },
      {
        id: 3,
        title: 'Mass Analyzer Types',
        duration: '60 min',
        description: 'Explore different mass analyzer designs and their strengths.',
        content: [
          { type: 'video', title: 'Quadrupole, TOF, and Orbitrap', duration: '25 min' },
          { type: 'reading', title: 'Resolution and Mass Accuracy', duration: '20 min' },
          { type: 'quiz', title: 'Analyzer Comparison Quiz', questions: 8 }
        ],
        learningObjectives: [
          'Compare mass analyzer types',
          'Match analyzers to analytical goals',
          'Interpret resolution specifications'
        ]
      },
      {
        id: 4,
        title: 'Spectral Interpretation',
        duration: '65 min',
        description: 'Develop skills to read and interpret mass spectra like a pro.',
        content: [
          { type: 'video', title: 'Reading Mass Spectra', duration: '20 min' },
          { type: 'reading', title: 'Fragmentation Patterns', duration: '25 min' },
          { type: 'interactive', title: 'Spectrum Puzzle Challenge', duration: '20 min' }
        ],
        learningObjectives: [
          'Identify molecular ions and fragments',
          'Recognize common fragmentation patterns',
          'Use spectral databases for identification'
        ]
      },
      {
        id: 5,
        title: 'Applications in Discovery',
        duration: '50 min',
        description: 'See how mass spectrometry drives biomarker and drug discovery.',
        content: [
          { type: 'video', title: 'Biomarker Discovery Workflow', duration: '18 min' },
          { type: 'case-study', title: 'Drug Metabolism Study', duration: '20 min' },
          { type: 'quiz', title: 'Final Assessment', questions: 15 }
        ],
        learningObjectives: [
          'Design a discovery experiment',
          'Interpret untargeted metabolomics data',
          'Validate candidate biomarkers'
        ]
      }
    ]
  },
  3: {
    id: 3,
    title: 'Molecular Pathways for Health',
    level: 'Intermediate',
    category: 'Health & Wellness',
    hours: 10,
    description: 'Understand the molecular mechanisms behind inflammation, aging, and disease.',
    longDescription: 'Your health is determined by countless molecular pathways working in concert. This course explores the key pathways involved in inflammation, oxidative stress, energy metabolism, and aging. You\'ll learn how lifestyle factors influence these pathways and how to interpret pathway-level data from your biomarker tests.',
    skills: ['Pathway Analysis', 'Health Biomarkers', 'Disease Mechanisms'],
    prerequisites: ['Basic biochemistry', 'Multi-Omics Foundations recommended'],
    instructor: 'Dr. Maria Lopez',
    instructorBio: 'Dr. Lopez is an immunologist specializing in inflammatory pathways and their role in chronic disease.',
    enrolled: 3124,
    rating: 4.7,
    lessons: [
      {
        id: 1,
        title: 'Introduction to Metabolic Pathways',
        duration: '45 min',
        description: 'Learn the language of biochemical pathways and how they connect.',
        content: [
          { type: 'video', title: 'Pathway Basics', duration: '15 min' },
          { type: 'reading', title: 'Enzymes and Regulation', duration: '20 min' },
          { type: 'interactive', title: 'Pathway Mapping', duration: '10 min' }
        ],
        learningObjectives: [
          'Define metabolic pathways',
          'Identify key regulatory points',
          'Read pathway diagrams'
        ]
      },
      {
        id: 2,
        title: 'Energy Metabolism Pathways',
        duration: '60 min',
        description: 'Explore how your body converts food into cellular energy.',
        content: [
          { type: 'video', title: 'Glycolysis to Oxidative Phosphorylation', duration: '25 min' },
          { type: 'reading', title: 'Mitochondrial Function', duration: '25 min' },
          { type: 'quiz', title: 'Energy Pathways Quiz', questions: 8 }
        ],
        learningObjectives: [
          'Trace glucose through energy pathways',
          'Explain ATP production',
          'Identify mitochondrial dysfunction markers'
        ]
      },
      {
        id: 3,
        title: 'The Inflammation Cascade',
        duration: '55 min',
        description: 'Understand how inflammation is triggered and resolved at the molecular level.',
        content: [
          { type: 'video', title: 'Acute vs Chronic Inflammation', duration: '20 min' },
          { type: 'reading', title: 'Cytokines and Signaling', duration: '20 min' },
          { type: 'interactive', title: 'Inflammation Pathway Explorer', duration: '15 min' }
        ],
        learningObjectives: [
          'Distinguish acute from chronic inflammation',
          'Identify key inflammatory mediators',
          'Connect inflammation to disease'
        ]
      },
      {
        id: 4,
        title: 'Oxidative Stress and Antioxidant Defense',
        duration: '50 min',
        description: 'Learn how your body manages reactive oxygen species.',
        content: [
          { type: 'video', title: 'ROS: Friend and Foe', duration: '18 min' },
          { type: 'reading', title: 'Antioxidant Pathways', duration: '22 min' },
          { type: 'quiz', title: 'Oxidative Stress Quiz', questions: 6 }
        ],
        learningObjectives: [
          'Explain oxidative stress mechanisms',
          'Describe the Nrf2 antioxidant pathway',
          'Interpret oxidative stress biomarkers'
        ]
      },
      {
        id: 5,
        title: 'Lipid Metabolism Pathways',
        duration: '55 min',
        description: 'Explore how fats are processed and why lipid balance matters.',
        content: [
          { type: 'video', title: 'Fatty Acid Synthesis and Oxidation', duration: '22 min' },
          { type: 'reading', title: 'Cholesterol Metabolism', duration: '23 min' },
          { type: 'interactive', title: 'Lipid Pathway Navigator', duration: '10 min' }
        ],
        learningObjectives: [
          'Trace fatty acid metabolism',
          'Explain cholesterol regulation',
          'Connect lipids to cardiovascular health'
        ]
      },
      {
        id: 6,
        title: 'Detoxification Pathways',
        duration: '50 min',
        description: 'Discover how your body neutralizes and eliminates toxins.',
        content: [
          { type: 'video', title: 'Phase I and Phase II Detox', duration: '20 min' },
          { type: 'reading', title: 'Liver Function and Biotransformation', duration: '20 min' },
          { type: 'quiz', title: 'Detox Pathways Quiz', questions: 7 }
        ],
        learningObjectives: [
          'Describe phase I and II reactions',
          'Identify detox pathway nutrients',
          'Interpret liver function markers'
        ]
      },
      {
        id: 7,
        title: 'Aging and Longevity Pathways',
        duration: '60 min',
        description: 'Explore the molecular hallmarks of aging and interventions.',
        content: [
          { type: 'video', title: 'Hallmarks of Aging', duration: '25 min' },
          { type: 'reading', title: 'Sirtuins, mTOR, and AMPK', duration: '25 min' },
          { type: 'case-study', title: 'Longevity Interventions', duration: '10 min' }
        ],
        learningObjectives: [
          'List the hallmarks of aging',
          'Explain longevity pathway regulation',
          'Evaluate anti-aging interventions'
        ]
      },
      {
        id: 8,
        title: 'Integrating Pathway Knowledge',
        duration: '45 min',
        description: 'Apply pathway thinking to real health scenarios.',
        content: [
          { type: 'case-study', title: 'Pathway Analysis Cases', duration: '25 min' },
          { type: 'quiz', title: 'Final Assessment', questions: 20 }
        ],
        learningObjectives: [
          'Apply pathway knowledge to health questions',
          'Interpret multi-pathway interactions'
        ]
      }
    ]
  },
  4: {
    id: 4,
    title: 'Biomarker Interpretation',
    level: 'Advanced',
    category: 'Health & Wellness',
    hours: 5,
    description: 'Learn to read and interpret biomarker panels for personalized health insights.',
    longDescription: 'Biomarker testing generates a wealth of data, but interpretation requires skill. This advanced course teaches you to read metabolomics panels, understand reference ranges, identify patterns, and translate findings into actionable recommendations. You\'ll practice with real case studies to develop clinical interpretation skills.',
    skills: ['Panel Analysis', 'Clinical Interpretation', 'Personalized Nutrition'],
    prerequisites: ['Molecular Pathways for Health', 'Basic statistics'],
    instructor: 'Dr. Alex Kim',
    instructorBio: 'Dr. Kim is a clinical biochemist who has interpreted over 10,000 metabolomics panels.',
    enrolled: 1245,
    rating: 4.9,
    lessons: [
      {
        id: 1,
        title: 'Understanding Reference Ranges',
        duration: '40 min',
        description: 'Learn what reference ranges really mean and their limitations.',
        content: [
          { type: 'video', title: 'How Reference Ranges Are Established', duration: '15 min' },
          { type: 'reading', title: 'Optimal vs Normal Ranges', duration: '15 min' },
          { type: 'quiz', title: 'Reference Range Quiz', questions: 5 }
        ],
        learningObjectives: [
          'Explain how reference ranges are derived',
          'Distinguish optimal from normal ranges',
          'Identify reference range limitations'
        ]
      },
      {
        id: 2,
        title: 'Pattern Recognition in Biomarker Data',
        duration: '55 min',
        description: 'Develop skills to identify meaningful patterns across multiple markers.',
        content: [
          { type: 'video', title: 'Cluster Analysis Basics', duration: '20 min' },
          { type: 'reading', title: 'Common Biomarker Patterns', duration: '20 min' },
          { type: 'interactive', title: 'Pattern Matching Exercise', duration: '15 min' }
        ],
        learningObjectives: [
          'Recognize common biomarker patterns',
          'Apply cluster thinking to panels',
          'Avoid over-interpretation'
        ]
      },
      {
        id: 3,
        title: 'Clinical Case Studies',
        duration: '70 min',
        description: 'Practice interpretation with real-world clinical cases.',
        content: [
          { type: 'case-study', title: 'Metabolic Syndrome Panel', duration: '20 min' },
          { type: 'case-study', title: 'Inflammation Panel', duration: '20 min' },
          { type: 'case-study', title: 'Nutritional Deficiency Panel', duration: '20 min' },
          { type: 'quiz', title: 'Case Analysis Quiz', questions: 10 }
        ],
        learningObjectives: [
          'Interpret metabolic panels',
          'Identify nutritional deficiencies',
          'Recognize inflammatory patterns'
        ]
      },
      {
        id: 4,
        title: 'From Data to Recommendations',
        duration: '50 min',
        description: 'Translate biomarker findings into actionable health recommendations.',
        content: [
          { type: 'video', title: 'Evidence-Based Recommendations', duration: '18 min' },
          { type: 'reading', title: 'Prioritizing Interventions', duration: '17 min' },
          { type: 'quiz', title: 'Final Assessment', questions: 15 }
        ],
        learningObjectives: [
          'Create evidence-based recommendations',
          'Prioritize interventions by impact',
          'Communicate findings effectively'
        ]
      }
    ]
  },
  5: {
    id: 5,
    title: 'Metabolic Biochemistry',
    level: 'Intermediate',
    category: 'Food & Nutrition',
    hours: 9,
    description: 'Deep dive into metabolic pathways and nutrient-gene interactions.',
    longDescription: 'Nutrition meets molecular biology in this comprehensive course on metabolic biochemistry. You\'ll explore how macronutrients are processed, how micronutrients function as cofactors, and how food compounds influence gene expression. This knowledge forms the foundation for understanding personalized nutrition.',
    skills: ['Metabolism', 'Nutrient Signaling', 'Biochemistry'],
    prerequisites: ['Basic chemistry', 'Biology fundamentals'],
    instructor: 'Dr. Lisa Chang',
    instructorBio: 'Dr. Chang is a nutrigenomics researcher studying how diet influences metabolic health.',
    enrolled: 2567,
    rating: 4.6,
    lessons: [
      {
        id: 1,
        title: 'Carbohydrate Metabolism',
        duration: '55 min',
        description: 'Follow carbohydrates from digestion to cellular utilization.',
        content: [
          { type: 'video', title: 'Carb Digestion and Absorption', duration: '18 min' },
          { type: 'reading', title: 'Glycolysis and Gluconeogenesis', duration: '22 min' },
          { type: 'interactive', title: 'Blood Sugar Simulator', duration: '15 min' }
        ],
        learningObjectives: [
          'Trace carbohydrate metabolism',
          'Explain insulin signaling',
          'Identify factors affecting blood glucose'
        ]
      },
      {
        id: 2,
        title: 'Protein and Amino Acid Metabolism',
        duration: '60 min',
        description: 'Understand how proteins are digested and amino acids utilized.',
        content: [
          { type: 'video', title: 'Protein Digestion', duration: '15 min' },
          { type: 'reading', title: 'Essential vs Non-Essential Amino Acids', duration: '25 min' },
          { type: 'reading', title: 'Amino Acid Metabolism Pathways', duration: '20 min' }
        ],
        learningObjectives: [
          'Classify amino acids by essentiality',
          'Explain protein turnover',
          'Identify amino acid deficiency signs'
        ]
      },
      {
        id: 3,
        title: 'Lipid Metabolism Deep Dive',
        duration: '65 min',
        description: 'Explore fat digestion, transport, and cellular utilization.',
        content: [
          { type: 'video', title: 'Fat Digestion and Lipoproteins', duration: '22 min' },
          { type: 'reading', title: 'Beta Oxidation and Ketogenesis', duration: '25 min' },
          { type: 'quiz', title: 'Lipid Metabolism Quiz', questions: 8 }
        ],
        learningObjectives: [
          'Describe lipoprotein metabolism',
          'Explain beta oxidation',
          'Connect lipid metabolism to health'
        ]
      },
      {
        id: 4,
        title: 'Vitamins as Metabolic Cofactors',
        duration: '50 min',
        description: 'Learn how vitamins enable enzymatic reactions.',
        content: [
          { type: 'video', title: 'B Vitamins in Metabolism', duration: '20 min' },
          { type: 'reading', title: 'Fat-Soluble Vitamins', duration: '20 min' },
          { type: 'interactive', title: 'Cofactor Matching Game', duration: '10 min' }
        ],
        learningObjectives: [
          'Match vitamins to metabolic functions',
          'Recognize deficiency patterns',
          'Understand vitamin interactions'
        ]
      },
      {
        id: 5,
        title: 'Minerals and Trace Elements',
        duration: '50 min',
        description: 'Explore the roles of minerals in enzyme function and signaling.',
        content: [
          { type: 'video', title: 'Essential Minerals Overview', duration: '18 min' },
          { type: 'reading', title: 'Mineral Absorption and Transport', duration: '22 min' },
          { type: 'quiz', title: 'Minerals Quiz', questions: 6 }
        ],
        learningObjectives: [
          'Identify essential mineral functions',
          'Explain mineral absorption factors',
          'Recognize mineral imbalances'
        ]
      },
      {
        id: 6,
        title: 'Nutrigenomics Fundamentals',
        duration: '55 min',
        description: 'Discover how nutrients influence gene expression.',
        content: [
          { type: 'video', title: 'Food Talks to Your Genes', duration: '20 min' },
          { type: 'reading', title: 'Epigenetics and Nutrition', duration: '25 min' },
          { type: 'interactive', title: 'Gene-Nutrient Interaction Explorer', duration: '10 min' }
        ],
        learningObjectives: [
          'Define nutrigenomics',
          'Explain epigenetic mechanisms',
          'Identify nutrient-gene interactions'
        ]
      },
      {
        id: 7,
        title: 'Applied Metabolic Biochemistry',
        duration: '55 min',
        description: 'Apply biochemistry knowledge to real nutritional scenarios.',
        content: [
          { type: 'case-study', title: 'Athletic Performance Nutrition', duration: '20 min' },
          { type: 'case-study', title: 'Metabolic Health Optimization', duration: '20 min' },
          { type: 'quiz', title: 'Final Assessment', questions: 18 }
        ],
        learningObjectives: [
          'Apply biochemistry to nutrition planning',
          'Optimize nutrient timing',
          'Personalize recommendations'
        ]
      }
    ]
  },
  6: {
    id: 6,
    title: 'Neurobiology & Signaling',
    level: 'Advanced',
    category: 'Brain & Behavior',
    hours: 7,
    description: 'Explore cognitive biomarkers and the gut-brain molecular connection.',
    longDescription: 'The brain is the most complex organ, and its health depends on intricate molecular signaling systems. This advanced course covers neurotransmitter metabolism, the gut-brain axis, stress response pathways, and cognitive biomarkers. You\'ll learn how lifestyle factors influence brain chemistry and function.',
    skills: ['Neuroscience', 'Molecular Signaling', 'Stress Biology'],
    prerequisites: ['Molecular Pathways for Health', 'Metabolic Biochemistry recommended'],
    instructor: 'Dr. Emily Watson',
    instructorBio: 'Dr. Watson is a neuroscientist studying the molecular basis of mood and cognition.',
    enrolled: 1678,
    rating: 4.8,
    lessons: [
      {
        id: 1,
        title: 'Neurotransmitter Biochemistry',
        duration: '60 min',
        description: 'Understand how neurotransmitters are synthesized and metabolized.',
        content: [
          { type: 'video', title: 'Neurotransmitter Synthesis Pathways', duration: '22 min' },
          { type: 'reading', title: 'Catecholamines and Serotonin', duration: '25 min' },
          { type: 'interactive', title: 'Neurotransmitter Pathway Map', duration: '13 min' }
        ],
        learningObjectives: [
          'Trace neurotransmitter synthesis',
          'Identify cofactor requirements',
          'Connect nutrients to neurotransmitters'
        ]
      },
      {
        id: 2,
        title: 'The Gut-Brain Axis',
        duration: '55 min',
        description: 'Explore how gut microbes communicate with the brain.',
        content: [
          { type: 'video', title: 'Gut-Brain Communication Pathways', duration: '20 min' },
          { type: 'reading', title: 'Microbial Metabolites and the Brain', duration: '25 min' },
          { type: 'quiz', title: 'Gut-Brain Quiz', questions: 7 }
        ],
        learningObjectives: [
          'Describe gut-brain communication routes',
          'Identify key microbial metabolites',
          'Connect gut health to mood'
        ]
      },
      {
        id: 3,
        title: 'Stress Response Pathways',
        duration: '55 min',
        description: 'Learn the molecular basis of the stress response.',
        content: [
          { type: 'video', title: 'HPA Axis and Cortisol', duration: '20 min' },
          { type: 'reading', title: 'Chronic Stress and Health', duration: '20 min' },
          { type: 'interactive', title: 'Stress Response Simulator', duration: '15 min' }
        ],
        learningObjectives: [
          'Explain HPA axis function',
          'Describe cortisol effects',
          'Identify chronic stress markers'
        ]
      },
      {
        id: 4,
        title: 'Neuroinflammation',
        duration: '50 min',
        description: 'Understand how inflammation affects brain function.',
        content: [
          { type: 'video', title: 'Immune Cells in the Brain', duration: '18 min' },
          { type: 'reading', title: 'Cytokines and Cognition', duration: '22 min' },
          { type: 'quiz', title: 'Neuroinflammation Quiz', questions: 6 }
        ],
        learningObjectives: [
          'Describe microglial function',
          'Connect inflammation to brain fog',
          'Identify neuroinflammation markers'
        ]
      },
      {
        id: 5,
        title: 'Cognitive Biomarkers and Brain Health',
        duration: '60 min',
        description: 'Apply neurobiological knowledge to optimize brain function.',
        content: [
          { type: 'video', title: 'Biomarkers for Brain Health', duration: '20 min' },
          { type: 'case-study', title: 'Cognitive Optimization Protocol', duration: '25 min' },
          { type: 'quiz', title: 'Final Assessment', questions: 15 }
        ],
        learningObjectives: [
          'Interpret cognitive biomarkers',
          'Design brain health interventions',
          'Apply neurobiological principles'
        ]
      }
    ]
  }
};
