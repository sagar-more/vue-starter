<template>
  <div>
    <PetTable species="dogs" :pet="dogs" />
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
      'dogs'
    ])
  }
}
</script>
