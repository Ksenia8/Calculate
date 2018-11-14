
    window.addEventListener("load", function () {
        const app = new Vue({
            el: "#app",
            data: {
                str1: "",
                str2: "",
                result: "",
                showPopup: false
            },

            methods: {
                add: function () {
                    let c = +this.str1+ +this.str2;
                    this.result = "Ответ: " + c;

                    if (this.str1 === "" || this.str2 === "") {
                        app.showPopup = true;
                        this.result="";
                    }
                },

                sub: function () {
                    let c = +this.str1 - +this.str2;
                    this.result = "Ответ: " + c;

                    if (this.str1 === "" || this.str2 === "") {
                        app.showPopup = true;
                        this.result="";
                    }
                },

                multi: function () {
                    let c = +this.str1 * +this.str2;
                    this.result = "Ответ: " + c;

                    if (this.str1 === "" || this.str2 === "") {
                        app.showPopup = true;
                        this.result="";
                    }
                },
                div: function () {
                    let c = +this.str1 / +this.str2;
                    this.result = "Ответ: " + c;

                    if (this.str1 === "" || this.str2 === "") {
                        app.showPopup = true;
                        this.result="";
                    }
                },
                change: function () {
                    this.str1 = "";
                    this.str2 = "";
                    this.result = "";
                    app.showPopup = false;

                }
            }
        });
    });
