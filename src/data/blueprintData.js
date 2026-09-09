// Blueprint data store powering Public Credential Verification, Learner Platform, and Faculty Operations

export const credentialsData = [
  {
    id: "DA-2026-RAG-8941",
    learnerName: "Aravind Radhakrishnan",
    username: "aravind-r",
    programId: "agentic-ai-engineering",
    programTitle: "Agentic AI & Production Systems Engineering",
    track: "AI & Software Careers",
    issueDate: "September 02, 2026",
    status: "Verified & Active",
    verificationHash: "0x98f2b34a17c762d04ea7e90145cbe271a39d8924",
    capstoneProject: "Production Hybrid RAG API with Faithfulness Benchmark Suite",
    rubricEvaluation: [
      { criterion: "System Architecture & Routing", weight: "25%", score: "96 / 100", notes: "Clean dual-index routing between semantic vector store and sparse BM25." },
      { criterion: "Deterministic Output & Schemas", weight: "25%", score: "98 / 100", notes: "Strict Pydantic models with 0 validation violations on 500 edge cases." },
      { criterion: "Latency Bounds (p95 < 1200ms)", weight: "20%", score: "92 / 100", notes: "Average p95 latency clocked at 890ms with streaming responses." },
      { criterion: "Eval Suites & Error Boundaries", weight: "20%", score: "95 / 100", notes: "Automated faithfulness assertion suite with Ragas benchmark." },
      { criterion: "Documentation & Code Quality", weight: "10%", score: "90 / 100", notes: "Comprehensive OpenAPI schema and reproducible Docker test runner." }
    ],
    overallScore: "94.5 / 100",
    verifiedBy: "Dr. Shubham S. (Founding Faculty) & Senior Peer Review Committee",
    artifactUrl: "https://github.com/deepentra-learners/aravind-rag-service"
  },
  {
    id: "DA-2026-MED-8821",
    learnerName: "Aditya Kulkarni",
    username: "aditya-k",
    programId: "agentic-ai-engineering",
    programTitle: "Agentic AI & Production Systems Engineering",
    track: "AI & Software Careers",
    issueDate: "August 28, 2026",
    status: "Verified & Active",
    verificationHash: "0x77c4e91209b63a921fe82d736a4b12c98a218f03",
    capstoneProject: "Healthcare Clinical Notes Semantic Extraction Engine",
    rubricEvaluation: [
      { criterion: "Local Inference Architecture", weight: "30%", score: "95 / 100", notes: "Whisper + local quantized model pipeline." },
      { criterion: "FHIR JSON Compliance", weight: "30%", score: "96 / 100", notes: "Zero schema validation errors on 100 test audios." },
      { criterion: "Error Handling & Fallbacks", weight: "20%", score: "91 / 100", notes: "Reliable fallback flags on ambiguous diagnostic notes." },
      { criterion: "Documentation & Auditing", weight: "20%", score: "93 / 100", notes: "Complete local environment setup and audit logging." }
    ],
    overallScore: "94.0 / 100",
    verifiedBy: "Dr. Shubham S. (Founding Faculty)",
    artifactUrl: "https://github.com/deepentra-learners/aditya-ehr-extractor"
  },
  {
    id: "DA-2026-APP-5402",
    learnerName: "Priya Mukherjee",
    username: "priya-m",
    programId: "applied-ai-workflows",
    programTitle: "Applied AI & Operational Workflow Engineering",
    track: "Applied AI",
    issueDate: "August 15, 2026",
    status: "Verified & Active",
    verificationHash: "0x55d1a89c372f0914be783921ec5671a938fe67d1",
    capstoneProject: "Multi-Brand Voice & Regulatory Integrity Validator",
    rubricEvaluation: [
      { criterion: "Workflow Orchestration", weight: "35%", score: "93 / 100", notes: "Resilient webhooks with Slack notifications and automated review triggers." },
      { criterion: "Brand Compliance Rubric", weight: "35%", score: "92 / 100", notes: "5-step rule validator with clear token bounds." },
      { criterion: "Time Savings Measurement", weight: "30%", score: "88 / 100", notes: "Validated 65% reduction in manual editorial turnaround." }
    ],
    overallScore: "91.2 / 100",
    verifiedBy: "Deepentra Applied AI Review Board",
    artifactUrl: "https://deepentra.ai/proof/priya-brand-validator"
  }
];

