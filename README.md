# citycascade

---

城市级联组件,提供两级城市级联功能特性(此组件扣至新浪微博)
![城市级联图](http://ww2.sinaimg.cn/mw690/abede2a8gw1eekv5gsswaj20nq071t8x.jpg)

---

## 最佳实践

###默认使用

````html
<select name="city" id="city1"></select>
<select name="city" id="city2" defvalue="0"></select>
````

```javascript
seajs.use('citycascade', function(citycascade) {
	new citycascade({
		provDom:'city1',
		cityDom:'city2',
		noLimit: {city: !0}
	});
});
```

###城市信息有默认值

````html
<select name="city" id="city3" defvalue="34"></select>
<select name="city" id="city4" defvalue="8"></select>
````

```javascript
seajs.use('b5m/citycascade/1.0.0/citycascade', function(citycascade) {
	new citycascade({
		provDom:'city3',
		cityDom:'city4',
		noLimit: {city: !0}
	});
});
```
