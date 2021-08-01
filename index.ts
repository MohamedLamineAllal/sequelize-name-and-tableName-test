/**
 * This is the test file
 */

import { Course } from './db/models/Course';
import { User } from './db/models/User';

function runInstanceTest(instance: any, instanceName: string) {
  console.log('\nInstance access using instance.name and instance.tableName\n')

  console.log(
    `${instanceName}.name: ${instance.name}`
  )
  console.log(
    `${instanceName}.tableName: ${instance.tableName}`
  )

  console.log('\nInstance access using instance.constructor.name and instance.constructor.tableName and getTableName()\n')

  console.log(
    `${instanceName}.constructor.name: ${instance.constructor.name}`
  )
  console.log(
    `${instanceName}.constructor.tableName: ${(instance.constructor as any).tableName}`
  )
  console.log(
    `${instanceName}.constructor.getTableName(): ${(instance.constructor as any).getTableName()}`
  )

  // console.log('\nInstance access using instance.Model.name and instance.Model.tableName\n')

  // console.log(
  //   `${instanceName}.Model.name: ${instance.Model.name}`
  // )
  // console.log(
  //   `${instanceName}.Model.tableName: ${(instance.Model as any).tableName}`
  // )
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
  runInstanceTest(user as any, 'user');
})()


