function rand() {
  return Math.trunc(Math.random() * 15000 + 2000);
}

const initialJerusalemBombCode = 1111;

// in jerusalem
function callParis(bombCode) {
  return new Promise((resolve, reject) => {
    // jerusalem sends request to paris server for bomb code:
    setTimeout(() => {
      // in paris
      // paris checks jerusalem initial bomb code:
      if (bombCode === 1111) {
        const res = { status: 200, data: { city: `Paris`, bombCode: 2222 } };
        // in jerusalem :
        // jerusalem checks paris' response status
        if (res.status === 200) {
          console.log(`recieved response from ${res.data.city}`);
          resolve(res.data.bombCode);
        } else {
          reject(`Something went wrong with paris status code: ${res.status}.`);
        }
      } else {
        reject(`Paris says something went wrong with initial code sync`);
      }
    }, rand());
  });
}

function callShanghai(bombCode) {
  return new Promise((resolve, reject) => {
    // jerusalem send request to shanghai for bomb code:
    setTimeout(() => {
      // in shanghai
      // shanghai checks paris bomb code:
      if (bombCode === 2222) {
        const res = { status: 200, data: { city: `Shanghai`, bombCode: 3333 } };
        // in jerusalem :
        // jerusalem checks shanghai response status code:
        if (res.status === 200) {
          console.log(`recieved response from ${res.data.city}`);
          resolve(res.data.bombCode);
        } else {
          reject(
            `Something went wrong with shanghai response status code: ${res.status}.`
          );
        }
      } else {
        reject(`Something went wrong with paris bomb code.`);
      }
    }, rand());
  });
}

function callWashington(bombCode) {
  return new Promise((resolve, reject) => {
    // jerusalem sends request to washington for bomb code:
    setTimeout(() => {
      // in washington
      // washington checks shanghai bomb code:
      if (bombCode === 3333) {
        const res = {
          status: 200,
          data: { city: `Washington`, bombCode: 4444 },
        };
        // in jerusalem
        // jerusalem checks washington response status code:
        if (res.status === 200) {
          console.log(`recieved response from ${res.data.city}`);
          resolve(res.data.bombCode);
        } else {
          reject(
            `something went wrong with washington response status: ${res.status}`
          );
        }
      } else {
        reject(
          `Washington says something went wrong with shanghai bomb code sync`
        );
      }
    }, rand());
  });
}

function callLondon(bombCode) {
  return new Promise((resolve, reject) => {
    // jerusalem sends request to london for bomb code:
    setTimeout(() => {
      // in london:
      // london checks washington bomb code:
      if (bombCode === 4444) {
        const res = {
          status: 200,
          data: { city: `London`, bombCode: 5555 }
        };
        // in jerusalem
        // jersualem checks london response status code:
        if (res.status === 200) {
            console.log(`recieved response from ${res.data.city}`);
            resolve(res.data.bombCode);
        } else {
            reject(`something went wrong with london response status: ${res.status}`);
        }
      } else {
        reject(`london says something went wrong with washington bomb code`);
      }
    }, rand());
  });
}

function final(bombCode) {
  alert(`The code for the bomb is: ${bombCode}`)
}

function errorHandler(err) {
  console.log(err);
}

callParis(initialJerusalemBombCode)
.then(callShanghai)
.then(callWashington)
.then(callLondon)
.then(final)
.catch(errorHandler)