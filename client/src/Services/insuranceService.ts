const getInsurance = async (id: number) => {
    await fetch(`/api/insurance/${id}`,{
        method: 'GET',
        body: JSON.stringify({id})
    })
    .then((res)=>res.json())
    .then(data=>data)
    .catch(err=>console.log(err))
}

const createInsurance = (...props: unknown[]) => {
    fetch(`/api/insurance}`, {
        method: 'POST',
        body: JSON.stringify({props})
    }).then((res)=>res.json()).then(data=>data)

}

export { getInsurance, createInsurance };