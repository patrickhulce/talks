'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var PropTypes = _interopDefault(require('prop-types'));
var theme = _interopDefault(require('mdx-deck/themes'));
var prismTheme = _interopDefault(require('react-syntax-highlighter/styles/prism/ghcolors'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var header = ["Futura PT", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Arial", "sans-serif"];
var code = ["Space Mono", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"];

var colors = {
  primary: "#4185fa",
  accent: "#ccc",
  success: "#37b635",
  warning: "#ec1818",
  white: '#fcfcfc',
  background: "#fcfcfc",
  backgroundAlt: "#4185fa",
  boxA: "rgba(64, 133, 255, 0.5)",
  boxB: "rgba(64, 133, 255, 0.7)",
  boxC: "rgba(64, 133, 255, 1)",
  ui: {
    border: "#ede7f3",
    bright: "#e0d6eb",
    light: "#f5f3f7",
    whisper: "#fbfafc"
  },
  code: {}
};

var FullCode = styled__default.div([], {
  width: '100vw',
  height: '100vh',
  textAlign: 'left',
  backgroundColor: colors.code.bg,
  '& pre': {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // needed to override inline styles from syntax highlighting
    margin: '0 !important',
    width: '100vw',
    height: '100vh'
  }
});

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translateX(-25%) translateY(-75%);\n\n  @media only screen and (min-width: 1024px) {\n    transform: translateX(-100%) translateY(-100%); // hack\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 15vw;\n\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  clip-path: polygon(0 0, 100% 0, 100% 0, 0% 100%);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 25vh;\n  width: 25vw;\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled__default.div(_templateObject());
var Layers = styled__default.div(_templateObject2());
var Layer = styled__default.div(_templateObject3());
var Center = styled__default.div(_templateObject4());
function Boxes(_ref) {
  var children = _ref.children,
      inverted = _ref.inverted;
  var layers = [colors.boxA, colors.boxB, colors.boxC];

  if (inverted) {
    layers = layers.reverse();
  }

  return React.createElement(Container, null, React.createElement(Layers, null, layers.map(function (color, index) {
    return React.createElement(Layer, {
      key: color,
      style: {
        top: "".concat((index === 1 ? -15 : -10) * index, "%"),
        left: "".concat((index === 1 ? -15 : -10) * index, "%"),
        backgroundColor: color
      }
    });
  })), React.createElement(Center, null, children));
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Center$1 = styled__default.div(_templateObject$1());

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  min-height: 50px;\n  min-width: 150px;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Svg = styled__default.svg(_templateObject$2());

function LogoBoxes(_ref) {
  var inverted = _ref.inverted;
  return React.createElement(Boxes, {
    inverted: inverted
  });
}
LogoBoxes.defaultProps = {
  inverted: false
};

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  height: 50vh;\n  color: ", ";\n  background-color: ", ";\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: column;\n  height: 50vh;\n\n  padding-left: 15vw;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column\n  align-items: center;\n  justify-content: space-between;\n  width: 100vw;\n  height: 100vh;\n  background-color: ", ";\n\n  align-items: flex-start;\n\n  h1 {\n    color: ", "\n    text-align: left;\n  }\n\n  h2 {\n    color: ", ";\n    font-weight: 400;\n    text-align: left;\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var Container$1 = styled__default.div(_templateObject$3(), colors.backgroundAlt, colors.background, colors.accent);
var CenteredHalf = styled__default(Center$1)(_templateObject2$1());
var ColoredBg = styled__default.div(_templateObject3$1(), colors.primary, colors.background);
function Main(_ref) {
  var children = _ref.children;
  return React.createElement(Container$1, null, React.createElement(CenteredHalf, null, children), React.createElement(ColoredBg, null));
}
Main.propTypes = {
  children: PropTypes.node.isRequired
};

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n\n  top: 0;\n  left: 0;\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6,\n      ul,\n      li,\n      p {\n        color: ", ";\n      }\n    "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  height: 100vh;\n  width: 100vw;\n\n  position: relative;\n  background-color: ", ";\n\n  h1 {\n    text-align: left;\n  }\n\n  h2 {\n    color: grey;\n    font-weight: 400;\n    text-align: left;\n  }\n\n  ", ";\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var Container$2 = styled__default(Center$1)(_templateObject$4(), function (props) {
  return props.inverted ? colors.backgroundAlt : colors.background;
}, function (props) {
  return props.inverted && styled.css(_templateObject2$2(), colors.background);
});
var LogoContainer = styled__default.div(_templateObject3$2());
function Section(_ref) {
  var children = _ref.children,
      inverted = _ref.inverted,
      rest = _objectWithoutProperties(_ref, ["children", "inverted"]);

  return React.createElement(Container$2, _extends({
    inverted: inverted
  }, rest), React.createElement(LogoContainer, null, React.createElement(LogoBoxes, {
    inverted: inverted
  })), children);
}

function SectionInverted(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(Section, _extends({
    inverted: true
  }, rest), children);
}

var chromeTheme = _objectSpread({}, theme, {
  font: header.join(','),
  monospace: code.join(','),
  transitionTimingFunction: 'linear',
  transitionDuration: '0s',
  colors: {
    background: colors.background,
    heading: colors.primary
  },
  blockquote: {
    color: colors.primary,
    paddingLeft: '2rem',
    borderLeft: "5px solid ".concat(colors.primary)
  },
  paragraph: {
    color: colors.primary
  },
  li: {
    color: colors.primary
  },
  prism: {
    style: prismTheme
  }
});

exports.default = chromeTheme;
exports.FullScreenCode = FullCode;
exports.Main = Main;
exports.Section = Section;
exports.SectionInverted = SectionInverted;
//# sourceMappingURL=chrome-theme.js.map
