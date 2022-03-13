'use strict';
const shortId = require('shortid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ShortUrl', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      full: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      short: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: shortId.generate(),
      },
      clicks: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('ShortUrl');
  },
};
