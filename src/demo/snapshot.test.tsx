import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "../App";

// afterEach(cleanup); // 在每个测试用例执行之后调用（调用多次），避免内存泄漏
// 现在cleanup 都是自动调用的，所以你已经不再需要再考虑它了

it("should take a snapshot", () => {
  const RenderText = () => {
    return <App >test</App>
  }
  const { asFragment } = render(<RenderText />);//  asFragment

  expect(asFragment(<RenderText />)).toMatchSnapshot();
});
