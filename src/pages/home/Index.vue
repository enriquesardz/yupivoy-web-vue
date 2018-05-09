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
    <section class="section-container">
      <v-layout column>
        <h1 class="section-title">Compra ahora</h1>
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
    margin-top: 6em;
  }
  .section-title {
    font-size: 3em;
    font-weight: 400;
    text-align: center;
    text-justify: inter-word;
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
