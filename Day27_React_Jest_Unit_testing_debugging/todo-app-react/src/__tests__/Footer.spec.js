import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

// unit test
test("renders the footer with copyright text", () => {
  render(<Footer />);

  const footerElement = screen.getByText(/© 2025 todo app/i);

  expect(footerElement).toBeInTheDocument();
});
