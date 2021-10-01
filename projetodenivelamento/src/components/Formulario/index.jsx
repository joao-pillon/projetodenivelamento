import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Produtos from "../Produtos";
import "./style.css";

const Formulario = () => {
  const schema = yup.object().shape({
    code: yup.number().required("Campo obrigatório"),
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    price: yup.number().required("Campo obrigatório"),
    discount: yup.number().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleMyForm = (data) => {
    console.log(data);
  };

  /*   const addNew = (prod) => { */
  /*   const newProduct = prod.filter(()=>{
    
  })
  setProducts([...products, newProduct)
  }; */

  return (
    <form onSubmit={handleSubmit(handleMyForm)}>
      <div>
        <input {...register("code")} />
        {errors.code?.message && (
          <p style={{ color: "red" }}>{errors.code.message}</p>
        )}
      </div>
      <div>
        <input {...register("name")} />
        <p style={{ color: "red" }}>{errors.name?.message}</p>
      </div>
      <div>
        <input {...register("description")} />
        <p style={{ color: "red" }}>{errors.description?.message}</p>
      </div>
      <div>
        <input {...register("price")} />
        <p style={{ color: "red" }}>{errors.price?.message}</p>
      </div>
      <div>
        <input {...register("discount")} />
        <p style={{ color: "red" }}>{errors.discount?.message}</p>
      </div>

      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default Formulario;
