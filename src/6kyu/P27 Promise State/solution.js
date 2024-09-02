// As you know, a promise is in one of these states: pending, fulfilled, rejected.

// Implement the async function getState that determines a state of a promise.

// const p = Promise.resolve();
// const state = await getState(p); // === "fulfilled"

// const p = Promise.reject();
// const state = await getState(p); // === "rejected"

// const p = new Promise(() => {});
// const state = await getState(p); // === "pending"

function getState(promise) {
    let isPending = true;
    const timeout = new Promise((resolve) => {
      setTimeout(() => {
        if (isPending) {
          resolve("pending");
        }
      }, 0);
    });
    const wrappedPromise = Promise.resolve(promise)
      .then(() => {
        isPending = false;
        return "fulfilled";
      })
      .catch(() => {
        isPending = false;
        return "rejected";
      });
  
    return Promise.race([wrappedPromise, timeout]);
  }

  // https://www.codewars.com/kata/6534ea9defdd85005848c2bd/train/javascript