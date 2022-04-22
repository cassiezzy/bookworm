"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
} // 1. Common framework: header footer
// header


var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
        className: "shortcut"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w"
      }, /*#__PURE__*/React.createElement("div", {
        className: "fl"
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Welcome to Bookworm! \xA0"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/login"
      }, "Please log in | \xA0")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/login"
      }, "Sign up for free")))), /*#__PURE__*/React.createElement("div", {
        className: "fr"
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/homepage"
      }, "Homepage")), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/order"
      }, "My Orders")), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/addbook"
      }, "Sell a book")), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "Contact us")), /*#__PURE__*/React.createElement("li", null))))), /*#__PURE__*/React.createElement("header", {
        class: "header w"
      }, /*#__PURE__*/React.createElement("div", {
        class: "logo"
      }, /*#__PURE__*/React.createElement("img", {
        src: "images/logo.png",
        width: "160%",
        onClick: this.props.showHomePage
      })), /*#__PURE__*/React.createElement("div", {
        class: "search"
      }, /*#__PURE__*/React.createElement("input", {
        type: "search",
        name: "",
        id: "",
        placeholder: "Title/ Course/ Author"
      }), /*#__PURE__*/React.createElement("button", null, "Search")), /*#__PURE__*/React.createElement("div", {
        class: "hotwords"
      }, /*#__PURE__*/React.createElement("a", {
        href: "#",
        class: "style_red"
      }, "Discounts"), /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Daily Vouchers"), /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Computing"), /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Engineering"), /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Architecture"), /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Literature")), /*#__PURE__*/React.createElement("div", {
        class: "shopcar"
      }, /*#__PURE__*/React.createElement("img", {
        src: "images/cart.png",
        width: "20px",
        height: "20px"
      }), /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "  My shopping cart"), /*#__PURE__*/React.createElement("i", {
        class: "count"
      }, "3"))));
    }
  }]);

  return Header;
}(React.Component); // footer


var Footer = /*#__PURE__*/function (_React$Component2) {
  _inherits(Footer, _React$Component2);

  var _super2 = _createSuper(Footer);

  function Footer() {
    _classCallCheck(this, Footer);

    return _super2.apply(this, arguments);
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("footer", {
        className: "footer"
      }, /*#__PURE__*/React.createElement("div", {
        class: "mod_help"
      }, /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, "ORGANIZATION"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "About us")), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "Terms")), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "Privacy")), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "Ad Preferences")), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "Help"))), /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, "WORK WITH US"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "Authors")), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "Advertise")), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "Ads blog")), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "API"))), /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, "CONNECT"), /*#__PURE__*/React.createElement("dd", null), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("img", {
        src: "images/follow.png",
        width: "60%"
      })))));
    }
  }]);

  return Footer;
}(React.Component); // 2. Homepage


var divStyle = {
  display: 'none'
};

var HP_Nav = /*#__PURE__*/function (_React$Component3) {
  _inherits(HP_Nav, _React$Component3);

  var _super3 = _createSuper(HP_Nav);

  function HP_Nav() {
    _classCallCheck(this, HP_Nav);

    return _super3.apply(this, arguments);
  }

  _createClass(HP_Nav, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("nav", {
        class: "nav"
      }, /*#__PURE__*/React.createElement("div", {
        class: "w"
      }, /*#__PURE__*/React.createElement("div", {
        class: "dropdown"
      }, /*#__PURE__*/React.createElement("div", {
        class: "dt"
      }, " All textbook genres"), /*#__PURE__*/React.createElement("div", {
        class: "dd",
        style: divStyle
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Art"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Biography"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Business"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Computing"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "History"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Law"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Mathematics"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Medicine"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Music"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Poetry"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Psychology"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Romance"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Science"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Sports"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "More genres"), " ")))), /*#__PURE__*/React.createElement("div", {
        class: "navitems"
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Faculty of Sciences")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Faculty of Engineering")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "School of Computing")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "More Falculties"))))));
    }
  }]);

  return HP_Nav;
}(React.Component);

