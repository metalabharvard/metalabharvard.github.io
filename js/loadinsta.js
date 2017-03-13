
var feed = new Instafeed({
		get: 'user',
		userId: '186455365',
		accessToken: '186455365.e3b67e1.bf01c829ab924f09ac852ccc30800bb4',
		limit: '16',
		template: '<a href="\{\{link\}\}" target="blank"><img src="\{\{image\}\}" /></a>'

});
feed.run();