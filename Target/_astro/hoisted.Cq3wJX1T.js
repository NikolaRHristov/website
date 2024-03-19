function __vite__mapDeps(indexes) {
	if (!__vite__mapDeps.viteFileDeps) {
		__vite__mapDeps.viteFileDeps = [
			"_astro/index.modern.B7ehEGeJ.js",
			"_astro/index.modern.CkIAsQri.js",
			"_astro/index.modern.FjGODCox.js",
			"_astro/index.modern.CC9knchV.js",
			"_astro/Swup.modern.QWtOAMWR.js",
			"_astro/index.modern.B6PK6e63.js",
			"_astro/index.modern.aa8fLSdp.js",
		];
	}
	return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
const ee = "modulepreload",
	te = function (e) {
		return "/" + e;
	},
	N = {},
	y = function (t, n, o) {
		let r = Promise.resolve();
		if (n && n.length > 0) {
			const a = document.getElementsByTagName("link");
			r = Promise.all(
				n.map((c) => {
					if (((c = te(c)), c in N)) return;
					N[c] = !0;
					const u = c.endsWith(".css"),
						i = u ? '[rel="stylesheet"]' : "";
					if (!!o)
						for (let s = a.length - 1; s >= 0; s--) {
							const d = a[s];
							if (d.href === c && (!u || d.rel === "stylesheet"))
								return;
						}
					else if (document.querySelector(`link[href="${c}"]${i}`))
						return;
					const h = document.createElement("link");
					if (
						((h.rel = u ? "stylesheet" : ee),
						u || ((h.as = "script"), (h.crossOrigin = "")),
						(h.href = c),
						document.head.appendChild(h),
						u)
					)
						return new Promise((s, d) => {
							h.addEventListener("load", s),
								h.addEventListener("error", () =>
									d(
										new Error(
											`Unable to preload CSS for ${c}`
										)
									)
								);
						});
				})
			);
		}
		return r
			.then(() => t())
			.catch((a) => {
				const c = new Event("vite:preloadError", { cancelable: !0 });
				if (
					((c.payload = a),
					window.dispatchEvent(c),
					!c.defaultPrevented)
				)
					throw a;
			});
	};
(
	await y(() => import("./index.esm.B2_lNPIz.js"), __vite__mapDeps([]))
).initializeApp({
	apiKey: "AIzaSyCiIOIiAvdRwC5n6AzX_F5WSivt9bvosTQ",
	authDomain: "nikolahristov-web.firebaseapp.com",
	projectId: "nikolahristov-web",
	storageBucket: "nikolahristov-web.appspot.com",
	messagingSenderId: "540449914377",
	appId: "1:540449914377:web:bf0a39a757e9ebcd1ec2d8",
	measurementId: "G-146FB9N18L",
});
new (
	await y(() => import("./Swup.modern.QWtOAMWR.js"), __vite__mapDeps([]))
).default({
	containers: ["#footer", "#main", "#header"],
	plugins: [
		new (
			await y(
				() => import("./index.modern.B7ehEGeJ.js"),
				__vite__mapDeps([0, 1])
			)
		).default(),
		new (
			await y(
				() => import("./index.modern.FjGODCox.js"),
				__vite__mapDeps([2, 1])
			)
		).default(),
		new (
			await y(
				() => import("./index.modern.CC9knchV.js"),
				__vite__mapDeps([3, 1, 4])
			)
		).default(),
		new (
			await y(
				() => import("./index.modern.B6PK6e63.js"),
				__vite__mapDeps([5, 1, 4])
			)
		).default(),
		new (
			await y(
				() => import("./index.modern.aa8fLSdp.js"),
				__vite__mapDeps([6, 1])
			)
		).default(),
	],
});
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");
const ne = "astro:before-preparation",
	oe = "astro:after-preparation",
	re = "astro:before-swap",
	ie = "astro:after-swap",
	se = (e) => document.dispatchEvent(new Event(e));
class X extends Event {
	from;
	to;
	direction;
	navigationType;
	sourceElement;
	info;
	newDocument;
	constructor(t, n, o, r, a, c, u, i, m) {
		super(t, n),
			(this.from = o),
			(this.to = r),
			(this.direction = a),
			(this.navigationType = c),
			(this.sourceElement = u),
			(this.info = i),
			(this.newDocument = m),
			Object.defineProperties(this, {
				from: { enumerable: !0 },
				to: { enumerable: !0, writable: !0 },
				direction: { enumerable: !0, writable: !0 },
				navigationType: { enumerable: !0 },
				sourceElement: { enumerable: !0 },
				info: { enumerable: !0 },
				newDocument: { enumerable: !0, writable: !0 },
			});
	}
}
class ae extends X {
	formData;
	loader;
	constructor(t, n, o, r, a, c, u, i, m) {
		super(ne, { cancelable: !0 }, t, n, o, r, a, c, u),
			(this.formData = i),
			(this.loader = m.bind(this, this)),
			Object.defineProperties(this, {
				formData: { enumerable: !0 },
				loader: { enumerable: !0, writable: !0 },
			});
	}
}
class ce extends X {
	direction;
	viewTransition;
	swap;
	constructor(t, n, o) {
		super(
			re,
			void 0,
			t.from,
			t.to,
			t.direction,
			t.navigationType,
			t.sourceElement,
			t.info,
			t.newDocument
		),
			(this.direction = t.direction),
			(this.viewTransition = n),
			(this.swap = o.bind(this, this)),
			Object.defineProperties(this, {
				direction: { enumerable: !0 },
				viewTransition: { enumerable: !0 },
				swap: { enumerable: !0, writable: !0 },
			});
	}
}
async function le(e, t, n, o, r, a, c, u) {
	const i = new ae(e, t, n, o, r, a, window.document, c, u);
	return (
		document.dispatchEvent(i) &&
			(await i.loader(),
			i.defaultPrevented ||
				(se(oe),
				i.navigationType !== "traverse" && P({ scrollX, scrollY }))),
		i
	);
}
async function ue(e, t, n) {
	const o = new ce(e, t, n);
	return document.dispatchEvent(o), o.swap(), o;
}
const de = history.pushState.bind(history),
	A = history.replaceState.bind(history),
	P = (e) => {
		history.state &&
			((history.scrollRestoration = "manual"),
			A({ ...history.state, ...e }, ""));
	},
	k = !!document.startViewTransition,
	x = () =>
		!!document.querySelector('[name="astro-view-transitions-enabled"]'),
	B = (e, t) => e.pathname === t.pathname && e.search === t.search;
let _,
	v,
	L = !1,
	Y;
const U = (e) => document.dispatchEvent(new Event(e)),
	q = () => U("astro:page-load"),
	fe = () => {
		let e = document.createElement("div");
		e.setAttribute("aria-live", "assertive"),
			e.setAttribute("aria-atomic", "true"),
			(e.className = "astro-route-announcer"),
			document.body.append(e),
			setTimeout(() => {
				let t =
					document.title ||
					document.querySelector("h1")?.textContent ||
					location.pathname;
				e.textContent = t;
			}, 60);
	},
	p = "data-astro-transition-persist",
	W = "data-astro-transition",
	j = "data-astro-transition-fallback";
let H,
	E = 0;
history.state
	? ((E = history.state.index),
		scrollTo({ left: history.state.scrollX, top: history.state.scrollY }))
	: x() &&
		(A({ index: E, scrollX, scrollY }, ""),
		(history.scrollRestoration = "manual"));
async function me(e, t) {
	try {
		const n = await fetch(e, t),
			r = (n.headers.get("content-type") ?? "").split(";", 1)[0].trim();
		return r !== "text/html" && r !== "application/xhtml+xml"
			? null
			: {
					html: await n.text(),
					redirected: n.redirected ? n.url : void 0,
					mediaType: r,
				};
	} catch {
		return null;
	}
}
function K() {
	const e = document.querySelector(
		'[name="astro-view-transitions-fallback"]'
	);
	return e ? e.getAttribute("content") : "animate";
}
function he() {
	let e = Promise.resolve();
	for (const t of Array.from(document.scripts)) {
		if (t.dataset.astroExec === "") continue;
		const n = t.getAttribute("type");
		if (n && n !== "module" && n !== "text/javascript") continue;
		const o = document.createElement("script");
		o.innerHTML = t.innerHTML;
		for (const r of t.attributes) {
			if (r.name === "src") {
				const a = new Promise((c) => {
					o.onload = o.onerror = c;
				});
				e = e.then(() => a);
			}
			o.setAttribute(r.name, r.value);
		}
		(o.dataset.astroExec = ""), t.replaceWith(o);
	}
	return e;
}
const z = (e, t, n, o, r) => {
	const a = B(t, e),
		c = document.title;
	document.title = o;
	let u = !1;
	if (e.href !== location.href && !r)
		if (n.history === "replace") {
			const i = history.state;
			A(
				{
					...n.state,
					index: i.index,
					scrollX: i.scrollX,
					scrollY: i.scrollY,
				},
				"",
				e.href
			);
		} else
			de({ ...n.state, index: ++E, scrollX: 0, scrollY: 0 }, "", e.href);
	if (
		((_ = e),
		a || (scrollTo({ left: 0, top: 0, behavior: "instant" }), (u = !0)),
		r)
	)
		scrollTo(r.scrollX, r.scrollY);
	else {
		if (e.hash) {
			history.scrollRestoration = "auto";
			const i = history.state;
			(location.href = e.href), history.state || A(i, "");
		} else u || scrollTo({ left: 0, top: 0, behavior: "instant" });
		history.scrollRestoration = "manual";
	}
	document.title = c;
};
function we(e) {
	const t = [];
	for (const n of e.querySelectorAll("head link[rel=stylesheet]"))
		if (
			!document.querySelector(
				`[${p}="${n.getAttribute(
					p
				)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`
			)
		) {
			const o = document.createElement("link");
			o.setAttribute("rel", "preload"),
				o.setAttribute("as", "style"),
				o.setAttribute("href", n.getAttribute("href")),
				t.push(
					new Promise((r) => {
						["load", "error"].forEach((a) =>
							o.addEventListener(a, r)
						),
							document.head.append(o);
					})
				);
		}
	return t;
}
async function M(e, t, n, o) {
	const r = (s, d) => {
			const w = s.getAttribute(p),
				g = w && d.head.querySelector(`[${p}="${w}"]`);
			if (g) return g;
			if (s.matches("link[rel=stylesheet]")) {
				const b = s.getAttribute("href");
				return d.head.querySelector(
					`link[rel=stylesheet][href="${b}"]`
				);
			}
			return null;
		},
		a = () => {
			const s = document.activeElement;
			if (s?.closest(`[${p}]`)) {
				if (
					s instanceof HTMLInputElement ||
					s instanceof HTMLTextAreaElement
				) {
					const d = s.selectionStart,
						w = s.selectionEnd;
					return { activeElement: s, start: d, end: w };
				}
				return { activeElement: s };
			} else return { activeElement: null };
		},
		c = ({ activeElement: s, start: d, end: w }) => {
			s &&
				(s.focus(),
				(s instanceof HTMLInputElement ||
					s instanceof HTMLTextAreaElement) &&
					((s.selectionStart = d), (s.selectionEnd = w)));
		},
		u = (s) => {
			const d = document.documentElement,
				w = [...d.attributes].filter(
					({ name: l }) => (
						d.removeAttribute(l), l.startsWith("data-astro-")
					)
				);
			[...s.newDocument.documentElement.attributes, ...w].forEach(
				({ name: l, value: f }) => d.setAttribute(l, f)
			);
			for (const l of document.scripts)
				for (const f of s.newDocument.scripts)
					if (
						(!l.src && l.textContent === f.textContent) ||
						(l.src && l.type === f.type && l.src === f.src)
					) {
						f.dataset.astroExec = "";
						break;
					}
			for (const l of Array.from(document.head.children)) {
				const f = r(l, s.newDocument);
				f ? f.remove() : l.remove();
			}
			document.head.append(...s.newDocument.head.children);
			const g = document.body,
				b = a();
			document.body.replaceWith(s.newDocument.body);
			for (const l of g.querySelectorAll(`[${p}]`)) {
				const f = l.getAttribute(p),
					I = document.querySelector(`[${p}="${f}"]`);
				I && I.replaceWith(l);
			}
			c(b);
		};
	async function i(s) {
		function d(l) {
			const f = l.effect;
			return !f || !(f instanceof KeyframeEffect) || !f.target
				? !1
				: window.getComputedStyle(f.target, f.pseudoElement)
						.animationIterationCount === "infinite";
		}
		const w = document.getAnimations();
		document.documentElement.setAttribute(j, s);
		const b = document
			.getAnimations()
			.filter((l) => !w.includes(l) && !d(l));
		return Promise.all(b.map((l) => l.finished));
	}
	if (!L)
		document.documentElement.setAttribute(W, e.direction),
			o === "animate" && (await i("old"));
	else throw new DOMException("Transition was skipped");
	const m = document.title,
		h = await ue(e, v, u);
	z(h.to, h.from, t, m, n),
		U(ie),
		o === "animate" && !L && i("new").then(() => Y());
}
async function G(e, t, n, o, r) {
	if (!x() || location.origin !== n.origin) {
		location.href = n.href;
		return;
	}
	const a = r ? "traverse" : o.history === "replace" ? "replace" : "push";
	if (
		(a !== "traverse" && P({ scrollX, scrollY }),
		B(t, n) && ((e !== "back" && n.hash) || (e === "back" && t.hash)))
	) {
		z(n, t, o, document.title, r);
		return;
	}
	const c = await le(t, n, e, a, o.sourceElement, o.info, o.formData, u);
	if (c.defaultPrevented) {
		location.href = n.href;
		return;
	}
	async function u(i) {
		const m = i.to.href,
			h = {};
		if (i.formData) {
			h.method = "POST";
			const w =
				i.sourceElement instanceof HTMLFormElement
					? i.sourceElement
					: i.sourceElement instanceof HTMLElement &&
						  "form" in i.sourceElement
						? i.sourceElement.form
						: i.sourceElement?.closest("form");
			h.body =
				w?.attributes.getNamedItem("enctype")?.value ===
				"application/x-www-form-urlencoded"
					? new URLSearchParams(i.formData)
					: i.formData;
		}
		const s = await me(m, h);
		if (s === null) {
			i.preventDefault();
			return;
		}
		if (
			(s.redirected && (i.to = new URL(s.redirected)),
			(H ??= new DOMParser()),
			(i.newDocument = H.parseFromString(s.html, s.mediaType)),
			i.newDocument
				.querySelectorAll("noscript")
				.forEach((w) => w.remove()),
			!i.newDocument.querySelector(
				'[name="astro-view-transitions-enabled"]'
			) && !i.formData)
		) {
			i.preventDefault();
			return;
		}
		const d = we(i.newDocument);
		d.length && (await Promise.all(d));
	}
	if (((L = !1), k))
		v = document.startViewTransition(async () => await M(c, o, r));
	else {
		const i = (async () => {
			await new Promise((m) => setTimeout(m)), await M(c, o, r, K());
		})();
		v = {
			updateCallbackDone: i,
			ready: i,
			finished: new Promise((m) => (Y = m)),
			skipTransition: () => {
				L = !0;
			},
		};
	}
	v.ready.then(async () => {
		await he(), q(), fe();
	}),
		v.finished.then(() => {
			document.documentElement.removeAttribute(W),
				document.documentElement.removeAttribute(j);
		}),
		await v.ready;
}
async function F(e, t) {
	await G("forward", _, new URL(e, location.href), t ?? {});
}
function pe(e) {
	if (!x() && e.state) {
		location.reload();
		return;
	}
	if (e.state === null) return;
	const t = history.state,
		n = t.index,
		o = n > E ? "forward" : "back";
	(E = n), G(o, _, new URL(location.href), {}, t);
}
const C = () => {
	(scrollX !== history.state.scrollX || scrollY !== history.state.scrollY) &&
		P({ scrollX, scrollY });
};
{
	if (k || K() !== "none")
		if (
			((_ = new URL(location.href)),
			addEventListener("popstate", pe),
			addEventListener("load", q),
			"onscrollend" in window)
		)
			addEventListener("scrollend", C);
		else {
			let e, t, n, o;
			const r = () => {
				if (o !== history.state?.index) {
					clearInterval(e), (e = void 0);
					return;
				}
				if (t === scrollY && n === scrollX) {
					clearInterval(e), (e = void 0), C();
					return;
				} else (t = scrollY), (n = scrollX);
			};
			addEventListener(
				"scroll",
				() => {
					e === void 0 &&
						((o = history.state.index),
						(t = scrollY),
						(n = scrollX),
						(e = window.setInterval(r, 50)));
				},
				{ passive: !0 }
			);
		}
	for (const e of document.scripts) e.dataset.astroExec = "";
}
const Q = new Set(),
	S = new WeakSet();
let D,
	J,
	$ = !1;
function ye(e) {
	$ ||
		(($ = !0),
		(D ??= e?.prefetchAll ?? !1),
		(J ??= e?.defaultStrategy ?? "hover"),
		ve(),
		ge(),
		be(),
		Te());
}
function ve() {
	for (const e of ["touchstart", "mousedown"])
		document.body.addEventListener(
			e,
			(t) => {
				T(t.target, "tap") &&
					R(t.target.href, {
						with: "fetch",
						ignoreSlowConnection: !0,
					});
			},
			{ passive: !0 }
		);
}
function ge() {
	let e;
	document.body.addEventListener(
		"focusin",
		(o) => {
			T(o.target, "hover") && t(o);
		},
		{ passive: !0 }
	),
		document.body.addEventListener("focusout", n, { passive: !0 }),
		O(() => {
			for (const o of document.getElementsByTagName("a"))
				S.has(o) ||
					(T(o, "hover") &&
						(S.add(o),
						o.addEventListener("mouseenter", t, { passive: !0 }),
						o.addEventListener("mouseleave", n, { passive: !0 })));
		});
	function t(o) {
		const r = o.target.href;
		e && clearTimeout(e),
			(e = setTimeout(() => {
				R(r, { with: "fetch" });
			}, 80));
	}
	function n() {
		e && (clearTimeout(e), (e = 0));
	}
}
function be() {
	let e;
	O(() => {
		for (const t of document.getElementsByTagName("a"))
			S.has(t) ||
				(T(t, "viewport") && (S.add(t), (e ??= Ee()), e.observe(t)));
	});
}
function Ee() {
	const e = new WeakMap();
	return new IntersectionObserver((t, n) => {
		for (const o of t) {
			const r = o.target,
				a = e.get(r);
			o.isIntersecting
				? (a && clearTimeout(a),
					e.set(
						r,
						setTimeout(() => {
							n.unobserve(r),
								e.delete(r),
								R(r.href, { with: "link" });
						}, 300)
					))
				: a && (clearTimeout(a), e.delete(r));
		}
	});
}
function Te() {
	O(() => {
		for (const e of document.getElementsByTagName("a"))
			T(e, "load") && R(e.href, { with: "link" });
	});
}
function R(e, t) {
	const n = t?.ignoreSlowConnection ?? !1;
	if (!Ae(e, n)) return;
	if ((Q.add(e), (t?.with ?? "link") === "link")) {
		const r = document.createElement("link");
		(r.rel = "prefetch"),
			r.setAttribute("href", e),
			document.head.append(r);
	} else
		fetch(e).catch((r) => {
			console.log(`[astro] Failed to prefetch ${e}`), console.error(r);
		});
}
function Ae(e, t) {
	if (!navigator.onLine || (!t && Z())) return !1;
	try {
		const n = new URL(e, location.href);
		return (
			location.origin === n.origin &&
			(location.pathname !== n.pathname ||
				location.search !== n.search) &&
			!Q.has(e)
		);
	} catch {}
	return !1;
}
function T(e, t) {
	if (e?.tagName !== "A") return !1;
	const n = e.dataset.astroPrefetch;
	return n === "false"
		? !1
		: t === "tap" && (n != null || D) && Z()
			? !0
			: (n == null && D) || n === ""
				? t === J
				: n === t;
}
function Z() {
	if ("connection" in navigator) {
		const e = navigator.connection;
		return e.saveData || /2g/.test(e.effectiveType);
	}
	return !1;
}
function O(e) {
	e();
	let t = !1;
	document.addEventListener("astro:page-load", () => {
		if (!t) {
			t = !0;
			return;
		}
		e();
	});
}
function Le() {
	const e = document.querySelector(
		'[name="astro-view-transitions-fallback"]'
	);
	return e ? e.getAttribute("content") : "animate";
}
function V(e) {
	return e.dataset.astroReload !== void 0;
}
(k || Le() !== "none") &&
	(document.addEventListener("click", (e) => {
		let t = e.target;
		if (
			(e.composed && (t = e.composedPath()[0]),
			t instanceof Element && (t = t.closest("a, area")),
			!(t instanceof HTMLAnchorElement) &&
				!(t instanceof SVGAElement) &&
				!(t instanceof HTMLAreaElement))
		)
			return;
		const n = t instanceof HTMLElement ? t.target : t.target.baseVal,
			o = t instanceof HTMLElement ? t.href : t.href.baseVal,
			r = new URL(o, location.href).origin;
		V(t) ||
			t.hasAttribute("download") ||
			!t.href ||
			(n && n !== "_self") ||
			r !== location.origin ||
			e.button !== 0 ||
			e.metaKey ||
			e.ctrlKey ||
			e.altKey ||
			e.shiftKey ||
			e.defaultPrevented ||
			(e.preventDefault(),
			F(o, {
				history:
					t.dataset.astroHistory === "replace" ? "replace" : "auto",
				sourceElement: t,
			}));
	}),
	document.addEventListener("submit", (e) => {
		let t = e.target;
		if (t.tagName !== "FORM" || e.defaultPrevented || V(t)) return;
		const n = t,
			o = e.submitter,
			r = new FormData(n, o);
		let a = o?.getAttribute("formaction") ?? n.action ?? location.pathname;
		const c = o?.getAttribute("formmethod") ?? n.method;
		if (
			c === "dialog" ||
			location.origin !== new URL(a, location.href).origin
		)
			return;
		const u = { sourceElement: o ?? n };
		if (c === "get") {
			const i = new URLSearchParams(r),
				m = new URL(a);
			(m.search = i.toString()), (a = m.toString());
		} else u.formData = r;
		e.preventDefault(), F(a, u);
	}),
	ye({ prefetchAll: !0 }));
//# sourceMappingURL=hoisted.Cq3wJX1T.js.map