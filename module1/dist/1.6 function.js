"use strict";
{
    // Learning Funciton
    // Normal Function
    // Arrow function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 3);
    const addArrow = (num1, num2) => {
        return num1 + num2;
    };
    addArrow(5, 5);
    // object --> funcion === method
    const poorUser = {
        name: "Firoz",
        balance: 0,
        addBallan(balance) {
            return `My new balance is : ${this.balance + balance}`;
        },
    };
    // Map Function
    const arr = [3, 5, 7, 4, 9];
    const newArr = arr.map((elem) => elem * elem);
    console.log(newArr);
}
