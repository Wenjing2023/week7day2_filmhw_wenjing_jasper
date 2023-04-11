import Release from "./Release";
const ReleaseList = ({ releases }) => {
  return (
    <>
      <h3>Release List</h3>
      <ul>
        {releases.map((release) => (
          <Release key={release.id} name={release.name} url={release.url} />
        ))}
      </ul>
    </>
  );
};

export default ReleaseList;
