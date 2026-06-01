import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ConfigError } from "./components/ConfigError.tsx";
import { checkEnv } from "./lib/env.ts";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
const env = checkEnv();

if (!env.ok) {
  console.error("[Wanderly] Missing required env vars:", env.missing);
  root.render(<ConfigError missing={env.missing} />);
} else {
  root.render(<App />);
}
