export default function DisplayProd({ prodName, prodPrice }) {
  return (
    <div>
      <h2 style={{ color: "blue", fontWeight: "bold" }}> {prodName} </h2>
      <h3 style={{ fontStyle: "italic", color: "green" }}> {prodPrice} </h3>
    </div>
  );
}
