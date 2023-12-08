import { useState } from "react";
import { IInputValues } from "./IInputFields";
import { inputValues } from "../Model/dataModel";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const InsuranceApplication = () => {
  const navigate = useNavigate();
  const [, setInputs] = useState({});
  const { register, handleSubmit } = useForm<typeof IInputValues>();

  const createInsurance = (inputs: object) => {
    fetch("http://localhost:3000/api/insurance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const { route, insurance } = data.data;
        const id = insurance.id;
        sessionStorage.setItem("insurance", JSON.stringify(id));
        navigate(route, { state: { id } });
      });
  };

  const onSubmit: SubmitHandler<typeof IInputValues> = (data) => {
    setInputs(data);
    createInsurance(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputValues.map((input) => {
        return (
          <div key={input.id}>
            <label htmlFor={`${input.id}`}>{input.name}</label>
            <input
              key={input.id}
              type={input.type}
              id={`${input.id}`}
              {...register(input.name)}
            />
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};
export default InsuranceApplication;