var HP_Main = /*#__PURE__*/function (_React$Component4) {
  _inherits(HP_Main, _React$Component4);

  var _super4 = _createSuper(HP_Main);

  function HP_Main() {
    _classCallCheck(this, HP_Main);

    return _super4.apply(this, arguments);
  }

  _createClass(HP_Main, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        class: "w"
      }, /*#__PURE__*/React.createElement("div", {
        class: "main"
      }, /*#__PURE__*/React.createElement("div", {
        class: "focus"
      }, /*#__PURE__*/React.createElement("a", {
        href: "",
        class: "left-arrow"
      }), /*#__PURE__*/React.createElement("a", {
        href: "",
        class: "right-arrow"
      }), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
        src: "images/1.png",
        alt: "",
        width: "100%",
        height: "450px"
      }))), /*#__PURE__*/React.createElement("ul", {
        class: "circle"
      }, /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", {
        class: "current"
      }), /*#__PURE__*/React.createElement("li", null))), /*#__PURE__*/React.createElement("div", {
        class: "newsflash"
      }, /*#__PURE__*/React.createElement("div", {
        class: "news"
      }, /*#__PURE__*/React.createElement("div", {
        class: "news-hd"
      }, /*#__PURE__*/React.createElement("h5", null, "News"), /*#__PURE__*/React.createElement("a", {
        href: "",
        class: "more"
      }, "More")), /*#__PURE__*/React.createElement("div", {
        class: "news-bd"
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, /*#__PURE__*/React.createElement("strong", null, "[Hot]"), " Get ready to new semester sale!")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, /*#__PURE__*/React.createElement("strong", null, "[Hot]"), " Come and get daily cashback up to 10%!")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, /*#__PURE__*/React.createElement("strong", null, "[Hot]"), " What are your friends reading?")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, /*#__PURE__*/React.createElement("strong", null, "[Hot]"), " Best Computing textbooks")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, /*#__PURE__*/React.createElement("strong", null, "[Hot]"), " Best MERN stack textbooks"))))), /*#__PURE__*/React.createElement("div", {
        class: "news"
      }, /*#__PURE__*/React.createElement("div", {
        class: "news-hd"
      }, /*#__PURE__*/React.createElement("h5", null, "Top Reviews")), /*#__PURE__*/React.createElement("div", {
        class: "news-bd"
      }, /*#__PURE__*/React.createElement("img", {
        src: "images/ad1.jpeg",
        alt: "",
        width: "100%"
      })), /*#__PURE__*/React.createElement("div", {
        class: "news-bd"
      }, /*#__PURE__*/React.createElement("img", {
        src: "images/ad3.jpeg",
        alt: "",
        width: "100%"
      }))), /*#__PURE__*/React.createElement("div", {
        class: "bargain"
      }, /*#__PURE__*/React.createElement("img", {
        src: "images/bargain.png",
        alt: ""
      })))));
    }
  }]);

  return HP_Main;
}(React.Component);

var HP_Rec = /*#__PURE__*/function (_React$Component5) {
  _inherits(HP_Rec, _React$Component5);

  var _super5 = _createSuper(HP_Rec);

  function HP_Rec() {
    _classCallCheck(this, HP_Rec);

    return _super5.apply(this, arguments);
  }

  _createClass(HP_Rec, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        class: "w recom"
      }, /*#__PURE__*/React.createElement("div", {
        class: "recom_hd"
      }, /*#__PURE__*/React.createElement("img", {
        src: "images/recom.png",
        alt: "",
        weight: "180px",
        height: "180px"
      })), /*#__PURE__*/React.createElement("div", {
        class: "recom_bd"
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
        src: "images/book1.jpeg",
        alt: "",
        height: "100%"
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
        src: "images/book2.jpeg",
        alt: "",
        height: "100%"
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
        src: "images/book3.jpeg",
        alt: "",
        height: "100%"
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
        src: "images/book4.jpeg",
        alt: "",
        height: "100%"
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
        src: "images/book5.jpeg",
        alt: "",
        height: "100%"
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
        src: "images/book6.jpeg",
        alt: "",
        height: "100%"
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
        src: "images/book7.png",
        alt: "",
        height: "100%"
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
        src: "images/book8.jpeg",
        alt: "",
        height: "100%"
      })))));
    }
  }]);

  return HP_Rec;
}(React.Component);

