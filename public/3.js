(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/components/Public/AccountPage/AccountArchive/AccountArchive.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Public/AccountPage/AccountArchive/AccountArchive.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Order_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order/Order */ "./resources/js/components/Public/AccountPage/AccountArchive/Order/Order.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);




var AccountArchive = function AccountArchive(props) {
  var orders = props.orders ? props.orders.map(function (item, key) {
    return !item.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Order_Order__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: key,
      order: item
    }) : null;
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, orders);
};

/* harmony default export */ __webpack_exports__["default"] = (AccountArchive);

/***/ }),

/***/ "./resources/js/components/Public/AccountPage/AccountArchive/Item/Item.js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Public/AccountPage/AccountArchive/Item/Item.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Item = function Item(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__image col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.product.image
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__block col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__blockTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, props.product.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__blockArticle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0410\u0440\u0442. ", props.product.article))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__price col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0426\u0435\u043D\u0430 \u0437\u0430 \u0448\u0442\u0443\u043A\u0443: ", parseFloat(props.product.unit_price), " \u20BD / \u0448\u0442."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ", props.product.count)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__priceTotal col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0418\u0442\u043E\u0433\u043E: ", parseFloat(props.product.total_price), " \u20BD")));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./resources/js/components/Public/AccountPage/AccountArchive/Order/Order.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Public/AccountPage/AccountArchive/Order/Order.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Item_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Item/Item */ "./resources/js/components/Public/AccountPage/AccountArchive/Item/Item.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Order = function Order(props) {
  var products = props.order.cart.cart_to_product ? props.order.cart.cart_to_product.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: key,
      product: item.order_detail
    });
  }) : null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      load = _useState2[0],
      setLoad = _useState2[1];

  var loadHandler = function loadHandler() {
    if (load) {
      setLoad(false);
    } else {
      setLoad(true);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row accountOrders"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__title col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u0417\u0430\u043A\u0430\u0437 ", props.order.order_id, " \u043E\u0442 ", props.order.created_at)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__content col-md-12"
  }, load && products || products[0], products.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      color: '#F37021'
    },
    className: "loadOrderAccount",
    onClick: loadHandler,
    href: "#"
  }, !load && 'Показать еще' || 'Убрать')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__total col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " ", parseFloat(props.order.total), " \u20BD"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Order);

/***/ }),

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
/* harmony import */ var _AccountOrders_AccountOrders__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AccountOrders/AccountOrders */ "./resources/js/components/Public/AccountPage/AccountOrders/AccountOrders.js");
/* harmony import */ var _AccountArchive_AccountArchive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AccountArchive/AccountArchive */ "./resources/js/components/Public/AccountPage/AccountArchive/AccountArchive.js");
/* harmony import */ var _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../redux/Public/cart-reducer */ "./resources/js/redux/Public/cart-reducer.js");
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
      this.props.getOrders(this.props.auth_client_id);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      /*this.props.addCartClient({
          id: this.props.client.id,
          name: this.props.client.name,
          company: this.props.client.company,
          phone: this.props.client.phone,
          email: this.props.client.email,
          addressK: this.props.client.addressK
      })*/
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.isLoggedIn) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
          to: "/"
        });
      }

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
        popUpOpen: this.props.popUpOpen,
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
      })) || this.props.match.params.page === 'orders' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountOrders_AccountOrders__WEBPACK_IMPORTED_MODULE_11__["default"], {
        orders: this.props.orders
      }) || this.props.match.params.page === 'archive' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountArchive_AccountArchive__WEBPACK_IMPORTED_MODULE_12__["default"], {
        orders: this.props.orders
      }))))));
    }
  }]);

  return AccountContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    settings: Object(_redux_Public_public_selectors__WEBPACK_IMPORTED_MODULE_4__["getSettingsSelectors"])(state),
    client: Object(_redux_Public_account_selectors__WEBPACK_IMPORTED_MODULE_8__["getClientSelectors"])(state),
    auth_client_id: Object(_redux_auth_selectors__WEBPACK_IMPORTED_MODULE_5__["getIdSelector"])(state),
    orders: Object(_redux_Public_account_selectors__WEBPACK_IMPORTED_MODULE_8__["getOrdersSelector"])(state),
    error: Object(_redux_Public_account_selectors__WEBPACK_IMPORTED_MODULE_8__["getErrorSelector"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"], Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  getAccount: _redux_Public_account_reducer__WEBPACK_IMPORTED_MODULE_9__["getAccount"],
  editAccount: _redux_Public_account_reducer__WEBPACK_IMPORTED_MODULE_9__["editAccount"],
  addCartClient: _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_13__["addCartClient"],
  getOrders: _redux_Public_account_reducer__WEBPACK_IMPORTED_MODULE_9__["getOrders"]
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
    label: 'Название офиса / подразделение'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientNameLegalEntity",
    className: "form-control",
    name: "name_legal_entity",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Admin_Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.name_legal_entity
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientLegalEntity",
    className: "form-control",
    name: "legal_entity",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Admin_Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.legal_entity
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

/***/ "./resources/js/components/Public/AccountPage/AccountOrders/AccountOrders.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Public/AccountPage/AccountOrders/AccountOrders.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Order_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order/Order */ "./resources/js/components/Public/AccountPage/AccountOrders/Order/Order.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);




var AccountOrders = function AccountOrders(props) {
  var orders = props.orders ? props.orders.map(function (item, key) {
    return item.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Order_Order__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: key,
      order: item
    }) : null;
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, orders);
};

/* harmony default export */ __webpack_exports__["default"] = (AccountOrders);

/***/ }),

/***/ "./resources/js/components/Public/AccountPage/AccountOrders/Item/Item.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Public/AccountPage/AccountOrders/Item/Item.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Item = function Item(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__image col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.product.image
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__block col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__blockTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, props.product.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__blockArticle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0410\u0440\u0442. ", props.product.article))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__price col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0426\u0435\u043D\u0430 \u0437\u0430 \u0448\u0442\u0443\u043A\u0443: ", parseFloat(props.product.unit_price), " \u20BD / \u0448\u0442."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ", props.product.count)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__priceTotal col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0418\u0442\u043E\u0433\u043E: ", parseFloat(props.product.total_price), " \u20BD")));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./resources/js/components/Public/AccountPage/AccountOrders/Order/Order.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Public/AccountPage/AccountOrders/Order/Order.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Item_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Item/Item */ "./resources/js/components/Public/AccountPage/AccountOrders/Item/Item.js");



var Order = function Order(props) {
  var products = props.order.cart.cart_to_product ? props.order.cart.cart_to_product.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: key,
      product: item.order_detail
    });
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row accountOrders"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__title col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u0417\u0430\u043A\u0430\u0437 ", props.order.order_id, " \u043E\u0442 ", props.order.created_at)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__content col-md-12"
  }, products), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountOrders__total col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " ", parseFloat(props.order.total), " \u20BD"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Order);

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "data-title": "message",
    onClick: props.popUpOpen
  }, "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0443"));
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
  }, props.settings.manager_email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    popUpOpen: props.popUpOpen
  }));
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

/***/ "./resources/js/components/Public/CartPage/Cart/Cart.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/Public/CartPage/Cart/Cart.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Item_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item/Item */ "./resources/js/components/Public/CartPage/Cart/Item/Item.jsx");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/images/loading.svg */ "./resources/js/assets/images/loading.svg");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Cart = function Cart(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      dateFirst = _useState2[0],
      setDateFirst = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      dateSecond = _useState4[0],
      setDateSecond = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState6 = _slicedToArray(_useState5, 2),
      totalPrice = _useState6[0],
      setTotalPrice = _useState6[1];

  var products = props.cart ? props.cart.map(function (item, key) {
    return item ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: item.product_id,
      deleteCartHandler: props.deleteCartHandler,
      editCartHandler: props.editCartHandler,
      settings: props.settings,
      item: item
    }) : null;
  }) : null;
  var priceArr = props.cart ? props.cart.map(function (item, key) {
    return item ? item.total : null;
  }) : null;
  var price = 0;
  priceArr.forEach(function (item, i, arr) {
    price += item;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    props.delivery ? props.onDeliveryHandler(props.delivery) : props.onDeliveryHandler(1);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setTotalPrice(price);

    if (props.delivery === null) {
      setDateSecond(true);
      setDateFirst(false);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    props.onTotalHandler(price);
  }, [price]);

  var onCheckboxHandler = function onCheckboxHandler(e) {
    var delivery = 1;

    if (e.target.name === "dateFirst") {
      setDateFirst(true);
      setDateSecond(false);
    } else if (e.target.name === "dateSecond") {
      setDateSecond(true);
      setDateFirst(false);
      delivery = null;
    }

    props.onDeliveryHandler(delivery);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "main-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-my"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block_1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041E\u0441\u043D\u043E\u043D\u043E\u0439 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432 \u041E\u0441\u043D\u043E\u043D\u043E\u0439 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432 \u041E\u0441\u043D\u043E\u043D\u043E\u0439 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432 \u041E\u0441\u043D\u043E\u043D\u043E\u0439 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u041E\u0441\u043D\u043E\u043D\u043E\u0439 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432 \u041E\u0441\u043D\u043E\u043D\u043E\u0439 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432 \u041E\u0441\u043D\u043E\u043D\u043E\u0439 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block_2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "1. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0437\u0430\u043A\u0430\u0437 \u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cart"
  }, products)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block_3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "2. \u041D\u0443\u0436\u043D\u0430 \u043B\u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkInput"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkInputItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: onCheckboxHandler,
    id: "check1",
    type: "checkbox",
    checked: dateFirst,
    name: "dateFirst"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "check1"
  }, "\u042F \u0437\u0430\u0431\u0435\u0440\u0443 \u0437\u0430\u043A\u0430\u0437 \u0441\u0430\u043C \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 \u041A\u043E\u043B\u043E\u043C\u0435\u043D\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0435\u0437\u0434, \u0434. 14")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkInputItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: onCheckboxHandler,
    id: "check2",
    type: "checkbox",
    checked: dateSecond,
    name: "dateSecond"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "check2"
  }, "\u041C\u043D\u0435 \u043D\u0443\u0436\u043D\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430* \u043F\u043E \u043C\u043E\u0435\u043C\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 (\u043E\u0442 500 \u20BD)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "* \u0422\u043E\u0447\u043D\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0443\u0437\u043D\u0430\u0439\u0442\u0435 \u0443 \u0432\u0430\u0448\u0435\u0433\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel:".concat(props.settings.phone_manager)
  }, props.settings.phone_manager), " \u0438\u043B\u0438 \u043F\u043E e-mail: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:".concat(props.settings.manager_email)
  }, props.settings.manager_email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "textarea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043A\u0430\u0437\u0443"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    onChange: props.onCommentHandler,
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F",
    value: props.comment ? props.comment : ""
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block_4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "3. \u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0437\u0430\u043A\u0430\u0437")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430:  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " ", totalPrice, " \u20BD"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button"
  }, products.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: props.onSendOrderHandler
  }, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 ", props.isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: {
      width: '20px'
    },
    src: _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  }) : null) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    disabled: true
  }, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \xAB\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C\xBB, \u044F \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u043E\u0444\u0435\u0440\u0442\u043E\u0439"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./resources/js/components/Public/CartPage/Cart/Item/Item.jsx":
