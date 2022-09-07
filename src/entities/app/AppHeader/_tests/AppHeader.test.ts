import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import AppHeader from "../index";

describe("AppHeader tests", () => {
  it("should render", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
