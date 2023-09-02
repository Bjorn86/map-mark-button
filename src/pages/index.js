// IMPORT CSS FILE
import "./index.css";

// IMPORT ELEMENTS
import {
  buttonContainerElement,
  houseButtonElement,
  parkingButtonElement,
  stadiumButtonElement,
  administrationButtonElement,
  officeButtonElement,
  enterenceButtonElement,
  marinaButtonElement,
  corpusAButtonElement,
  corpusBButtonElement,
  hotelButtonElement,
} from "../utils/elements.js";

// HANDLER FOR ADDING INFORMATION TO THE BUTTON
function addButtonInfo(element, text) {
  element.textContent = text;
  element.removeAttribute("aria-label");
}

// HANDLER FOR DELETING INFORMATION IN THE BUTTON
function removeButtonInfo(element) {
  element.textContent = "";
  element.setAttribute("aria-label", "Показать подробности");
}

// HANDLER FOR CHECKING AN OPEN BUTTON
function checkOpenButtons(element) {
  const openedCaptionElement = buttonContainerElement.querySelector(
    ".promo__action-btn_opened"
  );
  if (
    openedCaptionElement !== (undefined || null) &&
    openedCaptionElement !== element
  ) {
    openedCaptionElement.classList.remove("promo__action-btn_opened");
    removeButtonInfo(openedCaptionElement);
  }
}

// HANDLER BUTTON CLICK
function handleButtonClick(element, text) {
  checkOpenButtons(element);
  element.classList.toggle("promo__action-btn_opened");
  if (element.classList.contains("promo__action-btn_opened")) {
    addButtonInfo(element, text);
  } else {
    removeButtonInfo(element);
  }
}

// EVENT LISTENER
buttonContainerElement.addEventListener("click", (evt) => {
  const { target } = evt;

  if (target === buttonContainerElement) {
    checkOpenButtons();
    return;
  }

  switch (target) {
    case houseButtonElement:
      handleButtonClick(houseButtonElement, "Дом");
      break;
    case parkingButtonElement:
      handleButtonClick(parkingButtonElement, "Парковка");
      break;
    case stadiumButtonElement:
      handleButtonClick(stadiumButtonElement, "Стадион");
      break;
    case administrationButtonElement:
      handleButtonClick(administrationButtonElement, "Администрация");
      break;
    case officeButtonElement:
      handleButtonClick(officeButtonElement, "Офис");
      break;
    case enterenceButtonElement:
      handleButtonClick(enterenceButtonElement, "Вход");
      break;
    case marinaButtonElement:
      handleButtonClick(marinaButtonElement, "Пристань");
      break;
    case corpusAButtonElement:
      handleButtonClick(corpusAButtonElement, "Корпус А");
      break;
    case corpusBButtonElement:
      handleButtonClick(corpusBButtonElement, "Корпус Б");
      break;
    case hotelButtonElement:
      handleButtonClick(hotelButtonElement, "Отель");
      break;
    default:
      return;
  }
});
