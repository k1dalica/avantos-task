import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../Modal";
import { describe } from "node:test";

describe("Modal", () => {
  const mockOnClose = jest.fn();
  const defaultProps = {
    isOpen: true,
    onClose: mockOnClose,
    title: "Test Modal",
    children: <div>Modal Content</div>,
  };

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it("renders nothing when closed", () => {
    render(<Modal {...defaultProps} isOpen={false} />);

    expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });

  it("renders content when open", () => {
    render(<Modal {...defaultProps} />);

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("calls onClose when clicking overlay", () => {
    render(<Modal {...defaultProps} />);

    fireEvent.click(
      screen.getByText("Modal Content").parentElement!.parentElement!
    );
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("does not call onClose when clicking content", () => {
    render(<Modal {...defaultProps} />);

    fireEvent.click(screen.getByText("Modal Content"));
    expect(mockOnClose).not.toHaveBeenCalled();
  });
});
