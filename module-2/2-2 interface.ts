{
  //

  // Interface
  // Learnig Interface

  interface User1 {
    name: string;
    age: number;
  }

  interface UserWithRole1 extends User1 {
    role: string;
  }

  const user1: UserWithRole1 = {
    name: "Firoz Al Hasan",
    age: 21,
    role: "Manager",
  };

  console.log(user1);

  //
}
