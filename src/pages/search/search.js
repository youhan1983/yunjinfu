import 'css/common.css'
import './search.css'
import  Vue from 'vue'
import  axios from 'axios'
import url from 'js/api.js'
import Foot from 'components/Foot.vue'
import qs from 'qs'
let {keyword} = qs.parse(location.search.substr(1))
let {id} = qs.parse(location.search.substr(0))
let app = new Vue({
  el: '#app',
  data: {
    searchLists: null,
    keyword:keyword
  },
  created(){
    this.getSearchLists(keyword,id);
  },
  methods: {
    getSearchLists(keyword,id){
      axios.get(url.search).then(res =>{
        this.searchLists = res.data.lists;
      }).catch(res => {
        console.log(111)
      })
    }
  },
  components: {
    Foot
  }
})

