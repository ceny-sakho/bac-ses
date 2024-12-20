import { ChapterData } from './types';
import { secondeChapters } from './chapters/secondeChapters';
import { premiereChapters } from './chapters/premiereChapters';
import { terminaleChapters } from './chapters/terminaleChapters';

export const chaptersData: Record<string, ChapterData> = {
  ...secondeChapters,
  ...premiereChapters,
  ...terminaleChapters
};