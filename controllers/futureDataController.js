const isFutureDataValid = require("../validators/isFutureDataValid");

const {
  getFutureDataModel,
  postFutureDataModel,
} = require("../model/files/futureDataModel");

const getFutureData = (req, res, next) => {
  try {
    const data = getFutureDataModel();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postFutureData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    isFutureDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postFutureDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getFutureData, postFutureData };