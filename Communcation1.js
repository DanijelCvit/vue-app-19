Vue.component("coupon", {
  template: String.raw`
      <input placeholder="Enter your coupon code" @blur="onCouponApplied"/>
    `,

  methods: {
    onCouponApplied() {
      this.$emit("applied");
    },
  },
});

new Vue({
  el: "#root",

  data: {
    couponApplied: false,
  },

  methods: {
    onCouponApplied() {
      this.couponApplied = true;
    },
  },
});
