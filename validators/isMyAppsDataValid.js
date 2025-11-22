const { isObjectHasProps, isArrayHasLength } = require("./utils/validators");

const isMyAppsDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["image", "text1", "title", "description", "ctaText"]);

  const { image } = data;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(image, ["src", "alt"]);
};

module.exports = isMyAppsDataValid;