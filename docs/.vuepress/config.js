const { path } = require('@vuepress/utils')

module.exports = {
	base: './',
	lang: 'zh-CN',
	open: true,
	title: 'tob ui',
	description: 'tob ui 文档',
	markdown: {
		code: {
			lineNumbers: false
		}
	},
	alias: {
		'/h5': path.resolve(__dirname, './public/h5'),
		'@design': path.resolve(__dirname, '../../design')
	},
	head: [['link', { rel: 'icon', href: '/logo.png' }]],
	themePlugins: {
		backToTop: true
	},
	plugins: [
		[
			'@vuepress/plugin-search',
			{
				locales: {
					'/': {
						placeholder: 'Search'
					}
				}
			}
		],
		[
			'@vuepress/register-components',
			{
				componentsDir: path.resolve(
					__dirname,
					'../../components'
				)
			}
		]
	],
	theme: path.resolve(__dirname, './theme'),
	themeConfig: {
		logo: 'logo.png',
		lastUpdated: true,
		contributors: false,
		logoDark: 'darklogo.png',
		lastUpdatedText: '更新时间',
		toggleDarkMode: '一天又过去了吗?',
		navbar: [
			{
				text: '指南',
				link: '/guide/'
			},
			{
				text: '组件',
				link: '/components/'
			},
			{
				text: 'Talking',
				link: '/talking/'
			},
			{
				text: 'GitHub',
				link: 'git'
			},
			{
				text: 'Gitee',
				link: 'gitee'
			}
		],
		sidebarDepth: 10,
		sidebar: {
			'/guide/': [
				{
					text: 'Guide',
					children: ['/guide/index.md', '/guide/started.md']
				},
				{
					text: 'Design',
					children: [
						'/guide/design/index.md',
						'/guide/design/style.md',
						'/guide/design/presetsFirst.md',
						'/guide/design/color.md'
					]
				}
			],
			'/components/': [
				{
					text: 'Components',
					children: ['/components/index.md']
				},
				{
					text: '基础',
					children: [
						'/components/base/btn.md',
						'/components/base/cell.md',
						'/components/base/icon.md',
						'/components/base/img.md',
						'/components/base/layout.md',
						'/components/base/popup.md'
					]
				},
				{
					text: '表单',
					children: [
						'/components/form/input.md',
						'/components/form/radio.md',
						'/components/form/checkbox.md',
						'/components/form/switch.md',
						'/components/form/textarea.md',
						'/components/form/stepper.md',
						'/components/form/slider.md',
						'/components/form/search.md',
						'/components/form/numberKeyBoard.md',
						'/components/form/passwordInput.md',
						'/components/form/form.md'
					]
				},
				{
					text: '反馈',
					children: [
						'/components/feedback/actionSheet.md',
						'/components/feedback/dialog.md',
						'/components/feedback/dropdownMenu.md',
						'/components/feedback/notify.md',
						'/components/feedback/overlay.md'
					]
				},
				{
					text: '展示',
					children: [
						'/components/show/pendant.md',
						'/components/show/collapse.md',
						'/components/show/divider.md',
						'/components/show/noticeBar.md',
						'/components/show/steps.md',
						'/components/show/tag.md',
						'/components/show/card.md',
						'/components/show/banner.md'
					]
				},
				{
					text: '导航',
					children: [
						'/components/navigation/link.md',
						'/components/navigation/breadcrumbs.md',
						'/components/navigation/grid.md',
						'/components/navigation/navBar.md',
						'/components/navigation/pagination.md',
						'/components/navigation/menu.md'
					]
				},
				{
					text: '其他',
					children: ['/components/others/backTop.md']
				}
			],
			'/talking/': [
				{
					text: 'Talking',
					children: ['/talking/index.md']
				},
				{
					text: 'Core',
					children: ['/talking/core/shouldCore.md']
				}
			]
		}
	}
}
