import path from "path";
import * as fs from "fs";
import {sortVersion} from "./utils";

let srcPath = path.join(__dirname,'../src/docs');
let readDir = fs.readdirSync(srcPath);

export default readDir.map(function (term){
  let name = term;
  let versions = sortVersion(fs.readdirSync(path.join(srcPath,term)),'desc')
  return { name, versions };
});
