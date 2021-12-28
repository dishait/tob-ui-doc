const { path } = require('@vuepress/utils')

module.exports = {
	name: 'vuepress-theme-local',
	extends: '@vuepress/theme-default',
	layouts: {
		404: path.resolve(__dirname, '404.vue'),
		TLayout: path.resolve(__dirname, 'TLayout.vue')
	}
}