/*!********************************************************************!*\
  !*** ./resources/js/components/Public/CartPage/Cart/Item/Item.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/GetCurrentData */ "./resources/js/utils/GetCurrentData.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Item = function Item(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.price),
      _useState2 = _slicedToArray(_useState, 2),
      price = _useState2[0],
      setPrice = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.count),
      _useState4 = _slicedToArray(_useState3, 2),
      min = _useState4[0],
      setMin = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.min),
      _useState6 = _slicedToArray(_useState5, 2),
      statMin = _useState6[0],
      setStatMin = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.priceSecond),
      _useState8 = _slicedToArray(_useState7, 2),
      priceSecond = _useState8[0],
      setPriceSecond = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.minSecond),
      _useState10 = _slicedToArray(_useState9, 2),
      minSecond = _useState10[0],
      setMinSecond = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.priceThird),
      _useState12 = _slicedToArray(_useState11, 2),
      priceThird = _useState12[0],
      setPriceThird = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.minThird),
      _useState14 = _slicedToArray(_useState13, 2),
      minThird = _useState14[0],
      setMinThird = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.priceQuarterly),
      _useState16 = _slicedToArray(_useState15, 2),
      priceQuarterly = _useState16[0],
      setPriceQuarterly = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.minQuarterly),
      _useState18 = _slicedToArray(_useState17, 2),
      minQuarterly = _useState18[0],
      setMinQuarterly = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.minQuarterly),
      _useState20 = _slicedToArray(_useState19, 2),
      statMinQuarterly = _useState20[0],
      setStatMinQuarterly = _useState20[1];

  var from = Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_2__["replaceStr"])(props.settings.from, '-', '/');
  var to = Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_2__["replaceStr"])(props.settings.to, '-', '/');

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date(from)),
      _useState22 = _slicedToArray(_useState21, 2),
      fromDate = _useState22[0],
      setFromDate = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date(to)),
      _useState24 = _slicedToArray(_useState23, 2),
      toDate = _useState24[0],
      setToDate = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.price),
      _useState26 = _slicedToArray(_useState25, 2),
      priceVariable = _useState26[0],
      setPriceVariable = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date(Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_2__["getCurrentDate"])())),
      _useState28 = _slicedToArray(_useState27, 2),
      currentDate = _useState28[0],
      setCurrentDate = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.total),
      _useState30 = _slicedToArray(_useState29, 2),
      total = _useState30[0],
      setTotal = _useState30[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setPrice(props.item.price);
    setMin(props.item.count);
    setStatMin(props.item.min);
    setPriceSecond(props.item.priceSecond);
    setMinSecond(props.item.minSecond);
    setPriceThird(props.item.priceThird);
    setMinThird(props.item.minThird);
    setPriceQuarterly(props.item.priceQuarterly);
    setMinQuarterly(props.item.minQuarterly);
    setStatMinQuarterly(props.item.minQuarterly);
    var from = Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_2__["replaceStr"])(props.settings.from, '-', '/');
    var to = Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_2__["replaceStr"])(props.settings.to, '-', '/');
    setFromDate(new Date(from));
    setToDate(new Date(to));
    setPriceVariable(props.item.price);
    setCurrentDate(new Date(Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_2__["getCurrentDate"])()));
    setTotal(props.item.total);
  }, [props.item.price]);

  var addCountHandler = function addCountHandler() {
    if (currentDate < fromDate || currentDate > toDate) {
      setMin(min + 1);
    } else {
      setMinQuarterly(minQuarterly + 1);
    }
  };

  var removeCountHandler = function removeCountHandler() {
    if (currentDate < fromDate || currentDate > toDate) {
      if (min <= statMin) {
        setMin(statMin);
      } else {
        setMin(min - 1);
      }
    } else {
      if (minQuarterly <= statMinQuarterly) {
        setMinQuarterly(statMinQuarterly);
      } else {
        setMinQuarterly(minQuarterly - 1);
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    props.editCartHandler({
      product_id: props.item.product_id,
      article: props.item.article,
      image: props.item.image,
      name: props.item.name,
      detail: props.item.detail,
      options: props.item.options,
      price: priceVariable,
      count: currentDate < fromDate || currentDate > toDate ? min : minQuarterly,
      priceSecond: props.item.priceSecond,
      priceThird: props.item.priceThird,
      priceQuarterly: props.item.priceQuarterly,
      min: props.item.min,
      minSecond: props.item.minSecond,
      minThird: props.item.minThird,
      minQuarterly: props.item.minQuarterly,
      total: total
    });
  }, [total]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (currentDate < fromDate || currentDate > toDate) {
      if (min >= minSecond && min < minThird) {
        setPriceVariable(priceSecond);
        setTotal(min * priceSecond);
      } else if (min >= minThird) {
        setPriceVariable(priceThird);
        setTotal(min * priceThird);
      } else {
        setPriceVariable(price);
        setTotal(min * price);
      }
    } else {
      setPriceVariable(priceQuarterly);
      setTotal(minQuarterly * priceQuarterly);
    }
  });

  var handleChange = function handleChange(e) {
    if (currentDate < fromDate || currentDate > toDate) {
      setMin(Number(e.target.value));
    } else {
      setMinQuarterly(Number(e.target.value));
    }
  };

  var handlerBlur = function handlerBlur(e) {
    if (currentDate < fromDate || currentDate > toDate) {
      if (e.target.value < statMin && min < statMin) {
        setMin(Number(statMin));
      }
    } else {
      if (minQuarterly < statMinQuarterly && e.target.value < statMinQuarterly) {
        setMinQuarterly(Number(statMinQuarterly));
      }
    }
  };

  var handlerKeyDown = function handlerKeyDown(e) {
    if (e.keyCode === 13) {
      e.target.blur();

      if (currentDate < fromDate || currentDate > toDate) {
        if (e.target.value < statMin && min < statMin) {
          setMin(Number(statMin));
        }
      } else {
        if (minQuarterly < statMinQuarterly && e.target.value < statMinQuarterly) {
          setMinQuarterly(Number(statMinQuarterly));
        }
      }
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "itemPartFirst"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "images"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: {
      width: '100px'
    },
    src: props.item.image
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "itemTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, props.item.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "article"
  }, "\u0410\u0440\u0442. ", props.item.article), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "itemText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      height: '52px',
      display: "inline-block",
      overflow: 'hidden'
    }
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_1___default()(props.item.detail))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "itemPartSecond"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "costPanelItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "costPanel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cost"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, priceVariable, " \u20BD / \u0448\u0442.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "count"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "remove"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onClick: removeCountHandler,
    src: "/images/minus.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "number"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onBlur: handlerBlur,
    onKeyDown: handlerKeyDown,
    onChange: handleChange,
    type: "text",
    maxLength: "5",
    value: currentDate < fromDate || currentDate > toDate ? min : minQuarterly
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "add"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onClick: addCountHandler,
    src: "/images/plus.png"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price"
  }, "\u0418\u0442\u043E\u0433\u043E: ", total.toFixed(2), " \u20BD"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cross"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onClick: function onClick() {
      return props.deleteCartHandler(props.item.product_id);
    },
    src: "/images/cross.svg"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./resources/js/components/Public/CartPage/CartController.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Public/CartPage/CartController.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/Public/cart-reducer */ "./resources/js/redux/Public/cart-reducer.js");
