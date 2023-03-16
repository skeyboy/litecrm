// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 客户列表 GET /admin/customer */
export async function customerList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.customerListParams,
  options?: { [key: string]: any },
) {
  return request<
    API.PaginatedDto & {
      data?: API.Customer[];
      total?: number;
      totalPage?: number;
      current?: number;
      pageSize?: number;
    }
  >('/admin/customer', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增客户 POST /admin/customer */
export async function addCustomer(body: API.CreateCustomerDto, options?: { [key: string]: any }) {
  return request<API.ResponseMapDto & { data?: Record<string, any> }>('/admin/customer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 客户详情 GET /admin/customer/${param0} */
export async function getCustomer(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCustomerParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResponseMapDto & { data?: API.Customer }>(`/admin/customer/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除客户 DELETE /admin/customer/${param0} */
export async function deleteCustomer(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteCustomerParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResponseMapDto & { data?: Record<string, any> }>(`/admin/customer/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /admin/customer/${param0} */
export async function CustomerControllerUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CustomerControllerUpdateParams,
  body: API.UpdateCustomerDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/admin/customer/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
