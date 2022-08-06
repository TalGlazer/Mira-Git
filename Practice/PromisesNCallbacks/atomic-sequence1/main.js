const body = document.querySelector(`body`);
body.style.fontSize = `300px`;

function rand() {
  return Math.trunc(Math.random() * 7000) + 600;
}

const initialJerusalemCode = 1111;

// jerusalem send request for code to paris
setTimeout(() => {
  // now in paris:
  // paris server checks jerusalem code
  if (initialJerusalemCode === 1111) {
    // paris server prepares response and sends it back to jerusalem:
    const parisResponse = { status: 200, data: { city: `paris`, code: 2222 } };
    // back in jerusalem:
    // jerusalem checks paris response status:
    if (parisResponse.status === 200) {
      console.log(parisResponse.data.city);
      // paris response status "success":
      // jerusalem sends request for code to shanghai (holds paris response)
      setTimeout(() => {
        // now in shanghai:
        // shanghai server checks paris code:
        if (parisResponse.data.code === 2222) {
          // shanghai server prepares response and send it back to jerusalem:
          const shanghaiResponse = {
            status: 200,
            data: { city: `shanghai`, code: 3333 },
          };
          // back in jerusalem
          // jerusalem server checks shanghai response status
          if (shanghaiResponse.status === 200) {
              console.log(shanghaiResponse.data.city);
            // shanghai response status "success":
            // jerusalem sends request for code to washington:
            setTimeout(() => {
              // now in washingtin:
              // washgton server checks shanghai code
              if (shanghaiResponse.data.code === 3333) {
                // washington server prepares response and send it back to jerusalem:
                const washgtonResponse = {
                  status: 200,
                  data: { city: `washington`, code: 4444 },
                };
                // back in jerusalem:
                // jerusalem server checks washington response status:
                if (washgtonResponse.status === 200) {
                  // if OK:
                  // sends request to london
                  setTimeout(() => {
                    // now in london:
                    // london server checks washington bomb code:
                    if (washgtonResponse.data.code === 4444) {
                      // if OK
                      console.log(washgtonResponse.data.city);
                      // london server returns response and sends it back to jerusalem
                      const londonResponse = {
                        status: 200,
                        data: { city: `london`, code: 5555 },
                      };
                      // back in jerusalem:
                      // jerusalem server checks london response status
                      if (londonResponse.status === 200) {
                        // if OK
                        alert(
                          `your code for the bomb is ` +
                            londonResponse.data.code
                        );
                        body.innerText = `💥`;
                      } else {
                        // london respose status error:
                        alert(
                          `jerusalem says: something wrong with london response status`
                        );
                      }
                    } else {
                      // if ERROR
                      alert(
                        `london says: somwthing wrong with washington bomb code`
                      );
                    }
                  }, rand());
                } else {
                  // washington response status error:
                  alert(
                    `jerusalem says: something wrong with washington response status`
                  );
                }
              } else {
                // if ERROR
                alert(
                  `washington says: something wrong with shanghai bomb code`
                );
              }
            }, rand());
          } else {
            // shanghai reponse status error
            alert(
              `jerusalem says: something wrong with shaghai response status`
            );
          }
        } else {
          // paris status code error
          alert(`shanghai says: something wrong with paris code`);
        }
      }, rand());
    } else {
      // paris status code error
      alert(`jerusalem says: something wrong with paris response status`);
    }
  } else {
    // jerusalem bomb code error
    alert(`paris says: something wrong with jerusalem bomb code`);
  }
}, rand());

//                                function rand() {

//     // return Math.trunc(Math.random() * 15000 + 2000);
//     const theRandomNumber = Math.random();
//     const theMultipliedNumber = theRandomNumber * 3000;
//     theAddedNumber = theMultipliedNumber + 500;
//     theTruncedNumber = Math.trunc(theAddedNumber);
//     return [theRandomNumber, theMultipliedNumber, theAddedNumber, theTruncedNumber];
// }
// // 0.670346
// // console.log(`result from rand() ` + rand());