import { ReactNode } from 'react';
import {SubmitHandler, useForm} from 'react-hook-form'
import { IInputValues } from '../pages/IInputFields';
type FormProps = {
    children: ReactNode;
    onSubmit: SubmitHandler<typeof IInputValues>
};

const Form = ({ onSubmit }: FormProps) => {
 
const {
    handleSubmit,
  } = useForm<typeof IInputValues>()

    return (
        <>
            <h1>Insurance Forms</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
        </form>
        </>
    )
};
export default Form;