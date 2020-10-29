module.exports = function () {
  var faker = require("faker");
  var _ = require("lodash");
  return {
    data: _.times(20, function (n) {
      return {
        id: n,
        name: faker.database.data(),
        avatar: faker.internet.avatar(),
      };
    }),
  };
};
