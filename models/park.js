const Park = function(parkName, ticketPrice, dinoCollection){
    this.parkName = parkName;
    this.ticketPrice = ticketPrice;
    this.dinoCollection = []
}

module.exports = Park;

Park.prototype.collectionOfDinosaurs = function(){
    return this.dinoCollection.length;
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinoCollection.push(dinosaur);
}

Park.prototype.removeDinosaurByName = function(dinosaur){
    this.dinoCollection.pop(dinosaur);
}