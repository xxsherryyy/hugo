export const IInputValues = {
    name: '',
    dateOfBirth: Date,
    address: '',
    city: '',
    state: '',
    zip: Number,
    vehicle: Number,
    vin: Number,
    year: Number,
    make: '',
    model: ''
}

export interface IPattern {
    validator?: unknown,
    message?: string,
}
export interface IFormInput {
    id?: number,
    type?: string
    name: string,
    maxLength?: number,
    pattern?: IPattern,
  }