const bubleCreate = () => {
  const body = document.body;
  const buble = document.createElement("span");
  let r = Math.random() * 5 + 25; //25~30
  buble.style.width = r + "px";
  buble.style.height = r + "px";
  buble.style.left = Math.random() * innerWidth + "px";
  body.append(buble);
  setTimeout(() => {
    buble.remove();
  }, 4000);
};
setInterval(() => {
  bubleCreate();
}, 200);
