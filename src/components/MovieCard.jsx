function MovieCard({ movie }) {
  return (
    <div
      style={{
        border: "2px solid #0099cc",
        padding: "1rem",
        borderRadius: "15px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={movie.image}
        alt={movie.title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <h2 style={{ color: "#004080" }}>{movie.title}</h2>
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
