var cheerio = require('cheerio')
let baseUrl = 'http://m.kkkkmao.com'
utils={

    //获取电影列表
    Movie(html) {
        if(html){
        let $ = cheerio.load(html);
        let movies = $('#vod_list');
        let movie = []

        //获取Movie详情
        movies.find('li').each( function(item){
            let movieInfo = $(this);

            //-----获取参数-----
            let movieUrl = `${baseUrl}${movieInfo.find('a').attr('href')}`
            let movieTitle = movieInfo.find('a').attr('title')
            let movieImgUrl = movieInfo.find('a').find('.picsize').find('img').attr('src')
            let movieScore = movieInfo.find('a').find('.score').text()
            let movieClarity = movieInfo.find('a').find('.title').text()
            let movieArea = movieInfo.find('p').text()
            // console.log(movieArea);

            movie.push({
                movieUrl,
                movieTitle,
                movieImgUrl,
                movieScore,
                movieClarity,
                movieArea
            })
        })
        return movie
        }
    },

    //拼接完整Url并返回Url信息
    urlEdit(req){
        let kind = req.query.kind  //排序先后的种类
        let id = req.query.id      //页数id
        let type = req.query.type  //电影类型
        let url = `${baseUrl}/${type}/index_${id}_____${kind}__1.html` //完整url拼接

        let urlInfo = {
            type,
            id,
            kind,
            url
        }
        return urlInfo
    },

    //获取单个电影列表详情
    getDetail(html){
        if(html){
            let $ = cheerio.load(html);
            let movieDetails = $('#resize_vod');
            let movies = $('.plau-ul-list').eq(0);
            let movieInfo = {}
            let movieList = []
            //获取Movie详情
            
            movieDetails.find('.vod-n-l').each( function(item){
                let movieDetail = $(this);
                let reg = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/
                //-----获取参数-----
                let movieTitle = movieDetail.find('h1').text()
                let movieState = movieDetail.find('.clear.fn-left').text()
                let movieActor = movieDetail.find('.vw100.clear').text()
                let movieType = movieDetail.find('.vw100.fn-left').text()
                let movieDirector = movieDetail.find('.vw50.fn-left').text()
                let movieArea = movieDetail.find('.vw50.yc.fn-right').text()
                let movieUptime = reg.exec(movieDetail.find('.vw100').text())[0]
                let movieSummary = movieDetail.find('.v-js.clear.yc').text()

                // console.log(movieDetail.find('.vw100').text())
                movieInfo = {
                    movieTitle,
                    movieState,
                    movieActor,
                    movieType,
                    movieDirector,
                    movieArea,
                    movieUptime,
                    movieSummary

                }
            })

            movieDetails.find('.vod-l').each( function(item){
                let movieDetail = $(this);
                //-----获取参数-----
                let movieImg = movieDetail.find('.vod-n-img').find('img').attr('src')
                movieInfo.movieImg = movieImg
            })

            //获取电影列表
            movies.find('li').each((index, item) =>{
                let movie = $(item)
                let movieHref = movie.find('a').attr('href')
                let movieTitle = movie.find('a').attr('title')
                let movieUrl = `${baseUrl}${movieHref}`
                movieList.push({
                    movieUrl,
                    movieTitle
                })
            })
            movieInfo.movieList = movieList

            //返回数组对象
            let detail = {
                movieInfo
            }
            return detail
        }
    },

    //获取电影解析后的地址(iframe src)
    getPlayUrl(html){
        if(html){
            let $ = cheerio.load(html);
            let playUrl = $('.playerbox').find('iframe').attr('src')

            // console.log(playUrl)
            return playUrl
        }
    },

    //获取首页数据
    getHome(html){
        if(html){
            let $ = cheerio.load(html);

            //电影热映
            let hot_Movie = []
            title_Movie = $('.modo_title.top').eq(0).find('h2').text()
            moreMovie = $('.icor.iconfont').eq(0).find('a').attr('href')
            $('.main').eq(1).find('div').eq(0).find('li').each((index,item) =>{
                hot_Movie.push({
                    movieUrl:`${baseUrl}${$(item).find('a').attr('href')}`,
                    movieName:$(item).find('.name').text(),
                    movieTitle:$(item).find('.title').text(),
                    movieImg:$(item).find('img').attr('src')
                })
            })
            let hotMovie = {
                title:title_Movie,
                moreMovie:`${baseUrl}${moreMovie}`,
                path:moreMovie,
                movie:hot_Movie
            }

            //热播电视
            let hot_TV = []
            title_TV = $('.modo_title.top').eq(1).find('h2').text()
            moreMovie = $('.icor.iconfont').eq(1).find('a').attr('href')
            $('.main').eq(2).find('div').eq(0).find('li').each((index,item) =>{
                hot_TV.push({
                    movieUrl:`${baseUrl}${$(item).find('a').attr('href')}`,
                    movieName:$(item).find('a').attr('title'),
                    movieTitle:$(item).find('.title').text(),
                    movieImg:$(item).find('img').attr('src')
                })
            })
            let hotTV = {
                title:title_TV,
                moreMovie:`${baseUrl}${moreMovie}`,
                path:moreMovie,
                movie:hot_TV
            }

            //热播动漫
            let hot_anime = []
            title_anime = $('.modo_title.top').eq(2).find('h2').text()
            moreMovie = $('.icor.iconfont').eq(2).find('a').attr('href')
            $('.main').eq(3).find('div').eq(0).find('li').each((index,item) =>{
                hot_anime.push({
                    movieUrl:`${baseUrl}${$(item).find('a').attr('href')}`,
                    movieName:$(item).find('a').attr('title'),
                    movieTitle:$(item).find('p').text(),
                    movieImg:$(item).find('img').attr('src')
                })
            })
            let hotAnime = {
                title:title_anime,
                moreMovie:`${baseUrl}${moreMovie}`,
                path:moreMovie,
                movie:hot_anime
            }
            
            //热播综艺
            let hot_Variety = []
            title_Variety = $('.modo_title.top').eq(3).find('h2').text()
            moreMovie = $('.icor.iconfont').eq(3).find('a').attr('href')
            $('.main').eq(4).find('div').eq(0).find('li').each((index,item) =>{
                hot_Variety.push({
                    movieUrl:`${baseUrl}${$(item).find('a').attr('href')}`,
                    movieName:$(item).find('a').attr('title'),
                    movieTitle:$(item).find('.title').text(),
                    movieImg:$(item).find('img').attr('src')
                })
            })
            let hotVariety = {
                title:title_Variety,
                moreMovie:`${baseUrl}${moreMovie}`,
                path:moreMovie,
                movie:hot_Variety
            }

            return [
                hotMovie,
                hotTV,
                hotAnime,
                hotVariety
            ]
        }
    },

    //获取搜索数据
    getSearch(html){
        if(html){
            let $ = cheerio.load(html)
            let searchMovie = []
            let num = $('.top_nav').find('a').find('em').text()
            num = num.replace(/[^0-9]/ig,"");

            $('.new_tab_img').find('li').each((index,item) =>{
                let url = $(item).find('a').eq(0).attr('href')
                let title = $(item).find('h2').text()
                let img = $(item).find('img').attr('src')
                let type = $(item).find('p').eq(0).find('a').attr('title')
                let kind = $(item).find('p').eq(1).text()
                let actor = $(item).find('p').eq(2).text()
                let state = $(item).find('p').eq(3).text()
                let uptime = $(item).find('p').eq(4).text()

                searchMovie.push({
                    num,
                    url:`${baseUrl}${url}`,
                    title,
                    img,
                    type,
                    kind,
                    actor,
                    state,
                    uptime
                })
            })
            return searchMovie
        }
        
    },

    //获取轮播图数据
    getBroadcast(html){
        if(html){
            let Broadcast = []
            let $ = cheerio.load(html)
            $('.focusList').find('li').each((index,item) =>{
                Broadcast.push({
                    img:$(item).find('a').find('img').attr('data-src'),
                    title:$(item).find('span').text(),
                    url:`${baseUrl}${$(item).find('a').attr('href')}`
                })
            })
            return Broadcast
        }
    }
}

module.exports = utils;