(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44c95989"],{"1adb":function(t,i,s){"use strict";s.r(i);var o=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"detail"},[t.isShow?s("div",{staticClass:"load"},[s("van-loading",{attrs:{color:"#7D7D7D"}})],1):s("div",[s("div",{staticClass:"box-top"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:t.movieInfo.movieImg,alt:""}})]),s("div",{staticClass:"info"},[s("div",[s("p",{staticClass:"van-ellipsis movie-name"},[t._v(t._s(t.movieInfo.movieTitle))]),s("p",{staticClass:"movie-bot"},[t._v(t._s(t.movieInfo.movieState))]),s("p",{staticClass:"van-ellipsis movie-bot"},[t._v(t._s(t.movieInfo.movieActor))]),s("p",{staticClass:"movie-bot"},[t._v(t._s(t.movieInfo.movieType))]),s("p",{staticClass:"movie-bot"},[t._v(t._s(t.movieInfo.movieDirector))]),s("p",{staticClass:"movie-bot"},[t._v(t._s(t.movieInfo.movieArea))]),s("p",{staticClass:"movie-bot"},[t._v("时间："+t._s(t.movieInfo.movieUptime))])]),s("div",{staticClass:"bot-btn"},[s("div",{staticClass:"coll-btn",on:{click:function(i){t.goPlay(t.movieInfo.playSource[0].movieList[0].movieUrl)}}},[t._v("立即播放")]),t.isCollect?s("div",{staticClass:"coll-btn-one",on:{click:t.cancelCollect}},[t._v("已收藏")]):s("div",{staticClass:"coll-btn",on:{click:t.goCollect}},[t._v("可收藏")])])])]),s("div",{staticClass:"summary"},[s("p",{staticClass:"summary-title"},[t._v("简介")]),s("p",{staticClass:"summary-info"},[t._v(t._s(t.movieInfo.movieSummary))])]),s("div",{staticClass:"movie-list"},[s("p",[t._v("剧集")]),s("div",[s("van-tabs",{attrs:{type:"card",color:"#FE9B71"}},t._l(t.movieInfo.playSource,function(i){return s("van-tab",{key:i.id,attrs:{title:i.title}},t._l(i.movieList,function(i){return s("div",{key:i.id,staticClass:"list"},[s("div",{staticClass:"van-ellipsis episode",on:{click:function(s){t.goPlay(i.movieUrl)}}},[t._v("\n                                "+t._s(i.movieTitle)+"\n                            ")])])}))}))],1)])])])},e=[],l={data:function(){return{url:{url:""},movieInfo:"",isShow:!1,collectUrl:"",isCollect:!1}},methods:{getDetail:function(){var t=this;this.isShow=!0,this.$axios.get("/detail",this.url).then(function(i){200==i.code&&(t.isShow=!1,t.movieInfo=i.data.movieInfo,t.collectUrl=i.Url)})},getCollect:function(){var t=this;""!=this.$store.state.userInfo&&this.$axios.get("/iscollections",{url:this.$route.query.url}).then(function(i){200==i.code&&(t.isCollect=i.isCollect)})},goPlay:function(t){this.$router.push({path:"/play",query:{title:this.movieInfo.movieTitle,url:t}})},goCollect:function(){""!=this.$store.state.userInfo?(this.isCollect=!this.isCollect,this.$axios.post("/collections",{url:this.collectUrl}).then(function(t){})):this.$toast.fail("请先登录哦")},cancelCollect:function(){this.isCollect=!this.isCollect,this.$axios.post("/cancelCollect",{url:this.collectUrl}).then(function(t){})}},created:function(){this.url.url=this.$route.query.url,this.getDetail(),this.getCollect()}},a=l,c=(s("52df"),s("2877")),n=Object(c["a"])(a,o,e,!1,null,"a7e0da44",null);n.options.__file="MovieDetail.vue";i["default"]=n.exports},"52df":function(t,i,s){"use strict";var o=s("6ace"),e=s.n(o);e.a},"6ace":function(t,i,s){}}]);
//# sourceMappingURL=chunk-44c95989.519922ef.js.map