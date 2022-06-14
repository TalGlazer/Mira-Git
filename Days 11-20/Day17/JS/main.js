var UsersFromDB = [];
const $ = {
    email: document.querySelector("#email"),
    pass: document.querySelector("#pass"),
    button: document.querySelector("button"),
    main: document.querySelector("main"),
};

var userJSON = localStorage.user;
const user = userJSON ? JSON.parse(userJSON) : {}; // {token:"wertgw45h24", email:"meir@mail.com", fName:"Meir"}

$.button.addEventListener("click", function () {
    //VERIFY IN SERVER
    var emailFromForm = $.email.value;
    var passFromForm = $.pass.value;
    var x = { email: emailFromForm, pass: passFromForm };
    userVerif(x, "pass");
});

function welcome() {
    $.main.innerHTML = `Welcome, ${user.fName}`;
}
function errorCred() {
    alert("Wrong Credentials");
}

function localStorageUpdate(key, obj) {
    localStorage[key] = JSON.stringify(obj);
}

function generator() {
    var string = "a0b1c2d3e4f5g6h7i8j9klmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var ts = Date.now().toString();
    var token = "";
    for (const i of ts) {
        token += string[parseInt(Math.random() * string.length)] + i;
    }
    return token;
}

function checkIfTokenNotExpire(t) {
  //C1Y6j5t3D89H8x6J1J9R6Y6c7z4
  var ts = "";
  for (let i = 1; i < t.length; i += 2) {
    ts += t[i]; // 168655695355
  }
  if (new Date(parseInt(ts)).getTime() + 2629800000 > Date.now()) {
    return true; // valid token
  }
  return false;
}


function userVerif(userObj, type) {
    for (const i of UsersFromDB) {
        if (userObj.email == i.email && userObj[type] == i[type]) {
            // Operation done in server
            var token = generator(); // Operation done in server
            user.token = token;
            user.email = userObj.email;
            user.fName = i.fName;
            i.token = token; // UPDATE DB WITH NEW TOKEN!!
            localStorageUpdate("user", user);
            localStorageUpdate("webschoolUsers", UsersFromDB); // Operation done in server
            return welcome();
        }
    }
    // We are here because there is an error in verif
    type == "pass" ? errorCred() : localStorage.removeItem("user");
}

function init() {
    var fromLS = localStorage.webschoolUsers; // Operation done in Server
    if (fromLS) {
        UsersFromDB = JSON.parse(fromLS); // Operation done in Server
        if (user && user.email && user.token) {
            userVerif(user, "token");
        }
    } else {
        UsersFromDB = [
            {
                fName: "Meir",
                email: "meir@mail.com",
                token: "ertyhw6uw56u2356",
                pass: "pass123",
            },
            {
                fName: "Efrat",
                email: "eff@mail.com",
                token: "265thsw46iuw56kj",
                pass: "pass123",
            },
            {
                fName: "Aaron",
                email: "aar@mail.com",
                token: "w567kw576uw56wkiwq",
                pass: "pass123",
            },
            {
                fName: "Naor",
                email: "naor@mail.com",
                token: "wq45hw46iwi76",
                pass: "pass123",
            },
            {
                fName: "Roya",
                email: "roya@mail.com",
                token: "r798poe57i576w5yk",
                pass: "pass123",
            },
        ];
        localStorage.webschoolUsers = JSON.stringify(UsersFromDB);
    }
}

init();
