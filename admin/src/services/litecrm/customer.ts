// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /admin/customer */
export async function CustomerControllerFindAll(options?: { [key: string]: any }) {
  return request<any>('/admin/customer', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /admin/customer */
export async function CustomerControllerCreate(
  body: API.CreateCustomerDto,
  options?: { [key: string]: any },
) {
  return request<any>('/admin/customer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /admin/customer/${param0} */
export async function CustomerControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CustomerControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/admin/customer/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /admin/customer/${param0} */
export async function CustomerControllerRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CustomerControllerRemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/admin/customer/${param0}`, {
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
