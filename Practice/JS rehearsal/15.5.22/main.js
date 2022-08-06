const candidate = {
  name: `Tal`,
  age: 25,
  approved: true,
  languages: [`HTML`, `CSS`, `JS`, `nodeJS`],
};


const user = {
  fullName: { firstName: `Tal`, lastName: `Glazer` },
  ID: 123456789,
  DOB: `29/08/1997`,
  creditCards: [
    { visa: 123455667, exp: `12/21`, cvv: 123 },
    { master: 1234567965, exp: `12/21`, cvv: 123 },
    { amex: 1234567965, exp: `12/21`, cvv: 123 },
  ],
};

console.log(user.creditCards[2]);