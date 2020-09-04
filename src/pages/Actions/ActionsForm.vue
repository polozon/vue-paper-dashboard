<template>
  <card class="card" title="Actions">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="Command"
                      :disabled="true"
                      placeholder="Paper dashboard"
                      v-model="user.company">
            </fg-input>
            <p-button type="info"
                    square
                    @click.native.prevent="updateProfile">
              Enter
            </p-button>
          </div>
          <div class="col-md-3 pad-top">
          </div>
          <div class="col-md-4">
          </div>
        </div>

        <div class="row">
        </div>

        <div class="row">
        </div>

        <div class="row">
          <div class="col-md-4">
          </div>
          <div class="col-md-4">
          </div>
          <div class="col-md-4">
          </div>
        </div>


        <div class="text-center">
          <p-button type="info"
                    square
                    @click.native.prevent="updateProfile">
            Start/Stop
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        company: "S1,1",
        username: "michael23",
        email: "",
        firstName: "Chet",
        lastName: "Faker",
        address: "Melbourne, Australia",
        city: "Melbourne",
        postalCode: "",
        aboutMe: `We must accept finite disappointment, but hold on to infinite hope.`
      }
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    }
  }
};
</script>
<style>
</style>
