export const caseStudies = [
  {
    id: 101,
    title: 'How NutriPure Achieved 99.7% Ingredient Accuracy with Metabolomics Validation',
    category: 'Food & Nutrition',
    type: 'Case Study',
    client: 'NutriPure Foods',
    industry: 'Food Manufacturing',
    certification: 'Food Authenticity',
    duration: '10 min read',
    author: 'Dalton Analytics Team',
    date: 'Dec 8, 2024',
    saves: 187,
    results: ['99.7% ingredient accuracy', '45% reduction in supplier fraud', '$2.3M saved annually'],
    featured: true,
    challenge: 'NutriPure Foods, a leading organic food manufacturer, faced increasing pressure from regulators and consumers to verify the authenticity of their ingredient claims. With a supply chain spanning 12 countries and over 200 suppliers, they struggled to detect adulteration and mislabeling that was costing them millions in recalls and brand damage.',
    solution: 'We implemented a comprehensive metabolomics-based authentication program that analyzed the molecular fingerprint of every incoming ingredient batch. Using LC-MS/MS technology, we created reference profiles for each certified ingredient and established automated screening protocols.',
    approach: [
      {
        title: 'Baseline Profiling',
        description: 'Created molecular fingerprints for 150+ authentic ingredient samples from verified sources'
      },
      {
        title: 'Supplier Screening Protocol',
        description: 'Developed rapid 15-minute screening tests for incoming batches'
      },
      {
        title: 'Database Integration',
        description: 'Built custom software to compare batch profiles against reference database in real-time'
      },
      {
        title: 'Training Program',
        description: 'Trained NutriPure\'s QA team on result interpretation and escalation procedures'
      }
    ],
    outcomes: [
      { metric: '99.7%', label: 'Ingredient Accuracy', description: 'Up from 87% before implementation' },
      { metric: '45%', label: 'Fraud Reduction', description: 'Decrease in supplier fraud incidents' },
      { metric: '$2.3M', label: 'Annual Savings', description: 'From prevented recalls and rejected batches' },
      { metric: '0', label: 'Recalls', description: 'Zero product recalls since implementation' }
    ],
    testimonial: {
      quote: 'The metabolomics validation program transformed our quality assurance. We went from reactive damage control to proactive fraud prevention. Our customers trust us more than ever.',
      author: 'Jennifer Martinez',
      title: 'VP of Quality Assurance, NutriPure Foods'
    },
    timeline: '6 months from pilot to full implementation',
    technologies: ['LC-MS/MS', 'Multivariate Statistics', 'Custom Database Software', 'Automated Reporting']
  },
  {
    id: 102,
    title: 'Validating a Novel LC-MS Platform: BioTech Dynamics Case Study',
    category: 'Science & Technology',
    type: 'Case Study',
    client: 'BioTech Dynamics',
    industry: 'Research Equipment',
    certification: 'Omics Platform Validation',
    duration: '15 min read',
    author: 'Dr. James Park',
    date: 'Dec 1, 2024',
    saves: 234,
    results: ['Platform validated against 500+ reference compounds', '98.2% reproducibility score', 'FDA 21 CFR Part 11 compliant'],
    featured: true,
    challenge: 'BioTech Dynamics developed a next-generation LC-MS platform designed for clinical metabolomics. Before launch, they needed rigorous third-party validation to demonstrate performance, reproducibility, and regulatory compliance for pharmaceutical and clinical laboratory customers.',
    solution: 'We designed and executed a comprehensive validation study following FDA guidelines and industry best practices. The multi-phase validation covered accuracy, precision, linearity, specificity, and robustness across diverse sample types.',
    approach: [
      {
        title: 'Reference Standard Testing',
        description: 'Validated performance against 500+ NIST-traceable reference compounds'
      },
      {
        title: 'Cross-Platform Comparison',
        description: 'Benchmarked against three leading competitor platforms'
      },
      {
        title: 'Reproducibility Study',
        description: 'Multi-site, multi-operator testing over 30 days'
      },
      {
        title: 'Regulatory Documentation',
        description: 'Prepared complete FDA 21 CFR Part 11 compliance package'
      }
    ],
    outcomes: [
      { metric: '500+', label: 'Compounds Validated', description: 'NIST-traceable reference standards' },
      { metric: '98.2%', label: 'Reproducibility', description: 'CV across all tested conditions' },
      { metric: '100%', label: 'FDA Compliant', description: '21 CFR Part 11 requirements met' },
      { metric: '15%', label: 'Better Sensitivity', description: 'Compared to leading competitor' }
    ],
    testimonial: {
      quote: 'The validation study gave us exactly what we needed to approach pharmaceutical customers with confidence. The thoroughness of the documentation exceeded our expectations.',
      author: 'Dr. Robert Chen',
      title: 'Chief Scientific Officer, BioTech Dynamics'
    },
    timeline: '4 months comprehensive validation',
    technologies: ['LC-MS/MS', 'Method Validation', 'Statistical Analysis', 'Regulatory Compliance']
  },
  {
    id: 103,
    title: 'GlowSkin Cosmetics: Ensuring Active Ingredient Potency Across Product Lines',
    category: 'Consumer Products',
    type: 'Case Study',
    client: 'GlowSkin Cosmetics',
    industry: 'Cosmetics',
    certification: 'Cosmetics & Supplements QA',
    duration: '8 min read',
    author: 'Dr. Maria Lopez',
    date: 'Nov 20, 2024',
    saves: 156,
    results: ['100% batch consistency achieved', 'Zero recalls in 18 months', 'Clean label certification earned'],
    featured: false,
    challenge: 'GlowSkin Cosmetics, a premium skincare brand, received customer complaints about inconsistent product performance. Testing revealed significant batch-to-batch variation in active ingredient concentrations, threatening their reputation for high-quality, effective products.',
    solution: 'We developed a targeted analytical program to monitor active ingredient stability and concentration throughout the manufacturing process. This included raw material testing, in-process controls, and finished product verification.',
    approach: [
      {
        title: 'Stability Profiling',
        description: 'Analyzed degradation pathways for all active ingredients'
      },
      {
        title: 'Manufacturing Audit',
        description: 'Identified critical control points in production process'
      },
      {
        title: 'Testing Protocol',
        description: 'Established testing checkpoints at raw material, in-process, and finished product stages'
      },
      {
        title: 'Specification Development',
        description: 'Created science-based acceptance criteria for each product'
      }
    ],
    outcomes: [
      { metric: '100%', label: 'Batch Consistency', description: 'All batches within specification' },
      { metric: '0', label: 'Recalls', description: 'Zero product recalls in 18 months' },
      { metric: 'Earned', label: 'Clean Label', description: 'Third-party certification achieved' },
      { metric: '23%', label: 'Sales Increase', description: 'Following quality improvements' }
    ],
    testimonial: {
      quote: 'Our customers noticed the difference immediately. Product reviews improved dramatically, and we finally earned the clean label certification we had been working toward for years.',
      author: 'Amanda Torres',
      title: 'Director of Product Development, GlowSkin Cosmetics'
    },
    timeline: '3 months to full implementation',
    technologies: ['HPLC', 'Stability Testing', 'Statistical Process Control', 'Certificate of Analysis']
  },
  {
    id: 104,
    title: 'Tracing High-Value Olive Oil: Mediterranean Imports Authentication',
    category: 'Food & Nutrition',
    type: 'Case Study',
    client: 'Mediterranean Imports Co.',
    industry: 'Food Import/Export',
    certification: 'Food Authenticity',
    duration: '12 min read',
    author: 'Dalton Analytics Team',
    date: 'Nov 15, 2024',
    saves: 198,
    results: ['Geographic origin verified for 100% of products', 'Adulteration detection rate: 100%', 'Premium pricing justified'],
    featured: false,
    challenge: 'Mediterranean Imports Co. specializes in premium extra virgin olive oil from specific Italian and Greek regions. They suspected some suppliers were blending oils or misrepresenting origins, but lacked the analytical capability to verify authenticity and justify their premium pricing.',
    solution: 'We implemented a multi-marker authentication program combining fatty acid profiling, minor component analysis, and isotope ratio testing to create definitive origin fingerprints for each protected designation of origin (PDO) region.',
    approach: [
      {
        title: 'Regional Fingerprinting',
        description: 'Built reference database from 50+ authenticated samples per region'
      },
      {
        title: 'Adulteration Screening',
        description: 'Developed tests for common adulterants (seed oils, refined olive oil)'
      },
      {
        title: 'Isotope Analysis',
        description: 'Used stable isotope ratios to verify geographic claims'
      },
      {
        title: 'Certification Program',
        description: 'Created branded authentication seal for verified products'
      }
    ],
    outcomes: [
      { metric: '100%', label: 'Origin Verified', description: 'All products authenticated' },
      { metric: '100%', label: 'Detection Rate', description: 'All adulteration attempts caught' },
      { metric: '35%', label: 'Price Premium', description: 'Justified by authentication program' },
      { metric: '3', label: 'Suppliers Dropped', description: 'For failing authentication' }
    ],
    testimonial: {
      quote: 'We always believed in our products, but now we can prove it. The authentication program pays for itself many times over through the premium pricing our verified oils command.',
      author: 'Marco Benedetti',
      title: 'CEO, Mediterranean Imports Co.'
    },
    timeline: '5 months including database development',
    technologies: ['GC-FID', 'Isotope Ratio MS', 'Chemometrics', 'Blockchain Traceability']
  },
  {
    id: 105,
    title: 'VitaMax Supplements: From Quality Concerns to Industry Gold Standard',
    category: 'Consumer Products',
    type: 'Case Study',
    client: 'VitaMax Supplements',
    industry: 'Dietary Supplements',
    certification: 'Cosmetics & Supplements QA',
    duration: '11 min read',
    author: 'Dr. Sarah Chen',
    date: 'Nov 8, 2024',
    saves: 267,
    results: ['Heavy metal levels reduced by 95%', 'Label claim accuracy: 99.8%', 'Consumer trust score +47%'],
    featured: true,
    challenge: 'VitaMax Supplements faced a crisis when independent testing revealed heavy metal contamination and inaccurate label claims in several product lines. Media coverage damaged their reputation, and they needed a complete quality overhaul to rebuild consumer trust.',
    solution: 'We partnered with VitaMax for a comprehensive quality transformation program, starting with a full audit of their supply chain and manufacturing processes, followed by implementation of rigorous testing protocols and supplier qualification programs.',
    approach: [
      {
        title: 'Supply Chain Audit',
        description: 'Tested all raw material suppliers for contaminants and potency'
      },
      {
        title: 'Qualified Supplier Program',
        description: 'Established strict qualification criteria and ongoing monitoring'
      },
      {
        title: 'Testing Protocol Overhaul',
        description: 'Implemented identity, potency, and contaminant testing for all products'
      },
      {
        title: 'Transparency Initiative',
        description: 'Published third-party test results on product packaging'
      }
    ],
    outcomes: [
      { metric: '95%', label: 'Heavy Metal Reduction', description: 'Compared to pre-program levels' },
      { metric: '99.8%', label: 'Label Accuracy', description: 'Potency within 2% of claims' },
      { metric: '+47%', label: 'Trust Score', description: 'Consumer trust survey improvement' },
      { metric: '12', label: 'Suppliers Replaced', description: 'Failed to meet new standards' }
    ],
    testimonial: {
      quote: 'This program saved our company. We went from being a cautionary tale to an industry leader in transparency and quality. Our sales have fully recovered and then some.',
      author: 'David Park',
      title: 'President, VitaMax Supplements'
    },
    timeline: '9 months complete transformation',
    technologies: ['ICP-MS', 'HPLC', 'Microbial Testing', 'Supply Chain Analytics']
  },
  {
    id: 106,
    title: 'University Research Core: Multi-Omics Platform Standardization',
    category: 'Science & Technology',
    type: 'Case Study',
    client: 'Stanford Metabolomics Core',
    industry: 'Academic Research',
    certification: 'Omics Platform Validation',
    duration: '14 min read',
    author: 'Dr. Alex Kim',
    date: 'Oct 25, 2024',
    saves: 312,
    results: ['Cross-platform reproducibility achieved', '3 publications citing validation', 'NIH grant compliance confirmed'],
    featured: false,
    challenge: 'Stanford\'s Metabolomics Core Facility needed to demonstrate cross-platform reproducibility and data quality to satisfy NIH grant requirements and enable multi-site collaborative studies. Inconsistent results between instruments were limiting the impact of research findings.',
    solution: 'We developed a comprehensive standardization program including reference material protocols, inter-instrument calibration procedures, and quality metrics that enabled reliable data comparison across platforms and time points.',
    approach: [
      {
        title: 'Reference Material Program',
        description: 'Established pooled QC samples and certified reference materials'
      },
      {
        title: 'Inter-Instrument Calibration',
        description: 'Developed calibration transfer protocols for 4 LC-MS platforms'
      },
      {
        title: 'Quality Metrics Dashboard',
        description: 'Built real-time monitoring system for instrument performance'
      },
      {
        title: 'SOP Development',
        description: 'Created standardized protocols for sample prep and analysis'
      }
    ],
    outcomes: [
      { metric: '<15%', label: 'CV Across Platforms', description: 'For 200+ target metabolites' },
      { metric: '3', label: 'Publications', description: 'Citing validation methodology' },
      { metric: '100%', label: 'NIH Compliant', description: 'Data sharing requirements met' },
      { metric: '5', label: 'Collaborating Sites', description: 'Using standardized protocols' }
    ],
    testimonial: {
      quote: 'The standardization program was transformative for our core facility. We can now confidently combine data from different instruments and time points, which has opened up entirely new research possibilities.',
      author: 'Dr. Michelle Wong',
      title: 'Director, Stanford Metabolomics Core'
    },
    timeline: '8 months including validation studies',
    technologies: ['LC-MS/MS', 'Quality Control', 'Data Normalization', 'Statistical Validation']
  },
];
