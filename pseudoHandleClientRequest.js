function handleClientRequest(request) {
  makeDbCall(request.someInfo, function (result){
    // request corresponds to correct db result becuse of closure
    request.complete(result);
  });
}
