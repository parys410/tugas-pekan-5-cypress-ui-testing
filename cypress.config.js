const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://parabank.parasoft.com",
    specPattern: "cypress/e2e",
    supportFile: "cypress/support/index.js",
    chromeWebSecurity: false,
    videoUploadOnPasses: false,
  },
  env: {
    "validData": {
      "firstName": "Ria",
      "lastName": "Dharmayanti",
      "address": "Jl. Raya Sesetan No. 17",
      "city": "Denpasar",
      "state": "Bali",
      "zipCode": "80362",
      "phone": "08199988777",
      "ssn": "19700624",
      "username": "riadharmayanti",
      "password": "AkuAnakSehat2022"
    },
    "invalidData": {
      "firstName": "Ria",
      "lastName": "Dharmayanti",
      "address": "Jl. Raya Kapal No. 17",
      "city": "Badung",
      "state": "Bali",
      "zipCode": "80351",
      "phone": "08199988777",
      "ssn": "19700625",
      "username": "riadharmayanti",
      "password": "123"
    }
  }
});
