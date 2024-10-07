// Modal-Elemente
var modal = document.getElementById("helpModal");
var link = document.getElementById("helpLink");
var span = document.getElementsByClassName("close")[0];

// Öffne das Modal, wenn der Link angeklickt wird
link.onclick = function (event) {
  event.preventDefault(); // Verhindert das Standardverhalten des Links
  modal.style.display = "block"; // Modal anzeigen
};

// Schließe das Modal, wenn das "x" angeklickt wird
span.onclick = function () {
  modal.style.display = "none"; // Modal ausblenden
};

// Schließe das Modal, wenn außerhalb des Modals geklickt wird
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Modal ausblenden
  }
};
