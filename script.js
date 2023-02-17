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

fakeRequestPromise("yelp.com/api/coffee/page1")
  .then(() => {
    console.log("It worked!! (page 1)");
    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then(() => {
    console.log("It worked (page 2)");
    return fakeRequestPromise("yelp.com/api/coffee/page3");
  })
  .then(() => {
    console.log("It worked!! (page 3)");
  })
  .catch(() => {
    console.log("Error! A request failed");
  });
