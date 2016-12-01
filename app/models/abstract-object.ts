export class AbstractObject{
  /**
   * Exchange properties with JS Object
   */
  constructor(data:Object){
    Object.keys(data).forEach( key => {
      this[key] = data[key];
    });
  }
}

export class AbstractProjectableObject extends AbstractObject implements IProjectable{
  /**
   * An array to collect the projectable properties
   */
  visibleProperties: string[];

  /**
   * Every projectable object must have a name
   */
  @Projectable
  name: string;

  addVisibleProperty(prop:string){
    if (!this.visibleProperties)
      this.visibleProperties = [];

    this.visibleProperties.push(prop);
  }

  getVisibleProperties():string[]{
    return this.visibleProperties;
  }
}

/**
 * Will run for every property decorated with @Projectable
 */
export function Projectable(target:IProjectable, key:string){
  target.addVisibleProperty(key);
}
