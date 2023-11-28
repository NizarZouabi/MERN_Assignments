const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({extended: true}) );

const createUser = () => {
    const newUser = {
        _id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    return newUser
}

const newUserObject = createUser()
console.log(newUserObject);

const createCompany = () => {
    const newCompany = {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
    return newCompany
}

const newCompanyObject = createCompany()
console.log(newCompanyObject)


app.get("/api/users/new", (req, res) => {
    res.json(newUserObject);
})

app.get("/api/companies/new", (req, res) => {
  res.json(newCompanyObject);
});

app.get("/api/user/company", (req, res) => {
    res.json({
        newUserObject,
        newCompanyObject
    })
});

app.listen(port, () => console.log(`Listening on port: ${port}`));