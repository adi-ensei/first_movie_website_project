const arrows = document.querySelectorAll("#arrow");

const movielist = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const number = movielist[i].querySelectorAll("img").length;
  let click = 0;
  arrow.addEventListener("click", () => {
    const int=Math.floor(window.innerWidth / 270);
    click++;
    if (number - (4 + click)+(4-int)>= 0) {
      movielist[i].style.transform = `translateX(${
        movielist[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movielist[i].style.transform = "translateX(0)";
      click=0 ;
    }
  });
});
const ball=document.querySelector(".toggleball");
const items=document.querySelectorAll(".container,.movie-title,.navbar,.navbar-container,.sidebar,#sidebar-icon,.toggle");
ball.addEventListener("click", () => {
  items.forEach(item=>{
    item.classList.toggle("active");
  })
  ball.classList.toggle("active");
});