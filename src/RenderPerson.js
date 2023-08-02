const RenderPerson = (props) => {
  const { eachItem } = props;
  const { name, age, message } = eachItem;
  return (
    <>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{message}</p>
    </>
  );
};

export default RenderPerson;
