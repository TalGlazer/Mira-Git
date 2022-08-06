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

const initialJerusalemBombCode = 1111;

setTimeout(() => {
  // in paris:
  // jerusalem sends initial code to paris and request for status:
  // paris confirms jerusalem initial code is true:
  if (initialJerusalemBombCode === 1111) {
    // IF TRUE -> paris builds its response and sends back to jerusalem:
    const parisResponse = {
      status: 200,
      data: { city: `Paris`, bombCode: 2222 },
    };
    // in jerusalem
    // jerusalem confirms paris' status response:
    if (parisResponse.status === 200) {
      // jerusalem sends request to shanghai
      setTimeout(() => {
          console.log(`${parisResponse.data.city} gave their code`);
        // in shanghai:
        // shanghai checks paris' bomb code:
        if (parisResponse.data.bombCode === 2222) {
          // IF TRUE -> shanghai builds its response and sends back to jerusalem:
          const shanghaiResponse = {
            status: 200,
            data: { city: `Shanghai`, bombCode: 3333 },
          };
          // in jerusalem
          // jerusalem confirms shanghai's response status:
          if (shanghaiResponse.status === 200) {
            // jerusalem sends request to washington
            setTimeout(() => {
                console.log(`Shanghai gave their code`);
              // in washington
              // washington checks shanghai's bomb code:
              // IF TRUE -> washington builds its response and sends back to jerusalem:
              if (shanghaiResponse.data.bombCode === 3333) {
                const washingtonResponse = {
                  status: 200,
                  data: { city: `Washington`, bombCode: 4444 },
                };
                // in jerusalem:
                // jerusalem checks washington response status:
                if (washingtonResponse.status === 200) {
                  // jerusalem sends request to london
                  setTimeout(() => {
                    // in london
                    // london checks washington's bomb code:
                    // IF TRUE -> washington builds its response and sends back to jerusalem:
                    const londonResponse = {
                      status: 200,
                      data: { city: `London`, bombCode: 5555 },
                    };
                    console.log(`Washington gave their code`);
                    // in jerusalem:
                    // jerusalem confirms london response status:
                    if (londonResponse.status === 200) {
                      alert(`Permission to launch`);
                      main.innerText = `💥Boom💥`;
                      main.style.textAlign = `center`;
                    }
                  }, rand());
                } else {
                  alert(
                    `Jerusalem says there is something wrong with washington response status. ${washingtonResponse.status}`
                  );
                }
              } else {
                alert(
                  `Washington says there is something wrong with shanghai bomb code.`
                );
              }
            }, rand());
          } else {
            alert(
              `Jerusalem says there is something wrong with shanghai response status. ${shanghaiResponse.status}`
            );
          }
        } else {
          alert(
            `Shanghai says there's something wrong with paris bomb code. ${parisResponse.data.code}`
          );
        }
      }, rand());
    } else {
      alert(
        `Jerusalem says there's something worng with paris response status: ${parisResponse.status}`
      );
    }
  } else {
    alert(`There is something wrong with jerusalem code`);
  }
}, rand());

function callParis(code) {

}
function callShanghai(code) {}
function callWashington(code) {}
function callLondon(code) {}
function final(code) {}