import { time1, time2 } from "../utils";

// done
test('测试 time1', (done) => {
  time1(() => {
    expect(1).toBe(1)
    done()
  });
})


// runAllTimers 将所有的定时器全部立即运行结束
test('测试 time1 runAllTimers', () => {
  const fn = jest.fn();
  time1(fn);
  jest.runAllTimers();
  expect(fn).toHaveBeenCalledTimes(1);// 测试函数调用次数
})


// useFakeTimers 使用虚拟时间
test('测试 time2 useFakeTimers', () => {
  const fn = jest.fn();
  time2(fn);
  jest.useFakeTimers();
  expect(fn).toHaveBeenCalledTimes(2)


})
