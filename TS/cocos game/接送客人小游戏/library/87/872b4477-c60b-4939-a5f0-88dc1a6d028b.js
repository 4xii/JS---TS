System.register(["cc", "code-quality:cr", "./RoadPoint.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Vec3, RoadPoint, _dec, _class, _temp, _crd, ccclass, property, _tempVec, Car;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfRoadPoint(extras) {
    _reporterNs.report("RoadPoint", "./RoadPoint", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
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
    }, function (_RoadPointJs) {
      RoadPoint = _RoadPointJs.RoadPoint;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "872b4R3xgtJOaXwiNwabQKL", "Car", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;
      _tempVec = new Vec3();

      _export("Car", Car = (_dec = ccclass("Car"), _dec(_class = (_temp =
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
          _this._currRoadPoint = null;
          _this._pointA = new Vec3();
          _this._pointB = new Vec3();
          _this._currSpeed = 0.1;
          _this._isMoving = false;
          _this._offset = new Vec3();
          return _this;
        }

        _createClass(Car, [{
          key: "update",
          value: function update(dt) {
            if (this._isMoving) {
              this._offset.set(this.node.worldPosition); //向朝向方向运动


              switch (this._currRoadPoint.moveType) {
                case (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                  error: Error()
                }), RoadPoint) : RoadPoint).RoadMoveType.BEND:
                  break;

                default:
                  var z = this._pointB.z - this._pointA.z;

                  if (z !== 0) {
                    if (z > 0) {
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
          }
        }, {
          key: "setEntry",
          value: function setEntry(entry) {
            this.node.setWorldPosition(entry.worldPosition);
            this._currRoadPoint = entry.getComponent(_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
              error: Error()
            }), RoadPoint) : RoadPoint);

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
            }
          }
        }, {
          key: "stopRunning",
          value: function stopRunning() {
            this._isMoving = false;
          } //到站

        }, {
          key: "_arrivalSataion",
          value: function _arrivalSataion() {
            this._pointA.set(this._pointB);

            this._currRoadPoint = this._currRoadPoint.nextStation.getComponent(_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
              error: Error()
            }), RoadPoint) : RoadPoint);

            if (this._currRoadPoint.nextStation) {
              this._pointB.set(this._currRoadPoint.nextStation.worldPosition);
            } else {
              this._isMoving = false;
              this._currRoadPoint = null;
            }
          }
        }]);

        return Car;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2dhbWUvQ2FyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJWZWMzIiwiUm9hZFBvaW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiX3RlbXBWZWMiLCJDYXIiLCJfY3VyclJvYWRQb2ludCIsIl9wb2ludEEiLCJfcG9pbnRCIiwiX2N1cnJTcGVlZCIsIl9pc01vdmluZyIsIl9vZmZzZXQiLCJkdCIsInNldCIsIm5vZGUiLCJ3b3JsZFBvc2l0aW9uIiwibW92ZVR5cGUiLCJSb2FkTW92ZVR5cGUiLCJCRU5EIiwieiIsIngiLCJzZXRXb3JsZFBvc2l0aW9uIiwic3VidHJhY3QiLCJsZW5ndGgiLCJfYXJyaXZhbFNhdGFpb24iLCJlbnRyeSIsImdldENvbXBvbmVudCIsImNvbnNvbGUiLCJ3YXJuIiwibmFtZSIsIm5leHRTdGF0aW9uIiwiZXVsZXJBbmdsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFDOUJDLE1BQUFBLFMsZ0JBQUFBLFM7Ozs7OztBQUNBQyxNQUFBQSxPLEdBQXNCSixVLENBQXRCSSxPO0FBQVNDLE1BQUFBLFEsR0FBYUwsVSxDQUFiSyxRO0FBRVhDLE1BQUFBLFEsR0FBVyxJQUFJSixJQUFKLEU7O3FCQUdKSyxHLFdBRFpILE9BQU8sQ0FBQyxLQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUdJSSxjLEdBQTRCLEk7Z0JBQzVCQyxPLEdBQVUsSUFBSVAsSUFBSixFO2dCQUNWUSxPLEdBQVUsSUFBSVIsSUFBSixFO2dCQUVWUyxVLEdBQWEsRztnQkFDYkMsUyxHQUFZLEs7Z0JBQ1pDLE8sR0FBVSxJ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LENBQW9Cd0IsV0FBcEIsQ0FBZ0NKLFlBQWhDO0FBQUE7QUFBQSx1Q0FBdEI7O0FBQ0EsZ0JBQUcsS0FBS3BCLGNBQUwsQ0FBb0J3QixXQUF2QixFQUFtQztBQUMvQixtQkFBS3RCLE9BQUwsQ0FBYUssR0FBYixDQUFpQixLQUFLUCxjQUFMLENBQW9Cd0IsV0FBcEIsQ0FBZ0NmLGFBQWpEO0FBQ0gsYUFGRCxNQUVLO0FBQ0QsbUJBQUtMLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxtQkFBS0osY0FBTCxHQUFzQixJQUF0QjtBQUNIO0FBQ0o7Ozs7UUExR29CUCxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMzIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7Um9hZFBvaW50fSBmcm9tIFwiLi9Sb2FkUG9pbnRcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbmNvbnN0IF90ZW1wVmVjID0gbmV3IFZlYzMoKTtcclxuXHJcbkBjY2NsYXNzKFwiQ2FyXCIpXHJcbmV4cG9ydCBjbGFzcyBDYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLy/lsI/ovabmnJ3lkJHpl67pophcclxuICAgIHByaXZhdGUgX2N1cnJSb2FkUG9pbnQ6IFJvYWRQb2ludCA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9wb2ludEEgPSBuZXcgVmVjMygpO1xyXG4gICAgcHJpdmF0ZSBfcG9pbnRCID0gbmV3IFZlYzMoKTtcclxuICAgIC8v5b2T5YmN55qE6YCf5bqmXHJcbiAgICBwcml2YXRlIF9jdXJyU3BlZWQgPSAwLjE7XHJcbiAgICBwcml2YXRlIF9pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfb2Zmc2V0ID0gbmV3IFZlYzMoKTtcclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGR0Om51bWJlcil7XHJcbiAgICAgICAgaWYodGhpcy5faXNNb3Zpbmcpe1xyXG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQuc2V0KHRoaXMubm9kZS53b3JsZFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgLy/lkJHmnJ3lkJHmlrnlkJHov5DliqhcclxuICAgICAgICAgICAgc3dpdGNoKHRoaXMuX2N1cnJSb2FkUG9pbnQubW92ZVR5cGUpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSBSb2FkUG9pbnQuUm9hZE1vdmVUeXBlLkJFTkQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHogPSB0aGlzLl9wb2ludEIueiAtIHRoaXMuX3BvaW50QS56O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHogIT09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih6ID4wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldC56ICs9IHRoaXMuX2N1cnJTcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5a656ZSZ5aSE55CGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9vZmZzZXQueiA+IHRoaXMuX3BvaW50Qi56KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXQueiA9IHRoaXMuX3BvaW50Qi56O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXQueiAtPSB0aGlzLl9jdXJyU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WuuemUmeWkhOeQhlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fb2Zmc2V0LnogPCB0aGlzLl9wb2ludEIueil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2Zmc2V0LnogPSB0aGlzLl9wb2ludEIuejtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gdGhpcy5fcG9pbnRCLnggLSB0aGlzLl9wb2ludEEueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoeCA+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXQueCArPSB0aGlzLl9jdXJyU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WuuemUmeWkhOeQhlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fb2Zmc2V0LnggPiB0aGlzLl9wb2ludEIueCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2Zmc2V0LnggPSB0aGlzLl9wb2ludEIueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2Zmc2V0LnggLT0gdGhpcy5fY3VyclNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lrrnplJnlpITnkIZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX29mZnNldC54IDwgdGhpcy5fcG9pbnRCLngpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldC54ID0gdGhpcy5fcG9pbnRCLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0V29ybGRQb3NpdGlvbih0aGlzLl9vZmZzZXQpO1xyXG4gICAgICAgICAgICBWZWMzLnN1YnRyYWN0KF90ZW1wVmVjLHRoaXMuX3BvaW50Qix0aGlzLl9vZmZzZXQpO1xyXG4gICAgICAgICAgICBpZihfdGVtcFZlYy5sZW5ndGgoKSA8PSAwLjAxKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Fycml2YWxTYXRhaW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0RW50cnkoZW50cnk6Tm9kZSl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFdvcmxkUG9zaXRpb24oZW50cnkud29ybGRQb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5fY3VyclJvYWRQb2ludCA9IGVudHJ5LmdldENvbXBvbmVudChSb2FkUG9pbnQpOyBcclxuICAgICAgICBpZighdGhpcy5fY3VyclJvYWRQb2ludCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhpcyBpcyBubyBSb2FkUG9pbnQgaW4nICsgZW50cnkubmFtZSk7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgLy/pgJrov4fkuIvkuIDkuKrngrnkuI7mnKzngrnnmoTlt67orqHnrpflsI/ovabmnJ3lkJFcclxuICAgICAgICB0aGlzLl9wb2ludEEuc2V0KGVudHJ5LndvcmxkUG9zaXRpb24pXHJcbiAgICAgICAgdGhpcy5fcG9pbnRCLnNldCh0aGlzLl9jdXJyUm9hZFBvaW50Lm5leHRTdGF0aW9uLndvcmxkUG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IHogPSB0aGlzLl9wb2ludEIueiAtIHRoaXMuX3BvaW50QS56O1xyXG4gICAgICAgIGlmKHogIT09IDApe1xyXG4gICAgICAgICAgICBpZih6PDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLDE4MCwwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSB0aGlzLl9wb2ludEIueCAtIHRoaXMuX3BvaW50QS54O1xyXG4gICAgICAgICAgICBpZih4PjApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwyNzAsMCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCw5MCwwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRSdW5uaW5nKCl7XHJcbiAgICAgICAgaWYodGhpcy5fY3VyclJvYWRQb2ludCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzTW92aW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RvcFJ1bm5pbmcoKXtcclxuICAgICAgICB0aGlzLl9pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy/liLDnq5lcclxuICAgIHByaXZhdGUgX2Fycml2YWxTYXRhaW9uKCl7XHJcbiAgICAgICAgdGhpcy5fcG9pbnRBLnNldCh0aGlzLl9wb2ludEIpO1xyXG4gICAgICAgIHRoaXMuX2N1cnJSb2FkUG9pbnQgPSB0aGlzLl9jdXJyUm9hZFBvaW50Lm5leHRTdGF0aW9uLmdldENvbXBvbmVudChSb2FkUG9pbnQpO1xyXG4gICAgICAgIGlmKHRoaXMuX2N1cnJSb2FkUG9pbnQubmV4dFN0YXRpb24pe1xyXG4gICAgICAgICAgICB0aGlzLl9wb2ludEIuc2V0KHRoaXMuX2N1cnJSb2FkUG9pbnQubmV4dFN0YXRpb24ud29ybGRQb3NpdGlvbik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJSb2FkUG9pbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=