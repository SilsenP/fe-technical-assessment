import { Tag } from "./tag";

export interface Workflow {
  id: number;
  type: string;
  name: string;
  tags: Tag[]
  lastUpdated: number;
}