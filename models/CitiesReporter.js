const fs = require('fs');

class CitiesReporter {
  constructor ({ formatterStrategy }) {
    this._formatterStrategy = formatterStrategy;
  }

  _read (filename) {
    this._cities_json = fs.readFileSync(filename);
  }

  _parseJSON () {
    this._cities = JSON.parse(this._cities_json);
  }

  report (filename) {
    this._read(filename);
    this._parseJSON();
    return this._formatterStrategy.output(this._cities);
  }

}

module.exports = CitiesReporter;
