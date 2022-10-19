import { exec } from 'child_process';
async function startv2ray(cfg){
	if(process.platform == 'win32'){
		exec('v2ray.exe run -c '+ cfg.toString(), (err, stdout, stderr) => {
			if (err) {
				console.error(`exec error: ${err}`);
				return;
			}
			console.log(`stdout: ${stdout}`);
			console.log(`stderr: ${stderr}`);
		});
	} else if(process.platform == 'linux'){
		exec('./v2ray run -c '+ cfg.toString(), (err, stdout, stderr) => {
			if (err) {
				console.error(`exec error: ${err}`);
				return;
			}
			console.log(`stdout: ${stdout}`);
			console.log(`stderr: ${stderr}`);
		});
	}
}
export default startv2ray;