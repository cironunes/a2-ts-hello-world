import {Component} from 'angular2/core';


@Component({
  selector: 'hello-world-app',
  providers: [],
  templateUrl: 'app/hello-world.html',
  directives: [],
  pipes: []
})
export class HelloWorldApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
