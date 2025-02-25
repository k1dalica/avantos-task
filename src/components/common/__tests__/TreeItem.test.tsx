import { render, screen, fireEvent } from "@testing-library/react";
import TreeItem from "../TreeItem";

describe("TreeItem", () => {
  const mockOnSelect = jest.fn();
  const defaultProps = {
    label: "Test Label",
    items: ["Item 1", "Item 2", "Item 3"],
    onSelect: mockOnSelect,
  };

  beforeEach(() => {
    mockOnSelect.mockClear();
  });

  it("renders label and collapsed state by default", () => {
    render(<TreeItem {...defaultProps} />);

    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByText("▶")).toBeInTheDocument();
    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
  });

  it("expands/collapses when clicking label", () => {
    render(<TreeItem {...defaultProps} />);

    fireEvent.click(screen.getByText("Test Label").parentElement!);
    expect(screen.getByText("▼")).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Test Label").parentElement!);
    expect(screen.getByText("▶")).toBeInTheDocument();
    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
  });

  it("calls onSelect when clicking an item", () => {
    render(<TreeItem {...defaultProps} />);

    fireEvent.click(screen.getByText("Test Label").parentElement!);
    fireEvent.click(screen.getByText("Item 1"));

    expect(mockOnSelect).toHaveBeenCalledWith("Item 1");
  });
});
