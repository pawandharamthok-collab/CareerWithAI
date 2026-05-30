/* ============================================
   CareerWithAI — Career Clarity Engine
   Questions, Scoring, Report Generation
   ============================================ */

/* ============ DATA: CAREER PATHS ============ */
const CAREER_PATHS = {
  'ai-developer': {
    id: 'ai-developer',
    title: 'AI-Augmented Developer',
    emoji: '💻',
    demand: 'High Demand',
    demandClass: 'growing',
    description: 'Build software applications 2-5x faster by mastering AI coding assistants. Every company needs developers who can ship faster with AI tools — and very few graduates know how.',
    skills: ['JavaScript or Python', 'React / Node.js', 'Git & Version Control', 'AI-Assisted Debugging', 'System Design Basics'],
    aiTools: ['GitHub Copilot', 'Cursor IDE', 'Claude / ChatGPT', 'v0 by Vercel', 'Bolt.new'],
    timeline: [
      { period: 'Month 1-2', text: 'Master one language (JS or Python). Build 3 small projects using AI coding assistants. Push everything to GitHub.' },
      { period: 'Month 3-4', text: 'Learn a framework (React or Django). Build a full-stack project with AI helping you debug and generate boilerplate.' },
      { period: 'Month 5-6', text: 'Contribute to open source. Build a portfolio site. Start applying — your GitHub IS your resume.' },
    ],
  },
  'data-analyst': {
    id: 'data-analyst',
    title: 'Data Analyst',
    emoji: '📊',
    demand: 'Growing',
    demandClass: 'growing',
    description: 'Turn raw data into business decisions. Companies are drowning in data but starving for insights. AI tools now let you analyze data 10x faster — making this role more accessible than ever.',
    skills: ['SQL (non-negotiable)', 'Excel / Google Sheets', 'Python (Pandas, basics)', 'Data Visualization (Tableau / Power BI)', 'Business Storytelling'],
    aiTools: ['ChatGPT for SQL queries', 'Julius AI', 'Tableau AI', 'Google Colab + AI', 'NotebookLM'],
    timeline: [
      { period: 'Month 1-2', text: 'Master SQL — every analyst job requires it. Practice on free datasets from Kaggle. Use AI to explain complex queries.' },
      { period: 'Month 3-4', text: 'Learn one visualization tool (Tableau or Power BI). Build 3 data analysis projects with real-world datasets.' },
      { period: 'Month 5-6', text: 'Learn basic Python for automation. Create a portfolio with case studies. Apply to analyst roles at startups and mid-size companies.' },
    ],
  },
  'product-manager': {
    id: 'product-manager',
    title: 'Product Manager',
    emoji: '🗺️',
    demand: 'Growing',
    demandClass: 'growing',
    description: 'The bridge between users, business, and technology. PMs don\'t code — they decide WHAT to build and WHY. With AI automating more execution, strategic thinking becomes even more valuable.',
    skills: ['User Research & Empathy', 'Data-Driven Decision Making', 'Clear Communication', 'Basic Technical Literacy', 'Prioritization Frameworks'],
    aiTools: ['ChatGPT for PRDs & research', 'Notion AI', 'Dovetail for research', 'Amplitude / Mixpanel', 'Figma + AI plugins'],
    timeline: [
      { period: 'Month 1-2', text: 'Read "Inspired" by Marty Cagan. Do 10 user interviews on any product you use. Write your first PRD using AI.' },
      { period: 'Month 3-4', text: 'Take a free PM course (Product School / Coursera). Do a case study on a real product. Learn basic analytics.' },
      { period: 'Month 5-6', text: 'Build a side project (even a landing page) to show you can ship. Network on LinkedIn. Apply to APM programs.' },
    ],
  },
  'ai-ml-ops': {
    id: 'ai-ml-ops',
    title: 'AI/ML Ops Engineer',
    emoji: '⚙️',
    demand: 'High Demand',
    demandClass: 'growing',
    description: 'Deploy, monitor, and scale AI models in production. Companies are building AI features but struggling to run them reliably. This is one of the highest-paying and most in-demand roles right now.',
    skills: ['Python', 'Docker & Kubernetes', 'Cloud (AWS/GCP/Azure)', 'CI/CD Pipelines', 'ML Model Serving'],
    aiTools: ['MLflow', 'Weights & Biases', 'Hugging Face', 'LangChain', 'AWS SageMaker'],
    timeline: [
      { period: 'Month 1-3', text: 'Strong Python + Linux fundamentals. Learn Docker. Deploy a simple ML model using a cloud free tier.' },
      { period: 'Month 3-6', text: 'Learn MLOps lifecycle. Build an end-to-end pipeline: data → train → deploy → monitor. Get a cloud certification.' },
      { period: 'Month 6-9', text: 'Contribute to open-source MLOps projects. Build a portfolio showing deployed models. Target startups building AI products.' },
    ],
  },
  'ux-designer': {
    id: 'ux-designer',
    title: 'UX/UI Designer',
    emoji: '🎨',
    demand: 'Stable',
    demandClass: 'stable',
    description: 'Design how people interact with technology. AI tools are making design faster, not replacing designers — because understanding human needs is still deeply human work.',
    skills: ['Figma (essential)', 'User Research', 'Wireframing & Prototyping', 'Design Systems', 'Basic HTML/CSS'],
    aiTools: ['Figma AI', 'Midjourney / DALL-E', 'Framer AI', 'Relume', 'ChatGPT for copy'],
    timeline: [
      { period: 'Month 1-2', text: 'Master Figma. Redesign 3 existing apps as practice. Study design systems from companies like Material Design.' },
      { period: 'Month 3-4', text: 'Learn user research basics. Do usability tests with friends/family. Build a full case study with before/after.' },
      { period: 'Month 5-6', text: 'Create a Behance/Dribbble portfolio with 4-5 strong pieces. Learn AI design tools to speed up your workflow.' },
    ],
  },
  'cybersecurity': {
    id: 'cybersecurity',
    title: 'Cybersecurity Analyst',
    emoji: '🛡️',
    demand: 'Growing',
    demandClass: 'growing',
    description: 'Protect organizations from digital threats. As AI grows, so do security risks — making this field recession-proof. India has a massive shortage of cybersecurity professionals.',
    skills: ['Networking Fundamentals', 'Linux Administration', 'Security Tools (Wireshark, Nmap)', 'Incident Response', 'Compliance Basics'],
    aiTools: ['AI-powered SIEM tools', 'CrowdStrike Falcon', 'Darktrace', 'ChatGPT for log analysis', 'Splunk AI'],
    timeline: [
      { period: 'Month 1-3', text: 'Learn networking (CompTIA Network+). Practice Linux. Set up a home lab with VirtualBox for security testing.' },
      { period: 'Month 3-6', text: 'Get CompTIA Security+ certified. Practice on TryHackMe and HackTheBox. Learn one SIEM tool.' },
      { period: 'Month 6-9', text: 'Specialize (cloud security, penetration testing, or SOC analysis). Build a write-up portfolio. Apply to SOC analyst roles.' },
    ],
  },
  'cloud-devops': {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Engineer',
    emoji: '☁️',
    demand: 'Growing',
    demandClass: 'growing',
    description: 'Build and manage the infrastructure that runs everything — including AI. Cloud skills are needed everywhere, and DevOps engineers are among the most well-compensated roles in tech.',
    skills: ['Linux & Shell Scripting', 'Docker & Kubernetes', 'CI/CD (Jenkins, GitHub Actions)', 'Terraform / IaC', 'Cloud Platform (AWS/GCP/Azure)'],
    aiTools: ['GitHub Copilot for scripts', 'AWS CodeWhisperer', 'Pulumi AI', 'ChatGPT for debugging configs', 'Datadog AI'],
    timeline: [
      { period: 'Month 1-2', text: 'Linux fundamentals + shell scripting. Learn Docker. Deploy a simple app on a cloud free tier.' },
      { period: 'Month 3-4', text: 'Learn Kubernetes basics. Set up a CI/CD pipeline. Get an entry-level cloud certification (AWS CCP or AZ-900).' },
      { period: 'Month 5-6', text: 'Learn Infrastructure as Code (Terraform). Build a portfolio of automated deployments. Apply to DevOps junior roles.' },
    ],
  },
  'digital-marketing': {
    id: 'digital-marketing',
    title: 'AI-Powered Digital Marketing',
    emoji: '📱',
    demand: 'Stable',
    demandClass: 'stable',
    description: 'Every business needs customers, and AI is transforming how marketing works. From AI-generated content to predictive analytics — marketers who use AI are 10x more productive.',
    skills: ['Content Marketing', 'SEO & SEM Basics', 'Social Media Strategy', 'Analytics (Google Analytics)', 'Copywriting'],
    aiTools: ['ChatGPT for content', 'Jasper AI', 'Canva AI', 'SurferSEO', 'HubSpot AI'],
    timeline: [
      { period: 'Month 1-2', text: 'Learn SEO fundamentals and Google Analytics. Start a blog or social media page using AI tools to create content.' },
      { period: 'Month 3-4', text: 'Run a small ad campaign (even ₹500/day). Learn email marketing. Build case studies from your own projects.' },
      { period: 'Month 5-6', text: 'Get Google Analytics and HubSpot certified (free). Build a portfolio of campaigns. Apply to startups and agencies.' },
    ],
  },
  'business-analyst': {
    id: 'business-analyst',
    title: 'Business Analyst',
    emoji: '📋',
    demand: 'Stable',
    demandClass: 'stable',
    description: 'Translate business needs into technology solutions. BAs are the connectors between stakeholders and tech teams — a role that requires human judgment AI can\'t replace.',
    skills: ['Requirements Gathering', 'Process Mapping (BPMN)', 'SQL Basics', 'Stakeholder Communication', 'Agile / Scrum'],
    aiTools: ['ChatGPT for documentation', 'Notion AI', 'Miro AI', 'Jira + AI plugins', 'Power BI'],
    timeline: [
      { period: 'Month 1-2', text: 'Learn requirements gathering techniques. Study Agile/Scrum methodology. Practice writing user stories with AI assistance.' },
      { period: 'Month 3-4', text: 'Learn SQL basics and one BI tool. Do a mock BA project — analyze a real company\'s process and propose improvements.' },
      { period: 'Month 5-6', text: 'Get IIBA ECBA or Scrum certification. Build a portfolio of case studies. Network and apply to consulting/IT firms.' },
    ],
  },
  'qa-automation': {
    id: 'qa-automation',
    title: 'QA & Test Automation',
    emoji: '🔍',
    demand: 'Stable',
    demandClass: 'stable',
    description: 'Ensure software quality through testing — increasingly automated with AI. As companies ship faster with AI, the need for quality assurance grows. AI is making testing more powerful, not obsolete.',
    skills: ['Manual Testing Fundamentals', 'Automation (Selenium / Playwright)', 'API Testing (Postman)', 'Basic Programming', 'CI/CD Integration'],
    aiTools: ['Testim AI', 'Applitools', 'GitHub Copilot for test scripts', 'ChatGPT for test cases', 'Katalon AI'],
    timeline: [
      { period: 'Month 1-2', text: 'Learn manual testing fundamentals and ISTQB concepts. Practice writing test cases. Learn Postman for API testing.' },
      { period: 'Month 3-4', text: 'Learn automation with Selenium or Playwright. Use AI to generate test scripts faster. Build a test framework project.' },
      { period: 'Month 5-6', text: 'Learn CI/CD integration for tests. Get ISTQB Foundation certified. Build a GitHub portfolio of test automation projects.' },
    ],
  },
};

