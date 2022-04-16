import { screen, render } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import catsMock from "../../../mocks/cats.json";
import Pets from "..";

const server = setupServer(
  rest.get("http://localhost:4000/cats", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(catsMock));
  })
);

beforeEach(() => render(<Pets />));
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());

describe("Pets pages", () => {
  beforeEach(() => {
    render(<Pets />);
  });

  test("should render the correct about of cards", async () => {
    const cards = await screen.findAllByRole("article");
    expect(cards.length).toBe(5);
  });
});
