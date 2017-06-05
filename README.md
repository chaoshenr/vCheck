### 自定义checkbox样式工具，不做特殊处理
#### 使用方式

```
<body>
	<!-- 必须设置 id -->
	<input type="checkbox" id="checkbox1">
	<input type="checkbox" id="checkbox2">
	<input type="checkbox" id="checkbox3">
	<script src="./lib/vCheck.js"></script>
	<script>
		vcheck.set({
			checkClass: "vCheck", //设置容器类名
			style: {
				width: "16px", //最终呈现图片的宽
				height: "16px", //最终呈现图片的高
				checkedIcon: "imgs/checkedIcon.png", //选中时图片
				uncheckIcon: "imgs/uncheckIcon.png" //非选中时图片
			},
			checked: function (e) { //选中时回调，这里不能直接使用this作为选中对象，使用 e 即可
				console.log("选中")
				console.log(e);
			},
			uncheck: function (e) { //非选中时回调

				console.log("取消")
				console.log(e);
			}
		})
	</script>
</body>
```