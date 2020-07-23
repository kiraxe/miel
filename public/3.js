(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/components/Public/AccountPage/AccountContainer.js":
/*!************************************************************************!*\
  !*** ./resources/js/components/Public/AccountPage/AccountContainer.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _redux_Public_public_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/Public/public-selectors */ "./resources/js/redux/Public/public-selectors.js");
/* harmony import */ var _redux_auth_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/auth-selectors */ "./resources/js/redux/auth-selectors.js");
/* harmony import */ var _ManagerInfo_ManagerInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ManagerInfo/ManagerInfo */ "./resources/js/components/Public/AccountPage/ManagerInfo/ManagerInfo.jsx");
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Navigation/Navigation */ "./resources/js/components/Public/AccountPage/Navigation/Navigation.jsx");
/* harmony import */ var _redux_Public_account_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../redux/Public/account-selectors */ "./resources/js/redux/Public/account-selectors.js");
/* harmony import */ var _redux_Public_account_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../redux/Public/account-reducer */ "./resources/js/redux/Public/account-reducer.js");
/* harmony import */ var _AccountForm_AccountForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AccountForm/AccountForm */ "./resources/js/components/Public/AccountPage/AccountForm/AccountForm.js");
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













var AccountContainer = /*#__PURE__*/function (_Component) {
  _inherits(AccountContainer, _Component);

  var _super = _createSuper(AccountContainer);

  function AccountContainer(props) {
    var _this;

    _classCallCheck(this, AccountContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onEditSubmit", function (formData) {
      _this.props.editAccount(formData);
    });

    return _this;
  }

  _createClass(AccountContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getAccount(this.props.auth_client_id);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "main-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-my"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12 title-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u041B\u0438\u0447\u043D\u044B\u0439 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u043A\u0430\u0431\u0438\u043D\u0435\u0442")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-my"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4 col-lg-3 col-xl-3 left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-my"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ManagerInfo_ManagerInfo__WEBPACK_IMPORTED_MODULE_6__["default"], {
        settings: this.props.settings
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-8 col-lg-9 col-xl-9 center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-my"
      }, this.props.match.params.page === 'company_data' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u0414\u0430\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041E\u0441\u043D\u043E\u043D\u043E\u0439 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432 \u041E\u0441\u043D\u043E\u043D\u043E\u0439 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432 \u041E\u0441\u043D\u043E\u043D\u043E\u0439 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432 \u041E\u0441\u043D\u043E\u043D\u043E\u0439 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u041E\u0441\u043D\u043E\u043D\u043E\u0439 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432 \u041E\u0441\u043D\u043E\u043D\u043E\u0439 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432 \u041E\u0441\u043D\u043E\u043D\u043E\u0439 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432."))), this.props.match.params.page === 'company_data' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountForm_AccountForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        error: this.props.error,
        client: this.props.client,
        editAccount: this.onEditSubmit
      })) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435"))))));
    }
  }]);

  return AccountContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    settings: Object(_redux_Public_public_selectors__WEBPACK_IMPORTED_MODULE_4__["getSettingsSelectors"])(state),
    client: Object(_redux_Public_account_selectors__WEBPACK_IMPORTED_MODULE_8__["getClientSelectors"])(state),
    auth_client_id: Object(_redux_auth_selectors__WEBPACK_IMPORTED_MODULE_5__["getIdSelector"])(state),
    error: Object(_redux_Public_account_selectors__WEBPACK_IMPORTED_MODULE_8__["getErrorSelector"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"], Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  getAccount: _redux_Public_account_reducer__WEBPACK_IMPORTED_MODULE_9__["getAccount"],
  editAccount: _redux_Public_account_reducer__WEBPACK_IMPORTED_MODULE_9__["editAccount"]
}))(AccountContainer));

/***/ }),

/***/ "./resources/js/components/Public/AccountPage/AccountForm/AccountForm.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Public/AccountPage/AccountForm/AccountForm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Admin_Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Admin/Language */ "./resources/js/components/Admin/Language.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/images/loading.svg */ "./resources/js/assets/images/loading.svg");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AccountForm_Validator_Validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AccountForm/Validator/Validate */ "./resources/js/components/Public/AccountPage/AccountForm/Validator/Validate.js");
/* harmony import */ var _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/FormsControls/FormControls */ "./resources/js/components/common/FormsControls/FormControls.js");
/* harmony import */ var _Errors_ErrorsAlert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Errors/ErrorsAlert */ "./resources/js/components/Errors/ErrorsAlert.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var AccountForm = function AccountForm(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountFormReduxForm, {
    errSer: props.error,
    client: props.client,
    onSubmit: props.editAccount
  });
};

var AccountFormEdit = function AccountFormEdit(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFetching = _useState2[0],
      setFetching = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      clientInfo = _useState4[0],
      setClientInfo = _useState4[1];

  var handleSubmit = props.handleSubmit,
      pristine = props.pristine,
      reset = props.reset,
      submitting = props.submitting,
      errSer = props.errSer,
      submitSucceeded = props.submitSucceeded,
      submitFailed = props.submitFailed,
      client = props.client,
      initialize = props.initialize;
  submitSucceeded || submitFailed || errSer ? setTimeout(function () {
    setFetching(false);
  }, 2000) : null;
  var userFeedback;

  if (errSer) {
    userFeedback = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Errors_ErrorsAlert__WEBPACK_IMPORTED_MODULE_6__["default"], {
      error: errSer
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    client ? setClientInfo(_objectSpread({}, client)) : null;
    errSer ? initialize(_objectSpread({}, clientInfo)) : initialize(_objectSpread({}, client));
  }, [client]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    name: "accountForm"
  }, errSer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "error"
  }, userFeedback), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAccountLogin",
    className: "form-control",
    name: "login",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: 'Логин'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    idName: "clientAccountPassword",
    className: "form-control",
    type: "password",
    name: "password",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: 'Пароль'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAccountName",
    className: "form-control",
    name: "name",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: 'Ф.И.О контактного лица'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAccountPhone",
    className: "form-control",
    name: "phone",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: 'Телефон контактного лица'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAccountEmail",
    className: "form-control",
    name: "email",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: 'E-mail контактного лица'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAccountAddressK",
    className: "form-control",
    name: "addressK",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: 'Адрес для курьерской доставки'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAccountAddressP",
    className: "form-control",
    name: "addressP",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: 'Почтовый адрес для документов'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAccountCompany",
    className: "form-control",
    name: "company",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: 'Название компании'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAccountInn",
    className: "form-control",
    name: "inn",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Admin_Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.inn
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAccountKpp",
    className: "form-control",
    name: "kpp",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Admin_Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.kpp
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAccountRs",
    className: "form-control",
    name: "rs",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Admin_Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.rs
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAccountBik",
    className: "form-control",
    name: "bik",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Admin_Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.bik
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAccountKs",
    className: "form-control",
    name: "ks",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Admin_Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.ks
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setFetching(true);
    },
    type: "submit"
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ", isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \xAB\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C\xBB, \u044F \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u043E\u0444\u0435\u0440\u0442\u043E\u0439"))));
};

var AccountFormReduxForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: "AccountForm",
  validate: _AccountForm_Validator_Validate__WEBPACK_IMPORTED_MODULE_4__["default"],
  asyncBlurFields: ['login', 'name', 'email', 'phone']
})(AccountFormEdit);
/* harmony default export */ __webpack_exports__["default"] = (AccountForm);

/***/ }),

/***/ "./resources/js/components/Public/AccountPage/AccountForm/Validator/Validate.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Public/AccountPage/AccountForm/Validator/Validate.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Admin_Language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Admin/Language */ "./resources/js/components/Admin/Language.js");


