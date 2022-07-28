const casual = require("casual");

const randomNumber = casual.integer((from = 0), (to = 99));
const randomPersonName = () => {
  return `${casual.name_prefix}, ${casual.first_name} ${casual.last_name}`;
};

const sex = ["male", "female", "other"];
const randomSex = sex[casual.integer(0, 2)];
casual.define("user", () => ({
  firstName: casual.first_name,
  lastName: casual.last_name,
  sex: randomSex,
  address: {
    country: casual.country,
    city: casual.city,
    street: casual.street,
  },
  email: casual.email,
  password: casual.password,
  age: casual.integer((from = 0), (to = 99)),
  month: casual.month_name,
  color: casual.color_name,
}));

console.log("Rima Sakalauskaite");
console.log(casual.city);
console.log(casual.city, randomNumber);
console.log(randomPersonName());
console.log(casual.user);
