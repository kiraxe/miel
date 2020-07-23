(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./resources/js/assets/images/logo.png":
/*!*********************************************!*\
  !*** ./resources/js/assets/images/logo.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo.png?3fdb229b7421441ff52bde19a9451e7a";

/***/ }),

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
/* harmony import */ var _Category_CategoryContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Category/CategoryContainer */ "./resources/js/components/Admin/Category/CategoryContainer.js");
/* harmony import */ var _Settings_SettingsContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Settings/SettingsContainer */ "./resources/js/components/Admin/Settings/SettingsContainer.js");
/* harmony import */ var _Options_OptionsContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Options/OptionsContainer */ "./resources/js/components/Admin/Options/OptionsContainer.js");









var Admin = function Admin(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "admin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    currentUser: props.currentUser,
    logout: props.logout
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    id: "adminMain",
    className: "col-sm-9 offset-sm-3 col-lg-10 offset-lg-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, props.page == 'products' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Products_ProductsContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null) : null, props.page == 'categories' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Category_CategoryContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null) : null, props.page == 'clientele' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lientele_ClienteleContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null) : null, props.page == 'options' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Options_OptionsContainer__WEBPACK_IMPORTED_MODULE_7__["default"], null) : null, props.page == 'settings' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Settings_SettingsContainer__WEBPACK_IMPORTED_MODULE_6__["default"], null) : null))));
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Admin__WEBPACK_IMPORTED_MODULE_4__["default"], {
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

/***/ "./resources/js/components/Admin/Category/Categories.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/Admin/Category/Categories.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category */ "./resources/js/components/Admin/Category/Category.jsx");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Language */ "./resources/js/components/Admin/Language.js");
/* harmony import */ var _common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/ButtonsPanel/ButtonPanelContainer */ "./resources/js/components/common/ButtonsPanel/ButtonPanelContainer.js");





var Categories = function Categories(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.categories.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    className: "thead-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.categories.table.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.categories.table.image), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.categories.table.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.categories.table.parent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.categories.table.action))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, props.categories ? props.categories.map(function (p, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Category__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onDelete: props.onDelete,
      page: props.page,
      url: props.url,
      category: p,
      key: index
    });
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    buttons: ['add'],
    url: props.url
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Categories);

/***/ }),

/***/ "./resources/js/components/Admin/Category/Category.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/components/Admin/Category/Category.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/ButtonsPanel/ButtonPanelContainer */ "./resources/js/components/common/ButtonsPanel/ButtonPanelContainer.js");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Language */ "./resources/js/components/Admin/Language.js");




var Category = function Category(props) {
  var buttons = ['edit', 'delete'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.category.category_id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.category.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.category.image
  }) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/storage/no-image.jpg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.category.attributes.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.category.parentNames), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onDelete: props.onDelete,
    page: props.page,
    buttons: buttons,
    elementId: props.category.category_id,
    url: props.url
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "./resources/js/components/Admin/Category/CategoryContainer.js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Admin/Category/CategoryContainer.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories */ "./resources/js/components/Admin/Category/Categories.jsx");
/* harmony import */ var _CategoryEdit_CategoryEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategoryEdit/CategoryEdit */ "./resources/js/components/Admin/Category/CategoryEdit/CategoryEdit.js");
/* harmony import */ var _CategoryNew_CategoryNew__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoryNew/CategoryNew */ "./resources/js/components/Admin/Category/CategoryNew/CategoryNew.jsx");
/* harmony import */ var _common_Paginator_Paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Paginator/Paginator */ "./resources/js/components/common/Paginator/Paginator.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _redux_category_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../redux/category-reducer */ "./resources/js/redux/category-reducer.js");
/* harmony import */ var _redux_category_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../redux/category-selectors */ "./resources/js/redux/category-selectors.js");
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












var CategoryContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(CategoryContainer, _React$Component);

  var _super = _createSuper(CategoryContainer);

  function CategoryContainer(props) {
    var _this;

    _classCallCheck(this, CategoryContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onAddSubmit", function (formData) {
      _this.props.addCategory(formData);
    });

    _defineProperty(_assertThisInitialized(_this), "onEditSubmit", function (formData) {
      var action = false;
      var page = _this.props.paginator.current_page;

      _this.props.categories.some(function (item) {
        return item.category_id === formData.category_id ? action = item.attributes.name !== formData.name : null;
      });

      _this.props.editCategory(formData, action, page);
    });

    _defineProperty(_assertThisInitialized(_this), "onGetPageCategory", function (e) {
      var page = e.target.getAttribute('page');

      _this.props.getCategory(page);
    });

    _defineProperty(_assertThisInitialized(_this), "onDelete", function (e) {
      var elementId = e.currentTarget.getAttribute('data-element');

      _this.props.deleteCategory(elementId);
    });

    return _this;
  }

  _createClass(CategoryContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getCategory(1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var categories = !this.props.match.params.slug ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Categories__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onDelete: this.onDelete,
        page: this.props.match.params.page,
        url: this.props.match.url,
        categories: this.props.categories
      }) : this.props.match.params.slug === 'edit' && this.props.match.params.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategoryEdit_CategoryEdit__WEBPACK_IMPORTED_MODULE_2__["default"], {
        error: this.props.error,
        id: this.props.match.params.id,
        select: this.props.select,
        editCategory: this.onEditSubmit,
        category: this.props.categories ? this.props.categories.filter(function (item) {
          return item.category_id == _this2.props.match.params.id;
        }) : null
      }) : this.props.match.params.slug === 'add' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategoryNew_CategoryNew__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: this.props.match.params.id,
        error: this.props.error,
        select: this.props.select,
        addCategory: this.onAddSubmit
      }) : null;
      var paginator = this.props.paginator.total_page > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Paginator_Paginator__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onGetPage: this.onGetPageCategory,
        paginator: this.props.paginator
      }) : null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, categories, !this.props.match.params.slug && paginator);
    }
  }]);

  return CategoryContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    categories: Object(_redux_category_selectors__WEBPACK_IMPORTED_MODULE_9__["getCategorySelectors"])(state),
    paginator: Object(_redux_category_selectors__WEBPACK_IMPORTED_MODULE_9__["getPaginatorSelector"])(state),
    select: Object(_redux_category_selectors__WEBPACK_IMPORTED_MODULE_9__["getSelectSelector"])(state),
    error: Object(_redux_category_selectors__WEBPACK_IMPORTED_MODULE_9__["getErrorSelector"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_6__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  getCategory: _redux_category_reducer__WEBPACK_IMPORTED_MODULE_8__["getCategory"],
  addCategory: _redux_category_reducer__WEBPACK_IMPORTED_MODULE_8__["addCategory"],
  editCategory: _redux_category_reducer__WEBPACK_IMPORTED_MODULE_8__["editCategory"],
  deleteCategory: _redux_category_reducer__WEBPACK_IMPORTED_MODULE_8__["deleteCategory"]
}), react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(CategoryContainer));

