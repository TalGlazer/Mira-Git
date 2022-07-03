//  S E L F - T R Y

const body = document.querySelector(`body`);
const title = document.querySelector(`header`);
const main = document.querySelector(`main`);

title.innerHTML = `<u>Nuke Experiment</u>`;
title.style.fontSize = `50px`;
title.style.textAlign = `center`;
body.style.fontSize = `100px`;

function rand() {
  return parseInt(Math.random() * 5000 + 200);
}

var jerCode = prompt(`Enter your code:`); // code: 1111

function callParis(code) {
  return new Promise((reject, resolve) => {
    setTimeout(() => {
      // in paris:
      // jerusalem sends initial code to paris and request for status:
      // paris confirms jerusalem initial code is true:
      if (code == 1111) {
        // IF TRUE -> paris builds its response and sends back to jerusalem:
        const res = {
          status: 200,
          data: { city: `Paris`, bombCode: 2222 },
        };
        // in jerusalem
        // jerusalem confirms paris' status response:
        if (res.status === 200) {
          resolve(res.data.bombCode);
          // jerusalem sends request to shanghai
        } else {
          reject(
            `Jerusalem says there's something worng with paris response status: ${res.status}`
          );
        }
      } else {
        reject(`There is something wrong with jerusalem code`);
      }
    }, rand());
  });
}

function callShanghai(code) {
  return new Promise((reject, resolve) => {
    setTimeout(() => {
      // in shanghai:
      // shanghai checks paris' bomb code:
      if (code === 2222) {
        // IF TRUE -> shanghai builds its response and sends back to jerusalem:
        const res = {
          status: 200,
          data: { city: `Shanghai`, bombCode: 3333 },
        };
        // in jerusalem
        // jerusalem confirms shanghai's response status:
        if (res.status === 200) {
          resolve(res.data.bombCode);
          console.log(`${res.data.city} gave their code`);
        } else {
          reject(
            `Jerusalem says there is something wrong with shanghai response status. ${res.status}`
          );
        }
      } else {
        reject(
          `Shanghai says there's something wrong with paris bomb code. ${res.data.bombCode}`
        );
      }
    }, rand());
  });
}

function callWashington(code) {
  return new Promise((reject, resolve) => {
    setTimeout(() => {
      // in washington
      // washington checks shanghai's bomb code:
      // IF TRUE -> washington builds its response and sends back to jerusalem:
      if (code === 3333) {
        const res = {
          status: 200,
          data: { city: `Washington`, bombCode: 4444 },
        };
        // in jerusalem:
        // jerusalem checks washington response status:
        if (res.status === 200) {
          resolve(res.data.bombCode);
          console.log(`${res.data.city} gave their code`);
        } else {
          reject(
            `Jerusalem says there is something wrong with washington response status. ${res.status}`
          );
        }
      } else {
        reject(
          `Washington says there is something wrong with shanghai bomb code.`
        );
      }
    }, rand());
  });
}

function callLondon(code) {
  return new Promise((reject, resolve) => {
    setTimeout(() => {
      // in london
      // london checks washington's bomb code:
      // IF TRUE -> washington builds its response and sends back to jerusalem:
      if (code === 4444) {
        const res = {
          status: 200,
          data: { city: `London`, bombCode: 5555 },
        };
        // in jerusalem:
        // jerusalem confirms london response status:
        if (res.status === 200) {
          resolve(
            `The code for the bomb is: ` +
              res.data.bombCode +
              `Permission to launch`
          );
          console.log(`${res.data.city} gave their code`);
          main.innerText = `💥Boom💥`;
          main.style.textAlign = `center`;
        } else {
          reject(`jerusalem says something with london code`);
        }
      }
    }, rand());
  });
}

function final(code) {
  resolve(`Launch Sccessfuly. Bomb code is: ` + code);
}

function errorHandler(err) {
  console.log(err);
}

callParis(jerCode)
.then(callShanghai)
.then(callWashington)
.then(final);
