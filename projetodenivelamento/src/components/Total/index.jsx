import "./style.css";

const Total = ({ produtos }) => {
  const soma = produtos.reduce((prev, next) => {
    return prev + next.price;
  }, 0);

  const desc = produtos.reduce((prev, next) => {
    return prev - next.discount;
  }, 0);

  //com descontos
  //reduce

  return (
    <div className="total">
      <div>Valor: R$ {soma.toFixed(2)}</div>
      <div>Desconto: R$ {desc.toFixed(2)}</div>
      <div>Total: R$ {(soma + desc).toFixed(2)} </div>
    </div>
  );
};

export default Total;