var validate = function validate(values, allValues, props) {
  var errors = {};

  if (!values.login) {
    errors.name = _Admin_Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.login;
  }

  if (!values.name) {
    errors.name = _Admin_Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.name;
  }

  if (!values.email) {
    errors.email = _Admin_Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.email;
  }

  if (!values.phone) {
    errors.phone = _Admin_Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.phone;
  }

  return errors;
};

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./resources/js/components/Public/AccountPage/ManagerInfo/Button.jsx":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Public/AccountPage/ManagerInfo/Button.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Button = function Button(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0443"));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./resources/js/components/Public/AccountPage/ManagerInfo/ManagerInfo.jsx":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Public/AccountPage/ManagerInfo/ManagerInfo.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./resources/js/components/Public/AccountPage/ManagerInfo/Button.jsx");



var ManagerInfo = function ManagerInfo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contact col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "phone",
    href: "tel:".concat(props.settings.phone_manager)
  }, props.settings.phone_manager)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "time"
  }, props.settings.worktime), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "manager"
  }, "\u0412\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440: ", props.settings.manager_name, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto: ".concat(props.settings.manager_email)
  }, props.settings.manager_email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (ManagerInfo);

/***/ }),

/***/ "./resources/js/components/Public/AccountPage/Navigation/Navigation.jsx":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Public/AccountPage/Navigation/Navigation.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var Navigation = function Navigation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "leftNavigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/account/company_data"
  }, "\u0414\u0430\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/account/orders"
  }, "\u0417\u0430\u043A\u0430\u0437\u044B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/account/archive"
  }, "\u0410\u0440\u0445\u0438\u0432")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/account/accounting"
  }, "\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u044F")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./resources/js/components/Public/CatalogPage/Catalog/Catalog.jsx":
/*!************************************************************************!*\
  !*** ./resources/js/components/Public/CatalogPage/Catalog/Catalog.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Item_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item/Item */ "./resources/js/components/Public/CatalogPage/Catalog/Item/Item.jsx");
/* harmony import */ var _assets_images_preloader_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/images/preloader.svg */ "./resources/js/assets/images/preloader.svg");
/* harmony import */ var _assets_images_preloader_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_preloader_svg__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Catalog = function Catalog(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      load = _useState2[0],
      setLoad = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    !props.initialize ? setLoad(true) : setLoad(false);
  });
  var active = load ? 'active' : "";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row catalog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preloader ".concat(active)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_preloader_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
    products: props.products
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Catalog);

/***/ }),

/***/ "./resources/js/components/Public/CatalogPage/Catalog/Item/Item.jsx":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Public/CatalogPage/Catalog/Item/Item.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var Item = function Item(props) {
  var element = function element(item, key) {
    var link = item.attributes.map(function (item) {
      return !item.attributes.parent_id ? item.attributes.link : "";
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: "productNavLink item col-sm-6 col-md-4",
      key: key,
      to: "/shop/".concat(link[0], "/").concat(item.product_id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "itemContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "images"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: item.image,
      alt: "prod",
      title: "pen"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, item.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "article"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0410\u0440\u0442. ", item.article)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item.detail))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "costPanel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cost"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item.price, " \u20BD / \u0448\u0442.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "count"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "remove"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/images/minus.png"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "number"
    }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/images/plus.png"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430"))));
  };

  var products = props.products ? props.products.map(function (item, key) {
    return element(item, key);
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, products);
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./resources/js/components/Public/CatalogPage/CatalogConatainer.js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Public/CatalogPage/CatalogConatainer.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _redux_Public_index_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/Public/index-selectors */ "./resources/js/redux/Public/index-selectors.js");
/* harmony import */ var _redux_Public_catalog_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/Public/catalog-selectors */ "./resources/js/redux/Public/catalog-selectors.js");
/* harmony import */ var _redux_Public_catalog_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/Public/catalog-reducer */ "./resources/js/redux/Public/catalog-reducer.js");
/* harmony import */ var _CatalogPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CatalogPage */ "./resources/js/components/Public/CatalogPage/CatalogPage.jsx");
/* harmony import */ var _Product_ProductContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Product/ProductContainer */ "./resources/js/components/Public/CatalogPage/Product/ProductContainer.js");
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











var AccountContainer = /*#__PURE__*/function (_Component) {
  _inherits(AccountContainer, _Component);

  var _super = _createSuper(AccountContainer);

  function AccountContainer(props) {
    var _this;

    _classCallCheck(this, AccountContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getPage", function () {
      var params = _this.props.match.params.page;
      var category = _this.props.categories ? _this.props.categories.filter(function (item, key) {
        var link = item.link.split('/');

        if (link[link.length - 1] === params) {
          return item;
        }
      }) : null;
      var page = category.length > 0 ? category[0].category_id : null;
      return page;
    });

    _defineProperty(_assertThisInitialized(_this), "leftDropMenuHandler", function (page) {
      if (_this.state.dropLeftNavigationRun) {
        _this.setState({
          dropLeftNavigationRun: false
        });
      } else {
        _this.setState({
          dropLeftNavigationRun: true
        });
      }

      _this.props.getCatalog(page, _this.state.offset, _this.state.limit);
    });

    _defineProperty(_assertThisInitialized(_this), "onLoadHandler", function () {
      var limit = _this.state.limit < _this.props.totalProduct ? _this.state.limit + 1 : _this.state.limit;

      var page = _this.getPage();

      _this.setState({
        limit: limit
      });

      _this.props.getCatalog(page, _this.state.offset, limit);
    });

    _this.state = {
      dropLeftNavigationRun: false,
      offset: 0,
      limit: 2
    };
    return _this;
  }

  _createClass(AccountContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.productPage) {
        var page = this.getPage();
        page ? this.props.getCatalog(page, this.state.offset, this.state.limit) : this.props.getCatalog(null, this.state.offset, this.state.limit);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var onPageHandler = function onPageHandler(page) {
        _this2.setState({
          initializeStop: false
        });

        _this2.props.getCatalog(page, _this2.state.offset, _this2.state.limit);
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, parseInt(this.props.match.params.id) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Product_ProductContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        productPage: this.props.match.params.id,
        onPageHandler: onPageHandler,
        dropLeftNavigationRun: this.state.dropLeftNavigationRun,
        leftDropMenuHandler: this.leftDropMenuHandler,
        categories: this.props.categories
      }) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CatalogPage__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onPageHandler: onPageHandler,
        dropLeftNavigationRun: this.state.dropLeftNavigationRun,
        leftDropMenuHandler: this.leftDropMenuHandler,
        categories: this.props.categories,
        novelty: this.props.novelty,
        initialize: this.props.initialize,
        products: this.props.products,
        onLoadHandler: this.onLoadHandler,
        totalProduct: this.props.totalProduct
      }));
    }
  }]);

  return AccountContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    novelty: Object(_redux_Public_index_selectors__WEBPACK_IMPORTED_MODULE_4__["getNoveltySelectors"])(state),
    categories: Object(_redux_Public_index_selectors__WEBPACK_IMPORTED_MODULE_4__["getCategoriesSelectors"])(state),
    products: Object(_redux_Public_catalog_selectors__WEBPACK_IMPORTED_MODULE_5__["getProductsSelectors"])(state),
    initialize: Object(_redux_Public_catalog_selectors__WEBPACK_IMPORTED_MODULE_5__["getInitializeSelectors"])(state),
    totalProduct: Object(_redux_Public_catalog_selectors__WEBPACK_IMPORTED_MODULE_5__["getTotalProductSelectors"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"], Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  getCatalog: _redux_Public_catalog_reducer__WEBPACK_IMPORTED_MODULE_6__["getCatalog"]
}))(AccountContainer));