export const publicLearnersData = [
  {
    username: "aravind-r",
    fullName: "Aravind Radhakrishnan",
    handle: "aravind_builds",
    headline: "AI Systems Engineer • Specializing in Production RAG & Agents",
    location: "Pune, India",
    track: "AI & Software Careers",
    avatarInitials: "AR",
    bio: "Building production-grade LLM services with deterministic boundaries, vector databases, and evaluation benchmark suites.",
    verifiedSkills: [
      { name: "Hybrid RAG Architecture", count: 4, verified: true },
      { name: "Vector Database Partitioning", count: 3, verified: true },
      { name: "Pydantic Schemas & Evals", count: 5, verified: true },
      { name: "Agentic Tool Loops (LangGraph)", count: 3, verified: true },
      { name: "FastAPI Production Deployment", count: 4, verified: true }
    ],
    buildArtifacts: [
      {
        title: "Production RAG API with Faithfulness Eval Suite",
        type: "Capstone Build",
        rubricScore: "96 / 100",
        description: "Dual-index RAG system with automated synthetic test queries and sub-second p95 latency.",
        tags: ["FastAPI", "Qdrant", "Ragas", "Python"],
        github: "https://github.com/deepentra-learners/aravind-rag-service"
      },
      {
        title: "Autonomous Multi-Source SQL Synthesis Agent",
        type: "Course Project",
        rubricScore: "91 / 100",
        description: "Tool-calling agent that writes and validates sandboxed SQLite queries with human approval bounds.",
        tags: ["LangGraph", "SQLite", "Pydantic"],
        github: "https://github.com/deepentra-learners/sql-synthesis-agent"
      }
    ],
    credentials: [
      { id: "DA-2026-RAG-8941", title: "Agentic AI & Production Systems Engineering", date: "Sep 2026" }
    ],
    xp: 2450,
    level: "Level 6 Builder"
  },
  {
    username: "aditya-k",
    fullName: "Aditya Kulkarni",
    handle: "aditya_k",
    headline: "Backend & Systems Developer • Local Quantized LLM Pipelines",
    location: "Bengaluru, India",
    track: "AI & Software Careers",
    avatarInitials: "AK",
    bio: "Specializing in local offline-first language models, medical audio transcription, and structured FHIR extraction.",
    verifiedSkills: [
      { name: "Whisper Audio Pipelines", count: 3, verified: true },
      { name: "Quantized Local Inference", count: 4, verified: true },
      { name: "FHIR JSON Schemas", count: 3, verified: true }
    ],
    buildArtifacts: [
      {
        title: "Healthcare Clinical Notes Extraction Engine",
        type: "Capstone Build",
        rubricScore: "94 / 100",
        description: "Zero schema validation errors on 100 clinical audio notes using Ollama and strict enums.",
        tags: ["Whisper", "Ollama", "Pydantic", "Docker"],
        github: "https://github.com/deepentra-learners/aditya-ehr-extractor"
      }
    ],
    credentials: [
      { id: "DA-2026-MED-8821", title: "Agentic AI & Production Systems Engineering", date: "Aug 2026" }
    ],
    xp: 2100,
    level: "Level 5 Builder"
  }
];

