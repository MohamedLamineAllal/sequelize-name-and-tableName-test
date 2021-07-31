import { Sequelize } from 'sequelize'

// Option 1: Passing a connection URI
const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'glitnir_kido_light',
  username: 'glitnir_test',
  password: '11116666'
}); // Example for sqlite
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite

export default sequelize;
