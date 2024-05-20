{
  // function with generic
  const createArrayWithGeneric = <T>(param1: T): T[] => {
    return [param1];
  };

  const resGeneretor = createArrayWithGeneric("Bangladesh");

  // Output
  console.log(resGeneretor);

  // type 
  interface user{
    name: string;
    age: number
  }

  const resObjectGenerator = createArrayWithGeneric <user> ({
    name: "Firoz",
    age: 21
  })

  // Output
  console.log(resObjectGenerator);

  //
}