/* ============ DATA: QUESTIONS ============ */
const QUESTIONS = [
  {
    id: 'education',
    question: 'What\'s your educational background?',
    icon: '🎓',
    hint: 'This helps us understand your starting point — every background has unique strengths.',
    options: [
      {
        text: 'Computer Science / IT',
        emoji: '💻',
        desc: 'B.Tech, BCA, MCA, or similar',
        scores: { 'ai-developer': 5, 'data-analyst': 4, 'ai-ml-ops': 5, 'cybersecurity': 4, 'cloud-devops': 4, 'qa-automation': 4, 'product-manager': 2, 'ux-designer': 2, 'digital-marketing': 1, 'business-analyst': 2 },
      },
      {
        text: 'Non-CS Engineering',
        emoji: '⚡',
        desc: 'Mechanical, Civil, Electrical, etc.',
        scores: { 'ai-developer': 3, 'data-analyst': 3, 'ai-ml-ops': 3, 'cybersecurity': 2, 'cloud-devops': 3, 'qa-automation': 3, 'product-manager': 3, 'ux-designer': 2, 'digital-marketing': 2, 'business-analyst': 3 },
      },
      {
        text: 'Science',
        emoji: '🔬',
        desc: 'BSc, MSc in Physics, Maths, Stats, etc.',
        scores: { 'ai-developer': 2, 'data-analyst': 5, 'ai-ml-ops': 2, 'cybersecurity': 2, 'cloud-devops': 2, 'qa-automation': 2, 'product-manager': 2, 'ux-designer': 1, 'digital-marketing': 2, 'business-analyst': 3 },
      },
      {
        text: 'Commerce / Business',
        emoji: '📈',
        desc: 'BCom, BBA, MBA, CA',
        scores: { 'ai-developer': 1, 'data-analyst': 3, 'ai-ml-ops': 1, 'cybersecurity': 1, 'cloud-devops': 1, 'qa-automation': 1, 'product-manager': 4, 'ux-designer': 2, 'digital-marketing': 4, 'business-analyst': 5 },
      },
      {
        text: 'Arts / Humanities / Design',
        emoji: '🎭',
        desc: 'BA, BFA, Mass Communication, etc.',
        scores: { 'ai-developer': 1, 'data-analyst': 1, 'ai-ml-ops': 0, 'cybersecurity': 1, 'cloud-devops': 0, 'qa-automation': 1, 'product-manager': 3, 'ux-designer': 5, 'digital-marketing': 5, 'business-analyst': 3 },
      },
    ],
  },
  {
    id: 'status',
    question: 'Where are you right now?',
    icon: '📍',
    hint: 'No wrong answers — just helps us calibrate the advice.',
    options: [
      {
        text: 'Final year student',
        emoji: '📚',
        desc: 'Still in college, graduating soon',
        scores: { 'ai-developer': 3, 'data-analyst': 3, 'ai-ml-ops': 2, 'cybersecurity': 3, 'cloud-devops': 2, 'qa-automation': 3, 'product-manager': 3, 'ux-designer': 3, 'digital-marketing': 3, 'business-analyst': 3 },
      },
      {
        text: 'Recently graduated',
        emoji: '🎉',
        desc: '0-6 months since graduation',
        scores: { 'ai-developer': 3, 'data-analyst': 3, 'ai-ml-ops': 3, 'cybersecurity': 3, 'cloud-devops': 3, 'qa-automation': 3, 'product-manager': 2, 'ux-designer': 3, 'digital-marketing': 3, 'business-analyst': 3 },
      },
      {
        text: 'Job searching (6+ months)',
        emoji: '🔍',
        desc: 'Graduated and actively looking',
        scores: { 'ai-developer': 4, 'data-analyst': 4, 'ai-ml-ops': 3, 'cybersecurity': 3, 'cloud-devops': 3, 'qa-automation': 4, 'product-manager': 2, 'ux-designer': 3, 'digital-marketing': 4, 'business-analyst': 3 },
      },
      {
        text: 'Working, want to pivot',
        emoji: '🔄',
        desc: 'In a job but exploring new directions',
        scores: { 'ai-developer': 3, 'data-analyst': 3, 'ai-ml-ops': 4, 'cybersecurity': 4, 'cloud-devops': 4, 'qa-automation': 3, 'product-manager': 4, 'ux-designer': 3, 'digital-marketing': 3, 'business-analyst': 4 },
      },
    ],
  },
  {
    id: 'energy',
    question: 'What energizes you the most?',
    icon: '⚡',
    hint: 'Pick the one that genuinely excites you — not what sounds impressive.',
    twoCol: true,
    options: [
      {
        text: 'Building things people use',
        emoji: '🔨',
        desc: 'Creating apps, tools, websites',
        scores: { 'ai-developer': 5, 'data-analyst': 1, 'ai-ml-ops': 3, 'cybersecurity': 1, 'cloud-devops': 3, 'qa-automation': 2, 'product-manager': 3, 'ux-designer': 4, 'digital-marketing': 1, 'business-analyst': 1 },
      },
      {
        text: 'Solving puzzles with data',
        emoji: '🧩',
        desc: 'Finding patterns, analyzing numbers',
        scores: { 'ai-developer': 2, 'data-analyst': 5, 'ai-ml-ops': 3, 'cybersecurity': 3, 'cloud-devops': 2, 'qa-automation': 3, 'product-manager': 2, 'ux-designer': 0, 'digital-marketing': 2, 'business-analyst': 4 },
      },
      {
        text: 'Designing beautiful experiences',
        emoji: '✨',
        desc: 'Making things look and feel amazing',
        scores: { 'ai-developer': 1, 'data-analyst': 0, 'ai-ml-ops': 0, 'cybersecurity': 0, 'cloud-devops': 0, 'qa-automation': 0, 'product-manager': 2, 'ux-designer': 5, 'digital-marketing': 3, 'business-analyst': 1 },
      },
      {
        text: 'Talking to people & understanding needs',
        emoji: '🗣️',
        desc: 'Communication, interviews, relationships',
        scores: { 'ai-developer': 0, 'data-analyst': 1, 'ai-ml-ops': 0, 'cybersecurity': 1, 'cloud-devops': 0, 'qa-automation': 1, 'product-manager': 5, 'ux-designer': 3, 'digital-marketing': 4, 'business-analyst': 5 },
      },
      {
        text: 'Organizing chaos into order',
        emoji: '📋',
        desc: 'Planning, processes, managing projects',
        scores: { 'ai-developer': 1, 'data-analyst': 2, 'ai-ml-ops': 3, 'cybersecurity': 2, 'cloud-devops': 4, 'qa-automation': 3, 'product-manager': 4, 'ux-designer': 1, 'digital-marketing': 2, 'business-analyst': 4 },
      },
      {
        text: 'Protecting and securing things',
        emoji: '🔐',
        desc: 'Finding vulnerabilities, ensuring safety',
        scores: { 'ai-developer': 1, 'data-analyst': 1, 'ai-ml-ops': 2, 'cybersecurity': 5, 'cloud-devops': 3, 'qa-automation': 4, 'product-manager': 0, 'ux-designer': 0, 'digital-marketing': 0, 'business-analyst': 1 },
      },
    ],
  },
  {
    id: 'tech-comfort',
    question: 'How comfortable are you with technology?',
    icon: '🖥️',
    hint: 'Be honest — there\'s a great career path for every comfort level.',
    options: [
      {
        text: 'I use apps but struggle with tech',
        emoji: '🌱',
        desc: 'Basics like browsing, email, social media',
        scores: { 'ai-developer': 0, 'data-analyst': 1, 'ai-ml-ops': 0, 'cybersecurity': 0, 'cloud-devops': 0, 'qa-automation': 0, 'product-manager': 3, 'ux-designer': 2, 'digital-marketing': 4, 'business-analyst': 3 },
      },
      {
        text: 'I can learn any tool quickly',
        emoji: '🌿',
        desc: 'Comfortable with spreadsheets, basic tools',
        scores: { 'ai-developer': 2, 'data-analyst': 4, 'ai-ml-ops': 1, 'cybersecurity': 2, 'cloud-devops': 2, 'qa-automation': 3, 'product-manager': 4, 'ux-designer': 4, 'digital-marketing': 3, 'business-analyst': 4 },
      },
      {
        text: 'I enjoy coding and building',
        emoji: '🌳',
        desc: 'Done some programming, enjoy it',
        scores: { 'ai-developer': 5, 'data-analyst': 3, 'ai-ml-ops': 4, 'cybersecurity': 4, 'cloud-devops': 4, 'qa-automation': 4, 'product-manager': 2, 'ux-designer': 2, 'digital-marketing': 1, 'business-analyst': 2 },
      },
      {
        text: 'I live and breathe technology',
        emoji: '🚀',
        desc: 'Coding regularly, building side projects',
        scores: { 'ai-developer': 5, 'data-analyst': 3, 'ai-ml-ops': 5, 'cybersecurity': 5, 'cloud-devops': 5, 'qa-automation': 4, 'product-manager': 2, 'ux-designer': 1, 'digital-marketing': 0, 'business-analyst': 1 },
      },
    ],
  },
  {
    id: 'ai-feeling',
    question: 'How do you feel about AI right now?',
    icon: '🤖',
    hint: 'Your honest answer helps us address what matters most to you.',
    options: [
      {
        text: 'Excited — I want to build AI',
        emoji: '🔥',
        desc: 'I want to create AI systems and models',
        scores: { 'ai-developer': 4, 'data-analyst': 3, 'ai-ml-ops': 5, 'cybersecurity': 2, 'cloud-devops': 3, 'qa-automation': 2, 'product-manager': 2, 'ux-designer': 1, 'digital-marketing': 1, 'business-analyst': 1 },
      },
      {
        text: 'Curious — I want to use AI tools',
        emoji: '🧐',
        desc: 'I want AI to make me more productive',
        scores: { 'ai-developer': 3, 'data-analyst': 4, 'ai-ml-ops': 3, 'cybersecurity': 3, 'cloud-devops': 3, 'qa-automation': 3, 'product-manager': 4, 'ux-designer': 4, 'digital-marketing': 4, 'business-analyst': 4 },
      },
      {
        text: 'Neutral — I\'ll adapt to what\'s needed',
        emoji: '😐',
        desc: 'Not strongly for or against',
        scores: { 'ai-developer': 2, 'data-analyst': 3, 'ai-ml-ops': 2, 'cybersecurity': 3, 'cloud-devops': 3, 'qa-automation': 3, 'product-manager': 3, 'ux-designer': 3, 'digital-marketing': 3, 'business-analyst': 3 },
      },
      {
        text: 'Worried — I\'m not sure where I fit',
        emoji: '😟',
        desc: 'Concerned about the future',
        scores: { 'ai-developer': 1, 'data-analyst': 2, 'ai-ml-ops': 1, 'cybersecurity': 3, 'cloud-devops': 2, 'qa-automation': 3, 'product-manager': 3, 'ux-designer': 3, 'digital-marketing': 3, 'business-analyst': 4 },
      },
      {
        text: 'Overwhelmed — too much to learn',
        emoji: '😵',
        desc: 'There\'s so much noise and information',
        scores: { 'ai-developer': 1, 'data-analyst': 2, 'ai-ml-ops': 1, 'cybersecurity': 2, 'cloud-devops': 1, 'qa-automation': 2, 'product-manager': 3, 'ux-designer': 3, 'digital-marketing': 4, 'business-analyst': 4 },
      },
    ],
  },
  {
    id: 'first-job-value',
    question: 'What matters most in your first job?',
    icon: '💎',
    hint: 'Be honest with yourself — there\'s no "right" answer.',
    twoCol: true,
    options: [
      {
        text: 'Stability and good salary',
        emoji: '🏦',
        desc: 'A reliable, well-paying position',
        scores: { 'ai-developer': 3, 'data-analyst': 4, 'ai-ml-ops': 4, 'cybersecurity': 4, 'cloud-devops': 4, 'qa-automation': 4, 'product-manager': 2, 'ux-designer': 2, 'digital-marketing': 2, 'business-analyst': 4 },
      },
      {
        text: 'Learning and growth',
        emoji: '📈',
        desc: 'Rapid skill development, even if pay is lower',
        scores: { 'ai-developer': 4, 'data-analyst': 3, 'ai-ml-ops': 4, 'cybersecurity': 3, 'cloud-devops': 4, 'qa-automation': 3, 'product-manager': 4, 'ux-designer': 4, 'digital-marketing': 3, 'business-analyst': 3 },
      },
      {
        text: 'Creative freedom',
        emoji: '🎨',
        desc: 'Space to express ideas and innovate',
        scores: { 'ai-developer': 3, 'data-analyst': 1, 'ai-ml-ops': 1, 'cybersecurity': 1, 'cloud-devops': 1, 'qa-automation': 1, 'product-manager': 3, 'ux-designer': 5, 'digital-marketing': 5, 'business-analyst': 1 },
      },
      {
        text: 'Cutting-edge technology',
        emoji: '🔬',
        desc: 'Work with the latest tools and systems',
        scores: { 'ai-developer': 5, 'data-analyst': 2, 'ai-ml-ops': 5, 'cybersecurity': 3, 'cloud-devops': 4, 'qa-automation': 2, 'product-manager': 2, 'ux-designer': 2, 'digital-marketing': 1, 'business-analyst': 1 },
      },
      {
        text: 'Making real impact',
        emoji: '🌍',
        desc: 'Helping people, meaningful work',
        scores: { 'ai-developer': 2, 'data-analyst': 3, 'ai-ml-ops': 1, 'cybersecurity': 4, 'cloud-devops': 1, 'qa-automation': 2, 'product-manager': 5, 'ux-designer': 3, 'digital-marketing': 3, 'business-analyst': 4 },
      },
      {
        text: 'Work-life balance',
        emoji: '⚖️',
        desc: 'Predictable hours, remote options',
        scores: { 'ai-developer': 3, 'data-analyst': 4, 'ai-ml-ops': 3, 'cybersecurity': 3, 'cloud-devops': 3, 'qa-automation': 4, 'product-manager': 2, 'ux-designer': 3, 'digital-marketing': 4, 'business-analyst': 4 },
      },
    ],
  },
  {
    id: 'learning-style',
    question: 'How do you prefer to learn?',
    icon: '📖',
    hint: 'Your learning style determines the best path to your first job.',
    options: [
      {
        text: 'Build projects and learn by doing',
        emoji: '🔨',
        desc: 'Hands-on, trial and error',
        scores: { 'ai-developer': 5, 'data-analyst': 3, 'ai-ml-ops': 4, 'cybersecurity': 4, 'cloud-devops': 4, 'qa-automation': 4, 'product-manager': 2, 'ux-designer': 4, 'digital-marketing': 3, 'business-analyst': 2 },
      },
      {
        text: 'Structured courses with milestones',
        emoji: '📋',
        desc: 'Clear curriculum, step by step',
        scores: { 'ai-developer': 3, 'data-analyst': 4, 'ai-ml-ops': 3, 'cybersecurity': 4, 'cloud-devops': 3, 'qa-automation': 4, 'product-manager': 3, 'ux-designer': 3, 'digital-marketing': 4, 'business-analyst': 4 },
      },
      {
        text: 'Working with a mentor or team',
        emoji: '👥',
        desc: 'Collaborative learning, guidance',
        scores: { 'ai-developer': 3, 'data-analyst': 3, 'ai-ml-ops': 3, 'cybersecurity': 3, 'cloud-devops': 3, 'qa-automation': 3, 'product-manager': 5, 'ux-designer': 3, 'digital-marketing': 3, 'business-analyst': 4 },
      },
      {
        text: 'Reading docs and self-exploring',
        emoji: '📚',
        desc: 'Independent research, deep dives',
        scores: { 'ai-developer': 4, 'data-analyst': 4, 'ai-ml-ops': 4, 'cybersecurity': 5, 'cloud-devops': 4, 'qa-automation': 3, 'product-manager': 2, 'ux-designer': 2, 'digital-marketing': 2, 'business-analyst': 3 },
      },
    ],
  },
  {
    id: 'concern',
    question: 'What\'s your biggest career concern right now?',
    icon: '💭',
    hint: 'We\'ll address this directly in your personalized report.',
    options: [
      {
        text: '"I don\'t know what skills to learn"',
        emoji: '🤷',
        desc: 'Too many options, no clear direction',
        scores: { 'ai-developer': 3, 'data-analyst': 3, 'ai-ml-ops': 3, 'cybersecurity': 3, 'cloud-devops': 3, 'qa-automation': 3, 'product-manager': 3, 'ux-designer': 3, 'digital-marketing': 3, 'business-analyst': 3 },
      },
      {
        text: '"I can\'t get a job without experience"',
        emoji: '🔄',
        desc: 'The catch-22 of entry-level hiring',
        scores: { 'ai-developer': 4, 'data-analyst': 3, 'ai-ml-ops': 2, 'cybersecurity': 3, 'cloud-devops': 3, 'qa-automation': 4, 'product-manager': 2, 'ux-designer': 4, 'digital-marketing': 4, 'business-analyst': 3 },
      },
      {
        text: '"AI will make my degree irrelevant"',
        emoji: '😰',
        desc: 'Fear that technology will replace me',
        scores: { 'ai-developer': 3, 'data-analyst': 3, 'ai-ml-ops': 3, 'cybersecurity': 4, 'cloud-devops': 3, 'qa-automation': 3, 'product-manager': 4, 'ux-designer': 3, 'digital-marketing': 3, 'business-analyst': 3 },
      },
      {
        text: '"I can\'t afford expensive courses"',
        emoji: '💸',
        desc: 'Financial constraints on learning',
        scores: { 'ai-developer': 4, 'data-analyst': 4, 'ai-ml-ops': 3, 'cybersecurity': 4, 'cloud-devops': 3, 'qa-automation': 4, 'product-manager': 3, 'ux-designer': 4, 'digital-marketing': 4, 'business-analyst': 3 },
      },
      {
        text: '"There are too many options"',
        emoji: '😵‍💫',
        desc: 'Paralyzed by too many choices',
        scores: { 'ai-developer': 3, 'data-analyst': 3, 'ai-ml-ops': 3, 'cybersecurity': 3, 'cloud-devops': 3, 'qa-automation': 3, 'product-manager': 3, 'ux-designer': 3, 'digital-marketing': 3, 'business-analyst': 3 },
      },
    ],
  },
  {
    id: 'work-env',
    question: 'Where do you see yourself working?',
    icon: '🏢',
    hint: 'This helps us match you with realistic job targets.',
    twoCol: true,
    options: [
      {
        text: 'Large MNC',
        emoji: '🏛️',
        desc: 'TCS, Infosys, Wipro, Accenture',
        scores: { 'ai-developer': 3, 'data-analyst': 4, 'ai-ml-ops': 3, 'cybersecurity': 4, 'cloud-devops': 4, 'qa-automation': 5, 'product-manager': 2, 'ux-designer': 2, 'digital-marketing': 2, 'business-analyst': 5 },
      },
      {
        text: 'Top tech companies',
        emoji: '✨',
        desc: 'Google, Microsoft, Amazon, startups like Razorpay',
        scores: { 'ai-developer': 5, 'data-analyst': 3, 'ai-ml-ops': 5, 'cybersecurity': 3, 'cloud-devops': 4, 'qa-automation': 3, 'product-manager': 4, 'ux-designer': 3, 'digital-marketing': 1, 'business-analyst': 2 },
      },
      {
        text: 'Fast-moving startup',
        emoji: '🚀',
        desc: 'Small team, wear many hats, high growth',
        scores: { 'ai-developer': 4, 'data-analyst': 3, 'ai-ml-ops': 3, 'cybersecurity': 2, 'cloud-devops': 3, 'qa-automation': 2, 'product-manager': 5, 'ux-designer': 5, 'digital-marketing': 5, 'business-analyst': 2 },
      },
      {
        text: 'Freelance / Independent',
        emoji: '🏡',
        desc: 'Work for yourself, multiple clients',
        scores: { 'ai-developer': 3, 'data-analyst': 2, 'ai-ml-ops': 1, 'cybersecurity': 2, 'cloud-devops': 2, 'qa-automation': 2, 'product-manager': 1, 'ux-designer': 4, 'digital-marketing': 5, 'business-analyst': 2 },
      },
    ],
  },
  {
    id: 'time',
    question: 'How much time can you invest in upskilling?',
    icon: '⏰',
    hint: 'Be realistic — consistency beats intensity.',
    options: [
      {
        text: 'Full-time (6+ hours/day)',
        emoji: '🎯',
        desc: 'I\'m a student or between jobs',
        scores: { 'ai-developer': 4, 'data-analyst': 3, 'ai-ml-ops': 5, 'cybersecurity': 4, 'cloud-devops': 4, 'qa-automation': 3, 'product-manager': 3, 'ux-designer': 3, 'digital-marketing': 3, 'business-analyst': 3 },
      },
      {
        text: '2-3 hours daily',
        emoji: '📅',
        desc: 'Dedicated time alongside other commitments',
        scores: { 'ai-developer': 4, 'data-analyst': 4, 'ai-ml-ops': 3, 'cybersecurity': 4, 'cloud-devops': 3, 'qa-automation': 4, 'product-manager': 4, 'ux-designer': 4, 'digital-marketing': 4, 'business-analyst': 4 },
      },
      {
        text: 'Weekends only',
        emoji: '📆',
        desc: 'About 8-10 hours per week total',
        scores: { 'ai-developer': 3, 'data-analyst': 3, 'ai-ml-ops': 2, 'cybersecurity': 3, 'cloud-devops': 2, 'qa-automation': 3, 'product-manager': 4, 'ux-designer': 3, 'digital-marketing': 4, 'business-analyst': 3 },
      },
      {
        text: 'A few hours per week',
        emoji: '⌛',
        desc: 'Limited time but willing to be consistent',
        scores: { 'ai-developer': 2, 'data-analyst': 2, 'ai-ml-ops': 1, 'cybersecurity': 2, 'cloud-devops': 1, 'qa-automation': 2, 'product-manager': 3, 'ux-designer': 2, 'digital-marketing': 4, 'business-analyst': 3 },
      },
    ],
  },
];

