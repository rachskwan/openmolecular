export const communityThreads = [
  {
    id: 1,
    title: 'My Omega-3 Index went from 4% to 9% in 6 months - here\'s what I did',
    author: 'HealthyHiker',
    avatar: 'HH',
    date: '2 hours ago',
    category: 'Success Stories',
    replies: 47,
    likes: 234,
    preview: 'After getting my first metabolomics panel and seeing my low Omega-3 Index, I made some significant changes...',
    featured: true,
    content: `After getting my first metabolomics panel and seeing my low Omega-3 Index at just 4%, I knew I had to make some changes. Six months later, I'm at 9% and feeling the difference. Here's exactly what I did:

**Month 1-2: Diet Overhaul**
- Added wild-caught salmon 3x per week
- Started eating sardines (sounds gross, but they're actually great on toast!)
- Replaced cooking oils with high-quality olive oil
- Reduced omega-6 intake by cutting processed foods

**Month 3-4: Supplementation**
- Added 2g of high-quality fish oil daily (checked for IFOS certification)
- Took with fatty meals for better absorption
- Switched to triglyceride form after research suggested better bioavailability

**Month 5-6: Fine-tuning**
- Got retested at month 4 - was at 7%
- Increased fish oil to 3g daily
- Added more walnuts and chia seeds

**Results I've noticed:**
- Better focus and mental clarity
- Improved recovery after hiking
- Skin is noticeably less dry
- Sleep quality seems better (though hard to quantify)

Happy to answer any questions! The journey is definitely worth it.`,
    threadReplies: [
      {
        id: 1,
        author: 'NutritionNerd',
        avatar: 'NN',
        date: '1 hour ago',
        content: 'This is amazing progress! Did you notice any difference in the first few weeks, or did it take a while to feel the benefits?',
        likes: 23
      },
      {
        id: 2,
        author: 'HealthyHiker',
        avatar: 'HH',
        date: '1 hour ago',
        content: 'Great question! Honestly, I didn\'t notice much for the first 6-8 weeks. The mental clarity was the first thing I noticed around month 2. Be patient - this is about changing the composition of your cell membranes, which takes time!',
        likes: 45,
        isAuthor: true
      },
      {
        id: 3,
        author: 'FishOilSkeptic',
        avatar: 'FS',
        date: '45 min ago',
        content: 'What brand of fish oil did you use? I\'ve heard some brands have oxidation issues.',
        likes: 12
      },
      {
        id: 4,
        author: 'HealthyHiker',
        avatar: 'HH',
        date: '30 min ago',
        content: 'I use Nordic Naturals Ultimate Omega - it has IFOS 5-star certification which tests for oxidation, heavy metals, and PCBs. The key is to look for that certification and store it in the fridge after opening.',
        likes: 34,
        isAuthor: true
      },
      {
        id: 5,
        author: 'DocMike',
        avatar: 'DM',
        date: '20 min ago',
        content: 'Great post! As a physician, I always recommend getting tested before and after. Your approach of retesting at month 4 was smart - it helped you adjust your protocol. The 8% target is well-supported by research for cardiovascular protection.',
        likes: 67
      }
    ]
  },
  {
    id: 2,
    title: 'Confused about my CRP levels - can someone help interpret?',
    author: 'NewToThis',
    avatar: 'NT',
    date: '5 hours ago',
    category: 'Questions',
    replies: 23,
    likes: 56,
    preview: 'Just got my results back and my hs-CRP is at 2.4 mg/L. The report says "moderate" but I\'m not sure what to do...',
    content: `Just got my results back and my hs-CRP is at 2.4 mg/L. The report says "moderate risk" but I'm not sure what this means or what I should do about it.

Some context:
- 35 years old, male
- BMI around 26
- Don't smoke, occasional alcohol
- Exercise 2-3x per week (mostly weights)
- No known health conditions

Is this something I should be worried about? What are some things that could cause elevated CRP? And most importantly, what can I do to lower it?

Thanks in advance for any help!`,
    threadReplies: [
      {
        id: 1,
        author: 'InflammationExpert',
        avatar: 'IE',
        date: '4 hours ago',
        content: 'CRP at 2.4 mg/L is in the "average risk" category (1-3 mg/L). It\'s not alarming, but there\'s room for improvement. Common causes include excess body fat, poor diet, stress, and lack of sleep. The good news is lifestyle changes can make a big difference!',
        likes: 34
      },
      {
        id: 2,
        author: 'NewToThis',
        avatar: 'NT',
        date: '3 hours ago',
        content: 'Thanks! That\'s reassuring. Any specific dietary changes you\'d recommend?',
        likes: 8,
        isAuthor: true
      }
    ]
  },
  {
    id: 3,
    title: 'Best time of day to take NAD+ precursors?',
    author: 'BiohackerPro',
    avatar: 'BP',
    date: '8 hours ago',
    category: 'Questions',
    replies: 31,
    likes: 89,
    preview: 'I\'ve been taking NMN for a month now, but I\'ve heard conflicting advice about morning vs evening dosing...',
    content: `I've been taking NMN for a month now, but I've heard conflicting advice about morning vs evening dosing. Some say morning is better because NAD+ levels naturally peak in the morning and you want to support that rhythm. Others say it doesn't matter.

Currently taking 500mg in the morning with breakfast. Anyone have experience with different timing? Have you noticed any difference?

Also curious if anyone has actually measured their NAD+ levels before/after supplementation. Is that even possible with consumer testing?`,
    threadReplies: [
      {
        id: 1,
        author: 'CircadianChris',
        avatar: 'CC',
        date: '7 hours ago',
        content: 'Morning is generally recommended based on the circadian rhythm of NAD+ metabolism. Dr. David Sinclair takes his in the morning. That said, some people report sleep issues with morning dosing and do better with afternoon.',
        likes: 45
      }
    ]
  },
  {
    id: 4,
    title: 'Research Deep Dive: The latest on gut microbiome and mental health',
    author: 'ScienceNerd',
    avatar: 'SN',
    date: '1 day ago',
    category: 'Research Discussion',
    replies: 67,
    likes: 312,
    preview: 'Just finished reading the new meta-analysis on psychobiotics. Some fascinating findings about specific strains...',
    featured: true,
    content: `Just finished reading the new meta-analysis on psychobiotics published in Molecular Psychiatry. Some fascinating findings I wanted to share:

**Key Findings:**

1. **Specific strains matter**: Lactobacillus rhamnosus and Bifidobacterium longum showed the most consistent effects on anxiety and depression markers.

2. **Duration matters**: Studies shorter than 4 weeks showed minimal effects. The sweet spot seems to be 8-12 weeks of consistent supplementation.

3. **Mechanisms identified**: The gut-brain axis communication happens through multiple pathways - vagus nerve signaling, short-chain fatty acid production, and direct neurotransmitter precursor synthesis.

**What this means practically:**

If you're interested in supporting mental health through the microbiome:
- Look for products with well-researched strains (not just "probiotic blend")
- Commit to at least 8 weeks before evaluating
- Combine with prebiotic fiber for best results
- Consider testing your microbiome before and after

I'd love to hear others' experiences with psychobiotics!`,
    threadReplies: [
      {
        id: 1,
        author: 'GutBrainConnection',
        avatar: 'GB',
        date: '20 hours ago',
        content: 'Excellent summary! I\'ve been taking L. rhamnosus GG for 3 months now and have noticed a definite improvement in my baseline anxiety. Of course, I also made other changes so hard to isolate the effect.',
        likes: 56
      }
    ]
  },
  {
    id: 5,
    title: 'Comparing different brands of fish oil - metabolomics perspective',
    author: 'QualityMatters',
    avatar: 'QM',
    date: '1 day ago',
    category: 'Product Discussion',
    replies: 89,
    likes: 445,
    preview: 'I work in a testing lab and we recently ran a comparison of 20 popular fish oil brands. The results were eye-opening...',
    content: `I work in a testing lab and we recently ran a comparison of 20 popular fish oil brands using LC-MS analysis. The results were eye-opening and I wanted to share (without naming specific brands to avoid any issues).

**What we tested:**
- Actual EPA/DHA content vs label claims
- Oxidation markers (TOTOX values)
- Heavy metals (mercury, lead, arsenic)
- PCB contamination

**Key findings:**

1. **Label accuracy**: Only 12 of 20 products had EPA/DHA within 10% of label claims. 3 products had less than 70% of claimed amounts.

2. **Oxidation**: 6 products exceeded recommended TOTOX limits, meaning the oils were rancid. These were mostly products without proper packaging or from less reputable brands.

3. **Contaminants**: All products passed heavy metal testing, but 2 had PCB levels I'd consider concerning (though still within regulatory limits).

**My recommendations:**
- Look for IFOS or similar third-party certification
- Choose products in dark bottles or blister packs
- Store in the refrigerator
- If it smells very fishy, it's likely oxidized

Happy to answer questions about the testing methodology or results!`,
    threadReplies: []
  },
  {
    id: 6,
    title: 'How I used my biomarker data to optimize my training',
    author: 'AthleteAlex',
    avatar: 'AA',
    date: '2 days ago',
    category: 'Success Stories',
    replies: 34,
    likes: 178,
    preview: 'As a competitive cyclist, I started tracking my inflammatory markers alongside my training load...',
    content: `As a competitive cyclist, I started tracking my inflammatory markers alongside my training load last season. The insights have been game-changing for my performance and recovery.

**My protocol:**
- Monthly metabolomics panels during training season
- Tracked hs-CRP, IL-6, and cortisol patterns
- Correlated with training stress score (TSS) from my power meter

**What I discovered:**
My CRP would spike about 48-72 hours after high-intensity blocks. By watching this pattern, I learned to time my recovery weeks better. I also noticed my omega-3 index dropped during heavy training periods - I now increase supplementation during build phases.

**Results:**
- 15% reduction in overtraining symptoms
- Faster recovery between hard sessions
- Set a new FTP personal best at age 34

This kind of personalized data is the future of athletic training!`,
    threadReplies: []
  },
  {
    id: 7,
    title: 'ELI5: What does metabolomics actually measure?',
    author: 'CuriousCat',
    avatar: 'CC',
    date: '2 days ago',
    category: 'Questions',
    replies: 56,
    likes: 234,
    preview: 'I keep seeing this term everywhere but I\'m struggling to understand how it\'s different from a regular blood test...',
    content: `I keep seeing this term everywhere but I'm struggling to understand how it's different from a regular blood test. Can someone explain like I'm 5?

What exactly is being measured? How is it different from checking cholesterol or blood sugar? And why should I care about it?

Sorry if this is a basic question - I'm just starting to learn about all this!`,
    threadReplies: [
      {
        id: 1,
        author: 'MetaboTeacher',
        avatar: 'MT',
        date: '1 day ago',
        content: 'Great question! Think of it this way: A regular blood test is like checking if your car has enough gas and oil. Metabolomics is like connecting to your car\'s computer and reading ALL the sensors at once - engine temperature, tire pressure, battery health, everything. It gives you a complete picture of what\'s happening inside.',
        likes: 156
      },
      {
        id: 2,
        author: 'CuriousCat',
        avatar: 'CC',
        date: '1 day ago',
        content: 'Oh that makes so much more sense! So it\'s like a full diagnostic vs just checking individual things?',
        likes: 23,
        isAuthor: true
      },
      {
        id: 3,
        author: 'MetaboTeacher',
        avatar: 'MT',
        date: '1 day ago',
        content: 'Exactly! And because you\'re measuring hundreds or thousands of metabolites at once, you can see patterns and connections that you\'d miss with individual tests. For example, you might see that your B vitamin metabolism is affecting your energy production, or that inflammation is impacting your lipid processing.',
        likes: 89
      }
    ]
  },
  {
    id: 8,
    title: 'Monthly Challenge: Track your circadian rhythm for 30 days',
    author: 'ModTeam',
    avatar: 'MT',
    date: '3 days ago',
    category: 'Community Events',
    replies: 123,
    likes: 567,
    preview: 'Join us for our December challenge! We\'ll be tracking sleep, meals, and cortisol patterns...',
    featured: true,
    content: `Join us for our December challenge! We'll be tracking sleep, meals, and cortisol patterns to understand our individual circadian rhythms.

**What you'll track:**
- Wake time and sleep time
- Meal timing (first and last meal)
- Energy levels throughout the day (1-10 scale)
- Optional: morning cortisol if you have access to testing

**How to participate:**
1. Comment below to join
2. Use the hashtag #CircadianChallenge in your updates
3. Share weekly summaries with the group
4. At the end of the month, we'll compile insights

**Why this matters:**
Research shows that aligning your eating, sleeping, and activity with your circadian rhythm can improve metabolic health, reduce inflammation, and enhance cognitive function.

Let's do this together! Drop a comment if you're in! 🌅`,
    threadReplies: [
      {
        id: 1,
        author: 'EarlyBird',
        avatar: 'EB',
        date: '2 days ago',
        content: 'Count me in! I\'ve been wanting to optimize my morning routine. This is the perfect motivation.',
        likes: 34
      },
      {
        id: 2,
        author: 'NightOwlNoMore',
        avatar: 'NO',
        date: '2 days ago',
        content: 'I\'m joining! As someone who has struggled with late-night eating, I\'m hoping this challenge helps me shift my patterns.',
        likes: 45
      }
    ]
  }
];

export const communityCategories = [
  'All',
  'Questions',
  'Success Stories',
  'Research Discussion',
  'Product Discussion',
  'Community Events'
];
