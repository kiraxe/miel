(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/components/Admin/Admin.jsx":
/*!*************************************************!*\
  !*** ./resources/js/components/Admin/Admin.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar/Sidebar */ "./resources/js/components/Admin/Sidebar/Sidebar.jsx");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header/Header */ "./resources/js/components/Admin/Header/Header.jsx");
/* harmony import */ var _Products_ProductsContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Products/ProductsContainer */ "./resources/js/components/Admin/Products/ProductsContainer.js");
/* harmony import */ var _lientele_ClienteleContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Сlientele/ClienteleContainer */ "./resources/js/components/Admin/Сlientele/ClienteleContainer.js");






var Admin = function Admin(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    currentUser: props.currentUser,
    logout: props.logout
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    id: "adminMain",
    className: "col-sm-9 offset-sm-3 col-lg-10 offset-lg-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, props.page == 'products' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Products_ProductsContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null) : null, props.page == 'clientele' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lientele_ClienteleContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null) : null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),

/***/ "./resources/js/components/Admin/AdminContainer.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Admin/AdminContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/auth-reducer */ "./resources/js/redux/auth-reducer.js");
/* harmony import */ var _Admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Admin */ "./resources/js/components/Admin/Admin.jsx");
/* harmony import */ var _hoc_withAuthRedirect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hoc/withAuthRedirect */ "./resources/js/hoc/withAuthRedirect.js");
/* harmony import */ var _redux_admin_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/admin-selectors */ "./resources/js/redux/admin-selectors.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var AdminContainer = /*#__PURE__*/function (_Component) {
  _inherits(AdminContainer, _Component);

  var _super = _createSuper(AdminContainer);

  function AdminContainer() {
    _classCallCheck(this, AdminContainer);

    return _super.apply(this, arguments);
  }

  _createClass(AdminContainer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Admin__WEBPACK_IMPORTED_MODULE_4__["default"], {
        currentUser: this.props.currentUser,
        logout: this.props.logout,
        page: this.props.match.params.page
      });
    }
  }]);

  return AdminContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    adminPage: Object(_redux_admin_selectors__WEBPACK_IMPORTED_MODULE_6__["getAdminPageSelector"])(state),
    currentUser: Object(_redux_admin_selectors__WEBPACK_IMPORTED_MODULE_6__["getCurrentUserSelector"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  logout: _redux_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["logout"]
}), _hoc_withAuthRedirect__WEBPACK_IMPORTED_MODULE_5__["withAuthRedirect"])(AdminContainer));

/***/ }),

/***/ "./resources/js/components/Admin/Header/Header.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/Admin/Header/Header.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/images/logo.png */ "./resources/js/assets/images/logo.png");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "fixed-top adminHeader"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/admin"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "adminLogo",
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./resources/js/components/Admin/Language.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Admin/Language.js ***!
  \***************************************************/
/*! exports provided: rus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rus", function() { return rus; });
var rus = {
  'sidebar': {
    'menu': {
      'products': 'Продукция',
      'clientele': 'Клиенты',
      'logout': 'Выход'
    }
  },
  'page': {
    'products': {
      'title': 'Продукция',
      'rub': 'руб.',
      'table': {
        'id': 'Номер',
        'name': 'Название',
        'description': 'Описание',
        'price': 'Цена',
        'action': 'Действия'
      },
      'edit': {
        'title': 'Редактировать',
        'button': 'Обновить',
        'success': 'Обновление...'
      },
      'new': {
        'title': 'Создать товар',
        'button': 'Создать',
        'success': 'Создание...'
      },
      'error': {
        'name': 'Введите название',
        'detail': 'Введите описание',
        'price': 'Введите цену'
      }
    },
    'clientele': {
      'title': 'Клиенты',
      'table': {
        'id': 'Номер',
        'name': 'ФИО',
        'email': 'Почта',
        'phone': 'Телефон',
        'company': 'Компания',
        'addressK': 'Адрес для курьерской доставки',
        'addressP': 'Почтовый адрес для документов',
        'inn': 'ИНН',
        'kpp': 'КПП',
        'rs': 'Р/С',
        'bik': 'БИК',
        'ks': 'К/С',
        'password': 'Пароль',
        'action': 'Действия',
        'permission': 'Права',
        'role': 'Роль'
      },
      'edit': {
        'title': 'Редактировать',
        'button': 'Обновить',
        'success': 'Обновление...'
      },
      'new': {
        'title': 'Создать клиента',
        'button': 'Создать',
        'success': 'Создание...'
      },
      'error': {
        'name': 'Введите ФИО',
        'phone': 'Введите телефон',
        'email': 'Введите email',
        'password': 'Введите пароль'
      }
    }
  }
};

/***/ }),