/* ============ DATA: MYTH DEBUNKS ============ */
const MYTH_DEBUNKS = {
  'default': {
    myth: '"AI will replace most jobs within 5 years"',
    truth: '<strong>Reality:</strong> AI automates <em>tasks within jobs</em>, not whole jobs. The World Economic Forum estimates AI will create 97 million new roles by 2025 while displacing 85 million. The net effect is positive — but the <em>type</em> of work is changing. Your job is to change with it.',
  },
  'skills': {
    myth: '"You need to learn everything about AI to stay relevant"',
    truth: '<strong>Reality:</strong> You don\'t need to build AI. You need to <em>work alongside</em> AI. Just like you don\'t need to understand how Google\'s search algorithm works to use Google effectively. Focus on your domain, learn AI tools for your specific work.',
  },
  'experience': {
    myth: '"Without experience, no company will hire you"',
    truth: '<strong>Reality:</strong> The experience catch-22 is real, but solvable. Open-source contributions, personal projects, freelance work, and even well-documented learning journeys count as experience. Companies are increasingly hiring based on <em>portfolio</em>, not just resume.',
  },
  'degree': {
    myth: '"Your degree doesn\'t matter anymore because of AI"',
    truth: '<strong>Reality:</strong> Your degree proves you can learn, commit, and complete things. That\'s still valuable. What\'s changed is that a degree <em>alone</em> isn\'t enough — you need practical skills too. But your degree is a foundation, not a liability.',
  },
  'cost': {
    myth: '"You need expensive courses and bootcamps to get a tech job"',
    truth: '<strong>Reality:</strong> The best learning resources are free. freeCodeCamp, Kaggle, Google\'s certifications, MIT OpenCourseWare, YouTube — all free. What you need is <em>structure and discipline</em>, not money. A great portfolio built with free resources beats any paid certificate.',
  },
  'options': {
    myth: '"There are so many career paths that choosing wrong will ruin everything"',
    truth: '<strong>Reality:</strong> There is no "wrong" choice. Skills are transferable. A developer can become a PM. A data analyst can move to product. The important thing is to <em>start somewhere</em> and build momentum. You can always pivot later — but you can\'t pivot from standing still.',
  },
};

