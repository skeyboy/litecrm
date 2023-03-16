**English** | [中文](./README_zh_CN.md)

## Description

[LiteCrm](https://github.com/litecrm/litecrm) is an (nestjs + typeorm + ant design pro) opensource CRM system

## Installation

```bash
$ pnpm install
```
## Config api
```bash
# cd api directory
cp .env.example .env

```
## Config mysql server
```
SERVER_PORT=3000 
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=1355081829@qq.com
DB_DBNAME=litecrm

```

## Running the app

```bash
# start api
$ pnpm run start:api

# start admin
$ pnpm run start:admin

# generate api
$ pnpm run openapi
```

## Build the app

```bash
# build api
$ pnpm run build:api

# build admin
$ pnpm run build:admin

```

## License

[MIT © LiteCrm-2023](./LICENSE)


