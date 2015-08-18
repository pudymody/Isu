var App = {
	_currentPage : 0,
	_totalPages : document.querySelectorAll('.section'),
	_wrapper : document.querySelector('.wrapper'),
	_paginator : document.querySelector('.paginator'),

	go : function( page ){
		if( typeof page == 'undefined' || page < 0 || page > this._totalPages.length - 1 ){
			console.error('Invalid page');
			return;
		}

		this._currentPage = page;
		this._paginator.innerHTML = (this._currentPage + 1) + " of " + this._totalPages.length;
		this._wrapper.style.transform = "translate3d( "+ (page*100*-1) +"%,0,0)";
	},

	next : function(){
		if( this._currentPage + 1 > this._totalPages.length - 1 ){
			return false;
		}

		this.go( ++this._currentPage );
	},

	prev : function(){
		if( this._currentPage - 1 < 0 ){
			return false;
		}

		this.go( --this._currentPage );
	}
}

App._paginator.innerHTML = (App._currentPage + 1) + " of " + App._totalPages.length;

document.addEventListener('keyup', function(e){
	var keys = { 37 : 'prev', 39 : 'next' };

	if( !keys[ e.keyCode ]  ){
		return false;
	}

	App[ keys[ e.keyCode] ]();
}, false);

document.addEventListener('mouseup', function(e){
	var pos = e.clientX,
		halfScreen = document.body.clientWidth / 2;

	if( pos > halfScreen ){
		App.next();
	}else{
		App.prev();
	}
}, false);