export class Stack {
   // Every stack needs data and a number to identify the num of elements
    data: any[];
    top: number;

    // Constructor can take data as an argument and add it to the stack
    // Or it can initialize a new stack without any arguments
    constructor(data?: any[]){
        this.data = data ? data : [];
        this.top = data ? data.length : 0;
   }

    // Push will add a new element to the end of the stack
    push(element : any) {
      this.data[this.top] = element;
      this.top = this.top + 1;
   }
   
   // Length returns the length of the stack
   length() {
      return this.top;
   }

   // Peek will return the last element of the stack
   peek() {
      return this.data[this.top-1];
   }

   // isEmpty checks if the stack is empty
   isEmpty() {
     return this.top === 0;
   }

   // Pop will return the end of the stack and remove it
   pop() {
    if( this.isEmpty() === false ) {
       this.top = this.top -1;
       return this.data.pop();
     }
   }

   // Print loops through the stack and console.logs everything
   print() {
      var top = this.top - 1;
      while(top >= 0) {
          console.log(this.data[top]);
           top--;
       }
    }
}