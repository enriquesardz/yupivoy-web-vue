<template>
  <section>
    <!-- Parallax -->
    <section>
      <v-parallax height="600" src="http://yupivoy.com/images/fondoplaya.png">
        <v-layout style="z-index:1" row align-center justify-center wrap>
          <v-flex fill-height xs6>
            <v-flex column align-center fill-height>
              <v-flex>
                <h1 class="home-phrase">Cotiza tu viaje con nosotros</h1>
              </v-flex>
              <v-flex>
                <v-btn color="primary">Ir ahora</v-btn>
              </v-flex>
            </v-flex>
          </v-flex>
          <v-flex xs6>
            <img src="@/assets/cocobeach.png" height="500"/>
          </v-flex>
        </v-layout>
        <div class="layer" />
      </v-parallax>
    </section>

    <!-- Purchase now -->
    <section class="section-container" style="background-color:#f3f3f3">
      <v-layout column>
        <h1 class="section-title">Compra ahora</h1>
        <div id="liquidBoxContainer" style="max-width: 400px; margin:auto;"></div>
      </v-layout>
    </section>

    <section class="section-container">
      <v-layout column>
          <h1 class="section-title">Cotiza tu viaje en pagos</h1>
          <v-layout row justify-space-around flex>
            <div
            v-for="(num, index) in 3"
            :key="`${index}`"
            style="height:350px; width:350px; background-color:pink;">
            </div>
          </v-layout>
      </v-layout>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
  .home-phrase {
    font-family: 'Oswald', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 4em;
    font-weight: 500;
    text-align: center;
    text-justify: inter-word;
  }
  .section-container {
    margin-top: 3em;
    padding: 1.5em;
  }
  .section-title {
    font-size: 2.5em;
    font-weight: 400;
    text-align: center;
    text-justify: inter-word;
    margin-bottom: 1.5em;
  }
  .layer {
    background-color: rgba(0, 0, 0, 0.104);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
