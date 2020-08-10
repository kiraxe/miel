export const rus = {
    'sidebar' : {
        'menu' : {
            'products' : 'Продукция',
            'categories' : 'Категории',
            'clientele' : 'Клиенты',
            'options' : 'Опции',
            'orders' : 'Заказы',
            'messages' : 'Сообщения',
            'settings' : 'Настройки',
            'logout' : 'Выход'
        }
    },
    'page': {
        'products': {
            'title':'Продукция',
            'rub' : 'руб.',
            'table' : {
                'id' : 'Номер',
                'article' : 'Артикул',
                'name': 'Название',
                'description': 'Описание',
                'description_min': 'Короткое описание',
                'price_quarterly': 'Цена(Квартал)',
                'price': 'Цена',
                'price_second': 'Цена',
                'price_third': 'Цена',
                'property': 'Характеристики',
                'min_quarterly': 'Минимальное количество (квартал)',
                'min': 'Минимальное количество',
                'min_second': 'Минимальное количество',
                'min_third': 'Минимальное количество',
                'image': 'Картинка',
                'novelty' : 'Новинка',
                'popular' : 'Популярный',
                'action': 'Действия'
            },
            'edit' : {
                'title' : 'Редактировать',
                'button' : 'Обновить',
                'success' : 'Обновление...'
            },
            'new' : {
                'title' : 'Создать товар',
                'button' : 'Создать',
                'success' : 'Создание...'
            },
            'error' : {
                'name' : 'Введите название',
                'article' : 'Введите артикул',
                'detail' : 'Введите описание',
                'price' : 'Введите цену',
            },
        },
        'categories': {
            'title':'Категории',
            'table' : {
                'id' : 'Номер',
                'name': 'Название',
                'description': 'Описание',
                'text': 'Текст',
                'parent':'Родительская категория',
                'main_menu': 'Показывать на главной странице',
                'link': 'Cсылка',
                'image': 'Картинка',
                'action': 'Действия'
            },
            'edit' : {
                'title' : 'Редактировать',
                'button' : 'Обновить',
                'success' : 'Обновление...'
            },
            'new' : {
                'title' : 'Создать категорию',
                'button' : 'Создать',
                'success' : 'Создание...'
            },
            'error' : {
                'name' : 'Введите название',
            },
        },
        'clientele': {
            'title':'Клиенты',
            'table' : {
                'id' : 'Номер',
                'name': 'ФИО',
                'email': 'Почта',
                'phone': 'Телефон',
                'company': 'Название офиса / подразделения',
                'name_legal_entity': 'Наименование юридического лица',
                'legal_entity': 'Юридический адрес',
                'addressK': 'Адрес для курьерской доставки',
                'addressP': 'Почтовый адрес для документов',
                'inn': 'ИНН',
                'kpp': 'КПП',
                'rs': 'Р/С',
                'bik': 'БИК',
                'ks': 'К/С',
                'password': 'Пароль',
                'action': 'Действия',
                'permission' : 'Права',
                'role': 'Роль'
            },
            'edit' : {
                'title' : 'Редактировать',
                'button' : 'Обновить',
                'success' : 'Обновление...'
            },
            'new' : {
                'title' : 'Создать клиента',
                'button' : 'Создать',
                'success' : 'Создание...'
            },
            'error' : {
                'login' : 'Введите логин',
                'name' : 'Введите ФИО',
                'phone' : 'Введите телефон',
                'email' : 'Введите email',
                'password' : 'Введите пароль',
                'addressP' : 'Введите почтовый адрес для документов',
                'addressK' : 'Ведите адрес для курьерской доставки'
            },
        },
        'orders': {
            'title' : "Заказы",
            'table' : {
                'id' : 'Номер',
                'company': 'Название офиса',
                'status': 'Статус',
                'date': 'Дата',
                'type': 'Тип заказа',
                'total': 'Итоговая сумма',
                'action': 'Действия',
            },
            'show' : {
                'title' : 'Заказ',
                'order_detail': {
                    'title' : 'Детали заказа'
                },
                'client': {
                    'title' : 'Клиент'
                },
                'delivery' : {
                    'title' : 'Доставка'
                },
                'cart' : {
                    'title': 'Корзина'
                },
                'comment': {
                    'title': 'Комментарий'
                }
            },
            'edit' : {
                'title' : 'Редактировать',
                'button' : 'Обновить',
                'success' : 'Обновление...'
            },
        },

        'messages': {
            'title' : "Сообщения клиентов",
            'table' : {
                'id' : 'Номер',
                'message' : 'Сообщение',
                'company': 'Название офиса',
                'name': 'ФИО',
                'date': 'Дата',
                'action': 'Действия',
            },
            'show' : {
                'title' : 'Сообщение',
                'message': {
                    'title' : 'Сообщение'
                },
                'client': {
                    'title' : 'Клиент'
                },
            },
            'error' : {
                'message' : 'Cообщение',
            },
        },
        'settings': {
            'title': "Настройки",
            'from': "От (квартал)",
            'to': "До (квартал)",
            'description_main_page' : 'Описание на главной странице',
            'description_other_page' : 'Описание на других страницах',
            'phone' : 'Номер телефона',
            'email' : 'Электронная почта',
            'worktime' : 'Время работы',
            'phone_manager' : 'Номер телефона менеджера',
            'manager_name' : 'ФИО менеджера',
            'manager_email' : 'Электронная почта менеджера',
            'youtube' : 'Youtube',
            'facebook' : 'Facebook',
            'vk' : 'Vk',
            'instagram' : 'instagram',
            'button': "Сохранить",
            'success' : 'Сохранение...'
        },
        'options': {
            'title':'Опции',
            'table' : {
                'id' : 'Номер',
                'name': 'Название',
                'type' : 'Тип',
                'action': 'Действия'
            },
            'edit' : {
                'title' : 'Редактировать',
                'button' : 'Обновить',
                'success' : 'Обновление...'
            },
            'new' : {
                'title' : 'Создать опцию',
                'button' : 'Создать',
                'success' : 'Создание...'
            },
        },
    }
}
