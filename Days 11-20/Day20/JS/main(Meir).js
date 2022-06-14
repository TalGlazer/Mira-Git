import { ErrorHandler } from "./handlers/error.js";

function rand() {
  return parseInt(Math.random() * 1800 + 200);
}

document.querySelector("button").addEventListener("click", function() {
  buyHouse(123456789)
})

function buyHouse(tz) {
  checkAccount(tz) // reject - no account
    .then(checkIncome) // reject low income
    .then(checkBDI) // returns bool  reject false
    .then(requestMortgage) // reject
    .then(placeOffer) // reject house is too expensive
    .then((res) => {
      alert("Mazal Tov!! " + res.mess);
    })
    .catch((err) => {
      if (err.error.type == "local") {
        console.log(
          "You have an error in function: " +
            err.func +
            ".  The error is: " +
            err.error.message
        );
      }
    })
    .finally(() => {
      alert("I'm done");
    });
}
function checkAccount(tz) {
  return new Promise((resolve, reject) => {
    console.log("chcking account");
    if (tz) resolve(true);
    else
    reject(new ErrorHandler("checkAccount","local", "No bank account"));
     
  });
}
function checkIncome(bool) {
  return new Promise((resolve, reject) => {
    console.log("chcking income");
    if (bool) resolve(true);
    else reject();
  });
}

function checkBDI(bool) {
  return new Promise((resolve, reject) => {
    console.log("chcking BDI");
    if (bool) resolve({ bool: true, score: 150 });
    else reject();
  });
}

function requestMortgage(resObj) {
  return new Promise((finalResolve, finalReject) => {
    setTimeout(() => {
      var bankResponses = [];
      if (resObj.bool) {
        var allBanks = [
          "mashk@leumi.co.il",
          "mashk@poalim.co.il",
          "mashk@mizrahi.co.il",
          "mashk@mdb.co.il",
          "mashk@yahav.co.il",
        ];

        var kolHaHavtahot = [];
        allBanks.forEach((x) => {
          kolHaHavtahot.push(
            new Promise((resolve, reject) => {
              setTimeout(() => {
                console.log("sending to bank: " + x + " ...");
                // API call to the banks
                //APIKEY from caller (agent moursheh)
                //TZ of requester
                //Amount
                //BDI score (resObj.score)

                //bank gets an email and returns a response
                //if email went out
                var obj = {
                  name: x,
                  amount: "2,000,000",
                  years: 20,
                  rate: 3.5,
                  approved: true,
                };
                var error = {} // this would be error coming from bank
                var bools = true
                if(bools)resolve(obj);
                else reject(new ErrorHandler(`requestMortgage - bank request${x}`,
                "server", error))
              }, rand());
            })
          );
        });
        Promise.all(kolHaHavtahot)
          .then((allResponsesTogether) => {
            for (let bank of allResponsesTogether) {
              if (bank.approved) {
                var obj = {
                  name: bank.name,
                  amount: bank.amount,
                  rate: bank.rate,
                  years: bank.years,
                };
                bankResponses.push(obj);
              }
            }
            if (bankResponses.length > 0) {
              finalResolve(bankResponses);
            } else {
              finalReject({
                func: "checkAccount",
                error: { type: "local", message: "No bank approved you" },
              });
            }
          })
          .catch((err) => {
            reject(
              "There is a problem with my system. Please come back at a later time"
            );
          });
      } else {
        finalReject("Your bdi is no good");
      }
    }, rand());
  });
}

function placeOffer(res) {
  return new Promise((resolve, reject) => {
    console.log(res);
    var answerFromOwner = true;
    if (answerFromOwner) {
      var retObj = {
        mess: "Your offer was approved",
      };
      resolve(retObj);
    } else {
      reject("The house is too expensive");
    }
  });
}