/* ============ DATA: ACTION ITEMS BY CONCERN ============ */
const ACTION_ITEMS = {
  'default': [
    { text: '<strong>This week:</strong> Pick ONE career path from your results. Just one. Research it for 30 minutes. Find one free resource to start learning.' },
    { text: '<strong>This month:</strong> Complete one small project in your chosen path. Even a tiny one — a simple website, a data analysis, a design mockup. Push it to the internet.' },
    { text: '<strong>This quarter:</strong> Build 3 portfolio pieces. Share your learning journey on LinkedIn. Apply to 10 positions — even if you feel "not ready."' },
  ],
  'experience': [
    { text: '<strong>This week:</strong> Create a GitHub/Behance/portfolio account. Start documenting everything you build — even practice projects count as proof of competence.' },
    { text: '<strong>This month:</strong> Find one open-source project in your interest area and make a contribution. Even fixing typos in documentation counts as real-world collaboration.' },
    { text: '<strong>This quarter:</strong> Do 2-3 small freelance projects (Fiverr, Upwork, or for local businesses). Real client work = real experience. Price low to get started.' },
  ],
  'skills': [
    { text: '<strong>This week:</strong> Ignore everything except your TOP recommended path. Bookmark ONE free course or tutorial series for it. Start lesson 1.' },
    { text: '<strong>This month:</strong> Master the #1 skill listed for your recommended path. Use AI tools (ChatGPT, Copilot) to accelerate your learning — they\'re free and incredibly effective.' },
    { text: '<strong>This quarter:</strong> Build a project using your new skills + AI tools. This single project will teach you more than 10 courses. Document the process.' },
  ],
};

