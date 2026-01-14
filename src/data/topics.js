// Evidence strength levels
export const evidenceStrength = {
  strong: { label: 'Strong Evidence', color: 'bg-green-100 text-green-700', icon: '🟢' },
  mixed: { label: 'Mixed Evidence', color: 'bg-amber-100 text-amber-700', icon: '🟡' },
  limited: { label: 'Limited Evidence', color: 'bg-red-100 text-red-700', icon: '🔴' }
};

export const topics = {
  'eat-better': [
    {
      id: 'protein-timing',
      title: 'Does protein timing matter for muscle building?',
      slug: 'protein-timing-muscle',
      evidenceStrength: 'mixed',
      summary: 'The anabolic window myth has been largely debunked. Total daily protein intake matters more than timing, though distributing protein across meals may have modest benefits for muscle protein synthesis.',
      population: 'Adults engaged in resistance training; may be more relevant for older adults',
      research: [
        { finding: 'Total daily protein intake is the primary driver of muscle protein synthesis', type: 'Meta-analysis', year: 2022 },
        { finding: 'The anabolic window is likely 4-6 hours, not 30-60 minutes as previously thought', type: 'Review', year: 2020 },
        { finding: 'Distributing protein evenly across 4 meals may have slight advantages', type: 'RCT', year: 2018 }
      ],
      unknowns: [
        'Whether timing matters more for older adults with anabolic resistance',
        'Optimal protein distribution patterns for different goals',
        'How protein source affects timing importance',
        'Whether fasted training changes timing requirements'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Focus first on hitting total daily protein (1.6-2.2g/kg)',
          'Try distributing protein evenly across 3-4 meals',
          'Post-workout protein is fine but not urgent',
          'Track progress over 8-12 weeks for meaningful data'
        ]
      },
      discussionCount: 67,
      lastActivity: '5 hours ago'
    },
    {
      id: 'intermittent-fasting',
      title: 'Is intermittent fasting better than regular calorie restriction?',
      slug: 'intermittent-fasting-benefits',
      evidenceStrength: 'mixed',
      summary: 'Intermittent fasting can be an effective tool for calorie control, but most studies show similar weight loss and metabolic outcomes compared to continuous calorie restriction when calories are matched.',
      population: 'Adults seeking weight management; not recommended for those with eating disorder history',
      research: [
        { finding: 'No significant difference in weight loss between IF and continuous restriction when calories matched', type: 'Meta-analysis', year: 2022 },
        { finding: 'Time-restricted eating may improve insulin sensitivity in some populations', type: 'RCT', year: 2021 },
        { finding: 'Adherence is often better with IF for some individuals', type: 'Observational', year: 2020 }
      ],
      unknowns: [
        'Long-term metabolic effects beyond 12 months',
        'Whether benefits vary by chronotype or age',
        'Optimal eating window duration and timing',
        'Effects on muscle retention during weight loss'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Start with a 12-hour eating window and gradually reduce',
          'Monitor energy levels and workout performance',
          'Not recommended during pregnancy or for those with diabetes without medical supervision',
          'Pay attention to what you eat, not just when'
        ]
      },
      discussionCount: 124,
      lastActivity: '2 hours ago'
    },
    {
      id: 'processed-foods',
      title: 'How do ultra-processed foods affect health outcomes?',
      slug: 'ultra-processed-foods',
      evidenceStrength: 'strong',
      summary: 'Ultra-processed foods are consistently associated with higher rates of obesity, cardiovascular disease, and mortality in large observational studies. Mechanisms likely include hyperpalatability, low satiety, and displacement of whole foods.',
      population: 'All adults; children may be particularly vulnerable',
      research: [
        { finding: 'Each 10% increase in UPF consumption associated with 14% higher mortality risk', type: 'Meta-analysis', year: 2022 },
        { finding: 'UPF diets led to 500+ extra calories consumed daily compared to whole food diets', type: 'RCT', year: 2019 },
        { finding: 'Association holds even when controlling for nutrient content', type: 'Prospective cohort', year: 2021 }
      ],
      unknowns: [
        'Whether some UPF categories are worse than others',
        'The specific mechanisms driving health effects',
        'Whether the effect is from UPF or displacement of whole foods',
        'How food preparation methods factor in'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Track UPF percentage of diet for a week as baseline',
          'Try replacing one UPF item daily with whole food alternative',
          'Focus on additions before restrictions',
          'Read ingredient lists - long lists often indicate UPF'
        ]
      },
      discussionCount: 89,
      lastActivity: '8 hours ago'
    },
    {
      id: 'fiber-intake',
      title: 'How much fiber do you actually need?',
      slug: 'fiber-intake-benefits',
      evidenceStrength: 'strong',
      summary: 'Higher fiber intake is consistently linked to reduced cardiovascular disease, better glycemic control, and improved gut health. Most adults eat far less than the recommended 25-35g per day.',
      population: 'All adults; increase gradually to avoid digestive discomfort',
      research: [
        { finding: 'Each 8g increase in fiber associated with 5-27% reduction in cardiovascular events', type: 'Meta-analysis', year: 2019 },
        { finding: 'Fiber improves insulin sensitivity and glycemic control', type: 'RCT', year: 2020 },
        { finding: 'Diverse fiber sources support more diverse gut microbiome', type: 'Observational', year: 2021 }
      ],
      unknowns: [
        'Optimal ratio of soluble to insoluble fiber',
        'Whether fiber supplements provide same benefits as food-based fiber',
        'Individual variation in fiber tolerance and needs',
        'How gut microbiome composition affects fiber response'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Track current fiber intake before making changes',
          'Increase by 5g per week to minimize digestive issues',
          'Prioritize variety: vegetables, legumes, whole grains, fruits',
          'Increase water intake alongside fiber'
        ]
      },
      discussionCount: 45,
      lastActivity: '1 day ago'
    },
    {
      id: 'omega3-supplementation',
      title: 'Should you take omega-3 supplements?',
      slug: 'omega3-fish-oil',
      evidenceStrength: 'mixed',
      summary: 'Omega-3s from fatty fish are associated with cardiovascular benefits, but supplement trials have shown mixed results. Benefits may depend on baseline intake, dose, and EPA:DHA ratio.',
      population: 'Adults, especially those who eat little fatty fish; those with cardiovascular risk factors',
      research: [
        { finding: 'High-dose EPA (4g) reduced cardiovascular events by 25% in high-risk patients', type: 'RCT', year: 2019 },
        { finding: 'Standard-dose fish oil showed no benefit in most large trials', type: 'Meta-analysis', year: 2020 },
        { finding: 'Fish consumption (not supplements) consistently shows benefits', type: 'Prospective cohort', year: 2021 }
      ],
      unknowns: [
        'Why fish works better than fish oil supplements',
        'Optimal EPA:DHA ratio for different outcomes',
        'Whether algae-based omega-3s are equivalent',
        'Role of omega-6:omega-3 ratio vs. absolute intake'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Prioritize 2+ servings of fatty fish weekly if possible',
          'If supplementing, choose high-EPA formulas (2g+ EPA)',
          'Check for third-party testing for purity',
          'Consider omega-3 index testing to assess your status'
        ]
      },
      discussionCount: 78,
      lastActivity: '4 hours ago'
    },
    {
      id: 'artificial-sweeteners',
      title: 'Are artificial sweeteners a safe sugar replacement?',
      slug: 'artificial-sweeteners-safety',
      evidenceStrength: 'mixed',
      summary: 'Artificial sweeteners appear safe in moderation based on regulatory assessments, but emerging research raises questions about gut microbiome effects and whether they truly help with weight management.',
      population: 'Adults seeking to reduce sugar intake; caution in pregnancy for some sweeteners',
      research: [
        { finding: 'Sucralose and saccharin altered gut microbiome composition in controlled trials', type: 'RCT', year: 2022 },
        { finding: 'Replacement of sugar with sweeteners shows modest weight loss benefits', type: 'Meta-analysis', year: 2019 },
        { finding: 'Some observational studies link sweeteners to metabolic issues, but confounding is likely', type: 'Observational', year: 2021 }
      ],
      unknowns: [
        'Long-term effects on gut microbiome and metabolism',
        'Whether different sweeteners have different effects',
        'If sweeteners maintain sweet cravings vs. helping wean off',
        'Individual variation in sweetener response'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'If using sweeteners, try rotating types',
          'Consider gradual reduction in overall sweetness preference',
          'Monitor any digestive changes',
          'Stevia and monk fruit may have different effects than synthetic sweeteners'
        ]
      },
      discussionCount: 52,
      lastActivity: '6 hours ago'
    }
  ],
  'move-better': [
    {
      id: 'zone2-cardio',
      title: 'What is Zone 2 training and why does it matter?',
      slug: 'zone2-cardio-benefits',
      evidenceStrength: 'strong',
      summary: 'Zone 2 training (60-70% max heart rate) builds aerobic base, improves mitochondrial function, and enhances fat oxidation. It should form the majority of endurance training for most people.',
      population: 'All adults; particularly beneficial for metabolic health and longevity',
      research: [
        { finding: 'Zone 2 training increases mitochondrial density and function', type: 'RCT', year: 2020 },
        { finding: 'Elite endurance athletes spend 80% of training time in Zone 2', type: 'Observational', year: 2019 },
        { finding: 'Low-intensity training improves metabolic flexibility and fat oxidation', type: 'Meta-analysis', year: 2021 }
      ],
      unknowns: [
        'Optimal weekly volume for non-athletes',
        'How to precisely identify Zone 2 without lactate testing',
        'Whether the 80/20 polarized model applies to recreational athletes',
        'Minimum effective dose for metabolic benefits'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Use the talk test: you should be able to hold a conversation',
          'Heart rate roughly 180 minus age as starting point',
          'Start with 2-3 sessions of 30-45 minutes weekly',
          'Can be walking, cycling, swimming - any sustained activity'
        ]
      },
      discussionCount: 156,
      lastActivity: '1 hour ago'
    },
    {
      id: 'strength-training-frequency',
      title: 'How often should you train each muscle group?',
      slug: 'strength-training-frequency',
      evidenceStrength: 'strong',
      summary: 'Training each muscle group twice per week appears optimal for most people, though total weekly volume matters more than frequency. Higher frequencies allow better volume distribution.',
      population: 'Adults engaged in resistance training; beginners may progress with any frequency',
      research: [
        { finding: 'Training muscles 2x/week produced superior hypertrophy vs. 1x/week', type: 'Meta-analysis', year: 2016 },
        { finding: 'Total weekly volume is the primary driver when frequency is at least 2x', type: 'Meta-analysis', year: 2019 },
        { finding: '3x/week showed no significant advantage over 2x/week when volume matched', type: 'RCT', year: 2020 }
      ],
      unknowns: [
        'Optimal frequency for trained vs. untrained individuals',
        'Whether frequency needs vary by muscle group',
        'How age affects recovery and optimal frequency',
        'Role of training history in frequency response'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Try hitting each muscle group at least twice per week',
          'Upper/lower or push/pull/legs splits work well',
          'Adjust based on recovery - soreness that lasts 3+ days suggests too much',
          'Track progress over 8-12 weeks before changing frequency'
        ]
      },
      discussionCount: 89,
      lastActivity: '3 hours ago'
    },
    {
      id: 'stretching-benefits',
      title: 'Does stretching actually prevent injury?',
      slug: 'stretching-injury-prevention',
      evidenceStrength: 'mixed',
      summary: 'Static stretching before exercise does not prevent injury and may temporarily reduce power output. Dynamic warm-ups are superior for preparation. Flexibility work may have other benefits but injury prevention evidence is weak.',
      population: 'Active adults; findings apply to most recreational and competitive athletes',
      research: [
        { finding: 'Pre-exercise static stretching does not reduce injury rates', type: 'Meta-analysis', year: 2021 },
        { finding: 'Static stretching reduces strength and power for 30-60 minutes', type: 'Meta-analysis', year: 2019 },
        { finding: 'Dynamic warm-ups are associated with reduced injury rates', type: 'RCT', year: 2020 }
      ],
      unknowns: [
        'Whether chronic flexibility training reduces long-term injury risk',
        'Sport-specific stretching requirements',
        'Optimal mobility work for different populations',
        'How hypermobility affects these findings'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Replace pre-workout static stretching with dynamic movement',
          'Save static stretching for post-workout or separate sessions',
          'Focus on movements that mimic your planned activity',
          'If flexibility is limiting performance, address it separately'
        ]
      },
      discussionCount: 67,
      lastActivity: '12 hours ago'
    },
    {
      id: 'walking-exercise',
      title: 'Does walking count as real exercise?',
      slug: 'walking-health-benefits',
      evidenceStrength: 'strong',
      summary: 'Walking is one of the most underrated forms of exercise. Regular walking substantially reduces mortality risk, improves cardiovascular health, and supports mental wellbeing. 7,000-10,000 steps daily shows significant benefits.',
      population: 'All adults; particularly valuable for sedentary individuals and older adults',
      research: [
        { finding: 'Each additional 1,000 daily steps associated with 12% lower mortality', type: 'Meta-analysis', year: 2022 },
        { finding: 'Walking 30 minutes daily reduces cardiovascular disease risk by 19%', type: 'Prospective cohort', year: 2020 },
        { finding: 'Benefits plateau around 7,500-10,000 steps for mortality outcomes', type: 'Meta-analysis', year: 2021 }
      ],
      unknowns: [
        'Whether intensity (brisk vs. leisurely) significantly changes outcomes',
        'Optimal step targets for different age groups',
        'How walking compares to other Zone 2 activities',
        'Whether step timing (concentrated vs. spread out) matters'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Track current steps as baseline',
          'Add 1,000-2,000 steps weekly until reaching 7,000-10,000',
          'Walking meetings, parking farther away, post-meal walks all count',
          'Consistency matters more than occasional long walks'
        ]
      },
      discussionCount: 103,
      lastActivity: '2 hours ago'
    },
    {
      id: 'recovery-days',
      title: 'How many rest days do you actually need?',
      slug: 'rest-day-frequency',
      evidenceStrength: 'mixed',
      summary: 'Recovery needs vary substantially by training intensity, volume, age, and individual factors. Complete rest days may not be necessary for everyone - active recovery can be beneficial. Listen to your body.',
      population: 'Active adults; needs increase with age and training intensity',
      research: [
        { finding: 'Most adults can train 4-6 days per week with appropriate programming', type: 'Review', year: 2021 },
        { finding: 'Active recovery may be superior to complete rest for adaptation', type: 'RCT', year: 2019 },
        { finding: 'Individual recovery capacity varies by 2-3x between individuals', type: 'Observational', year: 2020 }
      ],
      unknowns: [
        'Optimal rest day frequency for different training modalities',
        'How to best assess individual recovery needs',
        'Whether deload weeks substitute for rest days',
        'Role of sleep and nutrition in reducing rest day needs'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Start with 2-3 rest or active recovery days per week',
          'Track performance - declining numbers suggest need for more rest',
          'HRV can help assess recovery status',
          'Active recovery (walking, yoga) may speed recovery vs. complete rest'
        ]
      },
      discussionCount: 71,
      lastActivity: '5 hours ago'
    },
    {
      id: 'hiit-benefits',
      title: 'Is HIIT really more effective than steady cardio?',
      slug: 'hiit-vs-steady-state',
      evidenceStrength: 'mixed',
      summary: 'HIIT is time-efficient and provides similar or superior cardiovascular benefits in less time. However, it is not inherently superior to steady cardio and should complement, not replace, lower intensity work.',
      population: 'Healthy adults; caution for those with cardiovascular conditions',
      research: [
        { finding: 'HIIT provides comparable cardiovascular benefits in 40% less time', type: 'Meta-analysis', year: 2021 },
        { finding: 'Both HIIT and moderate continuous training improve VO2max similarly', type: 'Meta-analysis', year: 2020 },
        { finding: 'HIIT may be harder to sustain long-term due to perceived effort', type: 'Observational', year: 2019 }
      ],
      unknowns: [
        'Optimal HIIT frequency relative to other training',
        'Whether HIIT provides unique mitochondrial benefits',
        'Long-term adherence compared to steady cardio',
        'Best protocols for different fitness levels'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Start with 1-2 HIIT sessions per week',
          'Balance with lower intensity work (Zone 2)',
          'Allow 48 hours between high-intensity sessions',
          'Progress intensity gradually - many people go too hard initially'
        ]
      },
      discussionCount: 94,
      lastActivity: '7 hours ago'
    }
  ],
  'feel-better': [
    {
      id: 'cold-exposure',
      title: 'Does cold exposure improve mood and resilience?',
      slug: 'cold-exposure-mental-health',
      evidenceStrength: 'limited',
      summary: 'Cold exposure triggers norepinephrine release which may improve mood and alertness. Anecdotal reports are strong, but controlled research on mental health outcomes is limited. Many find it a useful tool for building discomfort tolerance.',
      population: 'Healthy adults; not recommended for those with cardiovascular conditions without medical clearance',
      research: [
        { finding: 'Cold water immersion increases norepinephrine by 200-300%', type: 'Physiological study', year: 2000 },
        { finding: 'Cold showers associated with reduced sick days in one trial', type: 'RCT', year: 2016 },
        { finding: 'Limited controlled trials on mood and mental health outcomes', type: 'Review', year: 2022 }
      ],
      unknowns: [
        'Optimal temperature and duration for mental health benefits',
        'Whether benefits persist with habituation',
        'Mechanisms behind reported mood improvements',
        'Long-term effects of regular cold exposure'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Start with 30 seconds cold at end of shower',
          'Work up gradually - there is no rush',
          'Never do cold exposure alone in natural bodies of water',
          'Stop if you feel unwell or have cardiac symptoms'
        ]
      },
      discussionCount: 187,
      lastActivity: '30 minutes ago'
    },
    {
      id: 'meditation-anxiety',
      title: 'How effective is meditation for anxiety?',
      slug: 'meditation-anxiety-reduction',
      evidenceStrength: 'strong',
      summary: 'Regular meditation practice reduces anxiety symptoms comparably to first-line medications in some trials. Benefits appear dose-dependent and require consistent practice over weeks to manifest.',
      population: 'Adults with mild to moderate anxiety; can complement but should not replace treatment for severe anxiety',
      research: [
        { finding: 'Mindfulness meditation reduced anxiety comparable to escitalopram in 8-week trial', type: 'RCT', year: 2023 },
        { finding: 'Meta-analysis showed moderate effect sizes for anxiety reduction', type: 'Meta-analysis', year: 2021 },
        { finding: 'Benefits increase with practice duration and consistency', type: 'Observational', year: 2020 }
      ],
      unknowns: [
        'Minimum effective dose for anxiety benefits',
        'Which meditation style is best for anxiety specifically',
        'Whether app-based meditation is as effective as in-person instruction',
        'Long-term durability of benefits'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Start with 5-10 minutes daily using a guided app',
          'Commit to 8 weeks before evaluating benefits',
          'Some people experience increased anxiety initially',
          'If you have trauma history, consider trauma-informed instruction'
        ]
      },
      discussionCount: 134,
      lastActivity: '3 hours ago'
    },
    {
      id: 'nature-exposure',
      title: 'How much time in nature do you need for mental health benefits?',
      slug: 'nature-mental-health',
      evidenceStrength: 'strong',
      summary: 'Spending time in nature reduces cortisol, lowers blood pressure, and improves mood. Research suggests a threshold of about 120 minutes per week for significant wellbeing benefits.',
      population: 'All adults; benefits observed across ages and fitness levels',
      research: [
        { finding: '120+ minutes weekly in nature associated with significantly higher wellbeing', type: 'Large observational', year: 2019 },
        { finding: 'Forest bathing reduces cortisol and blood pressure', type: 'Meta-analysis', year: 2020 },
        { finding: 'Green space exposure linked to lower depression and anxiety rates', type: 'Prospective cohort', year: 2021 }
      ],
      unknowns: [
        'Whether urban parks provide same benefits as wilderness',
        'Role of physical activity vs. nature exposure itself',
        'Whether virtual nature (videos, VR) provides benefits',
        'Optimal single session duration vs. frequency'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Aim for 2+ hours weekly in green spaces',
          'Can be accumulated in shorter sessions',
          'Leave phone behind or on silent if possible',
          'Urban parks count - accessibility matters more than wilderness'
        ]
      },
      discussionCount: 78,
      lastActivity: '6 hours ago'
    },
    {
      id: 'social-connection',
      title: 'How does social connection affect physical health?',
      slug: 'social-connection-health',
      evidenceStrength: 'strong',
      summary: 'Social isolation is associated with mortality risk comparable to smoking. Quality relationships buffer stress, improve immune function, and are consistently linked to longevity across cultures.',
      population: 'All adults; particularly important for elderly and those living alone',
      research: [
        { finding: 'Loneliness associated with 26% increased mortality risk', type: 'Meta-analysis', year: 2015 },
        { finding: 'Social support reduces inflammatory markers and cortisol', type: 'RCT', year: 2020 },
        { finding: 'Relationship quality predicts health outcomes more than quantity', type: 'Prospective cohort', year: 2019 }
      ],
      unknowns: [
        'Whether online connection substitutes for in-person',
        'Minimum social dose for health benefits',
        'How personality type affects social needs',
        'Whether pets provide similar benefits'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Audit current relationships for quality vs. quantity',
          'Schedule regular connection like you would exercise',
          'Focus on deepening existing relationships over adding new ones',
          'Consider volunteering to build community connection'
        ]
      },
      discussionCount: 56,
      lastActivity: '1 day ago'
    },
    {
      id: 'gratitude-practice',
      title: 'Does gratitude practice actually work?',
      slug: 'gratitude-practice-benefits',
      evidenceStrength: 'mixed',
      summary: 'Gratitude interventions show modest positive effects on wellbeing in research, though effect sizes are smaller than popular claims suggest. Simple practices like gratitude journaling can help some people.',
      population: 'Adults; may be less effective for those with clinical depression',
      research: [
        { finding: 'Gratitude interventions show small to moderate effects on wellbeing', type: 'Meta-analysis', year: 2020 },
        { finding: 'Effects may be stronger for those with lower baseline wellbeing', type: 'RCT', year: 2019 },
        { finding: 'Gratitude letters showed mixed results across studies', type: 'Meta-analysis', year: 2021 }
      ],
      unknowns: [
        'Which gratitude practice is most effective',
        'Optimal frequency of practice',
        'Whether benefits plateau or continue to grow',
        'Who responds best to gratitude interventions'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Try writing 3 specific things you are grateful for daily',
          'Be specific rather than general',
          'Commit to 2-4 weeks before evaluating',
          'If it feels forced, try a different approach'
        ]
      },
      discussionCount: 43,
      lastActivity: '8 hours ago'
    },
    {
      id: 'sunlight-mood',
      title: 'How does sunlight exposure affect mood?',
      slug: 'sunlight-mood-serotonin',
      evidenceStrength: 'strong',
      summary: 'Sunlight exposure increases serotonin production and helps regulate circadian rhythms, both of which affect mood. Light therapy is an established treatment for seasonal depression and may help non-seasonal depression too.',
      population: 'All adults; particularly relevant for those in northern latitudes or who work indoors',
      research: [
        { finding: 'Bright light therapy is effective for seasonal affective disorder', type: 'Meta-analysis', year: 2020 },
        { finding: 'Sunlight exposure correlates with serotonin levels in the brain', type: 'Physiological study', year: 2002 },
        { finding: 'Morning light exposure improves mood even in non-depressed individuals', type: 'RCT', year: 2019 }
      ],
      unknowns: [
        'Optimal duration of daily sunlight exposure',
        'Whether light through windows is sufficient',
        'How cloud cover affects mood benefits',
        'Individual variation in light sensitivity'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Aim for 15-30 minutes of outdoor light in the morning',
          'Do not look directly at the sun',
          'Light boxes (10,000 lux) can substitute in winter',
          'Track mood alongside light exposure to identify patterns'
        ]
      },
      discussionCount: 67,
      lastActivity: '4 hours ago'
    }
  ],
  'focus-better': [
    {
      id: 'caffeine-cognition',
      title: 'How does caffeine affect cognitive performance?',
      slug: 'caffeine-cognitive-effects',
      evidenceStrength: 'strong',
      summary: 'Caffeine reliably improves alertness, reaction time, and sustained attention. Benefits are most pronounced when fatigued. Tolerance develops to some effects but alertness benefits persist.',
      population: 'Most adults; individual response varies significantly based on genetics',
      research: [
        { finding: 'Caffeine improves reaction time, vigilance, and sustained attention', type: 'Meta-analysis', year: 2020 },
        { finding: 'Optimal cognitive dose is 100-400mg depending on task and individual', type: 'Review', year: 2021 },
        { finding: 'Benefits are largest when sleep-deprived or fatigued', type: 'Meta-analysis', year: 2019 }
      ],
      unknowns: [
        'Optimal dosing schedule for sustained performance',
        'Whether cycling caffeine preserves benefits',
        'How genetics affect optimal dose',
        'Long-term effects on baseline cognition'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Start with lower doses (50-100mg) to assess response',
          'Time caffeine for when you need focus most',
          'Avoid escalating doses - more is not always better',
          'Consider periodic breaks to reset tolerance'
        ]
      },
      discussionCount: 112,
      lastActivity: '2 hours ago'
    },
    {
      id: 'attention-fragmentation',
      title: 'How damaging is task switching to deep work?',
      slug: 'task-switching-costs',
      evidenceStrength: 'strong',
      summary: 'Task switching incurs significant cognitive costs, with attention residue persisting for minutes after switching. Single-tasking and time-blocking can dramatically improve focus and output quality.',
      population: 'Knowledge workers and anyone requiring sustained cognitive effort',
      research: [
        { finding: 'Task switching can consume 20-40% of productive time', type: 'Experimental', year: 2019 },
        { finding: 'Attention residue from previous tasks impairs performance on new tasks', type: 'RCT', year: 2009 },
        { finding: 'Workers are interrupted or self-interrupt every 3-5 minutes on average', type: 'Observational', year: 2021 }
      ],
      unknowns: [
        'Whether some people are less affected by switching',
        'Optimal work block duration before diminishing returns',
        'How to train improved switching ability',
        'Whether quick checks (email, messages) are as costly as full switches'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Try time-blocking with 60-90 minute focused work periods',
          'Turn off notifications during focus blocks',
          'Batch communication into designated times',
          'Use website blockers if self-control is insufficient'
        ]
      },
      discussionCount: 89,
      lastActivity: '5 hours ago'
    },
    {
      id: 'sleep-cognition',
      title: 'How much does sleep affect cognitive performance?',
      slug: 'sleep-cognitive-performance',
      evidenceStrength: 'strong',
      summary: 'Sleep deprivation dramatically impairs attention, working memory, and decision-making. Even modest sleep restriction (6 hours vs 8) accumulates cognitive deficits over days. Most adults need 7-9 hours.',
      population: 'All adults; effects are universal though perception of impairment may vary',
      research: [
        { finding: 'After 17-19 hours awake, cognitive performance equals legal intoxication', type: 'Experimental', year: 2000 },
        { finding: 'Chronic 6-hour sleep leads to cumulative deficits equivalent to 2 nights without sleep', type: 'RCT', year: 2003 },
        { finding: 'Sleep deprivation disproportionately affects executive function and creativity', type: 'Meta-analysis', year: 2020 }
      ],
      unknowns: [
        'Whether some people truly need less sleep',
        'How to best identify individual sleep needs',
        'Whether naps can substitute for nighttime sleep',
        'Long-term cognitive effects of chronic mild restriction'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Track cognitive performance (reaction time apps) alongside sleep',
          'Experiment with 30-minute earlier bedtime for 2 weeks',
          'Sleep debt takes multiple nights of good sleep to repay',
          'Consider that you may not perceive your own impairment'
        ]
      },
      discussionCount: 98,
      lastActivity: '1 hour ago'
    },
    {
      id: 'exercise-brain',
      title: 'How does exercise improve brain function?',
      slug: 'exercise-cognitive-benefits',
      evidenceStrength: 'strong',
      summary: 'Exercise increases BDNF, improves blood flow to the brain, and enhances neuroplasticity. Both acute and chronic exercise improve cognitive function, with effects on memory, attention, and processing speed.',
      population: 'All adults; particularly neuroprotective for aging populations',
      research: [
        { finding: 'Aerobic exercise increases hippocampal volume and improves memory', type: 'RCT', year: 2011 },
        { finding: 'Single exercise session improves attention and processing speed for hours', type: 'Meta-analysis', year: 2019 },
        { finding: 'Regular exercisers show 30-40% lower dementia risk', type: 'Prospective cohort', year: 2020 }
      ],
      unknowns: [
        'Optimal type of exercise for cognitive benefits',
        'Whether intensity or duration matters more',
        'How soon before cognitive work should you exercise',
        'Whether resistance training provides similar benefits to aerobic'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Try 20-30 minutes of moderate exercise before demanding cognitive work',
          'Both aerobic and resistance training appear beneficial',
          'Even a 10-minute walk can improve focus',
          'Consistency matters more than intensity for long-term brain health'
        ]
      },
      discussionCount: 76,
      lastActivity: '3 hours ago'
    },
    {
      id: 'nootropics-effectiveness',
      title: 'Do nootropics actually improve cognitive performance?',
      slug: 'nootropics-evidence',
      evidenceStrength: 'limited',
      summary: 'Most over-the-counter nootropics lack robust evidence for cognitive enhancement in healthy adults. Caffeine and creatine have the strongest evidence. Many popular nootropics have not been adequately studied.',
      population: 'Healthy adults seeking cognitive enhancement',
      research: [
        { finding: 'Caffeine is the only consistently effective OTC cognitive enhancer', type: 'Meta-analysis', year: 2021 },
        { finding: 'Creatine may modestly improve working memory, especially when sleep-deprived', type: 'Meta-analysis', year: 2018 },
        { finding: 'Most racetams and herbal nootropics show no benefit in healthy adults', type: 'Review', year: 2020 }
      ],
      unknowns: [
        'Long-term effects of nootropic use',
        'Individual variation in response',
        'Whether combinations have synergistic effects',
        'Quality control issues in supplement industry'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Optimize sleep, exercise, and nutrition first',
          'Caffeine and creatine have the best evidence if you want to try something',
          'Be skeptical of dramatic claims',
          'Track cognitive performance objectively, not just subjectively'
        ]
      },
      discussionCount: 143,
      lastActivity: '45 minutes ago'
    },
    {
      id: 'music-focus',
      title: 'Does music help or hurt concentration?',
      slug: 'music-concentration-effects',
      evidenceStrength: 'mixed',
      summary: 'Music affects focus differently depending on the task, music type, and individual. Instrumental music may help some tasks while lyrics impair verbal tasks. Personal preference and familiarity also matter.',
      population: 'Adults performing cognitive work; effects vary by task type and individual',
      research: [
        { finding: 'Music with lyrics impairs reading and writing performance', type: 'Meta-analysis', year: 2020 },
        { finding: 'Familiar instrumental music may improve mood without impairing cognition', type: 'RCT', year: 2019 },
        { finding: 'Individual differences are large - some people focus better with music, others without', type: 'Review', year: 2021 }
      ],
      unknowns: [
        'Why some individuals focus better with music',
        'Whether habituation to music reduces its effect',
        'Optimal tempo and complexity for different tasks',
        'Whether binaural beats have real effects beyond placebo'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Try both with and without music for the same task type',
          'Avoid lyrics during verbal tasks (reading, writing)',
          'Familiar, predictable music is less distracting',
          'Silence may still be optimal for complex work'
        ]
      },
      discussionCount: 58,
      lastActivity: '6 hours ago'
    }
  ],
  'sleep-better': [
    {
      id: 'light-exposure-morning',
      title: 'Does morning light exposure improve sleep?',
      slug: 'morning-light-exposure',
      evidenceStrength: 'strong',
      summary: 'Exposure to bright light within 1-2 hours of waking helps anchor your circadian rhythm, making it easier to fall asleep at night and wake feeling refreshed. The effect is most pronounced with natural sunlight but bright artificial light can help.',
      population: 'Most adults, especially those with irregular sleep schedules or seasonal affective patterns',
      research: [
        { finding: '30-60 minutes of morning bright light advances circadian phase and improves sleep onset', type: 'Meta-analysis', year: 2022 },
        { finding: 'Light exposure of 10,000 lux for 30 minutes is effective; natural sunlight often exceeds this', type: 'RCT', year: 2020 },
        { finding: 'Timing matters more than duration - earlier is generally better', type: 'Observational', year: 2021 }
      ],
      unknowns: [
        'Optimal duration varies by individual and may depend on chronotype',
        'Effectiveness through windows vs. direct outdoor exposure is unclear',
        'How cloud cover affects the minimum effective dose',
        'Whether blue light glasses in evening can substitute for morning light'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Start with 10-15 minutes and increase gradually',
          'Avoid looking directly at the sun',
          'Those with eye conditions should consult an ophthalmologist',
          'Light boxes should be 10,000 lux and UV-filtered'
        ]
      },
      discussionCount: 47,
      lastActivity: '2 hours ago'
    },
    {
      id: 'caffeine-timing',
      title: 'How late is too late for caffeine?',
      slug: 'caffeine-timing',
      evidenceStrength: 'strong',
      summary: 'Caffeine has a half-life of 5-6 hours in most adults, meaning half the caffeine from your afternoon coffee is still in your system at bedtime. Even if you fall asleep, caffeine reduces deep sleep quality.',
      population: 'Adults who consume caffeine; effects vary significantly by genetics (CYP1A2 gene)',
      research: [
        { finding: 'Caffeine consumed 6 hours before bed reduced total sleep by over 1 hour', type: 'RCT', year: 2013 },
        { finding: 'Even caffeine consumed 6 hours before bed disrupted sleep architecture on EEG', type: 'RCT', year: 2013 },
        { finding: 'Slow caffeine metabolizers experience effects for 8+ hours', type: 'Genetic study', year: 2018 }
      ],
      unknowns: [
        'Individual variation is substantial - some people truly are unaffected',
        'Whether tolerance develops to sleep-disrupting effects',
        'How different caffeine sources (coffee vs. tea vs. supplements) compare',
        'The role of adenosine receptor density in individual responses'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Try a 2-week caffeine curfew experiment (none after 12pm)',
          'Track sleep quality with a wearable or sleep diary',
          'Be aware of withdrawal headaches in first few days',
          'Consider genetic testing for CYP1A2 if curious about your metabolism'
        ]
      },
      discussionCount: 89,
      lastActivity: '4 hours ago'
    },
    {
      id: 'room-temperature',
      title: 'What is the optimal bedroom temperature for sleep?',
      slug: 'bedroom-temperature',
      evidenceStrength: 'strong',
      summary: 'Your body needs to drop its core temperature by about 1 degree Celsius to initiate sleep. A cool bedroom (65-68°F / 18-20°C) facilitates this process. Too warm, and your body struggles to release heat.',
      population: 'All adults; may need adjustment for elderly, infants, or those with certain medical conditions',
      research: [
        { finding: 'Room temperatures above 75°F significantly reduced sleep quality and REM sleep', type: 'RCT', year: 2019 },
        { finding: 'The optimal range for most adults is 60-67°F (15-19°C)', type: 'Review', year: 2021 },
        { finding: 'Warm baths before bed improve sleep by promoting heat loss afterward', type: 'Meta-analysis', year: 2019 }
      ],
      unknowns: [
        'Individual variation based on body composition and metabolism',
        'Whether feet temperature (warm socks) matters independently',
        'Optimal temperature may shift with age',
        'How bedding materials interact with room temperature'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Lower your thermostat by 2-3 degrees for a week',
          'Consider breathable bedding materials',
          'A warm shower 1-2 hours before bed can help',
          'Keep feet warm even if room is cool'
        ]
      },
      discussionCount: 34,
      lastActivity: '1 day ago'
    },
    {
      id: 'meal-timing',
      title: 'Does eating late at night disrupt sleep?',
      slug: 'meal-timing-sleep',
      evidenceStrength: 'mixed',
      summary: 'Eating large meals close to bedtime can disrupt sleep through digestive activity, acid reflux, and thermic effects of food. However, going to bed hungry can also impair sleep. A light snack may be fine for most people.',
      population: 'Adults; particularly relevant for those with GERD or metabolic conditions',
      research: [
        { finding: 'Meals within 3 hours of bedtime associated with more nighttime awakenings', type: 'Observational', year: 2020 },
        { finding: 'High-fat and high-protein meals take longer to digest and may disrupt sleep more', type: 'RCT', year: 2016 },
        { finding: 'A small carbohydrate-rich snack may actually improve sleep onset in some people', type: 'RCT', year: 2018 }
      ],
      unknowns: [
        'Optimal timing likely varies by individual meal tolerance',
        'Whether meal composition matters more than timing',
        'The role of eating patterns vs. single late meals',
        'How shift workers should time meals'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Try finishing eating 3 hours before bed for 1-2 weeks',
          'If hungry at night, try a small snack with complex carbs',
          'Avoid heavy, spicy, or fatty foods in the evening',
          'Track any correlation between meal timing and sleep quality'
        ]
      },
      discussionCount: 56,
      lastActivity: '6 hours ago'
    },
    {
      id: 'alcohol-sleep',
      title: 'How does alcohol affect sleep quality?',
      slug: 'alcohol-and-sleep',
      evidenceStrength: 'strong',
      summary: 'While alcohol may help you fall asleep faster, it significantly disrupts sleep architecture in the second half of the night. It suppresses REM sleep, causes more awakenings, and worsens sleep apnea.',
      population: 'All adults who consume alcohol; effects are dose-dependent',
      research: [
        { finding: 'Even moderate alcohol (1-2 drinks) reduced sleep quality by 24%', type: 'Meta-analysis', year: 2018 },
        { finding: 'REM sleep suppression occurs even with low doses', type: 'RCT', year: 2015 },
        { finding: 'Alcohol exacerbates sleep apnea severity by 25-50%', type: 'Review', year: 2020 }
      ],
      unknowns: [
        'Whether timing (earlier in evening) reduces impact',
        'Individual variation in alcohol metabolism',
        'Long-term adaptation effects in regular drinkers',
        'Interaction with age and body composition'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Try 2-4 weeks alcohol-free and track sleep quality',
          'If drinking, stop at least 3-4 hours before bed',
          'Use a wearable to objectively measure sleep stages',
          'Be aware that perceived sleep quality may not match actual quality'
        ]
      },
      discussionCount: 72,
      lastActivity: '3 hours ago'
    },
    {
      id: 'screen-time-blue-light',
      title: 'Do screens before bed really hurt your sleep?',
      slug: 'screens-and-blue-light',
      evidenceStrength: 'mixed',
      summary: 'The evidence on blue light specifically is weaker than commonly believed. However, screen use before bed can delay sleep through stimulating content and delayed bedtime routines, regardless of light spectrum.',
      population: 'Adults and adolescents; children may be more sensitive',
      research: [
        { finding: 'Blue light glasses showed minimal effect on sleep in recent meta-analyses', type: 'Meta-analysis', year: 2023 },
        { finding: 'Screen time before bed delays sleep onset by 20+ minutes on average', type: 'Observational', year: 2019 },
        { finding: 'Stimulating content (social media, games) may matter more than light', type: 'RCT', year: 2021 }
      ],
      unknowns: [
        'Whether the issue is light, content, or displacement of sleep time',
        'If dim red-shifted screens are meaningfully better',
        'Age-related sensitivity differences',
        'Whether e-readers differ from phones and tablets'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Try a 1-hour screen-free wind-down routine',
          'If you use screens, try night mode and dimming',
          'Choose calming content over stimulating content',
          'Consider what you replace screen time with'
        ]
      },
      discussionCount: 63,
      lastActivity: '12 hours ago'
    },
    {
      id: 'magnesium-sleep',
      title: 'Does magnesium supplementation improve sleep?',
      slug: 'magnesium-for-sleep',
      evidenceStrength: 'limited',
      summary: 'Magnesium is involved in sleep regulation, and deficiency may contribute to poor sleep. Supplementation shows modest benefits in those who are deficient, but evidence for well-nourished individuals is limited.',
      population: 'Adults with low magnesium intake or absorption issues; elderly may benefit more',
      research: [
        { finding: 'Magnesium supplementation improved sleep quality in elderly with insomnia', type: 'RCT', year: 2012 },
        { finding: 'Effects were significant only in those with low baseline magnesium', type: 'RCT', year: 2017 },
        { finding: 'Magnesium glycinate may be better tolerated than other forms', type: 'Comparative study', year: 2020 }
      ],
      unknowns: [
        'Optimal form (glycinate, citrate, threonate) for sleep specifically',
        'Whether benefits extend to those with adequate intake',
        'Optimal dosing and timing',
        'Long-term effects and whether tolerance develops'
      ],
      experimentation: {
        safe: true,
        reversible: true,
        considerations: [
          'Start with 200-400mg magnesium glycinate before bed',
          'Give it 2-4 weeks to assess effects',
          'High doses can cause digestive issues',
          'Consider testing magnesium RBC levels if curious about status'
        ]
      },
      discussionCount: 91,
      lastActivity: '1 hour ago'
    }
  ]
};

