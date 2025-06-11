import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        backgroundColor: "#d0f0ff",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          padding: "2rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#004080" }}>
          🎥 Catálogo Studio Ghibli
        </h1>

        <input
          type="text"
          placeholder="Buscar película"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "0.7rem",
            width: "100%",
            marginBottom: "2rem",
            fontSize: "1.1rem",
            borderRadius: "8px",
            border: "1px solid #888",
          }}
        />

        {filteredMovies.length > 0 ? (
          <MovieList movies={filteredMovies} />
        ) : (
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "#aa0000",
              backgroundColor: "#ffe6e6",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            ❌ No se encontraron películas con el nombre: "
            <strong>{search}</strong>"
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