/***/ "./resources/js/components/Admin/Products/Product.jsx":
/*!************************************************************!*\
  !*** ./resources/js/components/Admin/Products/Product.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/ButtonsPanel/ButtonPanelContainer */ "./resources/js/components/common/ButtonsPanel/ButtonPanelContainer.js");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Language */ "./resources/js/components/Admin/Language.js");




var Product = function Product(props) {
  var buttons = ['edit', 'delete'];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.product.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.product.detail), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.product.price, " ", _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.products.rub), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    page: props.page,
    buttons: buttons,
    elementId: props.product.id,
    url: props.url
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductEdit/ProductEdit.js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductEdit/ProductEdit.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Language */ "./resources/js/components/Admin/Language.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _public_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/loading.svg */ "./public/images/loading.svg");
/* harmony import */ var _public_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Validator_Validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Validator/Validate */ "./resources/js/components/Admin/Products/Validator/Validate.js");
/* harmony import */ var _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/FormsControls/FormControls */ "./resources/js/components/common/FormsControls/FormControls.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var ProductEdit = function ProductEdit(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.edit.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProductEditReduxForm, {
    errSer: props.error,
    initialValues: props.product[0],
    onSubmit: props.editProduct
  })));
};

var ProductEditForm = function ProductEditForm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFetching = _useState2[0],
      setFetching = _useState2[1];

  var handleSubmit = props.handleSubmit,
      pristine = props.pristine,
      reset = props.reset,
      submitting = props.submitting,
      errSer = props.errSer,
      submitSucceeded = props.submitSucceeded,
      submitFailed = props.submitFailed;
  submitSucceeded || submitFailed || errSer ? setTimeout(function () {
    setFetching(false);
  }, 1000) : null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    className: "form"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productName",
    name: "name",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.name
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "textarea",
    idName: "productDetail",
    name: "detail",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Textarea"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.description
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productPrice",
    name: "price",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setFetching(true);
    },
    type: "submit",
    className: "btn btn-primary",
    disabled: submitting
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.edit.button, " ", isFetching ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _public_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }) : null), errSer === null && submitSucceeded && isFetching && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: 'success'
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.edit.success));
};

var ProductEditReduxForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: "ProductEdit",
  validate: _Validator_Validate__WEBPACK_IMPORTED_MODULE_4__["default"],
  asyncBlurFields: ['name', 'detail', 'price']
})(ProductEditForm);
/* harmony default export */ __webpack_exports__["default"] = (ProductEdit);

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductNew/ProductNew.jsx":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductNew/ProductNew.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Language */ "./resources/js/components/Admin/Language.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _public_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/loading.svg */ "./public/images/loading.svg");
/* harmony import */ var _public_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Validator_Validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Validator/Validate */ "./resources/js/components/Admin/Products/Validator/Validate.js");
/* harmony import */ var _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/FormsControls/FormControls */ "./resources/js/components/common/FormsControls/FormControls.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var ProductNew = function ProductNew(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products["new"].title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProductNewReduxForm, {
    errSer: props.error,
    onSubmit: props.addProduct
  })));
};

var ProductNewForm = function ProductNewForm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFetching = _useState2[0],
      setFetching = _useState2[1];

  var handleSubmit = props.handleSubmit,
      pristine = props.pristine,
      reset = props.reset,
      submitting = props.submitting,
      errSer = props.errSer,
      submitSucceeded = props.submitSucceeded,
      submitFailed = props.submitFailed;
  submitSucceeded || submitFailed || errSer ? setTimeout(function () {
    setFetching(false);
  }, 1000) : null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    className: "form"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productName",
    name: "name",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.name
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "textarea",
    idName: "productDetail",
    name: "detail",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Textarea"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.description
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productPrice",
    name: "price",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setFetching(true);
    },
    type: "submit",
    className: "btn btn-primary",
    disabled: submitting
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.edit.button, " ", isFetching ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _public_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }) : null), errSer === null && submitSucceeded && isFetching && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: 'success'
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.edit.success));
};

var ProductNewReduxForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: "ProductNew",
  validate: _Validator_Validate__WEBPACK_IMPORTED_MODULE_4__["default"],
  asyncBlurFields: ['name', 'detail', 'price']
})(ProductNewForm);
/* harmony default export */ __webpack_exports__["default"] = (ProductNew);

/***/ }),

/***/ "./resources/js/components/Admin/Products/Products.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/components/Admin/Products/Products.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ "./resources/js/components/Admin/Products/Product.jsx");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Language */ "./resources/js/components/Admin/Language.js");
/* harmony import */ var _common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/ButtonsPanel/ButtonPanelContainer */ "./resources/js/components/common/ButtonsPanel/ButtonPanelContainer.js");





var Products = function Products(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.products.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    className: "thead-dark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.products.table.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.products.table.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.products.table.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.products.table.action))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, props.products ? props.products.map(function (p) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Product__WEBPACK_IMPORTED_MODULE_1__["default"], {
      page: props.page,
      url: props.url,
      product: p,
      key: p.id
    });
  }) : null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    buttons: ['add'],
    url: props.url
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductsContainer.js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductsContainer.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products */ "./resources/js/components/Admin/Products/Products.jsx");
/* harmony import */ var _ProductEdit_ProductEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductEdit/ProductEdit */ "./resources/js/components/Admin/Products/ProductEdit/ProductEdit.js");
/* harmony import */ var _ProductNew_ProductNew__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductNew/ProductNew */ "./resources/js/components/Admin/Products/ProductNew/ProductNew.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _redux_products_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/products-reducer */ "./resources/js/redux/products-reducer.js");
/* harmony import */ var _redux_product_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../redux/product-selectors */ "./resources/js/redux/product-selectors.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var ProductsContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductsContainer, _React$Component);

  var _super = _createSuper(ProductsContainer);

  function ProductsContainer(props) {
    var _this;

    _classCallCheck(this, ProductsContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onAddSubmit", function (formData) {
      _this.props.addProduct(formData);
    });

    _defineProperty(_assertThisInitialized(_this), "onEditSubmit", function (formData) {
      _this.props.editProduct(formData);
    });

    return _this;
  }

  _createClass(ProductsContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getProducts();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var product = !this.props.match.params.slug ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Products__WEBPACK_IMPORTED_MODULE_1__["default"], {
        page: this.props.match.params.page,
        url: this.props.match.url,
        products: this.props.products
      }) : this.props.match.params.slug === 'edit' && this.props.match.params.id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductEdit_ProductEdit__WEBPACK_IMPORTED_MODULE_2__["default"], {
        error: this.props.error,
        editProduct: this.onEditSubmit,
        product: this.props.products ? this.props.products.filter(function (item) {
          return item.id == _this2.props.match.params.id;
        }) : null
      }) : this.props.match.params.slug === 'add' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductNew_ProductNew__WEBPACK_IMPORTED_MODULE_3__["default"], {
        error: this.props.error,
        addProduct: this.onAddSubmit
      }) : null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, product);
    }
  }]);

  return ProductsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: Object(_redux_product_selectors__WEBPACK_IMPORTED_MODULE_8__["getProductsSelectors"])(state),
    error: Object(_redux_product_selectors__WEBPACK_IMPORTED_MODULE_8__["getErrorSelector"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  getProducts: _redux_products_reducer__WEBPACK_IMPORTED_MODULE_7__["getProducts"],
  addProduct: _redux_products_reducer__WEBPACK_IMPORTED_MODULE_7__["addProduct"],
  editProduct: _redux_products_reducer__WEBPACK_IMPORTED_MODULE_7__["editProduct"]
}), react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(ProductsContainer));

/***/ }),

