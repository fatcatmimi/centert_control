export default {
    install(Vue) {
        Vue.filter('thounds', (value) => {
            return (parseFloat(value).toFixed(0) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
        })
    }
}