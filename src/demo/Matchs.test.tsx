

let str = {
  name: 'John',
}
// toBe 相等于
test('has a name', () => {
  expect(str.name).toBe('John')
})

// toEqual 完全相等，只匹配内容不匹配引用，可以用于引用类型的匹配
test('undefined', () => {
  let name, age = undefined;
  expect(name).toBeUndefined();
  expect(age).toBeUndefined();
})


// toBeNull 匹配 null
const bloop = () => {
  return null;
}

test('bloop returns null', () => {
  expect(bloop()).toBeNull();
})

// toBeUndefined 匹配 undefined
test('bloop returns undefined', () => {
  let name, age;
  expect(name).toBeUndefined();
  expect(age).toBeUndefined();
})

// toBeNaN 匹配 NaN
test('passes when value is NaN', () => {
  expect(NaN).toBeNaN();
})


// toBeTruthy 匹配 true
test('passes when value is truthy', () => {
  let name = 'jsoning', flag = true, age = 26, obj = {};
  expect(name).toBeTruthy();
  expect(age).toBeTruthy();
  expect(flag).toBeTruthy();
  expect(obj).toBeTruthy();
})

// toBeDefined 匹配 已定义
test('passes when value is defined', () => {
  let name, age = 26;
  expect(name).not.toBe('');
  expect(age).toBeDefined();
})


// .not : 对后续的匹配的结果取反
test('not', () => {
  let name = 'test'
  let n = null;
  expect(name).not.toBeNull();
  expect(n).not.toBe('wdew');
})

//toBeGreaterThan(number) : 匹配大于某个数字
test('greater than', () => {
  expect(2).toBeGreaterThan(1);
})


// toBeGreaterThanOrEqual(number) : 匹配大于等于某个数字
test('greater than or equal', () => {
  expect(2).toBeGreaterThanOrEqual(1);
})

// toContain(item) : 匹配数组中包含某个元素
test('contains', () => {
  let arr = [1, 2, 3, 4, 5];
  let set = new Set(arr);
  expect(arr).toContain(2);
  expect(set).toContain(2);
})

const callback = (fn) => {
  fn()
}

// toHaveBeenCalled() /toBeCalled(): 匹配函数是否被调用
test('has been called', () => {
  const fn = jest.fn();
  callback(fn);
  expect(fn).toHaveBeenCalled();
  expect(fn).toBeCalled();
})

// toHaveReturned() /toReturn(): 匹配函数是否返回某个值
test('has returned', () => {
  const fn = jest.fn(() => 'test');
  fn();
  expect(fn).toHaveReturned();
})
