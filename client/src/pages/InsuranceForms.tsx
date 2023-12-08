import { useForm, SubmitHandler } from "react-hook-form";
import { inputValues } from "../Model/dataModel";
import { IInputValues } from "./IInputFields";
import { useNavigate } from "react-router-dom";

const getInsurance = async (id: string) => {
  return await fetch(`http://localhost:3000/api/insurance/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const { inputs } = data.data.insurance;
      return inputs
    });
};

const updateInsurance = (inputs: object) => {
  fetch("http://localhost:3000/api/insurance", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const {insurance} = data.data
      return insurance
    });
};

const InsuranceForms = () => {
  const navigate = useNavigate();
  const id = sessionStorage.getItem("insurance") || "";

  const { register, handleSubmit} = useForm<typeof IInputValues>({
    defaultValues: async () => getInsurance(id), // { firstName: 'bill', lastName: 'luo' }
  });

  const getOffer = (inputs: object, id: string) => {
    console.log(inputs,id)
    fetch(`http://localhost:3000/api/insurance/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id, inputs,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        const { priceGenerated } = data.data;
        const route = "/offer";
        navigate(route, { state: { priceGenerated } });
      });
  };

  const onSubmit: SubmitHandler<typeof IInputValues> = (data) => {
    if (id) {
      getOffer(data, id)
    } else {
      updateInsurance(data)
    }
  };

  return (
    <>
      <h1>Insurance Forms</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {inputValues.map((input) => {
          const pattern = input.pattern === '' ? undefined : input.pattern
          return (
            <div className="inputWrapper" key={input.id}>
              <label htmlFor={`${input.id}`}> {input.name} : </label>
              <input
                required
                className="input"
                key={input.id}
                type={input.type}
                id={`${input.id}`}
                {...register(input.name, {
                  pattern,
                })}
              />
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default InsuranceForms;
