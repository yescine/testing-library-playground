import { screen, render } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import { assert } from "console";

import Filter, { Props as FilterProps } from "..";

describe("Filter bar", () => {
  beforeEach(() => {
    render(<Filter />);
  });

  test("change favourite value", () => {
    const select = screen.getByLabelText(/favourite/i);
    expect(select.value).toBe("any");
    userEvents.selectOptions(select, "favourite");
    expect(select.value).toBe("favourite");
    userEvents.selectOptions(select, "not favourite");
    expect(select.value).toBe("not favourite");
  });
});
