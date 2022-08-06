const body = document.querySelector(`body`);
body.style.fontSize = `300px`;

function rand() {
  return Math.trunc(Math.random() * 7000) + 600;
};
const initialJerusalemCode = 1111;

callParis(initialJerusalemCode)
  .then(callShanghai)
  .then(callWashington)
  .then(callLondon)
  .then(final)
  .catch(errorHandler);

function callParis(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // now in paris:
      // paris server checks jerusalem code
      if (code === 1111) {
        // paris server prepares response and sends it back to jerusalem:
        const parisResponse = {
          status: 200,
          data: { city: `paris`, code: 2222 },
        };
        // back in jerusalem:
        // jerusalem checks paris response status:
        if (parisResponse.status === 200) {
          console.log(parisResponse.data.city);
          resolve(parisResponse.data.code);
          // paris response status "success":
          // jerusalem sends request for code to shanghai (holds paris response)
        } else {
          // paris status code error
          reject(`jerusalem says: something wrong with paris response status: ` + parisResponse.status);
        }
      } else {
        // jerusalem bomb code error
        reject(`paris says: something wrong with jerusalem bomb code`);
      }
    }, rand());
  });
}

function callShanghai(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // now in shanghai:
      // shanghai server checks paris code:
      if (code === 2222) {
        // shanghai server prepares response and send it back to jerusalem:
        const shanghaiResponse = {
          status: 200,
          data: { city: `shanghai`, code: 3333 },
        };
        // back in jerusalem
        // jerusalem server checks shanghai response status
        if (shanghaiResponse.status === 200) {
          console.log(shanghaiResponse.data.city);
          resolve(shanghaiResponse.data.code);
          // shanghai response status "success":
          // jerusalem sends request for code to washington:
        } else {
          // shanghai reponse status error
          reject(
            `jerusalem says: something wrong with shaghai response status: ` + shanghaiResponse.status
          );
        }
      } else {
        // paris status code error
        reject(`shanghai says: something wrong with paris code`);
      }
    }, rand());
  });
}

function callWashington(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // now in washingtin:
      // washington server checks shanghai code
      if (code === 3333) {
        // washington server prepares response and send it back to jerusalem:
        const washingtonResponse = {
          status: 200,
          data: { city: `washington`, code: 4444 },
        };
        // back in jerusalem:
        // jerusalem server checks washington response status:
        if (washingtonResponse.status === 200) {
          // if OK:
          console.log(washingtonResponse.data.city);
          resolve(washingtonResponse.data.code);
          // sends request to london
        } else {
          // washington response status error:
          reject(
            `jerusalem says: something wrong with washington response status: ` + washingtonResponse.status
          );
        }
      } else {
        // if ERROR
        reject(
            `washington says: something wrong with shanghai bomb code`
            );
      }
    }, rand());
  });
}

function callLondon(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // now in london:
      // london server checks washington bomb code:
      if (code === 4444) {
        // if OK
        // london server returns response and sends it back to jerusalem
        const londonResponse = {
          status: 200,
          data: { city: `london`, code: 5555 },
        };
        // back in jerusalem:
        // jerusalem server checks london response status
        if (londonResponse.status === 200) {
          resolve(londonResponse.data.code);
        } else {
          // london response status error:
          reject(
            `jerusalem says: something wrong with london response status: ` + londonResponse.status
            );
        }
      } else {
        // if ERROR
        reject(
            `london says: somwthing wrong with washington bomb code`
        );
      }
    }, rand());
  });
}

function final(code) {
  alert(`the code for the bomb is : ` + code);
  body.innerText = `💥`;
}

function errorHandler(err) {
  console.log(err);
}