const Sharp = require("sharp");
const fs = require("fs");

const buf = fs.readFileSync("./source.jpg");

const resizingOptions = {
  width: 400,
};

console.log("# starting resizing with Sharp");

Sharp(buf)
  .resize(resizingOptions)
  .withMetadata()
  .toFormat("jpg")
  .toBuffer()
  .then((output) => {
    fs.writeFileSync("./output.jpg", output);
    console.log("# finished resizing with Sharp");
  })
  .catch((err) => {
    console.error(err);
  });
