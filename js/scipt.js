const $menuForm = document.querySelector("#menu-form");
const $nameInput = document.querySelector("#name-input");
const $priceInput = document.querySelector("#price-input");
const $imgInput = document.querySelector("#img-input");
const $chefInput = document.querySelector("#chef-input");
const $resInput = document.querySelector("#res-input");
const $allInput = document.querySelectorAll("input");
const $addBtn = document.querySelector("#add-btn");
const $menuList = document.querySelector("#menu-list");

$menuForm.addEventListener("submit", addMenu);

let ALL_MENUS = JSON.parse(localStorage.getItem("menu")) || [];

function Menu(foodname, foodprice, foodimg, chefname, resname) {
  this.food_name = foodname;
  this.food_price = foodprice;
  this.food_img = foodimg;
  this.chef_name = chefname;
  this.res_name = resname;
}

function addMenu(e) {
  e.preventDefault();

  const menu = new Menu(
    $nameInput.value,
    $priceInput.value,
    $imgInput.value,
    $chefInput.value,
    $resInput.value
  );
  ALL_MENUS.push(menu);
  localStorage.setItem("menu", JSON.stringify(ALL_MENUS));
  renderMenu(ALL_MENUS);

  $nameInput.value = "";
  $priceInput.value = "";
  $imgInput.value = "";
  $chefInput.value = "";
  $resInput.value = "";
}

renderMenu(ALL_MENUS);

function renderMenu(menus) {
  $menuList.innerHTML = "";
  menus.forEach((menuItemData) => {
    const $li = document.createElement("li");
    $li.innerHTML = `
    <img src="${menuItemData.food_img}">
    <div class="list-item__data">
        <div><span>Taom nomi:</span> ${menuItemData.food_name}</div>
        <div><span>Taom narxi: $${menuItemData.food_price}</span></div>
        <div><span>Taom oshpazi:</span> ${menuItemData.chef_name}</div>
        <div><span>Taom restorani:</span> ${menuItemData.res_name}</div>
    </div>
    `;
    $menuList.appendChild($li);
  });
}
