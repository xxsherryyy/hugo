import { Pool } from'pg';

const pool = new Client()
export const getInsuranceById = async (id) => {
    const id= pool.query(`SELECT * FROM insurance WHERE id = ${id}`, [id])
}

export const updateInsuranceById = async (data) => {
    const {id, name, dateOfBirth, address, city, state, zip, vehicle, vin, year, make, model} = data
    const updateInsurance = pool.query(
        'UPDATE insurance SET name=$2 dateOfBirth=$3 address=$4 city=$4 state=$5 zip=$6 vehicle=$7 vin=$8 year=$9 make=$10 model=$11 WHERE id = $1', 
    [id, name, dateOfBirth, address, city, state, zip, vehicle, vin, year, make, model ])
}

export const getQuote = async (data) => {
    const {name, dateOfBirth, address, city, state, zip, vehicle, vin, year, make, model} = data
    const createInsurance = pool.query(
        'INSERT INTO insurance (name, dateOfBirth, address, city, state, zip, vehicle, vin, year, make, model) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', 
    [name, dateOfBirth, address, city, state, zip, vehicle, vin, year, make, model ])
}