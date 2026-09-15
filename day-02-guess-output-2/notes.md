The first method is defined as a regular function, so this will refer to the lol object itself. 
This means that this.name will be equivalent to lol.name, which is Andrew Tate.

The second method is defined as an arrow function, which does not bind its own this value. 
In this case, this will refer to the value of this in the lexical scope, 
which is the global object. Since there is no name property on the global object, this.name will be undefined.
