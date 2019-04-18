module.exports = (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    /* So here, I am simulating the fact that whatever is being done in this rectangle is going 
    to take some time. So this is the asynchronous processing. Now, since I don't have a lot of 
    work to do in the background, so I'm going to simulate that by simply using the setTimeout 
    function of JavaScript and then delay before the callback function is called.
    This callback is a callback function that is going to be passed in as the third parameter here. 
    This callback function,takes two parameters. The first one is the error and the second one is the
    return value.*/
    setTimeout(
      () =>
        callback(
          new Error('Rectangle dimensions should be greater than zero: l = ' + x + ', and b =' + y),
          null,
        ),
      2000,
    );
  } else {
    setTimeout(
      () =>
        callback(null, {
          perimeter: (x, y) => 2 * (x + y),
          area: (x, y) => x * y,
        }),
      2000,
    );
  }
};
