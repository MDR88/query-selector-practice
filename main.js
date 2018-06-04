// Use JavaScript to obtain a reference to the first article header and change its text with textContent property to "Welcome the {insert your name here} blog" //

const sectionHead = document.querySelector(".article__header");
sectionHead.textContent = "Welcome the {Michael} blog";

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to "article__header important".

let allHeaders = document.querySelectorAll(".article__header");
for (let i = 0; i < allHeaders.length; i++) {

}