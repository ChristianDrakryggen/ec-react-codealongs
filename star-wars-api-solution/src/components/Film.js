const Film = ({ film, handleOpenModal }) => {
  const pStyle = {
    padding: "5px 0px",
  };

  return (
    <div
      onClick={() => handleOpenModal(film)}
      style={{
        border: "2px solid black",
        padding: "20px",
        margin: "20px",
        width: "250px",
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <p style={pStyle}>{film.title}</p>
      <p style={pStyle}>{film.release_date}</p>
    </div>
  );
};

export default Film;
