import React from "react";
import {
  render,
  // cleanup,
  fireEvent,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { fetchDataOne, fetchDataTwo, fetchDataThree } from '../services'

import AsyncApp from "./AsyncApp";

// afterEach(cleanup);

it("increments counter after 0.5s", async () => {
  // const { getByTestId, getByText, findByText } = 
  // 推荐使用screen
  render(<AsyncApp />);


  fireEvent.click(screen.getByTestId("button-up"));

  const counter = await screen.findByText("1");

  expect(counter).toHaveTextContent("1");
});

// 使用done的时候，测试会等待这个函数执行完毕
test('测试 fetchData1', (done) => {
  fetchDataOne(data => {
    expect(data).toMatchObject({
      code: 200
    });
    done()
  })
})

// 如果返回的是一个promise对象，可以直接使用return,或者async await 
// done和return 不能共存
test('测试 fetchData2', () => {
  return fetchDataTwo().then(res => {
    expect(res.data).toMatchObject({
      code: 200
    })
  })
})

//
test('测试 2-featchData3', () => {
  // 这里如果请求成功的话就不会走catch了，但是测试依旧会通过
  // 因此需要加上下面一句，指定必须只能执行一次expect
  expect.assertions(1)

  return fetchDataThree().catch(e => {
    expect(e.toString()).toEqual('Error: Request failed with status code 403')
  })
})
