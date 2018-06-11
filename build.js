const ini = require('multi-ini');
const zipdir = require('zip-dir');
const semver = require('semver');
const packagejson = require('./package.json');

let fullverstring = '';
const version = packagejson.version;
const file = './source/Install.ini';
const content = ini.read(file);

if (
	content &&
	content.Header &&
	content.Header.VersionBuild
) {
	const head = content.Header;

	head.VersionMajor = `${semver(version).major}`;
	head.VersionMinor = `${semver(version).minor}`;
	head.VersionRelease = `${semver(version).patch}`;
	head.VersionBuild = `${Number(head.VersionBuild) + 1}`;

	fullverstring = [
		head.VersionMajor, 
		head.VersionMinor, 
		head.VersionRelease, 
		head.VersionBuild
	].join('.');
	ini.write(file, content);
}
zipdir('./source', {
	saveTo: `./dist/Lyrics To Instrumental v${fullverstring}.mmip`
}, () => {

});
