"use strict";

function switchTabs_Service() {
  document.querySelector(".service_tabs").addEventListener("click", (event) => {
    document.querySelector(".service_item.active").classList.remove("active");
    event.target.classList.add("active");

    let attributeClick = event.target.getAttribute("data-service_title");
    let contentClick = document.querySelector(
      `.service_descriptions>li[data-service_content = ${attributeClick}]`
    );

    document
      .querySelector(".service_description_item.active")
      .classList.remove("active");
    contentClick.classList.add("active");
  });
}
switchTabs_Service();

function switchTabs_Works() {
  document
    .querySelector(".work_filter_tabs")
    .addEventListener("click", (event) => {
      if (event.target.classList.contains("work_filter_item")) {
        document
          .querySelector(".work_filter_item.active")
          .classList.remove("active");
        event.target.classList.add("active");

        let attributeClick = event.target.getAttribute("data-work_title");
        let contentsClick = document.querySelectorAll(
          `.work_list>li[data-work_content = ${attributeClick}]`
        );

        if (attributeClick === "All") {
          document.querySelectorAll(".work_item").forEach((item) => {
            item.classList.add("active");
          });
        } else {
          document.querySelectorAll(".work_item.active").forEach((item) => {
            item.classList.remove("active");
          });
          contentsClick.forEach((item) => {
            item.classList.add("active");
          });
        }
      }
    });
}
switchTabs_Works();

function loadNew_Work() {
  let startNewImage = 1;

  document
    .querySelector(".work .button_load")
    .addEventListener("click", (event) => {
      document.querySelector(".loading").style.display = "flex";
      event.target.style.display = "none";

      let newLiArray = [];
      let length = 12;
      let currentValueTab = document
        .querySelector(".work_filter_item.active")
        .getAttribute("data-work_title");

      let namesWorkArray = [];
      document.querySelectorAll(".work_filter_item").forEach((li) => {
        let work_title = li.dataset.work_title;
        namesWorkArray.push(work_title);
      });
      namesWorkArray.shift();

      setTimeout(() => {
        for (let i = 0; i < length; i++) {
          let newLi = document
            .querySelector(".work_item.active")
            .cloneNode(true);

          newLi.querySelector("img").src = `./work_image_new/work_image_new-${
            i + startNewImage
          }.jpg`;
          newLi.querySelector("img").alt = `work_image_new-${
            i + startNewImage
          }.jpg`;

          let indexWork = Math.floor(Math.random() * namesWorkArray.length);
          newLi.dataset.work_content = namesWorkArray[indexWork];

          if (
            currentValueTab !== "All" &&
            currentValueTab !== newLi.dataset.work_content
          ) {
            newLi.classList.remove("active");
          }

          newLiArray.push(newLi);
        }
        document.querySelector(".work_list").append(...newLiArray);
        document.querySelector(".loading").style.display = "none";

        if (startNewImage === 1) {
          event.target.style.display = "flex";
          startNewImage = 13;
        }
      }, 2000);
    });
}
loadNew_Work();

function switchTabs_Feedback() {
  document
    .querySelector(".feedback_tabs")
    .addEventListener("click", (event) => {
      if (event.target.closest("img")) {
        document
          .querySelector(".feedback_tabs_item.active")
          .classList.remove("active");
        event.target.parentElement.classList.add("active");

        let attributeClick = event.target.parentElement.getAttribute(
          "data-feedback_title"
        );
        let contentClick = document.querySelector(
          `.feedback_description_list>li[data-feedback_content = ${attributeClick}]`
        );

        document
          .querySelector(".feedback_item.active")
          .classList.remove("active");
        contentClick.classList.add("active");
      }
    });
}
switchTabs_Feedback();

function switchTabsButtons_Feedback() {
  let tabsCollection = document.querySelectorAll(".feedback_tabs_item");
  let descriptionCollection = document.querySelectorAll(".feedback_item");
  let firstTab = tabsCollection[0];
  let lastTab = tabsCollection[tabsCollection.length - 1];
  let firstDescription = descriptionCollection[0];
  let lastDescription = descriptionCollection[descriptionCollection.length - 1];

  document
    .querySelector(".feedback_slide.right")
    .addEventListener("click", () => {
      let activeTab = document.querySelector(".feedback_tabs_item.active");
      if (activeTab !== lastTab) {
        activeTab.classList.remove("active");
        activeTab.nextElementSibling.classList.add("active");
      }

      let activeDescription = document.querySelector(".feedback_item.active");
      if (activeDescription !== lastDescription) {
        activeDescription.classList.remove("active");
        activeDescription.nextElementSibling.classList.add("active");
      }
    });

  document
    .querySelector(".feedback_slide.left")
    .addEventListener("click", () => {
      let activeTab = document.querySelector(".feedback_tabs_item.active");
      if (activeTab !== firstTab) {
        activeTab.classList.remove("active");
        activeTab.previousElementSibling.classList.add("active");
      }

      let activeDescription = document.querySelector(".feedback_item.active");
      if (activeDescription !== firstDescription) {
        activeDescription.classList.remove("active");
        activeDescription.previousElementSibling.classList.add("active");
      }
    });
}
switchTabsButtons_Feedback();
