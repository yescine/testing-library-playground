import { screen, render } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import { assert } from "console";

import Cards, { Props as CardsProps } from "..";

const CardsData: CardsProps["cats"] = [
  {
    email: "email@email.com",
    image: {
      alt: "cute cat",
      url: "https://images.unsplash.com/photo-1562955239-78d8c23a3542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
    },
    isFavorite: true,
    name: "name",
    phone: "123123",
  },
];

describe("Cars valise", () => {
  beforeEach(() => {
    render(<Cards cats={[...CardsData, ...CardsData, ...CardsData]} />);
  });

  test("sould render 3 card", () => {
    expect(screen.getAllByRole("article").length).toBe(3);
  });
});
