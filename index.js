#!/usr/bin/env node

var	gm = require('gm'),
	argv = require('yargs').argv,
	fs = require('fs-extra'),
	path = require('path'),
	jade = require('jade');

if( !argv.file || !fs.existsSync(argv.file) ){
	console.log('The file ' + argv.file + ' isnt a valid file');
	process.exit(1);
}

function chunk (arr, len) {

	var chunks = [],
		i = 0,
		n = arr.length;

	while (i < n) {
		chunks.push(arr.slice(i, i += len));
	}

	return chunks;
}

fs.mkdirsSync('./dist/imgs');

gm(argv.file)
	.density(150,150)
	.quality(100)
	.out('+adjoin')
	.write('./dist/imgs/%02d.jpg', function(err){
		if( err ){
			console.log("Error writing file: ", err);
			process.exit(1);
		}

		fs.readdir('./dist/imgs', function(err, data){
			if( err ){
				console.log("Error reading files: ", err);
				process.exit(1);
			}

			var cover = data.shift(),
				back = data.pop();

			data = chunk(data, 2);

			var html = jade.renderFile(path.join(__dirname, 'tpls', 'index.jade'), { fileName : argv.file, cover : cover, back : back,  pages : data });
			fs.writeFileSync('./dist/index.html', html);
			fs.copySync(path.join(__dirname, 'tpls', 'style.css'), './dist/style.css');
			fs.copySync(path.join(__dirname, 'tpls', 'app.js'), './dist/app.js');
		});
	});