const fs = require('fs');
async function savecfg(cfg,region) {
    const data = JSON.stringify(cfg, null, 4);
    try {
        fs.writeFileSync('cfg_'+region+'.json', data);
        console.log("JSON data is saved.");
    } catch (error) {
        console.error(error);
    }
}
module.exports = savecfg;