/**
 * @preserve Copyright (c) 2013-present British Broadcasting Corporation. All rights reserved.
 * @license See https://github.com/bbc/tal/blob/master/LICENSE for full licence
 */

require.def('fixtures/components/buttoncomponent',
		['antie/widgets/component','antie/widgets/button'], function(Component, Button) {
	return Component.extend({
		init: function init() {
			init.base.call(this, "emptyComponent2");
			this.appendChildWidget(new Button());
		}
	});
});
