// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};
// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

// THE CALLBACK VERSION CONT.
// fakeRequestCallback(
//   "books.com/page1",
//   function (response) {
//     console.log("IT WORKED");
//     console.log(response);
//     fakeRequestCallback(
//       "books.com/page2",
//       function (response) {
//         console.log("IT WORKED AGAIN");
//         console.log(response);
//         fakeRequestCallback(
//           "books.com/page3",
//           function (response) {
//             console.log("It WORKED AGAIN (3rd req)!!!");
//             console.log(response);
//           },
//           function (err) {
//             console.log("Error 3rd req");
//           }
//         );
//       },
//       function (err) {
//         console.log("ERROR (2nd req)!!!", err);
//       }
//     );
//   },
//   function (err) {
//     console.log("Error!!", err);
//   }
// );

//  THE PROMISE VERSION CONT.
// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then(() => {
//     console.log("IT WORKED!!! (page 1)");
//     fakeRequestPromise("yelp.com/api/coffee/page2")
//       .then(() => {
//         console.log("IT WORKED!!! (page 2)");
//         fakeRequestPromise("yelp.com/api/coffee/page3")
//           .then(() => {
//             console.log("IT WORKED!!! (page 3)");
//           })
//           .catch(() => {
//             console.log("Oh no!! Error!! (page 3)");
//           });
//       })
//       .catch(() => {
//         console.log("Oh No!! Error!! (page 2)");
//       });
//   })
//   .catch(() => {
//     console.log("Oh No!! Error!! (page 1)");
//   });

// Working with promises
// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then((data) => {
//     console.log("It worked!! (page 1)");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page2");
//   })
//   .then((data) => {
//     console.log("It worked (page 2)");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page3");
//   })
//   .then((data) => {
//     console.log("It worked!! (page 3)");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error! A request failed");
//     console.log(err);
//   });

// CREATING PROMISES
// new Promise((resolve, reject) => {
//   resolve();
// });

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const randomTime = Math.random();
//     setTimeout(() => {
//       if (randomTime < 0.7) {
//         resolve("HERE YOU GO");
//       }
//       reject("BUZZ OFF REJECTED");
//     }, 1000);
//   });
// };
// fakeRequest("dogs/1")
//   .then((data) => {
//     console.log("Done with Request");
//     console.log("data is:", data);
//   })
//   .catch((err) => {
//     console.log("Oh NOO!", err);
//   });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// delayedColorChange("red", 1000)
//   .then(() => delayedColorChange("orange", 1000))
//   .then(() => delayedColorChange("yellow", 1000))
//   .then(() => delayedColorChange("green", 1000))
//   .then(() => delayedColorChange("blue", 1000))
//   .then(() => delayedColorChange("indigo", 1000))
//   .then(() => delayedColorChange("violet", 1000))
//   .then(() => delayedColorChange("pink", 1000))
//   .then(() => delayedColorChange("red", 1000));

async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("indigo", 1000);
  await delayedColorChange("violet", 1000);
  return "ALL DONE";
}

// rainbow().then(() => console.log("End of Rainbow"));

async function printRainbow() {
  await rainbow();
  console.log("End of Rainbow!");
}
printRainbow();
