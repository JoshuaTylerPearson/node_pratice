function printableMessage() {
  var message = 'hello';
  function setMessage(newMessage) {
    if (!newMessage) throw new Error('cannot set empty message');
    message = newMessage;
  }
  function getMessage() {
    return message;
  }
  function printMessage() {
    console.log(message);
  }

  return {
    setMessage: setMessage,
    getMessage: getMessage,
    printMessage: printMessage
  };
}

// pattern in use
var awesome1 = printableMessage();
awesome1.printMessage();  // hello

var awesome2 = printableMessage();
awesome2.setMessage('hi');
awesome2.printMessage(); // hi

//awesome1 unaffected by awesome2 b/c new object created when module funcion called
awesome1.printMessage(); // hello
