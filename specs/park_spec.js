const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Jurassic Park', 45, ['Tommy'])
  })

  it('should have a name', function(){
    const actual = park.parkName;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 45);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('Tommy');
    park.addDinosaur('Dippy');
    park.addDinosaur('Barney');
    const actual = park.collectionOfDinosaurs();
    assert.strictEqual(actual, 3)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaurByName('Tommy');
    const actual = park.collectionOfDinosaurs();
    assert.strictEqual(actual, 0)
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function(){
    park.findPopularDinosaur()
  });


  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