var Homepage = /*#__PURE__*/function (_React$Component6) {
  _inherits(Homepage, _React$Component6);

  var _super6 = _createSuper(Homepage);

  function Homepage() {
    _classCallCheck(this, Homepage);

    return _super6.apply(this, arguments);
  }

  _createClass(Homepage, [{
    key: "render",
    value: function render() {
      // const display = this.props.display;
      return (
        /*#__PURE__*/
        // display &&
        React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(HP_Nav, null), /*#__PURE__*/React.createElement(HP_Main, null), /*#__PURE__*/React.createElement(HP_Rec, null), /*#__PURE__*/React.createElement(Footer, null))
      );
    }
  }]);

  return Homepage;
}(React.Component); // 3. Sign up Page
// 4. Login Page


var Login = /*#__PURE__*/function (_React$Component7) {
  _inherits(Login, _React$Component7);

  var _super7 = _createSuper(Login);

  function Login() {
    _classCallCheck(this, Login);

    return _super7.apply(this, arguments);
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      // const display = this.props.display;
      return (
        /*#__PURE__*/
        // display &&
        React.createElement("div", {
          class: "w"
        }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
          class: "logo"
        }, /*#__PURE__*/React.createElement("img", {
          src: "images/logo.png",
          alt: "",
          onClick: this.props.showHomePage
        }))), /*#__PURE__*/React.createElement("div", {
          className: "registerarea "
        }, /*#__PURE__*/React.createElement("h3", null, "New User Register", /*#__PURE__*/React.createElement("div", {
          className: "login"
        }, "Already have an account?", /*#__PURE__*/React.createElement("a", {
          href: ""
        }, " Sign in"))), /*#__PURE__*/React.createElement("div", {
          className: "reg-form",
          onSubmit: this.handleSubmit
        }, /*#__PURE__*/React.createElement("form", {
          name: "register"
        }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", {
          for: ""
        }, "Phone Number: "), " ", /*#__PURE__*/React.createElement("input", {
          type: "text",
          className: "inp"
        }), /*#__PURE__*/React.createElement("span", {
          className: "error"
        }, /*#__PURE__*/React.createElement("i", {
          className: "error_icon"
        }), "Phone number format is not correct")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", {
          for: ""
        }, "OTP: "), " ", /*#__PURE__*/React.createElement("input", {
          type: "text",
          className: "inp"
        }), /*#__PURE__*/React.createElement("span", {
          className: "success"
        }, /*#__PURE__*/React.createElement("i", {
          className: "success_icon"
        }), "OTP is correct")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", {
          for: ""
        }, "Password: "), " ", /*#__PURE__*/React.createElement("input", {
          type: "password",
          className: "inp"
        }), /*#__PURE__*/React.createElement("span", {
          className: "error"
        }, /*#__PURE__*/React.createElement("i", {
          className: "error_icon"
        }), "Password format is not correct")), /*#__PURE__*/React.createElement("li", {
          className: "safe"
        }, "Password Strength ", /*#__PURE__*/React.createElement("em", {
          className: "ruo"
        }, "Weak"), " ", /*#__PURE__*/React.createElement("em", {
          className: "zhong"
        }, "Meidum"), " ", /*#__PURE__*/React.createElement("em", {
          class: "qiang"
        }, "Strong")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", {
          for: ""
        }, "Re-enter Password: "), " ", /*#__PURE__*/React.createElement("input", {
          type: "password",
          className: "inp"
        }), /*#__PURE__*/React.createElement("span", {
          className: "error"
        }, /*#__PURE__*/React.createElement("i", {
          className: "error_icon"
        }), "Password doesn't match")), /*#__PURE__*/React.createElement("li", {
          className: "agree"
        }, " ", /*#__PURE__*/React.createElement("input", {
          type: "checkbox"
        }), "  agree to our", /*#__PURE__*/React.createElement("a", {
          href: ""
        }, " Terms of Service")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("input", {
          type: "submit",
          value: "Register",
          className: "btn"
        })))))))
      );
    }
  }]);

  return Login;
}(React.Component); // 5. Book Detail Page


