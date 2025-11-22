const isMyAppsDataValid = require("../validators/isMyAppsDataValid");

const {
  getMyAppsDataModel,
  postMyAppsDataModel,
} = require("../model/files/myAppsDataModel");

const getMyAppsData = (req, res, next) => {
  try {
    const data = getMyAppsDataModel();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postMyAppsData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    isMyAppsDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postMyAppsDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getMyAppsData, postMyAppsData };