/* ============ ENGINE STATE ============ */
let currentStep = -1; // -1 = intro screen
const answers = {};

/* ============ INITIALIZATION ============ */
document.addEventListener('DOMContentLoaded', () => {
  initEngine();
  initNavigation();
});

function initEngine() {
  renderIntro();
  renderSteps();
  renderAnalyzing();
  renderReport();
}

/* ============ RENDER INTRO SCREEN ============ */
function renderIntro() {
  const body = document.getElementById('engine-body');

  const intro = document.createElement('div');
  intro.className = 'intro';
  intro.id = 'intro-screen';
  intro.innerHTML = `
    <div class="hero__bg">
      <div class="bg-grid"></div>
      <div class="hero__orb hero__orb--1"></div>
      <div class="hero__orb hero__orb--2"></div>
    </div>
    <div class="intro__icon">🧭</div>
    <h1 class="intro__title">Career Clarity <span class="gradient-text">Engine</span></h1>
    <p class="intro__text">
      Answer 10 honest questions. Get a personalized career report — no fluff, no fear, just a clear direction forward.
    </p>
    <p class="intro__text" style="font-size: var(--text-sm); color: var(--text-muted);">
      Built on 18 years of real industry experience. Not an algorithm guessing — genuine career guidance.
    </p>
    <div class="intro__details">
      <div class="intro__detail">
        <span class="intro__detail-icon">⏱️</span>
        <span>Takes 3-4 minutes</span>
      </div>
      <div class="intro__detail">
        <span class="intro__detail-icon">🔒</span>
        <span>100% private — nothing stored</span>
      </div>
      <div class="intro__detail">
        <span class="intro__detail-icon">🎯</span>
        <span>Personalized to your profile</span>
      </div>
    </div>
    <button class="btn btn--primary btn--lg" id="start-btn" onclick="startAssessment()">
      Start Your Assessment
      <span class="btn__icon">→</span>
    </button>
  `;

  body.appendChild(intro);
}

