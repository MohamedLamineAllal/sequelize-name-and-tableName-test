import { DataTypes, Model } from 'sequelize';
import sequelize from '..';

export class Course extends Model {}

Course.init({
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
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Course' // We need to choose the model name
});


// export const Course = sequelize.define('Course', {
//   // Model attributes are defined here
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//   }
// }, {
//   schema: 'AmASchema'
//   // Other model options go here
// });