/***/ }),

/***/ "./resources/js/components/Admin/Category/CategoryEdit/CategoryEdit.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Admin/Category/CategoryEdit/CategoryEdit.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Language */ "./resources/js/components/Admin/Language.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/images/loading.svg */ "./resources/js/assets/images/loading.svg");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Validator_Validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Validator/Validate */ "./resources/js/components/Admin/Category/Validator/Validate.js");
/* harmony import */ var _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/FormsControls/FormControls */ "./resources/js/components/common/FormsControls/FormControls.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var CategoryEdit = function CategoryEdit(props) {
  var categoryAttr = function categoryAttr(_ref) {
    var attributes = _ref.attributes,
        rest = _objectWithoutProperties(_ref, ["attributes"]);

    return rest;
  };

  var categoryProps = props.category[0] ? _objectSpread(_objectSpread({}, categoryAttr(props.category[0])), props.category[0].attributes) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.edit.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CategoryEditReduxForm, {
    id: props.id,
    select: props.select,
    errSer: props.error,
    initialValues: categoryProps,
    onSubmit: props.editCategory
  })));
};

var CategoryEditForm = function CategoryEditForm(props) {
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
      change = props.change,
      select = props.select,
      id = props.id;
  submitSucceeded || submitFailed || errSer ? setTimeout(function () {
    setFetching(false);
  }, 2000) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    id: "categoryForm",
    onSubmit: handleSubmit,
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.table.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "categoryName",
    name: "name",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.table.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.table.link), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "categoryLink",
    name: "link",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.table.link
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.table.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "categoryDescription",
    name: "description",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.table.description
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "file",
    idName: "categoryFiles",
    name: "image",
    change: change,
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["File"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.table.image
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.table.parent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    idName: "categoryParent",
    multiple: false,
    name: "parent_id",
    ourCategory: id,
    select: select,
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Select"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setFetching(true);
    },
    type: "submit",
    className: "btn btn-primary",
    disabled: submitting
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.edit.button, " ", isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "loading"
  }) : null), errSer === null && submitSucceeded && isFetching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: 'success'
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.edit.success));
};

var CategoryEditReduxForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: "CategoryEdit",
  validate: _Validator_Validate__WEBPACK_IMPORTED_MODULE_4__["default"],
  asyncBlurFields: ['name']
})(CategoryEditForm);
/* harmony default export */ __webpack_exports__["default"] = (CategoryEdit);

/***/ }),

/***/ "./resources/js/components/Admin/Category/CategoryNew/CategoryNew.jsx":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Admin/Category/CategoryNew/CategoryNew.jsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Language */ "./resources/js/components/Admin/Language.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/images/loading.svg */ "./resources/js/assets/images/loading.svg");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Validator_Validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Validator/Validate */ "./resources/js/components/Admin/Category/Validator/Validate.js");
/* harmony import */ var _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/FormsControls/FormControls */ "./resources/js/components/common/FormsControls/FormControls.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var CategoryNew = function CategoryNew(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories["new"].title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CategoryNewReduxForm, {
    id: props.id,
    errSer: props.error,
    select: props.select,
    onSubmit: props.addCategory
  })));
};

var CategoryNewForm = function CategoryNewForm(props) {
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
      select = props.select,
      id = props.id,
      change = props.change;
  submitSucceeded || submitFailed || errSer ? setTimeout(function () {
    setFetching(false);
  }, 2000) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.table.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "categoryName",
    name: "name",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.table.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.table.link), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "categoryLink",
    name: "link",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.table.link
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.table.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "categoryDescription",
    name: "description",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.table.description
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "file",
    idName: "categoryFiles",
    name: "image",
    change: change,
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["File"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.table.image
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.table.parent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    idName: "categoryParent",
    multiple: false,
    name: "parent_id",
    ourCategory: id,
    select: select,
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Select"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setFetching(true);
    },
    type: "submit",
    className: "btn btn-primary",
    disabled: submitting
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.edit.button, " ", isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }) : null), errSer === null && submitSucceeded && isFetching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: 'success'
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.categories.edit.success));
};

var CategoryNewReduxForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: "CategoryNew",
  validate: _Validator_Validate__WEBPACK_IMPORTED_MODULE_4__["default"],
  asyncBlurFields: ['name']
})(CategoryNewForm);
/* harmony default export */ __webpack_exports__["default"] = (CategoryNew);

/***/ }),

/***/ "./resources/js/components/Admin/Category/Validator/Validate.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Admin/Category/Validator/Validate.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Language */ "./resources/js/components/Admin/Language.js");


var validate = function validate(values) {
  var errors = {};

  if (!values.name) {
    errors.name = _Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.categories.error.name;
  }

  return errors;
};

/* harmony default export */ __webpack_exports__["default"] = (validate);

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "fixed-top adminHeader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/admin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "adminLogo",
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./resources/js/components/Admin/Options/Option.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Admin/Options/Option.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/ButtonsPanel/ButtonPanelContainer */ "./resources/js/components/common/ButtonsPanel/ButtonPanelContainer.js");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Language */ "./resources/js/components/Admin/Language.js");




var Option = function Option(props) {
  var buttons = ['edit', 'delete'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.option.option_id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.option.description.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.option.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onDelete: props.onDelete,
    page: props.page,
    buttons: buttons,
    elementId: props.option.option_id,
    url: props.url
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Option);

/***/ }),

/***/ "./resources/js/components/Admin/Options/OptionEdit/OptionEdit.js":
/*!************************************************************************!*\
  !*** ./resources/js/components/Admin/Options/OptionEdit/OptionEdit.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Language */ "./resources/js/components/Admin/Language.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/images/loading.svg */ "./resources/js/assets/images/loading.svg");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/FormsControls/FormControls */ "./resources/js/components/common/FormsControls/FormControls.js");
/* harmony import */ var react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Tabs */ "./node_modules/react-bootstrap/esm/Tabs.js");
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Tab */ "./node_modules/react-bootstrap/esm/Tab.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




 //import Validator from "../Validator/Validate.js";





var OptionEdit = function OptionEdit(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.options.edit.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OptionEditReduxForm, {
    errSer: props.error,
    initialValues: props.option[0],
    option: props.option[0],
    onSubmit: props.editOption
  })));
};

