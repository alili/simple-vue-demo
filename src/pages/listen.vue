<template>
  <div id="listen">
    <div class="card">
      <img
        src="../assets/left_round.png"
        :class="{'rotate': start}"
        class="left">
      <img
      src="../assets/listen.png"
      class="listen">
      <img
      src="../assets/right_round.png"
      :class="{'rotate': start}"
      class="right">
    </div>
    <img
      @click="rotate"
      src="../assets/pay.jpg"
      alt=""
      class="btn pay">
    <img
      @click='play'
      src="../assets/play.jpg"
      alt=""
      class="btn play">
    <div class="taps">
      <div
        @click="tapUp"
        class="tap">
        赞一个<img src="../assets/up.jpg" height="20" width="20" alt="">
      </div>
       <div
        @click="tapDown"
        class="tap">
        什么辣鸡<img src="../assets/down.jpg" height="20" width="20" alt="">
      </div>
    </div>
    <p>至今 <span>{{up}}</span> 人觉得赞 <span>{{down}}</span> 人觉得辣鸡</p>
    <img src="../assets/footer.jpg" alt="" class="footer">
  </div>
</template>

<script>
export default {
  data () {
    return {
      up: 0,
      down: 0,
      start: false
    }
  },
  methods: {
    play () {
      this.$route.router.go({name: "Record"})
    },
    rotate () {
      this.start = !this.start
    },
    tapUp () {
      this.up++
    },
    tapDown () {
      this.down++
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
.rotate{
  animation:gogogo 8s infinite linear ;
}
.listen{
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
.tap,p{
  font-size: 16px;
  font-family: yy;
  font-weight: bold;
}
.taps{
  width: 250px;
  margin: 10px auto 0;
  display: flex;
  justify-content:space-around;
}
p{
  text-align: center;
  span{
    font-size: 20px;
  }
}
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
