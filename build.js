const ini = require('multi-ini');
const zipdir = require('zip-dir');

let fullverstring = '';
const file = './source/Install.ini';
const content = ini.read(file);

if (
	content &&
	content.Header &&
	content.Header.VersionMajor
) {
	const head = content.Header;

	fullverstring = [
		head.VersionMajor, 
		head.VersionMinor, 
		head.VersionRelease
	].join('.');
}
zipdir('./source', {
	saveTo: `./dist/Lyrics To Instrumental v${fullverstring}.mmip`
}, () => {

});