var OptionEditForm = function OptionEditForm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFetching = _useState2[0],
      setFetching = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('name'),
      _useState4 = _slicedToArray(_useState3, 2),
      key = _useState4[0],
      setKey = _useState4[1];

  var handleSubmit = props.handleSubmit,
      pristine = props.pristine,
      reset = props.reset,
      submitting = props.submitting,
      errSer = props.errSer,
      submitSucceeded = props.submitSucceeded,
      submitFailed = props.submitFailed,
      option = props.option,
      initialize = props.initialize;
  submitSucceeded || submitFailed || errSer ? setTimeout(function () {
    setFetching(false);
  }, 2000) : null;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (option) {
      initialize(_objectSpread(_objectSpread({}, option), {}, {
        name: option.description.name,
        optionval: option.value_description.map(function (item) {
          return item.description ? item.description.name : item.name;
        })
      }));
    }
  }, [option]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "controlled-tab-example",
    activeKey: key,
    onSelect: function onSelect(k) {
      return setKey(k);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_6__["default"], {
    eventKey: "name",
    title: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438 \u0442\u0438\u043F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.options.table.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "optionName",
    className: "form-control",
    name: "name",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_4__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.options.table.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.options.table.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    id: "optionType",
    className: "form-control",
    name: "type",
    component: "select",
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.options.table.type
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "0"
  }, "\u0422\u0438\u043F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "Select"
  }, "Select")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_6__["default"], {
    eventKey: "value",
    title: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u044F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], {
    title: 'Значение',
    name: "optionval",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_4__["inputMultiple"],
    type: "text"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setFetching(true);
    },
    type: "submit",
    className: "btn btn-primary"
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.options.edit.button, " ", isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }) : null), errSer === null && submitSucceeded && isFetching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'success'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.options.edit.success)));
};

var OptionEditReduxForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: "OptionEdit"
})(OptionEditForm);
/* harmony default export */ __webpack_exports__["default"] = (OptionEdit);

/***/ }),

/***/ "./resources/js/components/Admin/Options/OptionNew/OptionNew.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Admin/Options/OptionNew/OptionNew.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Language */ "./resources/js/components/Admin/Language.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/images/loading.svg */ "./resources/js/assets/images/loading.svg");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/FormsControls/FormControls */ "./resources/js/components/common/FormsControls/FormControls.js");
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Tab */ "./node_modules/react-bootstrap/esm/Tab.js");
/* harmony import */ var react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Tabs */ "./node_modules/react-bootstrap/esm/Tabs.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




 //import Validator from "../Validator/Validate.js";





var OptionNew = function OptionNew(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.options["new"].title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OptionNewReduxForm, {
    errSer: props.error,
    isFetching: props.isFetching,
    onSubmit: props.addOption
  })));
};

var OptionNewForm = function OptionNewForm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFetching = _useState2[0],
      setFetching = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('name'),
      _useState4 = _slicedToArray(_useState3, 2),
      key = _useState4[0],
      setKey = _useState4[1];

  var handleSubmit = props.handleSubmit,
      pristine = props.pristine,
      reset = props.reset,
      submitting = props.submitting,
      errSer = props.errSer,
      submitSucceeded = props.submitSucceeded,
      submitFailed = props.submitFailed;
  submitSucceeded || submitFailed || errSer ? setTimeout(function () {
    setFetching(false);
  }, 2000) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "controlled-tab-example",
    activeKey: key,
    onSelect: function onSelect(k) {
      return setKey(k);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    eventKey: "name",
    title: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438 \u0442\u0438\u043F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.options.table.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "optionName",
    className: "form-control",
    name: "name",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_4__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.options.table.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.options.table.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    id: "optionType",
    className: "form-control",
    name: "type",
    component: "select",
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.options.table.type
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "0"
  }, "\u0422\u0438\u043F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "Select"
  }, "Select")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    eventKey: "value",
    title: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u044F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], {
    title: 'Значение',
    name: "optionval",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_4__["inputMultiple"],
    type: "text"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setFetching(true);
    },
    type: "submit",
    className: "btn btn-primary",
    disabled: submitting
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.options["new"].button, " ", isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }) : null), errSer === null && submitSucceeded && isFetching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'success'
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.options["new"].success));
};

var OptionNewReduxForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: "OptionNew"
})(OptionNewForm);
/* harmony default export */ __webpack_exports__["default"] = (OptionNew);

/***/ }),

/***/ "./resources/js/components/Admin/Options/Options.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Admin/Options/Options.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Option */ "./resources/js/components/Admin/Options/Option.js");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Language */ "./resources/js/components/Admin/Language.js");
/* harmony import */ var _common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/ButtonsPanel/ButtonPanelContainer */ "./resources/js/components/common/ButtonsPanel/ButtonPanelContainer.js");





var Options = function Options(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.options.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    className: "thead-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.options.table.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.options.table.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.options.table.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.options.table.action))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, props.options ? props.options.map(function (p, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Option__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onDelete: props.onDelete,
      page: props.page,
      url: props.url,
      option: p,
      key: index
    });
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    buttons: ['add'],
    url: props.url
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Options);

/***/ }),

/***/ "./resources/js/components/Admin/Options/OptionsContainer.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Admin/Options/OptionsContainer.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options */ "./resources/js/components/Admin/Options/Options.js");
/* harmony import */ var _OptionEdit_OptionEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptionEdit/OptionEdit */ "./resources/js/components/Admin/Options/OptionEdit/OptionEdit.js");
/* harmony import */ var _OptionNew_OptionNew__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OptionNew/OptionNew */ "./resources/js/components/Admin/Options/OptionNew/OptionNew.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _redux_option_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/option-reducer */ "./resources/js/redux/option-reducer.js");
/* harmony import */ var _redux_option_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../redux/option-selectors */ "./resources/js/redux/option-selectors.js");
/* harmony import */ var _common_Paginator_Paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/Paginator/Paginator */ "./resources/js/components/common/Paginator/Paginator.jsx");
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












var OptionsContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(OptionsContainer, _React$Component);

  var _super = _createSuper(OptionsContainer);

  function OptionsContainer(props) {
    var _this;

    _classCallCheck(this, OptionsContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onAddSubmit", function (formData) {
      _this.props.addOption(formData);
    });

    _defineProperty(_assertThisInitialized(_this), "onEditSubmit", function (formData) {
      _this.props.editOption(formData);
    });

    _defineProperty(_assertThisInitialized(_this), "onGetPageOptions", function (e) {
      var page = e.target.getAttribute('page');

      _this.props.getOptions(page);
    });

    _defineProperty(_assertThisInitialized(_this), "onDelete", function (e) {
      var elementId = e.currentTarget.getAttribute('data-element');

      _this.props.deleteOption(elementId);
    });

    return _this;
  }

  _createClass(OptionsContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getOptions();
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

      var option = !this.props.match.params.slug ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Options__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onDelete: this.onDelete,
        page: this.props.match.params.page,
        url: this.props.match.url,
        options: this.props.options
      }) : this.props.match.params.slug === 'edit' && this.props.match.params.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OptionEdit_OptionEdit__WEBPACK_IMPORTED_MODULE_2__["default"], {
        error: this.props.error,
        editOption: this.onEditSubmit,
        option: this.props.options ? this.props.options.filter(function (item) {
          return item.option_id == _this2.props.match.params.id;
        }) : null
      }) : this.props.match.params.slug === 'add' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OptionNew_OptionNew__WEBPACK_IMPORTED_MODULE_3__["default"], {
        error: this.props.error,
        addOption: this.onAddSubmit
      }) : null;
      var paginator = this.props.paginator.total_page > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Paginator_Paginator__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onGetPage: this.onGetPageOptions,
        paginator: this.props.paginator
      }) : null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, option, !this.props.match.params.slug && paginator);
    }
  }]);

  return OptionsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    options: Object(_redux_option_selectors__WEBPACK_IMPORTED_MODULE_8__["getOptionsSelectors"])(state),
    paginator: Object(_redux_option_selectors__WEBPACK_IMPORTED_MODULE_8__["getPaginatorSelector"])(state),
    error: Object(_redux_option_selectors__WEBPACK_IMPORTED_MODULE_8__["getErrorSelector"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  getOptions: _redux_option_reducer__WEBPACK_IMPORTED_MODULE_7__["getOptions"],
  addOption: _redux_option_reducer__WEBPACK_IMPORTED_MODULE_7__["addOption"],
  editOption: _redux_option_reducer__WEBPACK_IMPORTED_MODULE_7__["editOption"],
  deleteOption: _redux_option_reducer__WEBPACK_IMPORTED_MODULE_7__["deleteOption"]
}), react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(OptionsContainer));

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
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_3__);





var Product = function Product(props) {
  var buttons = ['edit', 'delete'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.product.product_id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.product.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.product.image
  }) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/storage/no-image.jpg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(props.product.detail)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.product.price, " ", _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.products.rub), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onDelete: props.onDelete,
    page: props.page,
    buttons: buttons,
    elementId: props.product.product_id,
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
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/images/loading.svg */ "./resources/js/assets/images/loading.svg");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Validator_Validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Validator/Validate */ "./resources/js/components/Admin/Products/Validator/Validate.js");
/* harmony import */ var _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/FormsControls/FormControls */ "./resources/js/components/common/FormsControls/FormControls.js");
/* harmony import */ var react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Tabs */ "./node_modules/react-bootstrap/esm/Tabs.js");
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Tab */ "./node_modules/react-bootstrap/esm/Tab.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var ProductEdit = function ProductEdit(props) {
  var attributes = props.product[0] && props.product[0].attributes ? props.product[0].attributes.map(function (item) {
    return item.category_id;
  }) : props.product[0] && props.product[0].categories_id ? props.product[0].categories_id.split(',') : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.edit.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProductEditReduxForm, {
    errSer: props.error,
    product: props.product[0],
    attributes: attributes,
    select: props.select,
    options: props.options
    /*initialValues={props.product[0]}*/
    ,
    onSubmit: props.editProduct
  })));
};

var ProductEditForm = function ProductEditForm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFetching = _useState2[0],
      setFetching = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('general'),
      _useState4 = _slicedToArray(_useState3, 2),
      key = _useState4[0],
      setKey = _useState4[1];

  var handleSubmit = props.handleSubmit,
      pristine = props.pristine,
      reset = props.reset,
      submitting = props.submitting,
      errSer = props.errSer,
      submitSucceeded = props.submitSucceeded,
      submitFailed = props.submitFailed,
      change = props.change,
      select = props.select,
      options = props.options,
      attributes = props.attributes,
      initialize = props.initialize,
      product = props.product;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    initialize(_objectSpread(_objectSpread({}, product), {}, {
      categories_id: attributes
    }));
  }, []);
  submitSucceeded || submitFailed || errSer ? setTimeout(function () {
    setFetching(false);
  }, 3000) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    id: "productForm",
    onSubmit: handleSubmit,
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "controlled-tab-example",
    activeKey: key,
    onSelect: function onSelect(k) {
      return setKey(k);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "general",
    title: "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productName",
    name: "name",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.article), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productArticle",
    name: "article",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.article
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "textarea",
    idName: "productDetail",
    name: "detail",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Textarea"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.description
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.property), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "textarea",
    idName: "productProperty",
    name: "property",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Textarea"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.property
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "form-check-label",
    htmlFor: "productNovelty"
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.novelty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "checkbox",
    idName: "productNovelty",
    name: "novelty",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Checkbox"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.novelty
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "form-check-label",
    htmlFor: "productPopular"
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.popular), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "checkbox",
    idName: "productPopular",
    name: "popular",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Checkbox"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.popular
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "price",
    title: "\u0426\u0435\u043D\u0430"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productPrice",
    name: 'price',
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.min), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productMin",
    name: 'min',
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.min
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price_second), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productPriceSecond",
    name: 'price_second',
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price_second
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.min_second), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productMinSecond",
    name: 'min_second',
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.min_second
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price_third), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productPriceThird",
    name: 'price_third',
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price_third
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.min_third), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productMinThird",
    name: 'min_third',
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.min_third
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price_quarterly), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productPriceQuarterly",
    name: 'price_quarterly',
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price_quarterly
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.min_quarterly), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productMinQuarterly",
    name: 'min_quarterly',
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.min_quarterly
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "category",
    title: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.categories), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "select-multiple",
    idName: "propductCategories",
    multiple: true,
    name: 'categories_id',
    ourCategory: null,
    select: select,
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Select"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "image",
    title: "\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "file",
    idName: "productFiles",
    name: "image",
    change: change,
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["File"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.image
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "option",
    title: "\u041E\u043F\u0446\u0438\u0438"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], {
    title: 'Значение',
    name: "option",
    product: product,
    options: options,
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["optionMultiple"],
    type: "select"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setFetching(true);
    },
    type: "submit",
    className: "btn btn-primary",
    disabled: submitting
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.edit.button, " ", isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }) : null), errSer === null && submitSucceeded && isFetching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: 'success'
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.edit.success));
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
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/images/loading.svg */ "./resources/js/assets/images/loading.svg");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Validator_Validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Validator/Validate */ "./resources/js/components/Admin/Products/Validator/Validate.js");
/* harmony import */ var _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/FormsControls/FormControls */ "./resources/js/components/common/FormsControls/FormControls.js");
/* harmony import */ var react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Tabs */ "./node_modules/react-bootstrap/esm/Tabs.js");
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Tab */ "./node_modules/react-bootstrap/esm/Tab.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var ProductNew = function ProductNew(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products["new"].title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProductNewReduxForm, {
    errSer: props.error,
    onSubmit: props.addProduct,
    select: props.select
  })));
};