/* harmony import */ var _CartPage_Cart_Cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CartPage/Cart/Cart */ "./resources/js/components/Public/CartPage/Cart/Cart.jsx");
/* harmony import */ var _redux_Public_cart_selectros__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/Public/cart-selectros */ "./resources/js/redux/Public/cart-selectros.js");
/* harmony import */ var _redux_Public_public_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/Public/public-selectors */ "./resources/js/redux/Public/public-selectors.js");
/* harmony import */ var _utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/GetCurrentData */ "./resources/js/utils/GetCurrentData.js");
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

    _defineProperty(_assertThisInitialized(_this), "deleteCartHandler", function (arrId) {
      _this.props.deleteCart(arrId);
    });

    _defineProperty(_assertThisInitialized(_this), "editCartHandler", function (product) {
      _this.props.editCart(product);
    });

    _defineProperty(_assertThisInitialized(_this), "onCommentHandler", function (e) {
      _this.props.setComment(e.target.value);

      _this.setState({
        textarea: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDeliveryHandler", function (delivery) {
      _this.props.setDelivery(delivery);
    });

    _defineProperty(_assertThisInitialized(_this), "onTotalHandler", function (total) {
      _this.props.setTotal(total);
    });

    _defineProperty(_assertThisInitialized(_this), "onSendOrderHandler", function () {
      var forData = new FormData();
      var order = _this.props.order;

      for (var key in order) {
        if (key !== 'error') {
          if (key === 'client' || key === 'cart') {
            forData.append(key, JSON.stringify(order[key]));
          } else {
            forData.append(key, order[key]);
          }
        }
      }

      _this.setState({
        isFetching: true
      });

      _this.props.sendOrder(forData);

      setTimeout(function () {
        return _this.setState({
          isFetching: false
        });
      }, 1000);
    });

    _this.state = {
      isFetching: false,
      textarea: _this.props.comment
    };
    return _this;
  }

  _createClass(AccountContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var from = new Date(Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_8__["replaceStr"])(this.props.settings.from, '-', '/'));
      var to = new Date(Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_8__["replaceStr"])(this.props.settings.to, '-', '/'));
      var currentDate = new Date(Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_8__["getCurrentDate"])());
      var value = 2;

      if (currentDate < from || currentDate > to) {
        value = 2;
      } else {
        value = 1;
      }

      this.props.setQuarterly(value);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartPage_Cart_Cart__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onTotalHandler: this.onTotalHandler,
        isFetching: this.state.isFetching,
        onSendOrderHandler: this.onSendOrderHandler,
        total: this.props.total,
        delivery: this.props.delivery,
        comment: this.state.textarea,
        client: this.props.client,
        onDeliveryHandler: this.onDeliveryHandler,
        onCommentHandler: this.onCommentHandler,
        editCartHandler: this.editCartHandler,
        deleteCartHandler: this.deleteCartHandler,
        settings: this.props.settings,
        cart: this.props.cart
      });
    }
  }]);

  return AccountContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    order: state.cartPublic,
    cart: Object(_redux_Public_cart_selectros__WEBPACK_IMPORTED_MODULE_6__["getCartSelectors"])(state),
    settings: Object(_redux_Public_public_selectors__WEBPACK_IMPORTED_MODULE_7__["getSettingsSelectors"])(state),
    client: Object(_redux_Public_cart_selectros__WEBPACK_IMPORTED_MODULE_6__["getClientSelectors"])(state),
    comment: Object(_redux_Public_cart_selectros__WEBPACK_IMPORTED_MODULE_6__["getCommentSelectors"])(state),
    delivery: Object(_redux_Public_cart_selectros__WEBPACK_IMPORTED_MODULE_6__["getDeliverySelectors"])(state),
    total: Object(_redux_Public_cart_selectros__WEBPACK_IMPORTED_MODULE_6__["getTotalSelectors"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"], Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  deleteCart: _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_4__["deleteCart"],
  editCart: _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_4__["editCart"],
  setQuarterly: _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_4__["setQuarterly"],
  setComment: _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_4__["setComment"],
  setDelivery: _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_4__["setDelivery"],
  sendOrder: _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_4__["sendOrder"],
  setTotal: _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_4__["setTotal"]
}))(AccountContainer));

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
/* harmony import */ var _IndexPage_MainContent_SliderProducts_SliderProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../IndexPage/MainContent/SliderProducts/SliderProducts */ "./resources/js/components/Public/IndexPage/MainContent/SliderProducts/SliderProducts.jsx");
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
  var products = props.products ? props.products.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      cart: props.cart,
      popUpOpen: props.popUpOpen,
      key: key,
      isFetching: props.isFetching,
      settings: props.settings,
      addCartHandler: props.addCartHandler,
      isLoggedIn: props.isLoggedIn,
      item: item
    });
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row catalog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preloader ".concat(active)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_preloader_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  })), products);
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
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../assets/images/loading.svg */ "./resources/js/assets/images/loading.svg");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utils/GetCurrentData */ "./resources/js/utils/GetCurrentData.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Item = function Item(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.price),
      _useState2 = _slicedToArray(_useState, 2),
      price = _useState2[0],
      setPrice = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.min),
      _useState4 = _slicedToArray(_useState3, 2),
      min = _useState4[0],
      setMin = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.min),
      _useState6 = _slicedToArray(_useState5, 2),
      statMin = _useState6[0],
      setStatMin = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.price_second),
      _useState8 = _slicedToArray(_useState7, 2),
      priceSecond = _useState8[0],
      setPriceSecond = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.min_second),
      _useState10 = _slicedToArray(_useState9, 2),
      minSecond = _useState10[0],
      setMinSecond = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.price_third),
      _useState12 = _slicedToArray(_useState11, 2),
      priceThird = _useState12[0],
      setPriceThird = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.min_third),
      _useState14 = _slicedToArray(_useState13, 2),
      minThird = _useState14[0],
      setMinThird = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.price_quarterly),
      _useState16 = _slicedToArray(_useState15, 2),
      priceQuarterly = _useState16[0],
      setPriceQuarterly = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.min_quarterly),
      _useState18 = _slicedToArray(_useState17, 2),
      minQuarterly = _useState18[0],
      setMinQuarterly = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.min_quarterly),
      _useState20 = _slicedToArray(_useState19, 2),
      statMinQuarterly = _useState20[0],
      setStatMinQuarterly = _useState20[1];

  var from = Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_4__["replaceStr"])(props.settings.from, '-', '/');
  var to = Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_4__["replaceStr"])(props.settings.to, '-', '/');

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date(from)),
      _useState22 = _slicedToArray(_useState21, 2),
      fromDate = _useState22[0],
      setFromDate = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date(to)),
      _useState24 = _slicedToArray(_useState23, 2),
      toDate = _useState24[0],
      setToDate = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.price),
      _useState26 = _slicedToArray(_useState25, 2),
      priceVariable = _useState26[0],
      setPriceVariable = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date(Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_4__["getCurrentDate"])())),
      _useState28 = _slicedToArray(_useState27, 2),
      currentDate = _useState28[0],
      setCurrentDate = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.item.price * props.item.min),
      _useState30 = _slicedToArray(_useState29, 2),
      total = _useState30[0],
      setTotal = _useState30[1];

  var addCountHandler = function addCountHandler() {
    if (currentDate < fromDate || currentDate > toDate) {
      setMin(min + 1);
    } else {
      setMinQuarterly(minQuarterly + 1);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setPrice(props.item.price);
    setMin(props.item.min);
    setStatMin(props.item.min);
    setPriceSecond(props.item.price_second);
    setMinSecond(props.item.min_second);
    setPriceThird(props.item.price_third);
    setMinThird(props.item.min_third);
    setPriceQuarterly(props.item.price_quarterly);
    setMinQuarterly(props.item.min_quarterly);
    setStatMinQuarterly(props.item.min_quarterly);
    var from = Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_4__["replaceStr"])(props.settings.from, '-', '/');
    var to = Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_4__["replaceStr"])(props.settings.to, '-', '/');
    setFromDate(new Date(from));
    setToDate(new Date(to));
    setPriceVariable(props.item.price);
    setCurrentDate(new Date(Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_4__["getCurrentDate"])()));
    setTotal(props.item.price * props.item.min);
  }, [props.item.price]);

  var removeCountHandler = function removeCountHandler() {
    if (currentDate < fromDate || currentDate > toDate) {
      if (min <= statMin) {
        setMin(statMin);
      } else {
        setMin(min - 1);
      }
    } else {
      if (minQuarterly <= statMinQuarterly) {
        setMinQuarterly(statMinQuarterly);
      } else {
        setMinQuarterly(minQuarterly - 1);
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (currentDate < fromDate || currentDate > toDate) {
      if (min >= minSecond && min < minThird) {
        setPriceVariable(priceSecond);
        setTotal(min * priceSecond);
      } else if (min >= minThird) {
        setPriceVariable(priceThird);
        setTotal(min * priceThird);
      } else {
        setPriceVariable(price);
        setTotal(min * price);
      }
    } else {
      setPriceVariable(priceQuarterly);
      setTotal(minQuarterly * priceQuarterly);
    }
  });
  var link = props.item.attributes.map(function (item) {
    return !item.attributes.parent_id ? item.attributes.link : "";
  });
  var className = "";

  if (props.cart) {
    var _iterator = _createForOfIteratorHelper(props.cart),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var element = _step.value;

        if (element.product_id === props.item.product_id) {
          className = "active";
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  var handleChange = function handleChange(e) {
    if (currentDate < fromDate || currentDate > toDate) {
      setMin(Number(e.target.value));
    } else {
      setMinQuarterly(Number(e.target.value));
    }
  };

  var handlerBlur = function handlerBlur(e) {
    if (currentDate < fromDate || currentDate > toDate) {
      if (e.target.value < statMin && min < statMin) {
        setMin(Number(statMin));
      }
    } else {
      if (minQuarterly < statMinQuarterly && e.target.value < statMinQuarterly) {
        setMinQuarterly(Number(statMinQuarterly));
      }
    }
  };

  var handlerKeyDown = function handlerKeyDown(e) {
    if (e.keyCode === 13) {
      e.target.blur();

      if (currentDate < fromDate || currentDate > toDate) {
        if (e.target.value < statMin && min < statMin) {
          setMin(Number(statMin));
        }
      } else {
        if (minQuarterly < statMinQuarterly && e.target.value < statMinQuarterly) {
          setMinQuarterly(Number(statMinQuarterly));
        }
      }
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item col-sm-6 col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "itemContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "productNavLink",
    to: "/shop/".concat(link[0], "/").concat(props.item.product_id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "images"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.item.image,
    alt: "prod",
    title: "pen"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, props.item.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "article"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0410\u0440\u0442. ", props.item.article)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      height: '65px',
      display: "inline-block",
      overflow: 'hidden'
    }
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_2___default()(props.item.detail_min)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "costPanel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cost"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, parseFloat(priceVariable), " \u20BD / \u0448\u0442.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "count"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "remove"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onClick: removeCountHandler,
    src: "/images/minus.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "number"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onBlur: handlerBlur,
    onKeyDown: handlerKeyDown,
    onChange: handleChange,
    type: "text",
    maxLength: "5",
    value: currentDate < fromDate || currentDate > toDate ? min : minQuarterly
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "add"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onClick: addCountHandler,
    src: "/images/plus.png"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button"
  }, props.isLoggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: className,
    style: {
      display: 'flex'
    },
    onClick: function onClick() {
      return props.addCartHandler({
        product_id: props.item.product_id,
        article: props.item.article,
        image: props.item.image,
        name: props.item.name,
        options: null,
        price: priceVariable,
        count: currentDate < fromDate || currentDate > toDate ? min : minQuarterly,
        priceSecond: props.item.price_second,
        priceThird: props.item.price_third,
        priceQuarterly: props.item.price_quarterly,
        min: props.item.min,
        minSecond: props.item.min_second,
        minThird: props.item.min_third,
        minQuarterly: props.item.min_quarterly,
        total: total
      });
    }
  }, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 ", props.isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: {
      width: '20px'
    },
    src: _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }) : null) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: className,
    onClick: props.popUpOpen
  }, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430"))));
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
/* harmony import */ var _redux_Public_public_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../redux/Public/public-selectors */ "./resources/js/redux/Public/public-selectors.js");
/* harmony import */ var _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../redux/Public/cart-reducer */ "./resources/js/redux/Public/cart-reducer.js");
/* harmony import */ var _redux_Public_cart_selectros__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../redux/Public/cart-selectros */ "./resources/js/redux/Public/cart-selectros.js");
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

    _defineProperty(_assertThisInitialized(_this), "addCartHandler", function (product) {
      _this.setState({
        isFetching: true
      });

      _this.props.addCart(product);

      setTimeout(function () {
        return _this.setState({
          isFetching: false
        });
      }, 1000);
    });

    _defineProperty(_assertThisInitialized(_this), "getPage", function () {
      var params = _this.props.match.params.page;
      var id = _this.props.match.params.id;
      var category = _this.props.categories ? _this.props.categories.filter(function (item, key) {
        var link = item.link.split('/');

        if (!!id) {
          if (link[link.length - 1] === id) {
            return item;
          }
        } else if (link[link.length - 1] === params) {
          return item;
        }
      }) : null;
      var page = category.length > 0 ? category[0].category_id : null;
      return page;
    });

    _defineProperty(_assertThisInitialized(_this), "leftDropMenuHandler", function (page) {
      _this.props.getCatalog(page, _this.state.offset, _this.state.limit);
    });

    _defineProperty(_assertThisInitialized(_this), "onLoadHandler", function () {
      var limit = _this.state.limit < _this.props.totalProduct ? _this.state.limit + 6 : _this.state.limit;

      var page = _this.getPage();

      _this.setState({
        limit: limit
      });

      _this.props.getCatalog(page, _this.state.offset, limit);
    });

    _this.state = {
      offset: 0,
      limit: 6,
      isFetching: false
    };
    return _this;
  }

  _createClass(AccountContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.productPage) {
        var page = this.getPage();
        console.log(page);
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
        popUpOpen: this.props.popUpOpen,
        dropLeftNavigationRun: this.state.dropLeftNavigationRun,
        leftDropMenuHandler: this.leftDropMenuHandler,
        categories: this.props.categories,
        isLoggedIn: this.props.isLoggedIn
      }) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CatalogPage__WEBPACK_IMPORTED_MODULE_7__["default"], {
        cart: this.props.cart,
        isLoggedIn: this.props.isLoggedIn,
        onPageHandler: onPageHandler,
        dropLeftNavigationRun: this.state.dropLeftNavigationRun,
        leftDropMenuHandler: this.leftDropMenuHandler,
        categories: this.props.categories,
        novelty: this.props.novelty,
        initialize: this.props.initialize,
        products: this.props.products,
        onLoadHandler: this.onLoadHandler,
        totalProduct: this.props.totalProduct,
        settings: this.props.settings,
        addCartHandler: this.addCartHandler,
        isFetching: this.state.isFetching,
        popUpOpen: this.props.popUpOpen,
        page: this.props.match.params
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
    totalProduct: Object(_redux_Public_catalog_selectors__WEBPACK_IMPORTED_MODULE_5__["getTotalProductSelectors"])(state),
    settings: Object(_redux_Public_public_selectors__WEBPACK_IMPORTED_MODULE_9__["getSettingsSelectors"])(state),
    cart: Object(_redux_Public_cart_selectros__WEBPACK_IMPORTED_MODULE_11__["getCartSelectors"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"], Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  getCatalog: _redux_Public_catalog_reducer__WEBPACK_IMPORTED_MODULE_6__["getCatalog"],
  addCart: _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_10__["addCart"]
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
/* harmony import */ var _IndexPage_MainContent_SliderProducts_Item_Item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../IndexPage/MainContent/SliderProducts/Item/Item */ "./resources/js/components/Public/IndexPage/MainContent/SliderProducts/Item/Item.jsx");










var CatalogPage = function CatalogPage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "main-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-my"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    settings: props.settings
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CatalogTitle_CatalogTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    categories: props.categories,
    page: props.page
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Catalog_Catalog__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cart: props.cart,
    popUpOpen: props.popUpOpen,
    isFetching: props.isFetching,
    settings: props.settings,
    addCartHandler: props.addCartHandler,
    isLoggedIn: props.isLoggedIn,
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
    popUpOpen: props.popUpOpen,
    isFetching: props.isFetching,
    settings: props.settings,
    addCartHandler: props.addCartHandler,
    isLoggedIn: props.isLoggedIn,
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
  var page = !!props.page.id ? props.page.id : props.page.page;
  var cat = props.categories ? props.categories.filter(function (item) {
    var str = item.link.split('/');
    return str[str.length - 1] === page ? item : null;
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row catalogTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, cat[0] ? cat[0].attributes.name : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, cat[0] ? cat[0].text : null))));
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
  var menuParams = {};
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (props.categories) {
      props.categories.forEach(function (item, i) {
        menuParams[item.category_id] = false;
      });
    }
  }, []);
  var menu = JSON.parse(localStorage.getItem('menu'));

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(menu ? menu : menuParams),
      _useState2 = _slicedToArray(_useState, 2),
      leftDropMenu = _useState2[0],
      setLeftDropMenu = _useState2[1];

  var leftDropMenuHandler = function leftDropMenuHandler(e, page) {
    var clsName = e.target.getAttribute('class');
    var val = {};

    if (clsName !== 'menuArrow') {
      props.leftDropMenuHandler(page);
    } else {
      e.preventDefault();

      if (leftDropMenu[page]) {
        for (var _i2 = 0, _Object$entries = Object.entries(leftDropMenu); _i2 < _Object$entries.length; _i2++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          if (key == page) {
            val[key] = false;
          } else {
            val[key] = value;
          }
        }

        setLeftDropMenu(val);
      } else {
        for (var _i3 = 0, _Object$entries2 = Object.entries(leftDropMenu); _i3 < _Object$entries2.length; _i3++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
              _key = _Object$entries2$_i[0],
              _value = _Object$entries2$_i[1];

          if (_key == page) {
            val[_key] = true;
          } else {
            val[_key] = _value;
          }
        }

        setLeftDropMenu(val);
      }

      localStorage.removeItem('menu');
      localStorage.setItem('menu', JSON.stringify(val));
    }
  };

  var arrowStyle = {
    position: 'absolute',
    width: '15px',
    height: '15px',
    right: '15px',
    transform: 'translateY(-50%)',
    top: '50%',
    zIndex: '999'
  };
  var categories = props.categories ? props.categories.map(function (item, key) {
    return item.children.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: 'parent',
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      onClick: function onClick(e) {
        return leftDropMenuHandler(e, item.category_id);
      },
      className: "dropLeftNavigationRun ".concat(leftDropMenu[item.category_id] ? "act" : ''),
      to: "/shop/".concat(item.link)
    }, item.attributes.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: arrowStyle,
      className: "menuArrow"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "dropLeftNavigation ".concat(leftDropMenu[item.category_id] ? "act" : '')
    }, props.categories.map(function (it, key) {
      return it.parent_id === item.category_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        onClick: function onClick() {
          return props.onPageHandler(it.category_id);
        },
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: "/shop/".concat(it.link)
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

/***/ "./resources/js/components/Public/CatalogPage/Product/Image/Image.jsx":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Public/CatalogPage/Product/Image/Image.jsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Image = function Image(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 col-lg-5 productCardSliderContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "productCardImage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "productCardImageFrame",
    "attr-border": "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.image
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./resources/js/components/Public/CatalogPage/Product/Info/Info.jsx":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Public/CatalogPage/Product/Info/Info.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/GetCurrentData */ "./resources/js/utils/GetCurrentData.js");
/* harmony import */ var _Select_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Select/Select */ "./resources/js/components/Public/CatalogPage/Product/Select/Select.jsx");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../assets/images/loading.svg */ "./resources/js/assets/images/loading.svg");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_4__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Info = function Info(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.price),
      _useState2 = _slicedToArray(_useState, 2),
      price = _useState2[0],
      setPrice = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.min),
      _useState4 = _slicedToArray(_useState3, 2),
      min = _useState4[0],
      setMin = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.min),
      _useState6 = _slicedToArray(_useState5, 2),
      statMin = _useState6[0],
      setStatMin = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.priceSecond),
      _useState8 = _slicedToArray(_useState7, 2),
      priceSecond = _useState8[0],
      setPriceSecond = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.minSecond),
      _useState10 = _slicedToArray(_useState9, 2),
      minSecond = _useState10[0],
      setMinSecond = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.priceThird),
      _useState12 = _slicedToArray(_useState11, 2),
      priceThird = _useState12[0],
      setPriceThird = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.minThird),
      _useState14 = _slicedToArray(_useState13, 2),
      minThird = _useState14[0],
      setMinThird = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.priceQuarterly),
      _useState16 = _slicedToArray(_useState15, 2),
      priceQuarterly = _useState16[0],
      setPriceQuarterly = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.minQuarterly),
      _useState18 = _slicedToArray(_useState17, 2),
      minQuarterly = _useState18[0],
      setMinQuarterly = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.minQuarterly),
      _useState20 = _slicedToArray(_useState19, 2),
      statMinQuarterly = _useState20[0],
      setStatMinQuarterly = _useState20[1];

  var from = Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_2__["replaceStr"])(props.fromQuarterlyDate, '-', '/');
  var to = Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_2__["replaceStr"])(props.toQuarterlyDate, '-', '/');

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date(from)),
      _useState22 = _slicedToArray(_useState21, 2),
      fromDate = _useState22[0],
      setFromDate = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date(to)),
      _useState24 = _slicedToArray(_useState23, 2),
      toDate = _useState24[0],
      setToDate = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.price),
      _useState26 = _slicedToArray(_useState25, 2),
      priceVariable = _useState26[0],
      setPriceVariable = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date(Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_2__["getCurrentDate"])())),
      _useState28 = _slicedToArray(_useState27, 2),
      currentDate = _useState28[0],
      setCurrentDate = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.price * props.min),
      _useState30 = _slicedToArray(_useState29, 2),
      total = _useState30[0],
      setTotal = _useState30[1];

  var tl = props.title ? props.title.join(' ') : null;

  var _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.options ? props.options.map(function (item) {
    return {
      id: item.option_id,
      name: item.name,
      value: ""
    };
  }) : null),
      _useState32 = _slicedToArray(_useState31, 2),
      options = _useState32[0],
      setOptions = _useState32[1];

  var addCountHandler = function addCountHandler() {
    if (currentDate < fromDate || currentDate > toDate) {
      setMin(min + 1);
    } else {
      setMinQuarterly(minQuarterly + 1);
    }
  };

  var onOptionHandler = function onOptionHandler(option) {
    var newArr = options ? options.map(function (item) {
      return item && item.id !== option.id ? item : null;
    }) : null;
    var arr = [].concat(_toConsumableArray(newArr), [option]);
    var result = arr.filter(function (item) {
      return item !== undefined && item !== null;
    });
    setOptions(result);
  };

  var removeCountHandler = function removeCountHandler() {
    if (currentDate < fromDate || currentDate > toDate) {
      if (min <= statMin) {
        setMin(statMin);
      } else {
        setMin(min - 1);
      }
    } else {
      if (minQuarterly <= statMinQuarterly) {
        setMinQuarterly(statMinQuarterly);
      } else {
        setMinQuarterly(minQuarterly - 1);
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setPrice(props.price);
    setMin(props.min);
    setStatMin(props.min);
    setPriceSecond(props.priceSecond);
    setMinSecond(props.minSecond);
    setPriceThird(props.priceThird);
    setMinThird(props.minThird);
    setPriceQuarterly(props.priceQuarterly);
    setMinQuarterly(props.minQuarterly);
    setStatMinQuarterly(props.minQuarterly);
    var from = Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_2__["replaceStr"])(props.fromQuarterlyDate, '-', '/');
    var to = Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_2__["replaceStr"])(props.toQuarterlyDate, '-', '/');
    setFromDate(new Date(from));
    setToDate(new Date(to));
    setPriceVariable(props.price);
    setCurrentDate(new Date(Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_2__["getCurrentDate"])()));
    setTotal(props.price * props.min);
  }, [props.price]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (currentDate < fromDate || currentDate > toDate) {
      if (min >= minSecond && min < minThird) {
        setPriceVariable(priceSecond);
        setTotal(min * priceSecond);
      } else if (min >= minThird) {
        setPriceVariable(priceThird);
        setTotal(min * priceThird);
      } else {
        setPriceVariable(price);
        setTotal(min * price);
      }
    } else {
      setPriceVariable(priceQuarterly);
      setTotal(minQuarterly * priceQuarterly);
    }
  });
  var titleToCart = props.titleSecond ? props.titleSecond : "";
  titleToCart += " " + tl;

  var handleChange = function handleChange(e) {
    if (currentDate < fromDate || currentDate > toDate) {
      setMin(Number(e.target.value));
    } else {
      setMinQuarterly(Number(e.target.value));
    }
  };

  var handlerBlur = function handlerBlur(e) {
    if (currentDate < fromDate || currentDate > toDate) {
      if (e.target.value < statMin && min < statMin) {
        setMin(Number(statMin));
      }
    } else {
      if (minQuarterly < statMinQuarterly && e.target.value < statMinQuarterly) {
        setMinQuarterly(Number(statMinQuarterly));
      }
    }
  };

  var handlerKeyDown = function handlerKeyDown(e) {
    if (e.keyCode === 13) {
      e.target.blur();

      if (currentDate < fromDate || currentDate > toDate) {
        if (e.target.value < statMin && min < statMin) {
          setMin(Number(statMin));
        }
      } else {
        if (minQuarterly < statMinQuarterly && e.target.value < statMinQuarterly) {
          setMinQuarterly(Number(statMinQuarterly));
        }
      }
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, props.titleSecond ? props.titleSecond : null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, tl))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "article"
  }, "\u0410\u0440\u0442. ", props.article), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react_html_parser__WEBPACK_IMPORTED_MODULE_1___default()(props.detail))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "property"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u0442\u043E\u0432\u0430\u0440\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react_html_parser__WEBPACK_IMPORTED_MODULE_1___default()(props.property))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0442\u043E\u0432\u0430\u0440"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "formCart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "selectContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Select_Select__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onOptionHandler: onOptionHandler,
    options: props.options
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "costPanel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cost"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      fontSize: '20px',
      color: '#2C373E'
    }
  }, parseFloat(priceVariable)), " \u20BD / \u0448\u0442.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "count"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "costPanel__hidden",
    type: "hidden",
    name: "count"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "remove"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onClick: removeCountHandler,
    src: "/images/minus.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "number"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onBlur: handlerBlur,
    onKeyDown: handlerKeyDown,
    onChange: handleChange,
    type: "text",
    maxLength: "5",
    value: currentDate < fromDate || currentDate > toDate ? min : minQuarterly
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "add"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onClick: addCountHandler,
    src: "/images/plus.png"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "total"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "total__hedden",
    type: "hidden",
    name: "total"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0418\u0442\u043E\u0433\u043E: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, parseFloat(total.toFixed(2))), " \u20BD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button"
  }, props.isLoggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return props.addCartHandler({
        product_id: props.product_id,
        article: props.article,
        image: props.image,
        name: titleToCart,
        options: options,
        price: priceVariable,
        count: currentDate < fromDate || currentDate > toDate ? min : minQuarterly,
        priceSecond: props.priceSecond,
        priceThird: props.priceThird,
        priceQuarterly: props.priceQuarterly,
        min: props.min,
        minSecond: props.minSecond,
        minThird: props.minThird,
        minQuarterly: props.minQuarterly,
        total: total
      });
    }
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 ", props.isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }) : null) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: props.popUpOpen
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Info);

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
/* harmony import */ var _Title_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title/Title */ "./resources/js/components/Public/CatalogPage/Product/Title/Title.jsx");
/* harmony import */ var _Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Image/Image */ "./resources/js/components/Public/CatalogPage/Product/Image/Image.jsx");
/* harmony import */ var _Info_Info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Info/Info */ "./resources/js/components/Public/CatalogPage/Product/Info/Info.jsx");






