<template>
  <div>
    <div class="scoreBoard">
      <span>(O) has {{ wins.O }} wins</span>
      <span>(X) has {{ wins.X }} wins</span>
    </div>
    <div class="container-fluid">
      <div class="row ">
        <div class="col text-center">
          <h1>Tic Tac Toe</h1>
          <h2>Match #{{ matches + 1 }}</h2>
        </div>
      </div>
      <div class="row text-center">
        <div class="col text-center" id="app">
          <grid class="mx-auto"></grid>
          <button class="restart wm-270" @click="restart">Restart</button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import Grid from './components/Grid.vue'

export default {
  components: { Grid },
  name: 'app',
  data () {
    return {
      matches: 0,
      wins: {
        O: 0,
        X: 0
      }
    }
  },

  methods: {
    restart () {
      Event.$emit('clearCell')

      Event.$emit('gridReset')

      this.matches++
    }
  },

  created () {
    Event.$on('win', winner => this.wins[winner]++)
  }
}
</script>

<style>
body {
  background-color: #141311;
  color: #fff;
  font-family: 'Dosis', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0px;
}

#app {
  color: #fff;
}

h1 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 3em;
}

.restart {
  background-color: #e74c3c;
  color: #fff;
  border: 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-family: 'Dosis', Helvetica, sans-serif;
  font-size: 1.4em;
  font-weight: bold;
  margin: 0px;
  padding: 15px;
  width: 100%;
}

.restart:hover {
  background-color: #c0392b;
  cursor: pointer;
}

.scoreBoard {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 15px;
  background-color: #a2482e;
  box-shadow: 10px solid #fff;
  padding: 20px;
  overflow-x: none;
}

.scoreBoard h2 {
  margin: 0px;
}

.scoreBoard span {
  float: right;
  font-size: 1.5em;
  font-weight: bold;
  margin-left: 20px;
}
.wm-270{
  max-width: 270px;
}
</style>
