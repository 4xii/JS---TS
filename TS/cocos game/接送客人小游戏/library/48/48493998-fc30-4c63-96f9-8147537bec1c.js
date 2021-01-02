System.register(["cc", "code-quality:cr", "../data/Constants.js", "./AudioManager.js", "./CarManager.js", "./MapManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Constants, AudioManager, CarManager, MapManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, GameCtril;

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

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../data/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCarManager(extras) {
    _reporterNs.report("CarManager", "./CarManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapManager(extras) {
    _reporterNs.report("MapManager", "./MapManager", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_dataConstantsJs) {
      Constants = _dataConstantsJs.Constants;
    }, function (_AudioManagerJs) {
      AudioManager = _AudioManagerJs.AudioManager;
    }, function (_CarManagerJs) {
      CarManager = _CarManagerJs.CarManager;
    }, function (_MapManagerJs) {
      MapManager = _MapManagerJs.MapManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "48493mY/DBMY5b5gUdTe+wc", "GameCtril", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameCtril", GameCtril = (_dec = ccclass("GameCtril"), _dec2 = property({
        type: _crd && MapManager === void 0 ? (_reportPossibleCrUseOfMapManager({
          error: Error()
        }), MapManager) : MapManager
      }), _dec3 = property({
        type: _crd && CarManager === void 0 ? (_reportPossibleCrUseOfCarManager({
          error: Error()
        }), CarManager) : CarManager
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(GameCtril, _Component);

        function GameCtril() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameCtril);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameCtril)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "mapManager", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "carManager", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(GameCtril, [{
          key: "onLoad",
          //生命周期onLoad初始化阶段
          value: function onLoad() {
            this.mapManager.resetMap();
            this.carManager.reset(this.mapManager.currPath);
          } //屏幕点击事件

        }, {
          key: "start",
          value: function start() {
            this.node.on(Node.EventType.TOUCH_START, this._touchStart, this);
            this.node.on(Node.EventType.TOUCH_END, this._touchEnd, this);
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).playMusic((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).AudioSource.BACKGROUND);
          }
        }, {
          key: "_touchStart",
          value: function _touchStart(touch, event) {
            this.carManager.controlMoving();
          }
        }, {
          key: "_touchEnd",
          value: function _touchEnd(touch, event) {
            this.carManager.controlMoving(false);
          }
        }]);

        return GameCtril;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mapManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "carManager", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2dhbWUvR2FtZUN0cmlsLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiQ29uc3RhbnRzIiwiQXVkaW9NYW5hZ2VyIiwiQ2FyTWFuYWdlciIsIk1hcE1hbmFnZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1lQ3RyaWwiLCJ0eXBlIiwibWFwTWFuYWdlciIsInJlc2V0TWFwIiwiY2FyTWFuYWdlciIsInJlc2V0IiwiY3VyclBhdGgiLCJub2RlIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIl90b3VjaFN0YXJ0IiwiVE9VQ0hfRU5EIiwiX3RvdWNoRW5kIiwicGxheU11c2ljIiwiQXVkaW9Tb3VyY2UiLCJCQUNLR1JPVU5EIiwidG91Y2giLCJldmVudCIsImNvbnRyb2xNb3ZpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJOzs7O0FBQ3ZCQyxNQUFBQSxTLG9CQUFBQSxTOztBQUNBQyxNQUFBQSxZLG1CQUFBQSxZOztBQUNBQyxNQUFBQSxVLGlCQUFBQSxVOztBQUNBQyxNQUFBQSxVLGlCQUFBQSxVOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlAsVSxDQUF0Qk8sTztBQUFTQyxNQUFBQSxRLEdBQWFSLFUsQ0FBYlEsUTs7MkJBR0pDLFMsV0FEWkYsT0FBTyxDQUFDLFdBQUQsQyxVQUVIQyxRQUFRLENBQUM7QUFDTkUsUUFBQUEsSUFBSTtBQUFBO0FBQUE7QUFERSxPQUFELEMsVUFLUkYsUUFBUSxDQUFDO0FBQ05FLFFBQUFBLElBQUk7QUFBQTtBQUFBO0FBREUsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVDttQ0FDZTtBQUNYLGlCQUFLQyxVQUFMLENBQWdCQyxRQUFoQjtBQUNBLGlCQUFLQyxVQUFMLENBQWdCQyxLQUFoQixDQUFzQixLQUFLSCxVQUFMLENBQWdCSSxRQUF0QztBQUNILFcsQ0FFRDs7OztrQ0FDYztBQUNWLGlCQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYWYsSUFBSSxDQUFDZ0IsU0FBTCxDQUFlQyxXQUE1QixFQUF3QyxLQUFLQyxXQUE3QyxFQUF5RCxJQUF6RDtBQUNBLGlCQUFLSixJQUFMLENBQVVDLEVBQVYsQ0FBYWYsSUFBSSxDQUFDZ0IsU0FBTCxDQUFlRyxTQUE1QixFQUFzQyxLQUFLQyxTQUEzQyxFQUFxRCxJQUFyRDtBQUVBO0FBQUE7QUFBQSw4Q0FBYUMsU0FBYixDQUF1QjtBQUFBO0FBQUEsd0NBQVVDLFdBQVYsQ0FBc0JDLFVBQTdDO0FBQ0g7OztzQ0FFbUJDLEssRUFBWUMsSyxFQUFpQjtBQUM3QyxpQkFBS2QsVUFBTCxDQUFnQmUsYUFBaEI7QUFDSDs7O29DQUVpQkYsSyxFQUFZQyxLLEVBQWlCO0FBQzNDLGlCQUFLZCxVQUFMLENBQWdCZSxhQUFoQixDQUE4QixLQUE5QjtBQUNIOzs7O1FBL0IwQjNCLFM7Ozs7O2lCQUlGLEk7Ozs7Ozs7aUJBS0EsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSxUb3VjaCxFdmVudFRvdWNoIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9kYXRhL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tIFwiLi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ2FyTWFuYWdlciB9IGZyb20gXCIuL0Nhck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgTWFwTWFuYWdlciB9IGZyb20gXCIuL01hcE1hbmFnZXJcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiR2FtZUN0cmlsXCIpXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ3RyaWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOk1hcE1hbmFnZXIsXHJcbiAgICB9KVxyXG4gICAgbWFwTWFuYWdlcjogTWFwTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOkNhck1hbmFnZXIsXHJcbiAgICB9KVxyXG4gICAgY2FyTWFuYWdlcjogQ2FyTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgLy/nlJ/lkb3lkajmnJ9vbkxvYWTliJ3lp4vljJbpmLbmrrVcclxuICAgIHB1YmxpYyBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLm1hcE1hbmFnZXIucmVzZXRNYXAoKTtcclxuICAgICAgICB0aGlzLmNhck1hbmFnZXIucmVzZXQodGhpcy5tYXBNYW5hZ2VyLmN1cnJQYXRoKVxyXG4gICAgfVxyXG5cclxuICAgIC8v5bGP5bmV54K55Ye75LqL5Lu2XHJcbiAgICBwdWJsaWMgc3RhcnQoKXtcclxuICAgICAgICB0aGlzLm5vZGUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsdGhpcy5fdG91Y2hTdGFydCx0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMuX3RvdWNoRW5kLHRoaXMpXHJcblxyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5wbGF5TXVzaWMoQ29uc3RhbnRzLkF1ZGlvU291cmNlLkJBQ0tHUk9VTkQpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgX3RvdWNoU3RhcnQodG91Y2g6VG91Y2gsZXZlbnQ6RXZlbnRUb3VjaCl7XHJcbiAgICAgICAgdGhpcy5jYXJNYW5hZ2VyLmNvbnRyb2xNb3ZpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF90b3VjaEVuZCh0b3VjaDpUb3VjaCxldmVudDpFdmVudFRvdWNoKXtcclxuICAgICAgICB0aGlzLmNhck1hbmFnZXIuY29udHJvbE1vdmluZyhmYWxzZSk7XHJcbiAgICB9XHJcbn1cclxuIl19