/***/ }),

/***/ "./resources/js/components/Public/CatalogPage/CatalogPage.jsx":
/*!********************************************************************!*\
  !*** ./resources/js/components/Public/CatalogPage/CatalogPage.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Title_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Title/Title */ "./resources/js/components/Public/CatalogPage/Title/Title.jsx");
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation/Navigation */ "./resources/js/components/Public/CatalogPage/Navigation/Navigation.jsx");
/* harmony import */ var _CatalogTitle_CatalogTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CatalogTitle/CatalogTitle */ "./resources/js/components/Public/CatalogPage/CatalogTitle/CatalogTitle.jsx");
/* harmony import */ var _Catalog_Catalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Catalog/Catalog */ "./resources/js/components/Public/CatalogPage/Catalog/Catalog.jsx");
/* harmony import */ var _LoadMore_LoadMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoadMore/LoadMore */ "./resources/js/components/Public/CatalogPage/LoadMore/LoadMore.jsx");
/* harmony import */ var _Separator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Separator */ "./resources/js/components/Public/CatalogPage/Separator.jsx");
/* harmony import */ var _IndexPage_MainContent_SliderProducts_SliderProducts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../IndexPage/MainContent/SliderProducts/SliderProducts */ "./resources/js/components/Public/IndexPage/MainContent/SliderProducts/SliderProducts.jsx");









var CatalogPage = function CatalogPage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "main-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-my"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-my"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-3 left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-my"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onPageHandler: props.onPageHandler,
    dropLeftNavigationRun: props.dropLeftNavigationRun,
    leftDropMenuHandler: props.leftDropMenuHandler,
    categories: props.categories
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 col-xl-9 center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-my"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CatalogTitle_CatalogTitle__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Catalog_Catalog__WEBPACK_IMPORTED_MODULE_4__["default"], {
    initialize: props.initialize,
    products: props.products
  }), props.products.length !== props.totalProduct && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadMore_LoadMore__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onLoadHandler: props.onLoadHandler
  }) || null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Separator__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 novelty"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u041D\u043E\u0432\u0438\u043D\u043A\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041A\u0430\u043A\u043E\u0435-\u0442\u043E \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435, \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C \u043D\u0430 \u0434\u0432\u0435 \u0441\u0442\u0440\u043E\u043A\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IndexPage_MainContent_SliderProducts_SliderProducts__WEBPACK_IMPORTED_MODULE_7__["default"], {
    novelty: props.novelty,
    slidesToShow: 3
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CatalogPage);

/***/ }),

/***/ "./resources/js/components/Public/CatalogPage/CatalogTitle/CatalogTitle.jsx":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Public/CatalogPage/CatalogTitle/CatalogTitle.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var CatalogTitle = function CatalogTitle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row catalogTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u0412\u0435\u0441\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041A\u0430\u043A\u043E\u0435-\u0442\u043E \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435, \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C \u043D\u0430 \u0434\u0432\u0435 \u0441\u0442\u0440\u043E\u043A\u0438"))));
};

/* harmony default export */ __webpack_exports__["default"] = (CatalogTitle);

/***/ }),

/***/ "./resources/js/components/Public/CatalogPage/LoadMore/LoadMore.jsx":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Public/CatalogPage/LoadMore/LoadMore.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var LoadMore = function LoadMore(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row loadMore"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "buttonLoadMore"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: props.onLoadHandler
  }, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0435"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoadMore);

/***/ }),

/***/ "./resources/js/components/Public/CatalogPage/Navigation/Links.jsx":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Public/CatalogPage/Navigation/Links.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Links = function Links(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.dropLeftNavigationRun),
      _useState2 = _slicedToArray(_useState, 2),
      leftDropMenu = _useState2[0],
      setLeftDropMenu = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setLeftDropMenu(props.dropLeftNavigationRun);
  });
  var className = leftDropMenu ? "act" : "";
  var categories = props.categories ? props.categories.map(function (item, key) {
    return item.children.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      onClick: function onClick() {
        return props.leftDropMenuHandler(item.category_id);
      },
      className: "dropLeftNavigationRun ".concat(className),
      to: "/shop/".concat(item.link)
    }, item.attributes.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "dropLeftNavigation ".concat(className)
    }, props.categories.map(function (it, key) {
      return it.parent_id === item.category_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        onClick: function onClick() {
          return props.onPageHandler(it.category_id);
        },
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: it.link
      }, it.attributes.name)) : null;
    }))) : !item.parent_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      onClick: function onClick() {
        return props.onPageHandler(item.category_id);
      },
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      to: "/shop/".concat(item.link)
    }, item.attributes.name)) : null;
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, categories);
};

/* harmony default export */ __webpack_exports__["default"] = (Links);

/***/ }),

/***/ "./resources/js/components/Public/CatalogPage/Navigation/Navigation.jsx":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Public/CatalogPage/Navigation/Navigation.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Links */ "./resources/js/components/Public/CatalogPage/Navigation/Links.jsx");



var Navigation = function Navigation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "leftNavigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Links__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onPageHandler: props.onPageHandler,
    dropLeftNavigationRun: props.dropLeftNavigationRun,
    leftDropMenuHandler: props.leftDropMenuHandler,
    categories: props.categories
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./resources/js/components/Public/CatalogPage/Product/Product.jsx":
/*!************************************************************************!*\
  !*** ./resources/js/components/Public/CatalogPage/Product/Product.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navigation/Navigation */ "./resources/js/components/Public/CatalogPage/Navigation/Navigation.jsx");



var Product = function Product(props) {
  var title = props.product && props.product.length > 0 ? props.product[0].name.split(' ') : null;
  var titleSecond = title ? title.shift() : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "main-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-my hidden-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 title-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, titleSecond ? titleSecond : null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, title ? title.join(' ') : null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-my"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-3 col-xl-3 left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-my"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onPageHandler: props.onPageHandler,
    dropLeftNavigationRun: props.dropLeftNavigationRun,
    leftDropMenuHandler: props.leftDropMenuHandler,
    categories: props.categories
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-9 col-xl-9 center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-my"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row productCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 col-lg-5 productCardSliderContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "productCardImage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "productCardImageFrame",
    "attr-border": "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/flesh.png"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 col-lg-7 productCardContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, titleSecond ? titleSecond : null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, title ? title.join(' ') : null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "article"
  }, "\u0410\u0440\u0442. ", props.product[0].article), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.product[0].detail)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "property"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u0442\u043E\u0432\u0430\u0440\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.product[0].property)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0442\u043E\u0432\u0430\u0440"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    name: "formCart",
    action: "",
    methos: "post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "selectContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "select__input",
    type: "hidden",
    name: "size"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "select__head"
  }, "\u0420\u0430\u0437\u043C\u0435\u0440: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "select__list",
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "select__item"
  }, "M"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "select__item"
  }, "L"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "select__item"
  }, "X"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "select__input",
    type: "hidden",
    name: "color"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "select__head"
  }, "\u0426\u0432\u0435\u0442: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "select__list",
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "select__item"
  }, "\u041A\u0440\u0430\u0441\u043D\u044B\u0439"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "select__item"
  }, "\u0417\u0435\u043B\u0435\u043D\u044B\u0439"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "select__item"
  }, "\u0421\u0438\u043D\u0438\u0439")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "costPanel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cost"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "18 \u20BD / \u0448\u0442.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "count"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "costPanel__hidden",
    type: "hidden",
    name: "count"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "remove"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/minus.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "number"
  }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "add"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/plus.png"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "total"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "total__hedden",
    type: "hidden",
    name: "total"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0418\u0442\u043E\u0433\u043E: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "15 800"), " \u20BD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")))))))))))) || null);
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./resources/js/components/Public/CatalogPage/Product/ProductContainer.js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Public/CatalogPage/Product/ProductContainer.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _redux_Public_productPublic_reduser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../redux/Public/productPublic-reduser */ "./resources/js/redux/Public/productPublic-reduser.js");
/* harmony import */ var _redux_Public_productPublic_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../redux/Public/productPublic-selectors */ "./resources/js/redux/Public/productPublic-selectors.js");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Product */ "./resources/js/components/Public/CatalogPage/Product/Product.jsx");
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









