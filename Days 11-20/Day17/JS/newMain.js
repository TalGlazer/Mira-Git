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
            this.location = whereTo.location; //div#A6

        }
    }
    eat(opponent) { }
    die(location) {
        this.location.innerHTML = "";
        this.alive = false;
    }
    upgrade() { }
}

class Queen extends Sahkan {
    constructor(_row, _col, _team, _location, _name, _age) {
        super(_row, _col, _team, _location);
        this.name = prompt("What name is your queen?");
        this.age = _age
        this.moves = ["manyDiagLeft", "manyDiagRight"];
    }
}

const teams = {}
teams.white = [];
teams.black = [];
for (let i = 0; i < 12; i++) {
    var rows = ["A", "B", "C"];
    var row = ""
    switch (true) {
        case i < 4:
            row = rows[0]
            break;
        case i < 8:
            row = rows[1]
            break;
        case i < 12:
            row = rows[2]
            break;
    }
    var col = "";
    var white = new Sahkan(row, col, "white", document.getElementById(row+col));
    var black = new Sahkan(row, col, "black", document.getElementById(row+col));
}