// Sample community contributions
export const sampleContributions = [
  // Sleep Better
  {
    id: 1,
    topicId: 'light-exposure-morning',
    userId: 'user_abc123',
    username: 'EarlyRiser_Sarah',
    approach: 'I started a 15-minute morning walk routine immediately after waking',
    observation: 'After 2 weeks, I noticed I was naturally getting sleepy around 10pm instead of midnight',
    duration: '3 months',
    otherChanges: 'Also reduced evening screen time',
    timestamp: '2024-12-15T08:30:00Z',
    helpful: 23
  },
  {
    id: 2,
    topicId: 'caffeine-timing',
    userId: 'user_def456',
    username: 'DataDrivenDan',
    approach: 'Cut off caffeine at noon instead of 3pm',
    observation: 'My Oura ring shows 15% more deep sleep on average',
    duration: '6 weeks',
    otherChanges: 'None - isolated this variable intentionally',
    timestamp: '2024-12-14T14:22:00Z',
    helpful: 45
  },
  // Eat Better
  {
    id: 3,
    topicId: 'intermittent-fasting',
    userId: 'user_ghi789',
    username: 'FastingFan_Mike',
    approach: '16:8 eating window, eating between 12pm and 8pm',
    observation: 'Lost 15 lbs over 4 months and my afternoon energy crashes disappeared',
    duration: '6 months',
    otherChanges: 'Started eating more protein at first meal to stay full',
    timestamp: '2024-12-10T10:15:00Z',
    helpful: 67
  },
  {
    id: 4,
    topicId: 'fiber-intake',
    userId: 'user_jkl012',
    username: 'GutHealthGina',
    approach: 'Added 2 tbsp ground flaxseed and a serving of beans daily',
    observation: 'Digestive regularity improved significantly after the first 2 weeks of adjustment',
    duration: '3 months',
    otherChanges: 'Increased water intake as well',
    timestamp: '2024-12-08T16:45:00Z',
    helpful: 34
  },
  // Move Better
  {
    id: 5,
    topicId: 'zone2-cardio',
    userId: 'user_mno345',
    username: 'EnduranceEric',
    approach: 'Added 3x45min Zone 2 sessions weekly (cycling at conversational pace)',
    observation: 'Resting heart rate dropped 8 bpm over 3 months, recovery between hard workouts improved',
    duration: '4 months',
    otherChanges: 'Reduced high intensity sessions from 4 to 2 per week',
    timestamp: '2024-12-12T09:30:00Z',
    helpful: 89
  },
  {
    id: 6,
    topicId: 'walking-exercise',
    userId: 'user_pqr678',
    username: 'StepCounter_Sue',
    approach: 'Committed to 10,000 steps daily using treadmill desk and post-meal walks',
    observation: 'Blood pressure normalized without medication after 6 months, sleep improved',
    duration: '8 months',
    otherChanges: 'No other major changes - wanted to test walking alone',
    timestamp: '2024-12-05T14:20:00Z',
    helpful: 112
  },
  // Feel Better
  {
    id: 7,
    topicId: 'cold-exposure',
    userId: 'user_stu901',
    username: 'ColdPlunge_Chris',
    approach: 'Started with 30 second cold shower endings, worked up to 2-3 min ice baths',
    observation: 'Morning alertness improved dramatically, feel more resilient to daily stressors',
    duration: '5 months',
    otherChanges: 'Also started meditation around same time',
    timestamp: '2024-12-11T07:45:00Z',
    helpful: 156
  },
  {
    id: 8,
    topicId: 'meditation-anxiety',
    userId: 'user_vwx234',
    username: 'MindfulMaria',
    approach: '10 minutes of guided meditation every morning using Headspace app',
    observation: 'Anxiety symptoms reduced noticeably after week 3, now I catch anxious thoughts earlier',
    duration: '4 months',
    otherChanges: 'Also reduced social media to 30 min/day',
    timestamp: '2024-12-09T08:00:00Z',
    helpful: 78
  },
  {
    id: 9,
    topicId: 'nature-exposure',
    userId: 'user_yza567',
    username: 'ForestWalker_Tom',
    approach: 'Weekly 2-hour hike in local state park, plus daily 15-min walks in neighborhood park',
    observation: 'Mood and stress levels noticeably better on weeks I hit my nature time goal',
    duration: '6 months',
    otherChanges: 'None intentionally',
    timestamp: '2024-12-07T11:30:00Z',
    helpful: 45
  },
  // Focus Better
  {
    id: 10,
    topicId: 'caffeine-cognition',
    userId: 'user_bcd890',
    username: 'ProductivityPete',
    approach: 'Switched from 3 cups throughout day to single 200mg dose at 9am',
    observation: 'More consistent energy, no afternoon crash, sleep improved',
    duration: '2 months',
    otherChanges: 'None',
    timestamp: '2024-12-13T10:00:00Z',
    helpful: 56
  },
  {
    id: 11,
    topicId: 'attention-fragmentation',
    userId: 'user_efg123',
    username: 'DeepWorkDiana',
    approach: 'Implemented 90-min focus blocks with phone in another room, notifications off',
    observation: 'Output quality improved significantly, finish complex tasks in half the time',
    duration: '3 months',
    otherChanges: 'Also started batching email to 2x daily',
    timestamp: '2024-12-06T15:15:00Z',
    helpful: 91
  },
  {
    id: 12,
    topicId: 'exercise-brain',
    userId: 'user_hij456',
    username: 'MorningRunner_Alex',
    approach: '20-minute jog before starting work each day',
    observation: 'Creativity and problem-solving noticeably better in first few hours of work',
    duration: '4 months',
    otherChanges: 'Moved hardest cognitive tasks to morning as a result',
    timestamp: '2024-12-04T06:30:00Z',
    helpful: 63
  }
];
