export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  // constructor, um ein objekt mit dem keyword new instanziieren zu können
  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath =  imagePath;
  }
}
