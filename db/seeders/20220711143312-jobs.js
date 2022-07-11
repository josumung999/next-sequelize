'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    var now = new Date();
    return queryInterface.bulkInsert("Jobs", [
      {
        title: "Job Post Title One",
        slug: "job-post-title-one",
        userId: 1,
        content: "Text content job post one",
        emailTo: "email1@email.com",
        reportManager: "HR Manager",
        dateLimit: new Date(now.getFullYear(), now.getMonth() + 1, 1),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Jobs', null, {});
  }
};
