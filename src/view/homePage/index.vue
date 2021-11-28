<template>
  <Layout>
    {{fatherss}}
    <table :list="personList" @father="father"></table>
  </Layout>
</template>

<script>
import {personList,get} from "../../api/index"
import table from "./components/table"
import Layout from "../../components/Layout"
export default {
  name: "",
  data() {
    return {
      personList:[],
      fatherss:""
    };
  },
  mounted() {
    this.getList();
  },
  components:{
    table,
    Layout
  },
  methods: {
    getList() {
      let data = {
        id : 2
      }
      get(data).then(res=>{
        console.log(res)
      })
      personList().then(res=>{
        console.log(res.data.data.list)
        this.personList = res.data.data.list
      })
    },
    father(e)  {
      console.log(e)
      this.fatherss = e
      this.$router.push({
        path:"student",
        query:{
          user : "xxxx"
        }
      })
    }
  }
};
</script>

<style  scoped>
</style>