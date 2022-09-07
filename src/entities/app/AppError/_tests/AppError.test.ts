import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import AppError from "../index";

test("mount component", async () => {
  expect(AppError).toBeTruthy();
  const wrapper = mount(AppError, {
    props: {
      error: "Error message",
    },
  });
  expect(wrapper.text()).toContain("Error message");
});

describe("AppError tests", () => {
  it("should render", () => {
    const wrapper = mount(AppError);
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h2").exists()).toBeTruthy();
  });
});