/***/ "./resources/js/components/Admin/Products/Validator/Validate.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Admin/Products/Validator/Validate.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Language */ "./resources/js/components/Admin/Language.js");


var validate = function validate(values) {
  var errors = {};

  if (!values.name) {
    errors.name = _Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.products.error.name;
  }

  if (!values.detail) {
    errors.detail = _Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.products.error.detail;
  }

  if (!values.price) {
    errors.price = _Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.products.error.price;
  }

  return errors;
};

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./resources/js/components/Admin/Sidebar/Navbar/Navbar.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/Admin/Sidebar/Navbar/Navbar.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Language */ "./resources/js/components/Admin/Language.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Navbar = /*#__PURE__*/function (_Component) {
  _inherits(Navbar, _Component);

  var _super = _createSuper(Navbar);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _super.apply(this, arguments);
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      var _this = this;

      var logoutBtnClicked = function logoutBtnClicked() {
        //Perform Logout and then reach the homeepage anyway (success, fail)
        _this.props.logout();
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "nav menu"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: "/admin/products"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "fa fa-tags"
      }, "\xA0"), " ", _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].sidebar.menu.products)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: "/admin/clientele"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "fa fa-user-circle"
      }, "\xA0"), " ", _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].sidebar.menu.clientele)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "logout",
        onClick: logoutBtnClicked
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "fa fa-power-off"
      }, "\xA0"), " ", _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].sidebar.menu.logout)));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); //passes match, history, location to Component


/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Navbar));

/***/ }),

/***/ "./resources/js/components/Admin/Sidebar/Sidebar.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/components/Admin/Sidebar/Sidebar.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar/Navbar */ "./resources/js/components/Admin/Sidebar/Navbar/Navbar.js");



var Sidebar = function Sidebar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "sidebar-collapse",
    className: "col-sm-3 col-lg-2 sidebar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile-sidebar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile-usertitle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile-usertitle-name"
  }, props.currentUser), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile-usertitle-status"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "indicator label-success"
  }), "Online")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "clear"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "divider"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    logout: props.logout
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./resources/js/components/Admin/Сlientele/Client.jsx":
/*!************************************************************!*\
  !*** ./resources/js/components/Admin/Сlientele/Client.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/ButtonsPanel/ButtonPanelContainer */ "./resources/js/components/common/ButtonsPanel/ButtonPanelContainer.js");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Language */ "./resources/js/components/Admin/Language.js");




var Client = function Client(props) {
  var buttons = ['edit', 'delete'];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.phone), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.company), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.addressK), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.addressP), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.inn), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.kpp), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.rs), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.bik), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.ks), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    page: props.page,
    buttons: buttons,
    elementId: props.client.id,
    url: props.url
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Client);

/***/ }),

/***/ "./resources/js/components/Admin/Сlientele/ClientEdit/ClientEdit.js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Admin/Сlientele/ClientEdit/ClientEdit.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Language */ "./resources/js/components/Admin/Language.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _public_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/loading.svg */ "./public/images/loading.svg");
/* harmony import */ var _public_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Validator_Validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Validator/Validate */ "./resources/js/components/Admin/Сlientele/Validator/Validate");
/* harmony import */ var _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/FormsControls/FormControls */ "./resources/js/components/common/FormsControls/FormControls.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var ClientEdit = function ClientEdit(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.edit.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClientEditReduxForm, {
    errSer: props.error,
    initialValues: props.client[0],
    onSubmit: props.editClient
  })));
};

