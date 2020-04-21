import { SumaryModel } from './sumary';
import { SourceModel } from './source';
import { AuthorModel } from './author';
import { EntityModel } from './entity';
import { MediaModel } from './media';
import { LinkModel } from './link';
import { CategoryModel } from './category';
import { SentimentModel } from './sentiment';

class StoryModel {
  id: number;
  title: string;
  body: string;
  sumary: SumaryModel;
  source: SourceModel;
  author: AuthorModel;
  entities: EntityModel;
  keywords: string[];
  hashtags: string[];
  characters_count: number;
  words_count: number
  categories: CategoryModel;
  media: MediaModel;
  sentiment: SentimentModel;
  language: string;
  published_at: string;
  links: LinkModel;
}

export class StoriesModel {
  stories: StoryModel;
}
