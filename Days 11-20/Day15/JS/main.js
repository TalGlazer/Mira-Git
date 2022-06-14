const Cars = [
  {
    plate: "1234567",
    make: "Honda",
    model: "Civic",
    category: ["Economy", "Compact"],
    price: "$20,000",
    image: "honda.jpg",
    sayMyNameAndPrice: function () {
      alert(`I am ${this.make + " " + this.model} and I cost ${this.price}`);
    },
  },
  {
    plate: "1234568",
    make: "BMW",
    model: "M5",
    category: ["Sedan", "Sport"],
    price: "$100,000",
    image: "BMW.jpg",
    sayMyNameAndPrice: function () {
      alert(`I am ${this.make + " " + this.model} and I cost ${this.price}`);
    },
  },
  {
    plate: "1231567",
    make: "Mercedes",
    model: "E-Class",
    category: ["Luxury"],
    price: "$50,000",
    image: "mercedes.jpg",
    sayMyNameAndPrice: function () {
      alert(`I am ${this.make + " " + this.model} and I cost ${this.price}`);
    },
  },
  {
    plate: "1534567",
    make: "Toyota",
    model: "Rav4",
    category: ["SUV"],
    price: "$30,000",
    image: "toyota.jpg",
    sayMyNameAndPrice: function () {
      alert(`I am ${this.make + " " + this.model} and I cost ${this.price}`);
    },
  },
  {
    plate: "1299967",
    make: "Audi",
    model: "A7",
    category: ["Luxury", "Sedan"],
    price: "$80,000",
    image: "audi.jpg",
    sayMyNameAndPrice: function () {
      alert(`I am ${this.make + " " + this.model} and I cost ${this.price}`);
    },
  },
  {
    plate: "1275967",
    make: "Cadillac",
    model: "CT-6",
    category: ["Luxury", "Sedan"],
    price: "$60,000",
    image: "cadillac.jpg",
    sayMyNameAndPrice: function () {
      alert(`I am ${this.make + " " + this.model} and I cost ${this.price}`);
    },
  },
  {
    plate: "128745",
    make: "Kia",
    model: "Carnival",
    category: ["Luxury", "Van"],
    price: "$40,000",
    image: "kia.jpg",
    sayMyNameAndPrice: function () {
      alert(`I am ${this.make + " " + this.model} and I cost ${this.price}`);
    },
  },
];

const main = document.querySelector("main");
main.innerHTML = Cars.map(oneCarShablona).join("");

function oneCarShablona(car, x) {
  return `
<div id="car${car.plate}" class="eachCar cat-${car.category.join(" cat-")}">
    <h3 class="category">${car.category.join(", ")}</h3>
    <button class="btn btn-danger button dlt" onclick="deleteCar(this, '${
      car.plate
    }')">X</button>
    <img src="assets/images/${car.image}">
    <p class="make">${car.make}</p>
    <p class="model">${car.model}</p>
    <p class="price">${car.price}</p>
    </div>`;
}

function addCar() {
  const Form = {
    plate: document.getElementById("plate"),
    make: document.getElementById("make"),
    model: document.getElementById("model"),
    price: document.getElementById("price"),
    category: document.getElementById("category"),
  };
  const obj = new Car(
    Form.plate.value,
    Form.make.value,
    Form.model.value,
    Form.price.value,
    Form.category.value.split(",")
  );
  Cars.push(obj);
  main.innerHTML += oneCarShablona(obj, Cars.length - 1);

  Form.plate.value = "";
  Form.make.value = "";
  Form.model.value = "";
  Form.price.value = "";
  Form.category.value = "";
}

function deleteCar(btn, plate) {
  btn.parentElement.remove();
  for (let i = 0; i < Cars.length; i++) {
    const car = Cars[i];
    if (car.plate == plate) {
      Cars.splice(i, 1);
      break;
    }
  }
}

class Car {
  constructor(_plate, _make, _model, _price = 0, _category = "Standard") {
    (this.plate = _plate),
      (this.make = _make),
      (this.model = _model),
      (this.price = _price),
      (this.category = _category);
  }
}