var ProductNewForm = function ProductNewForm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFetching = _useState2[0],
      setFetching = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('general'),
      _useState4 = _slicedToArray(_useState3, 2),
      key = _useState4[0],
      setKey = _useState4[1];

  var handleSubmit = props.handleSubmit,
      pristine = props.pristine,
      reset = props.reset,
      submitting = props.submitting,
      errSer = props.errSer,
      submitSucceeded = props.submitSucceeded,
      submitFailed = props.submitFailed,
      change = props.change,
      select = props.select,
      options = props.options;
  submitSucceeded || submitFailed || errSer ? setTimeout(function () {
    setFetching(false);
  }, 3000) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "controlled-tab-example",
    activeKey: key,
    onSelect: function onSelect(k) {
      return setKey(k);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "general",
    title: "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productName",
    name: "name",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.article), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productArticle",
    name: "article",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.article
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "textarea",
    idName: "productDetail",
    name: "detail",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Textarea"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.description
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.property), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "textarea",
    idName: "productProperty",
    name: "property",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Textarea"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.property
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "form-check-label",
    htmlFor: "productNovelty"
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.novelty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "checkbox",
    idName: "productNovelty",
    name: "novelty",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Checkbox"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.novelty
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "form-check-label",
    htmlFor: "productPopular"
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.popular), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "checkbox",
    idName: "productPopular",
    name: "popular",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Checkbox"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.popular
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "price",
    title: "\u0426\u0435\u043D\u0430"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productPrice",
    name: 'price',
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.min), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productMin",
    name: 'min',
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.min
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price_second), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productPriceSecond",
    name: 'price_second',
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price_second
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.min_second), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productMinSecond",
    name: 'min_second',
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.min_second
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price_third), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productPriceThird",
    name: 'price_third',
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price_third
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.min_third), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productMinThird",
    name: 'min_third',
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.min_third
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price_quarterly), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productPriceQuarterly",
    name: 'price_quarterly',
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.price_quarterly
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.min_quarterly), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "productMinQuarterly",
    name: 'min_quarterly',
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.min_quarterly
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "category",
    title: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.categories), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "select-multiple",
    idName: "propductCategories",
    multiple: true,
    name: 'categories_id',
    ourCategory: null,
    select: select,
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Select"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "image",
    title: "\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "file",
    idName: "productFiles",
    name: "image",
    change: change,
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["File"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.table.image
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "option",
    title: "\u041E\u043F\u0446\u0438\u0438"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], {
    title: 'Значение',
    name: "option",
    options: options,
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["optionMultiple"],
    type: "select"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setFetching(true);
    },
    type: "submit",
    className: "btn btn-primary",
    disabled: submitting
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.edit.button, " ", isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }) : null), errSer === null && submitSucceeded && isFetching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: 'success'
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.products.edit.success));
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.products.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    className: "thead-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.products.table.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.products.table.image), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.products.table.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.products.table.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.products.table.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.products.table.action))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, props.products ? props.products.map(function (p, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Product__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onDelete: props.onDelete,
      page: props.page,
      url: props.url,
      product: p,
      key: index
    });
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
/* harmony import */ var _common_Paginator_Paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Paginator/Paginator */ "./resources/js/components/common/Paginator/Paginator.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _redux_products_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../redux/products-reducer */ "./resources/js/redux/products-reducer.js");
/* harmony import */ var _redux_product_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../redux/product-selectors */ "./resources/js/redux/product-selectors.js");
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

    _defineProperty(_assertThisInitialized(_this), "onGetPageProducts", function (e) {
      var page = e.target.getAttribute('page');

      _this.props.getProducts(page);
    });

    _defineProperty(_assertThisInitialized(_this), "onDelete", function (e) {
      var elementId = e.currentTarget.getAttribute('data-element');

      _this.props.deleteProduct(elementId);
    });

    return _this;
  }

  _createClass(ProductsContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getProducts(1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var product = !this.props.match.params.slug ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Products__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onDelete: this.onDelete,
        page: this.props.match.params.page,
        url: this.props.match.url,
        products: this.props.products
      }) : this.props.match.params.slug === 'edit' && this.props.match.params.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductEdit_ProductEdit__WEBPACK_IMPORTED_MODULE_2__["default"], {
        options: this.props.options,
        select: this.props.select,
        error: this.props.error,
        editProduct: this.onEditSubmit,
        product: this.props.products ? this.props.products.filter(function (item) {
          return item.product_id == _this2.props.match.params.id;
        }) : null
      }) : this.props.match.params.slug === 'add' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductNew_ProductNew__WEBPACK_IMPORTED_MODULE_3__["default"], {
        options: this.props.options,
        select: this.props.select,
        error: this.props.error,
        addProduct: this.onAddSubmit
      }) : null;
      var paginator = this.props.paginator.total_page > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Paginator_Paginator__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onGetPage: this.onGetPageProducts,
        paginator: this.props.paginator
      }) : null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.props.products.length >= 0 && product, !this.props.match.params.slug && paginator);
    }
  }]);

  return ProductsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: Object(_redux_product_selectors__WEBPACK_IMPORTED_MODULE_9__["getProductsSelectors"])(state),
    paginator: Object(_redux_product_selectors__WEBPACK_IMPORTED_MODULE_9__["getPaginatorSelector"])(state),
    select: Object(_redux_product_selectors__WEBPACK_IMPORTED_MODULE_9__["getSelectSelector"])(state),
    options: Object(_redux_product_selectors__WEBPACK_IMPORTED_MODULE_9__["getOptionsSelector"])(state),
    error: Object(_redux_product_selectors__WEBPACK_IMPORTED_MODULE_9__["getErrorSelector"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_6__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  getProducts: _redux_products_reducer__WEBPACK_IMPORTED_MODULE_8__["getProducts"],
  addProduct: _redux_products_reducer__WEBPACK_IMPORTED_MODULE_8__["addProduct"],
  editProduct: _redux_products_reducer__WEBPACK_IMPORTED_MODULE_8__["editProduct"],
  deleteProduct: _redux_products_reducer__WEBPACK_IMPORTED_MODULE_8__["deleteProduct"]
}), react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(ProductsContainer));

/***/ }),

/***/ "./resources/js/components/Admin/Settings/SettingsContainer.js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/SettingsContainer.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_settings_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/settings-reducer */ "./resources/js/redux/settings-reducer.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Settings_SettingsForm_SettingsForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Settings/SettingsForm/SettingsForm */ "./resources/js/components/Admin/Settings/SettingsForm/SettingsForm.js");
/* harmony import */ var _redux_settings_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/settings-selectors */ "./resources/js/redux/settings-selectors.js");
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









var SettingsContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(SettingsContainer, _React$Component);

  var _super = _createSuper(SettingsContainer);

  function SettingsContainer(props) {
    var _this;

    _classCallCheck(this, SettingsContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onEditSubmit", function (formData) {
      _this.props.editSettings(formData);
    });

    return _this;
  }

  _createClass(SettingsContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getSettings();
    }
  }, {
    key: "render",
    value: function render() {
      var settings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Settings_SettingsForm_SettingsForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        error: this.props.error,
        editSettings: this.onEditSubmit,
        settings: this.props.settings
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, settings);
    }
  }]);

  return SettingsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    settings: Object(_redux_settings_selectors__WEBPACK_IMPORTED_MODULE_6__["getSettingsSelectors"])(state),
    error: Object(_redux_settings_selectors__WEBPACK_IMPORTED_MODULE_6__["getErrorSelector"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getSettings: _redux_settings_reducer__WEBPACK_IMPORTED_MODULE_3__["getSettings"],
  editSettings: _redux_settings_reducer__WEBPACK_IMPORTED_MODULE_3__["editSettings"]
}), react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(SettingsContainer));

/***/ }),

/***/ "./resources/js/components/Admin/Settings/SettingsForm/SettingsForm.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/SettingsForm/SettingsForm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Language */ "./resources/js/components/Admin/Language.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/images/loading.svg */ "./resources/js/assets/images/loading.svg");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/FormsControls/FormControls */ "./resources/js/components/common/FormsControls/FormControls.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




 //import Validator from "../Validator/Validate.js";




var Settings = function Settings(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SettingsReduxForm, {
    errSer: props.error,
    initialValues: props.settings[0],
    onSubmit: props.editSettings
  })));
};

var SettingsForm = function SettingsForm(props) {
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
  }, 2000) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    id: "settingsForm",
    onSubmit: handleSubmit,
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "settingsPhone",
    name: "phone",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_4__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.phone
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "settingsEmail",
    name: "email",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_4__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.email
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.worktime), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "settingsWorktime",
    name: "worktime",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_4__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.worktime
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.phone_manager), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "settingsPhoneManager",
    name: "phone_manager",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_4__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.phone_manager
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.manager_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "settingsManagerName",
    name: "manager_name",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_4__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.manager_name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.manager_email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "settingsManagerEmail",
    name: "manager_email",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_4__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.manager_email
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.youtube), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "settingsYoutube",
    name: "youtube",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_4__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.youtube
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.facebook), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "settingsFacebook",
    name: "facebook",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_4__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.facebook
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.vk), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "settingsVk",
    name: "vk",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_4__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.vk
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.instagram), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "settingsInstagram",
    name: "instagram",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_4__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.instagram
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.from), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "settingsFrom",
    name: "from",
    showTime: false,
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_4__["renderDateTimePicker"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.from
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.to), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "settingsTo",
    name: "to",
    showTime: false,
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_4__["renderDateTimePicker"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.to
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setFetching(true);
    },
    type: "submit",
    className: "btn btn-primary",
    disabled: submitting
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.button, " ", isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }) : null), errSer === null && submitSucceeded && isFetching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: 'success'
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.settings.success));
};

var SettingsReduxForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: "SettingsForm"
})(SettingsForm);
/* harmony default export */ __webpack_exports__["default"] = (Settings);

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
        var type = localStorage.getItem('type');

        _this.props.logout(type);
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "nav menu"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: "/admin/products"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "fa fa-tags"
      }, "\xA0"), " ", _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].sidebar.menu.products)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: "/admin/categories"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "fa fa-folder"
      }, "\xA0"), " ", _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].sidebar.menu.categories)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: "/admin/clientele"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "fa fa-user-circle"
      }, "\xA0"), " ", _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].sidebar.menu.clientele)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: "/admin/options"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "fa fa-filter"
      }, "\xA0"), " ", _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].sidebar.menu.options)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: "/admin/settings"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "fa fa-cog"
      }, "\xA0"), " ", _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].sidebar.menu.settings)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "logout",
        onClick: logoutBtnClicked
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "sidebar-collapse",
    className: "col-sm-3 col-lg-2 sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile-sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile-usertitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile-usertitle-name"
  }, props.currentUser), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile-usertitle-status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "indicator label-success"
  }), "Online")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "clear"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.company), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.addressK), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.addressP), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.inn), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.kpp), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.rs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.bik), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.client.ks), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onDelete: props.onDelete,
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
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/images/loading.svg */ "./resources/js/assets/images/loading.svg");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Validator_Validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Validator/Validate */ "./resources/js/components/Admin/Сlientele/Validator/Validate.js");
/* harmony import */ var _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/FormsControls/FormControls */ "./resources/js/components/common/FormsControls/FormControls.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var ClientEdit = function ClientEdit(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.edit.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClientEditReduxForm, {
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
  }, 2000) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientName",
    className: "form-control",
    name: "name",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    errSer: errSer,
    idName: "clientEmail",
    className: "form-control",
    name: "email",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.email
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientPhone",
    className: "form-control",
    name: "phone",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.phone
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.company), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientCompany",
    className: "form-control",
    name: "company",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.company
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.addressK), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAddressK",
    className: "form-control",
    name: "addressK",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.addressK
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.addressP), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAddressP",
    className: "form-control",
    name: "addressP",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.addressP
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.inn), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientInn",
    className: "form-control",
    name: "inn",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.inn
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.kpp), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientKpp",
    className: "form-control",
    name: "kpp",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.kpp
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.rs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientRs",
    className: "form-control",
    name: "rs",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.rs
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.bik), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientBik",
    className: "form-control",
    name: "bik",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.bik
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.ks), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientKs",
    className: "form-control",
    name: "ks",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.ks
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.password), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    idName: "clientPassword",
    className: "form-control",
    type: "password",
    name: "password",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.password
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.permission), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    id: "clientPermission",
    className: "form-control",
    name: "clientPermission",
    component: "select",
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.permission
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "ff0000"
  }, "Red"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "00ff00"
  }, "Green"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "0000ff"
  }, "Blue"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.role), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    id: "clientRole",
    className: "form-control",
    name: "clientRole",
    component: "select",
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.role
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "ff0000"
  }, "Red"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "00ff00"
  }, "Green"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "0000ff"
  }, "Blue"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setFetching(true);
    },
    type: "submit",
    className: "btn btn-primary"
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.edit.button, " ", isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }) : null), errSer === null && submitSucceeded && isFetching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'success'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.edit.success)));
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
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/images/loading.svg */ "./resources/js/assets/images/loading.svg");
/* harmony import */ var _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Validator_Validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Validator/Validate */ "./resources/js/components/Admin/Сlientele/Validator/Validate.js");
/* harmony import */ var _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/FormsControls/FormControls */ "./resources/js/components/common/FormsControls/FormControls.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var ClientNew = function ClientNew(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele["new"].title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClientNewReduxForm, {
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
  }, 2000) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientName",
    className: "form-control",
    name: "name",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    errSer: errSer,
    idName: "clientEmail",
    className: "form-control",
    name: "email",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.email
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientPhone",
    className: "form-control",
    name: "phone",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.phone
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.company), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientCompany",
    className: "form-control",
    name: "company",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.company
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.addressK), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAddressK",
    className: "form-control",
    name: "addressK",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.addressK
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.addressP), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientAddressP",
    className: "form-control",
    name: "addressP",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.addressP
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.inn), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientInn",
    className: "form-control",
    name: "inn",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.inn
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.kpp), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientKpp",
    className: "form-control",
    name: "kpp",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.kpp
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.rs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientRs",
    className: "form-control",
    name: "rs",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.rs
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.bik), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientBik",
    className: "form-control",
    name: "bik",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.bik
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.ks), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    idName: "clientKs",
    className: "form-control",
    name: "ks",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.ks
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.password), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    idName: "clientPassword",
    className: "form-control",
    type: "password",
    name: "password",
    component: _common_FormsControls_FormControls__WEBPACK_IMPORTED_MODULE_5__["Input"],
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.password
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.permission), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    id: "clientPermission",
    className: "form-control",
    name: "clientPermission",
    component: "select",
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.permission
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "ff0000"
  }, "Red"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "00ff00"
  }, "Green"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "0000ff"
  }, "Blue"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.role), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    id: "clientRole",
    className: "form-control",
    name: "clientRole",
    component: "select",
    label: _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele.table.role
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "ff0000"
  }, "Red"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "00ff00"
  }, "Green"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "0000ff"
  }, "Blue"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setFetching(true);
    },
    type: "submit",
    className: "btn btn-primary",
    disabled: submitting
  }, _Language__WEBPACK_IMPORTED_MODULE_1__["rus"].page.clientele["new"].button, " ", isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_loading_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }) : null), errSer === null && submitSucceeded && isFetching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    className: "thead-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.company), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.addressK), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.addressP), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.inn), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.kpp), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.rs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.bik), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.ks), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, _Language__WEBPACK_IMPORTED_MODULE_2__["rus"].page.clientele.table.action))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, props.clientele ? props.clientele.map(function (p, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Client__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onDelete: props.onDelete,
      page: props.page,
      url: props.url,
      client: p,
      key: index
    });
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ButtonsPanel_ButtonPanelContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
/* harmony import */ var _common_Paginator_Paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/Paginator/Paginator */ "./resources/js/components/common/Paginator/Paginator.jsx");
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

    _defineProperty(_assertThisInitialized(_this), "onGetPageClientele", function (e) {
      var page = e.target.getAttribute('page');

      _this.props.getClientele(page);
    });

    _defineProperty(_assertThisInitialized(_this), "onDelete", function (e) {
      var elementId = e.currentTarget.getAttribute('data-element');

      _this.props.deleteClient(elementId);
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

      var client = !this.props.match.params.slug ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Clientele__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onDelete: this.onDelete,
        page: this.props.match.params.page,
        url: this.props.match.url,
        clientele: this.props.clientele
      }) : this.props.match.params.slug === 'edit' && this.props.match.params.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ClientEdit_ClientEdit__WEBPACK_IMPORTED_MODULE_2__["default"], {
        error: this.props.error,
        editClient: this.onEditSubmit,
        client: this.props.clientele ? this.props.clientele.filter(function (item) {
          return item.id == _this2.props.match.params.id;
        }) : null
      }) : this.props.match.params.slug === 'add' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ClientNew_ClientNew__WEBPACK_IMPORTED_MODULE_3__["default"], {
        error: this.props.error,
        addClient: this.onAddSubmit
      }) : null;
      var paginator = this.props.paginator.total_page > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Paginator_Paginator__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onGetPage: this.onGetPageClientele,
        paginator: this.props.paginator
      }) : null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, client, !this.props.match.params.slug && paginator);
    }
  }]);

  return ClienteleContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    clientele: Object(_redux_clientele_selectors__WEBPACK_IMPORTED_MODULE_8__["getClienteleSelectors"])(state),
    paginator: Object(_redux_clientele_selectors__WEBPACK_IMPORTED_MODULE_8__["getPaginatorSelector"])(state),
    error: Object(_redux_clientele_selectors__WEBPACK_IMPORTED_MODULE_8__["getErrorSelector"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  getClientele: _redux_clientele_reducer__WEBPACK_IMPORTED_MODULE_7__["getClientele"],
  addClient: _redux_clientele_reducer__WEBPACK_IMPORTED_MODULE_7__["addClient"],
  editClient: _redux_clientele_reducer__WEBPACK_IMPORTED_MODULE_7__["editClient"],
  deleteClient: _redux_clientele_reducer__WEBPACK_IMPORTED_MODULE_7__["deleteClient"]
}), react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(ClienteleContainer));

/***/ }),

/***/ "./resources/js/components/Admin/Сlientele/Validator/Validate.js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Admin/Сlientele/Validator/Validate.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Language */ "./resources/js/components/Admin/Language.js");


var validate = function validate(values, allValues, props) {
  var errors = {};

  if (!values.name) {
    errors.name = _Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.name;
  }

  if (!values.email) {
    errors.email = _Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.email;
  }

  if (!values.phone) {
    errors.phone = _Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.phone;
  }

  if (allValues.form == 'OptionNew') {
    if (!values.password) {
      errors.password = _Language__WEBPACK_IMPORTED_MODULE_0__["rus"].page.clientele.error.password;
    }
  }

  return errors;
};

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn ".concat(props.type)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
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
    return b === "edit" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      to: "".concat(link)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: 'btn-success',
      icon: 'fa-pencil-square-o'
    }))) : b === 'delete' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index,
      "data-page": props.page,
      "data-element": props.elementId,
      onClick: props["delete"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: 'btn-danger',
      icon: 'fa-times'
    })) : b === 'add' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      to: "".concat(link)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: 'btn-primary',
      icon: 'fa-plus'
    }))) : null;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
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
/* harmony import */ var _ButtonPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ButtonPanel */ "./resources/js/components/common/ButtonsPanel/ButtonPanel.jsx");
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
        buttons: this.props.buttons,
        elementId: this.props.elementId,
        url: this.props.url,
        "delete": this.props.onDelete,
        page: this.props.page
      });
    }
  }]);

  return ButtonPanelContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.productsAdmin,
    clientele: state.clienteleAdmin,
    category: state.categoriesAdmin
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps))(ButtonPanelContainer));

/***/ }),

/***/ "./resources/js/components/common/Paginator/Items.jsx":
/*!************************************************************!*\
  !*** ./resources/js/components/common/Paginator/Items.jsx ***!
  \************************************************************/