var Detail = /*#__PURE__*/function (_React$Component8) {
  _inherits(Detail, _React$Component8);

  var _super8 = _createSuper(Detail);

  function Detail() {
    _classCallCheck(this, Detail);

    return _super8.apply(this, arguments);
  }

  _createClass(Detail, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "de_container w"
      }, /*#__PURE__*/React.createElement("div", {
        className: "crumb_wrap"
      }, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "School of Computing"), " \u3009 ", /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Computer Science   "), " \u3009 ", /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "A balanced introduction to Computer Science   ")), /*#__PURE__*/React.createElement("div", {
        className: "product_intro clearfix"
      }, /*#__PURE__*/React.createElement("div", {
        className: "preview_wrap fl"
      }, /*#__PURE__*/React.createElement("div", {
        className: "preview_img"
      }, /*#__PURE__*/React.createElement("img", {
        className: "book_img",
        src: "images/book4.jpeg",
        alt: ""
      })), /*#__PURE__*/React.createElement("div", {
        className: "preview_list"
      }, /*#__PURE__*/React.createElement("a", {
        href: "#",
        className: "arrow_prev"
      }), /*#__PURE__*/React.createElement("a", {
        href: "#",
        className: "arrow_next"
      }), /*#__PURE__*/React.createElement("ul", {
        className: "list_item"
      }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
        src: "images/book4.jpeg",
        alt: ""
      })), /*#__PURE__*/React.createElement("li", {
        class: "current"
      }, /*#__PURE__*/React.createElement("img", {
        src: "images/book4.jpeg",
        alt: ""
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
        src: "images/book4.jpeg",
        alt: ""
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
        src: "images/book4.jpeg",
        alt: ""
      }))))), /*#__PURE__*/React.createElement("div", {
        class: "itemInfo_wrap fr"
      }, /*#__PURE__*/React.createElement("div", {
        className: "sku_name"
      }, "A balanced introduction to Computer Science"), /*#__PURE__*/React.createElement("div", {
        className: "sku_author"
      }, "By Reed, David"), /*#__PURE__*/React.createElement("div", {
        className: "summary"
      }, /*#__PURE__*/React.createElement("dl", {
        className: "summary_price"
      }, /*#__PURE__*/React.createElement("dt", null, "Price"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("i", {
        className: "price"
      }, "$15 "), /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "List Price: ", /*#__PURE__*/React.createElement("i", null, "$179.99")))), /*#__PURE__*/React.createElement("dl", {
        className: "summary_introduction"
      }, /*#__PURE__*/React.createElement("dt", null, "Preview"), /*#__PURE__*/React.createElement("dd", null, "A Balanced Introduction to Computer Science, This book is ideal for Introduction to Computing and the Web courses in departments of Math and Computer Science. This thoughtfully written text uses the Internet as a central theme, studying its history, technology, and current use. Experimental problems use Web-based tools, enabling students to learn programming fundamentals by developing their own interactive Web pages with HTML and JavaScript. Integrating breadth-based and depth-based chapters, Reed covers a broad range of topics balanced with programming depth in a hands-on, tutorial style.")), /*#__PURE__*/React.createElement("dl", {
        className: "summary_promotion"
      }, /*#__PURE__*/React.createElement("dt", null, "Promotion"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("em", null, "Sales!"), " Use coupon code: NEWSTART to get 10% off discount"))))));
    }
  }]);

  return Detail;
}(React.Component);

var Detailpage = /*#__PURE__*/function (_React$Component9) {
  _inherits(Detailpage, _React$Component9);

  var _super9 = _createSuper(Detailpage);

  function Detailpage() {
    _classCallCheck(this, Detailpage);

    return _super9.apply(this, arguments);
  }

  _createClass(Detailpage, [{
    key: "render",
    value: function render() {
      // const display = this.props.display;
      return (
        /*#__PURE__*/
        // display &&
        React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(HP_Nav, null), /*#__PURE__*/React.createElement(Detail, null), /*#__PURE__*/React.createElement(Footer, null))
      );
    }
  }]);

  return Detailpage;
}(React.Component); // 6. AddBook Page


