const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define("Books", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT,
    },
    desc: {
      type: DataTypes.TEXT,
    },

    price: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });
  return Books;
};
