# node-sequelize-mysql
node with mysql database using sequelize package

### Setup
1. Make folder in which project need to create ```mkdir myProject```
2. Initialize the npm and create package.json ```npm init --yes```
3. Install the sequelize ```npm install --save sequelize```
4. Install the mysql specific pckages  ```npm install --save mysql2```
5. Install the sequelize cli globally, ```npm install -g sequelize-cli```
6. Now we have initialize the sequelize, ```sequelize init```
7. Now you can see the folder structure like below 

![image](https://user-images.githubusercontent.com/92211837/139633118-4df99ac4-f375-4e22-accc-fe20418beae4.png)

8. setup the datbase, by giving the database details in config file like below


![image](https://user-images.githubusercontent.com/92211837/139634175-587e675f-a52c-4656-bc7f-a8b82e4a258b.png)

9. command for creating the database: ```sequelize db:create```
10. Command for creating  the table(model): ```sequelize model:generate --name User --attributes name:string,email:string,role:string,username:string,password:string```
11. do the the migration to create the table: ```sequelize db:migrate```







## concept
1. using the sequlize, sequelize-cli package create a database, table in mysql
2. do the CRUD operation
3. with the help of express framework in node expose APIS
