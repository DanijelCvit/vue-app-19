const { default: axios } = require("axios");

require("./bootstrap");

class Errors {
    constructor() {
        this.errors = {};
    }
    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }
    record(errors) {
        this.errors = errors;
    }

    clear(field) {
        delete this.errors[field];
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    any() {
        return Object.entries(this.errors).length > 0;
    }
}

new Vue({
    el: "#app",

    methods: {
        onSubmit() {
            axios
                .post("/projects", {
                    name: this.name,
                    description: this.description,
                })
                .then((response) => this.onSuccess(response))
                .catch((error) => {
                    this.errors.record(error.response.data.errors);
                });
        },

        onSuccess(response) {
            alert(response.data.message);

            this.name = "";
            this.description = "";
        },
    },
    data: {
        name: "",
        description: "",
        errors: new Errors(),
    },
});
