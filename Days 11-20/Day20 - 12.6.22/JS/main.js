// function rand() {
//   return parseInt(Math.random() * 2000 + 200);
// }

// function buyHouse(tz) {
//   checkAccount(tz)
//     .then(checkIncome)
//     .then(CheckBDI)
//     .then(requestMortgage)
//     .then(placeOffer)
//     .then((res) => {
//       alert("mazal tov! " + res.mess);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// function checkAccount(tz) {
//   return new Promise((resolve, reject) => {
//     console.log("checking account");
//     if (tz) resolve(true);
//     else reject();
//   });
// }
// function checkIncome(bool) {
//   return new Promise((resolve, reject) => {
//     console.log("checking income");
//     if (bool) resolve(true);
//     else reject();
//   });
// }

// function CheckBDI(bool) {
//   return new Promise((resolve, reject) => {
//     console.log("checking BDI");
//     if (bool) resolve({ bool: true, score: 150 });
//     else reject();
//   });
// }

// function requestMortgage(resObj) {
//   return new Promise((finalResolve, finalReject) => {
//     var bankResponses = [];
//     if (resObj.bool) {
//       setTimeout(() => {
//         // calls the banks to see if anyone would grant a mortgage
//         var allBanks = [
//           "mashk@leumi.co.il",
//           "mashk@poalim.co.il",
//           "mashk@mizrahi.co.il",
//           "mashk@mdb.co.il",
//           "mashk@yahav.co.il",
//         ];

//         var allPromises = [];
//         allBanks.forEach((x) => {
//           allPromises.push(
//             new Promise((resolve, reject) => {
//               setTimeout(() => {
//                 console.log("sending to bank: " + x + "...");
//                 // API call to the banks
//                 // APIKEY from caller(agent murshe)
//                 // TZ from requester
//                 // Amount
//                 // BDI score (resObj.score)

//                 //bank gets an email and returns a response
//                 //if email went out
//                 var obj = {
//                   name: x,
//                   amount: "2,000,000",
//                   years: 20,
//                   rate: 3.5,
//                   approved: true,
//                 };
//                 resolve(obj);
//                 //else reject()
//               }, rand());
//             })
//           );
//           Promise.all(allPromises)
//             .then((allResponsesTogether) => {
//               for (let bank of allResponsesTogether) {
//                 if (bank.approved) {
//                   var obj = {
//                     name: bank.name,
//                     amount: bank.amount,
//                     rate: bank.rate,
//                     years: bank.year,
//                   };
//                   bankResponses.push(obj);
//                 }
//               }
//             })
//             .catch((err) => {
//               reject(
//                 "There is a problem with my system c(T.T)כ Please return later."
//               );
//             })
//             .finally(() => {
//               if (bankResponses.length > 0) {
//                 finalResolve(bankResponses);
//               } else {
//                 finalReject("No bank approved you");
//               }
//             });
//         });
//       }, rand());
//     } else {
//       finalReject("Your BDI is no good");
//     }
//   });
// }

// function placeOffer(res) {
//   return new Promise((resolve, reject) => {
//     res.forEach((x) => {
//       console.log(x);
//     });

//     var answerFromOwner = true;
//     if (answerFromOwner) {
//       var retObj = {
//         mess: "Your offer was approved",
//       };
//       resolve(retObj);
//     } else {
//       reject("The house is too expensive");
//     }
//   });
// }


