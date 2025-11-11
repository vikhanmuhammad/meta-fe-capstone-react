import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders booking form correctly", () => {
    render(<BookingForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
});

test("shows error when submitting empty form", () => {
    render(<BookingForm />);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);
    expect(screen.getByText(/please fill out all fields/i)).toBeInTheDocument();
});