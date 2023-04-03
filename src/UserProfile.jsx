export default function UserProfile({ user }) {
  const { name, age, email } = user;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}
