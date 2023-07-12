# Exploring E-Commerce 

## Description 
For this assignment, I'm going to be experimenting with the GET, POST, PUT and DELETE methods for routes files and getting a feel 
for how they work within Insomnia. 

## Usage

Route files are strictly back end and makeup the API. To see them in action, you will need to...

    -Run MySQL 
    -Seed the database by running 'npm run seed'
    -Start the server by typing the command 'node server' 

You will then open up Insomnia (or the Thunder Client extension inside VS code) and use the GET, POST, PUT, and DELETE drop down menu to traverse the routes. You can check how to do so in my demo video <a href="https://drive.google.com/file/d/1zkx9bEX9GcKu6gs6fOkW1LSYUCM4HYEE/view">here</a> 

## User Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Credits

- Starter code provided by KU Bootcamp. This is used strictly for educational purposes.