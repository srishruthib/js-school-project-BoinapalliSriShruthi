export default function FilterPanel() {
  const filters = ["All", "Important", "Recent"];

  return (
    <nav className="bg-success py-2">
      <div className="container d-flex flex-wrap justify-content-center gap-2">
        {filters.map((filter) => (
          <button key={filter} className="btn btn-light">
            {filter}
          </button>
        ))}
      </div>
    </nav>
  );
}
