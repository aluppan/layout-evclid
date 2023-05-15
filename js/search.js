const headerSearch = document.querySelector(".header__search");
const headerSearchBtn = document.querySelector(".header__search-btn");
const headerCancelBtn = document.querySelector(".header__cancel-btn");
const searchInput = document.querySelector("input");

headerSearchBtn.onclick = () => {
    headerSearch.classList.add("active");
    headerSearchBtn.classList.add("active");
    headerCancelBtn.classList.add("active");
    searchInput.classList.add("active");
    searchInput.focus();
}

headerCancelBtn.onclick = () => {
    headerSearch.classList.remove("active");
    headerSearchBtn.classList.remove("active");
    headerCancelBtn.classList.remove("active");
    searchInput.classList.remove("active");
    searchInput.value = "";
}
