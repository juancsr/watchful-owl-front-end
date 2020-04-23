import { ClasificationModel } from "./classification";
import { ConceptModel } from "./concept";
import { EntityModel } from "./entity";
import { SentimentModel } from "./sentiment";
import { SumaryModel } from "../sumary";

export class AnalysisModel {
         classification: ClasificationModel;
         concepts: ConceptModel;
         entity: EntityModel;
         sentiment: SentimentModel;
         summary: SumaryModel;
         text: string;
       }