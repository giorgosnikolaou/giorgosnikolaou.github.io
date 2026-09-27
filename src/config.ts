export const siteConfig = {
  name: "Giorgos Nikolaou",
  title: "MSc in Data Science, EPFL • Researcher at ISTA",
  description: "Portfolio website of Giorgos Nikolaou",
  accentColor: "#c1121f",
  social: {
    email: "georgios.nikolaou@epfl.ch",
    linkedin: "https://linkedin.com/in/g-nikolaou",
    twitter: "https://x.com/GiorgosNik02",
    github: "https://github.com/giorgosnikolaou",
    scholar: "https://scholar.google.com/citations?user=pol3t8MAAAAJ",
  },
  aboutMe:
    "I'm currently living in Vienna &#x1F1E6;&#x1F1F9;, working as a <strong>Research Intern at ISTA</strong> with <strong>Francesco Locatello</strong> while pursuing my <strong>MSc in Data Science</strong> at <strong>EPFL</strong>, after completing my <strong>BSc in Computer Science</strong> at the <strong>University of Athens</strong>. When I'm not buried in assignments or research, you can find me swimming, experimenting with new recipes, or catching up on some much-needed sleep. My research focuses on understanding the internal representations and behaviour of frontier models and using these insights to inform approaches in AI safety.",
  skills: ["Representation Learning", "CoT Faithfulness", "AI Safety"],
  experience: [
    {
      company: "Institute of Science and Technology Austria (ISTA)",
      title: "Research Intern",
      PI: "Francesco Locatello",
      dateRange: "Sep 2026 - Present",
      bullets: [
        "Developing a formal account of why <strong>chain-of-thought (CoT) reasoning</strong> can be unfaithful.",
        "Investigating methods to improve <strong>CoT faithfulness</strong> and characterizing their inherent tradeoffs.",
      ],
    },
    {
      company: "Theory of Machine Learning Lab (TML), EPFL",
      title: "Research Student",
      PI: "Nicolas Flammarion",
      dateRange: "Feb 2026 - Jul 2026",
      bullets: [
        "Developed a <strong>theoretically grounded, unsupervised</strong> method for selective <strong>LLM unlearning</strong> (<a href=\"https://arxiv.org/abs/2606.06320\" class=\"custom-link\" target=\"_blank\" rel=\"noopener noreferrer\">NeurIPS 2026</a>).",
        "Extended open-unlearning with <strong>token-importance-weighted losses</strong> and additional benchmarks (<a href=\"https://github.com/tml-epfl/ATWU\" class=\"custom-link\" target=\"_blank\" rel=\"noopener noreferrer\">code</a>).",
      ],
    },
    {
      company: "GLADIA, Sapienza Università di Roma",
      title: "Research Assistant",
      PI: "Emanuele Rodolà",
      dateRange: "Aug 2025 - Jan 2026",
      bullets: [
        "Proved language models are <strong>almost surely injective</strong> and used this insight for <strong>exact model inversion</strong> (<a href=\"https://arxiv.org/abs/2510.15511\" class=\"custom-link\" target=\"_blank\" rel=\"noopener noreferrer\">ICLR 2026</a>; <a href=\"https://x.com/GladiaLab/status/1982818213206315120\" class=\"custom-link\" target=\"_blank\" rel=\"noopener noreferrer\">tweeprint</a>).",
        "Research focused on understanding and operationalizing the <strong>representation space</strong> of modern LLMs.",
      ],
    },
    {
      company: "Logmind",
      title: "Data Science Intern",
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
        "Studied <strong>image-to-image translation</strong>, leveraging multi-attribute embeddings to condition generation.",
        "Applied <strong>multi-modal learning</strong> techniques to enhance performance and flexibility of generative models.",
      ],
    },
    {
      company: "INNOV-ACTS",
      title: "Data Engineering Intern",
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
      dateRange: "Sep 2024 - Present",
      achievements: [
        "Maintaining a strong GPA of <strong>5.77/6</strong>.",
        "Completed advanced coursework in Measure-Theoretic Probability, Statistics, Optimization Theory, and Deep & Reinforcement Learning.",
      ],
    },
    {
      school: "National and Kapodistrian University of Athens",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "Oct 2020 - Jul 2024",
      achievements: [
        "Graduated with distinction, earning a GPA of <strong>9.18/10</strong>.",
        "Thesis selected among the department's best Bachelor's and Master's theses (2024 cohort).",
        "<strong>Thesis</strong>: \"<a href=\"https://www.di.uoa.gr/sites/default/files/documents/studbook2025.pdf\#page=56\" class=\"custom-link\" target=\"_blank\" rel=\"noopener noreferrer\">Higher-Order Deep Unfolding Networks for Compressed Sensing</a>\"<br /><strong>Supervisor:</strong> Yannis Panagakis<br />Developed a deep unfolding network for compressed sensing leveraging proximal algorithms within the Augmented Lagrangian framework, integrating a novel higher-order polynomial module to enhance model expressiveness. Achieved state-of-the-art reconstruction performance with over <strong>3dB PSNR</strong> improvement at ultra-low sampling rates (<strong>1-10\%</strong>)."
      ],
    },
  ],
  publications: [
    {
      name: "Learning What to Forget:<br />Improving LLM Unlearning via Learned Token-Level Importance",
      authors: "Gizem Yüce<sup>*</sup>, <strong class=\"me\">Giorgos Nikolaou</strong><sup>*</sup>, Nicolas Flammarion",
      venue: "NeurIPS 2026",
      link: "https://arxiv.org/abs/2606.06320",
      image: "/publications/selective-unlearn.png"
    },
    {
      name: "Language Models are Injective and Hence Invertible",
      authors: "<strong class=\"me\">Giorgos Nikolaou</strong><sup>*</sup>, Tommaso Mencattini<sup>*</sup>,<br />Donato Crisostomi, Andrea Santilli, Yannis Panagakis, Emanuele Rodolà",
      // date: "2025",
      venue: "ICLR 2026",
      link: "https://arxiv.org/abs/2510.15511",
      image: "/publications/injectivity.png"
    },
  ],
  awards: [
    {
      name: "Research Grant ($80,000)",
      organization: "Coefficient Giving",
      year: "2026",
      detail: "Administered by <a href=\"https://www.existence.org/\" class=\"custom-link\" target=\"_blank\" rel=\"noopener noreferrer\">Berkeley Existential Risk Initiative</a>.",
    },
    {
      name: "Postgraduate Scholarship",
      organization: "Bodossaki Foundation",
      year: "2025",
      detail: "",
    },
    {
      name: "Outstanding Bachelor's and Master's Thesis Distinction",
      organization: "University of Athens",
      year: "2025",
      detail: "2024 cohort.",
    },
    {
      name: "Postgraduate Scholarship",
      organization: "Union of Greek Shipowners (UGS)",
      year: "2024",
      detail: "",
    },
  ],
  news: [
    {
      date: "Sep 24, 2026",
      content:
        "Our paper \"<strong>Learning What to Forget: Improving LLM Unlearning via Learned Token-Level Importance</strong>\" was accepted at <strong>NeurIPS 2026</strong>, see you at Paris!"
    },
    {
      date: "Jul 01, 2026",
      content:
        "Our paper \"<strong>Language Models are Injective and Hence Invertible</strong>\" was selected for an <strong>oral presentation</strong> at the <a href=\"https://www.greeksin.ai/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"custom-link\">Greeks in AI 2026 Symposium</a>, held at the Eugenides Foundation in Athens (July 15&ndash;17)."
    },
    {
      date: "Jun 04, 2026",
      content:
        "Preprint Alert: <strong>Learning What to Forget: Improving LLM Unlearning via Learned Token-Level Importance</strong>. We introduce a theoretically grounded, unsupervised method to identify which tokens matter for forgetting and use it to drive more selective LLM unlearning. Read it on <a href=\"https://arxiv.org/abs/2606.06320v1\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"custom-link\">arXiv</a>."
    },
    // {
    //   date: "Mar 01, 2026",
    //   content:
    //     "My <strong>$80,000 research grant</strong> from <strong>Coefficient Giving</strong>, administered by <a href=\"https://www.existence.org/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"custom-link\">Berkeley Existential Risk Initiative</a>, officially began today."
    // },
    {
      date: "Jan 26, 2026",
      content:
        "Our paper \"<strong>Language Models are Injective and Hence Invertible</strong>\" was accepted at <strong>ICLR 2026</strong>!"
    },
    {
      date: "Nov 27, 2025",
      content:
        "<strong>Invited talk</strong> on LLM injectivity and invertibility at the <a href=\"https://www.areasciencepark.it/en/research-infrastructures/data-engineering-lade/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"custom-link\">Laboratory of Data Engineering</a> of Area Science Park, where we presented and discussed our recent work. Many thanks to Alberto Cazzaniga and Diego Doimo for the invitation and warm hospitality!"
    },
    {
      date: "Oct 17, 2025",
      content:
        "Preprint Alert: <strong>Language Models Are Injective and Hence Invertible</strong>. We prove that LLMs are injective, empirically stress-test this property, and develop the first inversion algorithm with theoretical guarantees. To top it off, the announcement went viral on <a href=\"https://x.com/GladiaLab/status/1982818213206315120\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"twitter-link\">Twitter</a> (>5M views)!",
    },
    {
      date: "Jul 07, 2025",
      content:
        "Excited to begin my Data Science Internship at Logmind!",
    },
    {
      date: "Jun 27, 2025",
      content:
        "Honored to have received the Bodossaki Foundation Graduate Scholarship to support my graduate studies at EPFL.",
    },
    {
      date: "May 25, 2025",
      content:
        "My undergraduate thesis was selected for publication among the department's best Bachelor's and Master's theses for 2024!",
    },
    {
      date: "Jul 04, 2024",
      content:
        "Grateful to have been awarded the \"SYN-ENOSIS for Education Scholarship\" by the Union of Greek Shipowners, supporting my graduate studies at EPFL.",
    },
  ],
  nav: [
    { id: "about", label: "About" },                             // always visible
    { id: "experience", label: "Experience", requires: "experience" },
    { id: "education", label: "Education", requires: "education" },
    { id: "publications", label: "Publications", requires: "publications" },
    { id: "awards", label: "Awards", requires: "awards" },
    { id: "news", label: "News", requires: "news" },
  ],
};
