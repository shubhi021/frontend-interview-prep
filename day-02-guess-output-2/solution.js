let lol = {
  name: 'Andrew Tate',
  first() {
    console.log(this.name + ' Loves AngularJS');
  },
  second: () => {
    console.log(this.name + ' Loves himself. F Frameworks.');
  },
};

lol.first();
lol.second();


//Output 
Andrew Tate Loves AngularJS
undefined Loves himself. F Frameworks.
