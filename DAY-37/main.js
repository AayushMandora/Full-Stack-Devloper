import fs from "fs/promises";
import fss from "fs";

let basepath = "D:\\Full Stack Devloper\\DAY-37\\files";
let files = await fs.readdir(basepath);
// console.log(files);

for (let index = 0; index < files.length; index++) {
  const element = files[index];
  let path = element.slice(element.indexOf(".") + 1);
  if (element.includes(".")) {
    if (fss.existsSync(`${basepath}\\${path}`)) {
      fs.rename(`${basepath}\\${element}`, `${basepath}\\${path}\\${element}`);
    } else {
      fs.mkdir(`${basepath}\\${path}`);
      fs.rename(`${basepath}\\${element}`, `${basepath}\\${path}\\${element}`);
    }
  }
}
