import { User, UserProps } from '../models/User'
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  
  eventsMap(): {[key:string]: () => void} {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick
    }
  }

  onSaveClick = ():void => {
    this.model.save();
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    
    // type gard check so when in "strict: true" mode, rules out "null"
    if(input) {
      const name = input.value;
      this.model.set({name})
    }

  }

  onSetAgeClick = (): void => {
    console.log('sdfsfsdfsdfsdfsdfsdfsdfs');
    this.model.setRandomAge();
  }

  template(): string{
    return `
    <div>  
      <input placeholder="${this.model.get('name')}">
      <button class="set-name">Change name</button>
      <button class="set-age">Set random age</button>
      <button class="save-model">Save User</button>
    </div>
    `
  }
}
