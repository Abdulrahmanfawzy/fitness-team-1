import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="text-2xl font-bold text-white hover:opacity-90 transition-opacity">
      Elite<span className="text-primary">Sync</span>
    </Link>
  );
}
