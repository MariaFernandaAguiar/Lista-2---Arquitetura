const Abstract = require( './Abstract');

class FormatterJSON extends Abstract {

  output (cities) {
    return cities;
  }

}

module.exports = FormatterJSON;

