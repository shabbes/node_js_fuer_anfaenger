class Box<T> {
  private _contents: T;

  constructor(contents: T) {
    this._contents = contents;
  }

  get contents(): T {
    return this._contents;
  }
}

const stringBox = new Box<string>('Hello, TypeScript!');
console.log(stringBox.contents); // Ausgabe: Hello, TypeScript!