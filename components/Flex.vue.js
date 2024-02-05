import { computed as t, openBlock as l, createElementBlock as a, normalizeStyle as o, renderSlot as p } from "vue";
const u = {
  __name: "Flex",
  setup(s) {
    const e = t(() => ({
      display: "flex",
      gap: "8px 12px",
      flexWrap: "wrap"
    }));
    return (r, n) => (l(), a("div", {
      style: o(e.value)
    }, [
      p(r.$slots, "default")
    ], 4));
  }
};
export {
  u as default
};
