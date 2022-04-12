'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Answers', [{
      content: 'Stockholm',
      correct: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      questionId: 1
    },
    {
      content: 'Uppsala',
      correct: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      questionId: 1
    },
    {
      content: 'Luleå',
      correct: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      questionId: 1
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Answers', null, {});
  }
};
