<template>
  <div>
    <PetTable species="cats" :pet="cats" />
    <!-- <pet-table /> -->
 </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable'

export default {
  components: {
    PetTable
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
