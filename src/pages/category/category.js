import 'css/common.css'
import './category.css'
import  Vue from 'vue'
import  axios from 'axios'
import url from 'js/api.js'
import Foot from 'components/Foot.vue'
let app = new Vue({
  el: '#app',
  data: {
    topLists: null,
    topIndex: 0,
    rankData: {},
    subData: {}
  },
  created(){
    this.getLists();
    this.getSubLists(0);
    //this.toSearch(list);
  },
  methods: {
    getLists(){
      axios.get(url.topLists).then(res =>{
        this.topLists = res.data.lists;
      }).catch(res => {
  console.log(111)
      })
    },
    getSubLists(index,id){
      this.topIndex = index;
      if(index == 0){
        axios.get(url.rank).then(res =>{
          //debugger
          this.rankData = res.data.data;
        }).catch(res => {
          console.log(111)
        })
      }else{
        axios.get(url.subLists,{id}).then(res =>{
          this.subData = res.data.data;
        }).catch(res => {
          console.log(111)
        })
      }
    },
    getRankLists(){
      axios.get(url.topLists).then(res =>{
        this.rankLists = res.data.lists;
      }).catch(res => {
        console.log(111)
      })
    },
    toSearch(list){
      location.href = `search.html?keyword=${list.name}&id=${list.id}`
    }
  },
  components: {
    Foot
  },
  filters:{
    number(price){
      //debugger
      return price+".00"
    }
  }
})

