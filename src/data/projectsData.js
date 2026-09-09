export const projectsData = [
  {
    id: "legal-contract-rag",
    title: "Multi-Contract Risk Analysis & Citation RAG",
    track: "AI & Software Careers",
    trackId: "ai-careers",
    difficulty: "Intermediate",
    status: "Active Challenge",
    problem: "Legal and compliance teams must parse 80+ page agreements to identify non-standard liability clauses, indemnification caps, and compliance liabilities without risking data leakage.",
    build: "A privacy-first local RAG system that ingests PDFs, performs semantic clause chunking, links embeddings with exact page/line coordinates, and flags high-risk clauses against a standard playbook.",
    skills: ["Qdrant Vector DB", "FastAPI", "Hybrid Keyword + Dense Search", "PyPDF / Unstructured", "Pydantic Schemas"],
    evaluationCriteria: "Evaluated on retrieval quality, citation accuracy, reliability, and response performance.",
    expectedArtifact: "GitHub Repo with automated pytest suite, Docker compose file, and benchmarking report."
  },
  {
    id: "ops-ticket-triage",
    title: "Automated Enterprise Support Dispatch & Sentiment Agent",
    track: "Applied AI",
    trackId: "applied-ai",
    difficulty: "Accessible / Practical",
    status: "Active Challenge",
    problem: "Support queues get inundated with repetitive tier-1 issues, while urgent enterprise outage tickets get lost in the queue without immediate human attention.",
    build: "An automated workflow that monitors inbound email/Zendesk webhooks, categorizes urgency and sentiment, generates a cited preliminary resolution draft, and alerts on-call engineers via Slack.",
    skills: ["Make / Zapier Webhook Logic", "Few-Shot Prompt Engineering", "JSON Schema Formatting", "Slack API", "Data Redaction"],
    evaluationCriteria: "Evaluated on classification consistency, routing logic, response quality, and workflow reliability.",
    expectedArtifact: "Exportable workflow blueprint (.json), prompt dictionary, and verification audit video."
  },
  {
    id: "research-synthesis-notebook",
    title: "Scientific Literature Synthesis & Fact-Check Navigator",
    track: "AI Literacy",
    trackId: "ai-literacy",
    difficulty: "Beginner Friendly",
    status: "Active Challenge",
    problem: "Students and researchers struggle to synthesize multiple dense research papers without confusing differing methodologies or accepting false AI citations.",
    build: "A structured prompt and verification notebook that systematically compares hypotheses, sample sizes, methodology flaws, and conclusions across 3 academic papers.",
    skills: ["Structured Context Prompting", "Hallucination Cross-Examination", "Direct Source Verification", "Markdown Synthesis"],
    evaluationCriteria: "Evaluated on claim accuracy against ground-truth source PDFs and absence of fabricated references.",
    expectedArtifact: "Complete research summary notebook + verified citation verification checklist."
  },
  {
    id: "autonomous-code-debugger",
    title: "Autonomous Git PR Reviewer & Security Linter Bot",
    track: "AI & Software Careers",
    trackId: "ai-careers",
    difficulty: "Advanced",
    status: "Active Challenge",
    problem: "Engineering teams spend extensive senior developer time catching common syntax regressions, missing unit tests, and exposed environment variables in pull requests.",
    build: "A GitHub Action bot powered by an LLM reasoning loop that scans incoming diffs, checks against security rulebooks, writes comments on offending lines, and suggests patch snippets.",
    skills: ["GitHub Actions Workflow", "AST Parsing & Diff Extraction", "LangChain / Function Calling", "Security Rule Prompts"],
    evaluationCriteria: "Evaluated on review usefulness, security-rule coverage, false positives, and workflow reliability.",
    expectedArtifact: "Public GitHub Action repository, sample test PR demonstration, and integration guide."
  }
];
