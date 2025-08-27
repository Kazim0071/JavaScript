const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thus: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({starterIndex = 0, mainIndex= 0, time= '22:00', address}) {
    console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
  }
};

restaurant.orderDelivery({
  starterIndex: 2,
  mainIndex: 0,
  address: 'Via del Sole, 21',
  // time: '22:30'
})

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// Same result but different approach

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Setting up default values
const { menu = [], starterMenu = [], mainMenu = [] } = restaurant;
console.log(menu, starterMenu, mainMenu);

// Mutating variables
let a = 111;
let b = 999;
const Obj = {a: 23, b: 7, c: 14};
({a,b} = Obj);
console.log(a,b);

// Nested Objects

const { fri: { open: o, close: c } } = restaurant.openingHours;
console.log(o, c);