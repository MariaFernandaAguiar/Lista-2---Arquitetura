const FormatterHTML = require("./FormatterHTML.js");
const FormatterHTML2 = require("./FormatterHTML2.js");
const FormatterTXT = require("./FormatterTXT.js");
const FormatterJSON = require("./FormatterJSON.js");
const FormatterCSV = require("./FormatterCSV.js");

class FormatterFactory {
  static formatterMap = {
    html: FormatterHTML,
    txt: FormatterTXT,
    html2: FormatterHTML2,
    json: FormatterJSON,
    csv: FormatterCSV,
  };

  static createFormatter(format) {
    const FormatterClass = this.formatterMap[format];
    if (!FormatterClass) {
      throw new Error(`Unsupported format: ${format}`);
    }
    return new FormatterClass();
  }
}

module.exports = FormatterFactory;
