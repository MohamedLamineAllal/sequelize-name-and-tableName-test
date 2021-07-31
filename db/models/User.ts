import { Sequelize } from 'sequelize';
import sequelize from '..';

export const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  schema: 'AmASchema'
  // Other model options go here
});
