import { screen, render } from "@testing-library/react";
import userEvents from "@testing-library/user-event";

import Card, { Props as CardProps } from "..";

const cardProp: CardProps = {
  email: "email@email.com",
  image: { alt: "cute cat", url: "https://images.unsplash.com/photo-1562955239-78d8c23a3542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" },
  isFavorite: true,
  name: "name",
  phone: "123123",
};

describe("Card element", () => {
  beforeEach(() => {
    render(<Card {...cardProp} />);
  });

  it("should card elements exist", () => {
    expect(screen.getByRole("heading", { name: /name/i })).toBeInTheDocument();
    expect(screen.getByText(/123123/i)).toBeInTheDocument();
    expect(screen.getByText(/email@email.com/i)).toBeInTheDocument();
  });

  it("sould show image with source", () => {
    expect(screen.getByAltText(/cute cat/i).src).toBe(cardProp.image.url);
  });

  it("sould show filled heart", () => {
    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getAllByAltText(/filled heart/i)[0]).toBeInTheDocument();
  });

  it("sould toogle heats status", () => {
    userEvents.click(screen.getByRole("button" ))
    expect(screen.getAllByAltText(/outlined heart/i)[0]).toBeInTheDocument();
    userEvents.click(screen.getByRole("button" ))
    expect(screen.getAllByAltText(/filled heart/i)[0]).toBeInTheDocument();

  });
});
