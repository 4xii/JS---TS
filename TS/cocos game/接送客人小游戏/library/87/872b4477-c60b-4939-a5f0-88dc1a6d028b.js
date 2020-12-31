System.register(["cc", "code-quality:cr", "../data/CustomEventListener.ts.js", "./RoadPoint.js", "../data/Constants.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Vec3, CustomEventListenerts, RoadPoint, Constants, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, EventName, _tempVec, Car;

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

  function _reportPossibleCrUseOfCustomEventListenerts(extras) {
    _reporterNs.report("CustomEventListenerts", "../data/CustomEventListener.ts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoadPoint(extras) {
    _reporterNs.report("RoadPoint", "./RoadPoint", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../data/Constants", _context.meta, extras);
  }

  _export({
    _dec: void 0,
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
      Vec3 = _cc.Vec3;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_dataCustomEventListenerTsJs) {
      CustomEventListenerts = _dataCustomEventListenerTsJs.CustomEventListenerts;
    }, function (_RoadPointJs) {
      RoadPoint = _RoadPointJs.RoadPoint;
    }, function (_dataConstantsJs) {
      Constants = _dataConstantsJs.Constants;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "872b4R3xgtJOaXwiNwabQKL", "Car", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;
      EventName = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
        error: Error()
      }), Constants) : Constants).EventName;
      _tempVec = new Vec3();

      _export("Car", Car = (_dec = ccclass("Car"), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(Car, _Component);

        function Car() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Car);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Car)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "maxSpeed", _descriptor, _assertThisInitialized(_this));

          _this._currRoadPoint = null;
          _this._pointA = new Vec3();
          _this._pointB = new Vec3();
          _this._currSpeed = 0;
          _this._isMoving = false;
          _this._offset = new Vec3();
          _this._originRotation = 0;
          _this._targetRotation = 0;
          _this._centerPoint = new Vec3();
          _this._rotMeasure = 0;
          _this._acceleration = 0.2;
          _this._isMain = false;
          _this._isInOrder = false;
          return _this;
        }

        _createClass(Car, [{
          key: "start",
          //订单触发>乘客在运动
          //监听动画播放结束的回调
          value: function start() {
            (_crd && CustomEventListenerts === void 0 ? (_reportPossibleCrUseOfCustomEventListenerts({
              error: Error()
            }), CustomEventListenerts) : CustomEventListenerts).on(EventName.FINISHDWALK, this._finishedWalk, this);
          }
        }, {
          key: "update",
          value: function update(dt) {
            if (!this._isMoving || this._isInOrder) {
              return;
            }

            this._offset.set(this.node.worldPosition); //加速


            this._currSpeed += this._acceleration * dt;

            if (this._currSpeed > this.maxSpeed) {
              this._currSpeed = this.maxSpeed;
            }

            if (this._currSpeed <= 0.001) {
              this._isMoving = false; //刹车到0.001 就停止
            } //向朝向方向运动


            switch (this._currRoadPoint.moveType) {
              case (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                error: Error()
              }), RoadPoint) : RoadPoint).RoadMoveType.BEND:
                var offsetRotation = this._targetRotation - this._originRotation; //总需要旋转的角度

                var currRotation = this._conversion(this.node.eulerAngles.y); //已经旋转的角度
                //当前进度值+（速度*度量值）>角度  得出下一站运动的角度


                var nextStation = currRotation - this._originRotation + this._currSpeed * this._rotMeasure * (this._targetRotation > this._originRotation ? 1 : -1); //容错处理

                if (Math.abs(nextStation) > Math.abs(offsetRotation)) {
                  nextStation = offsetRotation;
                } //应该旋转的角度


                var target = nextStation + this._originRotation;

                _tempVec.set(0, target, 0);

                this.node.eulerAngles = _tempVec; //运动
                // const sin = Math.sin(nextStation*Math.PI/180);
                // const cos = Math.cos(nextStation*Math.PI/180);
                // const xLength = this._pointA.x - this._centerPoint.x;
                // const zLength = this. _pointA.z - this._centerPoint.z;
                // //求出目标x轴坐标
                // const xPos = xLength * cos + zLength*sin + this._centerPoint.x;
                // const zPos = -xLength * sin + zLength*cos + this._centerPoint.z; 

                Vec3.rotateY(this._offset, this._pointA, this._centerPoint, nextStation * Math.PI / 180); //this._offset.set(xPos,0,zPos);

                break;

              default:
                var z = this._pointB.z - this._pointA.z;

                if (z !== 0) {
                  if (z > 0) {
                    //制定一个范围
                    this._offset.z += this._currSpeed; //容错处理

                    if (this._offset.z > this._pointB.z) {
                      this._offset.z = this._pointB.z;
                    }
                  } else {
                    this._offset.z -= this._currSpeed; //容错处理

                    if (this._offset.z < this._pointB.z) {
                      this._offset.z = this._pointB.z;
                    }
                  }
                } else {
                  var x = this._pointB.x - this._pointA.x;

                  if (x > 0) {
                    this._offset.x += this._currSpeed; //容错处理

                    if (this._offset.x > this._pointB.x) {
                      this._offset.x = this._pointB.x;
                    }
                  } else {
                    this._offset.x -= this._currSpeed; //容错处理

                    if (this._offset.x < this._pointB.x) {
                      this._offset.x = this._pointB.x;
                    }
                  }
                }

                break;
            }

            this.node.setWorldPosition(this._offset);
            Vec3.subtract(_tempVec, this._pointB, this._offset);

            if (_tempVec.length() <= 0.01) {
              this._arrivalSataion();
            }
          }
        }, {
          key: "setEntry",
          value: function setEntry(entry) {
            var isMain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.node.setWorldPosition(entry.worldPosition);
            this._currRoadPoint = entry.getComponent(_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
              error: Error()
            }), RoadPoint) : RoadPoint);
            this._isMain = isMain;

            if (!this._currRoadPoint) {
              console.warn('This is no RoadPoint in' + entry.name);
            } //通过下一个点与本点的差计算小车朝向


            this._pointA.set(entry.worldPosition);

            this._pointB.set(this._currRoadPoint.nextStation.worldPosition);

            var z = this._pointB.z - this._pointA.z;

            if (z !== 0) {
              if (z < 0) {
                this.node.eulerAngles = new Vec3();
              } else {
                this.node.eulerAngles = new Vec3(0, 180, 0);
              }
            } else {
              var x = this._pointB.x - this._pointA.x;

              if (x > 0) {
                this.node.eulerAngles = new Vec3(0, 270, 0);
              } else {
                this.node.eulerAngles = new Vec3(0, 90, 0);
              }
            }
          }
        }, {
          key: "startRunning",
          value: function startRunning() {
            if (this._currRoadPoint) {
              this._isMoving = true;
              this._currSpeed = 0;
              this._acceleration = 0.2;
            }
          }
        }, {
          key: "stopRunning",
          value: function stopRunning() {
            this._acceleration = -0.3; //this._isMoving = false;
          } //到站

        }, {
          key: "_arrivalSataion",
          value: function _arrivalSataion() {
            console.log('arrival.....');

            this._pointA.set(this._pointB);

            this._currRoadPoint = this._currRoadPoint.nextStation.getComponent(_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
              error: Error()
            }), RoadPoint) : RoadPoint);

            if (this._currRoadPoint.nextStation) {
              this._pointB.set(this._currRoadPoint.nextStation.worldPosition); //到站乘客事件


              if (this._isMain) {
                if (this._currRoadPoint.type === (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                  error: Error()
                }), RoadPoint) : RoadPoint).RoadPointType.GREETING) {
                  this._greetingCustomer();
                } else if (this._currRoadPoint.type === (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                  error: Error()
                }), RoadPoint) : RoadPoint).RoadPointType.GOODBYE) {
                  this._takingCustomer();
                }
              } //转弯,到达某一个站


              if (this._currRoadPoint.moveType === (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                error: Error()
              }), RoadPoint) : RoadPoint).RoadMoveType.BEND) {
                //判断是顺逆时针
                if (this._currRoadPoint.clockwise) {
                  this._originRotation = this._conversion(this.node.eulerAngles.y);
                  this._targetRotation = this._originRotation - 90; //找出顺时针的圆心

                  if (this._pointB.z < this._pointA.z && this._pointB.x > this._pointA.x || this._pointB.z > this._pointA.z && this._pointB.x < this._pointA.x) {
                    this._centerPoint.set(this._pointB.x, 0, this._pointA.z);
                  } else {
                    this._centerPoint.set(this._pointA.x, 0, this._pointB.z);
                  }
                }
              } else {
                this._originRotation = this._conversion(this.node.eulerAngles.y);
                this._targetRotation = this._originRotation - 90;

                if (this._pointB.z > this._pointA.z && this._pointB.x > this._pointA.x || this._pointB.z < this._pointA.z && this._pointB.x < this._pointA.x) {
                  this._centerPoint.set(this._pointB.x, 0, this._pointA.z);
                } else {
                  this._centerPoint.set(this._pointA.x, 0, this._pointB.z);
                }
              }

              Vec3.subtract(_tempVec, this._pointA, this._centerPoint);

              var r = _tempVec.length();

              this._rotMeasure = 90 / (Math.PI * r / 2);
            } else {
              this._isMoving = false;
              this._currRoadPoint = null;
            }
          }
        }, {
          key: "_greetingCustomer",
          value: function _greetingCustomer() {
            //接客
            this._isInOrder = true; //dispatchEvent派发 小车的位置 当前的方向

            (_crd && CustomEventListenerts === void 0 ? (_reportPossibleCrUseOfCustomEventListenerts({
              error: Error()
            }), CustomEventListenerts) : CustomEventListenerts).dispatchEvent(EventName.GREETING, this.node.worldPosition, this._currRoadPoint.direction);
          }
        }, {
          key: "_takingCustomer",
          value: function _takingCustomer() {
            this._isInOrder = true;
            (_crd && CustomEventListenerts === void 0 ? (_reportPossibleCrUseOfCustomEventListenerts({
              error: Error()
            }), CustomEventListenerts) : CustomEventListenerts).dispatchEvent(EventName.GOODBYE, this.node.worldPosition, this._currRoadPoint.direction);
          }
        }, {
          key: "_finishedWalk",
          value: function _finishedWalk() {
            this._isInOrder = false;
          } //转换角度正负

        }, {
          key: "_conversion",
          value: function _conversion(value) {
            var a = value;

            if (a <= 0) {
              a += 360;
            }

            return a;
          }
        }]);

        return Car;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "maxSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2dhbWUvQ2FyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJWZWMzIiwiQ3VzdG9tRXZlbnRMaXN0ZW5lcnRzIiwiUm9hZFBvaW50IiwiQ29uc3RhbnRzIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRXZlbnROYW1lIiwiX3RlbXBWZWMiLCJDYXIiLCJfY3VyclJvYWRQb2ludCIsIl9wb2ludEEiLCJfcG9pbnRCIiwiX2N1cnJTcGVlZCIsIl9pc01vdmluZyIsIl9vZmZzZXQiLCJfb3JpZ2luUm90YXRpb24iLCJfdGFyZ2V0Um90YXRpb24iLCJfY2VudGVyUG9pbnQiLCJfcm90TWVhc3VyZSIsIl9hY2NlbGVyYXRpb24iLCJfaXNNYWluIiwiX2lzSW5PcmRlciIsIm9uIiwiRklOSVNIRFdBTEsiLCJfZmluaXNoZWRXYWxrIiwiZHQiLCJzZXQiLCJub2RlIiwid29ybGRQb3NpdGlvbiIsIm1heFNwZWVkIiwibW92ZVR5cGUiLCJSb2FkTW92ZVR5cGUiLCJCRU5EIiwib2Zmc2V0Um90YXRpb24iLCJjdXJyUm90YXRpb24iLCJfY29udmVyc2lvbiIsImV1bGVyQW5nbGVzIiwieSIsIm5leHRTdGF0aW9uIiwiTWF0aCIsImFicyIsInRhcmdldCIsInJvdGF0ZVkiLCJQSSIsInoiLCJ4Iiwic2V0V29ybGRQb3NpdGlvbiIsInN1YnRyYWN0IiwibGVuZ3RoIiwiX2Fycml2YWxTYXRhaW9uIiwiZW50cnkiLCJpc01haW4iLCJnZXRDb21wb25lbnQiLCJjb25zb2xlIiwid2FybiIsIm5hbWUiLCJsb2ciLCJ0eXBlIiwiUm9hZFBvaW50VHlwZSIsIkdSRUVUSU5HIiwiX2dyZWV0aW5nQ3VzdG9tZXIiLCJHT09EQllFIiwiX3Rha2luZ0N1c3RvbWVyIiwiY2xvY2t3aXNlIiwiciIsImRpc3BhdGNoRXZl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QUF0QixDQUFvQzNELFNBQVMsQ0FBQ3VELE9BQTlDLEVBQXNELEtBQUtsQyxJQUFMLENBQVVDLGFBQWhFLEVBQThFLEtBQUtuQixjQUFMLENBQW9CeUQsU0FBbEc7QUFDSDs7OzBDQUVzQjtBQUNuQixpQkFBSzdDLFVBQUwsR0FBa0IsS0FBbEI7QUFDSCxXLENBQ0Q7Ozs7c0NBQ29COEMsSyxFQUFhO0FBQzdCLGdCQUFJQyxDQUFDLEdBQUdELEtBQVI7O0FBQ0EsZ0JBQUdDLENBQUMsSUFBRSxDQUFOLEVBQVE7QUFDSkEsY0FBQUEsQ0FBQyxJQUFFLEdBQUg7QUFDSDs7QUFDRCxtQkFBT0EsQ0FBUDtBQUNIOzs7O1FBL05vQnJFLFMsb0ZBQ3BCTSxROzs7OztpQkFDVSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMzIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IEN1c3RvbUV2ZW50TGlzdGVuZXJ0cyB9IGZyb20gXCIuLi9kYXRhL0N1c3RvbUV2ZW50TGlzdGVuZXIudHNcIjtcclxuaW1wb3J0IHtSb2FkUG9pbnR9IGZyb20gXCIuL1JvYWRQb2ludFwiO1xyXG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSAnLi4vZGF0YS9Db25zdGFudHMnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuY29uc3QgRXZlbnROYW1lID0gQ29uc3RhbnRzLkV2ZW50TmFtZTtcclxuXHJcbmNvbnN0IF90ZW1wVmVjID0gbmV3IFZlYzMoKTtcclxuXHJcbkBjY2NsYXNzKFwiQ2FyXCIpXHJcbmV4cG9ydCBjbGFzcyBDYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtYXhTcGVlZCA9IDAuMjsvL+WPr+mFjee9rueahOacgOWkp+mAn+W6plxyXG4gICAgLy/lsI/ovabmnJ3lkJHpl67pophcclxuICAgIHByaXZhdGUgX2N1cnJSb2FkUG9pbnQ6IFJvYWRQb2ludCA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9wb2ludEEgPSBuZXcgVmVjMygpO1xyXG4gICAgcHJpdmF0ZSBfcG9pbnRCID0gbmV3IFZlYzMoKTtcclxuICAgIHByaXZhdGUgX2N1cnJTcGVlZCA9IDA7Ly/pgJ/luqZcclxuICAgIHByaXZhdGUgX2lzTW92aW5nID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9vZmZzZXQgPSBuZXcgVmVjMygpO1xyXG4gICAgcHJpdmF0ZSBfb3JpZ2luUm90YXRpb24gPSAwO1xyXG4gICAgcHJpdmF0ZSBfdGFyZ2V0Um90YXRpb24gPSAwO1xyXG4gICAgcHJpdmF0ZSBfY2VudGVyUG9pbnQgPSBuZXcgVmVjMygpO1xyXG4gICAgcHJpdmF0ZSBfcm90TWVhc3VyZSA9IDA7Ly/luqbph4/lgLxcclxuICAgIHByaXZhdGUgX2FjY2VsZXJhdGlvbiA9IDAuMjsgLy/liqDpgJ/luqZcclxuICAgIHByaXZhdGUgX2lzTWFpbiA9IGZhbHNlOy8v55Sx5LqOQUnlsI/ovablkozkuLvop5LlsI/ovablhaznlKjkuIDlpZfpgLvovpHvvIznlKjkuo7ljLrliIZcclxuICAgIHByaXZhdGUgX2lzSW5PcmRlciA9IGZhbHNlOy8v6K6i5Y2V6Kem5Y+RPuS5mOWuouWcqOi/kOWKqFxyXG5cclxuICAgIC8v55uR5ZCs5Yqo55S75pKt5pS+57uT5p2f55qE5Zue6LCDXHJcbiAgICBwdWJsaWMgc3RhcnQgKCl7XHJcbiAgICAgICAgQ3VzdG9tRXZlbnRMaXN0ZW5lcnRzLm9uKEV2ZW50TmFtZS5GSU5JU0hEV0FMSyx0aGlzLl9maW5pc2hlZFdhbGssdGhpcylcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGR0Om51bWJlcil7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc01vdmluZyB8fCB0aGlzLl9pc0luT3JkZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vZmZzZXQuc2V0KHRoaXMubm9kZS53b3JsZFBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgLy/liqDpgJ9cclxuICAgICAgICB0aGlzLl9jdXJyU3BlZWQgKz0gdGhpcy5fYWNjZWxlcmF0aW9uICogZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJTcGVlZCA+IHRoaXMubWF4U3BlZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VyclNwZWVkID0gdGhpcy5tYXhTcGVlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJTcGVlZCA8PSAwLjAwMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc01vdmluZyA9IGZhbHNlOy8v5Yi56L2m5YiwMC4wMDEg5bCx5YGc5q2iXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5ZCR5pyd5ZCR5pa55ZCR6L+Q5YqoXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9jdXJyUm9hZFBvaW50Lm1vdmVUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUm9hZFBvaW50LlJvYWRNb3ZlVHlwZS5CRU5EOlxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0Um90YXRpb24gPSB0aGlzLl90YXJnZXRSb3RhdGlvbiAtIHRoaXMuX29yaWdpblJvdGF0aW9uOy8v5oC76ZyA6KaB5peL6L2s55qE6KeS5bqmXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyUm90YXRpb24gPSB0aGlzLl9jb252ZXJzaW9uKHRoaXMubm9kZS5ldWxlckFuZ2xlcy55KTsvL+W3sue7j+aXi+i9rOeahOinkuW6plxyXG4gICAgICAgICAgICAgICAgLy/lvZPliY3ov5vluqblgLwr77yI6YCf5bqmKuW6pumHj+WAvO+8iT7op5LluqYgIOW+l+WHuuS4i+S4gOermei/kOWKqOeahOinkuW6plxyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRTdGF0aW9uID0gKGN1cnJSb3RhdGlvbiAtIHRoaXMuX29yaWdpblJvdGF0aW9uKSArICh0aGlzLl9jdXJyU3BlZWQgKiB0aGlzLl9yb3RNZWFzdXJlICogKHRoaXMuX3RhcmdldFJvdGF0aW9uID4gdGhpcy5fb3JpZ2luUm90YXRpb24gPyAxIDogLTEpKVxyXG4gICAgICAgICAgICAgICAgLy/lrrnplJnlpITnkIZcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhuZXh0U3RhdGlvbikgPiBNYXRoLmFicyhvZmZzZXRSb3RhdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0U3RhdGlvbiA9IG9mZnNldFJvdGF0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8v5bqU6K+l5peL6L2s55qE6KeS5bqmXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBuZXh0U3RhdGlvbiArIHRoaXMuX29yaWdpblJvdGF0aW9uO1xyXG4gICAgICAgICAgICAgICAgX3RlbXBWZWMuc2V0KDAsIHRhcmdldCwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBfdGVtcFZlYztcclxuXHJcbiAgICAgICAgICAgICAgICAvL+i/kOWKqFxyXG4gICAgICAgICAgICAgICAgLy8gY29uc3Qgc2luID0gTWF0aC5zaW4obmV4dFN0YXRpb24qTWF0aC5QSS8xODApO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgY29zID0gTWF0aC5jb3MobmV4dFN0YXRpb24qTWF0aC5QSS8xODApO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgeExlbmd0aCA9IHRoaXMuX3BvaW50QS54IC0gdGhpcy5fY2VudGVyUG9pbnQueDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHpMZW5ndGggPSB0aGlzLiBfcG9pbnRBLnogLSB0aGlzLl9jZW50ZXJQb2ludC56O1xyXG4gICAgICAgICAgICAgICAgLy8gLy/msYLlh7rnm67moId46L205Z2Q5qCHXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCB4UG9zID0geExlbmd0aCAqIGNvcyArIHpMZW5ndGgqc2luICsgdGhpcy5fY2VudGVyUG9pbnQueDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHpQb3MgPSAteExlbmd0aCAqIHNpbiArIHpMZW5ndGgqY29zICsgdGhpcy5fY2VudGVyUG9pbnQuejsgXHJcbiAgICAgICAgICAgICAgICBWZWMzLnJvdGF0ZVkodGhpcy5fb2Zmc2V0LCB0aGlzLl9wb2ludEEsIHRoaXMuX2NlbnRlclBvaW50LCBuZXh0U3RhdGlvbiAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLl9vZmZzZXQuc2V0KHhQb3MsMCx6UG9zKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc3QgeiA9IHRoaXMuX3BvaW50Qi56IC0gdGhpcy5fcG9pbnRBLno7XHJcbiAgICAgICAgICAgICAgICBpZiAoeiAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh6ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WItuWumuS4gOS4quiMg+WbtFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXQueiArPSB0aGlzLl9jdXJyU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5a656ZSZ5aSE55CGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vZmZzZXQueiA+IHRoaXMuX3BvaW50Qi56KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXQueiA9IHRoaXMuX3BvaW50Qi56O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2Zmc2V0LnogLT0gdGhpcy5fY3VyclNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WuuemUmeWkhOeQhlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fb2Zmc2V0LnogPCB0aGlzLl9wb2ludEIueikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2Zmc2V0LnogPSB0aGlzLl9wb2ludEIuejtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IHRoaXMuX3BvaW50Qi54IC0gdGhpcy5fcG9pbnRBLng7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldC54ICs9IHRoaXMuX2N1cnJTcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/lrrnplJnlpITnkIZcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX29mZnNldC54ID4gdGhpcy5fcG9pbnRCLngpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldC54ID0gdGhpcy5fcG9pbnRCLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXQueCAtPSB0aGlzLl9jdXJyU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5a656ZSZ5aSE55CGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vZmZzZXQueCA8IHRoaXMuX3BvaW50Qi54KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXQueCA9IHRoaXMuX3BvaW50Qi54O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuc2V0V29ybGRQb3NpdGlvbih0aGlzLl9vZmZzZXQpO1xyXG4gICAgICAgIFZlYzMuc3VidHJhY3QoX3RlbXBWZWMsIHRoaXMuX3BvaW50QiwgdGhpcy5fb2Zmc2V0KTtcclxuICAgICAgICBpZiAoX3RlbXBWZWMubGVuZ3RoKCkgPD0gMC4wMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9hcnJpdmFsU2F0YWlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0RW50cnkoZW50cnk6Tm9kZSxpc01haW49ZmFsc2Upe1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRXb3JsZFBvc2l0aW9uKGVudHJ5LndvcmxkUG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMuX2N1cnJSb2FkUG9pbnQgPSBlbnRyeS5nZXRDb21wb25lbnQoUm9hZFBvaW50KTsgXHJcbiAgICAgICAgdGhpcy5faXNNYWluID0gaXNNYWluOyBcclxuICAgICAgICBpZighdGhpcy5fY3VyclJvYWRQb2ludCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhpcyBpcyBubyBSb2FkUG9pbnQgaW4nICsgZW50cnkubmFtZSk7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgLy/pgJrov4fkuIvkuIDkuKrngrnkuI7mnKzngrnnmoTlt67orqHnrpflsI/ovabmnJ3lkJFcclxuICAgICAgICB0aGlzLl9wb2ludEEuc2V0KGVudHJ5LndvcmxkUG9zaXRpb24pXHJcbiAgICAgICAgdGhpcy5fcG9pbnRCLnNldCh0aGlzLl9jdXJyUm9hZFBvaW50Lm5leHRTdGF0aW9uLndvcmxkUG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IHogPSB0aGlzLl9wb2ludEIueiAtIHRoaXMuX3BvaW50QS56O1xyXG4gICAgICAgIGlmKHogIT09IDApe1xyXG4gICAgICAgICAgICBpZih6PDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLDE4MCwwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSB0aGlzLl9wb2ludEIueCAtIHRoaXMuX3BvaW50QS54O1xyXG4gICAgICAgICAgICBpZih4PjApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwyNzAsMCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCw5MCwwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRSdW5uaW5nKCl7XHJcbiAgICAgICAgaWYodGhpcy5fY3VyclJvYWRQb2ludCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzTW92aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fY3VyclNwZWVkID0gMDtcclxuICAgICAgICAgICAgdGhpcy5fYWNjZWxlcmF0aW9uID0gMC4yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzdG9wUnVubmluZygpe1xyXG4gICAgICAgIHRoaXMuX2FjY2VsZXJhdGlvbiA9IC0wLjM7XHJcbiAgICAgICAgLy90aGlzLl9pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy/liLDnq5lcclxuICAgIHByaXZhdGUgX2Fycml2YWxTYXRhaW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Fycml2YWwuLi4uLicpXHJcbiAgICAgICAgdGhpcy5fcG9pbnRBLnNldCh0aGlzLl9wb2ludEIpO1xyXG4gICAgICAgIHRoaXMuX2N1cnJSb2FkUG9pbnQgPSB0aGlzLl9jdXJyUm9hZFBvaW50Lm5leHRTdGF0aW9uLmdldENvbXBvbmVudChSb2FkUG9pbnQpO1xyXG4gICAgICAgIGlmKHRoaXMuX2N1cnJSb2FkUG9pbnQubmV4dFN0YXRpb24pe1xyXG4gICAgICAgICAgICB0aGlzLl9wb2ludEIuc2V0KHRoaXMuX2N1cnJSb2FkUG9pbnQubmV4dFN0YXRpb24ud29ybGRQb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICAvL+WIsOermeS5mOWuouS6i+S7tlxyXG4gICAgICAgICAgICBpZih0aGlzLl9pc01haW4pe1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJSb2FkUG9pbnQudHlwZSA9PT0gUm9hZFBvaW50LlJvYWRQb2ludFR5cGUuR1JFRVRJTkcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ncmVldGluZ0N1c3RvbWVyKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2N1cnJSb2FkUG9pbnQudHlwZSA9PT0gUm9hZFBvaW50LlJvYWRQb2ludFR5cGUuR09PREJZRSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Rha2luZ0N1c3RvbWVyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvL+i9rOW8ryzliLDovr7mn5DkuIDkuKrnq5lcclxuICAgICAgICAgICAgaWYodGhpcy5fY3VyclJvYWRQb2ludC5tb3ZlVHlwZSA9PT0gUm9hZFBvaW50LlJvYWRNb3ZlVHlwZS5CRU5EKXtcclxuICAgICAgICAgICAgICAgIC8v5Yik5pat5piv6aG66YCG5pe26ZKIXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jdXJyUm9hZFBvaW50LmNsb2Nrd2lzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3JpZ2luUm90YXRpb24gPSB0aGlzLl9jb252ZXJzaW9uKHRoaXMubm9kZS5ldWxlckFuZ2xlcy55KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90YXJnZXRSb3RhdGlvbiA9IHRoaXMuX29yaWdpblJvdGF0aW9uIC0gOTA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mib7lh7rpobrml7bpkojnmoTlnIblv4NcclxuICAgICAgICAgICAgICAgICAgICBpZigodGhpcy5fcG9pbnRCLnogPCB0aGlzLl9wb2ludEEueiAmJiB0aGlzLl9wb2ludEIueCA+IHRoaXMuX3BvaW50QS54KSB8fCAodGhpcy5fcG9pbnRCLnogPnRoaXMuX3BvaW50QS56ICYmIHRoaXMuX3BvaW50Qi54IDwgdGhpcy5fcG9pbnRBLngpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2VudGVyUG9pbnQuc2V0KHRoaXMuX3BvaW50Qi54LDAsdGhpcy5fcG9pbnRBLnopXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NlbnRlclBvaW50LnNldCh0aGlzLl9wb2ludEEueCwwLHRoaXMuX3BvaW50Qi56KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3JpZ2luUm90YXRpb24gPSB0aGlzLl9jb252ZXJzaW9uKHRoaXMubm9kZS5ldWxlckFuZ2xlcy55KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RhcmdldFJvdGF0aW9uID0gdGhpcy5fb3JpZ2luUm90YXRpb24gLSA5MDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZigodGhpcy5fcG9pbnRCLnogPiB0aGlzLl9wb2ludEEueiAmJiB0aGlzLl9wb2ludEIueCA+IHRoaXMuX3BvaW50QS54KSB8fCAodGhpcy5fcG9pbnRCLnogPCB0aGlzLl9wb2ludEEueiAmJiB0aGlzLl9wb2ludEIueCA8IHRoaXMuX3BvaW50QS54KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2VudGVyUG9pbnQuc2V0KHRoaXMuX3BvaW50Qi54LDAsdGhpcy5fcG9pbnRBLnopXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jZW50ZXJQb2ludC5zZXQodGhpcy5fcG9pbnRBLngsMCx0aGlzLl9wb2ludEIueilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgVmVjMy5zdWJ0cmFjdChfdGVtcFZlYyx0aGlzLl9wb2ludEEsdGhpcy5fY2VudGVyUG9pbnQpO1xyXG4gICAgICAgICAgICBjb25zdCByID0gX3RlbXBWZWMubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvdE1lYXN1cmUgPSA5MC8oTWF0aC5QSSAqIHIgLzIpO1xyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5faXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fY3VyclJvYWRQb2ludCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIF9ncmVldGluZ0N1c3RvbWVyKCl7XHJcbiAgICAgICAgLy/mjqXlrqJcclxuICAgICAgICB0aGlzLl9pc0luT3JkZXIgPSB0cnVlO1xyXG4gICAgICAgIC8vZGlzcGF0Y2hFdmVudOa0vuWPkSDlsI/ovabnmoTkvY3nva4g5b2T5YmN55qE5pa55ZCRXHJcbiAgICAgICAgQ3VzdG9tRXZlbnRMaXN0ZW5lcnRzLmRpc3BhdGNoRXZlbnQoRXZlbnROYW1lLkdSRUVUSU5HLHRoaXMubm9kZS53b3JsZFBvc2l0aW9uLHRoaXMuX2N1cnJSb2FkUG9pbnQuZGlyZWN0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Rha2luZ0N1c3RvbWVyKCl7XHJcbiAgICAgICAgdGhpcy5faXNJbk9yZGVyID0gdHJ1ZTtcclxuICAgICAgICBDdXN0b21FdmVudExpc3RlbmVydHMuZGlzcGF0Y2hFdmVudChFdmVudE5hbWUuR09PREJZRSx0aGlzLm5vZGUud29ybGRQb3NpdGlvbix0aGlzLl9jdXJyUm9hZFBvaW50LmRpcmVjdGlvbilcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9maW5pc2hlZFdhbGsoKXtcclxuICAgICAgICB0aGlzLl9pc0luT3JkZXIgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8v6L2s5o2i6KeS5bqm5q2j6LSfXHJcbiAgICBwcml2YXRlIF9jb252ZXJzaW9uKHZhbHVlOm51bWJlcil7XHJcbiAgICAgICAgbGV0IGEgPSB2YWx1ZTtcclxuICAgICAgICBpZihhPD0wKXtcclxuICAgICAgICAgICAgYSs9MzYwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==