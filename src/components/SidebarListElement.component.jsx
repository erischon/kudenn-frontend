const Li = ({ icon, name }) => {
  const Icon = icon;

  return (
    <li>
      <Icon className="icon" />
      <span>{name}</span>
    </li>
  );
};

export default Li;
