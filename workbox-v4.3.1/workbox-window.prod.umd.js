!(function(n, t) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? t(exports)
    : typeof define === 'function' && define.amd
    ? define(['exports'], t)
    : t(((n = n || self).workbox = {}));
})(this, function(n) {
  try {
    self['workbox:window:4.3.1'] && _();
  } catch (n) {}
  const t = function(n, t) {
    return new Promise(function(i) {
      const e = new MessageChannel();
      (e.port1.onmessage = function(n) {
        return i(n.data);
      }),
        n.postMessage(t, [e.port2]);
    });
  };
  function i(n, t) {
    for (let i = 0; i < t.length; i++) {
      const e = t[i];
      (e.enumerable = e.enumerable || !1),
        (e.configurable = !0),
        'value' in e && (e.writable = !0),
        Object.defineProperty(n, e.key, e);
    }
  }
  function e(n) {
    if (void 0 === n)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n;
  }
  try {
    self['workbox:core:4.3.1'] && _();
  } catch (n) {}
  const r = function() {
    const n = this;
    this.promise = new Promise(function(t, i) {
      (n.resolve = t), (n.reject = i);
    });
  };
  const o = function(n, t) {
    return new URL(n, location).href === new URL(t, location).href;
  };
  const u = function(n, t) {
    Object.assign(this, t, { type: n });
  };
  function s(n) {
    return function() {
      for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
      try {
        return Promise.resolve(n.apply(this, t));
      } catch (n) {
        return Promise.reject(n);
      }
    };
  }
  function a(n, t, i) {
    return i ? (t ? t(n) : n) : ((n && n.then) || (n = Promise.resolve(n)), t ? n.then(t) : n);
  }
  function c() {}
  const f = (function(n) {
    let f;
    let h;
    function v(t, i) {
      let o;
      return (
        void 0 === i && (i = {}),
        ((o = n.call(this) || this).t = t),
        (o.i = i),
        (o.o = 0),
        (o.u = new r()),
        (o.s = new r()),
        (o.h = new r()),
        (o.v = o.v.bind(e(e(o)))),
        (o.l = o.l.bind(e(e(o)))),
        (o.g = o.g.bind(e(e(o)))),
        (o.m = o.m.bind(e(e(o)))),
        o
      );
    }
    (h = n),
      ((f = v).prototype = Object.create(h.prototype)),
      (f.prototype.constructor = f),
      (f.__proto__ = h);
    let l;
    let w;
    let d;
    const g = v.prototype;
    return (
      (g.register = s(function(n) {
        let t;
        let i;
        const e = this;
        const r = (void 0 === n ? {} : n).immediate;
        const s = void 0 !== r && r;
        return (
          (t = function() {
            return (
              (e.p = Boolean(navigator.serviceWorker.controller)),
              (e.P = e.j()),
              a(e.O(), function(n) {
                (e.R = n),
                  e.P &&
                    ((e._ = e.P),
                    e.s.resolve(e.P),
                    e.h.resolve(e.P),
                    e.k(e.P),
                    e.P.addEventListener('statechange', e.l, { once: !0 }));
                const t = e.R.waiting;
                return (
                  t &&
                    o(t.scriptURL, e.t) &&
                    ((e._ = t),
                    Promise.resolve().then(function() {
                      e.dispatchEvent(new u('waiting', { sw: t, wasWaitingBeforeRegister: !0 }));
                    })),
                  e._ && e.u.resolve(e._),
                  e.R.addEventListener('updatefound', e.g),
                  navigator.serviceWorker.addEventListener('controllerchange', e.m, { once: !0 }),
                  'BroadcastChannel' in self &&
                    ((e.B = new BroadcastChannel('workbox')), e.B.addEventListener('message', e.v)),
                  navigator.serviceWorker.addEventListener('message', e.v),
                  e.R
                );
              })
            );
          }),
          (i = (function() {
            if (!s && document.readyState !== 'complete')
              return (function(n, t) {
                if (!t) return n && n.then ? n.then(c) : Promise.resolve();
              })(
                new Promise(function(n) {
                  return addEventListener('load', n);
                })
              );
          })()) && i.then
            ? i.then(t)
            : t(i)
        );
      })),
      (g.getSW = s(function() {
        return this._ || this.u.promise;
      })),
      (g.messageSW = s(function(n) {
        return a(this.getSW(), function(i) {
          return t(i, n);
        });
      })),
      (g.j = function() {
        const n = navigator.serviceWorker.controller;
        if (n && o(n.scriptURL, this.t)) return n;
      }),
      (g.O = s(function() {
        const n = this;
        return (function(n, t) {
          try {
            var i = n();
          } catch (n) {
            return t(n);
          }
          return i && i.then ? i.then(void 0, t) : i;
        })(
          function() {
            return a(navigator.serviceWorker.register(n.t, n.i), function(t) {
              return (n.C = performance.now()), t;
            });
          },
          function(n) {
            throw n;
          }
        );
      })),
      (g.k = function(n) {
        t(n, { type: 'WINDOW_READY', meta: 'workbox-window' });
      }),
      (g.g = function() {
        const n = this.R.installing;
        this.o > 0 || !o(n.scriptURL, this.t) || performance.now() > this.C + 6e4
          ? ((this.L = n), this.R.removeEventListener('updatefound', this.g))
          : ((this._ = n), this.u.resolve(n)),
          ++this.o,
          n.addEventListener('statechange', this.l);
      }),
      (g.l = function(n) {
        const t = this;
        const i = n.target;
        const e = i.state;
        const r = i === this.L;
        const o = r ? 'external' : '';
        const s = { sw: i, originalEvent: n };
        !r && this.p && (s.isUpdate = !0),
          this.dispatchEvent(new u(o + e, s)),
          e === 'installed'
            ? (this.W = setTimeout(function() {
                e === 'installed' && t.R.waiting === i && t.dispatchEvent(new u(`${o}waiting`, s));
              }, 200))
            : e === 'activating' && (clearTimeout(this.W), r || this.s.resolve(i));
      }),
      (g.m = function(n) {
        const t = this._;
        t === navigator.serviceWorker.controller &&
          (this.dispatchEvent(new u('controlling', { sw: t, originalEvent: n })),
          this.h.resolve(t));
      }),
      (g.v = function(n) {
        const t = n.data;
        this.dispatchEvent(new u('message', { data: t, originalEvent: n }));
      }),
      (l = v),
      (w = [
        {
          key: 'active',
          get() {
            return this.s.promise;
          },
        },
        {
          key: 'controlling',
          get() {
            return this.h.promise;
          },
        },
      ]) && i(l.prototype, w),
      d && i(l, d),
      v
    );
  })(
    (function() {
      function n() {
        this.D = {};
      }
      const t = n.prototype;
      return (
        (t.addEventListener = function(n, t) {
          this.M(n).add(t);
        }),
        (t.removeEventListener = function(n, t) {
          this.M(n).delete(t);
        }),
        (t.dispatchEvent = function(n) {
          (n.target = this),
            this.M(n.type).forEach(function(t) {
              return t(n);
            });
        }),
        (t.M = function(n) {
          return (this.D[n] = this.D[n] || new Set());
        }),
        n
      );
    })()
  );
  (n.Workbox = f), (n.messageSW = t), Object.defineProperty(n, '__esModule', { value: !0 });
});
// # sourceMappingURL=workbox-window.prod.umd.js.map
