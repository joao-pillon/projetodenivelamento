import "./style.css";


const Produtos = ({ produtos }) => {

  return (
    <div className="form">
    <div>
        {produtos.map((prod) => (
          <li key={prod.code}>
              <div className="produtos">
                  <div>
              <label id="code"> {prod.code} </label>
              
              <label id="name">{prod.name} </label></div>
              <div>
              <label id="description"> {prod.description} </label></div>
              <div>
              <label id="price">Por apenas R$ {prod.price} </label></div>
              <div>
              <label id="discount">com desconto de R$ {prod.discount} </label></div>
              </div>
          </li>
        ))}
    </div>
    </div>
  );
};

export default Produtos;
