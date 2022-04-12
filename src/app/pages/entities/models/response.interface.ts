import { EntityI } from "./entity.interface";

export interface ResponseI{
  code: string;
  message: string;
  type:string;
  data:EntityI;
  traceId: string;
}