var AddBook = /*#__PURE__*/function (_React$Component10) {
  _inherits(AddBook, _React$Component10);

  var _super10 = _createSuper(AddBook);

  function AddBook() {
    _classCallCheck(this, AddBook);

    return _super10.apply(this, arguments);
  }

  _createClass(AddBook, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "ab_container w"
      }, /*#__PURE__*/React.createElement("h1", null, " Add a new book"), /*#__PURE__*/React.createElement("form", {
        name: "bookToAdd",
        onSubmit: this.handleAdd
      }, /*#__PURE__*/React.createElement("p", null, "Name:  ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        id: "bk_name"
      })), /*#__PURE__*/React.createElement("p", null, "Edition:  ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        id: "bk_edition"
      })), /*#__PURE__*/React.createElement("p", null, "Author:  ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        id: "bk_author"
      })), /*#__PURE__*/React.createElement("p", null, "Year of publish:   ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        id: "bk_year"
      })), /*#__PURE__*/React.createElement("p", null, "Price:  ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        id: "bk_price"
      })), /*#__PURE__*/React.createElement("p", null, "Category:   ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        id: "bk_category"
      })), /*#__PURE__*/React.createElement("div", {
        className: "description"
      }, /*#__PURE__*/React.createElement("p", null, "Description: "), /*#__PURE__*/React.createElement("div", {
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        className: "bk_des",
        ref: "bk_des",
        contentEditable: "true"
      })), /*#__PURE__*/React.createElement("div", {
        className: "photo"
      }, /*#__PURE__*/React.createElement("p", null, "Post Photo:"), /*#__PURE__*/React.createElement("input", {
        type: "file"
      })), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("button", null, "Add")));
    }
  }]);

  return AddBook;
}(React.Component);

var AddBookPage = /*#__PURE__*/function (_React$Component11) {
  _inherits(AddBookPage, _React$Component11);

  var _super11 = _createSuper(AddBookPage);

  function AddBookPage() {
    _classCallCheck(this, AddBookPage);

    return _super11.apply(this, arguments);
  }

  _createClass(AddBookPage, [{
    key: "render",
    value: function render() {
      // const display = this.props.display;
      return (
        /*#__PURE__*/
        // display &&
        React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(AddBook, null), /*#__PURE__*/React.createElement(Footer, null))
      );
    }
  }]);

  return AddBookPage;
}(React.Component); // 7. My order page


function OrderRow(props) {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "1"), /*#__PURE__*/React.createElement("td", null, "Intro to Computer Science"), /*#__PURE__*/React.createElement("td", null, "01-01-2022"), /*#__PURE__*/React.createElement("td", null, "Delivered"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      window.location.href = "/#/review";
    }
  }, "Add a review"))); // const order = props.order;
  // return (
  //   <tr>
  //     <td>{order.id}</td>
  //     <td>{order.book}</td>
  //     <td>{order.date ? order.date.toDateString() : ''}</td>
  //     <td>{order.status}</td>
  //     <td>{order.review}</td>
  //   </tr>
  // );
}

function OrderTable(props) {
  // const orderRows = props.orders.map(order =>
  //   <OrderRow key={order.id} order={order} />
  // );
  return /*#__PURE__*/React.createElement("div", {
    className: "od_table_container"
  }, /*#__PURE__*/React.createElement("table", {
    className: "od_table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Book"), /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Review"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(OrderRow, null))));
}

var OrderPage = /*#__PURE__*/function (_React$Component12) {
  _inherits(OrderPage, _React$Component12);

  var _super12 = _createSuper(OrderPage);

  function OrderPage() {
    _classCallCheck(this, OrderPage);

    return _super12.apply(this, arguments);
  }

  _createClass(OrderPage, [{
    key: "render",
    value: function render() {
      // const display = this.props.display;
      return (
        /*#__PURE__*/
        // display &&
        React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
          className: "od_container w"
        }, /*#__PURE__*/React.createElement("h1", null, " My Orders"), /*#__PURE__*/React.createElement(OrderTable, null)), /*#__PURE__*/React.createElement(Footer, null))
      );
    }
  }]);

  return OrderPage;
}(React.Component); // 8. Review Page
// Star Component


function Star(_ref) {
  var marked = _ref.marked,
      starId = _ref.starId;
  return /*#__PURE__*/React.createElement("span", {
    "star-id": starId,
    style: {
      color: "#ff9933"
    },
    role: "button"
  }, marked ? "\u2605" : "\u2606");
} // Star Rating


