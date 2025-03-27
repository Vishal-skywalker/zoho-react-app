import AdmZip from 'adm-zip';
import fs from 'fs';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const p = require("./package.json");

const buildFolder = './build';

async function createZipArchive() {
  const zip = new AdmZip();

  if (!fs.existsSync(buildFolder)) {
    fs.mkdirSync(buildFolder);
  }

  const outputFile = `${buildFolder}/${p.name}-${p.version}.zip`;
  zip.addLocalFolder('./dist', 'app'); // Add contents of 'dist' under 'app' folder in the zip
  zip.writeZip(outputFile);
  console.log(`Created ${outputFile} successfully`);
}

createZipArchive();