"use strict";
{
    // Spread operator
    // rest operator
    //
    // learing operator
    const owner = ["Firoz", "Sharna", "Nirab"];
    const ceo = ["Asif", "abd", "md"];
    owner.push(...ceo);
    console.log(owner);
    // learning rest operator
    const getFriends = (...friends) => {
        friends.forEach((element) => console.log(`Hi ${element}`));
    };
    getFriends("abul", "kabul", "babul", "Habul", "Tabul");
}
//
