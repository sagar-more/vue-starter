<template>
  <div>
      <h1>{{ petDetails.name }} ({{ petDetails.species }})</h1>
      <p>Age: {{petDetails.age}} years old</p>
      <p>Breed: {{petDetails.breed}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      petDetails: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    const { species, id } = this.$route.params
    this.petDetails = this[species][id]
  }
}
</script>
