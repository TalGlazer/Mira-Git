// L E S S O N 19 - R E H E A R S A L:

function rand() {
    return parseInt(Math.random() * 2000 + 200);
}

// Example 1
function buyHouse(tz) {

    checkAccount(tz) // reject - no account
        .then(checkBDI) // returns bool  reject false
        .then(checkIncome) // reject low income
        .then(requestMortgage) // reject mortgage
        .then(placeOffer) // reject house is too expensive
        .then((res) => {
            alert("Mazal Tov!! " + res.mess);
        })
        .catch((err) => {
            errorHandler(err)
        });
}

// everything in ".then" is function and MUST be called back.

function requestMortgage(bool) {
    return new Promise((resolve, reject) => {
        if (bool) {
            setTimeout(() => {
                // Calls the banks to see if anyone would grant a mortgage
                var allBanks = [
                    "Mashk@leumi.co.il",
                    "mashk@poalim.co.il",
                    "mashk@mizrahi.co.il",
                    "mashk@md.co.il",
                ];

                var allPromises = []
                allBanks.forEach(x => {
                    allPromises.push(
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                //bank gets an email and returns a response
                                resolve()
                            }, rand());
                        })
                    );
                })
            }, rand());
        }
    })
}

function placeOffer() {
    return new Promise((resolve, reject) => {
        var answerFromOwner = false;
        if (answerFromOwner) {

            var retObj = {
                mess: "",
            };
            resolve(retObj);
        } else {
            reject("The house is too expensive");
        }
    });
}
