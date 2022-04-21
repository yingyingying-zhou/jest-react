import { fetchDataOne } from '../services'

// jest.fn()


// jest.mock()


// jest.spyOn()


// 测试回调函数是否被调用
// https://zhuanlan.zhihu.com/p/47009664

test('测试回调函数是否被调用', async () => {
  expect.assertions(1);
  const mockFn = jest.fn();
  await fetchDataOne(mockFn);
  expect(mockFn).toBeCalled();
})
