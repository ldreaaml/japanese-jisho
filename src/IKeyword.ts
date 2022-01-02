export interface KeywordList{
    [index:number]:Keyword;
}
export interface Keyword {
    slug:        string;
    is_common:   boolean;
    tags:        any[];
    jlpt:        any[];
    japanese:    Japanese[];
    senses:      Sense[];
    attribution: Attribution;
}

export interface Attribution {
    jmdict:   boolean;
    jmnedict: boolean;
    dbpedia:  string;
}

export interface Japanese {
    word:    string;
    reading: string;
}

export interface Sense {
    english_definitions: string[];
    parts_of_speech:     string[];
    links:               Link[];
    tags:                string[];
    restrictions:        any[];
    see_also:            any[];
    antonyms:            any[];
    source:              any[];
    info:                any[];
    sentences?:          any[];
}

export interface Link {
    text: string;
    url:  string;
}
