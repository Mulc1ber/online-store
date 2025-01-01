# Области хранения данных:
- база данных на json-server
- BFF
- redux store


# Сущности приложения:
- Пользователь: БД (список пользователей), BFF (сессия текущего), store (отображение в браузере)
- Роль пользователя: БД (список ролей), BFF (сессия пользователя c ролью), store (использование на клиенте)
- товар: БД (список товаров), store (отображение в браузере)
- категории: БД (список категориев), store (отображение в браузере)

**- статья: БД (список статей), store (отображение в браузере)**


# Таблицы в БД:
- пользователи - users: id / login / password / registed_at / role_id
- роль - roles: id / name
- товары - products: id / name / price / category / image_url / description / specifications / shipping / stock
- категории - categories: id / name

<!-- - товары - products: id / title / image_url / price / category / quantity -->
**- комментарии - comments: id / author_id / post_id / content / published_at**
**- статьи - posts: id / title / image_url / content / published_at**


# Схема состояния на BFF:
- сессия текущего пользователя: login / password / role


# Схема для Redux store (на клиенте):
- user: id / login / roleId / session
- users: массив user: id / login / registeredAt / role
- products: массив product: id / name / price / category / imageUrl / description / specifications / shipping / stock
- product: id / name / price / category / imageUrl / description / specifications / shipping / stock
<!-- - categories: id / name -->

<!-- - products: массив product: id / title / imageUrl / price / category -->
<!-- - product: id / title / imageUrl / price / category / quantity -->
**- posts: массив post: id / title / imageUrl / publishedAt / commentsCount**
**- post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt**