// Learner platform active state (for /app)
export const initialLearnerState = {
  currentProgram: {
    id: "agentic-ai-engineering",
    title: "Agentic AI & Production Systems Engineering",
    track: "AI & Software Careers",
    cohortName: "Pune Weekend Cohort A",
    progressPercent: 68,
    nextSession: {
      id: "sess-05",
      title: "Tool Calling, ReAct Loops & LangGraph State",
      date: "Saturday, 10:00 AM - 1:00 PM IST",
      room: "Lab 2, Deepentra Campus (or Live Stream)",
      status: "Check-in Open Today",
      activeToken: "749201"
    }
  },
  stats: {
    totalXp: 2450,
    level: 6,
    verifiedSkillsCount: 5,
    completedProjects: 2,
    attendanceRate: "100% (4/4 Sessions)"
  },
  nextActions: [
    {
      id: "act-1",
      type: "attendance",
      title: "Live Session Check-in Open",
      subtitle: "Enter 6-digit session token or scan instructor QR to record attendance.",
      cta: "Check-in Now",
      urgent: true
    },
    {
      id: "act-2",
      type: "assignment",
      title: "Assignment 03 Due in 2 Days",
      subtitle: "Deterministic Tool Calling with Custom Pydantic Validators.",
      cta: "Open Submission",
      urgent: false
    }
  ],
  assignments: [
    {
      id: "asg-01",
      title: "Vector Search & Re-ranking Benchmark",
      module: "Module 01: Hybrid RAG",
      status: "Graded & Verified",
      score: "94 / 100",
      submittedDate: "Aug 20, 2026",
      aiFeedback: "Excellent reciprocal rank fusion implementation. Clean separation of vector and keyword scores.",
      facultyNotes: "Approved by Dr. Shubham. Solid test coverage."
    },
    {
      id: "asg-02",
      title: "Multi-Document Context Routing Pipeline",
      module: "Module 02: Advanced Chunking",
      status: "Graded & Verified",
      score: "98 / 100",
      submittedDate: "Aug 27, 2026",
      aiFeedback: "Zero schema violations. P95 latency within 650ms bounds.",
      facultyNotes: "Top tier submission in Cohort A."
    },
    {
      id: "asg-03",
      title: "Deterministic Tool Calling with Custom Pydantic Validators",
      module: "Module 03: Agents & Tool Calling",
      status: "Due Soon",
      deadline: "Sep 12, 2026",
      rubricCriteria: [
        { name: "Schema Strictness", weight: "30%" },
        { name: "Error Recovery Loops", weight: "40%" },
        { name: "Unit Tests & Fixtures", weight: "30%" }
      ]
    }
  ]
};

// Faculty Operations state (for /faculty)
export const initialFacultyState = {
  activeSession: {
    id: "sess-05",
    cohortId: "cohort-a",
    cohortName: "Agentic AI - Cohort A (Pune)",
    topic: "Tool Calling, ReAct Loops & State Machines",
    dateToday: "Today, Sep 09, 2026",
    code: "749201",
    enrolledLearners: 28,
    checkedInCount: 22,
    checkInList: [
      { id: "usr-1", name: "Aravind Radhakrishnan", time: "10:02 AM", verified: true },
      { id: "usr-2", name: "Rohan Deshmukh", time: "10:04 AM", verified: true },
      { id: "usr-3", name: "Sneha Patel", time: "10:05 AM", verified: true },
      { id: "usr-4", name: "Vikram Joshi", time: "10:07 AM", verified: true },
      { id: "usr-5", name: "Ananya Roy", time: "10:08 AM", verified: true }
    ]
  },
  reviewQueue: [
    {
      id: "sub-101",
      studentName: "Meera Nair",
      studentEmail: "meera.n@gmail.com",
      assignmentTitle: "Deterministic Tool Calling with Custom Validators",
      submittedAt: "1 hour ago",
      repoUrl: "https://github.com/meera-nair/agent-tool-calling",
      aiPreCheckScore: "92 / 100",
      aiSummary: "All 12 test assertions pass. Custom validator catches malformed payloads cleanly.",
      status: "Needs Faculty Review"
    },
    {
      id: "sub-102",
      studentName: "Kabir Sen",
      studentEmail: "kabir.sen@gmail.com",
      assignmentTitle: "Deterministic Tool Calling with Custom Validators",
      submittedAt: "3 hours ago",
      repoUrl: "https://github.com/kabirsen/langgraph-tools",
      aiPreCheckScore: "88 / 100",
      aiSummary: "Passed schema validation; retry counter occasionally exceeds timeout on 1 edge case.",
      status: "Needs Faculty Review"
    }
  ]
};
