setTimeout(() => {
  console.log("global timeout method in execution");
  console.log(__dirname);
  console.log(__filename);
  clearInterval(intervalID);
}, 3000);

const intervalID = setInterval(
  () => console.log("global interval method in action"),
  1000
);

