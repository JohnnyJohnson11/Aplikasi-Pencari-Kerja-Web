document.getElementById("tambahringkasan").addEventListener("click", function() {
  document.getElementById("popup").classList.add("active");
});

document.getElementById("closePopup").addEventListener("click", function() {
  document.getElementById("popup").classList.remove("active");
});

document.getElementById("tambahpekerjaan").addEventListener("click", function() {
  document.getElementById("popuppekerjaan").classList.add("active");
});

document.getElementById("closePopuppekerjaan").addEventListener("click", function() {
  document.getElementById("popuppekerjaan").classList.remove("active");
});

document.getElementById("simpanbutton").addEventListener("click", function() {
  var summaryText = document.getElementById("summary").value;

  if (summaryText.trim() === "") {
      alert("Ringkasan tidak boleh kosong.");
      return;
  }

  var summarySection = document.getElementById("ringkasan").parentElement;
  var newSummary = document.createElement("p");
  var content = document.getElementById("ringkasan")
  newSummary.textContent = summaryText;

  var existingSummary = summarySection.querySelector("p.summary-text");
  if (existingSummary) {
      existingSummary.textContent = summaryText;
  } else {
    content.innerHTML = "";
      newSummary.classList.add("summary-text");
      summarySection.insertBefore(newSummary, summarySection.querySelector(".add-button"));
  }

  document.getElementById("popup").classList.remove("active");
  document.getElementById("summary").value = ""; 
});

document.getElementById("simpanpekerjaanbutton").addEventListener("click", function() {
  var summaryKursusText = document.getElementById("summarykursus").value;
  var summaryLembagaText = document.getElementById("summarylembaga").value;
  var summaryTahunText = document.getElementById("summarytahun").value;
  var summaryPoinText = document.getElementById("summarypoin").value;

  if (summaryKursusText.trim() === "" || summaryLembagaText.trim() === "") {
      alert("Data tidak boleh kosong.");
      return;
  }

  document.getElementById("kursus").innerHTML = `<strong>${summaryKursusText}</strong>`;
  document.getElementById("lembaga").innerHTML = summaryLembagaText;
  document.getElementById("tahun").innerHTML = summaryTahunText;
  document.getElementById("poin").innerHTML = summaryPoinText;

  
  var existingSummary = summarySection.querySelector("p.summary-text");
  if (existingSummary) {
      existingSummary.innerHTML = summaryText; 
  } else {
      var newSummary = document.createElement("p");
      newSummary.innerHTML = summaryText; 
      newSummary.classList.add("summary-text");
      content.innerHTML = ""; 
      summarySection.insertBefore(newSummary, summarySection.querySelector(".add-button"));
  }
  document.getElementById("popup").classList.remove("active");
  document.getElementById("summary").value = ""; 
});


document.getElementById("bukaPopupRiwayat").addEventListener("click", function() {
  document.getElementById("popupRiwayat").classList.add("active");
});


document.getElementById("closePopupRiwayat").addEventListener("click", function() {
  document.getElementById("popupRiwayat").classList.remove("active");
});

document.getElementById("batalRiwayat").addEventListener("click", function() {
  document.getElementById("popupRiwayat").classList.remove("active");
});


document.getElementById("simpanRiwayat").addEventListener("click", function() {
  document.getElementById("popupRiwayat").classList.remove("active");
});

