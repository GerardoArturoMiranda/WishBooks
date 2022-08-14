import { Book } from "src/app/models/Book"

export class GoogleApiResponse{
  items: Book[]
  kind: string
  totalItems: number
    constructor(){
      this.items = []
      this.kind = ""
      this.totalItems= 0
    }
};