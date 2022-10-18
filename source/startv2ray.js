import { exec } from 'child_process';
async function startv2ray(cfg){
    exec('v2ray run -c '+ cfg.toString(), (err, stdout, stderr) => {
		if (err) {
			console.error(`exec error: ${err}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
}
export default startv2ray;