var ClientEditForm = function ClientEditForm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFetching = _useState2[0],
      setFetching = _useState2[1];

  var handleSubmit = props.handleSubmit,
      pristine = props.pristine,
      reset = props.reset,
      submitting = props.submitting,
      errSer = props.errSer,
      submitSucceeded = props.submitSucceeded,
      submitFailed = props.submitFailed;
  submitSucceeded || submitFailed || errSer ? setTimeout(function () {
    setFetching(false);
  }, 1000) : null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    className: "form"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientName",
    className: "form-control",
    name: "name",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.name
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    errSer: errSer,
    idName: "clientEmail",
    className: "form-control",
    name: "email",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.email
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.phone), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientPhone",
    className: "form-control",
    name: "phone",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.phone
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.company), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientCompany",
    className: "form-control",
    name: "company",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.company
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.addressK), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAddressK",
    className: "form-control",
    name: "addressK",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.addressK
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.addressP), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAddressP",
    className: "form-control",
    name: "addressP",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.addressP
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.inn), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientInn",
    className: "form-control",
    name: "inn",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.inn
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.kpp), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientKpp",
    className: "form-control",
    name: "kpp",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.kpp
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.rs), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientRs",
    className: "form-control",
    name: "rs",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.rs
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.bik), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientBik",
    className: "form-control",
    name: "bik",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.bik
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.ks), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientKs",
    className: "form-control",
    name: "ks",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.ks
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.password), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    idName: "clientPassword",
    className: "form-control",
    type: "password",
    name: "password",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.password
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.permission), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    id: "clientPermission",
    className: "form-control",
    name: "clientPermission",
    component: "select",
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.permission
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "ff0000"
  }, "Red"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "00ff00"
  }, "Green"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "0000ff"
  }, "Blue"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.role), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    id: "clientRole",
    className: "form-control",
    name: "clientRole",
    component: "select",
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.role
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "ff0000"
  }, "Red"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "00ff00"
  }, "Green"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "0000ff"
  }, "Blue"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setFetching(true);
    },
    type: "submit",
    className: "btn btn-primary"
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.edit.button, " ", isFetching ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _public_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }) : null), errSer === null && submitSucceeded && isFetching && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'success'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.edit.success)));
};

var ClientEditReduxForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: "ClientEdit",
  validate: _Validator_Validate__WEBPACK_IMPORTED_MODULE_4__["default"],
  asyncBlurFields: ['name', 'email', 'phone']
})(ClientEditForm);
/* harmony default export */ __webpack_exports__["default"] = (ClientEdit);

/***/ }),

/***/ "./resources/js/components/Admin/Сlientele/ClientNew/ClientNew.js":
/*!************************************************************************!*\
  !*** ./resources/js/components/Admin/Сlientele/ClientNew/ClientNew.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Language */ "./resources/js/components/Admin/Language.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _public_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/loading.svg */ "./public/images/loading.svg");
/* harmony import */ var _public_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Validator_Validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Validator/Validate */ "./resources/js/components/Admin/Сlientele/Validator/Validate");
/* harmony import */ var _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/FormsControls/FormControls */ "./resources/js/components/common/FormsControls/FormControls.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var ClientNew = function ClientNew(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele["new"].title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClientNewReduxForm, {
    errSer: props.error,
    isFetching: props.isFetching,
    onSubmit: props.addClient
  })));
};

var ClientNewForm = function ClientNewForm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFetching = _useState2[0],
      setFetching = _useState2[1];

  var handleSubmit = props.handleSubmit,
      pristine = props.pristine,
      reset = props.reset,
      submitting = props.submitting,
      errSer = props.errSer,
      submitSucceeded = props.submitSucceeded,
      submitFailed = props.submitFailed;
  submitSucceeded || submitFailed || errSer ? setTimeout(function () {
    setFetching(false);
  }, 1000) : null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    className: "form"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientName",
    className: "form-control",
    name: "name",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.name
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    errSer: errSer,
    idName: "clientEmail",
    className: "form-control",
    name: "email",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.email
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.phone), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientPhone",
    className: "form-control",
    name: "phone",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.phone
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.company), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientCompany",
    className: "form-control",
    name: "company",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.company
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.addressK), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAddressK",
    className: "form-control",
    name: "addressK",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.addressK
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.addressP), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAddressP",
    className: "form-control",
    name: "addressP",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.addressP
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.inn), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientInn",
    className: "form-control",
    name: "inn",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.inn
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.kpp), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientKpp",
    className: "form-control",
    name: "kpp",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.kpp
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.rs), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientRs",
    className: "form-control",
    name: "rs",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.rs
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.bik), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientBik",
    className: "form-control",
    name: "bik",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.bik
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.ks), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientKs",
    className: "form-control",
    name: "ks",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.ks
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.password), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    idName: "clientPassword",
    className: "form-control",
    type: "password",
    name: "password",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.password
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.permission), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    id: "clientPermission",
    className: "form-control",
    name: "clientPermission",
    component: "select",
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.permission
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "ff0000"
  }, "Red"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "00ff00"
  }, "Green"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "0000ff"
  }, "Blue"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.role), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    id: "clientRole",
    className: "form-control",
    name: "clientRole",
    component: "select",
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.role
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "ff0000"
  }, "Red"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "00ff00"
  }, "Green"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "0000ff"
  }, "Blue"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setFetching(true);
    },
    type: "submit",
    className: "btn btn-primary",
    disabled: submitting
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele["new"].button, " ", isFetching ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _public_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }) : null), errSer === null && submitSucceeded && isFetching && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'success'
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele["new"].success));
};

var ClientNewReduxForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: "ClientNew",
  validate: _Validator_Validate__WEBPACK_IMPORTED_MODULE_4__["default"],
  asyncBlurFields: ['name', 'email', 'phone']
})(ClientNewForm);
/* harmony default export */ __webpack_exports__["default"] = (ClientNew);

/***/ }),

/***/ "./resources/js/components/Admin/Сlientele/Clientele.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/Admin/Сlientele/Clientele.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Client */ "./resources/js/components/Admin/Сlientele/Client.jsx");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Language */ "./resources/js/components/Admin/Language.js");
/* harmony import */ var _common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/ButtonsPanel/ButtonPanelContainer */ "./resources/js/components/common/ButtonsPanel/ButtonPanelContainer.js");





var Clientele = function Clientele(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    className: "thead-dark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.phone), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.company), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.addressK), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.addressP), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.inn), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.kpp), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.rs), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.bik), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.ks), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.action))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, props.clientele ? props.clientele.map(function (p) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Client__WEBPACK_IMPORTED_MODULE_1__["default"], {
      page: props.page,
      url: props.url,
      client: p,
      key: p.id
    });
  }) : null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    buttons: ['add'],
    url: props.url
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Clientele);

/***/ }),

/***/ "./resources/js/components/Admin/Сlientele/ClienteleContainer.js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Admin/Сlientele/ClienteleContainer.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Clientele__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Clientele */ "./resources/js/components/Admin/Сlientele/Clientele.jsx");
/* harmony import */ var _ClientEdit_ClientEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClientEdit/ClientEdit */ "./resources/js/components/Admin/Сlientele/ClientEdit/ClientEdit.js");
/* harmony import */ var _ClientNew_ClientNew__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClientNew/ClientNew */ "./resources/js/components/Admin/Сlientele/ClientNew/ClientNew.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _redux_clientele_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/clientele-reducer */ "./resources/js/redux/clientele-reducer.js");
/* harmony import */ var _redux_clientele_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../redux/clientele-selectors */ "./resources/js/redux/clientele-selectors.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var ClienteleContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(ClienteleContainer, _React$Component);

  var _super = _createSuper(ClienteleContainer);

  function ClienteleContainer(props) {
    var _this;

    _classCallCheck(this, ClienteleContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onAddSubmit", function (formData) {
      _this.props.addClient(formData);
    });

    _defineProperty(_assertThisInitialized(_this), "onEditSubmit", function (formData) {
      _this.props.editClient(formData);
    });

    return _this;
  }

  _createClass(ClienteleContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getClientele();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timerFetching);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var client = !this.props.match.params.slug ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Clientele__WEBPACK_IMPORTED_MODULE_1__["default"], {
        page: this.props.match.params.page,
        url: this.props.match.url,
        clientele: this.props.clientele
      }) : this.props.match.params.slug === 'edit' && this.props.match.params.id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ClientEdit_ClientEdit__WEBPACK_IMPORTED_MODULE_2__["default"], {
        error: this.props.error,
        editClient: this.onEditSubmit,
        client: this.props.clientele ? this.props.clientele.filter(function (item) {
          return item.id == _this2.props.match.params.id;
        }) : null
      }) : this.props.match.params.slug === 'add' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ClientNew_ClientNew__WEBPACK_IMPORTED_MODULE_3__["default"], {
        error: this.props.error,
        addClient: this.onAddSubmit
      }) : null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, client);
    }
  }]);

  return ClienteleContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    clientele: Object(_redux_clientele_selectors__WEBPACK_IMPORTED_MODULE_8__["getClienteleSelectors"])(state),
    error: Object(_redux_clientele_selectors__WEBPACK_IMPORTED_MODULE_8__["getErrorSelector"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  getClientele: _redux_clientele_reducer__WEBPACK_IMPORTED_MODULE_7__["getClientele"],
  addClient: _redux_clientele_reducer__WEBPACK_IMPORTED_MODULE_7__["addClient"],
  editClient: _redux_clientele_reducer__WEBPACK_IMPORTED_MODULE_7__["editClient"]
}), react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(ClienteleContainer));

