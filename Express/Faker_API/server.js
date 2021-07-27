const express = require("express");
const faker = require('faker');
const app = express();


// req is short for request
// res is short for response
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.get("/api/users/new", (req, res) => {

  res.json(new User());
});

app.get("/api/companies/new", (req, res) => {

  res.json(new Company());
});

app.get("/api/user/company", (req, res) => {

  res.json({user:new User(), company: new Company()});
});

class User{
  constructor(){
    this.id=Math.floor(Math.random()*(100-1)+1);
    this.firstName=faker.name.firstName();
    this.lastName=faker.name.lastName();
    this.phoneNumber=faker.phone.phoneNumber();
    this.email=faker.internet.email();
    this.password=faker.internet.password();
  }
}

  class Company{
    constructor(){
      this.id=Math.floor(Math.random()*(100-1)+1);
      this.name=faker.company.companyName();
this.address={
      street:faker.address.streetAddress(),
      city:faker.address.city(),
      state:faker.address.state(),
      zipCode: faker.address.zipCode(),
      countery:faker.address.country()
}
    }
}
const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
