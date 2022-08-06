var rent = prompt(`Enter rent amount`);
rent = parseFloat(rent);
var balance = prompt(`Enter the current amount in your account`);
balance = parseFloat(balance);

var unkownAmount = 0;
var gift = false;
var month = 1;
var debt = 0;

var salary = balance;
balance += salary;

if (balance >= rent) {
  balance -= rent;
} else {
  debt = rent;
}

month++; //? = month + 1 / month += 1
balance += salary / 2;
rent += 200;

if (balance >= debt) {
  balance -= debt;
}

if (balance >= rent) {
  balance -= rent;
} else {
  debt += rent;
}

month++;
balance -= 500;
unkownAmount = Math.trunc(balance);
balance = 0;

if (unkownAmount < 0) {
  gift = true;
  unkownAmount = -unkownAmount;
}

var msg = `the month we are in is ${month}.
I owe my landlord ${debt}.
the gift was ${gift}.
The new amount is ${unkownAmount}.`
alert (msg)
