import express from "express";
import {insuranceController} from "../controllers/insuranceControllers.js";
const insuranceRouter = express.Router();

insuranceRouter.post("/", insuranceController.createInsurance);

// 1. POST route that starts a new insurance application and initializes it with the provided
// data
// app.post('/insurance', (req, res) => {}); //return a “resume” route that points to the frontend URL to loadthe created application

// 2. GET route that can retrieve the current insurance application
insuranceRouter.get('/:id', insuranceController.getInsurance); //return the application data

// 3. PUT route that will update the insurance application with provided data
insuranceRouter.put('/:id', insuranceController.updateInsurance); //return the updated application data
// a. This should accept partial fields from the quote application. Each submitted field
// needs to pass validation in order to be updated.
// b. The quote application as a whole may still be incomplete and should not cause
// this route to fail.
insuranceRouter.post('/:id', insuranceController.offerInsurance); //return the updated application data
// 4. POST route that validates the entire application and returns a price
// a. You do not actually need to do any calculation here, returning a random number
// value would be sufficient

export default insuranceRouter;