const body = document.querySelector(`body`);
body.style.fontSize = `300px`;


function rand() {
  return Math.trunc(Math.random() * 5000 + 200);
}

const initialJerusalemCode = 1111;
//in jerusalem
// jerusalem sends request to paris server for bomb code:
setTimeout(() => {
  // in paris :
  // paris server checks jerusalem bomb code
  if (initialJerusalemCode === 1111) {
    // paris server prepares response and sends it back to jerusalem :
    const parisResponse = {
      status: 200,
      data: { city: `paris`, bombCode: 2222 },
    };
    // in jerusalem :
    // jerusalem checks paris response status :
    if (parisResponse.status === 200) {
        console.log(`recived response from ${parisResponse.data.city}`);
      // jerusalem sends request to shanghai server for bomb code:
      setTimeout(() => {
        // in shanghai :
        // shanghai server checks paris bomb code:
        if (parisResponse.data.bombCode === 2222) {
          // shanghai server prepares response and sends it back to jerusalem :
          const shanghaiResponse = {
            status: 200,
            data: { city: `shanghai`, bombCode: 3333 },
          };
          // in jerusalem :
          // jerusalem checks shanghai response status code:
          if (shanghaiResponse.status === 200) {
            console.log(`recived response from ${shanghaiResponse.data.city}`);
            setTimeout(() => {
              // in washington
              // washington server checks bomb code:
              if (shanghaiResponse.data.bombCode === 3333) {
                // washington server prepares response and sends it back to jerusalem :
                const washingtonResponse = {
                  status: 200,
                  data: { city: `washington`, bombCode: 4444 },
                };
                // in jerusalem :
                // jerusalem checks washington response status code:
                if (washingtonResponse.status === 200) {
                    console.log(`recived response from ${washingtonResponse.data.city}`);
                  setTimeout(() => {
                    // in london
                    // london server checks bomb code:
                    if (washingtonResponse.data.bombCode === 4444) {
                      const londonResponse = {
                        status: 200,
                        data: { city: `london`, bombCode: 5555 },
                      };
                      // in jerusalem :
                      // jerusalem checks london response status code:
                      if(londonResponse.status === 200) {
                        console.log(`recived response from ${londonResponse.data.city}`);
                        alert(`the code for the bomb is: ${londonResponse.data.bombCode}` )
                        body.innerText = `💥`;
                      } else {
                        `Jerusalem says: there is something wrong with london status code: ${londonResponse.status}`
                      }
                    } else {
                      console.log(
                        `London says: there is a problem with washington bomb code`
                      );
                    }
                  }, rand());
                }
              } else {
                console.log(
                  `Washington says: there is a problem with shanghai bomb code`
                );
              }
            }, rand());
          } else {
            console.log(
              `Jerusalem says: there is something wrong with shanghai status code: ${shanghaiResponse.status}`
            );
          }
        } else {
          console.log(
            `Shanghai says: there is something wrong with paris bomb code`
          );
        }
      }, rand());
    } else {
      console.log(
        `Jerusalem says: there is a problem with paris response status code: ${parisResponse.status}`
      );
    }
  } else {
    console.log(
      `Paris says: there is something wrong with jerusalem initial bomb code`
    );
  }
}, rand());

