<template>
   <v-app light class="skip-top">
    <v-content>
      <section id="gotop">
        <v-parallax :src="require('../assets/programming-wallpaper-hd.png')" height="651">
          <v-layout
            column
            align-left
            justify-left
            class="white--text"
            v-scroll="onScroll"
          >

          <div class="title-head">
            <h1 class="white--text mb-2 display-1 text-xs-center">Rangel Netto</h1>
            <div class="subheading mb-3 text-xs-center">Creative Web Developer</div>
          </div>

          <div class="button-control">
            <v-fab-transition>
              <v-tooltip left>
                <v-btn color="red" key="keyboard_arrow_up" dark fab bottom right slot="activator" @click="$vuetify.goTo('#port', options)">
                  <v-icon>collections</v-icon>
                  <v-icon>close</v-icon>
                </v-btn>
                <span>Portifólio</span>
              </v-tooltip>
            </v-fab-transition>

            <v-fab-transition>
              <v-tooltip right>
                <v-btn color="orange" key="keyboard_arrow_up" dark fab bottom right slot="activator" @click="$vuetify.goTo('#contact', options)">
                  <v-icon>contact_phone</v-icon>
                  <v-icon>close</v-icon>
                </v-btn>
                <span>Contato</span>
              </v-tooltip>
            </v-fab-transition>
              <v-tooltip up>
                <v-btn color="red" key="keyboard_arrow_up" dark fab bottom right fixed slot="activator" @click="$vuetify.goTo('#gotop', options)" v-if="offsetTop > 400">
                  <v-icon>keyboard_arrow_up</v-icon>
                </v-btn>
                <span>Go to top</span>
              </v-tooltip>
          </div>
          </v-layout>
        </v-parallax>
      </section>

      <section id="port">
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way to start developing</h2>
              <span class="subheading">
                Cras facilisis mi vitae nunc
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Material Design</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Fast development</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Completely Open Sourced</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="require('../assets/binary-hackers-hoodies.jpg')" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
            <em>Kick-start your application today</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section id="contact">
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Get in touch!</div>
                </v-card-title>
                <v-card-text>
                  <form>
                    <v-text-field
                      v-model="name"
                      label="Name"
                      :counter="20"
                      :error-messages="errors.collect('name')"
                      v-validate="'required|max:20'"
                      data-vv-name="name"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="email"
                      label="E-mail"
                      :error-messages="errors.collect('email')"
                      v-validate="'required|email'"
                      data-vv-name="email"
                      required
                    ></v-text-field>
                    <v-select
                      :items="items"
                      v-model="select"
                      label="Best time to return"
                      :error-messages="errors.collect('select')"
                      v-validate="'required'"
                      data-vv-name="select"
                      required
                    ></v-select>
                   <v-text-field
                      name="input-1"
                      label="Message"
                      textarea
                    ></v-text-field>

                    <v-btn @click="submit">submit</v-btn>
                    <v-btn @click="clear">clear</v-btn>
                  </form>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact Me</div>
                </v-card-title>
                <v-card-text>
                  You also can contact me as:
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>+353 083 888 3627</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Dublin, Ireland</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>j.rangel.flash@gmail.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <v-footer height="auto">
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-xs-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            icon
            class="mx-3 white--text"
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>
        <v-card-text class="white--text">
          <div class="white--text ml-3">
              Made with
              <v-icon class="red--text">favorite</v-icon>
              Using <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
              by <a class="white--text" href="https://github.com/flashimxd">Rangel Netto — &copy;2018</a>
            </div>
        </v-card-text>
      </v-card>
    </v-footer>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    duration: 500,
    offset: 0,
    easing: 'easeInOutCubic',
    offsetTop: 0,
    icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
    name: '',
    email: '',
    select: null,
    items: [
      'Morning',
      'Afternoon',
      'Night',
    ],
    checkbox: null,
    dictionary: {
      attributes: {
        email: 'E-mail Address',
        // custom attributes
      },
      custom: {
        name: {
          required: () => 'Name can not be empty',
          max: 'The name field may not be greater than 10 characters',
          // custom messages
        },
        select: {
          required: 'Select field is required',
        },
      },
    },
  }),
  computed: {
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
      };
    },
  },
  methods: {
    onScroll() {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
    },
    submit() {
      this.$validator.validateAll();
    },
    clear() {
      this.name = '';
      this.email = '';
      this.select = null;
      this.checkbox = null;
      this.$validator.reset();
    },
  },
  mounted() {
    this.$validator.localize('en', this.dictionary);
  },
  props: {
    source: String,
  },
};
</script>

<style scoped>
#app{
  margin-top: -60px !important;
}

.title-head{
  margin-top: 1%;
}

.button-control{
  margin-top: 35%;
  margin-left: 35%;
}
</style>