/***/ }),

/***/ "./resources/js/components/Admin/Сlientele/Validator/Validate":
/*!********************************************************************!*\
  !*** ./resources/js/components/Admin/Сlientele/Validator/Validate ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Language */ "./resources/js/components/Admin/Language.js");


const validate = (values, allValues, props) => {

    const errors = {}

    if (!values.name) {
        errors.name = _Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.name;
    }
    if (!values.email) {
        errors.email = _Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.email;
    }
    if (!values.phone) {
        errors.phone = _Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.phone;
    }
    if (allValues.form == 'ClientNew') {
        if (!values.password) {
            errors.password = _Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.password;
        }
    }

    return errors;

}

/* harmony default export */ __webpack_exports__["default"] = (validate);


/***/ }),

/***/ "./resources/js/components/common/ButtonsPanel/Button.jsx":
/*!****************************************************************!*\
  !*** ./resources/js/components/common/ButtonsPanel/Button.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn ".concat(props.type)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa ".concat(props.icon),
    "aria-hidden": "true"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./resources/js/components/common/ButtonsPanel/ButtonPanel.jsx":
/*!*********************************************************************!*\
  !*** ./resources/js/components/common/ButtonsPanel/ButtonPanel.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./resources/js/components/common/ButtonsPanel/Button.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




var ButtonPanel = function ButtonPanel(props) {
  var buttons = props.buttons.map(function (b, index) {
    var link = b === "edit" ? props.url + "/" + b + "/" + props.elementId : b === 'add' ? props.url + "/" + b : null;
    return b === "edit" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      to: "".concat(link)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: 'btn-success',
      icon: 'fa-pencil-square-o'
    }))) : b === 'delete' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index,
      "data-page": props.page,
      "data-element": props.elementId,
      onClick: props["delete"]
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: 'btn-danger',
      icon: 'fa-times'
    })) : b === 'add' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      to: "".concat(link)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: 'btn-primary',
      icon: 'fa-plus'
    }))) : null;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "buttonPanel"
  }, buttons);
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonPanel);

/***/ }),

/***/ "./resources/js/components/common/ButtonsPanel/ButtonPanelContainer.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/common/ButtonsPanel/ButtonPanelContainer.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_products_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/products-reducer */ "./resources/js/redux/products-reducer.js");
/* harmony import */ var _redux_clientele_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/clientele-reducer */ "./resources/js/redux/clientele-reducer.js");
/* harmony import */ var _ButtonPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ButtonPanel */ "./resources/js/components/common/ButtonsPanel/ButtonPanel.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var ButtonPanelContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(ButtonPanelContainer, _React$Component);

  var _super = _createSuper(ButtonPanelContainer);

  function ButtonPanelContainer() {
    _classCallCheck(this, ButtonPanelContainer);

    return _super.apply(this, arguments);
  }

  _createClass(ButtonPanelContainer, [{
    key: "render",
    value: function render() {
      var _this = this;

      var onDelete = function onDelete(e) {
        var elementId = e.currentTarget.getAttribute('data-element');
        var elementPage = e.currentTarget.getAttribute('data-page');

        if (elementPage == "products") {
          _this.props.deleteProduct(elementId);
        } else if (elementPage == "clientele") {
          _this.props.deleteClient(elementId);
        }
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonPanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        buttons: this.props.buttons,
        elementId: this.props.elementId,
        url: this.props.url,
        "delete": onDelete,
        page: this.props.page
      });
    }
  }]);

  return ButtonPanelContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.productsAdmin,
    clientele: state.clienteleAdmin
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  deleteProduct: _redux_products_reducer__WEBPACK_IMPORTED_MODULE_3__["deleteProduct"],
  deleteClient: _redux_clientele_reducer__WEBPACK_IMPORTED_MODULE_4__["deleteClient"]
}))(ButtonPanelContainer));

