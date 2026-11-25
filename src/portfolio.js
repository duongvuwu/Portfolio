export const profile = {
  name: "Duong Vu",
  handle: "duongvuwu",
  introduction: "Full Stack Development",
  focus: "AI/ML Engineer",
  about: "I focus on full stack development and machine learning. My projects include a learning-by-teaching backend, a game agent trained on match replays, and a video editing pipeline driven by word timestamps.",
  interests: [
    "Generative AI and large language models",
    "AI agents and workflow orchestration",
    "Retrieval-augmented generation and embeddings",
    "Prompt design and LLM evaluation",
    "Machine learning and deep learning",
    "Imitation learning and reinforcement learning",
    "Multimodal AI, speech, and computer vision",
    "Model serving, inference, and MLOps",
    "AI-assisted learning and automation",
  ],
  githubUrl: "https://github.com/duongvuwu",
  linkedinUrl: "https://www.linkedin.com/in/duongvuwu",
};

export const skillTracks = [
  {
    name: "Full Stack Development",
    level: "Fresher foundations",
    groups: [
      {
        name: "Frontend development",
        technologies: ["HTML & CSS", "JavaScript", "React", "Responsive design"],
      },
      {
        name: "Backend and APIs",
        technologies: ["PHP", "REST APIs", "SQL & MySQL"],
      },
      {
        name: "Testing and delivery",
        technologies: ["Git & GitHub", "Unit testing", "GitHub Pages"],
      },
    ],
  },
  {
    name: "AI/ML Engineering",
    level: "Fresher foundations",
    groups: [
      {
        name: "Data and machine learning",
        technologies: ["Python", "pandas", "scikit-learn", "Data preprocessing"],
      },
      {
        name: "Training and evaluation",
        technologies: ["PyTorch", "Imitation learning", "Reinforcement learning", "Model evaluation"],
      },
      {
        name: "AI workflows",
        technologies: ["LangGraph", "Agent workflows"],
      },
    ],
  },
];

export const featuredProjects = [
  {
    title: "Pokémon TCG Battle Agent",
    description: "A game agent for the Pokémon Trading Card Game simulator that learns from match replays and fine-tunes through self-play.",
    role: "ML Pipeline & Evaluation",
    contribution: "Implemented sharded replay processing, imitation learning, PPO self-play, and simulator evaluation.",
    technologies: ["Python", "PyTorch", "CABT simulator"],
    sourceUrl: "https://github.com/duongvuwu/TCG-TRAIN",
  },
  {
    title: "ITeach / ProtegeAI",
    description: "A learning-by-teaching backend that checks a learner’s explanation against a rubric, tracks mastery, and asks a follow-up question when gaps remain.",
    type: "Personal project",
    role: "Backend MVP Developer",
    contribution: "Built the LangGraph workflow, heuristic rubric checks, session tracking, and a command-line demo.",
    technologies: ["Python", "LangGraph"],
    sourceUrl: "https://github.com/duongvuwu/ITeach",
  },
  {
    title: "Word-by-Word Video Supercut",
    description: "A reproducible video pipeline that assembles new dialogue from source clips using manually marked word timestamps.",
    type: "Personal project",
    role: "Video Pipeline Developer",
    contribution: "Built a Python and FFmpeg renderer driven by a manifest of clip timings.",
    technologies: ["Python", "FFmpeg"],
    sourceUrl: "https://github.com/duongvuwu/word-by-word-video-supercut-demo",
    demoUrl: "https://github.com/duongvuwu/word-by-word-video-supercut-demo/blob/main/phase1-demo/README.md",
  },
];

export const otherProjects = [
  {
    title: "Software License Tracker",
    description: "A web app for university IT teams to allocate software licenses, track activations and expirations, and review usage and audit logs.",
    type: "Team project",
    role: "Allocation Engine, Lifecycle & Logs",
    contribution: "Worked on license allocation and lifecycle reporting, and added an intent-based licensing assistant and a Vietnamese–English language switcher.",
    technologies: ["PHP", "PDO", "MySQL", "JavaScript"],
    sourceUrl: "https://github.com/duongvuwu/Group-12-_-NVH_INS306401",
  },
  {
    title: "OpenGL Space Station",
    description: "An interactive 3D space station simulation with zero-gravity movement, switchable first-person and security cameras, and Phong lighting.",
    type: "Team project",
    role: "C++ / OpenGL Contributor",
    technologies: ["C++", "OpenGL", "CMake"],
    sourceUrl: "https://github.com/duongvuwu/OpenGL-SpaceStation",
  },
  {
    title: "Temperature Monitoring Demo",
    description: "A software simulation of an LM35 sensor and MCP3008 converter, with a mock LCD and a live temperature chart.",
    role: "Repository publisher",
    technologies: ["Python", "Tkinter", "Matplotlib"],
    sourceUrl: "https://github.com/duongvuwu/temperature_demo-in-software/tree/main/temperature_Demo1",
  },
  {
    title: "Obesity-Level Classification",
    description: "A notebook that preprocesses data, trains a random forest, and evaluates predictions with a confusion matrix. The repo also includes a RapidMiner decision tree workflow.",
    type: "Team project",
    technologies: ["Python", "pandas", "scikit-learn", "RapidMiner"],
    sourceUrl: "https://github.com/duongvuwu/Team-9",
  },
  {
    title: "Multimedia Design & Web Development Coursework",
    description: "PHP and MySQL coursework covering forms, multi-step flows, sample logins, and database schemas. Examples include the INS3064 Welcome Page and Simple Form Validation Project.",
    type: "Coursework",
    technologies: ["PHP", "HTML", "MySQL"],
    sourceUrl: "https://github.com/duongvuwu/INS306401-INS3064-Vu-Binh-Duong",
  },
  {
    title: "Earlier Portfolio on GitHub Pages",
    description: "An earlier portfolio built with HTML and CSS to present my profile, skills, and project work.",
    type: "Personal portfolio",
    technologies: ["HTML", "CSS", "GitHub Pages"],
    sourceUrl: "https://github.com/duongvuwu/duongwuu.github.io",
  },
];
