const { isObjectHasProps } = require("./utils/validators");

const isCtaDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["text1", "text2", "button"]);

  const { button } = data;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(button, ["text"]);
};

module.exports = isCtaDataValid;