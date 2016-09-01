var Q = require('q');

var willFulfillDefered = Q.defer();
var willFulfill = willFulfillDefered.promise;
willFulfillDefered.resolve('final value');

willFulfill
  .then(function (val) {
    console.log('success with', val); // only fulfill handler is called
  })
  .catch(function (reason) {
    console.log('failed with', reason);
  });

var willRejectDefered = Q.defer();
var willReject = willRejectDefered.promise;
willRejectDefered.reject(new Error('rejection reason')); // note use of Error

willReject
  .then(function (val) {
    console.log('success with', val);
  })
  .catch(function (reason) {
    console.log('failed with', reason); // only regect handler is called
  });
