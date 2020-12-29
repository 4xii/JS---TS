System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, Enum, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, ROAD_POINT_TYPE, ROAD_MOVE_TYPE, RoadPoint;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _dec8: void 0,
    _dec9: void 0,
    _dec10: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _descriptor8: void 0,
    _descriptor9: void 0,
    _temp: void 0,
    ROAD_POINT_TYPE: void 0,
    ROAD_MOVE_TYPE: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Enum = _cc.Enum;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "39f3elsNUxJJqstiiV9pr5V", "RoadPoint", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (ROAD_POINT_TYPE) {
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["NORMAL"] = 1] = "NORMAL";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["START"] = 2] = "START";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["GREETING"] = 3] = "GREETING";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["GOODBYE"] = 4] = "GOODBYE";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["END"] = 5] = "END";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["AI_START"] = 6] = "AI_START";
      })(ROAD_POINT_TYPE || (ROAD_POINT_TYPE = {}));

      Enum(ROAD_POINT_TYPE);

      (function (ROAD_MOVE_TYPE) {
        ROAD_MOVE_TYPE[ROAD_MOVE_TYPE["LINE"] = 1] = "LINE";
        ROAD_MOVE_TYPE[ROAD_MOVE_TYPE["CURVE"] = 2] = "CURVE";
      })(ROAD_MOVE_TYPE || (ROAD_MOVE_TYPE = {}));

      Enum(ROAD_MOVE_TYPE);

      _export("RoadPoint", RoadPoint = (_dec = ccclass("RoadPoint"), _dec2 = property({
        type: ROAD_POINT_TYPE,
        displayOrder: 1
      }), _dec3 = property({
        type: Node,
        displayOrder: 2,
        visible: function visible() {
          return this.type !== ROAD_POINT_TYPE.END;
        }
      }), _dec4 = property({
        type: ROAD_MOVE_TYPE,
        displayOrder: 3,
        visible: function visible() {
          return this.type !== ROAD_POINT_TYPE.END;
        }
      }), _dec5 = property({
        displayOrder: 4,
        visible: function visible() {
          return this.type !== ROAD_POINT_TYPE.END && this.moveType === ROAD_MOVE_TYPE.CURVE;
        }
      }), _dec6 = property({
        type: Vec3,
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.GREETING || this.type === ROAD_POINT_TYPE.GOODBYE;
        }
      }), _dec7 = property({
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec8 = property({
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec9 = property({
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec10 = property({
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(RoadPoint, _Component);

        function RoadPoint() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, RoadPoint);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RoadPoint)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "type", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nextStation", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "moveType", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "clockwise", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "direction", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "interval", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "delayTime", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "speed", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cars", _descriptor9, _assertThisInitialized(_this));

          return _this;
        }

        return RoadPoint;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ROAD_POINT_TYPE.NORMAL;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nextStation", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "moveType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ROAD_MOVE_TYPE.LINE;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "clockwise", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(1, 0, 0);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "interval", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "delayTime", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.05;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "cars", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '201';
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2dhbWUvUm9hZFBvaW50LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiVmVjMyIsIkVudW0iLCJjY2NsYXNzIiwicHJvcGVydHkiLCJST0FEX1BPSU5UX1RZUEUiLCJST0FEX01PVkVfVFlQRSIsIlJvYWRQb2ludCIsInR5cGUiLCJkaXNwbGF5T3JkZXIiLCJ2aXNpYmxlIiwiRU5EIiwibW92ZVR5cGUiLCJDVVJWRSIsIkdSRUVUSU5HIiwiR09PREJZRSIsIkFJX1NUQVJUIiwiTk9STUFMIiwiTElORSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSSxPQUFBQSxJOzs7Ozs7QUFDcENDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7O2lCQUVaQyxlO0FBQUFBLFFBQUFBLGUsQ0FBQUEsZTtBQUFBQSxRQUFBQSxlLENBQUFBLGU7QUFBQUEsUUFBQUEsZSxDQUFBQSxlO0FBQUFBLFFBQUFBLGUsQ0FBQUEsZTtBQUFBQSxRQUFBQSxlLENBQUFBLGU7QUFBQUEsUUFBQUEsZSxDQUFBQSxlO1NBQUFBLGUsS0FBQUEsZTs7QUFTTEgsTUFBQUEsSUFBSSxDQUFDRyxlQUFELENBQUo7O2lCQUVLQyxjO0FBQUFBLFFBQUFBLGMsQ0FBQUEsYztBQUFBQSxRQUFBQSxjLENBQUFBLGM7U0FBQUEsYyxLQUFBQSxjOztBQUtMSixNQUFBQSxJQUFJLENBQUNJLGNBQUQsQ0FBSjs7MkJBRWFDLFMsV0FEWkosT0FBTyxDQUFDLFdBQUQsQyxVQUVIQyxRQUFRLENBQUM7QUFDTkksUUFBQUEsSUFBSSxFQUFDSCxlQURDO0FBRU5JLFFBQUFBLFlBQVksRUFBQztBQUZQLE9BQUQsQyxVQU1STCxRQUFRLENBQUM7QUFDTkksUUFBQUEsSUFBSSxFQUFDUixJQURDO0FBRU5TLFFBQUFBLFlBQVksRUFBQyxDQUZQO0FBR05DLFFBQUFBLE9BQU8sRUFBQyxtQkFBeUI7QUFDN0IsaUJBQU8sS0FBS0YsSUFBTCxLQUFjSCxlQUFlLENBQUNNLEdBQXJDO0FBQ0g7QUFMSyxPQUFELEMsVUFTUlAsUUFBUSxDQUFDO0FBQ05JLFFBQUFBLElBQUksRUFBQ0YsY0FEQztBQUVORyxRQUFBQSxZQUFZLEVBQUMsQ0FGUDtBQUdOQyxRQUFBQSxPQUFPLEVBQUMsbUJBQXlCO0FBQzdCLGlCQUFPLEtBQUtGLElBQUwsS0FBY0gsZUFBZSxDQUFDTSxHQUFyQztBQUNIO0FBTEssT0FBRCxDLFVBU1JQLFFBQVEsQ0FBQztBQUNOSyxRQUFBQSxZQUFZLEVBQUMsQ0FEUDtBQUVOQyxRQUFBQSxPQUFPLEVBQUMsbUJBQXlCO0FBQzdCLGlCQUFPLEtBQUtGLElBQUwsS0FBY0gsZUFBZSxDQUFDTSxHQUE5QixJQUFxQyxLQUFLQyxRQUFMLEtBQWtCTixjQUFjLENBQUNPLEtBQTdFO0FBQ0g7QUFKSyxPQUFELEMsVUFRUlQsUUFBUSxDQUFDO0FBQ05JLFFBQUFBLElBQUksRUFBQ1AsSUFEQztBQUVOUyxRQUFBQSxPQUFPLEVBQUMsbUJBQXlCO0FBQzdCLGlCQUFPLEtBQUtGLElBQUwsS0FBY0gsZUFBZSxDQUFDUyxRQUE5QixJQUEwQyxLQUFLTixJQUFMLEtBQWNILGVBQWUsQ0FBQ1UsT0FBL0U7QUFDSDtBQUpLLE9BQUQsQyxVQVFSWCxRQUFRLENBQUM7QUFDTk0sUUFBQUEsT0FBTyxFQUFDLG1CQUF5QjtBQUM3QixpQkFBTyxLQUFLRixJQUFMLEtBQWNILGVBQWUsQ0FBQ1csUUFBckM7QUFDSDtBQUhLLE9BQUQsQyxVQU9SWixRQUFRLENBQUM7QUFDTk0sUUFBQUEsT0FBTyxFQUFDLG1CQUF5QjtBQUM3QixpQkFBTyxLQUFLRixJQUFMLEtBQWNILGVBQWUsQ0FBQ1csUUFBckM7QUFDSDtBQUhLLE9BQUQsQyxVQU9SWixRQUFRLENBQUM7QUFDTk0sUUFBQUEsT0FBTyxFQUFDLG1CQUF5QjtBQUM3QixpQkFBTyxLQUFLRixJQUFMLEtBQWNILGVBQWUsQ0FBQ1csUUFBckM7QUFDSDtBQUhLLE9BQUQsQyxXQVFSWixRQUFRLENBQUM7QUFDTk0sUUFBQUEsT0FBTyxFQUFDLG1CQUF5QjtBQUM3QixpQkFBTyxLQUFLRixJQUFMLEtBQWNILGVBQWUsQ0FBQ1csUUFBckM7QUFDSDtBQUhLLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQS9Ea0JqQixTOzs7OztpQkFLcEJNLGVBQWUsQ0FBQ1ksTTs7Ozs7OztpQkFTSixJOzs7Ozs7O2lCQVNSWCxjQUFjLENBQUNZLEk7Ozs7Ozs7aUJBUWQsSTs7Ozs7OztpQkFRQSxJQUFJakIsSUFBSixDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixDOzs7Ozs7O2lCQU9ELEM7Ozs7Ozs7aUJBT0MsQzs7Ozs7OztpQkFPSixJOzs7Ozs7O2lCQVFELEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIEVudW0gfSBmcm9tIFwiY2NcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbmVudW0gUk9BRF9QT0lOVF9UWVBFIHtcclxuICAgIE5PUk1BTCA9IDEsXHJcbiAgICBTVEFSVCxcclxuICAgIEdSRUVUSU5HLFxyXG4gICAgR09PREJZRSxcclxuICAgIEVORCxcclxuICAgIEFJX1NUQVJULC8v5Yy65YiG5bCP6L2m6KGM5Li6LUFJ5bCP6L2mXHJcbn1cclxuXHJcbkVudW0oUk9BRF9QT0lOVF9UWVBFKTtcclxuXHJcbmVudW0gUk9BRF9NT1ZFX1RZUEV7XHJcbiAgICBMSU5FID0gMSxcclxuICAgIENVUlZFXHJcbn1cclxuXHJcbkVudW0oUk9BRF9NT1ZFX1RZUEUpO1xyXG5AY2NjbGFzcyhcIlJvYWRQb2ludFwiKVxyXG5leHBvcnQgY2xhc3MgUm9hZFBvaW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTpST0FEX1BPSU5UX1RZUEUsXHJcbiAgICAgICAgZGlzcGxheU9yZGVyOjFcclxuICAgIH0pXHJcbiAgICB0eXBlID0gUk9BRF9QT0lOVF9UWVBFLk5PUk1BTDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6Tm9kZSxcclxuICAgICAgICBkaXNwbGF5T3JkZXI6MixcclxuICAgICAgICB2aXNpYmxlOmZ1bmN0aW9uICh0aGlzOlJvYWRQb2ludCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgIT09IFJPQURfUE9JTlRfVFlQRS5FTkQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIG5leHRTdGF0aW9uOk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTpST0FEX01PVkVfVFlQRSxcclxuICAgICAgICBkaXNwbGF5T3JkZXI6MyxcclxuICAgICAgICB2aXNpYmxlOmZ1bmN0aW9uICh0aGlzOlJvYWRQb2ludCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgIT09IFJPQURfUE9JTlRfVFlQRS5FTkQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIG1vdmVUeXBlID0gUk9BRF9NT1ZFX1RZUEUuTElORTtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGRpc3BsYXlPcmRlcjo0LFxyXG4gICAgICAgIHZpc2libGU6ZnVuY3Rpb24gKHRoaXM6Um9hZFBvaW50KXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZSAhPT0gUk9BRF9QT0lOVF9UWVBFLkVORCAmJiB0aGlzLm1vdmVUeXBlID09PSBST0FEX01PVkVfVFlQRS5DVVJWRTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgY2xvY2t3aXNlID0gdHJ1ZTtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6VmVjMyxcclxuICAgICAgICB2aXNpYmxlOmZ1bmN0aW9uICh0aGlzOlJvYWRQb2ludCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFJPQURfUE9JTlRfVFlQRS5HUkVFVElORyB8fCB0aGlzLnR5cGUgPT09IFJPQURfUE9JTlRfVFlQRS5HT09EQllFO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBkaXJlY3Rpb24gPSBuZXcgVmVjMygxLDAsMCk7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB2aXNpYmxlOmZ1bmN0aW9uICh0aGlzOlJvYWRQb2ludCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFJPQURfUE9JTlRfVFlQRS5BSV9TVEFSVDtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgaW50ZXJ2YWwgPSAzO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdmlzaWJsZTpmdW5jdGlvbiAodGhpczpSb2FkUG9pbnQpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBST0FEX1BPSU5UX1RZUEUuQUlfU1RBUlQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGRlbGF5VGltZSA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB2aXNpYmxlOmZ1bmN0aW9uICh0aGlzOlJvYWRQb2ludCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFJPQURfUE9JTlRfVFlQRS5BSV9TVEFSVDtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgc3BlZWQgPSAwLjA1O1xyXG5cclxuICAgIC8vMjAxLDIwMlxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB2aXNpYmxlOmZ1bmN0aW9uICh0aGlzOlJvYWRQb2ludCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFJPQURfUE9JTlRfVFlQRS5BSV9TVEFSVDtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgY2FycyA9ICcyMDEnO1xyXG59XHJcbiJdfQ==