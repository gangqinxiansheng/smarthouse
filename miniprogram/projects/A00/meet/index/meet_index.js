let behavior = require('../../../../behavior/meet_index_bh.js');
let PassortBiz = require('../../../../biz/passport_biz.js');
let skin = require('../../skin/skin.js');

Page({
	behaviors: [behavior], 
	
	onReady: function () {
		PassortBiz.initPage({
			skin,
			that: this,
			isLoadSkin: true, 
			isModifyNavColor: true
		}); 

		this._setTypeTitle(skin);
	},
})