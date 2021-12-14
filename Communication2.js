Vue.component("coupon", {
  template: String.raw`
      <input placeholder="Enter your coupon code" @blur="onCouponApplied"/>
    `,

  methods: {
    onCouponApplied() {
      Event.$emit("applied");
    },
  },
});

window.Event = new Vue();

new Vue({
  el: "#root",

  data: {
    couponApplied: false,
  },

  created() {
    Event.$on("applied", () => {
      alert("Handling it!");
    });
  },
});
