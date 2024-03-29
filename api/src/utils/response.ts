export const success = (data = {}, message = 'success') => {
  return {
    success: true,
    data,
  };
};
export const error = (message = 'error', data = {}) => {
  return {
    success: true,
    errorMessage: message,
    data,
  };
};

export function pagination<T>(
  data: T[],
  total: number,
  current = 1,
  pageSize = 15,
) {
  return {
    data,
    pageSize,
    total,
    totalPage: Math.ceil(total / pageSize),
    current,
  };
}
