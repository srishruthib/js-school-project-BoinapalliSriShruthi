import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg ${
          theme === "dark" ? "navbar-dark bg-dark" : "navbar-dark bg-primary"
        } px-3`}
      >
        {/* Logo + Title */}
        <div className="navbar-brand d-flex align-items-center text-white">
          <a href="#" className="d-flex align-items-center text-white">
            <img
              src="/logo.png"
              alt="timeline logo"
              height={40}
              width={40}
              className="me-2 rounded-circle"
            />
            <span className="fw-bold">The Dev Horizon</span>
          </a>
        </div>

        {/* Theme Toggle Switch */}
        <section className="ms-auto d-flex align-items-center">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="themeSwitch"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <label className="form-check-label text-white" htmlFor="themeSwitch">
              {theme === "dark" ? "Dark" : "Light"}
            </label>
          </div>
        </section>
      </nav>
    </header>
  );
}
