<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
    <h1>List</h1>
      <div class="text-center">
        <v-row>
          <v-col cols="12" md="3" sm="6" xs="12" v-for="image in images" v-bind:key="image.src">
            <v-card>
              <v-card-title class="headline">
                Screenshot
              </v-card-title>
              <v-card-text>
                {{ image.src }}
              </v-card-text>
              <a :href="image.src" target="_blank">
                <v-img :src="image.src" />
              </a>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="primary"
                  nuxt
                  :to="image.src"
                  target="_blank"
                >
                  Link
                </v-btn>
              </v-card-actions>
            </v-card>

          </v-col>
        </v-row>
      </div>

    </v-flex>
  </v-layout>
</template>

<script>
export default {
  asyncData(context) {
    return context.$axios.get('/api/screenshots')
      .then((res) => { return { images: res.data } })
  }
}
</script>
