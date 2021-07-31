/**
 * This is the test file
 */

import db from './db';
import { Course } from './db/models/Course';
import { User } from './db/models/User';
import { Model } from 'sequelize';

function runTest(instance: Model<any, any, any>, modelName: string) {
  console.log('\nInstance access using instance.name and instance.tableName\n')

  console.log(
    `${modelName}.name: ${(instance as any).name}`
  )
  console.log(
    `${modelName}.tableName: ${(instance as any).tableName}`
  )

  console.log('\nInstance access using instance.constructor.name and instance.constructor.tableName\n')

  console.log(
    `${modelName}.constructor.name: ${instance.constructor.name}`
  )
  console.log(
    `${modelName}.constructor.tableName: ${(instance.constructor as any).tableName}`
  )
}

(async () => {
  // await db.sync()

  // ______________________ Models Classes ___________________
  console.log('---------------------- Testing Models Classes ----------------\n')
  console.log('\n\nStatic access using getTableName() (without Schema) :\n');

  console.log('Course.getTableName(): ' + Course.getTableName());

  console.log('\n\nStatic access using getTableName() (with Schema) :\n');

  User.schema('SomeMegaSchema', { logging: true })

  console.log('User.getTableName(): ' + User.getTableName());

  console.log('\nAnd ::::\n')
  console.log('Course.name: ' + (Course as any).name);
  console.log('Course.tableName: ' + (Course as any).tableName);
  console.log('User.name: ' + (User as any).name);
  console.log('User.tableName: ' + (User as any).tableName);
  

  // ______________ Models instances _________________________

  console.log('\n----\n')
  console.log('--------------- Testing Models instances -----------------------\n')

  const user = User.build({ name: 'Mohamed Lamine Allal', email: 'allalmohamedlamine@gmail.com' });

  console.log('\n\nTesting using  sequelize.define() definition :::: \n')
  runTest(user as any, 'user');
})()


