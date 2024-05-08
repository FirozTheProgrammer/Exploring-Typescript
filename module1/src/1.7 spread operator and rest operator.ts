{
  // Spread operator
  // rest operator
  //

  // learing operator

  const owner: string[] = ["Firoz", "Sharna", "Nirab"];

  const ceo: string[] = ["Asif", "abd", "md"];

  owner.push(...ceo);

  console.log(owner);

  // learning rest operator

  const getFriends = (...friends: string[]) => {
    friends.forEach((element) => console.log(`Hi ${element}`));
  };
  getFriends("abul", "kabul", "babul", "Habul", "Tabul");
}

//
