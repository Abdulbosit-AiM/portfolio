import type { PortfolioData } from '@/types/portfolio'

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Abdulbosit Melikuziev',
    title: 'Product Manager & AI Specialist',
    subtitle: 'Product Manager & AI Specialist with expertise in data analysis, digital transformation, and user-centric technology solutions',
  },
  about: {
    bio: [
      "I'm a detail-oriented and versatile early-career professional with a strong foundation in product management, AI language models, data analysis, and digital education. With hands-on experience in cross-functional collaboration, UX research, and behavioural analytics, I bring a user-first mindset and a strategic approach to building and improving digital tools.",
      "A recent graduate of the University of Manchester with an MSc in Innovation Management and Entrepreneurship, I have applied my academic and technical background to roles in fintech, AI, higher education, and edtech. I'm driven by a passion for digital transformation, data-led decision-making, and inclusive, human-centred technology."
    ],
    education: [
      {
        badge: 'Distinction',
        degree: 'MSc Innovation Management and Entrepreneurship',
        institution: 'University of Manchester, UK',
        period: 'Dec 2024 • Distinction (70%)',
        dissertation: 'Dissertation: "Validating the desirability and feasibility of AI avatars in business schools"',
        details: 'Key modules: Innovation Analysis (R), High-Tech Entrepreneurship, Research Methods'
      },
      {
        badge: 'High GPA',
        degree: 'BSc Economics and Management in ICT',
        institution: 'Tashkent University of Information Technologies, Uzbekistan',
        period: 'Jun 2022 • GPA: 4.46/5.0',
        dissertation: 'Dissertation: "E-commerce in Business Organisation: Case Study of Amazon"',
        details: 'Technical modules: Python, Web Programming, Databases, Project Management'
      }
    ],
    experience: [
      {
        badge: 'Current',
        title: 'Product Manager Intern',
        company: 'Cur8 Capital, London, UK',
        period: 'Jun - Jul 2025',
        description: 'Conducted user research on KYC/EDD workflows and designed fintech features. Built dashboards in Metabase to extract behavioural insights. Drafted product briefs and collaborated in agile sprints and roadmap discussions.'
      },
      {
        badge: 'Freelance',
        title: 'AI / LLM Reviewer',
        company: 'Outlier, Scale AI',
        period: 'Oct 2024 - Present',
        description: 'Evaluated AI-generated responses, ensuring accuracy and clarity. Trained LLMs using domain expertise in economics and finance.'
      },
      {
        title: 'Data Assistant',
        company: 'Times Higher Education, London, UK',
        period: 'Nov 2024 - Jun 2025',
        description: 'Validated and cleaned multilingual (Uzbek/Russian/English) data. Used Excel and Freshdesk to manage data workflows for global university rankings.'
      },
      {
        title: 'Learning & Development Coordinator',
        company: 'Cambridge Learning Centre, Tashkent',
        period: 'Mar 2022 - Sep 2023',
        description: 'Led redesign of training programmes for teachers. Taught 200+ students using communicative approaches.'
      },
      {
        title: 'Programming Instructor',
        company: 'CODDY Coding School, Tashkent',
        period: 'Jan 2021 - Dec 2021',
        description: 'Taught HTML, CSS, JavaScript, and computer science basics to children and adults. Designed age-specific curricula with a 90% student satisfaction rate.'
      }
    ],
    skills: [
      {
        category: 'Product Management',
        items: 'User Research, Agile/Scrum, Product Lifecycle, Behavioural Analytics, UX Research'
      },
      {
        category: 'Technical Skills',
        items: 'Python, JavaScript, R, HTML, CSS, SQL, Git'
      },
      {
        category: 'Tools & Platforms',
        items: 'Metabase, Figma, Jira, Confluence, Power BI, Miro, Notion, ClickUp'
      },
      {
        category: 'Languages',
        items: 'English (Fluent), Uzbek (Native), Russian (Native), German (Basic), Turkish (Basic)'
      }
    ],
    leadership: [
      {
        badge: 'Current',
        title: 'Innovation Officer',
        organization: 'Uzbekistan Students Union in the UK',
        period: 'Dec 2024 - Present',
        description: 'Promotes innovation-driven collaboration among Uzbek students across the UK'
      },
      {
        title: 'Student Representative',
        organization: 'Alliance Manchester Business School',
        period: 'Oct 2023 - Sep 2024',
        description: 'Liaised between students and faculty to improve academic experience. Co-organised social events for a 90+ student cohort'
      }
    ],
    careerVision: "I aim to remain within product ownership and grow into a strategic product role, working on data-driven, user-centric platforms that drive impact and accessibility. I'm passionate about contributing to digital transformation initiatives across sectors like fintech, education, and legal tech."
  },
  projects: [
    {
      title: 'Ten JavaScript Projects',
      description: 'A comprehensive collection of interactive web applications showcasing various JavaScript concepts and modern development practices.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Ten JavaScript Projects - Collection of interactive web applications',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      liveUrl: 'https://abdulbosit-aim.github.io/ten-js-projects/',
      githubUrl: 'https://github.com/Abdulbosit-AiM/ten-js-projects'
    },
    {
      title: 'Weather Application',
      description: 'Real-time weather application with location-based forecasts, interactive maps, and responsive design.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Weather App - JavaScript weather application with real-time data',
      technologies: ['JavaScript', 'API Integration', 'Geolocation'],
      liveUrl: 'https://abdulbosit-aim.github.io/weather-app-js/',
      githubUrl: 'https://github.com/Abdulbosit-AiM/weather-app-js'
    },
    {
      title: 'Bootstrap SASS Project',
      description: 'Modern responsive website built with Bootstrap 5 and SASS, featuring custom components and optimized performance.',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bootstrap SASS Project - Modern responsive website',
      technologies: ['Bootstrap 5', 'SASS', 'Responsive'],
      liveUrl: 'https://abdulbosit-aim.github.io/bootstrap5-sass/',
      githubUrl: 'https://github.com/Abdulbosit-AiM/bootstrap5-sass'
    },
    {
      title: 'Task Management App',
      description: 'Feature-rich to-do list application with local storage, drag-and-drop functionality, and priority management.',
      image: 'https://images.pexels.com/photos/3299/laptop-computer-technology-music.jpg?auto=compress&cs=tinysrgb&w=800',
      alt: 'To-Do List App - Task management application',
      technologies: ['JavaScript', 'Local Storage', 'Drag & Drop'],
      liveUrl: 'https://abdulbosit-aim.github.io/to-do-list-js/',
      githubUrl: 'https://github.com/Abdulbosit-AiM/to-do-list-js'
    },
    {
      title: 'Modern Calculator',
      description: 'Advanced calculator with scientific functions, history tracking, and keyboard support for enhanced user experience.',
      image: 'https://images.pexels.com/photos/6913/numbers-money-calculating-calculation.jpg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Modern Calculator - JavaScript calculator with advanced functions',
      technologies: ['JavaScript', 'Math.js', 'Keyboard Events'],
      liveUrl: 'https://abdulbosit-aim.github.io/modern-js-calculator/',
      githubUrl: 'https://github.com/Abdulbosit-AiM/modern-js-calculator'
    },
    {
      title: 'Analog Clock',
      description: 'Beautiful real-time analog clock with smooth animations, customizable themes, and timezone support.',
      image: 'https://images.pexels.com/photos/1095601/pexels-photo-1095601.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Analog Clock - Real-time analog clock built with JavaScript',
      technologies: ['JavaScript', 'Canvas API', 'Animations'],
      liveUrl: 'https://abdulbosit-aim.github.io/simple-analog-clock-js/',
      githubUrl: 'https://github.com/Abdulbosit-AiM/simple-analog-clock-js'
    }
  ],
  contact: {
    email: 'abdulbosit.melikuziev@gmail.com',
    phone: '0788-460-7553',
    location: 'London, UK'
  }
}