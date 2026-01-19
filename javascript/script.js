// Espacio para futuras interacciones:
// - scroll animations
// - contenido interactivo
// - integración H5P

console.log("Dialog Interactive Systems loaded");

const theoryModal = document.getElementById('theoryModal');

theoryModal.addEventListener('show.bs.modal', function (event) {
    const card = event.relatedTarget;

    const number = card.getAttribute('data-number');
    const title = card.getAttribute('data-title');
    const text = card.getAttribute('data-text');

    theoryModal.querySelector('.modal-number').innerText = number;
    theoryModal.querySelector('.modal-title').innerText = title;
    theoryModal.querySelector('.modal-text').innerText = text;
});

