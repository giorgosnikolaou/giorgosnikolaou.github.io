export const siteConfig = {
  name: "Giorgos Nikolaou",
  title: "MSc in Data Science, EPFL • Researcher at GLADIA & TML",
  description: "Portfolio website of Giorgos Nikolaou",
  accentColor: "#c1121f",
  social: {
    email: "georgios.nikolaoul@epfl.ch",
    linkedin: "https://linkedin.com/in/g-nikolaou",
    twitter: "https://x.com/GiorgosNik02",
    github: "https://github.com/giorgosnikolaou",
    scholar: "https://scholar.google.com/citations?user=pol3t8MAAAAJ",
  },
  aboutMe:
    "I'm currently living in Lausanne &#x1F1E8;&#x1F1ED;, pursuing my <strong>MSc in Data Science</strong> at <strong>EPFL</strong>, after completing my <strong>BSc in Computer Science</strong> at the <strong>University of Athens</strong>. When I'm not buried in assignments, you can find me swimming, experimenting with new recipes, or catching up on some much-needed sleep. In my research, I'm interested in understanding the structure of representations and exploring AI safety, particularly machine unlearning.",
  skills: ["Representation Learning", "Machine Unlearning", "AI Safety"],
  experience: [
    {
      company: "Theory of Machine Learning Lab (TML), EPFL",
      title: "Research Student",
      PI: "Nicolas Flammarion",
      dateRange: "Oct 2025 - Present",
      bullets: [
        "Conducting research on <strong>LLM machine unlearning</strong>, leveraging hidden representations to quantify token importance for targeted forgetting.",
        "Developing token-importance-weighted loss functions and expanded benchmarking suites for the <a href=\"https://github.com/locuslab/open-unlearning\" class=\"custom-link\" target=\"_blank\" rel=\"noopener noreferrer\">open-unlearning</a> library, with the goal of submitting a PR to integrate these contributions.",
      ],
    },
    {
      company: "GLADIA, Sapienza Università di Roma",
      title: "Research Assistant",
      PI: "Emanuele Rodolà",
      dateRange: "Aug 2025 - Present",
      bullets: [
        "Formally proved that LLMs are <strong>almost surely injective</strong> and used this insight to develop the first <strong>exact model inversion algorithm</strong>; see the <a href=\"https://arxiv.org/abs/2510.15511\" class=\"custom-link\" target=\"_blank\" rel=\"noopener noreferrer\">preprint</a>.",
        "Ongoing research examines how representations can be leveraged to infer model behavior.",
      ],
    },
    {
      company: "Logmind",
      title: "Data Science Internship",
      dateRange: "Jul 2025 - Jan 2026",
      bullets: [
        "Optimized and scaled the log-based <strong>anomaly detection pipeline</strong> to support <strong>200x</strong> data volume without degrading performance.",
        "Prototyped an <strong>LLM-driven system for automated log analysis</strong>, generating actionable insights to streamline incident response.",
      ],
    },
    {
      company: "Archimedes Research Unit",
      title: "Research Assistant",
      PI: "Yannis Panagakis",
      dateRange: "Jan 2025 - Mar 2025",
      bullets: [
        "Research on <strong>conditional image synthesis</strong>, leveraging multi-attribute embeddings for interpretable image-to-image translation.",
        "Applied <strong>multi-modal learning</strong> techniques to enhance the performance and flexibility of generative architectures.",
      ],
    },
    {
      company: "INNOV-ACTS",
      title: "Data Engineering Internship",
      dateRange: "Mar 2024 - Aug 2024",
      bullets: [
        "Built optimized <strong>data-processing pipelines</strong> to extract, transform, and validate multi-organization data for the <strong>EuroHyPerCon</strong> project.",
        "Developed automation scripts that streamlined <strong>data-integration workflows</strong> and delivered clear, actionable analytical outputs.",
      ],
    },
  ],
  education: [
    {
      school: "École Polytechnique Fédérale de Lausanne (EPFL)",
      degree: "Master of Science in Data Science",
      dateRange: "2024 - Present",
      achievements: [
        "Maintaining a strong GPA of <strong>5.68/6</strong>.",
        "Completed advanced coursework in Measure-Theoretic Probability, Statistics, Optimization Theory, and Deep & Reinforcement Learning.",
      ],
    },
    {
      school: "National and Kapodistrian Univeristy of Athens",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2020 - 2024",
      achievements: [
        "Graduated with distinction, earning a GPA of <strong>9.18/10</strong>.",
        "Thesis selected among the department's best Bachelor and Master theses, 2024.",
        "<strong>Thesis</strong>: \"<a href=\"https://www.di.uoa.gr/sites/default/files/documents/studbook2025.pdf\#page=56\" class=\"custom-link\" target=\"_blank\" rel=\"noopener noreferrer\">Higher-Order Deep Unfolding Networks for Compressed Sensing</a>\"<br /><strong>Supervisor:</strong> Yannis Panagakis<br />Developed a deep unfolding network for compressed sensing leveraging proximal algorithms within the Augmented Lagrangian framework, integrating a novel higher-order polynomial module to enhance model expressiveness. Achieved state-of-the-art reconstruction performance with over <strong>3dB PSNR</strong> improvement at ultra-low sampling rates (<strong>1-10\%</strong>)."
      ],
    },
  ],
  publications: [
    {
      name: "Language Models are Injective and Hence Invertible",
      authors: "Giorgos Nikolaou<sup>*</sup>, Tommaso Mencattini<sup>*</sup>,<br />Donato Crisostomi, Andrea Santilli, Yannis Panagakis, Emanuele Rodolà",
      date: "2025",
      venue: "Preprint",
      link: "https://arxiv.org/abs/2510.15511",
    },
  ],
  news: [
    {
      date: "Oct 17, 2025",
      content:
        "Preprint Alert: <strong>Language Models Are Injective and Hence Invertible</strong>. We prove that LLMs are injective, empirically stress-test this property, and develop the first inversion algorithm with theoretical guarantees. To top it off, the announcement went viral on <a href=\"https://x.com/GladiaLab/status/1982818213206315120\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"twitter-link\">Twitter</a> (&asymp;5M views)!",
    },
    {
      date: "Jul 07, 2025",
      content:
        "Excited to begin my Data Science Intersnhsip at Logmind!",
    },
    {
      date: "Jun 27, 2025",
      content:
        "Honored to have received the Bodossaki Foundation Graduate Scholarship to support my graduate studies at EPFL.",
    },
    {
      date: "May 25, 2025",
      content:
        "My undergraduate thesis was selected for publication among the department's best Bachelor and Master theses for 2024!",
    },
  ],
  nav: [
    { id: "about", label: "About" },                             // always visible
    { id: "experience", label: "Experience", requires: "experience" },
    { id: "education", label: "Education", requires: "education" },
    { id: "publications", label: "Publications", requires: "publications" },
    { id: "news", label: "News", requires: "news" },
  ],
};
