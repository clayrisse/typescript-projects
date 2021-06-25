import { Model } from '../models/Model';

interface ModelForView {
  on(eventName:string, callback: () => void): void;
}

export abstract class View<T extends Model<K>, K> {

  regions: { [key:string]: Element } = {};

  constructor(public parent: Element,  public model: T) {
    this.bindModel();
  };

  abstract template(): string;

  regionsMap(): { [key:string]: string } {
    return {}
  }

  eventsMap(): { [key:string]: () => void } {
    return {}
  };

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    })
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventsKey in eventsMap) {
      const [eventName, selector] = eventsKey.split(':')

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventsKey])
      });
    }
  } 

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this .regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector)
      if (element) { //we do this cause query selector could retun null and we need to discard that
        this.regions[key] = element
      }
    }
  }
  //this method is only for view nestin, an we dont do it as "abstract" cause it's only needed here
  onRender(): void {
    //do our nesting
    
  }
  //the name render is given by us. It could be call "renderthis" or whatever
  render(): void {
    //this line erases and clean all what we are injecting in the Dom so it doesnt duplicate html
    this.parent.innerHTML = ''

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content)
    this.mapRegions(templateElement.content)

    //the nesting of the different views accour here
    this.onRender()

    this.parent.append(templateElement.content)
  }

}