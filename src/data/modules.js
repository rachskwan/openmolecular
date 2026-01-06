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

// Detailed lesson content for each track and lesson
export const lessonContent = {
  // Track 1: Multi-Omics Foundations
  1: {
    1: { // Lesson 1: Introduction to Omics Sciences
      sections: [
        {
          type: 'video',
          title: 'What are Omics Sciences?',
          duration: '15 min',
          content: [
            'Omics sciences represent a revolutionary approach to understanding biology at the molecular level. Instead of studying individual genes or proteins in isolation, omics technologies allow us to examine entire systems simultaneously.',
            'The term "omics" comes from adding the suffix "-ome" (meaning "all of" or "complete set") to different molecular components. Genomics studies all genes, proteomics studies all proteins, and metabolomics studies all metabolites.',
            'This systems-level view has transformed our understanding of health and disease, enabling personalized medicine approaches that consider your unique molecular profile.'
          ],
          keyPoints: [
            'Omics sciences study complete molecular systems rather than individual components',
            'The four main omics are genomics, transcriptomics, proteomics, and metabolomics',
            'These technologies enable personalized approaches to health and medicine'
          ]
        },
        {
          type: 'reading',
          title: 'The History of Molecular Biology',
          duration: '20 min',
          content: [
            { type: 'heading', text: 'From DNA Discovery to Multi-Omics' },
            'The story of molecular biology begins in 1953 when James Watson and Francis Crick, building on Rosalind Franklin\'s X-ray crystallography work, described the double helix structure of DNA. This discovery launched decades of research into how genetic information is stored and expressed.',
            { type: 'definition', term: 'DNA (Deoxyribonucleic Acid)', definition: 'The molecule that carries genetic instructions for the development, functioning, growth, and reproduction of all known organisms.' },
            { type: 'heading', text: 'The Central Dogma' },
            'In 1958, Francis Crick proposed the "Central Dogma of Molecular Biology" — the flow of genetic information from DNA to RNA to protein. This framework remains fundamental to understanding how our genes influence our health.',
            { type: 'highlight', text: 'DNA → RNA → Protein: This unidirectional flow of information is the foundation of molecular biology.' },
            { type: 'heading', text: 'The Genomic Era' },
            'The Human Genome Project (1990-2003) was a landmark achievement, sequencing all 3 billion base pairs of human DNA. This project demonstrated the power of large-scale molecular analysis and paved the way for other omics technologies.',
            { type: 'list', items: [
              '1995: First bacterial genome sequenced (Haemophilus influenzae)',
              '2001: Draft human genome published',
              '2003: Human Genome Project completed',
              '2007: First personal genome sequenced (Craig Venter)',
              '2010s: Rise of metabolomics and multi-omics integration'
            ]},
            { type: 'heading', text: 'The Rise of Multi-Omics' },
            'Today, we understand that genes alone don\'t tell the whole story. Environmental factors, lifestyle choices, and the complex interactions between molecular layers all contribute to health outcomes. Multi-omics approaches integrate data from multiple levels to create a comprehensive picture.',
            'Metabolomics, the newest major omics field, is particularly powerful because metabolites represent the end products of cellular processes — they show what\'s actually happening in your body right now, not just what\'s possible based on your genes.'
          ],
          keyPoints: [
            'The central dogma describes information flow from DNA to RNA to protein',
            'The Human Genome Project established large-scale molecular analysis',
            'Multi-omics integration provides a more complete picture than any single approach'
          ]
        },
        {
          type: 'quiz',
          title: 'Knowledge Check',
          questions: [
            {
              question: 'What does the suffix "-omics" indicate in scientific terminology?',
              options: [
                'The study of a single molecule',
                'The study of all molecules of a particular type',
                'A type of laboratory technique',
                'A disease category'
              ],
              correct: 1,
              explanation: 'The "-omics" suffix indicates the comprehensive study of all molecules of a particular type in a biological system.'
            },
            {
              question: 'What is the correct order of information flow according to the Central Dogma?',
              options: [
                'Protein → RNA → DNA',
                'RNA → DNA → Protein',
                'DNA → RNA → Protein',
                'DNA → Protein → RNA'
              ],
              correct: 2,
              explanation: 'The Central Dogma states that genetic information flows from DNA to RNA (transcription) to Protein (translation).'
            },
            {
              question: 'Which omics field studies small molecules that are end products of metabolism?',
              options: [
                'Genomics',
                'Proteomics',
                'Transcriptomics',
                'Metabolomics'
              ],
              correct: 3,
              explanation: 'Metabolomics studies metabolites — the small molecules produced by cellular metabolism that reflect current biological activity.'
            },
            {
              question: 'When was the Human Genome Project completed?',
              options: [
                '1990',
                '1995',
                '2003',
                '2010'
              ],
              correct: 2,
              explanation: 'The Human Genome Project was completed in 2003, after 13 years of international collaborative research.'
            },
            {
              question: 'Why is multi-omics integration important?',
              options: [
                'It is less expensive than single omics',
                'It provides a more complete picture of biological systems',
                'It requires less data analysis',
                'It only studies DNA'
              ],
              correct: 1,
              explanation: 'Multi-omics integration combines data from multiple molecular layers to provide a comprehensive understanding that no single approach can achieve.'
            }
          ]
        }
      ]
    },
    2: { // Lesson 2: Genomics Fundamentals
      sections: [
        {
          type: 'video',
          title: 'DNA Sequencing Technologies',
          duration: '20 min',
          content: [
            'DNA sequencing has evolved dramatically since the first methods were developed in the 1970s. Today\'s technologies can sequence an entire human genome in hours, compared to the 13 years it took for the original Human Genome Project.',
            'The most widely used modern approach is Next-Generation Sequencing (NGS), which reads millions of DNA fragments simultaneously. This parallel approach makes whole-genome sequencing affordable and accessible.',
            'Understanding sequencing technology helps you appreciate what genetic tests can and cannot tell you about your health.'
          ],
          keyPoints: [
            'DNA sequencing reads the order of nucleotides (A, T, G, C) in your genome',
            'Next-Generation Sequencing (NGS) revolutionized genomics by enabling parallel processing',
            'Modern sequencing is fast and increasingly affordable'
          ]
        },
        {
          type: 'reading',
          title: 'Understanding Gene Expression',
          duration: '25 min',
          content: [
            { type: 'heading', text: 'From Gene to Function' },
            'Having a gene doesn\'t mean it\'s always active. Gene expression is the process by which information from a gene is used to create a functional product, usually a protein. Understanding gene expression is key to understanding how your genome influences your health.',
            { type: 'definition', term: 'Gene Expression', definition: 'The process by which genetic instructions are used to synthesize gene products, typically proteins that perform cellular functions.' },
            { type: 'heading', text: 'Transcription: DNA to RNA' },
            'The first step of gene expression is transcription, where an enzyme called RNA polymerase reads the DNA and creates a complementary messenger RNA (mRNA) copy. This mRNA carries the genetic message from the nucleus to the ribosomes.',
            'Not all genes are transcribed equally. Various factors control which genes are "turned on" in different cells and at different times:',
            { type: 'list', items: [
              'Transcription factors: Proteins that bind to DNA and regulate gene activity',
              'Epigenetic modifications: Chemical changes to DNA or histones that affect accessibility',
              'Environmental signals: Nutrients, hormones, and stress can influence expression',
              'Cellular context: Different cell types express different sets of genes'
            ]},
            { type: 'heading', text: 'Translation: RNA to Protein' },
            'Once mRNA reaches the ribosome, it\'s translated into a protein. The sequence of nucleotides in the mRNA determines the sequence of amino acids in the protein, following the genetic code.',
            { type: 'highlight', text: 'Each three-nucleotide sequence (codon) specifies one amino acid. There are 64 possible codons for just 20 amino acids, providing redundancy in the genetic code.' },
            { type: 'heading', text: 'Genetic Variants and Health' },
            'Variations in DNA sequence (genetic variants) can affect gene expression or protein function. Some variants are benign, while others may increase disease risk or affect how you respond to medications.',
            { type: 'definition', term: 'SNP (Single Nucleotide Polymorphism)', definition: 'A variation at a single position in the DNA sequence. SNPs are the most common type of genetic variation and can influence traits and disease risk.' },
            'Common examples of health-relevant genetic variants include:',
            { type: 'list', items: [
              'MTHFR variants affecting folate metabolism',
              'APOE variants associated with Alzheimer\'s risk',
              'CYP450 variants influencing drug metabolism',
              'BRCA variants linked to cancer risk'
            ]}
          ],
          keyPoints: [
            'Gene expression is tightly regulated and varies between cells and conditions',
            'Transcription and translation convert genetic information into functional proteins',
            'Genetic variants can influence health by affecting gene expression or protein function'
          ]
        },
        {
          type: 'interactive',
          title: 'Gene Mapping Exercise',
          duration: '15 min',
          description: 'Explore how genes are organized on chromosomes and practice identifying key genetic features.',
          content: [
            'In this exercise, you\'ll explore the organization of the human genome and identify key features of genes.',
            'Humans have 23 pairs of chromosomes containing approximately 20,000-25,000 protein-coding genes.',
            'Only about 1.5% of our genome codes for proteins — the rest includes regulatory regions, non-coding RNA genes, and sequences of unknown function.',
            'Gene density varies across chromosomes: Chromosome 19 has the highest gene density, while chromosome 13 has one of the lowest.'
          ],
          keyPoints: [
            'The human genome contains approximately 20,000-25,000 protein-coding genes',
            'Only about 1.5% of DNA codes for proteins',
            'Gene density varies significantly across chromosomes'
          ]
        }
      ]
    },
    3: { // Lesson 3: Proteomics Essentials
      sections: [
        {
          type: 'video',
          title: 'Protein Structure and Function',
          duration: '18 min',
          content: [
            'Proteins are the workhorses of the cell, performing virtually every function necessary for life. While your genome provides the blueprint, proteins do the actual work — catalyzing reactions, providing structure, transmitting signals, and much more.',
            'Protein structure occurs at four levels: primary (amino acid sequence), secondary (local folding patterns), tertiary (3D shape), and quaternary (multi-protein complexes). Each level contributes to protein function.',
            'Understanding proteins is essential because most biomarkers we measure are proteins, and most drugs target proteins.'
          ],
          keyPoints: [
            'Proteins perform the majority of cellular functions',
            'Protein structure has four hierarchical levels',
            'Most biomarkers and drug targets are proteins'
          ]
        },
        {
          type: 'reading',
          title: 'Mass Spectrometry in Proteomics',
          duration: '22 min',
          content: [
            { type: 'heading', text: 'How We Identify Proteins' },
            'Mass spectrometry (MS) is the core technology enabling modern proteomics. It works by measuring the mass-to-charge ratio of ionized molecules, allowing precise identification and quantification of proteins.',
            { type: 'definition', term: 'Mass Spectrometry', definition: 'An analytical technique that measures the mass-to-charge ratio of ions, used to identify and quantify molecules in complex samples.' },
            { type: 'heading', text: 'The Proteomics Workflow' },
            'A typical proteomics experiment follows these steps:',
            { type: 'list', items: [
              'Sample preparation: Extract proteins from biological samples',
              'Digestion: Cut proteins into smaller peptides using enzymes (usually trypsin)',
              'Separation: Use liquid chromatography to separate peptides',
              'Ionization: Convert peptides into charged ions',
              'Mass analysis: Measure the mass of each ion',
              'Data analysis: Match spectra to databases to identify proteins'
            ]},
            { type: 'heading', text: 'Targeted vs. Untargeted Proteomics' },
            'Untargeted (discovery) proteomics aims to identify as many proteins as possible in a sample. This approach is useful for biomarker discovery and understanding disease mechanisms.',
            'Targeted proteomics focuses on quantifying specific proteins of interest with high precision. This approach is used for clinical diagnostics and validating biomarkers.',
            { type: 'highlight', text: 'Modern proteomics can identify thousands of proteins in a single experiment, but the proteome is far more complex than the genome due to alternative splicing and post-translational modifications.' },
            { type: 'heading', text: 'Clinical Applications' },
            'Proteomics has numerous clinical applications:',
            { type: 'list', items: [
              'Biomarker discovery for early disease detection',
              'Understanding drug mechanisms and resistance',
              'Personalized medicine based on protein profiles',
              'Monitoring treatment response'
            ]}
          ],
          keyPoints: [
            'Mass spectrometry is the key technology for protein identification',
            'Proteomics workflows involve digestion, separation, and analysis',
            'Both targeted and untargeted approaches have clinical value'
          ]
        },
        {
          type: 'quiz',
          title: 'Proteomics Quiz',
          questions: [
            {
              question: 'What is the primary technology used to identify proteins in proteomics?',
              options: ['PCR', 'Mass spectrometry', 'Gel electrophoresis', 'Microscopy'],
              correct: 1,
              explanation: 'Mass spectrometry measures the mass-to-charge ratio of ionized peptides, enabling precise protein identification.'
            },
            {
              question: 'Why is the proteome more complex than the genome?',
              options: [
                'There are more proteins than genes',
                'Proteins are larger than genes',
                'Alternative splicing and modifications create many variants from each gene',
                'Proteins are harder to measure'
              ],
              correct: 2,
              explanation: 'Each gene can produce multiple protein variants through alternative splicing and post-translational modifications.'
            },
            {
              question: 'What enzyme is commonly used to digest proteins into peptides?',
              options: ['Lipase', 'Amylase', 'Trypsin', 'Lactase'],
              correct: 2,
              explanation: 'Trypsin cleaves proteins at specific amino acids, producing peptides suitable for mass spectrometry analysis.'
            },
            {
              question: 'What is the difference between targeted and untargeted proteomics?',
              options: [
                'Targeted is more expensive',
                'Targeted focuses on specific proteins, untargeted surveys all proteins',
                'Untargeted is more accurate',
                'There is no difference'
              ],
              correct: 1,
              explanation: 'Targeted proteomics precisely quantifies specific proteins of interest, while untargeted proteomics aims to identify as many proteins as possible.'
            },
            {
              question: 'Which level of protein structure refers to the amino acid sequence?',
              options: ['Primary', 'Secondary', 'Tertiary', 'Quaternary'],
              correct: 0,
              explanation: 'Primary structure is the linear sequence of amino acids. Secondary refers to local folding, tertiary to 3D shape, and quaternary to multi-protein complexes.'
            },
            {
              question: 'What technique separates peptides before mass spectrometry?',
              options: ['Centrifugation', 'Liquid chromatography', 'Filtration', 'Distillation'],
              correct: 1,
              explanation: 'Liquid chromatography separates complex peptide mixtures based on their chemical properties before mass spectrometry analysis.'
            },
            {
              question: 'Why are proteins important in medicine?',
              options: [
                'They are cheap to produce',
                'Most biomarkers and drug targets are proteins',
                'They are easy to measure',
                'They don\'t change over time'
              ],
              correct: 1,
              explanation: 'Proteins perform most cellular functions, making them valuable both as biomarkers for diagnosing disease and as targets for therapeutic drugs.'
            },
            {
              question: 'Post-translational modifications can:',
              options: [
                'Only occur in bacteria',
                'Change DNA sequence',
                'Alter protein function without changing the gene',
                'Are always harmful'
              ],
              correct: 2,
              explanation: 'Post-translational modifications like phosphorylation, glycosylation, and ubiquitination modify proteins after synthesis, affecting their function, location, and stability.'
            }
          ]
        }
      ]
    },
    4: { // Lesson 4: Introduction to Metabolomics
      sections: [
        {
          type: 'video',
          title: 'What is Metabolomics?',
          duration: '15 min',
          content: [
            'Metabolomics is the comprehensive study of metabolites — small molecules that are the end products of cellular metabolism. Unlike genomics which tells you what\'s possible, metabolomics tells you what\'s actually happening in your body right now.',
            'Metabolites include sugars, lipids, amino acids, organic acids, and thousands of other compounds. They reflect the interaction between your genes, your environment, your diet, and your microbiome.',
            'This makes metabolomics particularly powerful for personalized health assessment and monitoring the effects of lifestyle interventions.'
          ],
          keyPoints: [
            'Metabolomics studies the complete set of small molecules in biological samples',
            'Metabolites reflect current biological activity, not just genetic potential',
            'Metabolomics integrates genetic and environmental influences'
          ]
        },
        {
          type: 'reading',
          title: 'Metabolite Classes and Functions',
          duration: '20 min',
          content: [
            { type: 'heading', text: 'Major Metabolite Classes' },
            'The metabolome includes thousands of different compounds that can be organized into several major classes, each with distinct functions:',
            { type: 'heading', text: 'Amino Acids' },
            'Amino acids are the building blocks of proteins and also serve as precursors for neurotransmitters, hormones, and other important molecules.',
            { type: 'list', items: [
              'Essential amino acids must come from diet (leucine, isoleucine, valine, etc.)',
              'Non-essential amino acids can be synthesized by the body',
              'Tryptophan → Serotonin and Melatonin',
              'Tyrosine → Dopamine, Norepinephrine, Epinephrine'
            ]},
            { type: 'heading', text: 'Lipids and Fatty Acids' },
            'Lipids serve as energy storage, cell membrane components, and signaling molecules.',
            { type: 'definition', term: 'Omega-3 Fatty Acids', definition: 'Essential polyunsaturated fats (EPA, DHA) with anti-inflammatory properties, crucial for brain and heart health.' },
            { type: 'list', items: [
              'Saturated vs. unsaturated fatty acids',
              'Omega-3 and Omega-6 balance',
              'Phospholipids in cell membranes',
              'Steroid hormones derived from cholesterol'
            ]},
            { type: 'heading', text: 'Organic Acids' },
            'Organic acids are intermediates in metabolic pathways and can indicate metabolic health.',
            { type: 'list', items: [
              'Citric acid cycle intermediates',
              'Short-chain fatty acids from gut bacteria',
              'Markers of mitochondrial function',
              'Detoxification byproducts'
            ]},
            { type: 'heading', text: 'Sugars and Carbohydrate Metabolites' },
            'Carbohydrate metabolites reflect energy metabolism and can indicate insulin sensitivity.',
            { type: 'highlight', text: 'Metabolomics can detect metabolic dysfunction before traditional clinical markers become abnormal, enabling earlier intervention.' },
            { type: 'heading', text: 'Secondary Metabolites and Xenobiotics' },
            'These include plant compounds (polyphenols, flavonoids), drug metabolites, and environmental chemicals. They provide information about diet, medication adherence, and exposures.'
          ],
          keyPoints: [
            'Major metabolite classes include amino acids, lipids, organic acids, and sugars',
            'Each class provides different health information',
            'Metabolomics can detect dysfunction before traditional tests'
          ]
        },
        {
          type: 'interactive',
          title: 'Metabolite Identification',
          duration: '15 min',
          description: 'Practice identifying metabolites and understanding their biological roles.',
          content: [
            'In this exercise, you\'ll learn to recognize important metabolites and connect them to biological functions.',
            'Consider this scenario: A patient has elevated levels of branched-chain amino acids (leucine, isoleucine, valine) and organic acids.',
            'This pattern might indicate: insulin resistance, mitochondrial dysfunction, or high protein intake.',
            'Metabolomics interpretation requires considering patterns across multiple metabolites, not just individual values.'
          ],
          keyPoints: [
            'Metabolite interpretation requires pattern recognition',
            'Context matters — the same metabolite can mean different things',
            'Multiple metabolites together tell a more complete story'
          ]
        }
      ]
    },
    5: { // Lesson 5: Integrating Multi-Omics Data
      sections: [
        {
          type: 'video',
          title: 'Systems Biology Approach',
          duration: '25 min',
          content: [
            'Systems biology views biological systems as integrated networks rather than isolated components. This approach recognizes that understanding health and disease requires studying interactions between genes, proteins, metabolites, and the environment.',
            'Multi-omics integration combines data from genomics, transcriptomics, proteomics, and metabolomics to create comprehensive biological insights. Each layer provides unique information that complements the others.',
            'The power of integration comes from seeing how changes at one level propagate through the system and identifying intervention points for personalized health optimization.'
          ],
          keyPoints: [
            'Systems biology studies integrated biological networks',
            'Multi-omics integration provides comprehensive insights',
            'Different omics layers provide complementary information'
          ]
        },
        {
          type: 'reading',
          title: 'Data Integration Strategies',
          duration: '30 min',
          content: [
            { type: 'heading', text: 'Why Integrate Multiple Omics?' },
            'Each omics layer captures different aspects of biology:',
            { type: 'list', items: [
              'Genomics: What\'s possible (your genetic blueprint)',
              'Transcriptomics: What\'s being expressed (genes turned on)',
              'Proteomics: What\'s being made (functional molecules)',
              'Metabolomics: What\'s happening now (current biological state)'
            ]},
            { type: 'highlight', text: 'A genetic variant might predispose you to a condition, but metabolomics can show whether that predisposition has manifested — and whether interventions are working.' },
            { type: 'heading', text: 'Integration Approaches' },
            'There are several strategies for integrating multi-omics data:',
            { type: 'definition', term: 'Pathway Analysis', definition: 'Mapping omics data onto known biological pathways to understand which processes are affected.' },
            { type: 'list', items: [
              'Pathway-based: Map data onto biological pathways',
              'Network-based: Build interaction networks from correlations',
              'Machine learning: Use algorithms to find patterns',
              'Knowledge-based: Incorporate prior biological knowledge'
            ]},
            { type: 'heading', text: 'Practical Example: Inflammation' },
            'Consider studying chronic inflammation with multi-omics:',
            { type: 'list', items: [
              'Genomics: Identifies variants in inflammatory genes (IL-6, TNF-α)',
              'Transcriptomics: Shows increased expression of inflammatory genes',
              'Proteomics: Measures elevated inflammatory proteins',
              'Metabolomics: Detects changes in lipid mediators and oxidative stress markers'
            ]},
            'Together, these layers reveal the full picture of inflammatory status and suggest targeted interventions.',
            { type: 'heading', text: 'Challenges and Considerations' },
            'Multi-omics integration faces several challenges:',
            { type: 'list', items: [
              'Data scale differences between platforms',
              'Sample timing and tissue specificity',
              'Computational complexity',
              'Biological interpretation of integrated results'
            ]},
            'Despite these challenges, multi-omics approaches are becoming increasingly accessible and are transforming personalized health.'
          ],
          keyPoints: [
            'Each omics layer provides unique but complementary information',
            'Integration reveals system-level insights impossible from single approaches',
            'Pathway and network analyses help interpret complex data'
          ]
        },
        {
          type: 'case-study',
          title: 'Real-World Multi-Omics Analysis',
          duration: '15 min',
          description: 'Apply multi-omics thinking to a real health scenario.',
          content: [
            { type: 'heading', text: 'Case Study: Optimizing Metabolic Health' },
            { type: 'scenario', text: 'A 45-year-old male wants to optimize his metabolic health. He has a family history of type 2 diabetes and feels tired despite adequate sleep.' },
            { type: 'heading', text: 'Multi-Omics Findings' },
            'Genomic analysis reveals:',
            { type: 'list', items: [
              'TCF7L2 variant associated with increased diabetes risk',
              'PPARG variant affecting fat metabolism',
              'Normal MTHFR status'
            ]},
            'Metabolomic analysis shows:',
            { type: 'list', items: [
              'Elevated branched-chain amino acids',
              'Low Omega-3 Index (4.2%)',
              'Elevated markers of oxidative stress',
              'Suboptimal CoQ10 levels'
            ]},
            { type: 'heading', text: 'Integrated Interpretation' },
            'The combination of genetic predisposition AND metabolomic evidence of metabolic dysfunction suggests early intervention is warranted, even though standard blood glucose is still normal.',
            { type: 'question', text: 'What interventions might you recommend based on these findings?' },
            'Potential personalized recommendations:',
            { type: 'list', items: [
              'Increase omega-3 intake to target index >8%',
              'Consider time-restricted eating to improve insulin sensitivity',
              'CoQ10 supplementation for energy and mitochondrial support',
              'Antioxidant-rich foods to address oxidative stress',
              'Regular monitoring to track response'
            ]}
          ],
          keyPoints: [
            'Multi-omics can detect risk before traditional diagnostics',
            'Genetic risk + metabolomic evidence = stronger rationale for intervention',
            'Personalized recommendations address individual molecular profiles'
          ]
        }
      ]
    },
    6: { // Lesson 6: Final Assessment
      sections: [
        {
          type: 'quiz',
          title: 'Comprehensive Exam',
          questions: [
            {
              question: 'Which omics field provides the most immediate snapshot of current biological activity?',
              options: ['Genomics', 'Transcriptomics', 'Proteomics', 'Metabolomics'],
              correct: 3,
              explanation: 'Metabolomics measures metabolites, which reflect real-time biological processes and can change within hours to days.'
            },
            {
              question: 'The Central Dogma describes:',
              options: [
                'The structure of DNA',
                'The flow of genetic information from DNA to RNA to protein',
                'How cells divide',
                'The function of mitochondria'
              ],
              correct: 1,
              explanation: 'The Central Dogma describes the unidirectional flow of genetic information: DNA → RNA → Protein.'
            },
            {
              question: 'What advantage does multi-omics integration provide?',
              options: [
                'It\'s less expensive than single omics',
                'It requires smaller samples',
                'It provides complementary information from multiple biological layers',
                'It\'s faster than single omics'
              ],
              correct: 2,
              explanation: 'Multi-omics integration combines different types of molecular data to provide a more complete picture of biological systems.'
            },
            {
              question: 'Mass spectrometry is primarily used in:',
              options: [
                'DNA sequencing',
                'Proteomics and metabolomics',
                'Cell culture',
                'Microscopy'
              ],
              correct: 1,
              explanation: 'Mass spectrometry measures the mass-to-charge ratio of molecules, making it essential for identifying proteins and metabolites.'
            },
            {
              question: 'Omega-3 fatty acids are best classified as:',
              options: ['Amino acids', 'Lipids', 'Carbohydrates', 'Nucleotides'],
              correct: 1,
              explanation: 'Omega-3 fatty acids (EPA, DHA) are lipids specifically polyunsaturated fatty acids important for health.'
            },
            {
              question: 'Post-translational modifications affect:',
              options: ['DNA sequence', 'RNA transcription', 'Protein function', 'Cell division'],
              correct: 2,
              explanation: 'Post-translational modifications alter proteins after synthesis, changing their activity, location, or stability.'
            },
            {
              question: 'An Omega-3 Index of 8% or higher is associated with:',
              options: [
                'Increased inflammation',
                'Lower cardiovascular risk',
                'Higher blood pressure',
                'Increased oxidative stress'
              ],
              correct: 1,
              explanation: 'Research shows an Omega-3 Index ≥8% is associated with the lowest risk of cardiovascular events.'
            },
            {
              question: 'Systems biology differs from traditional biology by:',
              options: [
                'Only studying genetics',
                'Focusing on single molecules',
                'Viewing biological systems as integrated networks',
                'Avoiding technology'
              ],
              correct: 2,
              explanation: 'Systems biology takes a holistic approach, studying how components interact within biological networks.'
            },
            {
              question: 'Which statement about genetic variants is TRUE?',
              options: [
                'All variants cause disease',
                'Variants can influence traits and disease risk',
                'Variants cannot be measured',
                'Everyone has the same variants'
              ],
              correct: 1,
              explanation: 'Genetic variants are common and can influence various traits and disease susceptibilities, though many are benign.'
            },
            {
              question: 'Pathway analysis in multi-omics:',
              options: [
                'Only uses genomic data',
                'Maps data onto known biological pathways',
                'Replaces laboratory experiments',
                'Cannot be computerized'
              ],
              correct: 1,
              explanation: 'Pathway analysis maps omics data onto known biological pathways to understand which processes are affected.'
            }
          ]
        }
      ]
    }
  },

  // Track 2: Mass Spec & Molecule Discovery (partial content)
  2: {
    1: {
      sections: [
        {
          type: 'video',
          title: 'How Mass Spectrometry Works',
          duration: '20 min',
          content: [
            'Mass spectrometry (MS) is one of the most powerful analytical techniques in modern science. It works by ionizing molecules and measuring their mass-to-charge ratio, enabling identification and quantification of compounds in complex mixtures.',
            'The basic components of a mass spectrometer are: an ion source (to create charged particles), a mass analyzer (to separate ions by mass), and a detector (to measure ion abundance).',
            'Different ionization methods work better for different types of molecules, making method selection crucial for successful analysis.'
          ],
          keyPoints: [
            'Mass spectrometry measures mass-to-charge ratios of ionized molecules',
            'The three main components are ion source, mass analyzer, and detector',
            'Ionization method selection depends on the molecules being studied'
          ]
        },
        {
          type: 'reading',
          title: 'Ionization Methods Explained',
          duration: '20 min',
          content: [
            { type: 'heading', text: 'Why Ionization Matters' },
            'Before mass analysis can occur, molecules must be converted to gas-phase ions. The choice of ionization method determines which compounds can be analyzed and how gently they are treated during the process.',
            { type: 'heading', text: 'Electrospray Ionization (ESI)' },
            'ESI is the most common ionization method for biological molecules. It works by spraying a liquid sample through a charged needle, creating tiny droplets that evaporate to release intact molecular ions.',
            { type: 'definition', term: 'Electrospray Ionization (ESI)', definition: 'A soft ionization technique that creates ions from solution by applying high voltage to a liquid sample, ideal for polar and charged molecules.' },
            { type: 'list', items: [
              'Best for: Proteins, peptides, polar metabolites, drugs',
              'Advantages: Gentle, preserves intact molecules',
              'Limitations: Less effective for non-polar compounds'
            ]},
            { type: 'heading', text: 'Electron Impact (EI)' },
            'EI is a harder ionization method that bombards gas-phase molecules with electrons. This creates more fragmentation, which is useful for compound identification.',
            { type: 'list', items: [
              'Best for: Small volatile compounds, GC-MS applications',
              'Advantages: Reproducible fragmentation patterns, searchable databases',
              'Limitations: Not suitable for large or non-volatile molecules'
            ]},
            { type: 'heading', text: 'MALDI' },
            'Matrix-Assisted Laser Desorption/Ionization uses a laser to vaporize and ionize molecules embedded in a crystalline matrix.',
            { type: 'highlight', text: 'MALDI is particularly useful for imaging mass spectrometry, where molecular distributions can be mapped across tissue sections.' }
          ],
          keyPoints: [
            'Ionization converts molecules to charged particles for mass analysis',
            'ESI is gentle and ideal for biological molecules',
            'EI provides characteristic fragmentation patterns for identification'
          ]
        },
        {
          type: 'quiz',
          title: 'Principles Quiz',
          questions: [
            {
              question: 'What does mass spectrometry measure?',
              options: [
                'The color of molecules',
                'The mass-to-charge ratio of ions',
                'The temperature of samples',
                'The pH of solutions'
              ],
              correct: 1,
              explanation: 'Mass spectrometers separate and detect ions based on their mass-to-charge (m/z) ratio.'
            },
            {
              question: 'Which ionization method is best for large biological molecules?',
              options: ['Electron Impact', 'Electrospray Ionization', 'Flame ionization', 'Nuclear ionization'],
              correct: 1,
              explanation: 'ESI is a soft ionization technique that keeps large molecules intact, ideal for proteins and metabolites.'
            },
            {
              question: 'What are the three main components of a mass spectrometer?',
              options: [
                'Laser, mirror, detector',
                'Ion source, mass analyzer, detector',
                'Pump, filter, display',
                'Heater, cooler, mixer'
              ],
              correct: 1,
              explanation: 'A mass spectrometer requires an ion source, mass analyzer, and detector to function.'
            },
            {
              question: 'Why is method selection important in mass spectrometry?',
              options: [
                'It doesn\'t matter',
                'Different methods work better for different molecules',
                'Only one method exists',
                'Methods are all identical'
              ],
              correct: 1,
              explanation: 'Different ionization and analysis methods are optimized for different types of molecules.'
            },
            {
              question: 'What does ESI stand for?',
              options: [
                'Electronic Sample Injection',
                'Electrospray Ionization',
                'Energy Spectrum Integration',
                'Electron Scatter Imaging'
              ],
              correct: 1,
              explanation: 'ESI stands for Electrospray Ionization, a common soft ionization technique.'
            },
            {
              question: 'Electron Impact ionization is best suited for:',
              options: [
                'Large proteins',
                'Intact antibodies',
                'Small volatile compounds',
                'Living cells'
              ],
              correct: 2,
              explanation: 'EI works best with small, volatile compounds that can be vaporized before ionization.'
            }
          ]
        }
      ]
    }
  },

  // Track 3: Molecular Pathways for Health (partial content)
  3: {
    1: {
      sections: [
        {
          type: 'video',
          title: 'Pathway Basics',
          duration: '15 min',
          content: [
            'Metabolic pathways are series of connected chemical reactions occurring within cells. Each pathway has a specific function, such as producing energy, building cellular components, or breaking down toxins.',
            'Understanding pathways helps us see how individual molecules work together as systems. A change in one part of a pathway can affect downstream reactions and overall health.',
            'Key pathway concepts include substrates (inputs), products (outputs), enzymes (catalysts), and regulatory points where the pathway can be controlled.'
          ],
          keyPoints: [
            'Pathways are connected series of chemical reactions',
            'Changes in pathways can have cascading effects on health',
            'Regulation occurs at specific control points'
          ]
        },
        {
          type: 'reading',
          title: 'Enzymes and Regulation',
          duration: '20 min',
          content: [
            { type: 'heading', text: 'Enzymes: The Catalysts of Life' },
            'Enzymes are proteins that speed up chemical reactions without being consumed. They are essential for virtually all metabolic processes and are often the targets of drugs and nutritional interventions.',
            { type: 'definition', term: 'Enzyme', definition: 'A protein that catalyzes (speeds up) a specific chemical reaction, lowering the activation energy required.' },
            { type: 'heading', text: 'Enzyme Characteristics' },
            { type: 'list', items: [
              'Specificity: Each enzyme typically catalyzes one reaction',
              'Efficiency: Enzymes can accelerate reactions millions of times',
              'Regulation: Enzyme activity can be turned up or down',
              'Cofactors: Many enzymes require vitamins or minerals to function'
            ]},
            { type: 'heading', text: 'Pathway Regulation' },
            'Pathways are regulated at multiple levels to respond to cellular needs:',
            { type: 'list', items: [
              'Allosteric regulation: Molecules bind and change enzyme shape',
              'Feedback inhibition: End products inhibit early enzymes',
              'Gene expression: More or fewer enzyme molecules produced',
              'Covalent modification: Chemical groups added or removed'
            ]},
            { type: 'highlight', text: 'Many genetic variants affect enzyme function, explaining why people respond differently to the same diet or supplement.' }
          ],
          keyPoints: [
            'Enzymes are protein catalysts essential for metabolism',
            'Enzyme activity can be regulated in multiple ways',
            'Genetic variants can affect enzyme function'
          ]
        },
        {
          type: 'interactive',
          title: 'Pathway Mapping',
          duration: '10 min',
          description: 'Practice reading and interpreting metabolic pathway diagrams.',
          content: [
            'In pathway diagrams, arrows show the direction of reactions, and enzyme names are often written alongside.',
            'Substrates are the starting materials (at the beginning of arrows), and products are what\'s formed (at the end of arrows).',
            'Rate-limiting steps are the slowest reactions that control pathway flux — these are often key regulatory points.',
            'Practice identifying: inputs, outputs, enzymes, and regulatory points in pathway diagrams.'
          ],
          keyPoints: [
            'Pathway diagrams show connected reactions and enzymes',
            'Rate-limiting steps control overall pathway activity',
            'Understanding diagrams helps interpret metabolomics data'
          ]
        }
      ]
    }
  }
};
