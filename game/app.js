var v_game = new Vue({
  el: '#v-game',
  data: {
    progress: 0,
    isGameFinished: false
  },
  methods: {
    blow: function(){
      this.progress += 25;
      if(this.progress >=100 ){
        this.isGameFinished = true;
      }
    },
    restart: function(){
      this.isGameFinished = false;
      this.progress = 0;
    }
  },

  computed: {

  }
});
