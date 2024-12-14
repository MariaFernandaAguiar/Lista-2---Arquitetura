const Abstract = require( './Abstract');

class FormatterCSV extends Abstract {

  output (cities) {
    let csv = 'Nome\n';
    for (let i = 0; i < cities.length; i++) {
      csv += `${cities[i]['Nome']}\n`;
    }
    return csv;
  }

}

module.exports = FormatterCSV;
