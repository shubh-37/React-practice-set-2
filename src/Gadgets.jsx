export default function Gadgets({ products }) {
  function checkPrice(prodPrice) {
    return prodPrice > 50000 ? "solid 1px" : "none";
  }
  return (
    <div>
      <ul>
        {products.map(({ id, name, description, price }) => (
          <li key="id" style={{ border: checkPrice(price) }}>
            Name: {name} | Description: {description} | Price: {price}
          </li>
        ))}
      </ul>
    </div>
  );
}
