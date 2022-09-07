import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import SearchBar from "../index";
import { createPinia, setActivePinia } from "pinia";

describe("SearchBar tests", () => {
  it("should render", async () => {
    setActivePinia(createPinia());
    const wrapper = mount(SearchBar);
    expect(wrapper).toBeTruthy();
  });
});
