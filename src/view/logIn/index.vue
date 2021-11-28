<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>账号登录</span>
    </div>
    <div class="text item">
      <div>
        <span>账号：</span>
        <el-input
          style="width:350px;"
          v-model="inputCount"
          placeholder="请输入账号"
          title="账号："
        ></el-input>
      </div>
      <br />
      <div style="margin-top:10px">
        <span>密码：</span>
        <el-input
          style="width: 350px;"
          placeholder="请输入密码"
          v-model="inputPassword"
          show-password
        ></el-input>
      </div>
    </div>
    <div class="marginTop">
      <el-button
        type="primary"
        plain
        style="margin-left:110px"
        @click="toHome()"
        >确定</el-button
      >
      <el-button type="danger" plain style="margin-left:50px">取消</el-button>
    </div>
    <div class="marginTop">
      <el-button type="text" style="margin-left:100px">忘记密码？</el-button>
      <el-button type="text" style="margin-left:100px">注册新账号</el-button>
    </div>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      inputCount: "",
      inputPassword: ""
    };
  },
  methods: {
    toHome() {
      this.$router.push({
        path: "homePage",
      });
    }
  }
};
</script>

<style>
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
  font-size: 20px;
}
.clearfix:after {
  clear: both;
  font-size: 20px;
}
.box-card {
  width: 480px;
  margin-left: 40%;
  margin-top: 20%;
}
.marginTop {
  margin-top: 30px;
}
</style>
