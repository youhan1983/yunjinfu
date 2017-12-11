let url = {
  hotLists: '/index/hotLists',
  banner: '/index/banner',
  topLists: '/category/topList',
  subLists: '/category/subList',
  rank: '/category/rank',
  search: '/search/list'
}
//开发环境和真实环境的切换
let host = 'http://rapapi.org/mockjsdata/24170'
 for(let key in url){
  if(url.hasOwnProperty((key))){
    url[key] = host + url[key]
  }
 }
export  default url
