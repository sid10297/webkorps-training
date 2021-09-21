const Contact = ({ contact }) => {
  const { name, email } = contact;
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Contact;
