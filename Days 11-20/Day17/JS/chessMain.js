class Sahkan {
    constructor(_row, _col, _team, _location) {
      this.alive = true;
      this.row = _row;
      this.col = _col;
      this.team = _team;
      this.location = _location;
      this.allowedMoves = ["addOneLeft", "addOneRight"];
    }
    move(row, col, whereTo) {
      if (true) {
        this.row = whereTo.row; // A
        this.col = whereTo.col; // 6
        this.location = whereTo.location; // div#A6
      }
      return this;
    }
    eat(opponent) {
      return this;
    }
    die(location) {
      this.location.innerHTML = "";
      this.alive = false;
      return this;
    }
    upgrade() {
      return this;
    }
  }
  class Queen extends Sahkan {
    constructor(_row, _col, _team, _location, _age) {
      super(_row, _col, _team, _location);
      this.name = prompt("What name is your queen");
      this.age = _age;
      this.power = "Fly";
      this.allowedMoves = [
        "reverseManyLeft",
        "reverseManyRight",
        "addManyLeft",
        "addManyRight",
      ];
    }
  }
  