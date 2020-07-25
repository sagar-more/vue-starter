<template>
  <div class="home">
    <h1>Adopt a new best friend.</h1>
    <br/>
    <h3>Total Pets: {{ petsCount }}</h3>
    <h5>Cats: {{  getAllCats.length }}</h5>
    <br/>
    <b-button @click="toggleForm" variant="outline-primary">Add new pet</b-button>
    <b-container fluid="sm">
      <b-form @submit.prevent="onSubmit" v-if="showPetForm">
        <b-form-group id="input-group-1" label="Pet's Name:" label-for="input-1">
          <b-form-input id="input-1" v-model="form.name" required placeholder="Enter name"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Species:" label-for="input-2">
          <b-form-select id="input-2" v-model="form.species" :options="['cats', 'dogs']" required></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-3" label="Pet's Age:" label-for="input-3">
          <b-form-input id="input-3" v-model="form.age" required placeholder="Enter age"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

const defaultFormState = {
  name: '',
  species: null,
  age: ''
}

export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      form: { ...defaultFormState }
    }
  },
  computed: {
    ...mapGetters([
      'petsCount',
      'getAllCats'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    toggleForm () {
      this.showPetForm = !this.showPetForm
    },
    onSubmit () {
      const { species, age, name } = this.form
      const payload = {
        species,
        pet: { name, age }
      }
      this.addPet(payload)
      this.showPetForm = !this.showPetForm
      this.form = { ...defaultFormState }
    }
  }
}
</script>
