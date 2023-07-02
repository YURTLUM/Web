// Main Panel Display
// 4 tane div elementini seçin
var slid1 = document.querySelector("#anasayfa > div.slider.slider-1");
var slid2 = document.querySelector("#anasayfa > div.slider.slider-2");
var slid3 = document.querySelector("#anasayfa > div.slider.slider-3");
var slid4 = document.querySelector("#anasayfa > div.slider.slider-4");

// 4 tane radio elementini seçin
var input1 = document.getElementById("radio1");
var input2 = document.getElementById("radio2");
var input3 = document.getElementById("radio3");
var input4 = document.getElementById("radio4");

// Tüm radio elementlerini bir diziye koyun
var radios = [input1, input2, input3, input4];

// Bir div elementini display flex yapar ve diğerlerini display none yapar
function showDiv(div) {
  // Tüm div elementlerini display none yap
  slid1.style.display = 'none';
  slid2.style.display = 'none';
  slid3.style.display = 'none';
  slid4.style.display = 'none';

  // Seçilen div elementini display flex yap
  div.style.display = 'flex';
}

// Her bir radio elementine bir event listener ekleyin
radios.forEach(function(radio, i) {
  radio.addEventListener("click", function() {
    // Eğer radio checked ise ilgili div'i göster
    if (radio.checked) {
      // Tıklanan radio buttonun indexine göre ilgili div'i göster
      switch (i) {
        case 0:
          showDiv(slid1);
          break;
        case 1:
          showDiv(slid2);
          break;
        case 2:
          showDiv(slid3);
          break;
        case 3:
          showDiv(slid4);
          break;
      }
    }

    // Timer'ı sıfırla
    resetTimer();

    // Indexi tıklanan radio buttonun indexine eşitle
    index = i;
  });
});

var index = 0; // Başlangıç indexi
var interval; // setInterval fonksiyonunun döndürdüğü değeri tutacak değişken

function startTimer() { // Timer'ı başlatan fonksiyon
  interval = setInterval(function() { // Her 5 saniyede bir çalışacak fonksiyon
    index++; // Indexi bir artır
    if (index == radios.length) { // Eğer index dizinin uzunluğunu aştıysa
      index = 0; // Indexi sıfırla
    }
    radios[index].checked = true; // Şu anki indexe göre radio buttonu seç

    // Şu anki indexe göre ilgili div'i göster
    switch (index) {
      case 0:
        showDiv(slid1);
        break;
      case 1:
        showDiv(slid2);
        break;
      case 2:
        showDiv(slid3);
        break;
      case 3:
        showDiv(slid4);
        break;
    }
  }, 10000); // 5000 milisaniye = 5 saniye
}

function resetTimer() { // Timer'ı sıfırlayan fonksiyon
  clearInterval(interval); // Mevcut timer'ı durdur
  startTimer(); // Yeni bir timer başlat
}

startTimer(); // İlk başta timer'ı başlat

// Sayfa yüklendiğinde sadece ilk div'in görünür olması için bir stil ekleyin
window.addEventListener("load", function() {
  slid1.style.display = 'flex';
});
