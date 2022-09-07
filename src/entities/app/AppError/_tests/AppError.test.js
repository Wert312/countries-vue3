import { mount } from "@vue/test-utils";

import AppError from "../index";
import {test} from "vitest";

// describe('AppError tests', () => {
//     it('should render', () => {
//         const wrapper = mount(AppError)
//         expect(wrapper.find('h2').exists()).toBe;
//     })
// })

const user = {
    name: 'Matt',
    age: 22,
}

test("Matt is 22", () => {
    expect(user.name).toBe("Matt")
})
