var water = 300;   //in ml
var milk =  200    //in ml
var coffee = 230   //in g
var money = 0.00    //in $
var moneyOfEspresso = 2.00     //in $
var moneyOfLatte = 2.50        //in $
var moneyOfCappuccino = 3.00   //in $
var quarters = 0.25            //in $
var dimes = 0.10               //in $
var nickles = 0.05             //in $
var pennies = 0.01             //in $
var b =prompt("Do you want to start the machine? (on/off) : ")
if(b == "on"){
    while(b=true){
    var a = prompt("What do you like? (espresso/latte/cappuccino):")
    if(a == "espresso"){    
        alert("Action has completed")
        espresso()
    }
    
    else if(a == "latte"){
        alert("Action has completed")
        latte();
    }
    
    else if(a == "cappuccino"){
        alert("Action has completed")
        cappuccino();
    }

    else if(a == "off"){
        alert("Machine get switched off")
        showMessage();
    }
   
    else{
        alert("Type valid coffee name")
    }
  }
}
function espresso(){
    if(water<120){
        alert("Sorry ,  there is no enough water.")
    }else if(milk<50){
        alert("Sorry ,  there is no enough milk.")
    }else if(coffee<60){
        alert("Sorry ,  there is no enough coffee powder.")
    }else{
        alert("You have to insert $"+moneyOfEspresso+" money.")

        var p =prompt("Insert the number of quarters that you want to be inserted")
        var q =prompt("Insert the number of dimes that you want to be inserted")
        var r =prompt("Insert the number of nickles that you want to be inserted")
        var s =prompt("Insert the number of pennies that you want to be inserted")
        var givenMoney = (p*quarters)+(q*dimes)+(r*nickles)+(s*pennies)

        var x = givenMoney-2.00
        var y = x.toString();
        var remainingMoney  = parseFloat(y).toFixed(2);
        if(givenMoney >= 2.00 ){
            if(givenMoney == 2.00){
                alert("You inserted required money")
            }else if(givenMoney > 2.00){
                alert("Here is $"+remainingMoney+" dollars in change.")
            }
            water -= 120
            milk  -= 50
            coffee-= 60
            money += 2.00;
            var a = prompt("Do you want report? (report(yes)/no): ")
            if(a == "report"){
            alert("Water : "+water+"ml"+"\n"+ "Milk : "+milk+"ml"+" \n" +
                "Coffee : "+coffee+"g" + "\n" +"Money : "+"$"+money)
            alert("Here is your espresso, Enjoy!")
            }
        }else{
            alert("Sorry , that's not enough money, Money refunded.")
        }
    }
}

function latte(){
    if(water<100){
        alert("Sorry ,  there is no enough water.")
    }else if(milk<50){
        alert("Sorry ,  there is no enough milk.")
    }else if(coffee<75){
        alert("Sorry ,  there is no enough coffee powder.")
    }else{
        alert("You have to insert $"+moneyOfLatte+" money.")
        
        var p =prompt("Insert the number of quarters that you want to be inserted")
        var q =prompt("Insert the number of dimes that you want to be inserted")
        var r =prompt("Insert the number of nickles that you want to be inserted")
        var s =prompt("Insert the number of pennies that you want to be inserted")
        var givenMoney = (p*quarters)+(q*dimes)+(r*nickles)+(s*pennies)
 
        var x = givenMoney-2.50
        var y = x.toString();
        var remainingMoney = parseFloat(y).toFixed(2);
        if(givenMoney >= 2.50 ){
            if(givenMoney == 2.50){
                alert("You inserted required money")
            }else if(givenMoney > 2.50){
                alert("Here is $"+remainingMoney+" dollars in change.")
            }
            water -= 100
            milk  -= 50
            coffee-= 75
            money += 2.50;
            var a = prompt("Do you want report? (report(yes)/no): ")
            if(a == "report"){
            alert("Water : "+water+"ml"+"\n"+ "Milk : "+milk+"ml"+" \n" +
                "Coffee : "+coffee+"g" + "\n" +"Money : "+"$"+money)
            alert("Here is your latte, Enjoy!")
            }
        }else{
            alert("Sorry , that's not enough money, Money refunded.")
        }
    }
}

function cappuccino(){
    if(water<70){
        alert("Sorry ,  there is no enough water.")
    }else if(milk<80){
        alert("Sorry ,  there is no enough milk.")
    }else if(coffee<90){
        alert("Sorry ,  there is no enough coffee powder.")
    }else{
        alert("You have to insert $"+moneyOfCappuccino+" money.")

        var p =prompt("Insert the number of quarters that you want to be inserted")
        var q =prompt("Insert the number of dimes that you want to be inserted")
        var r =prompt("Insert the number of nickles that you want to be inserted")
        var s =prompt("Insert the number of pennies that you want to be inserted")
        var givenMoney = (p*quarters)+(q*dimes)+(r*nickles)+(s*pennies)

        var x = givenMoney-3.00
        var y = x.toString();
        var remainingMoney  = parseFloat(y).toFixed(2);
        if(givenMoney >= 3.00 ){
            if(givenMoney == 3.00){
                alert("You inserted required money")
            }else if(givenMoney > 3.00){
                alert("Here is $"+remainingMoney+" dollars in change.")
            }
            water -= 70
            milk  -= 80
            coffee-= 90
            money += 3.00;
            var a = prompt("Do you want report? (report(yes)/no): ")
            if(a == "report"){
            alert("Water : "+water+"ml"+"\n"+ "Milk : "+milk+"ml"+" \n" +
                "Coffee : "+coffee+"g" + "\n" +"Money : "+"$"+money)
            alert("Here is your cappuccino, Enjoy!")
            }
        }else{
            alert("Sorry , that's not enough money, Money refunded.")
        }
    }
}




