export const glossaryData = {
  // Molecules & Compounds
  'NAD+': {
    term: 'NAD+',
    fullName: 'Nicotinamide Adenine Dinucleotide',
    category: 'Molecules & Compounds',
    definition: 'A coenzyme found in all living cells that plays a crucial role in cellular energy production and metabolism. NAD+ is essential for converting nutrients into ATP energy and serves as a cofactor for enzymes involved in DNA repair, gene expression, and cell signaling.',
    keyPoints: [
      'Declines with age, contributing to metabolic dysfunction',
      'Can be supported through precursors like NMN and NR',
      'Critical for mitochondrial function and cellular repair'
    ],
    relatedTerms: ['ATP', 'Mitochondria', 'NMN', 'Sirtuins'],
    icon: '⚡'
  },
  'ATP': {
    term: 'ATP',
    fullName: 'Adenosine Triphosphate',
    category: 'Molecules & Compounds',
    definition: 'The primary energy currency of cells. ATP stores and transfers chemical energy within cells, powering most cellular processes including muscle contraction, nerve impulse propagation, and protein synthesis.',
    keyPoints: [
      'Produced mainly in mitochondria through cellular respiration',
      'The body produces and uses about 40kg of ATP daily',
      'Low ATP levels are associated with fatigue and metabolic disorders'
    ],
    relatedTerms: ['NAD+', 'Mitochondria', 'Cellular Respiration'],
    icon: '🔋'
  },
  'CoQ10': {
    term: 'CoQ10',
    fullName: 'Coenzyme Q10 (Ubiquinone)',
    category: 'Molecules & Compounds',
    definition: 'A naturally occurring antioxidant that plays a vital role in the electron transport chain, helping produce ATP in mitochondria. Also protects cells from oxidative damage.',
    keyPoints: [
      'Levels decrease with age and statin medication use',
      'Found in organ meats, fatty fish, and whole grains',
      'Supplementation may support heart health and energy levels'
    ],
    relatedTerms: ['ATP', 'Mitochondria', 'Antioxidant', 'Electron Transport Chain'],
    foods: ['Organ meats', 'Beef', 'Sardines', 'Mackerel', 'Spinach', 'Broccoli'],
    icon: '❤️'
  },
  'Omega-3': {
    term: 'Omega-3',
    fullName: 'Omega-3 Fatty Acids',
    category: 'Molecules & Compounds',
    definition: 'Essential polyunsaturated fatty acids that the body cannot produce on its own. The three main types are ALA (from plants), EPA, and DHA (from marine sources). Critical for brain function, heart health, and reducing inflammation.',
    keyPoints: [
      'EPA and DHA are the most bioavailable forms',
      'Omega-3 Index measures levels in red blood cell membranes',
      'Target ratio of omega-6 to omega-3 is 4:1 or lower'
    ],
    relatedTerms: ['EPA', 'DHA', 'ALA', 'Omega-3 Index', 'Inflammation'],
    foods: ['Fatty fish (salmon, mackerel, sardines)', 'Walnuts', 'Flaxseeds', 'Chia seeds'],
    icon: '🐟'
  },
  'EPA': {
    term: 'EPA',
    fullName: 'Eicosapentaenoic Acid',
    category: 'Molecules & Compounds',
    definition: 'A 20-carbon omega-3 fatty acid found primarily in fatty fish and fish oil. EPA is particularly important for reducing inflammation and supporting cardiovascular health.',
    keyPoints: [
      'Precursor to anti-inflammatory compounds called resolvins',
      'Works synergistically with DHA',
      'May help with mood regulation and depression'
    ],
    relatedTerms: ['Omega-3', 'DHA', 'Inflammation', 'Resolvins'],
    foods: ['Salmon', 'Herring', 'Sardines', 'Anchovies', 'Fish oil supplements'],
    icon: '🐟'
  },
  'DHA': {
    term: 'DHA',
    fullName: 'Docosahexaenoic Acid',
    category: 'Molecules & Compounds',
    definition: 'A 22-carbon omega-3 fatty acid that is a primary structural component of the brain, cerebral cortex, skin, and retina. Essential for brain development and cognitive function throughout life.',
    keyPoints: [
      'Makes up about 40% of polyunsaturated fats in the brain',
      'Critical during pregnancy and early childhood development',
      'Supports memory, learning, and visual function'
    ],
    relatedTerms: ['Omega-3', 'EPA', 'Brain Health', 'Cognitive Function'],
    foods: ['Fatty fish', 'Fish oil', 'Algae oil (vegan source)', 'Fortified eggs'],
    icon: '🧠'
  },
  'ALA': {
    term: 'ALA',
    fullName: 'Alpha-Linolenic Acid',
    category: 'Molecules & Compounds',
    definition: 'A plant-based omega-3 fatty acid found in seeds, nuts, and vegetable oils. The body can convert ALA to EPA and DHA, but the conversion rate is very low (typically 5-10%).',
    keyPoints: [
      'The only essential omega-3 (must come from diet)',
      'Conversion to EPA/DHA is inefficient',
      'Good for those who don\'t eat fish but shouldn\'t be sole omega-3 source'
    ],
    relatedTerms: ['Omega-3', 'EPA', 'DHA'],
    foods: ['Flaxseeds', 'Chia seeds', 'Walnuts', 'Hemp seeds', 'Canola oil'],
    icon: '🌱'
  },
  'B Vitamins': {
    term: 'B Vitamins',
    fullName: 'B-Complex Vitamins',
    category: 'Molecules & Compounds',
    definition: 'A group of eight water-soluble vitamins (B1, B2, B3, B5, B6, B7, B9, B12) that play essential roles in cell metabolism, energy production, and nervous system function.',
    keyPoints: [
      'Work together synergistically in metabolic pathways',
      'Deficiencies can cause fatigue, cognitive issues, and anemia',
      'B12 absorption decreases with age and certain medications'
    ],
    relatedTerms: ['Homocysteine', 'Methylation', 'Energy Metabolism'],
    foods: ['Whole grains', 'Meat', 'Eggs', 'Legumes', 'Leafy greens', 'Nutritional yeast'],
    icon: '💊'
  },
  'Vitamin D': {
    term: 'Vitamin D',
    fullName: 'Vitamin D (Calciferol)',
    category: 'Molecules & Compounds',
    definition: 'A fat-soluble vitamin that functions as a hormone. Essential for calcium absorption, bone health, immune function, and mood regulation. Produced in skin upon sun exposure.',
    keyPoints: [
      'Optimal blood levels are 40-60 ng/mL',
      'Deficiency is common, especially in northern latitudes',
      'Vitamin D3 (cholecalciferol) is the preferred supplement form'
    ],
    relatedTerms: ['Calcium', 'Bone Health', 'Immune Function'],
    foods: ['Fatty fish', 'Egg yolks', 'Fortified milk', 'Mushrooms (UV-exposed)'],
    icon: '☀️'
  },
  'Resolvins': {
    term: 'Resolvins',
    fullName: 'Resolvins',
    category: 'Molecules & Compounds',
    definition: 'Specialized pro-resolving mediators (SPMs) derived from EPA and DHA that actively resolve inflammation. Unlike anti-inflammatory drugs that suppress inflammation, resolvins help return tissues to homeostasis.',
    keyPoints: [
      'Actively promote the resolution phase of inflammation',
      'Help clear cellular debris and pathogens',
      'Production requires adequate omega-3 intake'
    ],
    relatedTerms: ['EPA', 'DHA', 'Inflammation', 'Omega-3'],
    icon: '🔄'
  },
  'NMN': {
    term: 'NMN',
    fullName: 'Nicotinamide Mononucleotide',
    category: 'Molecules & Compounds',
    definition: 'A precursor to NAD+ that the body uses to synthesize this critical coenzyme. NMN supplementation is being studied for its potential to boost NAD+ levels and support healthy aging.',
    keyPoints: [
      'Directly converted to NAD+ in cells',
      'More stable than NAD+ itself as a supplement',
      'Research ongoing for anti-aging and metabolic benefits'
    ],
    relatedTerms: ['NAD+', 'Sirtuins', 'Longevity', 'Cellular Respiration'],
    icon: '💊'
  },
  'SCFA': {
    term: 'SCFA',
    fullName: 'Short-Chain Fatty Acids',
    category: 'Molecules & Compounds',
    definition: 'Metabolites produced when gut bacteria ferment dietary fiber. The main SCFAs—acetate, propionate, and butyrate—support gut health, immunity, and metabolic function.',
    keyPoints: [
      'Butyrate is the primary fuel source for colon cells',
      'Influence appetite hormones and blood sugar regulation',
      'Low SCFA production is linked to inflammatory conditions'
    ],
    relatedTerms: ['Microbiome', 'Prebiotics', 'Gut-Brain Axis', 'Inflammation'],
    icon: '🔬'
  },
  'Polyphenols': {
    term: 'Polyphenols',
    fullName: 'Polyphenols',
    category: 'Molecules & Compounds',
    definition: 'A large family of plant compounds with antioxidant and anti-inflammatory properties. Includes flavonoids, phenolic acids, and stilbenes (like resveratrol).',
    keyPoints: [
      'Over 8,000 identified polyphenols in nature',
      'Support cardiovascular health and brain function',
      'Also act as prebiotics for gut bacteria'
    ],
    relatedTerms: ['Antioxidant', 'Inflammation', 'Microbiome'],
    foods: ['Berries', 'Dark chocolate', 'Green tea', 'Red wine', 'Olive oil', 'Coffee'],
    icon: '🍇'
  },
  'Ketones': {
    term: 'Ketones',
    fullName: 'Ketone Bodies',
    category: 'Molecules & Compounds',
    definition: 'Alternative fuel molecules produced by the liver from fatty acids during fasting, carbohydrate restriction, or intense exercise. The brain can use ketones for up to 70% of its energy needs.',
    keyPoints: [
      'Three types: BHB, acetoacetate, and acetone',
      'Produced in ketosis (low-carb/fasting states)',
      'May have neuroprotective and anti-inflammatory effects'
    ],
    relatedTerms: ['Mitochondria', 'ATP', 'Metabolic Health'],
    icon: '⚡'
  },
  'Magnesium': {
    term: 'Magnesium',
    fullName: 'Magnesium',
    category: 'Molecules & Compounds',
    definition: 'An essential mineral involved in over 300 enzymatic reactions. Critical for energy production, muscle function, nervous system regulation, and bone health.',
    keyPoints: [
      'Up to 50% of people may be deficient',
      'Different forms have different benefits (glycinate for sleep, citrate for digestion)',
      'Depleted by stress, alcohol, and certain medications'
    ],
    relatedTerms: ['ATP', 'B Vitamins', 'Mitochondria'],
    foods: ['Dark chocolate', 'Avocados', 'Nuts', 'Leafy greens', 'Seeds', 'Legumes'],
    icon: '💎'
  },

  // Biomarkers
  'Omega-3 Index': {
    term: 'Omega-3 Index',
    fullName: 'Omega-3 Index',
    category: 'Biomarkers',
    definition: 'A blood test that measures the percentage of EPA and DHA in red blood cell membranes. Reflects your omega-3 status over the past 2-3 months and is a validated marker of cardiovascular risk.',
    keyPoints: [
      'Optimal range is 8-12%',
      'Below 4% indicates high cardiovascular risk',
      'More reliable than measuring plasma omega-3 levels'
    ],
    relatedTerms: ['EPA', 'DHA', 'Omega-3', 'Cardiovascular Health'],
    icon: '📊'
  },
  'CRP': {
    term: 'CRP',
    fullName: 'C-Reactive Protein',
    category: 'Biomarkers',
    definition: 'A protein produced by the liver in response to inflammation. High-sensitivity CRP (hs-CRP) is used as a marker of chronic low-grade inflammation and cardiovascular disease risk.',
    keyPoints: [
      'Optimal hs-CRP is below 1.0 mg/L',
      'Levels above 3.0 mg/L indicate higher cardiovascular risk',
      'Can be elevated by infections, injuries, and chronic conditions'
    ],
    relatedTerms: ['Inflammation', 'Cardiovascular Health', 'IL-6'],
    icon: '🔥'
  },
  'HbA1c': {
    term: 'HbA1c',
    fullName: 'Hemoglobin A1c (Glycated Hemoglobin)',
    category: 'Biomarkers',
    definition: 'A blood test that reflects average blood sugar levels over the past 2-3 months. Measures the percentage of hemoglobin proteins that are coated with sugar (glycated).',
    keyPoints: [
      'Normal: below 5.7%, Prediabetes: 5.7-6.4%, Diabetes: 6.5% or higher',
      'More stable than fasting glucose for assessing long-term control',
      'Goal for diabetics is typically below 7%'
    ],
    relatedTerms: ['Blood Sugar', 'Insulin Resistance', 'Metabolic Health'],
    icon: '🩸'
  },
  'Homocysteine': {
    term: 'Homocysteine',
    fullName: 'Homocysteine',
    category: 'Biomarkers',
    definition: 'An amino acid in the blood that, at elevated levels, is associated with increased cardiovascular disease risk and cognitive decline. Levels are influenced by B vitamins (B6, B12, folate) and genetics.',
    keyPoints: [
      'Optimal levels are below 10 µmol/L',
      'Elevated levels may indicate B vitamin deficiency',
      'MTHFR gene variants can affect homocysteine metabolism'
    ],
    relatedTerms: ['B Vitamins', 'Methylation', 'MTHFR', 'Cardiovascular Health'],
    icon: '🧬'
  },
  'Ferritin': {
    term: 'Ferritin',
    fullName: 'Ferritin',
    category: 'Biomarkers',
    definition: 'A blood protein that stores iron. Ferritin levels indicate your body\'s iron stores and can help diagnose iron deficiency or iron overload conditions.',
    keyPoints: [
      'Optimal range varies by sex: men 30-300 ng/mL, women 20-200 ng/mL',
      'Low levels indicate iron deficiency, even before anemia develops',
      'Very high levels may indicate inflammation or hemochromatosis'
    ],
    relatedTerms: ['Iron', 'Anemia', 'Hemochromatosis'],
    icon: '🔴'
  },
  'Cortisol': {
    term: 'Cortisol',
    fullName: 'Cortisol',
    category: 'Biomarkers',
    definition: 'The body\'s primary stress hormone, produced by the adrenal glands. Follows a natural daily rhythm (high in morning, low at night) and regulates metabolism, immune response, and blood pressure.',
    keyPoints: [
      'Morning cortisol should be highest, declining throughout the day',
      'Chronic elevation is linked to weight gain, poor sleep, and immune suppression',
      'Testing timing matters: morning vs. evening levels tell different stories'
    ],
    relatedTerms: ['HPA Axis', 'Stress', 'Adrenal Function', 'Circadian Rhythm'],
    icon: '⏰'
  },

  // Biological Processes
  'Inflammation': {
    term: 'Inflammation',
    fullName: 'Inflammation',
    category: 'Biological Processes',
    definition: 'The body\'s protective immune response to harmful stimuli like pathogens, damaged cells, or irritants. Acute inflammation is beneficial and short-lived; chronic inflammation can contribute to many diseases.',
    keyPoints: [
      'Chronic low-grade inflammation underlies many modern diseases',
      'Key markers include CRP, IL-6, and TNF-alpha',
      'Diet, sleep, exercise, and stress management all affect inflammation'
    ],
    relatedTerms: ['CRP', 'Omega-3', 'Cytokines', 'Immune System'],
    icon: '🔥'
  },
  'Methylation': {
    term: 'Methylation',
    fullName: 'Methylation',
    category: 'Biological Processes',
    definition: 'A fundamental biochemical process where a methyl group (CH3) is added to DNA, proteins, or other molecules. Critical for gene expression, detoxification, neurotransmitter production, and cellular repair.',
    keyPoints: [
      'Requires B vitamins, especially folate, B12, and B6',
      'MTHFR gene variants can impair methylation',
      'Affects over 200 bodily functions'
    ],
    relatedTerms: ['B Vitamins', 'MTHFR', 'Homocysteine', 'Epigenetics'],
    icon: '🧬'
  },
  'Cellular Respiration': {
    term: 'Cellular Respiration',
    fullName: 'Cellular Respiration',
    category: 'Biological Processes',
    definition: 'The process by which cells break down glucose and other nutrients to produce ATP energy. Occurs primarily in mitochondria and requires oxygen for maximum efficiency.',
    keyPoints: [
      'Produces 36-38 ATP molecules per glucose molecule',
      'Mitochondrial dysfunction impairs energy production',
      'Supported by CoQ10, NAD+, and B vitamins'
    ],
    relatedTerms: ['ATP', 'Mitochondria', 'Glucose', 'Electron Transport Chain'],
    icon: '⚙️'
  },
  'Oxidative Stress': {
    term: 'Oxidative Stress',
    fullName: 'Oxidative Stress',
    category: 'Biological Processes',
    definition: 'An imbalance between free radicals (reactive oxygen species) and antioxidants in the body. Excess free radicals can damage cells, proteins, and DNA, contributing to aging and disease.',
    keyPoints: [
      'Caused by pollution, poor diet, stress, and normal metabolism',
      'Antioxidants help neutralize free radicals',
      'Measured indirectly through markers like 8-OHdG and F2-isoprostanes'
    ],
    relatedTerms: ['Antioxidant', 'Free Radicals', 'Mitochondria', 'Aging'],
    icon: '⚠️'
  },
  'Insulin Resistance': {
    term: 'Insulin Resistance',
    fullName: 'Insulin Resistance',
    category: 'Biological Processes',
    definition: 'A condition where cells in muscles, fat, and liver don\'t respond well to insulin and can\'t easily take up glucose from blood. The pancreas makes more insulin to compensate, leading to high insulin levels.',
    keyPoints: [
      'Precedes type 2 diabetes by years or decades',
      'Measured by HOMA-IR, fasting insulin, or glucose tolerance test',
      'Reversible through diet, exercise, and weight loss'
    ],
    relatedTerms: ['HbA1c', 'Metabolic Syndrome', 'Blood Sugar', 'HOMA-IR'],
    icon: '📈'
  },

  // Cellular Components
  'Mitochondria': {
    term: 'Mitochondria',
    fullName: 'Mitochondria',
    category: 'Cellular Components',
    definition: 'Often called the "powerhouses of the cell," mitochondria are organelles that generate most of the cell\'s ATP through oxidative phosphorylation. Also involved in cell signaling, differentiation, and death.',
    keyPoints: [
      'Each cell contains hundreds to thousands of mitochondria',
      'Mitochondrial dysfunction is linked to aging and chronic disease',
      'Have their own DNA (mtDNA) inherited only from mother'
    ],
    relatedTerms: ['ATP', 'NAD+', 'CoQ10', 'Cellular Respiration'],
    icon: '🔋'
  },
  'Electron Transport Chain': {
    term: 'Electron Transport Chain',
    fullName: 'Electron Transport Chain (ETC)',
    category: 'Cellular Components',
    definition: 'A series of protein complexes in the inner mitochondrial membrane that transfers electrons from nutrients to oxygen, creating a proton gradient used to produce ATP.',
    keyPoints: [
      'CoQ10 is a critical component of the ETC',
      'Produces most of the ATP in aerobic respiration',
      'Dysfunction leads to reduced energy and increased oxidative stress'
    ],
    relatedTerms: ['ATP', 'CoQ10', 'Mitochondria', 'Cellular Respiration'],
    icon: '⚡'
  },

  // Fields of Study
  'Metabolomics': {
    term: 'Metabolomics',
    fullName: 'Metabolomics',
    category: 'Fields of Study',
    definition: 'The comprehensive study of small molecule metabolites within cells, tissues, or organisms. Provides a snapshot of physiological status and can reveal biomarkers for disease and health optimization.',
    keyPoints: [
      'Analyzes thousands of metabolites simultaneously',
      'More dynamic than genomics—reflects real-time biology',
      'Used in personalized medicine and nutrition'
    ],
    relatedTerms: ['Multi-Omics', 'Biomarker', 'Mass Spectrometry'],
    icon: '🔬'
  },
  'Multi-Omics': {
    term: 'Multi-Omics',
    fullName: 'Multi-Omics',
    category: 'Fields of Study',
    definition: 'An integrative approach combining multiple "omics" disciplines (genomics, proteomics, metabolomics, etc.) to gain a comprehensive understanding of biological systems.',
    keyPoints: [
      'Provides more complete picture than any single omics approach',
      'Enables systems biology and personalized medicine',
      'Requires advanced data integration and analysis'
    ],
    relatedTerms: ['Metabolomics', 'Genomics', 'Proteomics', 'Lipidomics'],
    icon: '🧪'
  },
  'Proteomics': {
    term: 'Proteomics',
    fullName: 'Proteomics',
    category: 'Fields of Study',
    definition: 'The large-scale study of proteins, including their structures, functions, and interactions. Proteins are the functional molecules that carry out most cellular processes.',
    keyPoints: [
      'Proteins are the functional output of genes',
      'More complex than genomics due to post-translational modifications',
      'Useful for biomarker discovery and drug development'
    ],
    relatedTerms: ['Multi-Omics', 'Genomics', 'Mass Spectrometry'],
    icon: '🧬'
  },
  'Lipidomics': {
    term: 'Lipidomics',
    fullName: 'Lipidomics',
    category: 'Fields of Study',
    definition: 'The comprehensive study of cellular lipids (fats) including their pathways and networks. Lipids play crucial roles in cell membrane structure, energy storage, and cell signaling.',
    keyPoints: [
      'Identifies thousands of lipid species in biological samples',
      'Important for understanding cardiovascular and metabolic diseases',
      'Omega-3 Index is a simple lipidomic measurement'
    ],
    relatedTerms: ['Multi-Omics', 'Omega-3', 'Ceramides', 'Metabolomics'],
    icon: '🫀'
  },
  'Mass Spectrometry': {
    term: 'Mass Spectrometry',
    fullName: 'Mass Spectrometry',
    category: 'Fields of Study',
    definition: 'An analytical technique that measures the mass-to-charge ratio of ions. Used to identify and quantify molecules in biological samples with high precision and sensitivity.',
    keyPoints: [
      'Gold standard for metabolomics and proteomics analysis',
      'Can detect thousands of compounds in a single sample',
      'Commonly paired with chromatography for separation'
    ],
    relatedTerms: ['Metabolomics', 'Proteomics', 'Biomarker'],
    icon: '📡'
  },

  // Health Concepts
  'Gut-Brain Axis': {
    term: 'Gut-Brain Axis',
    fullName: 'Gut-Brain Axis',
    category: 'Health Concepts',
    definition: 'The bidirectional communication network between the gastrointestinal tract and the central nervous system. Involves neural, hormonal, and immune pathways, with the gut microbiome playing a key role.',
    keyPoints: [
      'The vagus nerve is a primary communication pathway',
      '90% of serotonin is produced in the gut',
      'Gut health affects mood, cognition, and stress response'
    ],
    relatedTerms: ['Microbiome', 'Vagus Nerve', 'Serotonin', 'HPA Axis'],
    icon: '🧠'
  },
  'Microbiome': {
    term: 'Microbiome',
    fullName: 'Gut Microbiome',
    category: 'Health Concepts',
    definition: 'The community of trillions of microorganisms (bacteria, viruses, fungi) living in the digestive tract. These microbes influence digestion, immunity, metabolism, and even mental health.',
    keyPoints: [
      'Diversity is a key marker of microbiome health',
      'Influenced by diet, antibiotics, stress, and environment',
      'Produces important metabolites like short-chain fatty acids'
    ],
    relatedTerms: ['Gut-Brain Axis', 'Probiotics', 'Prebiotics', 'SCFA'],
    foods: ['Fermented foods', 'Fiber-rich vegetables', 'Polyphenol-rich foods'],
    icon: '🦠'
  },
  'Circadian Rhythm': {
    term: 'Circadian Rhythm',
    fullName: 'Circadian Rhythm',
    category: 'Health Concepts',
    definition: 'The body\'s internal 24-hour clock that regulates sleep-wake cycles, hormone release, eating habits, and other important bodily functions. Controlled by the suprachiasmatic nucleus in the brain.',
    keyPoints: [
      'Light exposure is the primary regulator',
      'Disruption linked to metabolic disorders, poor sleep, and mood issues',
      'Affects timing of medication effectiveness and exercise benefits'
    ],
    relatedTerms: ['Cortisol', 'Melatonin', 'Sleep', 'Chronobiology'],
    icon: '🌙'
  },
  'Metabolic Health': {
    term: 'Metabolic Health',
    fullName: 'Metabolic Health',
    category: 'Health Concepts',
    definition: 'A state where the body efficiently processes and uses energy from food. Characterized by optimal blood sugar, blood pressure, cholesterol, waist circumference, and triglycerides without medication.',
    keyPoints: [
      'Only about 12% of American adults are metabolically healthy',
      'Five criteria: blood sugar, triglycerides, HDL, blood pressure, waist circumference',
      'Foundational for preventing chronic disease'
    ],
    relatedTerms: ['Insulin Resistance', 'HbA1c', 'Metabolic Syndrome'],
    icon: '💪'
  },
  'Antioxidant': {
    term: 'Antioxidant',
    fullName: 'Antioxidant',
    category: 'Health Concepts',
    definition: 'Molecules that neutralize free radicals and prevent oxidative damage to cells. Include vitamins (C, E), minerals (selenium, zinc), and phytonutrients (polyphenols, carotenoids).',
    keyPoints: [
      'Work best as part of a varied, whole-food diet',
      'High-dose supplements may not provide same benefits as food sources',
      'The body also produces its own antioxidants (glutathione, SOD)'
    ],
    relatedTerms: ['Oxidative Stress', 'Free Radicals', 'Polyphenols'],
    foods: ['Berries', 'Dark chocolate', 'Green tea', 'Colorful vegetables', 'Nuts'],
    icon: '🛡️'
  },
  'Probiotics': {
    term: 'Probiotics',
    fullName: 'Probiotics',
    category: 'Health Concepts',
    definition: 'Live beneficial bacteria and yeasts that support gut health when consumed in adequate amounts. Different strains provide different benefits, from digestive support to immune modulation.',
    keyPoints: [
      'Strain-specific benefits (not all probiotics are equal)',
      'CFU (colony forming units) indicates potency',
      'Work best with prebiotic fiber as fuel'
    ],
    relatedTerms: ['Microbiome', 'Prebiotics', 'Gut-Brain Axis'],
    foods: ['Yogurt', 'Kefir', 'Sauerkraut', 'Kimchi', 'Kombucha', 'Miso'],
    icon: '🦠'
  },
  'Prebiotics': {
    term: 'Prebiotics',
    fullName: 'Prebiotics',
    category: 'Health Concepts',
    definition: 'Non-digestible fibers and compounds that feed beneficial gut bacteria. Unlike probiotics (live bacteria), prebiotics are the "food" that helps good bacteria thrive.',
    keyPoints: [
      'Include inulin, FOS, and resistant starch',
      'Support growth of beneficial Bifidobacteria and Lactobacilli',
      'May improve mineral absorption and satiety'
    ],
    relatedTerms: ['Microbiome', 'Probiotics', 'SCFA'],
    foods: ['Garlic', 'Onions', 'Leeks', 'Asparagus', 'Bananas', 'Oats', 'Jerusalem artichoke'],
    icon: '🌾'
  },
  'Biomarker': {
    term: 'Biomarker',
    fullName: 'Biomarker',
    category: 'Health Concepts',
    definition: 'A measurable indicator of a biological state or condition. Biomarkers can be molecules in blood, genetic variants, imaging findings, or physiological measurements used to assess health status.',
    keyPoints: [
      'Used for diagnosis, prognosis, and treatment monitoring',
      'Can be predictive (risk assessment) or diagnostic',
      'Ideal biomarkers are specific, sensitive, and actionable'
    ],
    relatedTerms: ['CRP', 'HbA1c', 'Omega-3 Index', 'Metabolomics'],
    icon: '📊'
  },

  // Genetics
  'MTHFR': {
    term: 'MTHFR',
    fullName: 'Methylenetetrahydrofolate Reductase',
    category: 'Genetics',
    definition: 'A gene that provides instructions for making an enzyme crucial for processing folate and regulating homocysteine levels. Common variants (C677T, A1298C) can reduce enzyme efficiency.',
    keyPoints: [
      'About 40% of people have at least one variant',
      'May require methylated forms of B vitamins (methylfolate, methylcobalamin)',
      'Associated with elevated homocysteine if B vitamins are inadequate'
    ],
    relatedTerms: ['Methylation', 'Homocysteine', 'B Vitamins', 'Folate'],
    icon: '🧬'
  },
  'Sirtuins': {
    term: 'Sirtuins',
    fullName: 'Sirtuins (SIRT1-7)',
    category: 'Genetics',
    definition: 'A family of seven proteins that regulate cellular health by controlling gene expression, DNA repair, metabolism, and aging. Often called "longevity genes" due to their role in lifespan extension.',
    keyPoints: [
      'Activated by NAD+, caloric restriction, and certain compounds',
      'SIRT1 and SIRT3 are most studied for longevity effects',
      'Resveratrol was initially thought to activate sirtuins directly'
    ],
    relatedTerms: ['NAD+', 'Longevity', 'Caloric Restriction', 'Epigenetics'],
    icon: '⏳'
  },
  'Epigenetics': {
    term: 'Epigenetics',
    fullName: 'Epigenetics',
    category: 'Genetics',
    definition: 'The study of changes in gene expression that don\'t involve alterations to the DNA sequence. These changes can be influenced by environment, lifestyle, and can sometimes be passed to offspring.',
    keyPoints: [
      'Diet, stress, and toxins can modify epigenetic marks',
      'Methylation and histone modification are key mechanisms',
      'Explains how identical twins can develop different health outcomes'
    ],
    relatedTerms: ['Methylation', 'DNA', 'Gene Expression', 'Sirtuins'],
    icon: '🔀'
  }
};

export const glossaryCategories = [
  'All',
  'Molecules & Compounds',
  'Biomarkers',
  'Biological Processes',
  'Cellular Components',
  'Fields of Study',
  'Health Concepts',
  'Genetics'
];
