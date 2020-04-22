class LinkEntity {
  confidence: number;
  provider: string;
  types: string[];
  uri: string;
}

class MentionEntity {
  confidence: number;
  offset: number;
  sentiment: object;
  text: string;
}

class EntityDetailModel {
  links: LinkEntity[];
  mentions: MentionEntity[];
  overall_sentiment: object;
  type: string;
}

export class EntityModel {
  entities: EntityDetailModel[];
}
