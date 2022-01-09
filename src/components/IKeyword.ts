export interface Japanese {
  word: string;
  reading: string;
}

export interface Sens {
  english_definitions: string[];
  parts_of_speech: string[];
  links: any[];
  tags: any[];
  restrictions: any[];
  see_also: any[];
  antonyms: any[];
  source: any[];
  info: any[];
}

export interface Attribution {
  jmdict: boolean;
  jmnedict: boolean;
  dbpedia: boolean;
}

export interface Keyword {
  slug: string;
  is_common: boolean;
  tags: any[];
  jlpt: any[];
  japanese: Japanese[];
  senses: Sens[];
  attribution: Attribution;
}
