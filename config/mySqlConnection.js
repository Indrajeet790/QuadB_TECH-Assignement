const {Sequelize,DataTypes }= require("sequelize");


const sequelize = new Sequelize('quadb', 'root', process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port:'3306',
    logging: true
  });

  //authenticating the DB connection
sequelize.authenticate()
.then(() =>{
    console.log('Connection has been established successfully');
})
.catch(err => {
    console.log('Unable to connect to the database' , err);
});


const db ={};


db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users=require("../models/user")(sequelize, DataTypes, Sequelize)
//syncing the db
db.sequelize.sync({force: false}) 
.then(() => {
    console.log('yes re-sync done!');
});
module.exports = db;