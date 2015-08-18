# Isu
A self hosted issuu pdf viewer generator from cmd. You can read more [here](http://pudymody.github.io/2015/08/16/self-hosted-pdf-viewer/)

# Example
This app builds you a pdf viewer like the one in issuu from the given file. You can see a demo [here](http://pudymody.github.io/Isu)

# System requisites
* [GraphicsMagick](http://www.graphicsmagick.org/)
* [Ghostscript pdf interpreter](http://ghostscript.com/download/gsdnld.html)

# Installation
```sh
npm install -g isu
```

# Usage
```sh
isu --file=pdf.pdf
```
Now in the current dir, you will have inside a dist folder, everything you need to upload. Its a static page, so you can upload to github pages, dropbox, a server or read from the file itself, almost everywhere.
