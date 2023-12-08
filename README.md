Backend
Create a web API that exposes four endpoints:
1. POST route that starts a new insurance application and initializes it with the provided
data
a. This route should return a “resume” route that points to the frontend URL to load
the created application

2. GET route that can retrieve the current insurance application
3. PUT route that will update the insurance application with provided data
a. This should accept partial fields from the quote application. Each submitted field
needs to pass validation in order to be updated.
b. The quote application as a whole may still be incomplete and should not cause
this route to fail.

4. POST route that validates the entire application and returns a price
a. You do not actually need to do any calculation here, returning a random number
value would be sufficient

# Client App - Vite React-TS
`yarn install`
`yarn dev`

- I chose to use React Hook Forms library to help with managing state, validation and error but prioritized the functionality and architechture of the app over implementing the validation logic (which can be found in the Model/dataModels.ts file )
- The form component in the Components folder is to demonstrate component architechture if extraoplated out from the page components for reusability if had more time.
- I started off seprating the external services in the Services folder to show better folder structure and function calls outside of the main page component. To save time I left the api calls inside the page files. 
- There's also an interface file inside pages to help define data and types
- The POST request to update the insurance details is not set up to trigger due to the form validation logic not implemented but will update the form object in the backend when passed the data object

# Server - Node Express
`npm install`
`npm run dev`

- I gave sample postgresql queries and db utilities in the DB folder which can be replaced with my logic in the controller files. I just used local storage for the purpose of this assesment.

- I started to create an extensible schema for multiple vehicles in the models folder. If done correctly I would have a vehicles table with the associated data, linked to the insurance/user by uuid. 

- I prioritized a working application over the smaller task logic to demonstrate overall design.