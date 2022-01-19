import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Film from "./Film";
import Modal from "./Modal";
import Characters from "./Characters";

const Films = () => {
  const films = useFetch({
    url: "https://swapi.dev/api/films",
    method: "get",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [film, setFilm] = useState({});

  const handleOpenModal = (movie) => {
    setFilm(movie);
    setModalOpen(true);
  };

  console.log(films);
  console.log(film);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          minHeight: "35%",
        }}
      >
        {films &&
          films.results.map((film) => (
            <Film
              key={film.episode_id}
              film={film}
              handleOpenModal={handleOpenModal}
            />
          ))}
        {!films && <h2>Loading films...</h2>}
      </div>
      {modalOpen && (
        <Modal setModalOpen={setModalOpen}>
          <Characters characters={film.characters} />
        </Modal>
      )}
    </>
  );
};

export default Films;
