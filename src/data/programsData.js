export const programsData = [
  {
    id: "ai-systems-engineering",
    slug: "ai-systems-engineering",
    title: "AI Systems Engineering",
    trackId: "ai-careers",
    trackName: "AI & Software Careers",
    level: "Intermediate to Advanced",
    duration: "10 Weeks • Cohort-Based",
    deliveryMode: "Hybrid / Live Sessions + Async Code Labs",
    status: "Applications Open",
    tagline: "Build and evaluate practical AI systems with modern LLM, RAG, agent, and deployment patterns.",
    primaryOutcome: "Design, build, test, and explain AI applications using retrieval, tool use, evaluation, and production engineering practices.",
    whoIsThisFor: {
      idealFor: [
        "Software developers wanting to specialize in Applied AI and LLM systems",
        "Backend engineers integrating generative AI into existing production backends",
        "CS and technical students targeting modern AI engineering roles"
      ],
      prerequisites: "Comfortable with Python and basic REST APIs. Prior ML math is not required.",
      timeCommitment: "8-10 hours per week (3 hours live lab + 5-7 hours project building)"
    },
    whatYouWillBuild: [
      {
        title: "Hybrid RAG Application",
        description: "Build a retrieval pipeline with embeddings, hybrid search, reranking, and a FastAPI service.",
        artifact: "GitHub repository + evaluation report"
      },
      {
        title: "Tool-Using AI Agent",
        description: "Create an agent that selects tools, handles failures, and uses human review where needed.",
        artifact: "Dockerized service + test interface"
      },
      {
        title: "Production AI Capstone",
        description: "Ship an end-to-end AI application with tests, evaluation, deployment, and clear technical documentation.",
        artifact: "Deployed application + architecture document"
      }
    ],
    skillsDeveloped: [
      "Embeddings & retrieval",
      "LLM application frameworks",
      "Agent and tool orchestration",
      "Evaluation & reliability",
      "APIs & deployment",
      "Context & cost optimization"
    ],
    curriculum: [
      {
        phase: "Week 01-02",
        title: "Foundation of Modern LLMs & API Mechanics",
        topics: [
          "Tokenization, attention intuition, and context limits",
          "Structured outputs with Pydantic & JSON modes",
          "Building deterministic workflows with non-deterministic models"
        ]
      },
      {
        phase: "Week 03-05",
        title: "Production RAG Architecture & Vector Indexing",
        topics: [
          "Chunking strategies: recursive, semantic, and hierarchy-aware",
          "Embedding models comparison & hybrid keyword-vector search",
          "Reranking, contextual compression, and query transformations"
        ]
      },
      {
        phase: "Week 06-07",
        title: "Autonomous Agents & Tool Orchestration",
        topics: [
          "ReAct, Plan-and-Solve, and LangGraph architectures",
          "Tool definition, function calling schemas, and error recovery",
          "Sandboxed code execution and state management"
        ]
      },
      {
        phase: "Week 08-10",
        title: "Evaluation, Observability & Capstone Launch",
        topics: [
          "Automated eval frameworks: Faithfulness, Answer Relevance, Context Recall",
          "Observability with OpenTelemetry and tracing platforms",
          "Capstone build, peer evaluation rubric, and public credential issuance"
        ]
      }
    ],
    assessmentModel: {
      codeReviews: "All projects undergo standardized automated linting + mentor PR review against production rubrics.",
      capstoneDefense: "Learners present their architecture diagram and live benchmark numbers to industry practitioners.",
      credentialCriteria: "Must achieve >=80% on 3 build rubrics to earn the Deepentra Verified AI Systems Credential."
    },
    cohortDetails: {
      cadence: "Upcoming Cohort: Starting next month",
      seatPolicy: "Small batch (max 30 builders) to ensure thorough code reviews",
      accessOptions: "Sponsored seats available for high-merit university students"
    }
  },
  {
    id: "applied-ai-for-professionals",
    slug: "applied-ai-for-professionals",
    title: "Applied AI for Professionals",
    trackId: "applied-ai",
    trackName: "Applied AI",
    level: "Practical / All Professional Backgrounds",
    duration: "4 Weeks • Sprint Model",
    deliveryMode: "Live Weekend Workshops + Guided Weekly Builds",
    status: "Applications Open",
    tagline: "Turn repetitive knowledge work into practical AI-assisted workflows.",
    primaryOutcome: "Design and test AI workflows around a real workplace process, with clear human review and measurable success criteria.",
    whoIsThisFor: {
      idealFor: [
        "Product managers, business analysts, and operations leads",
        "Marketers and growth operators handling large content and data pipelines",
        "Founders and department managers wanting practical AI deployment without engineering teams"
      ],
      prerequisites: "No coding required. Basic familiarity with modern workplace tools (spreadsheets, Slack, Notion).",
      timeCommitment: "4-5 hours per week (2 hours live sprint + 3 hours practical build)"
    },
    whatYouWillBuild: [
      {
        title: "Research & Briefing Workflow",
        description: "Turn multiple information sources into a structured research brief with review checkpoints.",
        artifact: "Working workflow + reusable template"
      },
      {
        title: "Support Triage Copilot",
        description: "Classify requests, draft responses, and route priority cases with human approval.",
        artifact: "Configured workflow + prompt guide"
      },
      {
        title: "Knowledge Assistant",
        description: "Create a knowledge assistant that answers from approved documents and surfaces its sources.",
        artifact: "Working assistant + accuracy checklist"
      }
    ],
    skillsDeveloped: [
      "Prompt design & structured outputs",
      "AI workflow automation",
      "Knowledge bases & structured data",
      "AI safety, privacy & review",
      "Workflow mapping & measurement"
    ],
    curriculum: [
      {
        phase: "Week 01",
        title: "Mental Models of Frontier AI & Precision Prompting",
        topics: [
          "Understanding model limitations, hallucination risks, and optimal context use",
          "Few-shot prompting, persona prompting, and delimiters",
          "Automating text extraction, cleaning, and tabular synthesis"
        ]
      },
      {
        phase: "Week 02",
        title: "Building Custom Domain Assistants & Knowledge Embeds",
        topics: [
          "Configuring custom GPTs and enterprise assistants",
          "Feeding corporate documentation and ensuring accurate citations",
          "Testing for edge cases and prompt injection protection"
        ]
      },
      {
        phase: "Week 03",
        title: "Autonomous Workflows & Tool Integrations",
        topics: [
          "Connecting LLM nodes with Google Docs, Slack, Notion, and CRMs",
          "Multi-step branching logic and conditional AI decision trees",
          "Error notifications and human-in-the-loop review checkpoints"
        ]
      },
      {
        phase: "Week 04",
        title: "Business Case Evaluation & Departmental Rollout",
        topics: [
          "Measuring time-savings and ROI calculation",
          "Building internal adoption guidelines for your team",
          "Submitting your build for the Deepentra Applied AI Professional Credential"
        ]
      }
    ],
    assessmentModel: {
      codeReviews: "No code required. Submissions are assessed on workflow reliability, output precision, and time-saving ROI.",
      capstoneDefense: "Live demonstration of your working automation processing real-world inputs.",
      credentialCriteria: "Verification requires an active automation demo and an evaluation score >=80% on the operational rubric."
    },
    cohortDetails: {
      cadence: "Bi-weekly rolling starts",
      seatPolicy: "Intimate cohort size to allow 1-on-1 workflow feedback",
      accessOptions: "Company sponsorship reimbursement documentation provided"
    }
  },
  {
    id: "practical-ai-literacy",
    slug: "practical-ai-literacy",
    title: "Practical AI Literacy",
    trackId: "ai-literacy",
    trackName: "AI Literacy",
    level: "Beginner Friendly",
    duration: "2 Weeks • Fast-Track",
    deliveryMode: "Hands-on Interactive Lab Sessions",
    status: "Applications Open",
    tagline: "Understand modern AI, use it effectively, and build safer everyday workflows.",
    primaryOutcome: "Build practical AI habits for research, writing, analysis, and everyday tasks while learning how to verify outputs.",
    whoIsThisFor: {
      idealFor: [
        "Students and educators wanting to use AI ethically and effectively for research",
        "Non-technical professionals who feel overwhelmed by AI changes",
        "Curious individuals and seniors wanting safe, practical capability"
      ],
      prerequisites: "None. Zero technical or mathematical background required.",
      timeCommitment: "2-3 hours per week"
    },
    whatYouWillBuild: [
      {
        title: "Personal AI Research Assistant",
        description: "Create an assistant for research and learning, with clear instructions and simple verification habits.",
        artifact: "Assistant setup + prompt playbook"
      },
      {
        title: "Everyday AI Toolkit",
        description: "Create reusable workflows for writing, planning, summarizing, and document analysis.",
        artifact: "Promptbook + fact-checking checklist"
      }
    ],
    skillsDeveloped: [
      "AI Safety & Privacy Fundamentals",
      "Prompting fundamentals",
      "Verification & fact checking",
      "Multimodal AI tools",
      "Everyday AI workflows"
    ],
    curriculum: [
      {
        phase: "Session 01-02",
        title: "Demystifying AI: How It Thinks and Where It Fails",
        topics: [
          "The simple truth behind how language models generate text",
          "Why AI hallucinates and how to spot made-up facts instantly",
          "Data privacy: what you should and shouldn't paste into public AI tools"
        ]
      },
      {
        phase: "Session 03-04",
        title: "Prompting Like a Pro & Everyday Problem Solving",
        topics: [
          "The 4-part prompting framework (Context, Instruction, Constraints, Output)",
          "Using AI for deep research, critique, and document analysis",
          "Creating your personal prompt cheat-sheet and submitting your first verified project"
        ]
      }
    ],
    assessmentModel: {
      codeReviews: "Practical project evaluation: evaluating how well your prompt notebook handles edge cases and factual checks.",
      capstoneDefense: "Short demonstration of a completed daily workflow build.",
      credentialCriteria: "Deepentra AI Literacy Foundation Certificate awarded upon rubric completion."
    },
    cohortDetails: {
      cadence: "Weekly cohorts",
      seatPolicy: "Open enrollment with small interactive breakout groups",
      accessOptions: "Community and student concessions available"
    }
  }
];
