import { throttle } from "./throttle";

describe("throttle", () => {
  jest.useFakeTimers();

  it("should call the function immediately", () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it("should not call the function again within the limit period", () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc();
    throttledFunc();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it("should call the function again after the limit period", () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc();
    jest.advanceTimersByTime(1000);
    throttledFunc();

    expect(func).toHaveBeenCalledTimes(2);
  });
});