function StarRating(props) {
  // rating display
  var _React$useState = React.useState(typeof props.rating == "number" ? props.rating : 0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      rating = _React$useState2[0],
      setRating = _React$useState2[1]; // hover setting


  var _React$useState3 = React.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selection = _React$useState4[0],
      setSelection = _React$useState4[1];

  var hoverOver = function hoverOver(event) {
    var val = 0;
    if (event && event.target && event.target.getAttribute("star-id")) val = event.target.getAttribute("star-id");
    setSelection(val);
  };

  return /*#__PURE__*/React.createElement("div", {
    // hover setting
    onMouseOut: function onMouseOut() {
      return hoverOver(null);
    } // click to choose rating
    ,
    onClick: function onClick(event) {
      return setRating(event.target.getAttribute("star-id") || rating);
    },
    onMouseOver: hoverOver
  }, Array.from({
    length: 5
  }, function (v, i) {
    return /*#__PURE__*/React.createElement(Star, {
      starId: i + 1,
      key: "star_".concat(i + 1, " "),
      marked: selection ? selection >= i + 1 : rating >= i + 1
    });
  }));
}

var Review = /*#__PURE__*/function (_React$Component13) {
  _inherits(Review, _React$Component13);

  var _super13 = _createSuper(Review);

  function Review() {
    _classCallCheck(this, Review);

    return _super13.apply(this, arguments);
  }

  _createClass(Review, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "r_container w"
      }, /*#__PURE__*/React.createElement("h1", null, " Write a Review"), /*#__PURE__*/React.createElement("form", {
        name: "reviewToAdd",
        onSubmit: this.handleAdd
      }, /*#__PURE__*/React.createElement("p", null, "Rate "), /*#__PURE__*/React.createElement(StarRating, null), /*#__PURE__*/React.createElement("p", null, "Comment "), /*#__PURE__*/React.createElement("div", {
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        className: "comment",
        ref: "comment_in",
        contentEditable: "true"
      }), /*#__PURE__*/React.createElement("div", {
        className: "photo"
      }, /*#__PURE__*/React.createElement("p", null, "Picture/Video(Optional)"), /*#__PURE__*/React.createElement("input", {
        type: "file"
      })), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("button", null, "Submit Review")));
    }
  }]);

  return Review;
}(React.Component);

var ReviewPage = /*#__PURE__*/function (_React$Component14) {
  _inherits(ReviewPage, _React$Component14);

  var _super14 = _createSuper(ReviewPage);

  function ReviewPage() {
    _classCallCheck(this, ReviewPage);

    return _super14.apply(this, arguments);
  }

  _createClass(ReviewPage, [{
    key: "render",
    value: function render() {
      // const display = this.props.display;
      return (
        /*#__PURE__*/
        // display &&
        React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Review, null), /*#__PURE__*/React.createElement(Footer, null))
      );
    }
  }]);

  return ReviewPage;
}(React.Component); // 9. System page


var Index = /*#__PURE__*/function (_React$Component15) {
  _inherits(Index, _React$Component15);

  var _super15 = _createSuper(Index);

  function Index() {
    _classCallCheck(this, Index);

    return _super15.call(this); // this.state = {
    //     diaplayStatus: { "homePage": true, 'detailPage': false, 'LoginPage': false }
    // };
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ReactRouterDOM.Switch, null, /*#__PURE__*/React.createElement(ReactRouterDOM.Redirect, {
        exact: true,
        from: "/",
        to: "/homepage"
      }), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
        path: "/homepage"
      }, /*#__PURE__*/React.createElement(Homepage, null)), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
        path: "/detail"
      }, /*#__PURE__*/React.createElement(Detailpage, null)), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
        path: "/login"
      }, /*#__PURE__*/React.createElement(Login, null)), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
        path: "/order"
      }, /*#__PURE__*/React.createElement(OrderPage, null)), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
        path: "/review"
      }, /*#__PURE__*/React.createElement(ReviewPage, null)), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
        path: "/addbook"
      }, /*#__PURE__*/React.createElement(AddBookPage, null))));
    }
  }]);

  return Index;
}(React.Component);

var element = /*#__PURE__*/React.createElement(ReactRouterDOM.HashRouter, null, /*#__PURE__*/React.createElement(Index, null));
ReactDOM.render(element, document.getElementById('content')); // ReactDOM.render(
//     <OrderPage />,
//     document.getElementById('content')
// );