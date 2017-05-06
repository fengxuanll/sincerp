var User = sequelize.define('user', {
    id: Sequelize.INTEGER,
    loginName: Sequelize.STRING,
    passWord: Sequelize.STRING,
    status: Sequelize.INTEGER
});