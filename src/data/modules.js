export const tracks = [
  { id: 1, title: 'Multi-Omics Foundations', modules: 6, hours: 8, level: 'Beginner', category: 'science', description: 'Master the fundamentals of genomics, transcriptomics, proteomics, and metabolomics.', skills: ['Omics Basics', 'Data Interpretation', 'Systems Biology'] },
  { id: 2, title: 'Mass Spec & Molecule Discovery', modules: 5, hours: 6, level: 'Intermediate', category: 'science', description: 'Learn how mass spectrometry reveals molecular secrets and enables discovery.', skills: ['LC-MS', 'GC-MS', 'Spectra Analysis'] },
  { id: 3, title: 'Molecular Pathways for Health', modules: 8, hours: 10, level: 'Intermediate', category: 'health', description: 'Understand the molecular mechanisms behind inflammation, aging, and disease.', skills: ['Pathway Analysis', 'Health Biomarkers', 'Disease Mechanisms'] },
  { id: 4, title: 'Biomarker Interpretation', modules: 4, hours: 5, level: 'Advanced', category: 'health', description: 'Learn to read and interpret biomarker panels for personalized health insights.', skills: ['Panel Analysis', 'Clinical Interpretation', 'Personalized Nutrition'] },
  { id: 5, title: 'Metabolic Biochemistry', modules: 7, hours: 9, level: 'Intermediate', category: 'nutrition', description: 'Deep dive into metabolic pathways and nutrient-gene interactions.', skills: ['Metabolism', 'Nutrient Signaling', 'Biochemistry'] },
  { id: 6, title: 'Neurobiology & Signaling', modules: 5, hours: 7, level: 'Advanced', category: 'brain', description: 'Explore cognitive biomarkers and the gut-brain molecular connection.', skills: ['Neuroscience', 'Molecular Signaling', 'Stress Biology'] },
];

export const moduleDetails = {
  1: {
    id: 1,
    title: 'Multi-Omics Foundations',
    description: 'Master the fundamentals of genomics, transcriptomics, proteomics, and metabolomics.',
    lessons: [
      {
        id: 1,
        title: 'Introduction to Omics Sciences',
        duration: '45 min',
        content: [
          { type: 'video', title: 'What are Omics Sciences?', duration: '15 min' },
          { type: 'reading', title: 'The History of Molecular Biology', duration: '20 min' },
          { type: 'quiz', title: 'Knowledge Check', questions: 5 }
        ]
      },
      {
        id: 2,
        title: 'Genomics Fundamentals',
        duration: '60 min',
        content: [
          { type: 'video', title: 'DNA Sequencing Technologies', duration: '20 min' },
          { type: 'reading', title: 'Understanding Gene Expression', duration: '25 min' },
          { type: 'interactive', title: 'Gene Mapping Exercise', duration: '15 min' }
        ]
      },
      {
        id: 3,
        title: 'Proteomics Essentials',
        duration: '55 min',
        content: [
          { type: 'video', title: 'Protein Structure and Function', duration: '18 min' },
          { type: 'reading', title: 'Mass Spectrometry in Proteomics', duration: '22 min' },
          { type: 'quiz', title: 'Proteomics Quiz', questions: 8 }
        ]
      },
      {
        id: 4,
        title: 'Introduction to Metabolomics',
        duration: '50 min',
        content: [
          { type: 'video', title: 'What is Metabolomics?', duration: '15 min' },
          { type: 'reading', title: 'Metabolite Classes and Functions', duration: '20 min' },
          { type: 'interactive', title: 'Metabolite Identification', duration: '15 min' }
        ]
      },
      {
        id: 5,
        title: 'Integrating Multi-Omics Data',
        duration: '70 min',
        content: [
          { type: 'video', title: 'Systems Biology Approach', duration: '25 min' },
          { type: 'reading', title: 'Data Integration Strategies', duration: '30 min' },
          { type: 'case-study', title: 'Real-World Multi-Omics Analysis', duration: '15 min' }
        ]
      },
      {
        id: 6,
        title: 'Final Assessment',
        duration: '40 min',
        content: [
          { type: 'quiz', title: 'Comprehensive Exam', questions: 25 },
          { type: 'certificate', title: 'Course Certificate' }
        ]
      }
    ]
  }
};
