class SentimentTitle {
    polarity: string;
    score: number;
}

class SentimentBody {
    polarity: string;
    score: number;
}

export class SentimentModel {
    title: SentimentTitle;
    body: SentimentBody;
}
