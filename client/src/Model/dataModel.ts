// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const inputValues = [
    {
        id: 1,
        type: 'text',
        name: 'name',
        pattern: '',
        required: true,
        errorMessage: 'Name is required',
    },
    {
        id: 2,
        type: 'date',
        name: 'dateOfBirth',
        pattern: ''
    },
    {
        id: 3,
        type: 'text',
        name: 'address',
        pattern: ''
    },
    {
        id: 4,
        type: 'text',
        name: 'city',
        pattern: ''
    },
    {
        id: 5,
        type: 'text',
        name: 'state',
        pattern: ''
    },
    {
        id: 6,
        type: 'number',
        name: 'zip',
        pattern: '',
        maxLength: 5,
    },
    {
        id: 7,
        type: 'number',
        name: 'vehicle',
        pattern: '',
        max: 3,   
    },
    {
        id: 8,
        type: 'text',
        name: 'vin',
        pattern: '',
    },
    {
        id: 9,
        type: 'number',
        name: 'year',
        pattern: '',
        min: 1985,
        max: 2024
    },
    {
        id: 10,
        type: 'text',
        name: 'make',
        pattern: ''
    },
    {
        id: 11,
        type: 'text',
        name: 'model',
        pattern: ''
    }
] as const