var Product = function Product(props) {
  var title = props.product ? props.product.name.split(' ') : null;
  var titleSecond = title ? title.shift() : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "main-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-my hidden-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    titleSecond: titleSecond
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Image_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: props.product.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 col-lg-7 productCardContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Info_Info__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: props.product.product_id,
    title: title,
    titleSecond: titleSecond,
    product_id: props.product.product_id,
    image: props.product.image,
    article: props.product.article,
    detail: props.product.detail,
    property: props.product.property,
    options: props.product.options,
    price: props.product.price,
    priceSecond: props.product.price_second,
    priceThird: props.product.price_third,
    priceQuarterly: props.product.price_quarterly,
    min: props.product.min,
    minSecond: props.product.min_second,
    minThird: props.product.min_third,
    minQuarterly: props.product.min_quarterly,
    fromQuarterlyDate: props.fromQuarterlyDate,
    toQuarterlyDate: props.toQuarterlyDate,
    isLoggedIn: props.isLoggedIn,
    addCartHandler: props.addCartHandler,
    isFetching: props.isFetching,
    popUpOpen: props.popUpOpen
  })))))))) || null);
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
/* harmony import */ var _common_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/Preloader/Preloader */ "./resources/js/components/common/Preloader/Preloader.js");
/* harmony import */ var _redux_Public_public_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../redux/Public/public-selectors */ "./resources/js/redux/Public/public-selectors.js");
/* harmony import */ var _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../redux/Public/cart-reducer */ "./resources/js/redux/Public/cart-reducer.js");
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

    _defineProperty(_assertThisInitialized(_this), "addCartHandler", function (product) {
      _this.setState({
        isFetching: true
      });

      _this.props.addCart(product);

      setTimeout(function () {
        return _this.setState({
          isFetching: false
        });
      }, 2000);
    });

    _defineProperty(_assertThisInitialized(_this), "deleteCartHandler", function (product) {
      _this.props.deleteCart(product);
    });

    _this.state = {
      isFetching: false
    };
    return _this;
  }

  _createClass(AccountContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getProduct(Number(this.props.productPage));
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.initialize) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_7__["default"], null);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Product__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: this.props.product.product_id,
        isFetching: this.state.isFetching,
        product: this.props.product,
        productPage: this.props.match.params.id,
        onPageHandler: this.props.onPageHandler,
        dropLeftNavigationRun: this.props.dropLeftNavigationRun,
        leftDropMenuHandler: this.props.leftDropMenuHandler,
        categories: this.props.categories,
        fromQuarterlyDate: this.props.settings.from,
        toQuarterlyDate: this.props.settings.to,
        isLoggedIn: this.props.isLoggedIn,
        addCartHandler: this.addCartHandler,
        popUpOpen: this.props.popUpOpen
      });
    }
  }]);

  return AccountContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    product: Object(_redux_Public_productPublic_selectors__WEBPACK_IMPORTED_MODULE_5__["getProductSelectors"])(state),
    initialize: Object(_redux_Public_productPublic_selectors__WEBPACK_IMPORTED_MODULE_5__["getInitializeSelectors"])(state),
    settings: Object(_redux_Public_public_selectors__WEBPACK_IMPORTED_MODULE_8__["getSettingsSelectors"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"], Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  getProduct: _redux_Public_productPublic_reduser__WEBPACK_IMPORTED_MODULE_4__["getProduct"],
  addCart: _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_9__["addCart"],
  deleteCart: _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_9__["deleteCart"]
}))(AccountContainer));

