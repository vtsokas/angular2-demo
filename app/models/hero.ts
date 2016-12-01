import {AbstractProjectableObject, Projectable} from "./abstract-object";

export class Hero extends AbstractProjectableObject {
  id: number;
  @Projectable
  strength: number;
  @Projectable
  intelligence: number;
  @Projectable
  stealth: number;
  @Projectable
  speed: number;
}
