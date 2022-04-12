'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Questions', [{
      title: 'What is the capital of Sweden?',
      imgpath: '/test.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      quizId: 1
    },
    {
      title: 'How many people live in Germany?',
      imgpath: '/test.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      quizId: 1
    },
    {
      title: 'Which is the largest city in the world?',
      imgpath: '/test.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      quizId: 1
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