var AccountContainer = /*#__PURE__*/function (_Component) {
  _inherits(AccountContainer, _Component);

  var _super = _createSuper(AccountContainer);

  function AccountContainer(props) {
    _classCallCheck(this, AccountContainer);

    return _super.call(this, props);
  }

  _createClass(AccountContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getProduct(Number(this.props.productPage));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Product__WEBPACK_IMPORTED_MODULE_6__["default"], {
        product: this.props.product
      });
    }
  }]);

  return AccountContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    product: Object(_redux_Public_productPublic_selectors__WEBPACK_IMPORTED_MODULE_5__["getProductSelectors"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"], Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  getProduct: _redux_Public_productPublic_reduser__WEBPACK_IMPORTED_MODULE_4__["getProduct"]
}))(AccountContainer));

/***/ }),

/***/ "./resources/js/components/Public/CatalogPage/Separator.jsx":
/*!******************************************************************!*\
  !*** ./resources/js/components/Public/CatalogPage/Separator.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Separator = function Separator(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row column-5 separator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Separator);

/***/ }),

/***/ "./resources/js/components/Public/CatalogPage/Title/Title.jsx":
/*!********************************************************************!*\
  !*** ./resources/js/components/Public/CatalogPage/Title/Title.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Title = function Title(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 title-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0441\u0443\u0432\u0435\u043D\u0438\u0440\u043D\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430, \u043A\u0430\u043A\u043E\u0435-\u0442\u043E \u0432\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435, \u043C\u043E\u0436\u043D\u043E \u0434\u043E \u0434\u0432\u0443\u0445 \u0441\u0442\u0440\u043E\u0447\u0435\u043A"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./resources/js/components/Public/Footer/Footer.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/components/Public/Footer/Footer.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Social_Social__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Social/Social */ "./resources/js/components/Public/Footer/Social/Social.jsx");



var Footer = function Footer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-my"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "copy"
  }, "\xA9 2020 \u041C\u0418\u042D\u041B\u042C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "agree"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "phone",
    href: "tel:".concat(props.phone)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.phone))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Social_Social__WEBPACK_IMPORTED_MODULE_1__["default"], {
    social: props.social
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./resources/js/components/Public/Footer/Social/Social.jsx":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Public/Footer/Social/Social.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Social = function Social(props) {
  var social = props.social ? Object.keys(props.social).map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: props.social[item]
    }));
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, social);
};

/* harmony default export */ __webpack_exports__["default"] = (Social);

/***/ }),

/***/ "./resources/js/components/Public/Header/Bars/Bars.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/components/Public/Header/Bars/Bars.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Bars = function Bars(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: props.dropMenuHandler,
    className: "col-xl-6 col-md-4 col-sm-4 col-2 bars"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "images/bars.svg"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Bars);

/***/ }),

/***/ "./resources/js/components/Public/Header/Header.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/components/Public/Header/Header.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Bars_Bars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bars/Bars */ "./resources/js/components/Public/Header/Bars/Bars.jsx");
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo/Logo */ "./resources/js/components/Public/Header/Logo/Logo.jsx");
/* harmony import */ var _RightPanel_RightPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RightPanel/RightPanel */ "./resources/js/components/Public/Header/RightPanel/RightPanel.jsx");





var Header = function Header(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-my"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row flex-nowrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Bars_Bars__WEBPACK_IMPORTED_MODULE_1__["default"], {
    dropMenuHandler: props.dropMenuHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RightPanel_RightPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onLogout: props.onLogout,
    popUpOpen: props.popUpOpen,
    isLoggedIn: props.isLoggedIn,
    permission: props.permission,
    phone: props.phone
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./resources/js/components/Public/Header/Logo/Logo.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/components/Public/Header/Logo/Logo.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var Logo = function Logo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-6 col-md-4 col-sm-4 col-5 logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "logo-disktop",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/logo.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "logo-mob",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/logo-mob.png"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./resources/js/components/Public/Header/RightPanel/RightPanel.jsx":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Public/Header/RightPanel/RightPanel.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var RightPanel = function RightPanel(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-6 col-md-4 col-sm-4 col-5 right-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "phone",
    href: "tel:".concat(props.phone)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.phone))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, props.isLoggedIn && props.permission === "Client" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: props.onLogout,
    className: "login",
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0412\u044B\u0445\u043E\u0434")) || props.isLoggedIn && props.permission === "Admin" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "login",
    to: '/admin'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0410\u0434\u043C\u0438\u043D-\u043F\u0430\u043D\u0435\u043B\u044C")) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: props.popUpOpen,
    className: "login",
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0412\u0445\u043E\u0434"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "cart",
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430")))));
};

/* harmony default export */ __webpack_exports__["default"] = (RightPanel);

/***/ }),

/***/ "./resources/js/components/Public/IndexPage/MainContainer.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Public/IndexPage/MainContainer.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _MainContent_MainContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainContent/MainContent */ "./resources/js/components/Public/IndexPage/MainContent/MainContent.jsx");
/* harmony import */ var _redux_Public_index_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/Public/index-selectors */ "./resources/js/redux/Public/index-selectors.js");
/* harmony import */ var _redux_Public_index_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/Public/index-reducer */ "./resources/js/redux/Public/index-reducer.js");
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








var MainContainer = /*#__PURE__*/function (_Component) {
  _inherits(MainContainer, _Component);

  var _super = _createSuper(MainContainer);

  function MainContainer(props) {
    _classCallCheck(this, MainContainer);

    return _super.call(this, props);
  }

  _createClass(MainContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {//this.props.getIndexPage();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainContent_MainContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        categories: this.props.categories,
        popular: this.props.popular,
        novelty: this.props.novelty
      });
    }
  }]);

  return MainContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    categories: Object(_redux_Public_index_selectors__WEBPACK_IMPORTED_MODULE_4__["getCategoriesSelectors"])(state),
    popular: Object(_redux_Public_index_selectors__WEBPACK_IMPORTED_MODULE_4__["getPopularSelectors"])(state),
    novelty: Object(_redux_Public_index_selectors__WEBPACK_IMPORTED_MODULE_4__["getNoveltySelectors"])(state),
    initialize: Object(_redux_Public_index_selectors__WEBPACK_IMPORTED_MODULE_4__["getInitializeSelectros"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  getIndexPage: _redux_Public_index_reducer__WEBPACK_IMPORTED_MODULE_5__["getIndexPage"]
}))(MainContainer));

/***/ }),

/***/ "./resources/js/components/Public/IndexPage/MainContent/MainContent.jsx":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Public/IndexPage/MainContent/MainContent.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Title_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Title/Title */ "./resources/js/components/Public/IndexPage/MainContent/Title/Title.jsx");
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation/Navigation */ "./resources/js/components/Public/IndexPage/MainContent/Navigation/Navigation.jsx");
/* harmony import */ var _Popular_Popular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Popular/Popular */ "./resources/js/components/Public/IndexPage/MainContent/Popular/Popular.jsx");
/* harmony import */ var _Novelty_Novelty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Novelty/Novelty */ "./resources/js/components/Public/IndexPage/MainContent/Novelty/Novelty.jsx");






