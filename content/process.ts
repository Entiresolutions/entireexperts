export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "A working session to understand the problem, the people affected by it, and any constraints — existing systems, timeline, budget. This ends with a written scope, not a sales pitch.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes and, where needed, a clickable prototype for anything user-facing, plus a technical plan for the data model and integrations. You approve the plan before a line of production code is written.",
  },
  {
    step: "03",
    title: "Build in iterations",
    description:
      "Development runs in short cycles, each ending with a working demo. You see progress every week instead of waiting for one delivery at the end.",
  },
  {
    step: "04",
    title: "Quality assurance",
    description:
      "Automated tests, manual QA passes, and accessibility checks run continuously through the build — not as a single phase squeezed in before launch.",
  },
  {
    step: "05",
    title: "Launch",
    description:
      "A staged rollout with monitoring in place from day one, so issues are caught from telemetry, not from user complaints.",
  },
  {
    step: "06",
    title: "Support",
    description:
      "Post-launch, we're available for monitoring, fixes, and continued feature work — whichever level of ongoing support fits what you need next.",
  },
];
