import { defineComponent as r, createVNode as n } from "vue";
const u = /* @__PURE__ */ r({
  setup(e, {
    slots: t
  }) {
    return {
      children: () => t.default()
    };
  },
  render({
    children: e
  }) {
    return n("button", null, [e()]);
  }
});
export {
  u as default
};
