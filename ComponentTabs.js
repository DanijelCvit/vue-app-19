Vue.component("tabs", {
  template: String.raw`
     <div>
       <div class="tabs">
         <ul>
           <li v-for="tab in tabs" :class="{'is-active': tab.isActive}"><a @click="selectTab(tab)" :href="tab.href">{{tab.name}}</a></li>
         </ul>
       </div>
  
       <div class="tabs-details">
          <slot></slot>
       </div>
     </div>
    `,

  data() {
    return {
      tabs: [],
    };
  },

  created() {
    this.tabs = this.$children;
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
});

Vue.component("tab", {
  template: String.raw`
      
      <div v-show="isActive"><slot></slot></div>
      `,
  props: {
    name: { required: true },
    selected: { default: false },
  },

  data() {
    return {
      isActive: false,
    };
  },

  computed: {
    href() {
      return "#" + this.name.toLowerCase().replace(/ /g, "-");
    },
  },

  mounted() {
    this.isActive = this.selected;
  },
});

new Vue({
  el: "#root",
});
