// Scooter.js
class Scooter {
  static nextSerial = 1;
  constructor(station, user, charge, isBroken) {
    this.serial = Scooter.nextSerial++;
    this.station = station;
    this.user = user;
    this.charge = charge;
    this.isBroken = isBroken;
  }
  rent() {
    if (this.charge > 20 && !this.isBroken) {
      this.user = true;
      console.log(`Scooter with serial number ${this.serial} has been rented.`);
    } else {
      console.log(`Scooter with serial number ${this.serial} cannot be rented.`);
    }
  }
  dock() {
    this.user = false;
    console.log(`Scooter with serial number ${this.serial} has been docked.`);
  }
}
module.exports = Scooter
