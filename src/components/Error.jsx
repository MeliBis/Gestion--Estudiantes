const Error = ({ mensaje }) => {
  return (
    <div className="alert alert-danger" role="alert">
        <strong>Error </strong>
        {mensaje}
    </div>
  );
};

export default Error;