var MainContent = function MainContent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "main-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-my"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    categories: props.categories
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Popular_Popular__WEBPACK_IMPORTED_MODULE_3__["default"], {
    popular: props.popular,
    categories: props.categories
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Novelty_Novelty__WEBPACK_IMPORTED_MODULE_4__["default"], {
    novelty: props.novelty,
    categories: props.categories
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MainContent);

/***/ }),

/***/ "./resources/js/components/Public/IndexPage/MainContent/Navigation/MenuItem/MenuItem.jsx":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Public/IndexPage/MainContent/Navigation/MenuItem/MenuItem.jsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var MenuItem = function MenuItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, props.categories ? props.categories.map(function (item, key) {
    return !item.parent_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: key,
      className: "menu-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        backgroundImage: "url(".concat(item.image, ")")
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      to: "shop/".concat(item.link)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "title"
    }, item.attributes.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text"
    }, item.attributes.description)))) : null;
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (MenuItem);

/***/ }),

/***/ "./resources/js/components/Public/IndexPage/MainContent/Navigation/Navigation.jsx":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Public/IndexPage/MainContent/Navigation/Navigation.jsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem/MenuItem */ "./resources/js/components/Public/IndexPage/MainContent/Navigation/MenuItem/MenuItem.jsx");



var Navigation = function Navigation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    categories: props.categories
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./resources/js/components/Public/IndexPage/MainContent/Novelty/Novelty.jsx":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Public/IndexPage/MainContent/Novelty/Novelty.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SliderProducts_SliderProducts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SliderProducts/SliderProducts */ "./resources/js/components/Public/IndexPage/MainContent/SliderProducts/SliderProducts.jsx");



var Novelty = function Novelty(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "noveltyBlock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-my"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 novelty"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u041D\u043E\u0432\u0438\u043D\u043A\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041A\u0430\u043A\u043E\u0435-\u0442\u043E \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435, \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C \u043D\u0430 \u0434\u0432\u0435 \u0441\u0442\u0440\u043E\u043A\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SliderProducts_SliderProducts__WEBPACK_IMPORTED_MODULE_1__["default"], {
    novelty: props.novelty
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Novelty);

/***/ }),

/***/ "./resources/js/components/Public/IndexPage/MainContent/Popular/Popular.jsx":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Public/IndexPage/MainContent/Popular/Popular.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SliderProducts_SliderProducts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SliderProducts/SliderProducts */ "./resources/js/components/Public/IndexPage/MainContent/SliderProducts/SliderProducts.jsx");



var Popular = function Popular(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 popular"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041A\u0430\u043A\u043E\u0435-\u0442\u043E \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435, \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C \u043D\u0430 \u0434\u0432\u0435 \u0441\u0442\u0440\u043E\u043A\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SliderProducts_SliderProducts__WEBPACK_IMPORTED_MODULE_1__["default"], {
    popular: props.popular
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Popular);

/***/ }),

/***/ "./resources/js/components/Public/IndexPage/MainContent/SliderProducts/Arrows/Arrows.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Public/IndexPage/MainContent/SliderProducts/Arrows/Arrows.js ***!
  \**********************************************************************************************/
/*! exports provided: SampleNextArrow, SamplePrevArrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleNextArrow", function() { return SampleNextArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePrevArrow", function() { return SamplePrevArrow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SampleNextArrow = function SampleNextArrow(props) {
  var className = props.className,
      style = props.style,
      onClick = props.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    "aria-label": "Next",
    type: "button",
    "aria-disabled": "false",
    onClick: onClick
  });
};
var SamplePrevArrow = function SamplePrevArrow(props) {
  var className = props.className,
      style = props.style,
      onClick = props.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    "aria-label": "Next",
    type: "button",
    "aria-disabled": "false",
    onClick: onClick
  });
};

/***/ }),

/***/ "./resources/js/components/Public/IndexPage/MainContent/SliderProducts/SliderProducts.jsx":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Public/IndexPage/MainContent/SliderProducts/SliderProducts.jsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Arrows_Arrows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Arrows/Arrows */ "./resources/js/components/Public/IndexPage/MainContent/SliderProducts/Arrows/Arrows.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





var SliderProducts = function SliderProducts(props) {
  var element = function element(item, key) {
    var link = item.attributes.map(function (item) {
      return !item.attributes.parent_id ? item.attributes.link : "";
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
      className: "productNavLink item",
      key: key,
      to: "/".concat(link, "/").concat(item.product_id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "itemContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "images"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: item.image,
      alt: "prod",
      title: "pen"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, item.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "article"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0410\u0440\u0442. ", item.article)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item.detail))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "costPanel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cost"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item.price, " \u20BD / \u0448\u0442.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "count"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "remove"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/images/minus.png"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "number"
    }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/images/plus.png"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430"))));
  };

  var elements = props.popular ? props.popular.map(function (item, key) {
    return element(item, key);
  }) : props.novelty ? props.novelty.map(function (item, key) {
    return element(item, key);
  }) : null;
  var slidesToShow = props.slidesToShow ? props.slidesToShow : null;
  var settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: slidesToShow ? slidesToShow : 4,
    slidesToScroll: 1,
    variableWidth: false,
    prevArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Arrows_Arrows__WEBPACK_IMPORTED_MODULE_2__["SampleNextArrow"], null),
    nextArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Arrows_Arrows__WEBPACK_IMPORTED_MODULE_2__["SamplePrevArrow"], null),
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sliderProducts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, elements));
};

/* harmony default export */ __webpack_exports__["default"] = (SliderProducts);

/***/ }),

/***/ "./resources/js/components/Public/IndexPage/MainContent/Title/Title.jsx":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Public/IndexPage/MainContent/Title/Title.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Title = function Title(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 title-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u0421\u0443\u0432\u0435\u043D\u0438\u0440\u043D\u0430\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u041C\u0418\u042D\u041B\u042C"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430, \u043A\u0430\u043A\u043E\u0435-\u0442\u043E \u0432\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435, \u043C\u043E\u0436\u043D\u043E \u0434\u043E \u0434\u0432\u0443\u0445 \u0441\u0442\u0440\u043E\u0447\u0435\u043A"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./resources/js/components/Public/Navbar/Footer/Footer.jsx":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Public/Navbar/Footer/Footer.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Footer = function Footer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\xA9 2020 \xAB\u041C\u0418\u042D\u041B\u042C\xBB"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./resources/js/components/Public/Navbar/Nav/Links.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/components/Public/Navbar/Nav/Links.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Links = function Links(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.leftDropMenu),
      _useState2 = _slicedToArray(_useState, 2),
      leftDropMenu = _useState2[0],
      setLeftDropMenu = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setLeftDropMenu(props.leftDropMenu);
  });
  var className = leftDropMenu ? "active" : "";
  var categories = props.categories ? props.categories.map(function (item, key) {
    return item.children.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      onClick: props.leftDropMenuHandler,
      activeClassName: "act",
      className: "leftDropMenuRun ".concat(className),
      to: "/shop/".concat(item.link)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0413\u041A \xAB\u041C\u0418\u042D\u041B\u042C\xBB"), " ", item.attributes.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "leftDropMenu ".concat(className)
    }, props.categories.map(function (it, key) {
      return it.parent_id === item.category_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: it.link
      }, it.attributes.name)) : null;
    }))) : !item.parent_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      to: "/shop/".concat(item.link)
    }, item.attributes.name)) : null;
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, categories);
};

/* harmony default export */ __webpack_exports__["default"] = (Links);

/***/ }),

