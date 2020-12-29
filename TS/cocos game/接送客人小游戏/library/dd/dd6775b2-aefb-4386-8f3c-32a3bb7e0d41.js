System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _class2, _temp, _crd, ccclass, property, CustomEventListenerts;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "dd677WyrvtDho88MqO7fg1B", "CustomEventListener.ts", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CustomEventListenerts", CustomEventListenerts = (_dec = ccclass("CustomEventListenerts"), _dec(_class = (_temp = _class2 =
      /*#__PURE__*/
      function (_Component) {
        _inherits(CustomEventListenerts, _Component);

        function CustomEventListenerts() {
          _classCallCheck(this, CustomEventListenerts);

          return _possibleConstructorReturn(this, _getPrototypeOf(CustomEventListenerts).apply(this, arguments));
        }

        _createClass(CustomEventListenerts, null, [{
          key: "on",
          //事件的监听
          value: function on(eventName, cb, target) {
            if (this.handle[eventName]) {
              this.handle[eventName] = [];
            }

            var data = {
              func: cb,
              target: target
            };
            this.handle[eventName].push(data);
          } //取消监听

        }, {
          key: "off",
          value: function off(eventName, cb, target) {
            var list = this.handle[eventName];

            if (!list || list.length <= 0) {
              return;
            }

            for (var i = 0; i < list.length; i++) {
              var event = list[i];

              if (event.func === cb && !target === event.target) {
                list.splice(i, 1);
                break;
              }
            }
          } //事件的派发

        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(eventName) {
            var list = this.handle[eventName];

            if (!list || list.length <= 0) {
              return;
            }

            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            for (var i = 0; i < list.length; i++) {
              var event = list[i];
              event.func.apply(event.target, args);
            }
          }
        }]);

        return CustomEventListenerts;
      }(Component), _class2.handle = {}, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2RhdGEvQ3VzdG9tRXZlbnRMaXN0ZW5lci50cy50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ3VzdG9tRXZlbnRMaXN0ZW5lcnRzIiwiZXZlbnROYW1lIiwiY2IiLCJ0YXJnZXQiLCJoYW5kbGUiLCJkYXRhIiwiZnVuYyIsInB1c2giLCJsaXN0IiwibGVuZ3RoIiwiaSIsImV2ZW50Iiwic3BsaWNlIiwiYXJncyIsImFwcGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7Ozs7O0FBQ2JDLE1BQUFBLE8sR0FBc0JGLFUsQ0FBdEJFLE87QUFBU0MsTUFBQUEsUSxHQUFhSCxVLENBQWJHLFE7O3VDQVlKQyxxQixXQURaRixPQUFPLENBQUMsdUJBQUQsQzs7Ozs7Ozs7Ozs7OztBQUlKOzZCQUNpQkcsUyxFQUFpQkMsRSxFQUFZQyxNLEVBQVc7QUFDckQsZ0JBQUcsS0FBS0MsTUFBTCxDQUFZSCxTQUFaLENBQUgsRUFBMEI7QUFDdEIsbUJBQUtHLE1BQUwsQ0FBWUgsU0FBWixJQUF5QixFQUF6QjtBQUNIOztBQUVELGdCQUFNSSxJQUFjLEdBQUc7QUFBQ0MsY0FBQUEsSUFBSSxFQUFDSixFQUFOO0FBQVVDLGNBQUFBLE1BQU0sRUFBTkE7QUFBVixhQUF2QjtBQUNBLGlCQUFLQyxNQUFMLENBQVlILFNBQVosRUFBdUJNLElBQXZCLENBQTRCRixJQUE1QjtBQUNILFcsQ0FDRDs7Ozs4QkFDa0JKLFMsRUFBaUJDLEUsRUFBWUMsTSxFQUFZO0FBQ3ZELGdCQUFNSyxJQUFJLEdBQUcsS0FBS0osTUFBTCxDQUFZSCxTQUFaLENBQWI7O0FBQ0EsZ0JBQUcsQ0FBQ08sSUFBRCxJQUFTQSxJQUFJLENBQUNDLE1BQUwsSUFBZSxDQUEzQixFQUE2QjtBQUN6QjtBQUNIOztBQUVELGlCQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ0YsSUFBSSxDQUFDQyxNQUFuQixFQUEwQkMsQ0FBQyxFQUEzQixFQUE4QjtBQUMxQixrQkFBTUMsS0FBSyxHQUFHSCxJQUFJLENBQUNFLENBQUQsQ0FBbEI7O0FBQ0Esa0JBQUdDLEtBQUssQ0FBQ0wsSUFBTixLQUFlSixFQUFmLElBQXNCLENBQUNDLE1BQUQsS0FBWVEsS0FBSyxDQUFDUixNQUEzQyxFQUFtRDtBQUMvQ0ssZ0JBQUFBLElBQUksQ0FBQ0ksTUFBTCxDQUFZRixDQUFaLEVBQWMsQ0FBZDtBQUNBO0FBQ0g7QUFDSjtBQUNKLFcsQ0FDRDs7Ozt3Q0FDNkJULFMsRUFBNkI7QUFDdEQsZ0JBQU1PLElBQUksR0FBRyxLQUFLSixNQUFMLENBQVlILFNBQVosQ0FBYjs7QUFDQSxnQkFBRyxDQUFDTyxJQUFELElBQVNBLElBQUksQ0FBQ0MsTUFBTCxJQUFlLENBQTNCLEVBQTZCO0FBQ3pCO0FBQ0g7O0FBSnFELDhDQUFUSSxJQUFTO0FBQVRBLGNBQUFBLElBQVM7QUFBQTs7QUFNdEQsaUJBQUksSUFBSUgsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDRixJQUFJLENBQUNDLE1BQW5CLEVBQTBCQyxDQUFDLEVBQTNCLEVBQThCO0FBQzFCLGtCQUFNQyxLQUFLLEdBQUdILElBQUksQ0FBQ0UsQ0FBRCxDQUFsQjtBQUNBQyxjQUFBQSxLQUFLLENBQUNMLElBQU4sQ0FBV1EsS0FBWCxDQUFpQkgsS0FBSyxDQUFDUixNQUF2QixFQUE4QlUsSUFBOUI7QUFDSDtBQUNKOzs7O1FBdENzQ2hCLFMsV0FDekJPLE0sR0FBaUIsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuaW50ZXJmYWNlIElFdmVuRGF0YXtcclxuICAgIGZ1bmM6IEZ1bmN0aW9uO1xyXG4gICAgdGFyZ2V0OmFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElFdmVudHtcclxuICAgIFtldmVudE5hbWU6c3RyaW5nXTpJRXZlbkRhdGFbXTtcclxufVxyXG5cclxuQGNjY2xhc3MoXCJDdXN0b21FdmVudExpc3RlbmVydHNcIilcclxuZXhwb3J0IGNsYXNzIEN1c3RvbUV2ZW50TGlzdGVuZXJ0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGhhbmRsZTogSUV2ZW50ID0ge307XHJcblxyXG4gICAgLy/kuovku7bnmoTnm5HlkKxcclxuICAgIHB1YmxpYyBzdGF0aWMgb24oZXZlbnROYW1lOnN0cmluZyxjYjpGdW5jdGlvbix0YXJnZXQ6YW55KXtcclxuICAgICAgICBpZih0aGlzLmhhbmRsZVtldmVudE5hbWVdKXtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVbZXZlbnROYW1lXSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0YTpJRXZlbkRhdGEgPSB7ZnVuYzpjYiAsdGFyZ2V0fTtcclxuICAgICAgICB0aGlzLmhhbmRsZVtldmVudE5hbWVdLnB1c2goZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvL+WPlua2iOebkeWQrFxyXG4gICAgcHVibGljIHN0YXRpYyBvZmYoZXZlbnROYW1lOnN0cmluZyxjYjpGdW5jdGlvbix0YXJnZXQ/OmFueSl7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuaGFuZGxlW2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYoIWxpc3QgfHwgbGlzdC5sZW5ndGggPD0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihldmVudC5mdW5jID09PSBjYiAmJiAoIXRhcmdldCA9PT0gZXZlbnQudGFyZ2V0KSl7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+S6i+S7tueahOa0vuWPkVxyXG4gICAgcHVibGljIHN0YXRpYyBkaXNwYXRjaEV2ZW50IChldmVudE5hbWU6c3RyaW5nLC4uLmFyZ3M6YW55KXtcclxuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5oYW5kbGVbZXZlbnROYW1lXTtcclxuICAgICAgICBpZighbGlzdCB8fCBsaXN0Lmxlbmd0aCA8PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxsaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgIGV2ZW50LmZ1bmMuYXBwbHkoZXZlbnQudGFyZ2V0LGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=