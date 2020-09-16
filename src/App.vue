<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<style lang="scss">
*, :after, :before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

:root {
  font-size: 62.5%;
}

html,
body {
  height: 100%;
  width: 100%;
  min-width: 1200px;
}

#app {
  height: 100%;
}

.container {
  width: 1200px;
  // width: 100%;
  margin: 0 auto;
}
</style>