/***/ "./resources/js/components/Public/Navbar/Nav/Nav.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/components/Public/Navbar/Nav/Nav.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Links */ "./resources/js/components/Public/Navbar/Nav/Links.jsx");



var Nav = function Nav(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Links__WEBPACK_IMPORTED_MODULE_1__["default"], {
    categories: props.categories,
    leftDropMenu: props.leftDropMenu,
    leftDropMenuHandler: props.leftDropMenuHandler
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./resources/js/components/Public/Navbar/Navbar.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/components/Public/Navbar/Navbar.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer/Footer */ "./resources/js/components/Public/Navbar/Footer/Footer.jsx");
/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav/Nav */ "./resources/js/components/Public/Navbar/Nav/Nav.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Navbar = function Navbar(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.dropMenu),
      _useState2 = _slicedToArray(_useState, 2),
      dropMenu = _useState2[0],
      setDropMenu = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.outerWidth),
      _useState4 = _slicedToArray(_useState3, 2),
      size = _useState4[0],
      setSize = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("resize", function () {
      return setSize(window.outerWidth);
    });
    setDropMenu(props.dropMenu);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: dropMenu && size <= 1024 ? "active" : "",
    id: "dropMenu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "leftMenu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    categories: props.categories,
    leftDropMenu: props.leftDropMenu,
    leftDropMenuHandler: props.leftDropMenuHandler
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}; //passes match, history, location to Component


/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Navbar));

/***/ }),

/***/ "./resources/js/components/Public/Popup/Popup.jsx":
/*!********************************************************!*\
  !*** ./resources/js/components/Public/Popup/Popup.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PopupForm_PopupForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopupForm/PopupForm */ "./resources/js/components/Public/Popup/PopupForm/PopupForm.js");
/* harmony import */ var _PopupFormLogin_PopupFormLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopupFormLogin/PopupFormLogin */ "./resources/js/components/Public/Popup/PopupFormLogin/PopupFormLogin.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Popup = function Popup(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('reg'),
      _useState2 = _slicedToArray(_useState, 2),
      formVariable = _useState2[0],
      setVariableForm = _useState2[1];

  var formVariableHandler = function formVariableHandler(e) {
    setVariableForm(e.target.getAttribute('data-type'));
  };

  var visibility = {
    display: "block"
  };
  var form = formVariable === "reg" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PopupForm_PopupForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    permission: props.permission,
    isLoggedIn: props.isLoggedIn,
    errorReg: props.errorReg,
    addClient: props.addClient
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PopupFormLogin_PopupFormLogin__WEBPACK_IMPORTED_MODULE_2__["default"], {
    permission: props.permission,
    isLoggedIn: props.isLoggedIn,
    error: props.error,
    onLogin: props.onLogin
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "popup",
    style: props.popUp && props.classNameElement !== 'account' ? visibility : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "popup-box auth"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: props.popUpClose,
    className: "popup-close"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "popup-form-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: formVariableHandler,
    className: formVariable === "login" ? "active" : ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    "data-type": "login",
    href: "#"
  }, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: formVariableHandler,
    className: formVariable === "reg" ? "active" : ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    "data-type": "reg",
    href: "#"
  }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, form)));
};

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./resources/js/components/Public/Popup/PopupForm/PopupForm.js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Public/Popup/PopupForm/PopupForm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/images/loading.svg */ "./resources/js/assets/images/loading.svg");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Validator_Validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Validator/Validate */ "./resources/js/components/Public/Popup/PopupForm/Validator/Validate.js");
/* harmony import */ var _Admin_Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Admin/Language */ "./resources/js/components/Admin/Language.js");
/* harmony import */ var _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/FormsControls/FormControls */ "./resources/js/components/common/FormsControls/FormControls.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Errors_ErrorsAlert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Errors/ErrorsAlert */ "./resources/js/components/Errors/ErrorsAlert.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var PopupForm = function PopupForm(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClientPopupReduxForm, {
    isLoggedIn: props.isLoggedIn,
    errSer: props.errorReg,
    isFetching: props.isFetching,
    onSubmit: props.addClient
  });
};

var ClientPopupForm = function ClientPopupForm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFetching = _useState2[0],
      setFetching = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('view'),
      _useState4 = _slicedToArray(_useState3, 2),
      passwordVisibility = _useState4[0],
      setPasswordVisibility = _useState4[1];

  var handleSubmit = props.handleSubmit,
      pristine = props.pristine,
      reset = props.reset,
      submitting = props.submitting,
      errSer = props.errSer,
      submitSucceeded = props.submitSucceeded,
      submitFailed = props.submitFailed,
      change = props.change,
      isLoggedIn = props.isLoggedIn;
  submitSucceeded || submitFailed || errSer ? setTimeout(function () {
    setFetching(false);
  }, 2000) : null;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    submitSucceeded && isLoggedIn ? setFetching(false) : null;
  });

  var passVisHandler = function passVisHandler(e) {
    if (e.target.previousSibling.getAttribute('type') === 'password') {
      e.target.classList.remove('view');
      setPasswordVisibility('');
      e.target.previousSibling.setAttribute('type', 'text');
    } else {
      setPasswordVisibility('view');
      e.target.previousSibling.setAttribute('type', 'password');
    }
  };

  var userFeedback;

  if (errSer) {
    userFeedback = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Errors_ErrorsAlert__WEBPACK_IMPORTED_MODULE_7__["default"], {
      error: errSer
    });
  }

  var redirect = submitSucceeded && isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Redirect"], {
    to: "/account/company_data"
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, redirect && redirect || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    name: "accountForm"
  }, errSer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "error"
  }, userFeedback), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "hidden",
    idName: "clientHidden",
    change: change,
    name: "type",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Hidden"],
    label: "",
    val: "client"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    idName: "clientLogin",
    name: "login",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: "Логин"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    idName: "clientPassword",
    type: "password",
    name: "password",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Admin_Language__WEBPACK_IMPORTED_MODULE_4__["rus"].page.clientele.table.password
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    onClick: passVisHandler,
    className: "passwordAction ".concat(passwordVisibility)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    idName: "clientName",
    name: "name",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: "Ф.И.О контактного лица"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    idName: "clientPhone",
    name: "phone",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: "Телефон контактного лица"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    idName: "clientEmail",
    name: "email",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: "E-mail контактного лица"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    idName: "clientAddressK",
    name: "addressK",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: "Адрес для курьерской доставки"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    idName: "clientAddressP",
    name: "addressP",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: "Почтовый адрес для документов"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    idName: "clientCompany",
    name: "company",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: "Название компании"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    idName: "clientInn",
    name: "inn",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Admin_Language__WEBPACK_IMPORTED_MODULE_4__["rus"].page.clientele.table.inn
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    idName: "clientKpp",
    name: "kpp",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Admin_Language__WEBPACK_IMPORTED_MODULE_4__["rus"].page.clientele.table.kpp
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    idName: "clientRs",
    name: "rs",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Admin_Language__WEBPACK_IMPORTED_MODULE_4__["rus"].page.clientele.table.rs
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    idName: "clientBik",
    name: "bik",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Admin_Language__WEBPACK_IMPORTED_MODULE_4__["rus"].page.clientele.table.bik
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    idName: "clientKs",
    name: "ks",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Admin_Language__WEBPACK_IMPORTED_MODULE_4__["rus"].page.clientele.table.ks
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setFetching(true);
    },
    type: "submit",
    disabled: submitting
  }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F ", isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \xAB\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C\xBB, \u044F \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u043E\u0444\u0435\u0440\u0442\u043E\u0439")))));
};

var ClientPopupReduxForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: "PopupForm",
  validate: _Validator_Validate__WEBPACK_IMPORTED_MODULE_3__["default"],
  asyncBlurFields: ['name', 'email', 'phone']
})(ClientPopupForm);
/* harmony default export */ __webpack_exports__["default"] = (PopupForm);

/***/ }),

/***/ "./resources/js/components/Public/Popup/PopupForm/Validator/Validate.js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Public/Popup/PopupForm/Validator/Validate.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Admin_Language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Admin/Language */ "./resources/js/components/Admin/Language.js");


var validate = function validate(values, allValues, props) {
  var errors = {};

  if (!values.login) {
    errors.login = _Admin_Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.login;
  }

  if (!values.name) {
    errors.name = _Admin_Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.name;
  }

  if (!values.email) {
    errors.email = _Admin_Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.email;
  }

  if (!values.phone) {
    errors.phone = _Admin_Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.phone;
  }

  if (!values.password) {
    errors.password = _Admin_Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.password;
  }

  return errors;
};

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./resources/js/components/Public/Popup/PopupFormLogin/PopupFormLogin.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Public/Popup/PopupFormLogin/PopupFormLogin.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/images/loading.svg */ "./resources/js/assets/images/loading.svg");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PopupFormLogin_Validator_Validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PopupFormLogin/Validator/Validate */ "./resources/js/components/Public/Popup/PopupFormLogin/Validator/Validate.js");
/* harmony import */ var _Admin_Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Admin/Language */ "./resources/js/components/Admin/Language.js");
/* harmony import */ var _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/FormsControls/FormControls */ "./resources/js/components/common/FormsControls/FormControls.js");
/* harmony import */ var _Errors_ErrorsAlert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Errors/ErrorsAlert */ "./resources/js/components/Errors/ErrorsAlert.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var PopupFormLogin = function PopupFormLogin(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClientPopupLoginReduxForm, {
    isLoggedIn: props.isLoggedIn,
    errSer: props.error,
    isFetching: props.isFetching,
    onSubmit: props.onLogin
  });
};

var ClientPopupFormLogin = function ClientPopupFormLogin(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFetching = _useState2[0],
      setFetching = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('view'),
      _useState4 = _slicedToArray(_useState3, 2),
      passwordVisibility = _useState4[0],
      setPasswordVisibility = _useState4[1];

  var handleSubmit = props.handleSubmit,
      pristine = props.pristine,
      reset = props.reset,
      submitting = props.submitting,
      errSer = props.errSer,
      submitSucceeded = props.submitSucceeded,
      submitFailed = props.submitFailed,
      err = props.err,
      change = props.change,
      isLoggedIn = props.isLoggedIn;
  var userFeedback;

  if (errSer) {
    userFeedback = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Errors_ErrorsAlert__WEBPACK_IMPORTED_MODULE_6__["default"], {
      error: errSer
    });
  }

  var redirect = submitSucceeded && isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Redirect"], {
    to: "/account/company_data"
  }) : null;
  submitSucceeded || submitFailed || errSer ? setTimeout(function () {
    setFetching(false);
  }, 2000) : null;

  var passVisHandler = function passVisHandler(e) {
    if (e.target.previousSibling.getAttribute('type') === 'password') {
      e.target.classList.remove('view');
      setPasswordVisibility('');
      e.target.previousSibling.setAttribute('type', 'text');
    } else {
      setPasswordVisibility('view');
      e.target.previousSibling.setAttribute('type', 'password');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, redirect && redirect || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    name: "accountForm"
  }, errSer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "error"
  }, userFeedback), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "hidden",
    idName: "clientHidden",
    change: change,
    name: "type",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Hidden"],
    label: "",
    val: "client"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    idName: "clientLogin",
    name: "login",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: "Логин"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    idName: "clientPassword",
    type: "password",
    name: "password",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Admin_Language__WEBPACK_IMPORTED_MODULE_4__["rus"].page.clientele.table.password
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    onClick: passVisHandler,
    className: "passwordAction ".concat(passwordVisibility)
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setFetching(true);
    },
    type: "submit",
    disabled: submitting
  }, "\u0412\u043E\u0439\u0442\u0438 ", isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  }) : null))));
};

var ClientPopupLoginReduxForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: "PopupForm",
  validate: _PopupFormLogin_Validator_Validate__WEBPACK_IMPORTED_MODULE_3__["default"],
  asyncBlurFields: ['name', 'login']
})(ClientPopupFormLogin);
/* harmony default export */ __webpack_exports__["default"] = (PopupFormLogin);

/***/ }),

/***/ "./resources/js/components/Public/Popup/PopupFormLogin/Validator/Validate.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Public/Popup/PopupFormLogin/Validator/Validate.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Admin_Language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Admin/Language */ "./resources/js/components/Admin/Language.js");


var validate = function validate(values, allValues, props) {
  var errors = {};

  if (!values.login) {
    errors.login = _Admin_Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.login;
  }

  if (!values.password) {
    errors.password = _Admin_Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.password;
  }

  return errors;
};

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./resources/js/components/Public/PublicContainer.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Public/PublicContainer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _redux_Public_public_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/Public/public-selectors */ "./resources/js/redux/Public/public-selectors.js");
/* harmony import */ var _redux_Public_index_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/Public/index-selectors */ "./resources/js/redux/Public/index-selectors.js");
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navbar/Navbar */ "./resources/js/components/Public/Navbar/Navbar.jsx");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header/Header */ "./resources/js/components/Public/Header/Header.jsx");
/* harmony import */ var _IndexPage_MainContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IndexPage/MainContainer */ "./resources/js/components/Public/IndexPage/MainContainer.js");
/* harmony import */ var _AccountPage_AccountContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AccountPage/AccountContainer */ "./resources/js/components/Public/AccountPage/AccountContainer.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Footer/Footer */ "./resources/js/components/Public/Footer/Footer.jsx");
/* harmony import */ var _redux_Public_public_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/Public/public-reducer */ "./resources/js/redux/Public/public-reducer.js");
/* harmony import */ var _redux_Public_registration_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/Public/registration-reducer */ "./resources/js/redux/Public/registration-reducer.js");
/* harmony import */ var _redux_Public_registration_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/Public/registration-selectors */ "./resources/js/redux/Public/registration-selectors.js");
/* harmony import */ var _common_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/Preloader/Preloader */ "./resources/js/components/common/Preloader/Preloader.js");
/* harmony import */ var _redux_Public_index_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../redux/Public/index-reducer */ "./resources/js/redux/Public/index-reducer.js");
/* harmony import */ var _redux_auth_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/auth-reducer */ "./resources/js/redux/auth-reducer.js");
/* harmony import */ var _Popup_Popup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Popup/Popup */ "./resources/js/components/Public/Popup/Popup.jsx");
/* harmony import */ var _redux_auth_selectors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../redux/auth-selectors */ "./resources/js/redux/auth-selectors.js");
/* harmony import */ var _CatalogPage_CatalogConatainer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./CatalogPage/CatalogConatainer */ "./resources/js/components/Public/CatalogPage/CatalogConatainer.js");
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






















