import insuranceSchema from "../models/insuranceModel.js";
// Database query is in DB/dbUtils.js

const insurancesArray = [];

const createInsurance = async (req, res) => {
  try {
    const { inputs } = req.body;
    const id = Math.floor(Math.random() * 1000000000);  // replace with uuid generator
    await insurancesArray.push({ id, inputs });
    res.json({
      status: "success",
      data: {
        insurance: { id, inputs },
        route: "/resume",
      },
    });
  } catch (err) {
    res.json({
      status: "fail",
      message: err.message,
    });
  }
};

const getInsurance = async (req, res) => {
  try {
    const { id } = req.params;
    const insurance = await insurancesArray.find(
      (insurance) => insurance.id == id
    );
    res.json({
      status: "success",
      data: { insurance: insurance },
    });
  } catch (err) {
    res.json({
      status: "fail",
      message: err.message,
    });
  }
};

const updateInsurance = async (req, res) => {
  try {
    const { id } = req.params;
    const insurance = await insurancesArray.updateInsuranceById(
      (insurance) => insurance.id == id
    );
    res.json({ status: "success", data: insurance });
  } catch (err) {
    res.json({ status: "fail", message: err.message });
  }
};

const offerInsurance = async (req, res) => {
  const priceGenerator = Math.random().toFixed(2)*100;
  const {inputs, id} = req.body;
  const insurance = await insurancesArray.find(
    (insurance) => insurance.id == id
  );
  if (insurance) {
    for (const [key, value] of Object.entries(insurance)) {
      if (inputs[key]) {
        insurance[value] = inputs[value];
      }
    }
  } else {
    return res.json({
      status: "fail",
      message: "Insurance not found",
    });
  }
  
  return res.json({
    status: "success",
    data: {
      priceGenerated: priceGenerator,
    },
  });

};

export const insuranceController = {
  createInsurance,
  getInsurance,
  updateInsurance,
  offerInsurance,
};
