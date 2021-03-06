(this.workbox = this.workbox || {}),
  (this.workbox.googleAnalytics = (function(e, t, o, n, a, c, w) {
    try {
      self['workbox:google-analytics:4.3.1'] && _();
    } catch (e) {}
    const r = /^\/(\w+\/)?collect/;
    const s = e => async ({ queue: t }) => {
      let o;
      for (; (o = await t.shiftRequest()); ) {
        const { request: n, timestamp: a } = o;
        const c = new URL(n.url);
        try {
          const w =
            n.method === 'POST' ? new URLSearchParams(await n.clone().text()) : c.searchParams;
          const r = a - (Number(w.get('qt')) || 0);
          const s = Date.now() - r;
          if ((w.set('qt', s), e.parameterOverrides))
            for (const t of Object.keys(e.parameterOverrides)) {
              const o = e.parameterOverrides[t];
              w.set(t, o);
            }
          typeof e.hitFilter === 'function' && e.hitFilter.call(null, w),
            await fetch(
              new Request(c.origin + c.pathname, {
                body: w.toString(),
                method: 'POST',
                mode: 'cors',
                credentials: 'omit',
                headers: { 'Content-Type': 'text/plain' },
              })
            );
        } catch (e) {
          throw (await t.unshiftRequest(o), e);
        }
      }
    };
    const i = e => {
      const t = ({ url: e }) => e.hostname === 'www.google-analytics.com' && r.test(e.pathname);
      const o = new w.NetworkOnly({ plugins: [e] });
      return [new n.Route(t, o, 'GET'), new n.Route(t, o, 'POST')];
    };
    const l = e => {
      const t = new c.NetworkFirst({ cacheName: e });
      return new n.Route(
        ({ url: e }) => e.hostname === 'www.google-analytics.com' && e.pathname === '/analytics.js',
        t,
        'GET'
      );
    };
    const m = e => {
      const t = new c.NetworkFirst({ cacheName: e });
      return new n.Route(
        ({ url: e }) => e.hostname === 'www.googletagmanager.com' && e.pathname === '/gtag/js',
        t,
        'GET'
      );
    };
    const u = e => {
      const t = new c.NetworkFirst({ cacheName: e });
      return new n.Route(
        ({ url: e }) => e.hostname === 'www.googletagmanager.com' && e.pathname === '/gtm.js',
        t,
        'GET'
      );
    };
    return (
      (e.initialize = (e = {}) => {
        const n = o.cacheNames.getGoogleAnalyticsName(e.cacheName);
        const c = new t.Plugin('workbox-google-analytics', {
          maxRetentionTime: 2880,
          onSync: s(e),
        });
        const w = [u(n), l(n), m(n), ...i(c)];
        const r = new a.Router();
        for (const e of w) r.registerRoute(e);
        r.addFetchListener();
      }),
      e
    );
  })(
    {},
    workbox.backgroundSync,
    workbox.core._private,
    workbox.routing,
    workbox.routing,
    workbox.strategies,
    workbox.strategies
  ));
// # sourceMappingURL=workbox-offline-ga.prod.js.map