var PublicContainer = /*#__PURE__*/function (_Component) {
  _inherits(PublicContainer, _Component);

  var _super = _createSuper(PublicContainer);

  function PublicContainer(props) {
    var _this;

    _classCallCheck(this, PublicContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "dropMenuHandler", function (e) {
      if (_this.state.dropMenu) {
        _this.setState({
          dropMenu: false
        });
      } else {
        _this.setState({
          dropMenu: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "popUpOpen", function () {
      _this.setState({
        popUp: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "popUpClose", function () {
      _this.setState({
        popUp: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onLogout", function () {
      var type = localStorage.getItem('type');

      _this.props.logout(type);

      _this.props.history.push('/');
    });

    _defineProperty(_assertThisInitialized(_this), "onAddSubmit", function (formData) {
      _this.props.addClient(formData);
    });

    _defineProperty(_assertThisInitialized(_this), "leftDropMenuHandler", function (e) {
      if (_this.state.leftDropMenu) {
        _this.setState({
          leftDropMenu: false
        });
      } else {
        _this.setState({
          leftDropMenu: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onLogin", function (formData) {
      _this.props.login(formData.login, formData.password, formData.type);
    });

    _this.state = {
      dropMenu: false,
      leftDropMenu: false,
      dropLeftNavigationRun: false,
      popUp: false
    };
    return _this;
  }

  _createClass(PublicContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getPublic();
      this.props.getIndexPage();
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.initialize) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_14__["default"], null);
      }

      var arr = this.props.match.url.split('/');
      var className = !parseInt(this.props.match.params.id) ? arr[1] : 'item';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        id: "public",
        className: className
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        categories: this.props.categories,
        leftDropMenuHandler: this.leftDropMenuHandler,
        leftDropMenu: this.state.leftDropMenu,
        dropMenu: this.state.dropMenu
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onLogout: this.onLogout,
        popUpOpen: this.popUpOpen,
        isLoggedIn: this.props.isLoggedIn,
        permission: this.props.permission,
        dropMenuHandler: this.dropMenuHandler,
        phone: this.props.settings.phone
      }), this.props.match.path === "/" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IndexPage_MainContainer__WEBPACK_IMPORTED_MODULE_8__["default"], null) : this.props.match.path === "/account/:page?/" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountPage_AccountContainer__WEBPACK_IMPORTED_MODULE_9__["default"], null) : this.props.match.path === "/shop/:page?/:id?" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CatalogPage_CatalogConatainer__WEBPACK_IMPORTED_MODULE_19__["default"], null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        phone: this.props.settings.phone,
        social: this.props.settings.social
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Popup_Popup__WEBPACK_IMPORTED_MODULE_17__["default"], {
        classNameElement: className,
        popUpClose: this.popUpClose,
        popUp: this.state.popUp,
        addClient: this.onAddSubmit,
        onLogin: this.onLogin,
        error: this.props.error,
        errorReg: this.props.errorReg,
        isLoggedIn: this.props.isLoggedIn
      }));
    }
  }]);

  return PublicContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    settings: Object(_redux_Public_public_selectors__WEBPACK_IMPORTED_MODULE_4__["getSettingsSelectors"])(state),
    categories: Object(_redux_Public_index_selectors__WEBPACK_IMPORTED_MODULE_5__["getCategoriesSelectors"])(state),
    initialize: Object(_redux_Public_public_selectors__WEBPACK_IMPORTED_MODULE_4__["getInitializeSelectors"])(state),
    error: Object(_redux_auth_selectors__WEBPACK_IMPORTED_MODULE_18__["getErrorSelector"])(state),
    errorReg: Object(_redux_Public_registration_selectors__WEBPACK_IMPORTED_MODULE_13__["getErrorRegSelectors"])(state),
    isLoggedIn: Object(_redux_auth_selectors__WEBPACK_IMPORTED_MODULE_18__["getIsLoggedInSelector"])(state),
    permission: Object(_redux_auth_selectors__WEBPACK_IMPORTED_MODULE_18__["getPermissionSelectors"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"], Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getPublic: _redux_Public_public_reducer__WEBPACK_IMPORTED_MODULE_11__["getPublic"],
  getIndexPage: _redux_Public_index_reducer__WEBPACK_IMPORTED_MODULE_15__["getIndexPage"],
  addClient: _redux_Public_registration_reducer__WEBPACK_IMPORTED_MODULE_12__["addClient"],
  login: _redux_auth_reducer__WEBPACK_IMPORTED_MODULE_16__["login"],
  logout: _redux_auth_reducer__WEBPACK_IMPORTED_MODULE_16__["logout"]
}))(PublicContainer));

/***/ }),

/***/ "./resources/js/redux/Public/account-selectors.js":
/*!********************************************************!*\
  !*** ./resources/js/redux/Public/account-selectors.js ***!
  \********************************************************/
/*! exports provided: getClientSelectors, getErrorSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientSelectors", function() { return getClientSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorSelector", function() { return getErrorSelector; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getClientSelectors = function getClientSelectors(state) {
  return state.accountPagePublic.client;
};
var getErrorSelector = function getErrorSelector(state) {
  return state.accountPagePublic.error;
};

/***/ }),

/***/ "./resources/js/redux/Public/catalog-selectors.js":
/*!********************************************************!*\
  !*** ./resources/js/redux/Public/catalog-selectors.js ***!
  \********************************************************/
/*! exports provided: getProductsSelectors, getInitializeSelectors, getTotalProductSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsSelectors", function() { return getProductsSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitializeSelectors", function() { return getInitializeSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalProductSelectors", function() { return getTotalProductSelectors; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getProductsSelectors = function getProductsSelectors(state) {
  return state.catalog.products;
};
var getInitializeSelectors = function getInitializeSelectors(state) {
  return state.catalog.initialize;
};
var getTotalProductSelectors = function getTotalProductSelectors(state) {
  return state.catalog.totalProduct;
};

/***/ }),

/***/ "./resources/js/redux/Public/index-selectors.js":
/*!******************************************************!*\
  !*** ./resources/js/redux/Public/index-selectors.js ***!
  \******************************************************/
/*! exports provided: getCategoriesSelectors, getPopularSelectors, getNoveltySelectors, getInitializeSelectros */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoriesSelectors", function() { return getCategoriesSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopularSelectors", function() { return getPopularSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNoveltySelectors", function() { return getNoveltySelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitializeSelectros", function() { return getInitializeSelectros; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getCategoriesSelectors = function getCategoriesSelectors(state) {
  return state.indexPagePublic.categories;
};
var getPopularSelectors = function getPopularSelectors(state) {
  return state.indexPagePublic.popular;
};
var getNoveltySelectors = function getNoveltySelectors(state) {
  return state.indexPagePublic.novelty;
};
var getInitializeSelectros = function getInitializeSelectros(state) {
  return state.indexPagePublic.initialize;
};

/***/ }),

/***/ "./resources/js/redux/Public/productPublic-selectors.js":
/*!**************************************************************!*\
  !*** ./resources/js/redux/Public/productPublic-selectors.js ***!
  \**************************************************************/
/*! exports provided: getProductSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductSelectors", function() { return getProductSelectors; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getProductSelectors = function getProductSelectors(state) {
  return state.productPublic.product;
};

/***/ }),

/***/ "./resources/js/redux/Public/public-selectors.js":
/*!*******************************************************!*\
  !*** ./resources/js/redux/Public/public-selectors.js ***!
  \*******************************************************/
/*! exports provided: getSettingsSelectors, getInitializeSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettingsSelectors", function() { return getSettingsSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitializeSelectors", function() { return getInitializeSelectors; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getSettingsSelectors = function getSettingsSelectors(state) {
  return state["public"].settings;
};
var getInitializeSelectors = function getInitializeSelectors(state) {
  return state.indexPagePublic.initialize;
};

/***/ }),

/***/ "./resources/js/redux/Public/registration-selectors.js":
/*!*************************************************************!*\
  !*** ./resources/js/redux/Public/registration-selectors.js ***!
  \*************************************************************/
/*! exports provided: getErrorRegSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorRegSelectors", function() { return getErrorRegSelectors; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getErrorRegSelectors = function getErrorRegSelectors(state) {
  return state.registration.error;
};

/***/ })

}]);