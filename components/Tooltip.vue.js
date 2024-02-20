import { ref as f, shallowRef as d, onMounted as R, onBeforeUnmount as b, openBlock as m, createElementBlock as B, createElementVNode as a, unref as v, renderSlot as w, createBlock as S, Teleport as T, withDirectives as O, vShow as j } from "vue";
import { autoUpdate as D, computePosition as E, arrow as M } from "../node_modules/.pnpm/@floating-ui_dom@1.6.1/node_modules/@floating-ui/dom/dist/floating-ui.dom.js";
import "./Tooltip.vue2.js";
import U from "../_virtual/_plugin-vue_export-helper.js";
import { offset as q } from "../node_modules/.pnpm/@floating-ui_core@1.6.0/node_modules/@floating-ui/core/dist/floating-ui.core.js";
const C = { class: "n-tooltip" }, F = { class: "tooltip-container" }, I = {
  __name: "Tooltip",
  props: {
    placement: String
  },
  setup(_) {
    const g = _, l = f(), t = f(), o = f(), s = d(!1), r = d();
    function h() {
      return D(l.value, t.value, async () => {
        const e = o.value.offsetWidth, n = Math.sqrt(2 * e ** 2) / 2, { x: i, y, middlewareData: c, placement: x } = await E(l.value, t.value, {
          placement: g.placement,
          middleware: [q(n), M({ element: o.value })]
        });
        Object.assign(t.value.style, { left: `${i}px`, top: `${y}px` });
        const $ = x.split("-")[0], k = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[$];
        if (c.arrow) {
          const { x: p, y: u } = c.arrow;
          Object.assign(o.value.style, {
            left: p != null ? `${p}px` : "",
            top: u != null ? `${u}px` : "",
            right: "",
            bottom: "",
            [k]: `${-e / 2}px`,
            transform: "rotate(45deg)"
          });
        }
      });
    }
    return R(async () => {
      r.value = h();
    }), b(() => {
      var e;
      (e = r.value) == null || e.call(r);
    }), (e, n) => (m(), B("div", C, [
      a("div", {
        onClick: n[0] || (n[0] = (i) => s.value = !v(s)),
        class: "reference",
        ref_key: "referenceRef",
        ref: l
      }, [
        w(e.$slots, "reference", {}, void 0, !0)
      ], 512),
      (m(), S(T, { to: "body" }, [
        O(a("div", {
          class: "floating",
          ref_key: "floatingRef",
          ref: t
        }, [
          a("div", F, [
            w(e.$slots, "default", {}, void 0, !0)
          ]),
          a("div", {
            ref_key: "arrowRef",
            ref: o,
            class: "arrow"
          }, null, 512)
        ], 512), [
          [j, v(s)]
        ])
      ]))
    ]));
  }
}, z = /* @__PURE__ */ U(I, [["__scopeId", "data-v-17487c59"]]);
export {
  z as default
};
