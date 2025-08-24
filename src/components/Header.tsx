import { useEffect, useState } from "react";
import { APP_CONFIG } from "../constants";

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
          theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-primary"
        } px-3`}
      >
        <h1 className="navbar-brand d-flex align-items-center mb-0">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none"
            aria-label={`${APP_CONFIG.NAME} - Home`}
          >
            <img
              src={APP_CONFIG.LOGO}
              alt=""
              height={40}
              width={40}
              className="me-2 rounded-circle"
            />
            <span className="fw-bold">{APP_CONFIG.NAME}</span>
          </a>
        </h1>

        <section className="ms-auto d-flex align-items-center">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="themeSwitch"
              checked={theme === "dark"}
              onChange={toggleTheme}
              aria-label="Toggle dark mode"
            />
            <label
              className="form-check-label text-white"
              htmlFor="themeSwitch"
            >
              {theme === "dark" ? "Dark" : "Light"}
            </label>
          </div>
        </section>
      </nav>
    </header>
  );
}