/***/ }),

/***/ "./resources/js/components/Public/CatalogPage/Product/Select/Item.jsx":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Public/CatalogPage/Product/Select/Item.jsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Item = function Item(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      selectHead = _useState2[0],
      setSelectHead = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      selectText = _useState4[0],
      setSelectText = _useState4[1];

  var onSelectHandler = function onSelectHandler(e) {
    if (selectHead) {
      setSelectHead(false);
    } else {
      setSelectHead(true);
    }
  };

  var onselectItemHandler = function onselectItemHandler(e) {
    setSelectHead(false);
    props.onOptionHandler({
      id: props.option.option_id,
      name: props.option.name,
      value: e.target.innerText
    });
    setSelectText(e.target.innerText);
  };

  var stl = {
    display: 'none'
  };
  var open = selectHead ? "open" : "";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "select__input",
    type: "hidden",
    name: "color"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: onSelectHandler,
    className: "select__head ".concat(open)
  }, props.option.name, ": ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, selectText !== "" ? selectText : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "select__list",
    style: !selectHead ? stl : {
      display: 'block'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: onselectItemHandler,
    style: {
      height: '44px'
    },
    className: "select__item"
  }), props.option ? props.option.value.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      onClick: onselectItemHandler,
      key: key,
      className: "select__item"
    }, item.name);
  }) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./resources/js/components/Public/CatalogPage/Product/Select/Select.jsx":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Public/CatalogPage/Product/Select/Select.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ "./resources/js/components/Public/CatalogPage/Product/Select/Item.jsx");



var Select = function Select(props) {
  var options = props.options ? props.options.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onOptionHandler: props.onOptionHandler,
      key: key,
      option: item
    });
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, options);
};

/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./resources/js/components/Public/CatalogPage/Product/Title/Title.jsx":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Public/CatalogPage/Product/Title/Title.jsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Title = function Title(props) {
  var tl = props.title ? props.title.join(' ') : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 title-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, props.titleSecond ? props.titleSecond : null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, tl)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

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
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_1__);



var Title = function Title(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 title-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0441\u0443\u0432\u0435\u043D\u0438\u0440\u043D\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react_html_parser__WEBPACK_IMPORTED_MODULE_1___default()(props.settings.description_other_page)))));
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
      href: props.social[item],
      target: "_blank",
      rel: "nofollow noopener"
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
    src: "/images/bars.svg"
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
    menuAccount: props.menuAccount,
    cart: props.cart,
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

/***/ "./resources/js/components/Public/Header/RightPanel/Circle.jsx":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Public/Header/RightPanel/Circle.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Circle = function Circle(props) {
  var style = {
    display: 'flex'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: props.cart.length > 0 && style || {},
    className: "circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.cart.length));
};

/* harmony default export */ __webpack_exports__["default"] = (Circle);

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
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Circle */ "./resources/js/components/Public/Header/RightPanel/Circle.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var RightPanel = function RightPanel(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      accountMenu = _useState2[0],
      setAccountMenu = _useState2[1];

  var accountMenuHandler = function accountMenuHandler(e) {
    var name = e ? e.target.getAttribute('class') : null;

    if (name === 'login' || name === 'loginSpan') {
      setAccountMenu(true);
    } else {
      setAccountMenu(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!props.menuAccount) {
      setAccountMenu(false);
    }
  });
  var style = {
    display: 'block'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-6 col-md-4 col-sm-4 col-5 right-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "phone",
    href: "tel:".concat(props.phone)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.phone))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'relative'
    }
  }, props.isLoggedIn && props.permission === "Client" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: accountMenuHandler,
    className: "login",
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "loginSpan"
  }, "\u041A\u0430\u0431\u0438\u043D\u0435\u0442")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    style: accountMenu && style || {},
    className: "accountMenu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    onClick: accountMenuHandler,
    to: "/account/company_data"
  }, "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      props.onLogout();
      accountMenuHandler();
    },
    href: "#"
  }, "\u0412\u044B\u0445\u043E\u0434")))) || props.isLoggedIn && props.permission === "Admin" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "login",
    to: '/admin'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0410\u0434\u043C\u0438\u043D-\u043F\u0430\u043D\u0435\u043B\u044C")) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: props.popUpOpen,
    className: "login",
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0412\u0445\u043E\u0434"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "cart",
    to: "/basket"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cart: props.cart
  }))));
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
/* harmony import */ var _redux_Public_public_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/Public/public-selectors */ "./resources/js/redux/Public/public-selectors.js");
/* harmony import */ var _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/Public/cart-reducer */ "./resources/js/redux/Public/cart-reducer.js");
/* harmony import */ var _redux_Public_cart_selectros__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../redux/Public/cart-selectros */ "./resources/js/redux/Public/cart-selectros.js");
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











