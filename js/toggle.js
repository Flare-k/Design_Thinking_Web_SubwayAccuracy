/* 메인 화면부 버튼, 라벨 */
const stationBtn = document.querySelectorAll(".station-box__button");
//const stationLabel = document.querySelectorAll(".station-box__label");

/* modal 부분 */
const modalContainer = document.querySelector(".modal");
const modalTitle = modalContainer.querySelector(".title");
const mainBtn = modalContainer.querySelector(".mainBtn");

/* 역 이름을 받는 임시변수 */
var tempTitle;

function toggleModal() {
  modalContainer.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modalContainer) {
    toggleModal();
  }
}

function init() {
  stationBtn.forEach(
    button =>
      (button.onclick = function() {
        toggleModal();
        var grandParent = button.parentNode.parentNode;
        var label = grandParent.querySelector("label");
        tempTitle = label.innerText;
        modalTitle.innerText = tempTitle;
      })
  );
}

mainBtn.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

init();
