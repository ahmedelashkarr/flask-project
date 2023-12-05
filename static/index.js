btn1 = document.querySelector(".btn.btn1")
btn1.addEventListener("click", function () {
    document.location = "http://127.0.0.1:5000/login"
})

btn2 = document.querySelector(".btn.btn2")
btn2.addEventListener("click", function () {
    document.location = "http://127.0.0.1:5000/register"
})


// let buttons = document.querySelectorAll(".navbar .navbar-nav button")
// buttons.forEach(element => {
//     element.addEventListener("click", function () {
//         buttons.forEach(ele => ele.classList.remove("active1"))
//         this.classList.add("active1")
//     }

//     )
// });

// let lists = document.querySelectorAll(".navbar .navbar-nav .nav-item")
// lists.forEach(element => {
//     element.addEventListener("click", function () {
//         lists.forEach(ele => ele.classList.remove("active1"))
//         this.classList.add("active1")
//     }
//     )
// });
// console.log(lists)