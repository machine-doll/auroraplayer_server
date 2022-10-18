import YAML from 'yaml'
import fs from 'fs';
const file = fs.readFileSync('config.yaml', 'utf8');
const config = YAML.parse(file);
console.log(config);