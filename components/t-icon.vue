<template>
	<span
		class="t-icon"
		:class="[classPrefix, Color, Type]"
		:style="{ fontSize: size }"
		@click="click"
	/>
</template>

<script>
import { Color, Emits, textColorPresets, $P, $C } from '../core'
/**
 * Icon 图标
 * @description 图标组件
 * @tutorial TODO 文档
 *
 * @property {String} type 类型
 * @property {String} classPrefix = [tob-ui-icon] 默认为tob-ui-icon
 * @property {String} size 尺寸，默认继承父级，允许接受单位有rpx，px，em等
 * 
 * @property {String} color = [primary|secondary|accent|neutral|info|success|warning|error] 颜色类型，默认空，继承父级颜色
 *
 * 	@value primary 主色
 * 	@value secondary 次要色
 * 	@value accent 强调色
 * 	@value neutral 中和色
 * 	@value base 基础色
 *
 * 	@value info 信息
 * 	@value success 成功
 *  @value warning 警告
 * 	@value error 错误
 *
 * @event {Function} click 点击事件
 */
export default {
	name: 't-icon',
	mixins: [Emits(['click']), Color({ presets: textColorPresets })],
	props: $P({
		type: '', // 类型
		size: '45px', // 尺寸
		classPrefix: 'tob-ui-icon' // 前缀
	}),
	computed: $C({
		Type: 'icon-$' // 类型
	})
}
</script>

<style scoped lang="less">
@import "@design/icon.css";
@import (reference, less) "@design/theme.css";

.t-icon {
	.inline-block;
}
</style>