/***/ }),

/***/ "./resources/js/components/common/FormsControls/FormControls.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/common/FormsControls/FormControls.js ***!
  \**********************************************************************/
/*! exports provided: Input, Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var FormControl = function FormControl(_ref) {
  var idName = _ref.idName,
      input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      errSer = _ref.errSer,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      props = _objectWithoutProperties(_ref, ["idName", "input", "label", "type", "errSer", "meta"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.children, touched && error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "error"
  }, error) || touched && errSer && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "error"
  }, errSer));
};

var Input = function Input(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormControl, props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    id: props.idName,
    className: "form-control"
  }, props.input, {
    type: props.type,
    placeholder: props.label
  })));
};
var Textarea = function Textarea(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormControl, props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", _extends({
    id: props.idName,
    className: "form-control"
  }, props.input, {
    type: props.type,
    placeholder: props.label
  })));
};

/***/ }),

/***/ "./resources/js/hoc/withAuthRedirect.js":
/*!**********************************************!*\
  !*** ./resources/js/hoc/withAuthRedirect.js ***!
  \**********************************************/
/*! exports provided: withAuthRedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthRedirect", function() { return withAuthRedirect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var mapStateToPropsForRedirect = function mapStateToPropsForRedirect(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    permission: state.auth.permission
  };
};

var withAuthRedirect = function withAuthRedirect(Component) {
  var RedirectComponent = /*#__PURE__*/function (_React$Component) {
    _inherits(RedirectComponent, _React$Component);

    var _super = _createSuper(RedirectComponent);

    function RedirectComponent() {
      _classCallCheck(this, RedirectComponent);

      return _super.apply(this, arguments);
    }

    _createClass(RedirectComponent, [{
      key: "render",
      value: function render() {
        if (!this.props.isLoggedIn && this.props.permission !== "Admin") return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          to: "/login"
        });
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, this.props);
      }
    }]);

    return RedirectComponent;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

  var ConnectedAuthRedirectComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToPropsForRedirect)(RedirectComponent);
  return ConnectedAuthRedirectComponent;
};

/***/ }),

/***/ "./resources/js/redux/admin-selectors.js":
/*!***********************************************!*\
  !*** ./resources/js/redux/admin-selectors.js ***!
  \***********************************************/
/*! exports provided: getAdminPageSelector, getCurrentUserSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminPageSelector", function() { return getAdminPageSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUserSelector", function() { return getCurrentUserSelector; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getAdminPageSelector = function getAdminPageSelector(state) {
  return state.adminPage;
};
var getCurrentUserSelector = function getCurrentUserSelector(state) {
  return state.auth.name;
};

/***/ }),

/***/ "./resources/js/redux/clientele-selectors.js":
/*!***************************************************!*\
  !*** ./resources/js/redux/clientele-selectors.js ***!
  \***************************************************/
/*! exports provided: getClienteleSelectors, getErrorSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClienteleSelectors", function() { return getClienteleSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorSelector", function() { return getErrorSelector; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getClienteleSelectors = function getClienteleSelectors(state) {
  return state.clienteleAdmin.clientele;
};
var getErrorSelector = function getErrorSelector(state) {
  return state.clienteleAdmin.error;
};

/***/ }),

/***/ "./resources/js/redux/product-selectors.js":
/*!*************************************************!*\
  !*** ./resources/js/redux/product-selectors.js ***!
  \*************************************************/
/*! exports provided: getProductsSelectors, getErrorSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsSelectors", function() { return getProductsSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorSelector", function() { return getErrorSelector; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getProductsSelectors = function getProductsSelectors(state) {
  return state.productsAdmin.products;
};
var getErrorSelector = function getErrorSelector(state) {
  return state.productsAdmin.error;
};

/***/ })

}]);