'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuizAttempt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
    }
  }
  QuizAttempt.init({
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'QuizAttempt',
  });
  return QuizAttempt;
};