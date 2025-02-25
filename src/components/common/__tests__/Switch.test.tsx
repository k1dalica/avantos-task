import { render, screen, fireEvent } from "@testing-library/react";

import { Switch } from "../Switch";

describe("Switch", () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it("renders in unchecked state", () => {
    render(<Switch checked={false} onChange={mockOnChange} />);

    const input = screen.getByRole("checkbox") as HTMLInputElement;
    expect(input.checked).toBe(false);
  });

  it("renders in checked state", () => {
    render(<Switch checked={true} onChange={mockOnChange} />);

    const input = screen.getByRole("checkbox") as HTMLInputElement;
    expect(input.checked).toBe(true);
  });

  it("calls onChange when clicked", () => {
    render(<Switch checked={false} onChange={mockOnChange} />);

    fireEvent.click(screen.getByRole("checkbox"));
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });
});
