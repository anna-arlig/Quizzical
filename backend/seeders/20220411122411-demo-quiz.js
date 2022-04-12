'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Quizzes', [{
      name: 'Geography',
      imgpath: '/test.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1
    },
    {
      name: 'History',
      imgpath: '/test.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1
    },
    {
      name: 'Computer Science',
      imgpath: '/test.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Quizzes', null, {});
  }
};
