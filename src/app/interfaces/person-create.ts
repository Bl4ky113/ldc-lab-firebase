import { PersonInterface } from "./person-interface";

export interface PersonCreateData {
  person: Partial<PersonInterface>;
  enableDelete: boolean;
}

export interface PersonCreateResult {
  person: PersonInterface;
  delete?: boolean;
}
