import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md glass hover:scale-105 transition btn-neon"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
}
