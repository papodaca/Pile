const DelayedPromise = (func) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => func(resolve, reject), 1000);
  });
};

export default DelayedPromise;
