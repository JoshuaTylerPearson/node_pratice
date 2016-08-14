var mongoose = require('mongoose');

// define a schema
var tankSchema = new mongoose.Schema({ name: 'string', size: 'string' });
tankSchema.methods.print = function () { console.log('I am', this.name,
'the', this.size); };

// complie into a model
var Tank = mongoose.model('Tank', tankSchema);

mongoose.connect('mongodb://127.0.0.1:27017/demo');
var db = mongoose.connection;
db.once('open', function callback() {
  console.log('connected');

  // use the model
  var tony = new Tank({ name: 'tony', size: 'small' });
  tony.print(); // i am tony the small

  tony.save(function (err) {
    Tank.findOne({ name: 'tony' }).exec(function (err, tank) {

      // model instace setup and ready
      tank.print();

      db.collection('tank').drop(function () { db.close(); })
    });
  });
});


/*
// chain queries example:
Person
.find({ city: 'LA' })
.where('name.last').equals('Ghost')
.where('age').gt(17).lt(66)
.limit(10)
.exec(callback);
*/