var MainContainer = /*#__PURE__*/function (_Component) {
  _inherits(MainContainer, _Component);

  var _super = _createSuper(MainContainer);

  function MainContainer(props) {
    var _this;

    _classCallCheck(this, MainContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "addCartHandler", function (product) {
      _this.setState({
        isFetching: true
      });

      _this.props.addCart(product);

      setTimeout(function () {
        return _this.setState({
          isFetching: false
        });
      }, 1000);
    });

    _this.state = {
      isFetching: false
    };
    return _this;
  }

  _createClass(MainContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {//this.props.getIndexPage();
      //this.props.getPublic();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainContent_MainContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        cart: this.props.cart,
        popUpOpen: this.props.popUpOpen,
        isFetching: this.state.isFetching,
        settings: this.props.settings,
        addCartHandler: this.addCartHandler,
        isLoggedIn: this.props.isLoggedIn,
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
    initialize: Object(_redux_Public_index_selectors__WEBPACK_IMPORTED_MODULE_4__["getInitializeSelectros"])(state),
    settings: Object(_redux_Public_public_selectors__WEBPACK_IMPORTED_MODULE_6__["getSettingsSelectors"])(state),
    cart: Object(_redux_Public_cart_selectros__WEBPACK_IMPORTED_MODULE_8__["getCartSelectors"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  getIndexPage: _redux_Public_index_reducer__WEBPACK_IMPORTED_MODULE_5__["getIndexPage"],
  addCart: _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_7__["addCart"]
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    settings: props.settings
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    categories: props.categories
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Popular_Popular__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cart: props.cart,
    popUpOpen: props.popUpOpen,
    isFetching: props.isFetching,
    settings: props.settings,
    addCartHandler: props.addCartHandler,
    isLoggedIn: props.isLoggedIn,
    popular: props.popular,
    categories: props.categories
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Novelty_Novelty__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cart: props.cart,
    popUpOpen: props.popUpOpen,
    isFetching: props.isFetching,
    settings: props.settings,
    addCartHandler: props.addCartHandler,
    isLoggedIn: props.isLoggedIn,
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
    return item.main_menu ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);




var Novelty = function Novelty(props) {
  var category = props.categories ? props.categories.filter(function (item) {
    if (item.link === "new") return item;
  }) : null;
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, category.length > 0 ? react_html_parser__WEBPACK_IMPORTED_MODULE_2___default()(category[0].text) : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SliderProducts_SliderProducts__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cart: props.cart,
    popUpOpen: props.popUpOpen,
    isFetching: props.isFetching,
    settings: props.settings,
    addCartHandler: props.addCartHandler,
    isLoggedIn: props.isLoggedIn,
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
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);




var Popular = function Popular(props) {
  var category = props.categories ? props.categories.filter(function (item) {
    if (item.link === "popular_product") return item;
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 popular"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, category.length > 0 ? react_html_parser__WEBPACK_IMPORTED_MODULE_2___default()(category[0].text) : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SliderProducts_SliderProducts__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cart: props.cart,
    popUpOpen: props.popUpOpen,
    isFetching: props.isFetching,
    settings: props.settings,
    addCartHandler: props.addCartHandler,
    isLoggedIn: props.isLoggedIn,
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

/***/ "./resources/js/components/Public/IndexPage/MainContent/SliderProducts/Item/Item.jsx":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Public/IndexPage/MainContent/SliderProducts/Item/Item.jsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../assets/images/loading.svg */ "./resources/js/assets/images/loading.svg");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utils/GetCurrentData */ "./resources/js/utils/GetCurrentData.js");
/* harmony import */ var _CatalogPage_Product_Info_Info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../CatalogPage/Product/Info/Info */ "./resources/js/components/Public/CatalogPage/Product/Info/Info.jsx");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Item = function Item(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.itm.price),
      _useState2 = _slicedToArray(_useState, 2),
      price = _useState2[0],
      setPrice = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.itm.min),
      _useState4 = _slicedToArray(_useState3, 2),
      min = _useState4[0],
      setMin = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.itm.min),
      _useState6 = _slicedToArray(_useState5, 2),
      statMin = _useState6[0],
      setStatMin = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.itm.price_second),
      _useState8 = _slicedToArray(_useState7, 2),
      priceSecond = _useState8[0],
      setPriceSecond = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.itm.min_second),
      _useState10 = _slicedToArray(_useState9, 2),
      minSecond = _useState10[0],
      setMinSecond = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.itm.price_third),
      _useState12 = _slicedToArray(_useState11, 2),
      priceThird = _useState12[0],
      setPriceThird = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.itm.min_third),
      _useState14 = _slicedToArray(_useState13, 2),
      minThird = _useState14[0],
      setMinThird = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.itm.price_quarterly),
      _useState16 = _slicedToArray(_useState15, 2),
      priceQuarterly = _useState16[0],
      setPriceQuarterly = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.itm.min_quarterly),
      _useState18 = _slicedToArray(_useState17, 2),
      minQuarterly = _useState18[0],
      setMinQuarterly = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.itm.min_quarterly),
      _useState20 = _slicedToArray(_useState19, 2),
      statMinQuarterly = _useState20[0],
      setStatMinQuarterly = _useState20[1];

  var from = Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_4__["replaceStr"])(props.settings.from, '-', '/');
  var to = Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_4__["replaceStr"])(props.settings.to, '-', '/');

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date(from)),
      _useState22 = _slicedToArray(_useState21, 2),
      fromDate = _useState22[0],
      setFromDate = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date(to)),
      _useState24 = _slicedToArray(_useState23, 2),
      toDate = _useState24[0],
      setToDate = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.itm.price),
      _useState26 = _slicedToArray(_useState25, 2),
      priceVariable = _useState26[0],
      setPriceVariable = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date(Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_4__["getCurrentDate"])())),
      _useState28 = _slicedToArray(_useState27, 2),
      currentDate = _useState28[0],
      setCurrentDate = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.itm.price * props.itm.min),
      _useState30 = _slicedToArray(_useState29, 2),
      total = _useState30[0],
      setTotal = _useState30[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setPrice(props.itm.price);
    setMin(props.itm.min);
    setStatMin(props.itm.min);
    setPriceSecond(props.itm.price_second);
    setMinSecond(props.itm.min_second);
    setPriceThird(props.itm.price_third);
    setMinThird(props.itm.min_third);
    setPriceQuarterly(props.itm.price_quarterly);
    setMinQuarterly(props.itm.min_quarterly);
    setStatMinQuarterly(props.itm.min_quarterly);
    var from = Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_4__["replaceStr"])(props.settings.from, '-', '/');
    var to = Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_4__["replaceStr"])(props.settings.to, '-', '/');
    setFromDate(new Date(from));
    setToDate(new Date(to));
    setPriceVariable(props.itm.price);
    setCurrentDate(new Date(Object(_utils_GetCurrentData__WEBPACK_IMPORTED_MODULE_4__["getCurrentDate"])()));
    setTotal(props.itm.price * props.itm.min);
  }, [props.itm.price]);

  var addCountHandler = function addCountHandler() {
    if (currentDate < fromDate || currentDate > toDate) {
      setMin(min + 1);
    } else {
      setMinQuarterly(minQuarterly + 1);
    }
  };

  var removeCountHandler = function removeCountHandler() {
    if (currentDate < fromDate || currentDate > toDate) {
      if (min <= statMin) {
        setMin(statMin);
      } else {
        setMin(min - 1);
      }
    } else {
      if (minQuarterly <= statMinQuarterly) {
        setMinQuarterly(statMinQuarterly);
      } else {
        setMinQuarterly(minQuarterly - 1);
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (currentDate < fromDate || currentDate > toDate) {
      if (min >= minSecond && min < minThird) {
        setPriceVariable(priceSecond);
        setTotal(min * priceSecond);
      } else if (min >= minThird) {
        setPriceVariable(priceThird);
        setTotal(min * priceThird);
      } else {
        setPriceVariable(price);
        setTotal(min * price);
      }
    } else {
      setPriceVariable(priceQuarterly);
      setTotal(minQuarterly * priceQuarterly);
    }
  });
  var link = props.itm.attributes.map(function (item) {
    return !item.attributes.parent_id ? item.attributes.link : "";
  });
  var className = "";

  if (props.cart) {
    var _iterator = _createForOfIteratorHelper(props.cart),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var element = _step.value;

        if (element.product_id === props.itm.product_id) {
          className = "active";
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  var handleChange = function handleChange(e) {
    if (currentDate < fromDate || currentDate > toDate) {
      setMin(Number(e.target.value));
    } else {
      setMinQuarterly(Number(e.target.value));
    }
  };

  var handlerBlur = function handlerBlur(e) {
    if (currentDate < fromDate || currentDate > toDate) {
      if (e.target.value < statMin && min < statMin) {
        setMin(Number(statMin));
      }
    } else {
      if (minQuarterly < statMinQuarterly && e.target.value < statMinQuarterly) {
        setMinQuarterly(Number(statMinQuarterly));
      }
    }
  };

  var handlerKeyDown = function handlerKeyDown(e) {
    if (e.keyCode === 13) {
      e.target.blur();

      if (currentDate < fromDate || currentDate > toDate) {
        if (e.target.value < statMin && min < statMin) {
          setMin(Number(statMin));
        }
      } else {
        if (minQuarterly < statMinQuarterly && e.target.value < statMinQuarterly) {
          setMinQuarterly(Number(statMinQuarterly));
        }
      }
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'item'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "itemContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "productNavLink",
    to: "/shop/".concat(link[0], "/").concat(props.itm.product_id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "images"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.itm.image,
    alt: "prod",
    title: "pen"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, props.itm.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "article"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0410\u0440\u0442. ", props.itm.article)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      height: '53px',
      display: "inline-block",
      overflow: 'hidden'
    }
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_2___default()(props.itm.detail_min)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "costPanel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cost"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, parseFloat(priceVariable), " \u20BD / \u0448\u0442.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "count"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "remove"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onClick: removeCountHandler,
    src: "/images/minus.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "number"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onBlur: handlerBlur,
    onKeyDown: handlerKeyDown,
    onChange: handleChange,
    type: "text",
    maxLength: "5",
    value: currentDate < fromDate || currentDate > toDate ? min : minQuarterly
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "add"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onClick: addCountHandler,
    src: "/images/plus.png"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button"
  }, props.isLoggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: className,
    style: {
      display: 'flex'
    },
    onClick: function onClick() {
      return props.addCartHandler({
        product_id: props.itm.product_id,
        article: props.itm.article,
        image: props.itm.image,
        name: props.itm.name,
        detail: props.itm.detail,
        options: null,
        price: priceVariable,
        count: currentDate < fromDate || currentDate > toDate ? min : minQuarterly,
        priceSecond: props.itm.price_second,
        priceThird: props.itm.price_third,
        priceQuarterly: props.itm.price_quarterly,
        min: props.itm.min,
        minSecond: props.itm.min_second,
        minThird: props.itm.min_third,
        minQuarterly: props.itm.min_quarterly,
        total: total
      });
    }
  }, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 ", props.isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: {
      width: '20px'
    },
    src: _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }) : null) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: className,
    onClick: props.popUpOpen
  }, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

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
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Item_Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Item/Item */ "./resources/js/components/Public/IndexPage/MainContent/SliderProducts/Item/Item.jsx");







var SliderProducts = function SliderProducts(props) {
  var elements = props.popular ? props.popular.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item_Item__WEBPACK_IMPORTED_MODULE_5__["default"], {
      cart: props.cart,
      popUpOpen: props.popUpOpen,
      isFetching: props.isFetching,
      settings: props.settings,
      addCartHandler: props.addCartHandler,
      isLoggedIn: props.isLoggedIn,
      key: key,
      itm: item
    });
  }) : props.novelty ? props.novelty.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item_Item__WEBPACK_IMPORTED_MODULE_5__["default"], {
      popUpOpen: props.popUpOpen,
      isFetching: props.isFetching,
      settings: props.settings,
      addCartHandler: props.addCartHandler,
      isLoggedIn: props.isLoggedIn,
      key: key,
      itm: item
    });
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
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_1__);



