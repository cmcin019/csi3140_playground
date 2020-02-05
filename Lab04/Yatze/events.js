
window.addEventListener("load", start, false);

function start() {

  let roller = document.getElementById("roller");
  let rollHistory = document.getElementById("rollHistory");
  let arr = [];

  roller.addEventListener(
    "click", 
    function () {
      let nextValue = Dice.roll(1);
      let nextHtml = Dice.showDie("die01", nextValue);
      arr.push(nextValue);

      nextValue = Dice.roll(2);
      nextHtml = Dice.showDie("die02", nextValue);
      arr.push(nextValue);

      nextValue = Dice.roll(3);
      nextHtml = Dice.showDie("die03", nextValue);
      arr.push(nextValue);

      nextValue = Dice.roll(4);
      nextHtml = Dice.showDie("die04", nextValue);
      arr.push(nextValue);

      nextValue = Dice.roll(5);
      nextHtml = Dice.showDie("die05", nextValue);
      arr.push(nextValue);


      document.getElementById("rollHistory").innerHTML = '<div class="dice-container">' + sumUpScore(arr) + '</div>';
      arr = [];

    }, 
    false);



  let die01 = document.getElementById("die01");
  die01.addEventListener(
    "click",
    function() {
      if (Dice.getRolableStat(1)) {
        Dice.save(1);
      }
      else {
        Dice.unsave(1);      
      }
    }, 
    false);

  let die02 = document.getElementById("die02");
  die02.addEventListener(
    "click",
    function() {
      if (Dice.getRolableStat(2)) {
        Dice.save(2);
      }
      else {
        Dice.unsave(2);      
      }
    }, 
    false);

  let die03 = document.getElementById("die03");
  die03.addEventListener(
    "click",
    function() {
      if (Dice.getRolableStat(3)) {
        Dice.save(3);
      }
      else {
        Dice.unsave(3);      
      }
    }, 
    false);

  let die04 = document.getElementById("die04");
  die04.addEventListener(
    "click",
    function() {
      if (Dice.getRolableStat(4)) {
        Dice.save(4);
      }
      else {
        Dice.unsave(4);      
      }
    }, 
    false);

  let die05 = document.getElementById("die05");
  die05.addEventListener(
    "click",
    function() {
      if (Dice.getRolableStat(5)) {
        Dice.save(5);
      }
      else {
        Dice.unsave(5);      
      }
    }, 
    false);

  Dice.showDie("die01", 1);  
  Dice.showDie("die02", 1);  
  Dice.showDie("die03", 1);  
  Dice.showDie("die04", 1);  
  Dice.showDie("die05", 1);  
}

function sumUpScore(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

