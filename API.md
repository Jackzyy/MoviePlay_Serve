# 接口说明
接口数据摘自于卡卡网   
## 接口   
接口都为get请求，需要传三个参数

```JavaScript
    "type": "",   //类型
    "id": "",     //页数
    "kind": "",   //排序方式
```

type参数：
```JavaScript
    "type": "Animation"  //动漫分类
    "type": "Comedy"     //电影喜剧分类
```

kind参数：
```JavaScript
    "kind": "addtime"   //最新排序
    "kind": "hits"      //人气排序
    "kind": "gold"      //评分排序
```