var Title = function Title(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 title-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u0421\u0443\u0432\u0435\u043D\u0438\u0440\u043D\u0430\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u041C\u0418\u042D\u041B\u042C"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react_html_parser__WEBPACK_IMPORTED_MODULE_1___default()(props.settings.description_main_page)))));
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
/* harmony import */ var react_bootstrap_cjs_ElementChildren__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/cjs/ElementChildren */ "./node_modules/react-bootstrap/cjs/ElementChildren.js");
/* harmony import */ var react_bootstrap_cjs_ElementChildren__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_cjs_ElementChildren__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Links = function Links(props) {
  var menuParams = {};
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (props.categories) {
      props.categories.forEach(function (item, i) {
        menuParams[item.category_id] = false;
      });
    }
  }, []);
  var menu = JSON.parse(localStorage.getItem('menu'));

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(menu ? menu : menuParams),
      _useState2 = _slicedToArray(_useState, 2),
      leftDropMenu = _useState2[0],
      setLeftDropMenu = _useState2[1];

  var leftDropMenuHandler = function leftDropMenuHandler(e, page) {
    var clsName = e.target.getAttribute('class');
    var val = {};

    if (clsName !== 'menuArrow') {
      props.leftDropMenuHandler(page);
    } else {
      e.preventDefault();

      if (leftDropMenu[page]) {
        for (var _i2 = 0, _Object$entries = Object.entries(leftDropMenu); _i2 < _Object$entries.length; _i2++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          if (key == page) {
            val[key] = false;
          } else {
            val[key] = value;
          }
        }

        setLeftDropMenu(val);
      } else {
        for (var _i3 = 0, _Object$entries2 = Object.entries(leftDropMenu); _i3 < _Object$entries2.length; _i3++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
              _key = _Object$entries2$_i[0],
              _value = _Object$entries2$_i[1];

          if (_key == page) {
            val[_key] = true;
          } else {
            val[_key] = _value;
          }
        }

        setLeftDropMenu(val);
      }

      localStorage.removeItem('menu');
      localStorage.setItem('menu', JSON.stringify(val));
    }
  };

  var arrowStyle = {
    position: 'absolute',
    width: '15px',
    height: '15px',
    right: '15px',
    transform: 'translateY(-50%)',
    top: '50%',
    zIndex: '999'
  };
  var categories = props.categories ? props.categories.map(function (item, key) {
    return item.children.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: 'parent',
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      onClick: function onClick(e) {
        return leftDropMenuHandler(e, item.category_id);
      },
      activeClassName: "act",
      className: "leftDropMenuRun ".concat(leftDropMenu[item.category_id] ? "active" : ''),
      to: "/shop/".concat(item.link)
    }, item.attributes.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: arrowStyle,
      className: "menuArrow"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "leftDropMenu ".concat(leftDropMenu[item.category_id] ? "active" : '')
    }, props.categories.map(function (it, key) {
      return it.parent_id === item.category_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: "/shop/".concat(it.link)
      }, it.attributes.name)) : null;
    }))) : !item.parent_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      to: "/shop/".concat(item.link)
    }, item.category_id === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0413\u041A \xAB\u041C\u0418\u042D\u041B\u042C\xBB") : "", " ", item.attributes.name)) : null;
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
/* harmony import */ var _PopupOrder_PopupOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PopupOrder/PopupOrder */ "./resources/js/components/Public/Popup/PopupOrder/PopupOrder.jsx");
/* harmony import */ var _PopupMessage_PopupFormMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PopupMessage/PopupFormMessage */ "./resources/js/components/Public/Popup/PopupMessage/PopupFormMessage.js");
/* harmony import */ var _PopupMessage_PopupMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PopupMessage/PopupMessage */ "./resources/js/components/Public/Popup/PopupMessage/PopupMessage.js");
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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {};
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (props.orderId) {
      setVariableForm('order');
    }

    if (!props.orderId && formVariable === 'order') {
      setVariableForm('reg');
    }

    if (!props.send && formVariable === 'message') {
      setVariableForm('reg');
    }

    if (props.messagePopup) {
      setVariableForm('message');
    }
  });
  var form = formVariable === "reg" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PopupForm_PopupForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    permission: props.permission,
    isLoggedIn: props.isLoggedIn,
    errorReg: props.errorReg,
    addClient: props.addClient
  }) : formVariable === "login" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PopupFormLogin_PopupFormLogin__WEBPACK_IMPORTED_MODULE_2__["default"], {
    permission: props.permission,
    isLoggedIn: props.isLoggedIn,
    error: props.error,
    onLogin: props.onLogin
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, formVariable === 'reg' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "popup",
    style: props.popUp && props.classNameElement !== 'account' && !props.isLoggedIn ? visibility : null
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
  }, form))) || formVariable === 'login' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "popup",
    style: props.popUp && props.classNameElement !== 'account' && !props.isLoggedIn ? visibility : null
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
  }, form))) || formVariable === 'order' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "popup",
    style: props.orderId ? visibility : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "popup-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header",
    style: {
      boxShadow: 'none',
      border: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: props.popUpClose,
    className: "popup-close"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PopupOrder_PopupOrder__WEBPACK_IMPORTED_MODULE_3__["default"], {
    settings: props.settings,
    orderId: props.orderId
  })))) || formVariable === 'message' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "popup",
    style: props.messagePopup ? visibility : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "popup-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header",
    style: {
      boxShadow: 'none',
      border: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-title": "message",
    onClick: props.popUpClose,
    className: "popup-close"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, !props.send && "Напишите менеджеру" || "Ваше сообщение отправлено!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, !props.send && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PopupMessage_PopupFormMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSendMessage: props.onSendMessage,
    clientId: props.clientId
  }) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PopupMessage_PopupMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    settings: props.settings
  })))));
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
  } //let redirect = submitSucceeded && isLoggedIn ? (<Redirect to={"/account/company_data"}/>) : null;


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
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
  asyncBlurFields: ['login', 'password', 'name', 'email', 'phone', 'addressK', 'addressP']
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

  if (!values.addressK) {
    errors.addressK = _Admin_Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.addressK;
  }

  if (!values.addressP) {
    errors.addressP = _Admin_Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.addressP;
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
  } //let redirect = submitSucceeded && isLoggedIn ? (<Redirect to={"/account/company_data"}/>) : null;


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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
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

/***/ "./resources/js/components/Public/Popup/PopupMessage/PopupFormMessage.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Public/Popup/PopupMessage/PopupFormMessage.js ***!
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










var PopupFormMessage = function PopupFormMessage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClientPopupMessageReduxForm, {
    clientId: props.clientId,
    isLoggedIn: props.isLoggedIn,
    errSer: props.error,
    isFetching: props.isFetching,
    onSubmit: props.onSendMessage
  });
};

var ClientPopupFormMessage = function ClientPopupFormMessage(props) {
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
      submitFailed = props.submitFailed,
      err = props.err,
      change = props.change,
      isLoggedIn = props.isLoggedIn,
      clientId = props.clientId;
  var userFeedback;

  if (errSer) {
    userFeedback = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Errors_ErrorsAlert__WEBPACK_IMPORTED_MODULE_6__["default"], {
      error: errSer
    });
  }

  submitSucceeded || submitFailed || errSer ? setTimeout(function () {
    setFetching(false);
  }, 2000) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    name: "accountForm"
  }, errSer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "error"
  }, userFeedback), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accountForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: 'calc(100% - 15px)'
    },
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "hidden",
    idName: "clientHidden",
    change: change,
    name: "type",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Hidden"],
    label: "",
    val: clientId
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    idName: "clientMessage",
    name: "message",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Textarea"],
    label: "Сообщение"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setFetching(true);
    },
    type: "submit",
    disabled: submitting
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C ", isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  }) : null))));
};

var ClientPopupMessageReduxForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: "PopupForm",
  validate: _PopupFormLogin_Validator_Validate__WEBPACK_IMPORTED_MODULE_3__["default"],
  asyncBlurFields: ['message']
})(ClientPopupFormMessage);
/* harmony default export */ __webpack_exports__["default"] = (PopupFormMessage);

/***/ }),

/***/ "./resources/js/components/Public/Popup/PopupMessage/PopupMessage.js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Public/Popup/PopupMessage/PopupMessage.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var PopupMessage = function PopupMessage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0412 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u0441 \u0432\u0430\u043C\u0438 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.  \u0415\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0438 \u043A\u0430\u043A\u0438\u0435-\u043B\u0438\u0431\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel:".concat(props.settings.phone_manager)
  }, props.settings.phone_manager), " \u0438\u043B\u0438 \u043F\u043E e-mail: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:".concat(props.settings.manager_email)
  }, props.settings.manager_email), "."));
};

/* harmony default export */ __webpack_exports__["default"] = (PopupMessage);

/***/ }),

