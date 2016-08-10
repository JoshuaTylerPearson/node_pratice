try {
  console.log('About to throw an error');
  throw new Error('Error thrown');
} catch (e) {
  console.log('I will only execute if an error is thrown');
  console.log('error caught: ', e.message);
} finally {
  console.log('I will execute irrespectice of an error thrown');
}


// does not work with async work flow
/*
try {
  setTimeout(function () {
    console.log('about to throw an error');
    throw new Error('error thown');
  }, 1000);
} catch (e) {
  console.log('I will not exexute properly');
}
console.log('I am outside the try block')
*/


setTimeout(function () {
  try {
    console.log('about to thow an error');
    throw new Error("error thrown");
  } catch (e) {
    console.log('error caught');
  }
}, 1000);



function getConnection(callback) {
  var connection;
  try {
    // conection fails
    throw new Error('connection failed');

    // notify callback if conn succeded
    callback(null, connection);
  } catch (error) {

    // notify callback about error
    callback(error, null);
  }
}

// useage
getConnection(function (error, connection) {
  if (error) {
    console.log('Error:', error.message);
  }
  else {
    console.log('connection succeded:', connection);
  }
});
