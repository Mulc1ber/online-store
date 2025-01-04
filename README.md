# Области хранения данных:
- база данных на json-server
- BFF
- redux store


# Сущности приложения:
- Пользователь: БД (список пользователей), BFF (сессия текущего), store (отображение в браузере)
- Роль пользователя: БД (список ролей), BFF (сессия пользователя c ролью), store (использование на клиенте)
- товар: БД (список товаров), store (отображение в браузере)
- категории: БД (список категориев), store (отображение в браузере)


# Таблицы в БД:
- пользователи - users: id / login / password / registed_at / role_id
- роль - roles: id / name
- товары - products: id / name / price / image_url / description / specifications / shipping / stock / category: объект: { label / name }
- категории - categories: id / label / name
- заказы - orders: id / hash / created_at / status / total_price / user_info: объект: { shipping / payment / username / email } / user: объект: { id / login / password / registeredAt / roleId } / products: массив товаров: [{ id / image_url / name / category / price / quantity }]


# Схема состояния на BFF:
- сессия текущего пользователя: id / hash / user: объект: { id / login / password / role / registeredAt }


# Схема для Redux store (на клиенте):
- app: wasLogout
- user: id / login / roleId / session
- order: объект: { id / hash / createdAt / status / totalPrice / userInfo: объект: {shipping / payment / username / email} / user: объект: {id / login / password / registeredAt / roleId} / products: массив products }
- counter: count
- product: id / name / price / category / imageUrl / description / specifications / shipping / stock
- productsInCart: массив product: [ id / name / price / category / imageUrl / description / specifications / shipping / stock ]
