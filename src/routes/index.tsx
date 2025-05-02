import HomePage from "@/pages/HomePage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePageRoute,
});

function HomePageRoute() {
  return <HomePage />;
}
