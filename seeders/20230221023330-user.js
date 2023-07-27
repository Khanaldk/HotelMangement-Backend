
const bcrypt=require('bcrypt');

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'hotel123@gmail.com',
      password:bcrypt.hashSync('hotel123',11) ,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users',null, {});
  }
};
