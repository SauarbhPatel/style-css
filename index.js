function css() {
  let color = document.querySelectorAll(".color");

  color.forEach((color) => {
    color.style.color = "red";
  });

  let image = document.querySelectorAll(".image");
 
  image.forEach((image) => {
    image.style.boxShadow = "10px 10px 10px rgba(0,0,0,0.5)";
    image.style.padding = "10px";
  });
}
css();
module.exports.css = css;
