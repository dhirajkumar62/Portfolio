import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-xl border border-[var(--muted)]/20 shadow-sm hover:border-[var(--accent-primary)] transition-all bg-[var(--surface)] text-[var(--text)] group"
      aria-label="Toggle Theme"
    >
      <div className="group-hover:scale-110 transition-transform">
        {theme === "dark" ? "🌞" : "🌙"}
      </div>
    </button>
  );
}
