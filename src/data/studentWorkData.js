export const studentWorkData = [
  {
    id: "work-1",
    learnerHandle: "Aditya K.",
    track: "AI & Software Careers",
    roleContext: "Junior Backend Developer",
    projectTitle: "Healthcare Clinical Notes Semantic Extraction Engine",
    problemSolved: "Clinicians spend a large part of their workday transcribing unstructured audio dictations into standardized EHR forms with ICD-10 diagnostic codes.",
    whatTheyBuilt: "An end-to-end Python pipeline running Whisper locally for audio transcription, coupled with a fine-tuned small language model that formats symptoms into structured FHIR JSON schemas with confidence scores.",
    toolsUsed: ["FastAPI", "Whisper", "Pydantic Schemas", "Ollama", "Docker"],
    iterationJourney: {
      firstAttempt: "Initial version used generic GPT-3.5 API prompts which hallucinated ICD codes on ambiguous symptoms and had a 4.2-second latency.",
      finalResult: "Switched to local quantized models with strict enum validation schemas and fallback flags. The revised version added stricter validation, clearer fallbacks, and repeatable tests."
    },
    evaluationOutcome: {
      rubricScore: "Reviewed against a build rubric",
      reviewNotes: "Strong error-handling boundaries and deterministic schema guarantees. Pull request passed all 3 automated CI test suites.",
      credentialIssued: "Evaluation focuses on reliability, clarity, and evidence."
    },
    verifiedArtifactType: "GitHub Repository + Benchmark Suite"
  },
  {
    id: "work-2",
    learnerHandle: "Priya M.",
    track: "Applied AI",
    roleContext: "Marketing & Communications Lead",
    projectTitle: "Multi-Brand Voice Style Guide & Content Integrity Validator",
    problemSolved: "Content production across 4 product lines suffered from brand drift, inconsistent product naming, and claims that violated regulatory compliance guidelines.",
    whatTheyBuilt: "An automated review workflow connecting Google Docs and Slack that scans draft articles, highlights non-compliant phrasing against a structured brand rubric, and suggests verified alternatives.",
    toolsUsed: ["Make.com", "Claude 3.5 Sonnet API", "Google Workspace Webhooks", "RegEx Filters"],
    iterationJourney: {
      firstAttempt: "Early prompts simply asked the LLM to 'make this sound like our brand', which created overly verbose and generic marketing fluff.",
      finalResult: "Constructed a 5-step evaluation rubric containing positive and negative examples with strict token constraints. The revised workflow added a structured review rubric and clearer approval boundaries."
    },
    evaluationOutcome: {
      rubricScore: "Reviewed against a workflow rubric",
      reviewNotes: "Demonstrated measurable time savings with clear guardrails preventing unauthorized edits.",
      credentialIssued: "Evaluation focuses on workflow quality and practical value."
    },
    verifiedArtifactType: "Workflow Architecture Blueprint + System Promptbook"
  },
  {
    id: "work-3",
    learnerHandle: "Marcus T.",
    track: "AI Literacy",
    roleContext: "High School Science Educator",
    projectTitle: "Socratic AI Physics Tutor & Misconception Detector",
    problemSolved: "Students relying on AI for physics homework were getting direct answers without grasping Newton's laws, leading to poor conceptual retention.",
    whatTheyBuilt: "A configured Socratic reasoning prompt system that refuses to provide direct answers, asking progressive guiding questions based on student input and identifying common physics misconceptions.",
    toolsUsed: ["Custom GPT Architecture", "Socratic Dialogue Framework", "Pedagogical Rubrics"],
    iterationJourney: {
      firstAttempt: "System easily gave in when students demanded 'just give me the solution for question 3'.",
      finalResult: "Implemented system-level prompt constraints and boundary rules that redirect answer-seeking into guided conceptual hints."
    },
    evaluationOutcome: {
      rubricScore: "Reviewed against a practical rubric",
      reviewNotes: "Strong testing of common answer-seeking and boundary-bypass cases.",
      credentialIssued: "Evaluation focuses on safe, useful, and repeatable AI use."
    },
    verifiedArtifactType: "Pedagogical Prompt Specification + Audit Logs"
  }
];
