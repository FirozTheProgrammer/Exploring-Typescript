// Reference type --> Object

const user: {
  company: "Programming Hero"; // type --> literal types
  readonly companyType: string; // type --> literal types
  firstName: string; //type --> string
  middleName?: string; // type --> optional type
  lastName: string;
  isMarried: boolean; // type --> boolean
} = {
  company: "Programming Hero",
  companyType: "Information Technology",
  firstName: "Firoz",
  middleName: "AL",
  lastName: "Hasan",
  isMarried: true,
};

console.log(user);
