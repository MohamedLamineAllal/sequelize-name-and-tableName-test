import { DataTypes } from 'sequelize';
import sequelize from '..';

export const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  schema: 'AmASchema'
  // Other model options go here
});
