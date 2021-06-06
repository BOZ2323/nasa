import { render, screen, cleanup } from "@testing-library/react";
import Title from "../Title";


test('should render Title component', () => {
    render(<Title />);
    const  titleElement = screen.getByTestId("test-2");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent("NASA");
  });