(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f124b5c"],{a92e:function(t,i,a){},bb51:function(t,i,a){"use strict";a.r(i);var o=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"home"},[a("form",{attrs:{action:""}},[a("van-search",{attrs:{placeholder:"请输入搜索关键词"},on:{search:t.onSearch},model:{value:t.value,callback:function(i){t.value=i},expression:"value"}})],1),t.isShow?a("div",{staticClass:"load"},[a("van-loading",{attrs:{color:"#7D7D7D"}})],1):a("div",[a("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(i){t.isLoading=i},expression:"isLoading"}},[a("van-swipe",{attrs:{autoplay:3e3}},t._l(t.broadcast,function(i,o){return a("van-swipe-item",{key:o},[a("img",{staticClass:"swipe",attrs:{src:i.img,alt:""},on:{click:function(a){t.goDetail(i.url)}}})])})),a("div",{staticClass:"list"},t._l(t.homeMovie,function(i){return a("div",{key:i.id},[a("div",{staticClass:"box"},[a("div",{staticClass:"title"},[a("p",[t._v(t._s(i.title))]),a("van-icon",{attrs:{name:"more-o"},on:{click:function(a){t.goMore(i.path)}}})],1),a("div",{staticClass:"box-movie"},t._l(i.movie,function(i){return a("div",{key:i.id},[a("div",{staticClass:"movieInfo",on:{click:function(a){t.goDetail(i.movieUrl)}}},[a("div",{staticClass:"img"},[a("img",{attrs:{src:i.movieImg,alt:""}})]),a("div",{staticClass:"van-ellipsis"},[t._v(t._s(i.movieName))])])])}))])])}))],1)],1)])},e=[],s=(a("cadf"),a("551c"),a("097d"),{data:function(){return{homeMovie:"",broadcast:[],value:"",isLoading:!1,isShow:!1}},methods:{onSearch:function(){this.$router.push("/search/".concat(this.value))},goDetail:function(t){this.$router.push({path:"/detail",query:{url:t}})},getHome:function(){var t=this;this.isShow=!0,this.$axios.get("/home").then(function(i){t.homeMovie=i.data,t.isShow=!1})},getBroadcast:function(){var t=this;this.$axios.get("/broadcast").then(function(i){t.broadcast=i.data})},goMore:function(t){console.log(t),this.$router.push("".concat(t))},onRefresh:function(){var t=this;setTimeout(function(){t.getBroadcast(),t.$axios.get("/home").then(function(i){t.homeMovie=i.data,t.isLoading=!1,t.$toast("数据更新成功")})},500)}},created:function(){this.getBroadcast(),this.getHome()}}),n=s,c=(a("e55c"),a("2877")),r=Object(c["a"])(n,o,e,!1,null,"5725fa4d",null);r.options.__file="Home.vue";i["default"]=r.exports},e55c:function(t,i,a){"use strict";var o=a("a92e"),e=a.n(o);e.a}}]);
//# sourceMappingURL=chunk-7f124b5c.7ae4e0a8.js.map