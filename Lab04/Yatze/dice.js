var Dice = (function() {
  var entity = {
    "history01": [],
    "history02": [],
    "history03": [],
    "history04": [],
    "history05": [],
    "rolable01": true,
    "rolable02": true,
    "rolable03": true,
    "rolable04": true,
    "rolable05": true,
    "bla": 0
  };

  entity.save = function(id) {
    if (id == 1) {this.rolable01 = false; }
    else if (id == 2) {this.rolable02 = false;}
    else if (id == 3) {this.rolable03 = false;}
    else if (id == 4) {this.rolable04 = false;}
    else {this.rolable05 = false;}
  }

  entity.unsave = function(id) {
    if (id == 1) {this.rolable01 = true;}
    else if (id == 2) {this.rolable02 = true;}
    else if (id == 3) {this.rolable03 = true;}
    else if (id == 4) {this.rolable04 = true;}
    else {this.rolable05 = true;}
  }

  entity.getRolableStat = function(id) {

    if (id == 1) {return this.rolable01;}
    else if (id == 2) {return this.rolable02;}
    else if (id == 3) {return this.rolable03;}
    else if (id == 4) {return this.rolable04;}
    else {return this.rolable05;}
  }

  entity.roll = function(id) {

    if (id == 1) {
      if (this.rolable01) {
        this.bla++;
        var nextValue = Math.floor(1 + Math.random() * 6);
        this.history01.push(nextValue);
        return nextValue;
      }
      else {
        return this.history01[this.history01.length - 1];
      }
    }

    else if (id == 2) {
      if (this.rolable02) {
        var nextValue = Math.floor(1 + Math.random() * 6);
        this.history02.push(nextValue);
        return nextValue;
      }
      else {
        return this.history02[this.history02.length - 1];
      }
    }

    else if (id == 3) {
      if (this.rolable03) {
        var nextValue = Math.floor(1 + Math.random() * 6);
        this.history03.push(nextValue);
        return nextValue;
      }
      else {
        return this.history03[this.history03.length - 1];
      }
    }

    else if (id == 4) {
      if (this.rolable04) {
        var nextValue = Math.floor(1 + Math.random() * 6);
        this.history04.push(nextValue);
        return nextValue;
      }
      else {
        return this.history04[this.history04.length - 1];
      }
    }

    else {
      if (this.rolable05) {
        var nextValue = Math.floor(1 + Math.random() * 6);
        this.history05.push(nextValue);
        return nextValue;
      }
      else {
        return this.history05[this.history05.length - 1];
      }
    }
  }

  // entity.showHistory = function() { 
  //   if (this.history01.length == 0) {
  //     document.writeln("<br>No die has been thrown yet.<br>");
  //   } else {
  //     document.writeln("<br>Dice rolls ("+ this.history.length +")<br>");
  //     for (var i = 0, len = this.history.length; i < len; i++) {
  //       document.writeln("<li>" + this.history[i] + "</li>");
  //     }
  //   }
  // }

  entity.showDie = function(id, num) {
    var html = htmlDie(num);
    document.getElementById(id).innerHTML = html;
    return html;
  }

  function htmlDie(num) {
    var html = '<div class="dice" />';
    var pos = positions(num);
    for (var i = 0, len = pos.length; i < len; i++) {
      html += htmlDot(pos[i]);
    }    
    html += '</div>';
    return html;
  }

  function htmlDot(position) {
    return '<div class="'+ position +'"><div class="dot"></div></div>';
  }

  function positions(num) {
    switch (num) {
      case 0: return [];
      case 1: return ["middle"];
      case 2: return ["top-left", "bottom-right"];
      case 3: return ["top-left", "middle", "bottom-right"];
      case 4: return ["top-left", "top-right", "bottom-left", "bottom-right"];
      case 5: return ["top-left", "top-right", "bottom-left", "bottom-right", "middle"];
      case 6: return ["top-left", "top-right", "bottom-left", "bottom-right", "middle-left", "middle-right",];
    }
  }

  return entity;
}());