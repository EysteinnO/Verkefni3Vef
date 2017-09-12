
var Pizza = {
    size: ['small','medium','large'],
    alegg: ['ostur','skinka','nautahakk', 'pepperoni', 'ananas'],
    prize: []
}

var pizza1 = function(size, alegg) {
  return "Pizza 1: " + Pizza.alegg[0] + " " + Pizza.alegg[3] + " " + Pizza.size[1];
};

var pizza2 = function(size,alegg) {
    return "Pizza 2: " + Pizza.alegg[0] + " " + Pizza.alegg[1] + " " + Pizza.alegg[4] + " " + Pizza.size[2];
}

console.log(pizza1());
console.log(pizza2());

var pizzaready = pizza1();
var pizzaready2 = pizza2();

document.getElementById("pizza1").innerHTML = pizzaready;
document.getElementById("pizza2").innerHTML = pizzaready2;

