interface IProjectable{
  name:string;
  visibleProperties: string[];
  getVisibleProperties(): string[];
  addVisibleProperty(prop:string): void;
}
