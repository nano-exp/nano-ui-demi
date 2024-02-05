import { defineComponent as n, createVNode as t } from "vue";
const l = /* @__PURE__ */ n({
  setup(r, {
    slots: e
  }) {
    return {
      trigger: () => e.trigger(),
      children: () => e.default()
    };
  },
  render({
    trigger: r,
    children: e
  }) {
    return t("div", {
      class: "n-tooltip"
    }, [r(), t("br", null, null), e()]);
  }
});
export {
  l as default
};
