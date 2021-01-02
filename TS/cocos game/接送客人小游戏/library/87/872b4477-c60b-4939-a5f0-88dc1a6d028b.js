System.register(["cc", "code-quality:cr", "../data/CustomEventListener.js", "./RoadPoint.js", "../data/Constants.js", "./AudioManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Vec3, ParticleSystemComponent, CustomEventListener, RoadPoint, Constants, AudioManager, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, EventName, _tempVec, Car;

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

  function _reportPossibleCrUseOfCustomEventListener(extras) {
    _reporterNs.report("CustomEventListener", "../data/CustomEventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoadPoint(extras) {
    _reporterNs.report("RoadPoint", "./RoadPoint", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../data/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./AudioManager", _context.meta, extras);
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
      ParticleSystemComponent = _cc.ParticleSystemComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_dataCustomEventListenerJs) {
      CustomEventListener = _dataCustomEventListenerJs.CustomEventListener;
    }, function (_RoadPointJs) {
      RoadPoint = _RoadPointJs.RoadPoint;
    }, function (_dataConstantsJs) {
      Constants = _dataConstantsJs.Constants;
    }, function (_AudioManagerJs) {
      AudioManager = _AudioManagerJs.AudioManager;
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
          _this._isBraking = false;
          _this._gas = null;
          _this._overCD = null;
          return _this;
        }

        _createClass(Car, [{
          key: "start",
          //监听动画播放结束的回调
          value: function start() {
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).on(EventName.FINISHED_WALK, this._finishedWalk, this);
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

              if (this._isBraking) {
                this._isBraking = false;
                (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
                  error: Error()
                }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.END_BRAKING); //派发刹车事件
              }
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

            if (this._isMain) {
              var gasNode = this.node.getChildByName('gas');
              this._gas = gasNode.getComponent(ParticleSystemComponent);

              this._gas.play();
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
            this._acceleration = -0.3;
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.START_BRAKING, this.node); //执行START_BRAKING

            this._isBraking = true; //this._isMoving = false;

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).AudioSource.STOP);
          }
        }, {
          key: "moveAfterFinished",
          value: function moveAfterFinished(cd) {
            this._overCD = cd;
          } //到站

        }, {
          key: "_arrivalSataion",
          value: function _arrivalSataion() {
            this._pointA.set(this._pointB);

            this._currRoadPoint = this._currRoadPoint.nextStation.getComponent(_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
              error: Error()
            }), RoadPoint) : RoadPoint);

            if (this._currRoadPoint.nextStation) {
              this._pointB.set(this._currRoadPoint.nextStation.worldPosition); //到站乘客事件


              if (this._isMain) {
                //触发刹车动画
                if (this._isBraking) {
                  this._isBraking = false;
                  (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
                    error: Error()
                  }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.END_BRAKING);
                }

                if (this._currRoadPoint.type === (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                  error: Error()
                }), RoadPoint) : RoadPoint).RoadPointType.GREETING) {
                  this._greetingCustomer();
                } else if (this._currRoadPoint.type === (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                  error: Error()
                }), RoadPoint) : RoadPoint).RoadPointType.GOODBYE) {
                  this._takingCustomer();
                } else if (this._currRoadPoint.type === (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                  error: Error()
                }), RoadPoint) : RoadPoint).RoadPointType.END) {
                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).AudioSource.WIN); //到达终点播放胜利
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

              if (this._overCD) {
                this._overCD(this);

                this._overCD = null;
              }
            }
          }
        }, {
          key: "_greetingCustomer",
          value: function _greetingCustomer() {
            //接客
            this._isInOrder = true;
            this._currSpeed = 0; //清除速度
            //dispatchEvent派发 小车的位置 当前的方向

            this._gas.stop();

            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.GREETING, this.node.worldPosition, this._currRoadPoint.direction);
          }
        }, {
          key: "_takingCustomer",
          value: function _takingCustomer() {
            this._isInOrder = true;
            this._currSpeed = 0; //清除速度

            this._gas.stop();

            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.GOODBYE, this.node.worldPosition, this._currRoadPoint.direction);
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.SHOW_COIN, this.node.worldPosition); //送客弹金币
          }
        }, {
          key: "_finishedWalk",
          value: function _finishedWalk() {
            this._isInOrder = false;

            this._gas.play();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2dhbWUvQ2FyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJWZWMzIiwiUGFydGljbGVTeXN0ZW1Db21wb25lbnQiLCJDdXN0b21FdmVudExpc3RlbmVyIiwiUm9hZFBvaW50IiwiQ29uc3RhbnRzIiwiQXVkaW9NYW5hZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRXZlbnROYW1lIiwiX3RlbXBWZWMiLCJDYXIiLCJfY3VyclJvYWRQb2ludCIsIl9wb2ludEEiLCJfcG9pbnRCIiwiX2N1cnJTcGVlZCIsIl9pc01vdmluZyIsIl9vZmZzZXQiLCJfb3JpZ2luUm90YXRpb24iLCJfdGFyZ2V0Um90YXRpb24iLCJfY2VudGVyUG9pbnQiLCJfcm90TWVhc3VyZSIsIl9hY2NlbGVyYXRpb24iLCJfaXNNYWluIiwiX2lzSW5PcmRlciIsIl9pc0JyYWtpbmciLCJfZ2FzIiwiX292ZXJDRCIsIm9uIiwiRklOSVNIRURfV0FMSyIsIl9maW5pc2hlZFdhbGsiLCJkdCIsInNldCIsIm5vZGUiLCJ3b3JsZFBvc2l0aW9uIiwibWF4U3BlZWQiLCJkaXNwYXRjaEV2ZW50IiwiRU5EX0JSQUtJTkciLCJtb3ZlVHlwZSIsIlJvYWRNb3ZlVHlwZSIsIkJFTkQiLCJvZmZzZXRSb3RhdGlvbiIsImN1cnJSb3RhdGlvbiIsIl9jb252ZXJzaW9uIiwiZXVsZXJBbmdsZXMiLCJ5IiwibmV4dFN0YXRpb24iLCJNYXRoIiwiYWJzIiwidGFyZ2V0Iiwicm90YXRlWSIsIlBJIiwieiIsIngiLCJzZXRXb3JsZFBvc2l0aW9uIiwic3VidHJhY3QiLCJsZW5ndGgiLCJfYXJyaXZhbFNhdGFpb24iLCJlbnRyeSIsImlzTWFpbiIsImdldENvbXBvbmVudCIsImNvbnNvbGUiLCJ3YXJuIiwibmFtZSIsImdhc05vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsInBsYXkiLCJTVEFSVF9CUkFLSU5HIiwicGxheVNvdW5kIiwiQXVkaW9Tb3VyY2UiLCJTVE9QIiwiY2QiLCJ0eXBlIiwiUm9hZFBvaW50VHlwZSIsIkdSRUVUSU5HIiwiX2dyZWV0aW5nQ3VzdG9tZXIiLCJHT09EQllFIiwiX3Rha2luZ0N1c3RvbWVyIiwiRU5EIiwiV0lOIiwiY2xvY2t3aXNlIiwiciIsInN0b3AiLCJkaXJlY3Rpb24iLCJTSE9XX0NPSU4iLCJ2YWx1ZSIsImEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSx1QixPQUFBQSx1Qjs7OztBQUNuQ0MsTUFBQUEsbUIsOEJBQUFBLG1COztBQUNEQyxNQUFBQSxTLGdCQUFBQSxTOztBQUNBQyxNQUFBQSxTLG9CQUFBQSxTOztBQUNDQyxNQUFBQSxZLG1CQUFBQSxZOzs7Ozs7QUFFREMsTUFBQUEsTyxHQUFzQlIsVSxDQUF0QlEsTztBQUFTQyxNQUFBQSxRLEdBQWFULFUsQ0FBYlMsUTtBQUNYQyxNQUFBQSxTLEdBQVk7QUFBQTtBQUFBLGtDQUFVQSxTO0FBRXRCQyxNQUFBQSxRLEdBQVcsSUFBSVQsSUFBSixFOztxQkFHSlUsRyxXQURaSixPQUFPLENBQUMsS0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFLSUssYyxHQUE0QixJO2dCQUM1QkMsTyxHQUFVLElBQUlaLElBQUosRTtnQkFDVmEsTyxHQUFVLElBQUliLElBQUosRTtnQkFDVmMsVSxHQUFhLEM7Z0JBQ2JDLFMsR0FBWSxLO2dCQUNaQyxPLEdBQVUsSUFBSWhCLElBQUosRTtnQkFDVmlCLGUsR0FBa0IsQztnQkFDbEJDLGUsR0FBa0IsQztnQkFDbEJDLFksR0FBZSxJQUFJbkIsSUFBSixFO2dCQUNmb0IsVyxHQUFjLEM7Z0JBQ2RDLGEsR0FBZ0IsRztnQkFDaEJDLE8sR0FBVSxLO2dCQUNWQyxVLEdBQWEsSztnQkFDYkMsVSxHQUFhLEs7Z0JBQ2JDLEksR0FBK0IsSTtnQkFDL0JDLE8sR0FBb0IsSTs7Ozs7O0FBRTVCO2tDQUNlO0FBQ1g7QUFBQTtBQUFBLDREQUFvQkMsRUFBcEIsQ0FBdUJuQixTQUFTLENBQUNvQixhQUFqQyxFQUErQyxLQUFLQyxhQUFwRCxFQUFrRSxJQUFsRTtBQUNIOzs7aUNBRWFDLEUsRUFBVTtBQUNwQixnQkFBSSxDQUFDLEtBQUtmLFNBQU4sSUFBbUIsS0FBS1EsVUFBNUIsRUFBd0M7QUFDcEM7QUFDSDs7QUFDRCxpQkFBS1AsT0FBTCxDQUFhZSxHQUFiLENBQWlCLEtBQUtDLElBQUwsQ0FBVUMsYUFBM0IsRUFKb0IsQ0FNcEI7OztBQUNBLGlCQUFLbkIsVUFBTCxJQUFtQixLQUFLTyxhQUFMLEdBQXFCUyxFQUF4Qzs7QUFDQSxnQkFBSSxLQUFLaEIsVUFBTCxHQUFrQixLQUFLb0IsUUFBM0IsRUFBcUM7QUFDakMsbUJBQUtwQixVQUFMLEdBQWtCLEtBQUtvQixRQUF2QjtBQUNIOztBQUNELGdCQUFJLEtBQUtwQixVQUFMLElBQW1CLEtBQXZCLEVBQThCO0FBQzFCLG1CQUFLQyxTQUFMLEdBQWlCLEtBQWpCLENBRDBCLENBQ0g7O0FBQ3ZCLGtCQUFHLEtBQUtTLFVBQVIsRUFBbUI7QUFDZixxQkFBS0EsVUFBTCxHQUFrQixLQUFsQjtBQUNBO0FBQUE7QUFBQSxnRUFBb0JXLGFBQXBCLENBQWtDM0IsU0FBUyxDQUFDNEIsV0FBNUMsRUFGZSxDQUUwQztBQUM1RDtBQUNKLGFBakJtQixDQWtCcEI7OztBQUNBLG9CQUFRLEtBQUt6QixjQUFMLENBQW9CMEIsUUFBNUI7QUFDSSxtQkFBSztBQUFBO0FBQUEsMENBQVVDLFlBQVYsQ0FBdUJDLElBQTVCO0FBQ0ksb0JBQU1DLGNBQWMsR0FBRyxLQUFLdEIsZUFBTCxHQUF1QixLQUFLRCxlQUFuRCxDQURKLENBQ3VFOztBQUNuRSxvQkFBTXdCLFlBQVksR0FBRyxLQUFLQyxXQUFMLENBQWlCLEtBQUtWLElBQUwsQ0FBVVcsV0FBVixDQUFzQkMsQ0FBdkMsQ0FBckIsQ0FGSixDQUVtRTtBQUMvRDs7O0FBQ0Esb0JBQUlDLFdBQVcsR0FBSUosWUFBWSxHQUFHLEtBQUt4QixlQUFyQixHQUF5QyxLQUFLSCxVQUFMLEdBQWtCLEtBQUtNLFdBQXZCLElBQXNDLEtBQUtGLGVBQUwsR0FBdUIsS0FBS0QsZUFBNUIsR0FBOEMsQ0FBOUMsR0FBa0QsQ0FBQyxDQUF6RixDQUEzRCxDQUpKLENBS0k7O0FBQ0Esb0JBQUk2QixJQUFJLENBQUNDLEdBQUwsQ0FBU0YsV0FBVCxJQUF3QkMsSUFBSSxDQUFDQyxHQUFMLENBQVNQLGNBQVQsQ0FBNUIsRUFBc0Q7QUFDbERLLGtCQUFBQSxXQUFXLEdBQUdMLGNBQWQ7QUFDSCxpQkFSTCxDQVVJOzs7QUFDQSxvQkFBTVEsTUFBTSxHQUFHSCxXQUFXLEdBQUcsS0FBSzVCLGVBQWxDOztBQUNBUixnQkFBQUEsUUFBUSxDQUFDc0IsR0FBVCxDQUFhLENBQWIsRUFBZ0JpQixNQUFoQixFQUF3QixDQUF4Qjs7QUFDQSxxQkFBS2hCLElBQUwsQ0FBVVcsV0FBVixHQUF3QmxDLFFBQXhCLENBYkosQ0FlSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBVCxnQkFBQUEsSUFBSSxDQUFDaUQsT0FBTCxDQUFhLEtBQUtqQyxPQUFsQixFQUEyQixLQUFLSixPQUFoQyxFQUF5QyxLQUFLTyxZQUE5QyxFQUE0RDBCLFdBQVcsR0FBR0MsSUFBSSxDQUFDSSxFQUFuQixHQUF3QixHQUFwRixFQXZCSixDQXdCSTs7QUFDQTs7QUFDSjtBQUNJLG9CQUFNQyxDQUFDLEdBQUcsS0FBS3RDLE9BQUwsQ0FBYXNDLENBQWIsR0FBaUIsS0FBS3ZDLE9BQUwsQ0FBYXVDLENBQXhDOztBQUNBLG9CQUFJQSxDQUFDLEtBQUssQ0FBVixFQUFhO0FBQ1Qsc0JBQUlBLENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDUDtBQUNBLHlCQUFLbkMsT0FBTCxDQUFhbUMsQ0FBYixJQUFrQixLQUFLckMsVUFBdkIsQ0FGTyxDQUdQOztBQUNBLHdCQUFJLEtBQUtFLE9BQUwsQ0FBYW1DLENBQWIsR0FBaUIsS0FBS3RDLE9BQUwsQ0FBYXNDLENBQWxDLEVBQXFDO0FBQ2pDLDJCQUFLbkMsT0FBTCxDQUFhbUMsQ0FBYixHQUFpQixLQUFLdEMsT0FBTCxDQUFhc0MsQ0FBOUI7QUFDSDtBQUNKLG1CQVBELE1BT087QUFDSCx5QkFBS25DLE9BQUwsQ0FBYW1DLENBQWIsSUFBa0IsS0FBS3JDLFVBQXZCLENBREcsQ0FFSDs7QUFDQSx3QkFBSSxLQUFLRSxPQUFMLENBQWFtQyxDQUFiLEdBQWlCLEtBQUt0QyxPQUFMLENBQWFzQyxDQUFsQyxFQUFxQztBQUNqQywyQkFBS25DLE9BQUwsQ0FBYW1DLENBQWIsR0FBaUIsS0FBS3RDLE9BQUwsQ0FBYXNDLENBQTlCO0FBQ0g7QUFDSjtBQUNKLGlCQWZELE1BZU87QUFDSCxzQkFBTUMsQ0FBQyxHQUFHLEtBQUt2QyxPQUFMLENBQWF1QyxDQUFiLEdBQWlCLEtBQUt4QyxPQUFMLENBQWF3QyxDQUF4Qzs7QUFDQSxzQkFBSUEsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNQLHlCQUFLcEMsT0FBTCxDQUFhb0MsQ0FBYixJQUFrQixLQUFLdEMsVUFBdkIsQ0FETyxDQUVQOztBQUNBLHdCQUFJLEtBQUtFLE9BQUwsQ0FBYW9DLENBQWIsR0FBaUIsS0FBS3ZDLE9BQUwsQ0FBYXVDLENBQWxDLEVBQXFDO0FBQ2pDLDJCQUFLcEMsT0FBTCxDQUFhb0MsQ0FBYixHQUFpQixLQUFLdkMsT0FBTCxDQUFhdUMsQ0FBOUI7QUFDSDtBQUNKLG1CQU5ELE1BTU87QUFDSCx5QkFBS3BDLE9BQUwsQ0FBYW9DLENBQWIsSUFBa0IsS0FBS3RDLFVBQXZCLENBREcsQ0FFSDs7QUFDQSx3QkFBSSxLQUFLRSxPQUFMLENBQWFvQyxDQUFiLEdBQWlCLEtBQUt2QyxPQUFMLENBQWF1QyxDQUFsQyxFQUFxQztBQUNqQywyQkFBS3BDLE9BQUwsQ0FBYW9DLENBQWIsR0FBaUIsS0FBS3ZDLE9BQUwsQ0FBYXVDLENBQTlCO0FBQ0g7QUFFSjtBQUNKOztBQUNEO0FBN0RSOztBQStEQSxpQkFBS3BCLElBQUwsQ0FBVXFCLGdCQUFWLENBQTJCLEtBQUtyQyxPQUFoQztBQUNBaEIsWUFBQUEsSUFBSSxDQUFDc0QsUUFBTCxDQUFjN0MsUUFBZCxFQUF3QixLQUFLSSxPQUE3QixFQUFzQyxLQUFLRyxPQUEzQzs7QUFDQSxnQkFBSVAsUUFBUSxDQUFDOEMsTUFBVCxNQUFxQixJQUF6QixFQUErQjtBQUMzQixtQkFBS0MsZUFBTDtBQUNIO0FBRUo7OzttQ0FHZUMsSyxFQUF3QjtBQUFBLGdCQUFiQyxNQUFhLHVFQUFOLEtBQU07QUFDcEMsaUJBQUsxQixJQUFMLENBQVVxQixnQkFBVixDQUEyQkksS0FBSyxDQUFDeEIsYUFBakM7QUFDQSxpQkFBS3RCLGNBQUwsR0FBc0I4QyxLQUFLLENBQUNFLFlBQU47QUFBQTtBQUFBLHVDQUF0QjtBQUNBLGlCQUFLckMsT0FBTCxHQUFlb0MsTUFBZjs7QUFDQSxnQkFBRyxDQUFDLEtBQUsvQyxjQUFULEVBQXdCO0FBQ3BCaUQsY0FBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsNEJBQTRCSixLQUFLLENBQUNLLElBQS9DO0FBQ0gsYUFObUMsQ0FRcEM7OztBQUNBLGlCQUFLbEQsT0FBTCxDQUFhbUIsR0FBYixDQUFpQjBCLEtBQUssQ0FBQ3hCLGFBQXZCOztBQUNBLGlCQUFLcEIsT0FBTCxDQUFha0IsR0FBYixDQUFpQixLQUFLcEIsY0FBTCxDQUFvQmtDLFdBQXBCLENBQWdDWixhQUFqRDs7QUFDQSxnQkFBTWtCLENBQUMsR0FBRyxLQUFLdEMsT0FBTCxDQUFhc0MsQ0FBYixHQUFpQixLQUFLdkMsT0FBTCxDQUFhdUMsQ0FBeEM7O0FBQ0EsZ0JBQUdBLENBQUMsS0FBSyxDQUFULEVBQVc7QUFDUCxrQkFBR0EsQ0FBQyxHQUFDLENBQUwsRUFBTztBQUNILHFCQUFLbkIsSUFBTCxDQUFVVyxXQUFWLEdBQXdCLElBQUkzQyxJQUFKLEVBQXhCO0FBQ0gsZUFGRCxNQUVLO0FBQ0QscUJBQUtnQyxJQUFMLENBQVVXLFdBQVYsR0FBd0IsSUFBSTNDLElBQUosQ0FBUyxDQUFULEVBQVcsR0FBWCxFQUFlLENBQWYsQ0FBeEI7QUFDSDtBQUNKLGFBTkQsTUFNSztBQUNELGtCQUFNb0QsQ0FBQyxHQUFHLEtBQUt2QyxPQUFMLENBQWF1QyxDQUFiLEdBQWlCLEtBQUt4QyxPQUFMLENBQWF3QyxDQUF4Qzs7QUFDQSxrQkFBR0EsQ0FBQyxHQUFDLENBQUwsRUFBTztBQUNILHFCQUFLcEIsSUFBTCxDQUFVVyxXQUFWLEdBQXdCLElBQUkzQyxJQUFKLENBQVMsQ0FBVCxFQUFXLEdBQVgsRUFBZSxDQUFmLENBQXhCO0FBQ0gsZUFGRCxNQUVLO0FBQ0QscUJBQUtnQyxJQUFMLENBQVVXLFdBQVYsR0FBd0IsSUFBSTNDLElBQUosQ0FBUyxDQUFULEVBQVcsRUFBWCxFQUFjLENBQWQsQ0FBeEI7QUFDSDtBQUNKOztBQUVELGdCQUFHLEtBQUtzQixPQUFSLEVBQWdCO0FBQ1osa0JBQU15QyxPQUFPLEdBQUcsS0FBSy9CLElBQUwsQ0FBVWdDLGNBQVYsQ0FBeUIsS0FBekIsQ0FBaEI7QUFDQSxtQkFBS3ZDLElBQUwsR0FBWXNDLE9BQU8sQ0FBQ0osWUFBUixDQUFxQjFELHVCQUFyQixDQUFaOztBQUNBLG1CQUFLd0IsSUFBTCxDQUFVd0MsSUFBVjtBQUNIO0FBQ0o7Ozt5Q0FFb0I7QUFDakIsZ0JBQUcsS0FBS3RELGNBQVIsRUFBdUI7QUFDbkIsbUJBQUtJLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxtQkFBS0QsVUFBTCxHQUFrQixDQUFsQjtBQUNBLG1CQUFLTyxhQUFMLEdBQXFCLEdBQXJCO0FBQ0g7QUFDSjs7O3dDQUNtQjtBQUNoQixpQkFBS0EsYUFBTCxHQUFxQixDQUFDLEdBQXRCO0FBQ0E7QUFBQTtBQUFBLDREQUFvQmMsYUFBcEIsQ0FBa0MzQixTQUFTLENBQUMwRCxhQUE1QyxFQUEwRCxLQUFLbEMsSUFBL0QsRUFGZ0IsQ0FFcUQ7O0FBQ3JFLGlCQUFLUixVQUFMLEdBQWtCLElBQWxCLENBSGdCLENBSWhCOztBQUNBO0FBQUE7QUFBQSw4Q0FBYTJDLFNBQWIsQ0FBdUI7QUFBQTtBQUFBLHdDQUFVQyxXQUFWLENBQXNCQyxJQUE3QztBQUNIOzs7NENBRXdCQyxFLEVBQVk7QUFDakMsaUJBQUs1QyxPQUFMLEdBQWU0QyxFQUFmO0FBQ0gsVyxDQUVEOzs7OzRDQUN5QjtBQUVyQixpQkFBSzFELE9BQUwsQ0FBYW1CLEdBQWIsQ0FBaUIsS0FBS2xCLE9BQXRCOztBQUNBLGlCQUFLRixjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0JrQyxXQUFwQixDQUFnQ2MsWUFBaEM7QUFBQTtBQUFBLHVDQUF0Qjs7QUFDQSxnQkFBRyxLQUFLaEQsY0FBTCxDQUFvQmtDLFdBQXZCLEVBQW1DO0FBQy9CLG1CQUFLaEMsT0FBTCxDQUFha0IsR0FBYixDQUFpQixLQUFLcEIsY0FBTCxDQUFvQmtDLFdBQXBCLENBQWdDWixhQUFqRCxFQUQrQixDQUcvQjs7O0FBQ0Esa0JBQUcsS0FBS1gsT0FBUixFQUFnQjtBQUNaO0FBQ0Esb0JBQUcsS0FBS0UsVUFBUixFQUFtQjtBQUNmLHVCQUFLQSxVQUFMLEdBQWtCLEtBQWxCO0FBQ0E7QUFBQTtBQUFBLGtFQUFvQlcsYUFBcEIsQ0FBa0MzQixTQUFTLENBQUM0QixXQUE1QztBQUNIOztBQUdELG9CQUFJLEtBQUt6QixjQUFMLENBQW9CNEQsSUFBcEIsS0FBNkI7QUFBQTtBQUFBLDRDQUFVQyxhQUFWLENBQXdCQyxRQUF6RCxFQUFtRTtBQUMvRCx1QkFBS0MsaUJBQUw7QUFDSCxpQkFGRCxNQUVPLElBQUksS0FBSy9ELGNBQUwsQ0FBb0I0RCxJQUFwQixLQUE2QjtBQUFBO0FBQUEsNENBQVVDLGFBQVYsQ0FBd0JHLE9BQXpELEVBQWtFO0FBQ3JFLHVCQUFLQyxlQUFMO0FBQ0gsaUJBRk0sTUFFQSxJQUFJLEtBQUtqRSxjQUFMLENBQW9CNEQsSUFBcEIsS0FBNkI7QUFBQTtBQUFBLDRDQUFVQyxhQUFWLENBQXdCSyxHQUF6RCxFQUE2RDtBQUNoRTtBQUFBO0FBQUEsb0RBQWFWLFNBQWIsQ0FBdUI7QUFBQTtBQUFBLDhDQUFVQyxXQUFWLENBQXNCVSxHQUE3QyxFQURnRSxDQUNkO0FBQ3JEO0FBQ0osZUFuQjhCLENBc0IvQjs7O0FBQ0Esa0JBQUcsS0FBS25FLGNBQUwsQ0FBb0IwQixRQUFwQixLQUFpQztBQUFBO0FBQUEsMENBQVVDLFlBQVYsQ0FBdUJDLElBQTNELEVBQWdFO0FBQzVEO0FBQ0Esb0JBQUcsS0FBSzVCLGNBQUwsQ0FBb0JvRSxTQUF2QixFQUFpQztBQUM3Qix1QkFBSzlELGVBQUwsR0FBdUIsS0FBS3lCLFdBQUwsQ0FBaUIsS0FBS1YsSUFBTCxDQUFVVyxXQUFWLENBQXNCQyxDQUF2QyxDQUF2QjtBQUNBLHVCQUFLMUIsZUFBTCxHQUF1QixLQUFLRCxlQUFMLEdBQXVCLEVBQTlDLENBRjZCLENBRzdCOztBQUNBLHNCQUFJLEtBQUtKLE9BQUwsQ0FBYXNDLENBQWIsR0FBaUIsS0FBS3ZDLE9BQUwsQ0FBYXVDLENBQTlCLElBQW1DLEtBQUt0QyxPQUFMLENBQWF1QyxDQUFiLEdBQWlCLEtBQUt4QyxPQUFMLENBQWF3QyxDQUFsRSxJQUF5RSxLQUFLdkMsT0FBTCxDQUFhc0MsQ0FBYixHQUFnQixLQUFLdkMsT0FBTCxDQUFhdUMsQ0FBN0IsSUFBa0MsS0FBS3RDLE9BQUwsQ0FBYXVDLENBQWIsR0FBaUIsS0FBS3hDLE9BQUwsQ0FBYXdDLENBQTVJLEVBQStJO0FBQzNJLHlCQUFLakMsWUFBTCxDQUFrQlksR0FBbEIsQ0FBc0IsS0FBS2xCLE9BQUwsQ0FBYXVDLENBQW5DLEVBQXFDLENBQXJDLEVBQXVDLEtBQUt4QyxPQUFMLENBQWF1QyxDQUFwRDtBQUNILG1CQUZELE1BRUs7QUFDRCx5QkFBS2hDLFlBQUwsQ0FBa0JZLEdBQWxCLENBQXNCLEtBQUtuQixPQUFMLENBQWF3QyxDQUFuQyxFQUFxQyxDQUFyQyxFQUF1QyxLQUFLdkMsT0FBTCxDQUFhc0MsQ0FBcEQ7QUFDSDtBQUNKO0FBQ0osZUFaRCxNQVlNO0FBQ0YscUJBQUtsQyxlQUFMLEdBQXVCLEtBQUt5QixXQUFMLENBQWlCLEtBQUtWLElBQUwsQ0FBVVcsV0FBVixDQUFzQkMsQ0FBdkMsQ0FBdkI7QUFDQSxxQkFBSzFCLGVBQUwsR0FBdUIsS0FBS0QsZUFBTCxHQUF1QixFQUE5Qzs7QUFFQSxvQkFBSSxLQUFLSixPQUFMLENBQWFzQyxDQUFiLEdBQWlCLEtBQUt2QyxPQUFMLENBQWF1QyxDQUE5QixJQUFtQyxLQUFLdEMsT0FBTCxDQUFhdUMsQ0FBYixHQUFpQixLQUFLeEMsT0FBTCxDQUFhd0MsQ0FBbEUsSUFBeUUsS0FBS3ZDLE9BQUwsQ0FBYXNDLENBQWIsR0FBaUIsS0FBS3ZDLE9BQUwsQ0FBYXVDLENBQTlCLElBQW1DLEtBQUt0QyxPQUFMLENBQWF1QyxDQUFiLEdBQWlCLEtBQUt4QyxPQUFMLENBQWF3QyxDQUE3SSxFQUFnSjtBQUM1SSx1QkFBS2pDLFlBQUwsQ0FBa0JZLEdBQWxCLENBQXNCLEtBQUtsQixPQUFMLENBQWF1QyxDQUFuQyxFQUFxQyxDQUFyQyxFQUF1QyxLQUFLeEMsT0FBTCxDQUFhdUMsQ0FBcEQ7QUFDSCxpQkFGRCxNQUVLO0FBQ0QsdUJBQUtoQyxZQUFMLENBQWtCWSxHQUFsQixDQUFzQixLQUFLbkIsT0FBTCxDQUFhd0MsQ0FBbkMsRUFBcUMsQ0FBckMsRUFBdUMsS0FBS3ZDLE9BQUwsQ0FBYXNDLENBQXBEO0FBQ0g7QUFDSjs7QUFFRG5ELGNBQUFBLElBQUksQ0FBQ3NELFFBQUwsQ0FBYzdDLFFBQWQsRUFBdUIsS0FBS0csT0FBNUIsRUFBb0MsS0FBS08sWUFBekM7O0FBQ0Esa0JBQU02RCxDQUFDLEdBQUd2RSxRQUFRLENBQUM4QyxNQUFULEVBQVY7O0FBQ0EsbUJBQUtuQyxXQUFMLEdBQW1CLE1BQUkwQixJQUFJLENBQUNJLEVBQUwsR0FBVThCLENBQVYsR0FBYSxDQUFqQixDQUFuQjtBQUVILGFBbERELE1Ba0RLO0FBQ0QsbUJBQUtqRSxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsbUJBQUtKLGNBQUwsR0FBc0IsSUFBdEI7O0FBRUEsa0JBQUcsS0FBS2UsT0FBUixFQUFnQjtBQUNaLHFCQUFLQSxPQUFMLENBQWEsSUFBYjs7QUFDQSxxQkFBS0EsT0FBTCxHQUFlLElBQWY7QUFDSDtBQUNKO0FBQ0o7Ozs4Q0FFMEI7QUFDdkI7QUFDQSxpQkFBS0gsVUFBTCxHQUFrQixJQUFsQjtBQUNBLGlCQUFLVCxVQUFMLEdBQWtCLENBQWxCLENBSHVCLENBR0g7QUFDcEI7O0FBQ0EsaUJBQUtXLElBQUwsQ0FBVXdELElBQVY7O0FBQ0E7QUFBQTtBQUFBLDREQUFvQjlDLGFBQXBCLENBQWtDM0IsU0FBUyxDQUFDaUUsUUFBNUMsRUFBcUQsS0FBS3pDLElBQUwsQ0FBVUMsYUFBL0QsRUFBNkUsS0FBS3RCLGNBQUwsQ0FBb0J1RSxTQUFqRztBQUNIOzs7NENBRXdCO0FBQ3JCLGlCQUFLM0QsVUFBTCxHQUFrQixJQUFsQjtBQUNBLGlCQUFLVCxVQUFMLEdBQWtCLENBQWxCLENBRnFCLENBRUQ7O0FBQ3BCLGlCQUFLVyxJQUFMLENBQVV3RCxJQUFWOztBQUNBO0FBQUE7QUFBQSw0REFBb0I5QyxhQUFwQixDQUFrQzNCLFNBQVMsQ0FBQ21FLE9BQTVDLEVBQW9ELEtBQUszQyxJQUFMLENBQVVDLGFBQTlELEVBQTRFLEtBQUt0QixjQUFMLENBQW9CdUUsU0FBaEc7QUFDQTtBQUFBO0FBQUEsNERBQW9CL0MsYUFBcEIsQ0FBa0MzQixTQUFTLENBQUMyRSxTQUE1QyxFQUFzRCxLQUFLbkQsSUFBTCxDQUFVQyxhQUFoRSxFQUxxQixDQUswRDtBQUNsRjs7OzBDQUVzQjtBQUNuQixpQkFBS1YsVUFBTCxHQUFrQixLQUFsQjs7QUFDQSxpQkFBS0UsSUFBTCxDQUFVd0MsSUFBVjtBQUNILFcsQ0FDRDs7OztzQ0FDb0JtQixLLEVBQWE7QUFDN0IsZ0JBQUlDLENBQUMsR0FBR0QsS0FBUjs7QUFDQSxnQkFBR0MsQ0FBQyxJQUFFLENBQU4sRUFBUTtBQUNKQSxjQUFBQSxDQUFDLElBQUUsR0FBSDtBQUNIOztBQUNELG1CQUFPQSxDQUFQO0FBQ0g7Ozs7UUF4UW9CdEYsUyxvRkFDcEJRLFE7Ozs7O2lCQUNVLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIFBhcnRpY2xlU3lzdGVtQ29tcG9uZW50IH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IEN1c3RvbUV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi4vZGF0YS9DdXN0b21FdmVudExpc3RlbmVyXCI7XHJcbmltcG9ydCB7Um9hZFBvaW50fSBmcm9tIFwiLi9Sb2FkUG9pbnRcIjtcclxuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gJy4uL2RhdGEvQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4vQXVkaW9NYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5jb25zdCBFdmVudE5hbWUgPSBDb25zdGFudHMuRXZlbnROYW1lO1xyXG5cclxuY29uc3QgX3RlbXBWZWMgPSBuZXcgVmVjMygpO1xyXG5cclxuQGNjY2xhc3MoXCJDYXJcIilcclxuZXhwb3J0IGNsYXNzIENhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1heFNwZWVkID0gMC4yOy8v5Y+v6YWN572u55qE5pyA5aSn6YCf5bqmXHJcbiAgICAvL+Wwj+i9puacneWQkemXrumimFxyXG4gICAgcHJpdmF0ZSBfY3VyclJvYWRQb2ludDogUm9hZFBvaW50ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3BvaW50QSA9IG5ldyBWZWMzKCk7XHJcbiAgICBwcml2YXRlIF9wb2ludEIgPSBuZXcgVmVjMygpO1xyXG4gICAgcHJpdmF0ZSBfY3VyclNwZWVkID0gMDsvL+mAn+W6plxyXG4gICAgcHJpdmF0ZSBfaXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX29mZnNldCA9IG5ldyBWZWMzKCk7XHJcbiAgICBwcml2YXRlIF9vcmlnaW5Sb3RhdGlvbiA9IDA7XHJcbiAgICBwcml2YXRlIF90YXJnZXRSb3RhdGlvbiA9IDA7XHJcbiAgICBwcml2YXRlIF9jZW50ZXJQb2ludCA9IG5ldyBWZWMzKCk7XHJcbiAgICBwcml2YXRlIF9yb3RNZWFzdXJlID0gMDsvL+W6pumHj+WAvFxyXG4gICAgcHJpdmF0ZSBfYWNjZWxlcmF0aW9uID0gMC4yOyAvL+WKoOmAn+W6plxyXG4gICAgcHJpdmF0ZSBfaXNNYWluID0gZmFsc2U7Ly/nlLHkuo5BSeWwj+i9puWSjOS4u+inkuWwj+i9puWFrOeUqOS4gOWll+mAu+i+ke+8jOeUqOS6juWMuuWIhlxyXG4gICAgcHJpdmF0ZSBfaXNJbk9yZGVyID0gZmFsc2U7Ly/orqLljZXop6blj5E+5LmY5a6i5Zyo6L+Q5YqoXHJcbiAgICBwcml2YXRlIF9pc0JyYWtpbmcgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2dhczpQYXJ0aWNsZVN5c3RlbUNvbXBvbmVudCA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9vdmVyQ0Q6IEZ1bmN0aW9uID0gbnVsbDtcclxuXHJcbiAgICAvL+ebkeWQrOWKqOeUu+aSreaUvue7k+adn+eahOWbnuiwg1xyXG4gICAgcHVibGljIHN0YXJ0ICgpe1xyXG4gICAgICAgIEN1c3RvbUV2ZW50TGlzdGVuZXIub24oRXZlbnROYW1lLkZJTklTSEVEX1dBTEssdGhpcy5fZmluaXNoZWRXYWxrLHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkdDpudW1iZXIpe1xyXG4gICAgICAgIGlmICghdGhpcy5faXNNb3ZpbmcgfHwgdGhpcy5faXNJbk9yZGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb2Zmc2V0LnNldCh0aGlzLm5vZGUud29ybGRQb3NpdGlvbik7XHJcblxyXG4gICAgICAgIC8v5Yqg6YCfXHJcbiAgICAgICAgdGhpcy5fY3VyclNwZWVkICs9IHRoaXMuX2FjY2VsZXJhdGlvbiAqIGR0O1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyU3BlZWQgPiB0aGlzLm1heFNwZWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJTcGVlZCA9IHRoaXMubWF4U3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyU3BlZWQgPD0gMC4wMDEpIHtcclxuICAgICAgICAgICAgdGhpcy5faXNNb3ZpbmcgPSBmYWxzZTsvL+WIuei9puWIsDAuMDAxIOWwseWBnOatolxyXG4gICAgICAgICAgICBpZih0aGlzLl9pc0JyYWtpbmcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNCcmFraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBDdXN0b21FdmVudExpc3RlbmVyLmRpc3BhdGNoRXZlbnQoRXZlbnROYW1lLkVORF9CUkFLSU5HKTsvL+a0vuWPkeWIuei9puS6i+S7tlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5ZCR5pyd5ZCR5pa55ZCR6L+Q5YqoXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9jdXJyUm9hZFBvaW50Lm1vdmVUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUm9hZFBvaW50LlJvYWRNb3ZlVHlwZS5CRU5EOlxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0Um90YXRpb24gPSB0aGlzLl90YXJnZXRSb3RhdGlvbiAtIHRoaXMuX29yaWdpblJvdGF0aW9uOy8v5oC76ZyA6KaB5peL6L2s55qE6KeS5bqmXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyUm90YXRpb24gPSB0aGlzLl9jb252ZXJzaW9uKHRoaXMubm9kZS5ldWxlckFuZ2xlcy55KTsvL+W3sue7j+aXi+i9rOeahOinkuW6plxyXG4gICAgICAgICAgICAgICAgLy/lvZPliY3ov5vluqblgLwr77yI6YCf5bqmKuW6pumHj+WAvO+8iT7op5LluqYgIOW+l+WHuuS4i+S4gOermei/kOWKqOeahOinkuW6plxyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRTdGF0aW9uID0gKGN1cnJSb3RhdGlvbiAtIHRoaXMuX29yaWdpblJvdGF0aW9uKSArICh0aGlzLl9jdXJyU3BlZWQgKiB0aGlzLl9yb3RNZWFzdXJlICogKHRoaXMuX3RhcmdldFJvdGF0aW9uID4gdGhpcy5fb3JpZ2luUm90YXRpb24gPyAxIDogLTEpKVxyXG4gICAgICAgICAgICAgICAgLy/lrrnplJnlpITnkIZcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhuZXh0U3RhdGlvbikgPiBNYXRoLmFicyhvZmZzZXRSb3RhdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0U3RhdGlvbiA9IG9mZnNldFJvdGF0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8v5bqU6K+l5peL6L2s55qE6KeS5bqmXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBuZXh0U3RhdGlvbiArIHRoaXMuX29yaWdpblJvdGF0aW9uO1xyXG4gICAgICAgICAgICAgICAgX3RlbXBWZWMuc2V0KDAsIHRhcmdldCwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBfdGVtcFZlYztcclxuXHJcbiAgICAgICAgICAgICAgICAvL+i/kOWKqFxyXG4gICAgICAgICAgICAgICAgLy8gY29uc3Qgc2luID0gTWF0aC5zaW4obmV4dFN0YXRpb24qTWF0aC5QSS8xODApO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgY29zID0gTWF0aC5jb3MobmV4dFN0YXRpb24qTWF0aC5QSS8xODApO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgeExlbmd0aCA9IHRoaXMuX3BvaW50QS54IC0gdGhpcy5fY2VudGVyUG9pbnQueDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHpMZW5ndGggPSB0aGlzLiBfcG9pbnRBLnogLSB0aGlzLl9jZW50ZXJQb2ludC56O1xyXG4gICAgICAgICAgICAgICAgLy8gLy/msYLlh7rnm67moId46L205Z2Q5qCHXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCB4UG9zID0geExlbmd0aCAqIGNvcyArIHpMZW5ndGgqc2luICsgdGhpcy5fY2VudGVyUG9pbnQueDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHpQb3MgPSAteExlbmd0aCAqIHNpbiArIHpMZW5ndGgqY29zICsgdGhpcy5fY2VudGVyUG9pbnQuejsgXHJcbiAgICAgICAgICAgICAgICBWZWMzLnJvdGF0ZVkodGhpcy5fb2Zmc2V0LCB0aGlzLl9wb2ludEEsIHRoaXMuX2NlbnRlclBvaW50LCBuZXh0U3RhdGlvbiAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLl9vZmZzZXQuc2V0KHhQb3MsMCx6UG9zKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc3QgeiA9IHRoaXMuX3BvaW50Qi56IC0gdGhpcy5fcG9pbnRBLno7XHJcbiAgICAgICAgICAgICAgICBpZiAoeiAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh6ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WItuWumuS4gOS4quiMg+WbtFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXQueiArPSB0aGlzLl9jdXJyU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5a656ZSZ5aSE55CGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vZmZzZXQueiA+IHRoaXMuX3BvaW50Qi56KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXQueiA9IHRoaXMuX3BvaW50Qi56O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2Zmc2V0LnogLT0gdGhpcy5fY3VyclNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WuuemUmeWkhOeQhlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fb2Zmc2V0LnogPCB0aGlzLl9wb2ludEIueikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2Zmc2V0LnogPSB0aGlzLl9wb2ludEIuejtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IHRoaXMuX3BvaW50Qi54IC0gdGhpcy5fcG9pbnRBLng7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldC54ICs9IHRoaXMuX2N1cnJTcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/lrrnplJnlpITnkIZcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX29mZnNldC54ID4gdGhpcy5fcG9pbnRCLngpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldC54ID0gdGhpcy5fcG9pbnRCLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXQueCAtPSB0aGlzLl9jdXJyU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5a656ZSZ5aSE55CGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vZmZzZXQueCA8IHRoaXMuX3BvaW50Qi54KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXQueCA9IHRoaXMuX3BvaW50Qi54O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuc2V0V29ybGRQb3NpdGlvbih0aGlzLl9vZmZzZXQpO1xyXG4gICAgICAgIFZlYzMuc3VidHJhY3QoX3RlbXBWZWMsIHRoaXMuX3BvaW50QiwgdGhpcy5fb2Zmc2V0KTtcclxuICAgICAgICBpZiAoX3RlbXBWZWMubGVuZ3RoKCkgPD0gMC4wMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9hcnJpdmFsU2F0YWlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0RW50cnkoZW50cnk6Tm9kZSxpc01haW49ZmFsc2Upe1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRXb3JsZFBvc2l0aW9uKGVudHJ5LndvcmxkUG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMuX2N1cnJSb2FkUG9pbnQgPSBlbnRyeS5nZXRDb21wb25lbnQoUm9hZFBvaW50KTsgXHJcbiAgICAgICAgdGhpcy5faXNNYWluID0gaXNNYWluOyBcclxuICAgICAgICBpZighdGhpcy5fY3VyclJvYWRQb2ludCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhpcyBpcyBubyBSb2FkUG9pbnQgaW4nICsgZW50cnkubmFtZSk7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgLy/pgJrov4fkuIvkuIDkuKrngrnkuI7mnKzngrnnmoTlt67orqHnrpflsI/ovabmnJ3lkJFcclxuICAgICAgICB0aGlzLl9wb2ludEEuc2V0KGVudHJ5LndvcmxkUG9zaXRpb24pXHJcbiAgICAgICAgdGhpcy5fcG9pbnRCLnNldCh0aGlzLl9jdXJyUm9hZFBvaW50Lm5leHRTdGF0aW9uLndvcmxkUG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IHogPSB0aGlzLl9wb2ludEIueiAtIHRoaXMuX3BvaW50QS56O1xyXG4gICAgICAgIGlmKHogIT09IDApe1xyXG4gICAgICAgICAgICBpZih6PDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLDE4MCwwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSB0aGlzLl9wb2ludEIueCAtIHRoaXMuX3BvaW50QS54O1xyXG4gICAgICAgICAgICBpZih4PjApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwyNzAsMCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCw5MCwwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5faXNNYWluKXtcclxuICAgICAgICAgICAgY29uc3QgZ2FzTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZ2FzJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhcyA9IGdhc05vZGUuZ2V0Q29tcG9uZW50KFBhcnRpY2xlU3lzdGVtQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgdGhpcy5fZ2FzLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0UnVubmluZygpe1xyXG4gICAgICAgIGlmKHRoaXMuX2N1cnJSb2FkUG9pbnQpe1xyXG4gICAgICAgICAgICB0aGlzLl9pc01vdmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJTcGVlZCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjY2VsZXJhdGlvbiA9IDAuMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RvcFJ1bm5pbmcoKXtcclxuICAgICAgICB0aGlzLl9hY2NlbGVyYXRpb24gPSAtMC4zO1xyXG4gICAgICAgIEN1c3RvbUV2ZW50TGlzdGVuZXIuZGlzcGF0Y2hFdmVudChFdmVudE5hbWUuU1RBUlRfQlJBS0lORyx0aGlzLm5vZGUpOy8v5omn6KGMU1RBUlRfQlJBS0lOR1xyXG4gICAgICAgIHRoaXMuX2lzQnJha2luZyA9IHRydWU7XHJcbiAgICAgICAgLy90aGlzLl9pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLkF1ZGlvU291cmNlLlNUT1ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlQWZ0ZXJGaW5pc2hlZChjZDpGdW5jdGlvbil7XHJcbiAgICAgICAgdGhpcy5fb3ZlckNEID0gY2Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liLDnq5lcclxuICAgIHByaXZhdGUgX2Fycml2YWxTYXRhaW9uKCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fcG9pbnRBLnNldCh0aGlzLl9wb2ludEIpO1xyXG4gICAgICAgIHRoaXMuX2N1cnJSb2FkUG9pbnQgPSB0aGlzLl9jdXJyUm9hZFBvaW50Lm5leHRTdGF0aW9uLmdldENvbXBvbmVudChSb2FkUG9pbnQpO1xyXG4gICAgICAgIGlmKHRoaXMuX2N1cnJSb2FkUG9pbnQubmV4dFN0YXRpb24pe1xyXG4gICAgICAgICAgICB0aGlzLl9wb2ludEIuc2V0KHRoaXMuX2N1cnJSb2FkUG9pbnQubmV4dFN0YXRpb24ud29ybGRQb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICAvL+WIsOermeS5mOWuouS6i+S7tlxyXG4gICAgICAgICAgICBpZih0aGlzLl9pc01haW4pe1xyXG4gICAgICAgICAgICAgICAgLy/op6blj5HliLnovabliqjnlLtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2lzQnJha2luZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNCcmFraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5kaXNwYXRjaEV2ZW50KEV2ZW50TmFtZS5FTkRfQlJBS0lORyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyUm9hZFBvaW50LnR5cGUgPT09IFJvYWRQb2ludC5Sb2FkUG9pbnRUeXBlLkdSRUVUSU5HKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ3JlZXRpbmdDdXN0b21lcigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jdXJyUm9hZFBvaW50LnR5cGUgPT09IFJvYWRQb2ludC5Sb2FkUG9pbnRUeXBlLkdPT0RCWUUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90YWtpbmdDdXN0b21lcigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jdXJyUm9hZFBvaW50LnR5cGUgPT09IFJvYWRQb2ludC5Sb2FkUG9pbnRUeXBlLkVORCl7XHJcbiAgICAgICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuQXVkaW9Tb3VyY2UuV0lOKTsvL+WIsOi+vue7iOeCueaSreaUvuiDnOWIqVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy/ovazlvK8s5Yiw6L6+5p+Q5LiA5Liq56uZXHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2N1cnJSb2FkUG9pbnQubW92ZVR5cGUgPT09IFJvYWRQb2ludC5Sb2FkTW92ZVR5cGUuQkVORCl7XHJcbiAgICAgICAgICAgICAgICAvL+WIpOaWreaYr+mhuumAhuaXtumSiFxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fY3VyclJvYWRQb2ludC5jbG9ja3dpc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29yaWdpblJvdGF0aW9uID0gdGhpcy5fY29udmVyc2lvbih0aGlzLm5vZGUuZXVsZXJBbmdsZXMueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGFyZ2V0Um90YXRpb24gPSB0aGlzLl9vcmlnaW5Sb3RhdGlvbiAtIDkwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5om+5Ye66aG65pe26ZKI55qE5ZyG5b+DXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoKHRoaXMuX3BvaW50Qi56IDwgdGhpcy5fcG9pbnRBLnogJiYgdGhpcy5fcG9pbnRCLnggPiB0aGlzLl9wb2ludEEueCkgfHwgKHRoaXMuX3BvaW50Qi56ID50aGlzLl9wb2ludEEueiAmJiB0aGlzLl9wb2ludEIueCA8IHRoaXMuX3BvaW50QS54KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NlbnRlclBvaW50LnNldCh0aGlzLl9wb2ludEIueCwwLHRoaXMuX3BvaW50QS56KVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jZW50ZXJQb2ludC5zZXQodGhpcy5fcG9pbnRBLngsMCx0aGlzLl9wb2ludEIueilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29yaWdpblJvdGF0aW9uID0gdGhpcy5fY29udmVyc2lvbih0aGlzLm5vZGUuZXVsZXJBbmdsZXMueSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90YXJnZXRSb3RhdGlvbiA9IHRoaXMuX29yaWdpblJvdGF0aW9uIC0gOTA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoKHRoaXMuX3BvaW50Qi56ID4gdGhpcy5fcG9pbnRBLnogJiYgdGhpcy5fcG9pbnRCLnggPiB0aGlzLl9wb2ludEEueCkgfHwgKHRoaXMuX3BvaW50Qi56IDwgdGhpcy5fcG9pbnRBLnogJiYgdGhpcy5fcG9pbnRCLnggPCB0aGlzLl9wb2ludEEueCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NlbnRlclBvaW50LnNldCh0aGlzLl9wb2ludEIueCwwLHRoaXMuX3BvaW50QS56KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2VudGVyUG9pbnQuc2V0KHRoaXMuX3BvaW50QS54LDAsdGhpcy5fcG9pbnRCLnopXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFZlYzMuc3VidHJhY3QoX3RlbXBWZWMsdGhpcy5fcG9pbnRBLHRoaXMuX2NlbnRlclBvaW50KTtcclxuICAgICAgICAgICAgY29uc3QgciA9IF90ZW1wVmVjLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9yb3RNZWFzdXJlID0gOTAvKE1hdGguUEkgKiByIC8yKTtcclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJSb2FkUG9pbnQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5fb3ZlckNEKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX292ZXJDRCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX292ZXJDRCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgX2dyZWV0aW5nQ3VzdG9tZXIoKXtcclxuICAgICAgICAvL+aOpeWuolxyXG4gICAgICAgIHRoaXMuX2lzSW5PcmRlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fY3VyclNwZWVkID0gMDsvL+a4hemZpOmAn+W6plxyXG4gICAgICAgIC8vZGlzcGF0Y2hFdmVudOa0vuWPkSDlsI/ovabnmoTkvY3nva4g5b2T5YmN55qE5pa55ZCRXHJcbiAgICAgICAgdGhpcy5fZ2FzLnN0b3AoKTtcclxuICAgICAgICBDdXN0b21FdmVudExpc3RlbmVyLmRpc3BhdGNoRXZlbnQoRXZlbnROYW1lLkdSRUVUSU5HLHRoaXMubm9kZS53b3JsZFBvc2l0aW9uLHRoaXMuX2N1cnJSb2FkUG9pbnQuZGlyZWN0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Rha2luZ0N1c3RvbWVyKCl7XHJcbiAgICAgICAgdGhpcy5faXNJbk9yZGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9jdXJyU3BlZWQgPSAwOy8v5riF6Zmk6YCf5bqmXHJcbiAgICAgICAgdGhpcy5fZ2FzLnN0b3AoKTtcclxuICAgICAgICBDdXN0b21FdmVudExpc3RlbmVyLmRpc3BhdGNoRXZlbnQoRXZlbnROYW1lLkdPT0RCWUUsdGhpcy5ub2RlLndvcmxkUG9zaXRpb24sdGhpcy5fY3VyclJvYWRQb2ludC5kaXJlY3Rpb24pXHJcbiAgICAgICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5kaXNwYXRjaEV2ZW50KEV2ZW50TmFtZS5TSE9XX0NPSU4sdGhpcy5ub2RlLndvcmxkUG9zaXRpb24pOy8v6YCB5a6i5by56YeR5biBXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZmluaXNoZWRXYWxrKCl7XHJcbiAgICAgICAgdGhpcy5faXNJbk9yZGVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fZ2FzLnBsYXkoKTsgICAgXHJcbiAgICB9XHJcbiAgICAvL+i9rOaNouinkuW6puato+i0n1xyXG4gICAgcHJpdmF0ZSBfY29udmVyc2lvbih2YWx1ZTpudW1iZXIpe1xyXG4gICAgICAgIGxldCBhID0gdmFsdWU7XHJcbiAgICAgICAgaWYoYTw9MCl7XHJcbiAgICAgICAgICAgIGErPTM2MFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYTtcclxuICAgIH1cclxufVxyXG4iXX0=