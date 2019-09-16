var num1 = prompt("Hoeveel kleine pizza's wilt u? (€4)");
var num2 = prompt("Hoeveel medium pizza's wilt u? (€6)");
var num3 = prompt("Hoeveel grote pizza's wilt u? (€9)");

num1 = parseFloat(num1);//parsefloat zorgt ervoor dat het alleen nummers herkent zodat het geen errors geeft.
num2 = parseFloat(num2);
num3 = parseFloat(num3);

document.write("Uw eindbedrag is:" + (num1 * 4 + num2 * 6 + num3 * 9));
document.write("<br/>"); 
document.write("Uw aantal pizza's zijn:" + (num1 + num2 + num3));
