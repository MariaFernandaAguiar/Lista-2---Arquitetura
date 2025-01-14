const FormatterFactory = require("../views/FormatterFactory.js");
const CitiesReporter = require("../models/CitiesReporter.js");

exports.postFormat = async (req, res) => {
  const { format } = req.params;

  try {
    const formatter = FormatterFactory.createFormatter(format);
    const CitiesReporterInstance = new CitiesReporter({
      formatterStrategy: formatter,
    });

    const fileCities = "./data/cidades-2.json";
    const report = CitiesReporterInstance.report(fileCities);

    res.send(report);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
