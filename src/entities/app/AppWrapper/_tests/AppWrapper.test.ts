import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import AppWrapper from "../index";

describe("AppWrapper tests", () => {
  it("should render", () => {
    const wrapper = mount(AppWrapper);
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
