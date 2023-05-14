let user = {
  username: 'Tommy98',
  startDate: new Date(),
  gold: 1000,
  food: 1000,
  production: 1000,
  gems: 50,
};
console.log('User: ', user);

let userNavBar = document.querySelector('#noUserNav2');

if (user !== null) {
  userNavBar.style.visibility = 'hidden';
}

let goldContainer = document.querySelector('#goldContainer');
let productionContainer = document.querySelector('#productionContainer');
let foodContainer = document.querySelector('#foodContainer');
let gemsContainer = document.querySelector('#gemsContainer');

goldContainer.innerText = "💰" + user.gold;
productionContainer.innerText = "🛠" + user.production;
foodContainer.innerText = "🥓" + user.food;
gemsContainer.innerText = "💎" + user.gems;
