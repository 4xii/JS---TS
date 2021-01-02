System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _class2, _temp, _crd, ccclass, property, EventName, CustomerState, AudioSource, Constants;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0,
    EventName: void 0,
    CustomerState: void 0,
    AudioSource: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "e27cegmjMNDbauWXSrlsilX", "Constants", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (EventName) {
        EventName["GREETING"] = "greeting";
        EventName["GOODBYE"] = "goodbye";
        EventName["FINISHED_WALK"] = "finished-walk";
        EventName["START_BRAKING"] = "start-braking";
        EventName["END_BRAKING"] = "end-braking";
        EventName["SHOW_COIN"] = "show-coin";
      })(EventName || (EventName = {}));

      (function (CustomerState) {
        CustomerState[CustomerState["NONE"] = 0] = "NONE";
        CustomerState[CustomerState["GREETING"] = 1] = "GREETING";
        CustomerState[CustomerState["GOODBYE"] = 2] = "GOODBYE";
      })(CustomerState || (CustomerState = {}));

      (function (AudioSource) {
        AudioSource["BACKGROUND"] = "background";
        AudioSource["CLICK"] = "click";
        AudioSource["CRASH"] = "crash";
        AudioSource["GETMONEY"] = "getMoney";
        AudioSource["INCAR"] = "inCar";
        AudioSource["NEWORDER"] = "newOrder";
        AudioSource["START"] = "start";
        AudioSource["STOP"] = "stop";
        AudioSource["TOOTONG1"] = "tooting1";
        AudioSource["TOOTONG2"] = "tooting2";
        AudioSource["WIN"] = "win";
      })(AudioSource || (AudioSource = {}));

      _export("Constants", Constants = (_dec = ccclass("Constants"), _dec(_class = (_temp = _class2 = function Constants() {
        _classCallCheck(this, Constants);
      }, _class2.EventName = EventName, _class2.CustomerState = CustomerState, _class2.AudioSource = AudioSource, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2RhdGEvQ29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFdmVudE5hbWUiLCJDdXN0b21lclN0YXRlIiwiQXVkaW9Tb3VyY2UiLCJDb25zdGFudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JELFUsQ0FBdEJDLE87QUFBU0MsTUFBQUEsUSxHQUFhRixVLENBQWJFLFE7O2lCQUVaQyxTO0FBQUFBLFFBQUFBLFM7QUFBQUEsUUFBQUEsUztBQUFBQSxRQUFBQSxTO0FBQUFBLFFBQUFBLFM7QUFBQUEsUUFBQUEsUztBQUFBQSxRQUFBQSxTO1NBQUFBLFMsS0FBQUEsUzs7aUJBVUFDLGE7QUFBQUEsUUFBQUEsYSxDQUFBQSxhO0FBQUFBLFFBQUFBLGEsQ0FBQUEsYTtBQUFBQSxRQUFBQSxhLENBQUFBLGE7U0FBQUEsYSxLQUFBQSxhOztpQkFPQUMsVztBQUFBQSxRQUFBQSxXO0FBQUFBLFFBQUFBLFc7QUFBQUEsUUFBQUEsVztBQUFBQSxRQUFBQSxXO0FBQUFBLFFBQUFBLFc7QUFBQUEsUUFBQUEsVztBQUFBQSxRQUFBQSxXO0FBQUFBLFFBQUFBLFc7QUFBQUEsUUFBQUEsVztBQUFBQSxRQUFBQSxXO0FBQUFBLFFBQUFBLFc7U0FBQUEsVyxLQUFBQSxXOzsyQkFlUUMsUyxXQURaTCxPQUFPLENBQUMsV0FBRCxDOztpQkFFVUUsUyxHQUFZQSxTLFVBQ1pDLGEsR0FBZ0JBLGEsVUFDaEJDLFcsR0FBY0EsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuZW51bSBFdmVudE5hbWV7XHJcbiAgICBHUkVFVElORyA9ICdncmVldGluZycsXHJcbiAgICBHT09EQllFID0gJ2dvb2RieWUnLFxyXG4gICAgRklOSVNIRURfV0FMSyA9ICdmaW5pc2hlZC13YWxrJyxcclxuICAgIFNUQVJUX0JSQUtJTkcgPSAnc3RhcnQtYnJha2luZycsXHJcbiAgICBFTkRfQlJBS0lORyA9ICdlbmQtYnJha2luZycsXHJcbiAgICBTSE9XX0NPSU4gPSAnc2hvdy1jb2luJyxcclxufVxyXG5cclxuLy/kuZjlrqLnirbmgIFcclxuZW51bSBDdXN0b21lclN0YXRlIHtcclxuICAgIE5PTkUsXHJcbiAgICBHUkVFVElORyxcclxuICAgIEdPT0RCWUUsXHJcbn1cclxuXHJcbi8v6Z+z5LmQXHJcbmVudW0gQXVkaW9Tb3VyY2V7XHJcbiAgICBCQUNLR1JPVU5EID0gJ2JhY2tncm91bmQnLFxyXG4gICAgQ0xJQ0sgPSAnY2xpY2snLFxyXG4gICAgQ1JBU0ggPSAnY3Jhc2gnLFxyXG4gICAgR0VUTU9ORVkgPSAnZ2V0TW9uZXknLFxyXG4gICAgSU5DQVIgPSAnaW5DYXInLFxyXG4gICAgTkVXT1JERVIgPSAnbmV3T3JkZXInLFxyXG4gICAgU1RBUlQgPSAnc3RhcnQnLFxyXG4gICAgU1RPUCA9ICdzdG9wJyxcclxuICAgIFRPT1RPTkcxID0gJ3Rvb3RpbmcxJyxcclxuICAgIFRPT1RPTkcyID0gJ3Rvb3RpbmcyJyxcclxuICAgIFdJTiA9ICd3aW4nLFxyXG59XHJcblxyXG5AY2NjbGFzcyhcIkNvbnN0YW50c1wiKVxyXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRze1xyXG4gICAgcHVibGljIHN0YXRpYyBFdmVudE5hbWUgPSBFdmVudE5hbWU7XHJcbiAgICBwdWJsaWMgc3RhdGljIEN1c3RvbWVyU3RhdGUgPSBDdXN0b21lclN0YXRlO1xyXG4gICAgcHVibGljIHN0YXRpYyBBdWRpb1NvdXJjZSA9IEF1ZGlvU291cmNlO1xyXG59XHJcbiJdfQ==