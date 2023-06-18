const dropdownTogglers = document.querySelectorAll(".dropdown-toggler");
const dropdownContents = document.querySelectorAll(".dropdown-content");

let previousWidth = window.innerWidth;

dropdownTogglers.forEach((dropdownToggler, index) => {
    const dropdownContent = dropdownContents[index];

    dropdownToggler.addEventListener("click", function () {

        if (!dropdownContent.classList.contains("show")) {
            dropdownContent.classList.add("show");
            requestAnimationFrame(function(){
                dropdownContent.style.height = dropdownContent.scrollHeight + "px";
            });
        } else {
            dropdownContent.style.height = dropdownContent.scrollHeight + "px";
            dropdownContent.classList.remove("auto-height");
            requestAnimationFrame(function(){
                dropdownContent.style.removeProperty("height");
            });
        }

    dropdownContent.addEventListener("transitionend", function(){
        if (dropdownContent.offsetHeight === 0) {
            dropdownContent.classList.remove("show");
        } else {
            dropdownContent.style.removeProperty("height");
            dropdownContent.classList.add("auto-height");
        }
    });
  });
});
