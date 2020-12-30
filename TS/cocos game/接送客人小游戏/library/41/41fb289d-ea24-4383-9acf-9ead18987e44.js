System.register(["cc", "code-quality:cr", "./Car.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Car, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, CarManager;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

  function _reportPossibleCrUseOfCar(extras) {
    _reporterNs.report("Car", "./Car", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_CarJs) {
      Car = _CarJs.Car;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "41fb2id6iRDg5rPnq0YmH5E", "CarManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CarManager", CarManager = (_dec = ccclass("CarManager"), _dec2 = property({
        type: _crd && Car === void 0 ? (_reportPossibleCrUseOfCar({
          error: Error()
        }), Car) : Car
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(CarManager, _Component);

        function CarManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, CarManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CarManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "mainCar", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(CarManager, [{
          key: "resetCars",
          value: function resetCars(points) {
            if (points.length <= 0) {
              console.warn('There is no points in this map');
              return;
            }

            this._createMainerCar(points[0]);
          }
        }, {
          key: "controlMoving",
          value: function controlMoving() {
            var isRunning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (isRunning) {
              this.mainCar.startRunning();
            } else {
              this.mainCar.stopRunning();
            }
          }
        }, {
          key: "_createMainerCar",
          value: function _createMainerCar(point) {
            this.mainCar.setEntry(point);
          }
        }]);

        return CarManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2dhbWUvQ2FyTWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiQ2FyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ2FyTWFuYWdlciIsInR5cGUiLCJwb2ludHMiLCJsZW5ndGgiLCJjb25zb2xlIiwid2FybiIsIl9jcmVhdGVNYWluZXJDYXIiLCJpc1J1bm5pbmciLCJtYWluQ2FyIiwic3RhcnRSdW5uaW5nIiwic3RvcFJ1bm5pbmciLCJwb2ludCIsInNldEVudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7OztBQUNaQyxNQUFBQSxHLFVBQUFBLEc7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCSCxVLENBQXRCRyxPO0FBQVNDLE1BQUFBLFEsR0FBYUosVSxDQUFiSSxROzs0QkFHSkMsVSxXQURaRixPQUFPLENBQUMsWUFBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUNORSxRQUFBQSxJQUFJO0FBQUE7QUFBQTtBQURFLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FLUUMsTSxFQUFjO0FBQzNCLGdCQUFHQSxNQUFNLENBQUNDLE1BQVAsSUFBaUIsQ0FBcEIsRUFBc0I7QUFDbEJDLGNBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLGdDQUFiO0FBQ0E7QUFDSDs7QUFFRCxpQkFBS0MsZ0JBQUwsQ0FBc0JKLE1BQU0sQ0FBQyxDQUFELENBQTVCO0FBQ0g7OzswQ0FDcUM7QUFBQSxnQkFBakJLLFNBQWlCLHVFQUFMLElBQUs7O0FBQ2xDLGdCQUFHQSxTQUFILEVBQWE7QUFDVCxtQkFBS0MsT0FBTCxDQUFhQyxZQUFiO0FBQ0gsYUFGRCxNQUVNO0FBQ0YsbUJBQUtELE9BQUwsQ0FBYUUsV0FBYjtBQUNIO0FBQ0o7OzsyQ0FFd0JDLEssRUFBVztBQUNoQyxpQkFBS0gsT0FBTCxDQUFhSSxRQUFiLENBQXNCRCxLQUF0QjtBQUNIOzs7O1FBeEIyQmYsUzs7Ozs7aUJBSWQsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi9DYXJcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiQ2FyTWFuYWdlclwiKVxyXG5leHBvcnQgY2xhc3MgQ2FyTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6Q2FyXHJcbiAgICB9KVxyXG4gICAgbWFpbkNhcjpDYXIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyByZXNldENhcnMocG9pbnRzOk5vZGVbXSl7XHJcbiAgICAgICAgaWYocG9pbnRzLmxlbmd0aCA8PSAwKXtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGVyZSBpcyBubyBwb2ludHMgaW4gdGhpcyBtYXAnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlTWFpbmVyQ2FyKHBvaW50c1swXSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY29udHJvbE1vdmluZyhpc1J1bm5pbmcgPSB0cnVlKXtcclxuICAgICAgICBpZihpc1J1bm5pbmcpe1xyXG4gICAgICAgICAgICB0aGlzLm1haW5DYXIuc3RhcnRSdW5uaW5nKCk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW5DYXIuc3RvcFJ1bm5pbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlTWFpbmVyQ2FyKHBvaW50Ok5vZGUpe1xyXG4gICAgICAgIHRoaXMubWFpbkNhci5zZXRFbnRyeShwb2ludCk7XHJcbiAgICB9XHJcbn1cclxuIl19