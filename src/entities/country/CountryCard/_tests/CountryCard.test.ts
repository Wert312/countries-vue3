import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import CountryCard from "../index";

describe("CountryCard tests", () => {
  it("should render", () => {
    const wrapper = mount(CountryCard);
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
