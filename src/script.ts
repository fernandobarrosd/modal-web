const modalWrapper = document.querySelector(".modal-wrapper");
const modalCloseButton = document.querySelector(".modal-footer .button");
const modalOpenButton = document.querySelector("button");

const modalIsVisibleKey = "@modal-web/modalVisibility";

function closeModal() {
    modalWrapper?.classList.remove("visible");
}

function openModal() {
    modalWrapper?.classList.add("visible");
}

modalCloseButton?.addEventListener("click", () => {
    closeModal();
    localStorage.setItem(modalIsVisibleKey, "isNotVisible");
});
modalOpenButton?.addEventListener("click", () => {
    openModal();
    localStorage.setItem(modalIsVisibleKey, "isVisible");
});

window.addEventListener("load", () => {
    const modalIsVisible = localStorage.getItem(modalIsVisibleKey);

    if (modalIsVisible) {
        if (modalIsVisible === "isVisible") {
            openModal();
        }
        else {
            closeModal();
        }
    }
});