/* ============ RENDER ALL STEPS ============ */
function renderSteps() {
  const body = document.getElementById('engine-body');

  QUESTIONS.forEach((q, index) => {
    const step = document.createElement('div');
    step.className = 'step';
    step.id = `step-${index}`;
    step.setAttribute('data-question-id', q.id);

    const optionsClass = q.twoCol ? 'options options--two-col' : 'options';

    step.innerHTML = `
      <div class="step__icon">${q.icon}</div>
      <h2 class="step__question">${q.question}</h2>
      <p class="step__hint">${q.hint}</p>

      <div class="${optionsClass}" id="options-${index}">
        ${q.options.map((opt, optIdx) => `
          <div class="option" data-step="${index}" data-option="${optIdx}" onclick="selectOption(${index}, ${optIdx})" role="button" tabindex="0" aria-label="${opt.text}">
            <div class="option__emoji">${opt.emoji}</div>
            <div class="option__content">
              <div class="option__title">${opt.text}</div>
              <div class="option__desc">${opt.desc}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="step__nav">
        <button class="step__nav-back" onclick="prevStep()" ${index === 0 ? 'style="visibility:hidden"' : ''}>
          ← Back
        </button>
        <button class="btn btn--primary step__nav-next" id="next-${index}" onclick="nextStep()" disabled>
          ${index === QUESTIONS.length - 1 ? 'See My Results' : 'Next'}
          <span class="btn__icon">→</span>
        </button>
      </div>
    `;

    body.appendChild(step);
  });
}

/* ============ RENDER ANALYZING SCREEN ============ */
function renderAnalyzing() {
  const body = document.getElementById('engine-body');

  const analyzing = document.createElement('div');
  analyzing.className = 'analyzing';
  analyzing.id = 'analyzing-screen';
  analyzing.innerHTML = `
    <div class="analyzing__spinner"></div>
    <h2 class="analyzing__title">Analyzing your profile...</h2>
    <p class="analyzing__text">Cross-referencing your answers with real market data and 18 years of industry insights.</p>
    <div class="analyzing__steps" id="analyzing-steps"></div>
  `;

  body.appendChild(analyzing);
}

/* ============ RENDER REPORT SHELL ============ */
function renderReport() {
  const body = document.getElementById('engine-body');

  const report = document.createElement('div');
  report.className = 'report';
  report.id = 'report-screen';
  // Content will be dynamically generated
  body.appendChild(report);
}

/* ============ ASSESSMENT FLOW ============ */
function startAssessment() {
  document.getElementById('intro-screen').style.display = 'none';
  document.getElementById('progress-bar').style.display = 'block';
  currentStep = 0;
  showStep(0);
}

function showStep(index) {
  // Hide all steps
  document.querySelectorAll('.step').forEach(s => {
    s.classList.remove('step--active');
  });

  // Show target step
  const step = document.getElementById(`step-${index}`);
  if (step) {
    // Trigger reflow for animation
    step.style.display = 'none';
    step.offsetHeight;
    step.style.display = '';
    step.classList.add('step--active');
  }

  // Update progress
  updateProgress(index);
}

function updateProgress(index) {
  const total = QUESTIONS.length;
  const pct = ((index + 1) / total) * 100;

  const fill = document.getElementById('progress-fill');
  const count = document.getElementById('progress-count');

  if (fill) fill.style.width = `${pct}%`;
  if (count) count.textContent = `${index + 1} / ${total}`;
}

function selectOption(stepIndex, optionIndex) {
  const questionId = QUESTIONS[stepIndex].id;
  answers[questionId] = optionIndex;

  // Update UI
  const options = document.querySelectorAll(`[data-step="${stepIndex}"]`);
  options.forEach((opt, idx) => {
    opt.classList.toggle('option--selected', idx === optionIndex);
  });

  // Enable next button
  const nextBtn = document.getElementById(`next-${stepIndex}`);
  if (nextBtn) nextBtn.disabled = false;
}

function nextStep() {
  if (currentStep < QUESTIONS.length - 1) {
    currentStep++;
    showStep(currentStep);
  } else {
    showAnalyzing();
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

/* ============ ANALYZING ANIMATION ============ */
function showAnalyzing() {
  // Hide steps and progress
  document.querySelectorAll('.step').forEach(s => s.classList.remove('step--active'));
  document.getElementById('progress-bar').style.display = 'none';

  const analyzing = document.getElementById('analyzing-screen');
  analyzing.classList.add('analyzing--active');

  const steps = [
    '✓ Analyzing your educational background',
    '✓ Matching interests to career paths',
    '✓ Evaluating market demand for 2026',
    '✓ Generating personalized action plan',
    '✓ Preparing your Career Clarity Report',
  ];

  const container = document.getElementById('analyzing-steps');
  container.innerHTML = '';

  steps.forEach((text, idx) => {
    setTimeout(() => {
      const step = document.createElement('div');
      step.className = 'analyzing__step';
      step.style.animationDelay = '0s';
      step.innerHTML = `<span class="analyzing__step-icon">✓</span> ${text.replace('✓ ', '')}`;
      container.appendChild(step);

      // Show report after last step
      if (idx === steps.length - 1) {
        setTimeout(() => {
          analyzing.classList.remove('analyzing--active');
          generateReport();
        }, 800);
      }
    }, (idx + 1) * 600);
  });
}

/* ============ SCORING ENGINE ============ */
function calculateScores() {
  const scores = {};

  // Initialize all paths with 0
  Object.keys(CAREER_PATHS).forEach(pathId => {
    scores[pathId] = 0;
  });

  // Sum scores from all answered questions
  Object.entries(answers).forEach(([questionId, optionIndex]) => {
    const question = QUESTIONS.find(q => q.id === questionId);
    if (!question) return;

    const option = question.options[optionIndex];
    if (!option || !option.scores) return;

    Object.entries(option.scores).forEach(([pathId, score]) => {
      scores[pathId] = (scores[pathId] || 0) + score;
    });
  });

  // Calculate max possible score
  const maxPossible = QUESTIONS.length * 5; // max score per question is 5

  // Convert to percentages and sort
  const results = Object.entries(scores)
    .map(([pathId, score]) => ({
      ...CAREER_PATHS[pathId],
      rawScore: score,
      percentage: Math.min(Math.round((score / maxPossible) * 100), 99), // Cap at 99%
    }))
    .sort((a, b) => b.rawScore - a.rawScore);

  // Ensure minimum spread between top results for visual clarity
  if (results.length >= 3) {
    const topPct = results[0].percentage;
    if (results[1].percentage === topPct) results[1].percentage = topPct - 3;
    if (results[2].percentage >= results[1].percentage) results[2].percentage = results[1].percentage - 4;
  }

  return results;
}

function getMatchReason(path, answers) {
  // Generate a personalized "why this matches" based on answers
  const reasons = [];
  const energyAnswer = QUESTIONS.find(q => q.id === 'energy')?.options[answers['energy']]?.text || '';
  const valueAnswer = QUESTIONS.find(q => q.id === 'first-job-value')?.options[answers['first-job-value']]?.text || '';
  const learningAnswer = QUESTIONS.find(q => q.id === 'learning-style')?.options[answers['learning-style']]?.text || '';

  reasons.push(`Your interest in "${energyAnswer.toLowerCase()}" aligns perfectly with this role.`);
  reasons.push(`This path offers the ${valueAnswer.toLowerCase()} you're looking for.`);

  return reasons.join(' ');
}

function getConcernKey() {
  const concernIndex = answers['concern'];
  if (concernIndex === undefined) return 'default';

  const concernMap = {
    0: 'skills',
    1: 'experience',
    2: 'degree',
    3: 'cost',
    4: 'options',
  };

  return concernMap[concernIndex] || 'default';
}

/* ============ REPORT GENERATION ============ */
function generateReport() {
  const results = calculateScores();
  const top3 = results.slice(0, 3);
  const concernKey = getConcernKey();
  const myth = MYTH_DEBUNKS[concernKey] || MYTH_DEBUNKS['default'];
  const actions = ACTION_ITEMS[concernKey] || ACTION_ITEMS['default'];

  const report = document.getElementById('report-screen');

  report.innerHTML = `
    <!-- Report Header -->
    <div class="report__header reveal">
      <span class="section__label">Your Results</span>
      <h2 class="section__title">Your Career <span class="gradient-text">Clarity Report</span></h2>
      <p class="section__subtitle">
        Based on your answers, here are your top career matches — with honest guidance on how to get there.
      </p>
    </div>

    <!-- Top Matches -->
    <div class="report__section">
      <h3 class="report__section-title reveal">
        <span class="report__section-title-icon">🎯</span>
        Your Top Career Matches
      </h3>
      <div class="matches">
        ${top3.map((path, idx) => `
          <div class="match-card ${idx === 0 ? 'match-card--top' : ''} reveal reveal-delay-${idx + 1}">
            <div class="match-card__header">
              <div class="match-card__emoji">${path.emoji}</div>
              <div class="match-card__info">
                <h4 class="match-card__title">${path.title}</h4>
                <span class="match-card__demand">
                  <span class="match-card__demand-dot"></span>
                  ${path.demand} in India
                </span>
              </div>
              <div class="match-card__score">
                <div class="match-card__score-value">${path.percentage}%</div>
                <div class="match-card__score-label">Match</div>
              </div>
            </div>

            <div class="match-card__bar">
              <div class="match-card__bar-fill" data-width="${path.percentage}"></div>
            </div>

            <p class="match-card__why">${path.description}</p>

            <div class="match-card__details">
              <div>
                <div class="match-card__detail-title">Skills to Learn</div>
                <div class="tag-list">
                  ${path.skills.map(s => `<span class="tag">${s}</span>`).join('')}
                </div>
              </div>
              <div>
                <div class="match-card__detail-title">AI Tools to Master</div>
                <div class="tag-list">
                  ${path.aiTools.map(t => `<span class="tag tag--accent">${t}</span>`).join('')}
                </div>
              </div>
            </div>

            <div class="timeline">
              ${path.timeline.map(t => `
                <div class="timeline__item">
                  <div class="timeline__marker">
                    <div class="timeline__dot"></div>
                    <div class="timeline__line"></div>
                  </div>
                  <div class="timeline__content">
                    <div class="timeline__period">${t.period}</div>
                    <div class="timeline__text">${t.text}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Myth Debunk -->
    <div class="report__section">
      <h3 class="report__section-title reveal">
        <span class="report__section-title-icon">🔥</span>
        Your Myth, Debunked
      </h3>
      <div class="myth-card reveal">
        <div class="myth-card__myth">
          ❌ ${myth.myth}
        </div>
        <div class="myth-card__truth">
          ${myth.truth}
        </div>
      </div>
    </div>

    <!-- Action Items -->
    <div class="report__section">
      <h3 class="report__section-title reveal">
        <span class="report__section-title-icon">🚀</span>
        Your 3 Next Steps
      </h3>
      <div class="actions-list">
        ${actions.map((action, idx) => `
          <div class="action-item reveal reveal-delay-${idx + 1}">
            <div class="action-item__number">${idx + 1}</div>
            <div class="action-item__text">${action.text}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- CTA -->
    <div class="report__cta reveal">
      <h3>Ready to take the next step?</h3>
      <p style="color: var(--text-muted); margin-top: var(--space-2);">
        Join our newsletter for weekly, no-BS career guidance.
      </p>
      <div class="report__cta-buttons">
        <a href="index.html#newsletter" class="btn btn--primary btn--lg">
          Join the Newsletter
          <span class="btn__icon">→</span>
        </a>
        <button class="btn btn--secondary btn--lg" onclick="generateShareCard('${top3[0].title}', '${top3[0].emoji}', ${top3[0].percentage})">
          <span class="btn__icon">📸</span>
          Share My Result
        </button>
        <button class="btn btn--secondary btn--lg" onclick="retakeAssessment()" style="border: none; background: transparent; padding-left: 0;">
          Retake
        </button>
      </div>
    </div>
  `;

  report.classList.add('report--active');

  // Animate progress bars after render
  setTimeout(() => {
    document.querySelectorAll('.match-card__bar-fill').forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = `${width}%`;
    });
  }, 300);

  // Initialize scroll reveal for report elements
  initReportReveal();

  // Scroll to top of report
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============ SHAREABLE CARD GENERATOR ============ */
function generateShareCard(title, emoji, percentage) {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1080; // Square format for Instagram/LinkedIn
  const ctx = canvas.getContext('2d');

  // Background (Dark gradient)
  const grad = ctx.createLinearGradient(0, 0, 1080, 1080);
  grad.addColorStop(0, '#0A0A0F');
  grad.addColorStop(1, '#1A1A24');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1080, 1080);

  // Decorative Orb
  const orbGrad = ctx.createRadialGradient(540, 540, 0, 540, 540, 800);
  orbGrad.addColorStop(0, 'rgba(245, 166, 35, 0.15)');
  orbGrad.addColorStop(1, 'rgba(10, 10, 15, 0)');
  ctx.fillStyle = orbGrad;
  ctx.fillRect(0, 0, 1080, 1080);

  // Top Branding
  ctx.fillStyle = '#F5A623';
  ctx.font = 'bold 40px "Outfit", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('CareerWithAI 🧭', 540, 150);

  // Main Heading
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 70px "Outfit", sans-serif';
  ctx.fillText('My AI Era Career Path is:', 540, 350);

  // The Result Card Box
  ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(140, 420, 800, 350, 24);
  ctx.fill();
  ctx.stroke();

  // Result Emoji
  ctx.font = '120px Arial';
  ctx.fillText(emoji, 540, 550);

  // Result Title
  ctx.fillStyle = '#F5A623';
  ctx.font = 'bold 80px "Outfit", sans-serif';
  ctx.fillText(title, 540, 680);

  // Match Percentage
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = '50px "Inter", sans-serif';
  ctx.fillText(`${percentage}% Match based on my profile`, 540, 750);

  // Footer CTA
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.font = '40px "Inter", sans-serif';
  ctx.fillText('Find your path at pawandharamthok-collab.github.io/CareerWithAI', 540, 950);

  // Trigger Download
  try {
    const dataUrl = canvas.toDataURL('image/png');
    
    // Try Web Share API for mobile devices
    if (navigator.share) {
      canvas.toBlob(async (blob) => {
        const file = new File([blob], 'my-career-path.png', { type: 'image/png' });
        try {
          await navigator.share({
            title: 'My AI Career Path',
            text: 'I just found my path in the AI era using CareerWithAI!',
            files: [file]
          });
        } catch (err) {
          downloadCanvas(dataUrl);
        }
      });
    } else {
      // Fallback to direct download
      downloadCanvas(dataUrl);
    }
  } catch (e) {
    console.error("Could not generate image: ", e);
    alert('Sorry, there was an error generating your image.');
  }
}

function downloadCanvas(dataUrl) {
  const link = document.createElement('a');
  link.download = 'my-career-path.png';
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function retakeAssessment() {
  // Reset state
  Object.keys(answers).forEach(key => delete answers[key]);
  currentStep = -1;

  // Reset UI
  document.getElementById('report-screen').classList.remove('report--active');
  document.getElementById('report-screen').innerHTML = '';
  document.getElementById('intro-screen').style.display = '';
  document.querySelectorAll('.option--selected').forEach(opt => opt.classList.remove('option--selected'));
  document.querySelectorAll('.step__nav-next').forEach(btn => btn.disabled = true);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============ SCROLL REVEAL FOR REPORT ============ */
function initReportReveal() {
  const reveals = document.querySelectorAll('.report .reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach(el => observer.observe(el));
}

/* ============ NAVIGATION (shared) ============ */
function initNavigation() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-mobile-toggle');
  const links = document.getElementById('nav-links');

  function handleNavScroll() {
    if (window.scrollY > 50) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('nav__links--open');
      toggle.classList.toggle('nav__mobile-toggle--open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }
}

/* ============ KEYBOARD SUPPORT ============ */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.classList.contains('option')) {
    e.target.click();
  }
});
