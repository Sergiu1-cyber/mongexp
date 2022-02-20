'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Articoles', [{
        titlu: 'Ion Creanga',
        text: 'Ion Creanga a fost un scriitor roman. Recunoscut datorita maiestriei basmelor, povestilor si povestirilor sale, Ion Creanga este considerat a fi unul dintre clasicii literaturii romane mai ales datorita operei sale autobiografice Amintiri din copilarie.',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Articoles', null, {});
  }
};
