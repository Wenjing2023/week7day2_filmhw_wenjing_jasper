import React, { useState } from "react";

const ReleaseForm = ({ onReleaseSubmit }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleTextInput = (e) => setName(e.target.value);
  const handleLinkInput = (e) => setUrl(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameValue = name.trim();
    const urlValue = url.trim();

    if (!nameValue || !urlValue) return;

    const releaseToSubmit = {
      name: nameValue,
      url: urlValue,
    };

    onReleaseSubmit(releaseToSubmit);

    setName("");
    setUrl("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Film name"
          value={name}
          onChange={handleTextInput}
        />
        <input
          type="url"
          placeholder="Link"
          value={url}
          onChange={handleLinkInput}
        />
        <button>Add film</button>
      </form>
    </>
  );
};

export default ReleaseForm;
