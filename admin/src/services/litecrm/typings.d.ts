declare namespace API {
  type AdminControllerFindOneParams = {
    id: string;
  };

  type AdminControllerRemoveParams = {
    id: string;
  };

  type AdminControllerUpdateParams = {
    id: string;
  };

  type CreateAdminDto = {};

  type CreateCustomerDto = {};

  type CustomerControllerFindOneParams = {
    id: string;
  };

  type CustomerControllerRemoveParams = {
    id: string;
  };

  type CustomerControllerUpdateParams = {
    id: string;
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
