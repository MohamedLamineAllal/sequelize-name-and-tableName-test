import { Sequelize } from 'sequelize';
import sequelize from '..';

export const Course = sequelize.define('Course', {
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
  // Other model options go here
});
