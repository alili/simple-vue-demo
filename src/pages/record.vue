<template>
  <div id="record">
    <div class="card">
      <img src="../assets/left_round.png" height="114" width="119" alt="" class="left">
      <img src="../assets/record.jpg" alt="" class="record">
      <img src="../assets/right_round.png" height="114" width="119" alt="" class="right">
    </div>
    <img
      src="../assets/again.jpg"
      alt=""
      class="btn again">
    <img
      @click='play'
      src="../assets/share.png"
      alt=""
      class="btn share">
    <img src="../assets/footer.jpg" alt="" class="footer">
  </div>
</template>

<script>
export default {
  data () {
    return {
      up: 0,
      down: 0
    }
  },
  methods: {
    play () {
      this.$route.router.go({name: "Record"})
    }
  }
}
</script>

<style lang='less' scoped>
.card{
  background: url(../assets/card.jpg) center / cover;
  width: 320px;
  height: 194px;
  margin: 0 auto;
  position: relative;
}
.left{
  width: 60px;
  height: 60px;
  position: absolute;
  left: 70px;
  top: 70px;
}
.right{
  width: 60px;
  height: 60px;
  position: absolute;
  right: 70px;
  top: 70px;
}
.record{
  width: 60px;
  height: 60px;
  position: absolute;
  left: 130px;
  top: 70px;
}
.btn{
  width: 50%;
  height: 50%;
  margin-top: 20px;
  margin-left: 25%;
}
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
