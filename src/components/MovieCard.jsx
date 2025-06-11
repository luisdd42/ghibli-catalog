function MovieCard({ movie }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "10px",
        backgroundColor: "#f0f8ff",
      }}
    >
      <h2>{movie.title}</h2>
      <p>
        <strong>Director:</strong> {movie.director}
      </p>
      <p>
        <strong>Año:</strong> {movie.release_date}
      </p>
      <p style={{ fontSize: "0.9rem" }}>
        {movie.description.substring(0, 100)}...
      </p>
    </div>
  );
}

export default MovieCard;
