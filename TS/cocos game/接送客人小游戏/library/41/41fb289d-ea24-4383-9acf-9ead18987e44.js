System.register(["cc", "code-quality:cr", "../data/PoolManager.js", "./Car.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, loader, Prefab, PoolManager, Car, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, CarManager;

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

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../data/PoolManager", _context.meta, extras);
  }

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
      loader = _cc.loader;
      Prefab = _cc.Prefab;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_dataPoolManagerJs) {
      PoolManager = _dataPoolManagerJs.PoolManager;
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

          _this._currPath = [];
          _this._aiCars = [];
          return _this;
        }

        _createClass(CarManager, [{
          key: "reset",
          //记录小车
          value: function reset(points) {
            if (points.length <= 0) {
              console.warn('There is no points in this map');
              return;
            }

            this._currPath = points;

            this._createMainerCar(points[0]); //this._startSchedule();

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
            this.mainCar.setEntry(point, true);
          } //AI小车

          /* private _startSchedule(){
              //开始回调
              for(let i = 1; i <this._currPath.length;i++){
                  const node = this._currPath[i];
                  const roadPoint = node.getComponent(RoadPoint);
                  roadPoint.startSchedule(this._createEnemy.bind(this));
              }
          } */

        }, {
          key: "_stopSchedule",
          value: function _stopSchedule() {} //创建敌人

        }, {
          key: "_createEnemy",
          value: function _createEnemy(road, carID) {
            var _this2 = this;

            var self = this;
            loader.loadRes("car/car".concat(carID), Prefab, function (err, prefab) {
              if (err) {
                console.warn(err);
                return;
              }

              var car = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).getNode(prefab, self.node);
              var carComp = car.getComponent(_crd && Car === void 0 ? (_reportPossibleCrUseOfCar({
                error: Error()
              }), Car) : Car);

              _this2._aiCars.push(carComp);

              carComp.setEntry(road.node);
              carComp.maxSpeed = road.speed;
              carComp.startRunning();
              carComp.moveAfterFinished(_this2._recycleAICar.bind(_this2));
            });
          }
        }, {
          key: "_recycleAICar",
          value: function _recycleAICar(car) {
            var index = this._aiCars.indexOf(car);

            if (index >= 0) {
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).setNode(car.node);

              this._aiCars.splice(index, 1);
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2dhbWUvQ2FyTWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwibG9hZGVyIiwiUHJlZmFiIiwiUG9vbE1hbmFnZXIiLCJDYXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJDYXJNYW5hZ2VyIiwidHlwZSIsIl9jdXJyUGF0aCIsIl9haUNhcnMiLCJwb2ludHMiLCJsZW5ndGgiLCJjb25zb2xlIiwid2FybiIsIl9jcmVhdGVNYWluZXJDYXIiLCJpc1J1bm5pbmciLCJtYWluQ2FyIiwic3RhcnRSdW5uaW5nIiwic3RvcFJ1bm5pbmciLCJwb2ludCIsInNldEVudHJ5Iiwicm9hZCIsImNhcklEIiwic2VsZiIsImxvYWRSZXMiLCJlcnIiLCJwcmVmYWIiLCJjYXIiLCJnZXROb2RlIiwibm9kZSIsImNhckNvbXAiLCJnZXRDb21wb25lbnQiLCJwdXNoIiwibWF4U3BlZWQiLCJzcGVlZCIsIm1vdmVBZnRlckZpbmlzaGVkIiwiX3JlY3ljbGVBSUNhciIsImJpbmQiLCJpbmRleCIsImluZGV4T2YiLCJzZXROb2RlIiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxNLE9BQUFBLE07Ozs7QUFDckNDLE1BQUFBLFcsc0JBQUFBLFc7O0FBQ0FDLE1BQUFBLEcsVUFBQUEsRzs7Ozs7O0FBSURDLE1BQUFBLE8sR0FBc0JOLFUsQ0FBdEJNLE87QUFBU0MsTUFBQUEsUSxHQUFhUCxVLENBQWJPLFE7OzRCQUdKQyxVLFdBRFpGLE9BQU8sQ0FBQyxZQUFELEMsVUFFSEMsUUFBUSxDQUFDO0FBQ05FLFFBQUFBLElBQUk7QUFBQTtBQUFBO0FBREUsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFLREMsUyxHQUFtQixFO2dCQUNuQkMsTyxHQUFnQixFOzs7Ozs7QUFBRztnQ0FFZEMsTSxFQUFjO0FBQ3ZCLGdCQUFHQSxNQUFNLENBQUNDLE1BQVAsSUFBaUIsQ0FBcEIsRUFBc0I7QUFDbEJDLGNBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLGdDQUFiO0FBQ0E7QUFDSDs7QUFFRCxpQkFBS0wsU0FBTCxHQUFpQkUsTUFBakI7O0FBQ0EsaUJBQUtJLGdCQUFMLENBQXNCSixNQUFNLENBQUMsQ0FBRCxDQUE1QixFQVB1QixDQVF2Qjs7QUFDSDs7OzBDQUNxQztBQUFBLGdCQUFqQkssU0FBaUIsdUVBQUwsSUFBSzs7QUFDbEMsZ0JBQUdBLFNBQUgsRUFBYTtBQUNULG1CQUFLQyxPQUFMLENBQWFDLFlBQWI7QUFDSCxhQUZELE1BRU07QUFDRixtQkFBS0QsT0FBTCxDQUFhRSxXQUFiO0FBQ0g7QUFDSjs7OzJDQUV3QkMsSyxFQUFXO0FBQ2hDLGlCQUFLSCxPQUFMLENBQWFJLFFBQWIsQ0FBc0JELEtBQXRCLEVBQTRCLElBQTVCO0FBQ0gsVyxDQUVEOztBQUNBOzs7Ozs7Ozs7OzswQ0FTdUIsQ0FFdEIsQyxDQUVEOzs7O3VDQUNxQkUsSSxFQUFpQkMsSyxFQUFjO0FBQUE7O0FBQ2hELGdCQUFNQyxJQUFJLEdBQUcsSUFBYjtBQUNBdkIsWUFBQUEsTUFBTSxDQUFDd0IsT0FBUCxrQkFBeUJGLEtBQXpCLEdBQWtDckIsTUFBbEMsRUFBMEMsVUFBQ3dCLEdBQUQsRUFBV0MsTUFBWCxFQUE0QjtBQUNsRSxrQkFBR0QsR0FBSCxFQUFPO0FBQ0hiLGdCQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYVksR0FBYjtBQUNBO0FBQ0g7O0FBRUQsa0JBQU1FLEdBQUcsR0FBRztBQUFBO0FBQUEsOENBQVlDLE9BQVosQ0FBb0JGLE1BQXBCLEVBQTRCSCxJQUFJLENBQUNNLElBQWpDLENBQVo7QUFDQSxrQkFBTUMsT0FBTyxHQUFHSCxHQUFHLENBQUNJLFlBQUo7QUFBQTtBQUFBLDZCQUFoQjs7QUFDQSxjQUFBLE1BQUksQ0FBQ3RCLE9BQUwsQ0FBYXVCLElBQWIsQ0FBa0JGLE9BQWxCOztBQUNBQSxjQUFBQSxPQUFPLENBQUNWLFFBQVIsQ0FBaUJDLElBQUksQ0FBQ1EsSUFBdEI7QUFDQUMsY0FBQUEsT0FBTyxDQUFDRyxRQUFSLEdBQW1CWixJQUFJLENBQUNhLEtBQXhCO0FBQ0FKLGNBQUFBLE9BQU8sQ0FBQ2IsWUFBUjtBQUNBYSxjQUFBQSxPQUFPLENBQUNLLGlCQUFSLENBQTBCLE1BQUksQ0FBQ0MsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsTUFBeEIsQ0FBMUI7QUFDSCxhQWJEO0FBY0g7Ozt3Q0FFcUJWLEcsRUFBUTtBQUMxQixnQkFBTVcsS0FBSyxHQUFHLEtBQUs3QixPQUFMLENBQWE4QixPQUFiLENBQXFCWixHQUFyQixDQUFkOztBQUNBLGdCQUFHVyxLQUFLLElBQUksQ0FBWixFQUFjO0FBQ1Y7QUFBQTtBQUFBLDhDQUFZRSxPQUFaLENBQW9CYixHQUFHLENBQUNFLElBQXhCOztBQUNBLG1CQUFLcEIsT0FBTCxDQUFhZ0MsTUFBYixDQUFvQkgsS0FBcEIsRUFBMEIsQ0FBMUI7QUFDSDtBQUNKOzs7O1FBdEUyQnZDLFM7Ozs7O2lCQUlkLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGxvYWRlciwgUHJlZmFiIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IFBvb2xNYW5hZ2VyIH0gZnJvbSBcIi4uL2RhdGEvUG9vbE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4vQ2FyXCI7XHJcbmltcG9ydCB7IFJvYWRQb2ludCB9IGZyb20gXCIuL1JvYWRQb2ludFwiO1xyXG5pbXBvcnQgeyBDdXN0b21FdmVudExpc3RlbmVyIH0gZnJvbSBcIi4uL2RhdGEvQ3VzdG9tRXZlbnRMaXN0ZW5lclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vZGF0YS9Db25zdGFudHNcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiQ2FyTWFuYWdlclwiKVxyXG5leHBvcnQgY2xhc3MgQ2FyTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6Q2FyXHJcbiAgICB9KVxyXG4gICAgbWFpbkNhcjpDYXIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX2N1cnJQYXRoOk5vZGVbXSA9IFtdOy8v6K6w5b2V5b2T5YmN6Lev5b6EXHJcbiAgICBwcml2YXRlIF9haUNhcnM6Q2FyW10gPSBbXTsvL+iusOW9leWwj+i9plxyXG5cclxuICAgIHB1YmxpYyByZXNldChwb2ludHM6Tm9kZVtdKXtcclxuICAgICAgICBpZihwb2ludHMubGVuZ3RoIDw9IDApe1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZXJlIGlzIG5vIHBvaW50cyBpbiB0aGlzIG1hcCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jdXJyUGF0aCA9IHBvaW50cztcclxuICAgICAgICB0aGlzLl9jcmVhdGVNYWluZXJDYXIocG9pbnRzWzBdKTtcclxuICAgICAgICAvL3RoaXMuX3N0YXJ0U2NoZWR1bGUoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjb250cm9sTW92aW5nKGlzUnVubmluZyA9IHRydWUpe1xyXG4gICAgICAgIGlmKGlzUnVubmluZyl7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbkNhci5zdGFydFJ1bm5pbmcoKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbkNhci5zdG9wUnVubmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVNYWluZXJDYXIocG9pbnQ6Tm9kZSl7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FyLnNldEVudHJ5KHBvaW50LHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQUnlsI/ovaZcclxuICAgIC8qIHByaXZhdGUgX3N0YXJ0U2NoZWR1bGUoKXtcclxuICAgICAgICAvL+W8gOWni+Wbnuiwg1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPHRoaXMuX2N1cnJQYXRoLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5fY3VyclBhdGhbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHJvYWRQb2ludCA9IG5vZGUuZ2V0Q29tcG9uZW50KFJvYWRQb2ludCk7XHJcbiAgICAgICAgICAgIHJvYWRQb2ludC5zdGFydFNjaGVkdWxlKHRoaXMuX2NyZWF0ZUVuZW15LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH0gKi9cclxuXHJcbiAgICBwcml2YXRlIF9zdG9wU2NoZWR1bGUoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy/liJvlu7rmlYzkurpcclxuICAgIHByaXZhdGUgX2NyZWF0ZUVuZW15KHJvYWQ6IFJvYWRQb2ludCwgY2FySUQ6IHN0cmluZyl7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbG9hZGVyLmxvYWRSZXMoYGNhci9jYXIke2NhcklEfWAsIFByZWZhYiwgKGVycjogYW55LCBwcmVmYWI6IFByZWZhYik9PntcclxuICAgICAgICAgICAgaWYoZXJyKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXIgPSBQb29sTWFuYWdlci5nZXROb2RlKHByZWZhYiwgc2VsZi5ub2RlKTtcclxuICAgICAgICAgICAgY29uc3QgY2FyQ29tcCA9IGNhci5nZXRDb21wb25lbnQoQ2FyKTtcclxuICAgICAgICAgICAgdGhpcy5fYWlDYXJzLnB1c2goY2FyQ29tcCk7XHJcbiAgICAgICAgICAgIGNhckNvbXAuc2V0RW50cnkocm9hZC5ub2RlKTtcclxuICAgICAgICAgICAgY2FyQ29tcC5tYXhTcGVlZCA9IHJvYWQuc3BlZWQ7XHJcbiAgICAgICAgICAgIGNhckNvbXAuc3RhcnRSdW5uaW5nKCk7XHJcbiAgICAgICAgICAgIGNhckNvbXAubW92ZUFmdGVyRmluaXNoZWQodGhpcy5fcmVjeWNsZUFJQ2FyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JlY3ljbGVBSUNhcihjYXI6Q2FyKXtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2FpQ2Fycy5pbmRleE9mKGNhcik7XHJcbiAgICAgICAgaWYoaW5kZXggPj0gMCl7XHJcbiAgICAgICAgICAgIFBvb2xNYW5hZ2VyLnNldE5vZGUoY2FyLm5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9haUNhcnMuc3BsaWNlKGluZGV4LDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==