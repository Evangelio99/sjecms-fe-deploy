<template>
    <v-row 
    justify="center"
  >
    <v-col
    cols="12"
    sm="8"
    md="5"
    >
      <v-card class="titleforgot elevation-12 col-lg-11 col-l-8 mx-auto" shaped>
        <v-card-title class="titleforgot" style="margin-top:10%;margin-left:11%">
            Reset Password
        </v-card-title>
            <v-card-text>
                <v-text-field
                    color="#36506b"
                    prepend-icon="mdi-lock"
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="New Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                ></v-text-field>

                <v-text-field
                    color="#36506b"
                    prepend-icon="mdi-lock"
                    v-model="c_password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Confirm Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                ></v-text-field>
            </v-card-text>
            
            <!-- Login -->
            <v-card-actions>
              <v-spacer />
                <v-btn 
                  @click="handleSubmit"
                  color="#63C5DA"
                  class="rounded-pill white--text"
                  style="margin-bottom:10%;width:50%">
                  Change Password
                  </v-btn>
              <v-spacer />
            </v-card-actions>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
    data () {
      return {
        column: null,
        row: null,
        rules: {
          required: value => !!value || 'Required.',
        },
        show1: false,
      }
    },
    name: 'ChangePassword'
}
</script>

<style scoped>
.spacing{
    margin-top: -4px;
}

.spacingradio{
    margin-top: -8px;
}

.titleforgot{
    font-family: Montserrat-reg;
    font-weight: bolder;
    font-size: 40px;
    color: #36506b;
    top: 35%;
}
</style>