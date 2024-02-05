import { ref as s, shallowRef as d, onMounted as k, onBeforeUnmount as R, openBlock as m, createElementBlock as b, createElementVNode as f, renderSlot as v, createBlock as B, Teleport as S, withDirectives as T, vShow as O } from "vue";
import { autoUpdate as j, computePosition as D, arrow as E } from "../node_modules/.pnpm/@floating-ui_dom@1.6.1/node_modules/@floating-ui/dom/dist/floating-ui.dom.js";
import "./Tooltip.vue2.js";
import M from "../_virtual/_plugin-vue_export-helper.js";
import { offset as U } from "../node_modules/.pnpm/@floating-ui_core@1.6.0/node_modules/@floating-ui/core/dist/floating-ui.core.js";
const q = { class: "n-tooltip" }, C = {
  __name: "Tooltip",
  props: {
    placement: String
  },
  setup(w) {
    const g = w, n = s(), t = s(), o = s(), l = d(!1), r = d();
    function _() {
      return j(n.value, t.value, async () => {
        const e = o.value.offsetWidth, a = Math.sqrt(2 * e ** 2) / 2, { x: i, y, middlewareData: c, placement: h } = await D(n.value, t.value, {
          placement: g.placement,
          middleware: [U(a), E({ element: o.value })]
        });
        Object.assign(t.value.style, { left: `${i}px`, top: `${y}px` });
        const x = h.split("-")[0], $ = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x];
        if (c.arrow) {
          const { x: p, y: u } = c.arrow;
          Object.assign(o.value.style, {
            left: p != null ? `${p}px` : "",
            top: u != null ? `${u}px` : "",
            right: "",
            bottom: "",
            [$]: `${-e / 2}px`,
            transform: "rotate(45deg)"
          });
        }
      });
    }
    return k(async () => {
      r.value = _();
    }), R(() => {
      var e;
      (e = r.value) == null || e.call(r);
    }), (e, a) => (m(), b("div", q, [
      f("div", {
        onClick: a[0] || (a[0] = (i) => l.value = !l.value),
        class: "reference",
        ref_key: "referenceRef",
        ref: n
      }, [
        v(e.$slots, "reference", {}, void 0, !0)
      ], 512),
      (m(), B(S, { to: "body" }, [
        T(f("div", {
          class: "floating",
          ref_key: "floatingRef",
          ref: t
        }, [
          v(e.$slots, "default", {}, void 0, !0),
          f("div", {
            ref_key: "arrowRef",
            ref: o,
            class: "arrow"
          }, null, 512)
        ], 512), [
          [O, l.value]
        ])
      ]))
    ]));
  }
}, V = /* @__PURE__ */ M(C, [["__scopeId", "data-v-5ac0a2d0"]]);
export {
  V as default
};
