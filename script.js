// setTimeOut()

// setTimeout(() => {
//     console.log("ok");
// }, 5000);


// cara menghentikan setTimeOut() ditengah waktu berjalan

// const tes = setTimeout(() => {
//     console.log("ok");
// }, 5000)

// const tombol = document.getElementById("tombol");

// tombol.addEventListener("click", () => {
//     clearTimeout(tes);
//     console.log("selesai");
// })




// setInterval()

// setInterval(() => {
//     console.log("ok");
// }, 5000);


// cara menghentikan setInterval() ditengah waktu berjalan

const tes = setInterval(() => {
    console.log("ok");
}, 1000)

const tombol = document.getElementById("tombol");

tombol.addEventListener("click", () => {
    clearTimeout(tes);
    console.log("selesai");
})