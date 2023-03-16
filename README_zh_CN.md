**中文** | [English](./README.md)

## Description

[LiteCrm](https://github.com/litecrm/litecrm)是一款(nestjs + typeorm + ant design pro)开源CRM系统

## 安装

```bash
$ pnpm install
```
## 配置 api
```bash
# cd api directory
cp .env.example .env

```
## 配置 mysql 服务
```
SERVER_PORT=3000 
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=1355081829@qq.com
DB_DBNAME=litecrm

```

## 启动应用

```bash
# start api
$ pnpm run start:api

# start admin
$ pnpm run start:admin

# generate api
$ pnpm run openapi
```

## 编译应用

```bash
# build api
$ pnpm run build:api

# build admin
$ pnpm run build:admin

```

## License

[MIT © LiteCrm-2023](./LICENSE)