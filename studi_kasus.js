// program hitung mundur

const tanggalTujuan = new Date("Jun 2, 2024 14:41:00").getTime();

const hitungMundur = setInterval(() => {
    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan - sekarang;
    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) / 1000);


    const teks = document.getElementById("teks");
    teks.innerHTML = `Waktu anda tinggal: ${hari} hari, ${jam} jam, ${menit} menit, ${detik} detik lagi`;

    if (selisih <= 0) {
        clearInterval(hitungMundur);
        teks.innerHTML = "Waktu anda HABIS!"
    }

}, 1000);