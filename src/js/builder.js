new Vue({
    el: "#app",
    data: {
        title: "Genarete QRCode",
        text: "https://github.com",
        qrcode: new QRious({ size: 300 })
    },
    computed: {
        newQRCode() {
            this.qrcode.value = this.text;
            return this.qrcode.toDataURL();
        }
    }
});