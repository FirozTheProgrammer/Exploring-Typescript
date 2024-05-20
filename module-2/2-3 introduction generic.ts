{
  //
  // Introduction generic array

  // Generic
  type GenericArray<T> = Array<T>;

  // Numnber
  const rollNumbers: GenericArray<number> = [11, 78, 14, 18, 20];

  // String
  const mentors: GenericArray<string> = [
    "Firoz",
    "Sky",
    "Sharna",
    "srn",
    "frz",
  ];

  // Boolean
  const boolArray: GenericArray<boolean> = [true, false, true];

  // Output
  //   console.log(rollNumbers);
  //   console.log(mentors);
  //   console.log(boolArray);

  // Array of Object
  const user: GenericArray<{ name: string; age: number; rule: number }> = [
    {
      name: " Firoz",
      age: 21,
      rule: 32,
    },
    {
      name: "Sharna",
      age: 21,
      rule: 18,
    },
  ];

  // Output
  //   console.log(user);
  //   console.log(user[1].name);

  // Generic tuple

  type GenericTuple<X, Y, Z> = [X, Y, Z];

  const family: GenericTuple<String, String, { name: string; age: number }> = [
    "Mr, Firoz",
    "Mrs Sharna",
    { name: "Frz", age: 21 },
  ];

  console.log(family);

  //
}
