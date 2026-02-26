export type Attempt = {
  id: number;
  testId: number;
  userId: number;
  score: number;
  status: "in_progress" | "submitted" | "graded";
};

export type TestMeta = {
  project: string;
  track: string;
  course: string;
  purpose: string;
};

export type TestItem = {
  id: number;
  title: string;
  shortDescription: string;
  durationSec?: number | null;

  passScore: number;
  attemptsAllowed: number;
  allowRetry: boolean;

  isPublished: boolean;
  tags: string[];
  meta: TestMeta;

  deadlineISO?: string | null;
};

export type FiltersState = Record<string, unknown>;
export type AnswerValue = string | string[] | null;

export type AnswerState = {
  type: "single" | "multiple" | "text";
  value: AnswerValue;
};

export type AnswersMap = Record<number, AnswerState>;


