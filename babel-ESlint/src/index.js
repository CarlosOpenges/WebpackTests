const arr = [1, 2, 3];

const codeES6 = () => console.log(...arr);

codeES6();

class Game {
    constructor(bar) {
      this.bar = bar;
      this.publicMethod();
    }

    publicMethod() {
      return console.log('Inside public method. Bar ='+this.bar);
    }
}
const myGame = new Game()
// Create paragraph node
const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`

class FooClass {
  #bar
  constructor(bar) {
    this.#bar = bar;
    this.#privateMethod();
  }

  #privateMethod() {
    return console.log('Inside private method. Bar ='+this.#bar);
  }
}
const Foo = new FooClass('Lalala');

// Create heading node
const heading = document.createElement('h1');
heading.textContent = 'Interesting!';

// Append heading node to the DOM
const app = document.querySelector('#root');
app.append(heading);