/*! exports provided: Items, ItemPrev, ItemNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Items", function() { return Items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPrev", function() { return ItemPrev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemNext", function() { return ItemNext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Items = function Items(_ref) {
  var paginator = _ref.paginator,
      onGetPage = _ref.onGetPage,
      props = _ref.props;
  var elements = [];
  var prev = null;
  var next = null;
  var start = null;
  var end = null;

  if (paginator.total_page > 1) {
    prev = paginator.current_page - 1;
    next = paginator.total_page - paginator.current_page;
    if (prev < Math.floor(paginator.per_page / 2)) start = 1;else start = paginator.current_page - Math.floor(paginator.per_page / 2);
    end = start + paginator.per_page - 1;

    if (end > paginator.total_page) {
      start -= end - paginator.total_page;
      end = paginator.total_page;
      if (start < 1) start = 1;
    }
  }

  for (var i = start; i <= end; i++) {
    if (i === paginator.current_page) elements.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i,
      className: "page-item active"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      page: paginator.current_page,
      className: "page-link",
      href: "#"
    }, i)));else elements.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i,
      className: "page-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      onClick: onGetPage,
      page: i,
      className: "page-link",
      href: "#"
    }, i)));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, elements);
};
var ItemPrev = function ItemPrev(_ref2) {
  var paginator = _ref2.paginator,
      onGetPage = _ref2.onGetPage,
      props = _ref2.props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, paginator.current_page !== 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "page-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: onGetPage,
    page: paginator.current_page - 1,
    className: "page-link",
    href: "#"
  }, "\xAB")));
};
var ItemNext = function ItemNext(_ref3) {
  var paginator = _ref3.paginator,
      onGetPage = _ref3.onGetPage,
      props = _ref3.props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, paginator.current_page !== paginator.total_page && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "page-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: onGetPage,
    page: paginator.current_page + 1,
    className: "page-link",
    href: "#"
  }, "\xBB")));
};

/***/ }),

/***/ "./resources/js/components/common/Paginator/Paginator.jsx":
/*!****************************************************************!*\
  !*** ./resources/js/components/common/Paginator/Paginator.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Items */ "./resources/js/components/common/Paginator/Items.jsx");



var Paginator = function Paginator(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    "aria-label": "Page navigation example"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Items__WEBPACK_IMPORTED_MODULE_1__["ItemPrev"], props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Items__WEBPACK_IMPORTED_MODULE_1__["Items"], props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Items__WEBPACK_IMPORTED_MODULE_1__["ItemNext"], props))));
};

/* harmony default export */ __webpack_exports__["default"] = (Paginator);

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
        if (!this.props.isLoggedIn || this.props.permission !== "Admin") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          to: "/login"
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, this.props);
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

/***/ "./resources/js/redux/category-selectors.js":
/*!**************************************************!*\
  !*** ./resources/js/redux/category-selectors.js ***!
  \**************************************************/
/*! exports provided: getCategorySelectors, getErrorSelector, getPaginatorSelector, getSelectSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategorySelectors", function() { return getCategorySelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorSelector", function() { return getErrorSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaginatorSelector", function() { return getPaginatorSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectSelector", function() { return getSelectSelector; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getCategorySelectors = function getCategorySelectors(state) {
  return state.categoriesAdmin.categories;
};
var getErrorSelector = function getErrorSelector(state) {
  return state.categoriesAdmin.error;
};
var getPaginatorSelector = function getPaginatorSelector(state) {
  return state.categoriesAdmin.paginator;
};
var getSelectSelector = function getSelectSelector(state) {
  return state.categoriesAdmin.select;
};

/***/ }),

/***/ "./resources/js/redux/clientele-selectors.js":
/*!***************************************************!*\
  !*** ./resources/js/redux/clientele-selectors.js ***!
  \***************************************************/
/*! exports provided: getClienteleSelectors, getErrorSelector, getPaginatorSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClienteleSelectors", function() { return getClienteleSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorSelector", function() { return getErrorSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaginatorSelector", function() { return getPaginatorSelector; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getClienteleSelectors = function getClienteleSelectors(state) {
  return state.clienteleAdmin.clientele;
};
var getErrorSelector = function getErrorSelector(state) {
  return state.clienteleAdmin.error;
};
var getPaginatorSelector = function getPaginatorSelector(state) {
  return state.clienteleAdmin.paginator;
};

/***/ }),

/***/ "./resources/js/redux/option-selectors.js":
/*!************************************************!*\
  !*** ./resources/js/redux/option-selectors.js ***!
  \************************************************/
/*! exports provided: getOptionsSelectors, getErrorSelector, getPaginatorSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionsSelectors", function() { return getOptionsSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorSelector", function() { return getErrorSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaginatorSelector", function() { return getPaginatorSelector; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getOptionsSelectors = function getOptionsSelectors(state) {
  return state.optionsAdmin.options;
};
var getErrorSelector = function getErrorSelector(state) {
  return state.optionsAdmin.error;
};
var getPaginatorSelector = function getPaginatorSelector(state) {
  return state.optionsAdmin.paginator;
};

/***/ }),

/***/ "./resources/js/redux/product-selectors.js":
/*!*************************************************!*\
  !*** ./resources/js/redux/product-selectors.js ***!
  \*************************************************/
/*! exports provided: getProductsSelectors, getErrorSelector, getPaginatorSelector, getSelectSelector, getOptionsSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsSelectors", function() { return getProductsSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorSelector", function() { return getErrorSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaginatorSelector", function() { return getPaginatorSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectSelector", function() { return getSelectSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionsSelector", function() { return getOptionsSelector; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getProductsSelectors = function getProductsSelectors(state) {
  return state.productsAdmin.products;
};
var getErrorSelector = function getErrorSelector(state) {
  return state.productsAdmin.error;
};
var getPaginatorSelector = function getPaginatorSelector(state) {
  return state.productsAdmin.paginator;
};
var getSelectSelector = function getSelectSelector(state) {
  return state.productsAdmin.select;
};
var getOptionsSelector = function getOptionsSelector(state) {
  return state.productsAdmin.options;
};

/***/ }),

/***/ "./resources/js/redux/settings-selectors.js":
/*!**************************************************!*\
  !*** ./resources/js/redux/settings-selectors.js ***!
  \**************************************************/
/*! exports provided: getSettingsSelectors, getErrorSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettingsSelectors", function() { return getSettingsSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorSelector", function() { return getErrorSelector; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getSettingsSelectors = function getSettingsSelectors(state) {
  return state.settingsAdmin.settings;
};
var getErrorSelector = function getErrorSelector(state) {
  return state.settingsAdmin.error;
};

/***/ })

}]);