const { isObjectHasProps, isArrayHasLength } = require("./utils/validators");

const isFutureDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["title", "button", "logo", "address", "links", "company", "contacts"]);

  const { logo, links, company, contacts } = data;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(logo, ["src", "alt"]);

  // проверяем внутренние массивы на наличие полей и соответствие типу "массив"
  isArrayHasLength(links);
  isArrayHasLength(company);
  isArrayHasLength(contacts);

  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  links.forEach((link) => isObjectHasProps(link, ["text"]));
  company.forEach((item) => isObjectHasProps(item, ["text"]));
  contacts.forEach((contact) => isObjectHasProps(contact, ["text"]));
};

module.exports = isFutureDataValid;