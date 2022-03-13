const { Model, DataTypes } = require('sequelize');
const shortId = require('shortid');

const sequelize = require('./sequelize');

class ShortUrl extends Model {}

ShortUrl.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    full: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    short: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: shortId.generate(),
    },
    clicks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: 'ShortUrl',
    freezeTableName: true,
    paranoid: true,
    timestamps: true,
  }
);

module.exports = { ShortUrl };
