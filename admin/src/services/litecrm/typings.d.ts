declare namespace API {
  type Admin = {
    /** 用户id */
    id: number;
    /** 用户名 */
    username: string;
    /** 邮箱 */
    email?: string;
    /** 手机号 */
    mobile?: string;
    /** 微信 */
    wechat?: string;
    /** QQ */
    qq?: string;
    /** 头像 */
    avatar?: string;
    /** 密码 */
    password?: string;
    /** 创建时间 */
    createdAt: string;
    /** 更新时间 */
    updateAt: string;
    /** 删除时间 */
    deletedAt?: string;
  };

  type AdminControllerFindOneParams = {
    id: string;
  };

  type AdminControllerUpdateParams = {
    id: string;
  };

  type adminListParams = {
    /** 当前页码 */
    current?: number;
    /** 每页数量 */
    pageSize?: number;
    /** 用户名 */
    username?: string;
    /** 邮箱 */
    email?: string;
    /** 手机号 */
    mobile?: string;
  };

  type CreateAdminDto = {
    /** 用户名 */
    username: string;
    /** 密码 */
    password: string;
    /** 邮箱 */
    email?: string;
    /** 手机号 */
    mobile?: string;
  };

  type CreateCustomerDto = {
    /** 用户名 */
    username: string;
    /** 邮箱 */
    email?: string;
    /** 手机号 */
    mobile?: string;
    /** qq */
    qq?: string;
    /** 微信 */
    wechat?: string;
  };

  type Customer = {
    /** 用户id */
    id: number;
    /** 用户名 */
    username: string;
    /** 邮箱 */
    email?: string;
    /** 手机号 */
    mobile?: string;
    /** 微信 */
    wechat?: string;
    /** QQ */
    qq?: string;
    /** 头像 */
    avatar?: string;
    /** 创建时间 */
    createdAt: string;
    /** 更新时间 */
    updateAt: string;
    /** 删除时间 */
    deletedAt?: string;
  };

  type CustomerControllerUpdateParams = {
    id: string;
  };

  type customerListParams = {
    /** 当前页码 */
    current?: number;
    /** 每页数量 */
    pageSize?: number;
    /** 用户名 */
    username?: string;
    /** 邮箱 */
    email?: string;
    /** 手机号 */
    mobile?: string;
    /** 开始时间:YYYY-MM-DD HH:mm:SS */
    startDate?: any;
    /** 结束时间:YYYY-MM-DD HH:mm:SS */
    endDate?: any;
  };

  type deleteAdminParams = {
    /** 管理员id */
    id: number;
  };

  type deleteCustomerParams = {
    /** 客户id */
    id: number;
  };

  type getCustomerParams = {
    /** 客户id */
    id: number;
  };

  type LoginAdminDto = {
    /** 用户名 */
    username: string;
    /** 密码 */
    password: string;
    /** 用户类型:account|mobile */
    type: string;
  };

  type LoginResponseDto = {
    /** 用户token */
    token: string;
    /** currentAuthority */
    currentAuthority: string;
    /** 状态 */
    status: string;
    /** 用户类型 */
    type: 'account' | 'mobile';
  };

  type OutAdminDto = {
    /** 状态 */
    success: boolean;
  };

  type PaginatedDto = {
    /** 状态：true表示成功；false表示失败 */
    success: boolean;
    /** 提示信息 */
    errorMessage?: string;
  };

  type ResponseArrayto = {
    /** 状态：true表示成功；false表示失败 */
    success: boolean;
    /** 提示信息 */
    errorMessage?: string;
  };

  type ResponseMapDto = {
    /** 状态：true表示成功；false表示失败 */
    success: boolean;
    /** 提示信息 */
    errorMessage?: string;
  };

  type UpdateAdminDto = {};

  type UpdateCustomerDto = {};
}
