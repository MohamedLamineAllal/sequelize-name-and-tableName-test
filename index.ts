/**
 * This is the test file
 */

import { Model } from 'sequelize/types';
import { Course } from './db/models/Course';
import { User } from './db/models/User';

function runInstanceTest(instance: Model, instanceName: string) {
  console.log('\nInstance access using instance.name and instance.tableName')

  console.log(
    `${instanceName}.name: ${(instance as any).name}`
  )
  console.log(
    `${instanceName}.tableName: ${(instance as any).tableName}`
  )
  
  console.log('\nInstance access using instance.constructor.name and instance.constructor.tableName\n')
  
  console.log(
    `${instanceName}.constructor.name: ${instance.constructor.name}`
  )
  console.log(
    `${instanceName}.constructor.tableName: ${(instance.constructor as any).tableName}`
  )

  // console.log('\nInstance access using instance.Model.name and instance.Model.tableName\n')

  // console.log(
  //   `${instanceName}.Model.name: ${(instance as any).Model.name}`
  // )
  // console.log(
  //   `${instanceName}.Model.tableName: ${(instance as any).Model.tableName}`
  // )
}

(async () => {
  // await db.sync()

  // ______________________ Models Classes ___________________
  console.log('--------------- Testing Models instances -----------------------\n')

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
  
  console.log('\n----\n')

  // ______________ Models instances _________________________

  console.log('---------------------- Testing Models Classes ----------------\n')

  const course = Course.build({ name: 'Sequelize model name and tableName', description: 'Show clearly how to do it and the different options' });

  const user = User.build({ name: 'Mohamed Lamine Allal', email: 'allalmohamedlamine@gmail.com' });

  console.log('\nTesting using  Class Extends Model definition :::: \n')
  runInstanceTest(course, 'course');

  console.log('\n\nTesting using  sequelize.define() definition :::: \n')
  runInstanceTest(user, 'user');
})()


