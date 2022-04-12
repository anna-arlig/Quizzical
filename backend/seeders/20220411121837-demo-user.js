'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: 'John',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Eva',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Per',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
