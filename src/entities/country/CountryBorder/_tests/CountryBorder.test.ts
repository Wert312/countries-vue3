import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import CountryBorder from "../index";

describe("CountryBorder tests", () => {
  it("should render", () => {
    const wrapper = mount(CountryBorder);
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
