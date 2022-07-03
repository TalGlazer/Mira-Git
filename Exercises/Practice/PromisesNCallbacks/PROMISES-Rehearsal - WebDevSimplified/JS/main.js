let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 2) {
    resolve("Success");
  } else {
    reject(`failed`);
  }
});

p.then((message) => {
  console.log(`this is in the then ` + message);
}).catch((message) => {
  console.log(`this is in the catch ` + message);
});

const userLeft = false;
const userWatchingCatMeme = true;

// function watchTutorialCallback(callback, errorCallback) {
//     if (userLeft) {
//         errorCallback({
//             name: `User Left`,
//             message: `:(`
//         })
//     }else if (userWatchingCatMeme) {
//         errorCallback({
//             name: `User Watching Cat Meme`,
//             message: `webDevSimplified < cat`
//         })
//     } else {
//         callback(`Thumbs up and Subscribe`)
//     }
// }

// watchTutorialCallback((message) => {
//     console.log(`Success: ` +message)
// }, (error) => {
//     console.log((error.name + ` ` + error.message)
//     );
// })


function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: `User Left`,
        message: `:(`,
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: `User Watching Cat Meme`,
        message: `webDevSimplified < cat`,
      });
    } else {
      resolve(`Thumbs up and Subscribe`);
    }
  });
}

watchTutorialPromise().then((message) => {
    console.log(`Success: ` + message)
}).then((message) => {
    console.log(`Success: ` + message)
}).catch((error) => {
    console.log((error.name + ` ` + error.message)
    );
})


const recordVideoOne = new Promise((resolve, reject) => {
resolve(`Video 1 recorded`)
})

const recordVideoTwo = new Promise((resolve, reject) => {
resolve(`Video 2 recorded`)
})

const recordVideoThree = new Promise((resolve, reject) => {
resolve(`Video 3 recorded`)
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
})


Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})