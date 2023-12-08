export const vehicleModel = {
  vin: { 
    type: Number, 
    required: [true, "Vin is required"] 
  },
  year: {
    type: Date,
    required: [true, "Year is required"],
  },
  make: {
    type: String,
    required: [true, "Make is required"],
  },
};
