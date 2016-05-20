<template>
  <div id="app">
    <router-view keep-alive></router-view>
  </div>
</template>

<script>

export default {
  data () {
    return {
      playing: true
    }
  },
  components: {
  },
  methods: {
  },
  ready () {
  }
}

</script>

<style lang='less'>
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
}
#app{
  width: 100%;
  height: 100%;
}
.full{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.center{
  left: 50%;
  transform:translateX(-50%);
}
@font-face {
  font-family: 'yy';
  src: url('./assets/yy.ttf');
  font-weight: normal;
  font-style: normal;
}

@keyframes gogogo {
    0%{
        -webkit-transform: rotate(0deg);
    }
    50%{
        -webkit-transform: rotate(180deg);
    }
    100%{
        -webkit-transform: rotate(360deg);
    }
}
</style>
