<script>
function updateJamHari() {
  const hari = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const bulan = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const sekarang = new Date();
  const namaHari = hari[sekarang.getDay()];
  const tanggal = sekarang.getDate();
  const namaBulan = bulan[sekarang.getMonth()];
  const tahun = sekarang.getFullYear();

  let jam = sekarang.getHours();
  let menit = sekarang.getMinutes();

  // Format 2 digit
  jam = jam < 10 ? "0" + jam : jam;
  menit = menit < 10 ? "0" + menit : menit;

  // Format AM/PM
  const ampm = jam >= 12 ? "PM" : "AM";

  const jamHariText = `${namaHari}, ${namaBulan} ${tanggal} — ${jam}:${menit} ${ampm}`;
  document.getElementById("jamHari").innerText = jamHariText;
}

// Jalankan saat dimuat dan setiap 60 detik
updateJamHari();
setInterval(updateJamHari, 60000);
</script>