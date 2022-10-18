/* const fs = require('fs');
async function savecfg(cfg,region) {
    const data = JSON.stringify(cfg, null, 4);
    try {
        fs.writeFileSync('cfg_'+region+'.json', data);
        console.log("JSON data is saved.");
    } catch (error) {
        console.error(error);
    }
} */
import fs from 'fs';
async function savecfg(cfg,region) {
    const data = JSON.stringify(cfg, null, 4);
    try {
        fs.writeFileSync('cfg_'+region.name+'.json', data);
        console.log("JSON data is saved to " + 'cfg_'+region.name+'.json');
    } catch (error) {
        console.error(error);
    }
}
export default savecfg;