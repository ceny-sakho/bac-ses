export interface DissertationTopic {
  question: string;
  year: string;
  location: string;
}

export interface TopicsByChapter {
  [key: string]: DissertationTopic[];
}