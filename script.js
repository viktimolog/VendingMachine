'use strict';

class Drink
{
constructor(name, price, count)
{
this.name = name;
this.price = price;
this.count = count;
}
}//end class Drinks 

class VendingMachine
{
constructor(drinks)
{
this.drinks = drinks;
this.moneyUser = 0;
this.oddMoney = 0;

}//end constructor

drinkChoice()
{
let radio = document.getElementsByName('drink');

  for (let i = 0; i < radio.length; i++)
   {      
      if (radio[i].checked)
       {
        return i;
      }
  }
}

}//end class VendingMachine

class View
{
constructor(vm)
{
  this.vm = vm;
}
toString()
{
document.getElementById('noDrink').value = this.vm.drinks[this.vm.drinkChoice()].name + ' in the machine: ' + this.vm.drinks[this.vm.drinkChoice()].count;
document.getElementById('noOddMoney').value = 'Your odd money: ' + this.vm.oddMoney;
document.getElementById('moneyUser').value = 'Your money in the VM: ' + this.vm.moneyUser;
document.getElementById('select').value = 0;
}
}//end class View

class Controller
{
constructor()
{
this.water = new Drink('Water',1,Math.round(Math.random() * (5 - 1) + 1));
this.tea = new Drink('Tea',3,Math.round(Math.random() * (5 - 1) + 1));
this.coffee = new Drink('Coffee',5,Math.round(Math.random() * (5 - 1) + 1));
this.cappuccino = new Drink('Cappuccino',10,Math.round(Math.random() * (5 - 1) + 1));

this.drinks = [this.water, this.tea, this.coffee, this.cappuccino];

this.vm = new VendingMachine(this.drinks);

this.view = new View(this.vm);

this.view.toString();
}//}//end constructor
}//end Controller

var controller = new Controller();

document.getElementById('getRadio').onchange = function() 
{
controller.view.toString();
}

document.getElementById("addMoneyButton").addEventListener("click", function()
{
let sel = document.getElementById('select');

controller.vm.moneyUser += +sel.value;

controller.vm.oddMoney = 0;

controller.view.toString();
});

document.getElementById("clear").addEventListener("click", function()
{
location.reload();
});

document.getElementById("getButton").addEventListener("click", function()
{
   let getDrink = controller.vm.drinks[controller.vm.drinkChoice()];//снять с радио

   if(controller.vm.moneyUser<getDrink.price)
   {
      alert('Sorry, your money is precious few in VM.');     
   }
   else//денег хватает
   {
    if(controller.vm.drinks[controller.vm.drinkChoice()].count==0)
    {
      alert('Sorry, this drink is over.');     
    }
    else
    {
    controller.vm.oddMoney = controller.vm.moneyUser - controller.vm.drinks[controller.vm.drinkChoice()].price;
    controller.vm.drinks[controller.vm.drinkChoice()].count-=1;
    controller.vm.moneyUser = 0;    
    controller.view.toString();
    }
   }   
});







