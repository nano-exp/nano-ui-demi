import { computed as t, openBlock as l, createElementBlock as a, normalizeStyle as o, unref as p, renderSlot as s } from "vue";
const f = {
  __name: "Flex",
  setup(n) {
    const e = t(() => ({
      display: "flex",
      gap: "8px 12px",
      flexWrap: "wrap"
    }));
    return (r, c) => (l(), a("div", {
      style: o(p(e))
    }, [
      s(r.$slots, "default")
    ], 4));
  }
};
export {
  f as default
};
