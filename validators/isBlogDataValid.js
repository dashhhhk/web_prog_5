const { isObjectHasProps, isArrayHasLength } = require("./utils/validators");

const isBlogDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["header", "posts"]);

  const { posts } = data;

  // проверяем внутренний массив на наличие полей и соответствие типу "массив"
  isArrayHasLength(posts);

  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  posts.forEach((post) => {
    isObjectHasProps(post, ["image", "date", "title", "readMoreLink"]);

    const { image } = post;
    isObjectHasProps(image, ["src", "alt"]);
  });
};

module.exports = isBlogDataValid;