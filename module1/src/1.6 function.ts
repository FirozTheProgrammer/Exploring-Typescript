{
    

// Learning Funciton
// Normal Function
// Arrow function


function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 3);

const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};

addArrow(5, 5);

// object --> funcion === method

const poorUser = {
  name: "Firoz",
  balance: 0,
  addBallan(balance: number): string {
    return `My new balance is : ${this.balance + balance}`;
  },
};

// Map Function
const arr: number[] = [3, 5, 7, 4, 9];

const newArr: number[] = arr.map((elem: number): number => elem * elem);
console.log(newArr);

}