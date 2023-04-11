const Release = ({ name, url }) => {
  return (
    <li>
      <a href={url}>
        <h4>{name}</h4>
      </a>
    </li>
  );
};

export default Release;
