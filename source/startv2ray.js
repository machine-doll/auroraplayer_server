const { exec } = require('child_process');
async function startv2ray(cfg){
    exec('v2ray.exe run -c '+ cfg, (err, stdout, stderr) => {
		if (err) {
			console.error(`exec error: ${err}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
}
module.exports = startv2ray;