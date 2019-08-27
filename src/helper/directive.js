import Vue from 'vue'

Vue.directive('login', function (el, binding) {
    console.log(binding.value)
    if (binding.value) {
        el.innerHTML =
            '<img src="http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-5_044127233.jpg" height="100" width="100">' +
            '<b>Hello Tam</b>'

    } else {
        el.innerHTML = '<a href="#">Login</a>'
    }
});