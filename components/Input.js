import { defineComponent as l, ref as i, createVNode as f, nextTick as o } from "vue";
const v = /* @__PURE__ */ l({
  props: {
    value: String,
    onInput: Function
  },
  setup(e) {
    const n = i();
    async function u(a) {
      var t;
      (t = e.onInput) == null || t.call(e, a.target.value), await o(), n.value.value !== e.value && (n.value.value = e.value);
    }
    return {
      inputRef: n,
      onInputValue: u
    };
  },
  render({
    value: e,
    onInputValue: n
  }) {
    return f("input", {
      ref: "inputRef",
      type: "text",
      value: e,
      onInput: n
    }, null);
  }
});
export {
  v as default
};