/***/ "./resources/js/components/Public/Popup/PopupOrder/PopupOrder.jsx":
/*!************************************************************************!*\
  !*** ./resources/js/components/Public/Popup/PopupOrder/PopupOrder.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var PopupOrder = function PopupOrder(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u2116 ", props.orderId), " \u043F\u0440\u0438\u043D\u044F\u0442."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0412 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u0441 \u0432\u0430\u043C\u0438 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.  \u0415\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0438 \u043A\u0430\u043A\u0438\u0435-\u043B\u0438\u0431\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel:".concat(props.settings.phone_manager)
  }, props.settings.phone_manager), " \u0438\u043B\u0438 \u043F\u043E e-mail: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:".concat(props.settings.manager_email)
  }, props.settings.manager_email), "."));
};

/* harmony default export */ __webpack_exports__["default"] = (PopupOrder);

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
/* harmony import */ var _CartPage_CartController__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CartPage/CartController */ "./resources/js/components/Public/CartPage/CartController.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Footer/Footer */ "./resources/js/components/Public/Footer/Footer.jsx");
/* harmony import */ var _redux_Public_public_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/Public/public-reducer */ "./resources/js/redux/Public/public-reducer.js");
/* harmony import */ var _redux_Public_registration_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/Public/registration-reducer */ "./resources/js/redux/Public/registration-reducer.js");
/* harmony import */ var _redux_Public_registration_selectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../redux/Public/registration-selectors */ "./resources/js/redux/Public/registration-selectors.js");
/* harmony import */ var _common_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/Preloader/Preloader */ "./resources/js/components/common/Preloader/Preloader.js");
/* harmony import */ var _redux_Public_index_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/Public/index-reducer */ "./resources/js/redux/Public/index-reducer.js");
/* harmony import */ var _redux_auth_reducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../redux/auth-reducer */ "./resources/js/redux/auth-reducer.js");
/* harmony import */ var _Popup_Popup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Popup/Popup */ "./resources/js/components/Public/Popup/Popup.jsx");
/* harmony import */ var _redux_auth_selectors__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../redux/auth-selectors */ "./resources/js/redux/auth-selectors.js");
/* harmony import */ var _redux_Public_account_reducer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../redux/Public/account-reducer */ "./resources/js/redux/Public/account-reducer.js");
/* harmony import */ var _CatalogPage_CatalogConatainer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./CatalogPage/CatalogConatainer */ "./resources/js/components/Public/CatalogPage/CatalogConatainer.js");
/* harmony import */ var _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../redux/Public/cart-reducer */ "./resources/js/redux/Public/cart-reducer.js");
/* harmony import */ var _redux_Public_cart_selectros__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../redux/Public/cart-selectros */ "./resources/js/redux/Public/cart-selectros.js");
/* harmony import */ var _redux_Public_catalog_reducer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../redux/Public/catalog-reducer */ "./resources/js/redux/Public/catalog-reducer.js");
/* harmony import */ var _redux_Public_message_selectros__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../redux/Public/message-selectros */ "./resources/js/redux/Public/message-selectros.js");
/* harmony import */ var _redux_Public_message_reducer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../redux/Public/message-reducer */ "./resources/js/redux/Public/message-reducer.js");
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

    _defineProperty(_assertThisInitialized(_this), "popUpOpen", function (e) {
      var message = e.target.getAttribute('data-title');

      if (message === 'message') {
        _this.setState({
          messagePopup: true
        });
      }

      _this.setState({
        popUp: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "menuAccountHandler", function (e) {
      var elementClass = e.target.getAttribute('class');

      if (elementClass !== 'loginSpan' && elementClass !== 'login' && elementClass !== 'accountMenu') {
        _this.setState({
          menuAccount: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "popUpClose", function (e) {
      var message = e.target.getAttribute('data-title');

      if (message === 'message') {
        _this.setState({
          messagePopup: false
        });

        _this.props.setSend();
      }

      _this.setState({
        popUp: false
      });

      _this.props.setOrderIdNull();
    });

    _defineProperty(_assertThisInitialized(_this), "onLogout", function () {
      var type = localStorage.getItem('type');

      _this.props.logout(type);

      _this.props.deleteAccount();

      setTimeout(function () {
        return _this.props.history.push('/');
      }, 2000);
    });

    _defineProperty(_assertThisInitialized(_this), "onAddSubmit", function (formData) {
      _this.props.addClient(formData);
    });

    _defineProperty(_assertThisInitialized(_this), "onSendMessage", function (formData) {
      _this.props.sendMessage(formData);
    });

    _defineProperty(_assertThisInitialized(_this), "leftDropMenuHandler", function (page) {
      if (_this.state.leftDropMenu) {
        _this.setState({
          leftDropMenu: false
        });
      } else {
        _this.setState({
          leftDropMenu: true
        });
      }

      _this.props.getCatalog(page, _this.state.offset, _this.state.limit);
    });

    _defineProperty(_assertThisInitialized(_this), "onLogin", function (formData) {
      _this.props.login(formData.login, formData.password, formData.type);
    });

    _this.state = {
      dropMenu: false,
      leftDropMenu: false,
      dropLeftNavigationRun: false,
      messagePopup: false,
      menuAccount: true,
      offset: 0,
      limit: 2,
      popUp: false
    };
    return _this;
  }

  _createClass(PublicContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getPublic();
      this.props.getIndexPage();
      this.props.getCart();

      if (this.props.isLoggedIn && this.props.permission === 'Client') {
        this.props.addCartClient(JSON.parse(localStorage.getItem('client')));
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (!this.state.menuAccount) {
        this.setState({
          menuAccount: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.initialize) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_15__["default"], null);
      }

      var arr = this.props.match.url.split('/');
      var className = !parseInt(this.props.match.params.id) ? arr[1] : 'item';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        onClick: this.menuAccountHandler,
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
        menuAccount: this.state.menuAccount,
        cart: this.props.cart,
        onLogout: this.onLogout,
        popUpOpen: this.popUpOpen,
        isLoggedIn: this.props.isLoggedIn,
        permission: this.props.permission,
        dropMenuHandler: this.dropMenuHandler,
        phone: this.props.settings.phone
      }), this.props.match.path === "/" && !!Object.keys(this.props.settings).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IndexPage_MainContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        popUpOpen: this.popUpOpen,
        isLoggedIn: this.props.isLoggedIn
      }) : this.props.match.path === "/account/:page?/" && !!Object.keys(this.props.settings).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountPage_AccountContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        popUpOpen: this.popUpOpen,
        permission: this.props.permission,
        isLoggedIn: this.props.isLoggedIn
      }) : this.props.match.path === "/shop/:page?/:id?" && !!Object.keys(this.props.settings).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CatalogPage_CatalogConatainer__WEBPACK_IMPORTED_MODULE_21__["default"], {
        popUpOpen: this.popUpOpen,
        isLoggedIn: this.props.isLoggedIn
      }) : this.props.match.path === "/basket" && !!Object.keys(this.props.settings).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartPage_CartController__WEBPACK_IMPORTED_MODULE_10__["default"], {
        isLoggedIn: this.props.isLoggedIn
      }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        phone: this.props.settings.phone,
        social: this.props.settings.social
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Popup_Popup__WEBPACK_IMPORTED_MODULE_18__["default"], {
        clientId: this.props.clientId,
        send: this.props.send,
        onSendMessage: this.onSendMessage,
        messagePopup: this.state.messagePopup,
        settings: this.props.settings,
        orderId: this.props.orderId,
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
    error: Object(_redux_auth_selectors__WEBPACK_IMPORTED_MODULE_19__["getErrorSelector"])(state),
    errorReg: Object(_redux_Public_registration_selectors__WEBPACK_IMPORTED_MODULE_14__["getErrorRegSelectors"])(state),
    isLoggedIn: Object(_redux_auth_selectors__WEBPACK_IMPORTED_MODULE_19__["getIsLoggedInSelector"])(state),
    permission: Object(_redux_auth_selectors__WEBPACK_IMPORTED_MODULE_19__["getPermissionSelectors"])(state),
    orderId: Object(_redux_Public_cart_selectros__WEBPACK_IMPORTED_MODULE_23__["getOrderIdSelectors"])(state),
    cart: Object(_redux_Public_cart_selectros__WEBPACK_IMPORTED_MODULE_23__["getCartSelectors"])(state),
    send: Object(_redux_Public_message_selectros__WEBPACK_IMPORTED_MODULE_25__["getSendSelectors"])(state),
    clientId: Object(_redux_auth_selectors__WEBPACK_IMPORTED_MODULE_19__["getIdSelector"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"], Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getPublic: _redux_Public_public_reducer__WEBPACK_IMPORTED_MODULE_12__["getPublic"],
  getIndexPage: _redux_Public_index_reducer__WEBPACK_IMPORTED_MODULE_16__["getIndexPage"],
  addClient: _redux_Public_registration_reducer__WEBPACK_IMPORTED_MODULE_13__["addClient"],
  login: _redux_auth_reducer__WEBPACK_IMPORTED_MODULE_17__["login"],
  logout: _redux_auth_reducer__WEBPACK_IMPORTED_MODULE_17__["logout"],
  addCartClient: _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_22__["addCartClient"],
  getCart: _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_22__["getCart"],
  setOrderIdNull: _redux_Public_cart_reducer__WEBPACK_IMPORTED_MODULE_22__["setOrderIdNull"],
  getCatalog: _redux_Public_catalog_reducer__WEBPACK_IMPORTED_MODULE_24__["getCatalog"],
  setSend: _redux_Public_message_reducer__WEBPACK_IMPORTED_MODULE_26__["setSend"],
  sendMessage: _redux_Public_message_reducer__WEBPACK_IMPORTED_MODULE_26__["sendMessage"],
  deleteAccount: _redux_Public_account_reducer__WEBPACK_IMPORTED_MODULE_20__["deleteAccount"]
}))(PublicContainer));

/***/ }),

/***/ "./resources/js/redux/Public/account-selectors.js":
/*!********************************************************!*\
  !*** ./resources/js/redux/Public/account-selectors.js ***!
  \********************************************************/
/*! exports provided: getClientSelectors, getErrorSelector, getOrdersSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientSelectors", function() { return getClientSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorSelector", function() { return getErrorSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrdersSelector", function() { return getOrdersSelector; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getClientSelectors = function getClientSelectors(state) {
  return state.accountPagePublic.client;
};
var getErrorSelector = function getErrorSelector(state) {
  return state.accountPagePublic.error;
};
var getOrdersSelector = function getOrdersSelector(state) {
  return state.accountPagePublic.orders;
};

/***/ }),

/***/ "./resources/js/redux/Public/cart-selectros.js":
/*!*****************************************************!*\
  !*** ./resources/js/redux/Public/cart-selectros.js ***!
  \*****************************************************/
/*! exports provided: getCartSelectors, getClientSelectors, getCommentSelectors, getDeliverySelectors, getTotalSelectors, getOrderIdSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartSelectors", function() { return getCartSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientSelectors", function() { return getClientSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommentSelectors", function() { return getCommentSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeliverySelectors", function() { return getDeliverySelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalSelectors", function() { return getTotalSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderIdSelectors", function() { return getOrderIdSelectors; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getCartSelectors = function getCartSelectors(state) {
  return state.cartPublic.cart;
};
var getClientSelectors = function getClientSelectors(state) {
  return state.cartPublic.client;
};
var getCommentSelectors = function getCommentSelectors(state) {
  return state.cartPublic.comment;
};
var getDeliverySelectors = function getDeliverySelectors(state) {
  return state.cartPublic.delivery;
};
var getTotalSelectors = function getTotalSelectors(state) {
  return state.cartPublic.total;
};
var getOrderIdSelectors = function getOrderIdSelectors(state) {
  return state.cartPublic.order_id;
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

/***/ "./resources/js/redux/Public/message-selectros.js":
/*!********************************************************!*\
  !*** ./resources/js/redux/Public/message-selectros.js ***!
  \********************************************************/
/*! exports provided: getSendSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSendSelectors", function() { return getSendSelectors; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getSendSelectors = function getSendSelectors(state) {
  return state.messagePublic.send;
};

/***/ }),

/***/ "./resources/js/redux/Public/productPublic-selectors.js":
/*!**************************************************************!*\
  !*** ./resources/js/redux/Public/productPublic-selectors.js ***!
  \**************************************************************/
/*! exports provided: getProductSelectors, getInitializeSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductSelectors", function() { return getProductSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitializeSelectors", function() { return getInitializeSelectors; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getProductSelectors = function getProductSelectors(state) {
  return state.productPublic.product;
};
var getInitializeSelectors = function getInitializeSelectors(state) {
  return state.productPublic.initialize;
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

/***/ }),

/***/ "./resources/js/utils/GetCurrentData.js":
/*!**********************************************!*\
  !*** ./resources/js/utils/GetCurrentData.js ***!
  \**********************************************/
/*! exports provided: getCurrentDate, isDifferentDates, replaceStr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentDate", function() { return getCurrentDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDifferentDates", function() { return isDifferentDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceStr", function() { return replaceStr; });
var getCurrentDate = function getCurrentDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  var td = yyyy + '/' + mm + '/' + dd;
  return td;
};
var isDifferentDates = function isDifferentDates(d1, d2) {
  return d2 - d1 !== 0;
};
var replaceStr = function replaceStr(str, replaceValue, replaceWith) {
  var result = '';
  var searchRegExp = new RegExp(replaceValue, 'g');
  result = str ? str.replace(searchRegExp, replaceWith) : str;
  return result;
};

/***/ })

}]);