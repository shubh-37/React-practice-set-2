export default function Phones({ products }) {
  return (
    <div>
      <ul>
        {products
          .filter(({ name }) => name === "mobile")
          .map(({ name, description, price }) => (
            <li key="id">
              Name: {name} Description: {description} Price: {price}
            </li>
          ))}
      </ul>
    </div>
  );
}
