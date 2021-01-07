<template>
  <div class="monster">
    <div class="d-flex flex-wrap align-center d-print-none">
      <Breadcrumb class="mr-auto mb-4" />

    </div>
    <Monster :monster="$page" />
    <Edit />
  </div>
</template>

<script>
import Breadcrumb from '@theme/components/Breadcrumb'
import Monster from '@theme/components/Monster'
import MyMonstersButton from '@theme/global-components/MyMonstersButton'
import Edit from '@theme/components/Edit'
import { isResourceInLibrary } from '@theme/util'

export default {
  name: 'MonsterLayout',

  components: {
    Breadcrumb,
    Monster,
    MyMonstersButton,
    Edit
  },

  computed: {
    isMonsterInBestiary () {
      return isResourceInLibrary(this.$page, this.$store.state.myMonsters.monsters)
    },

    displayToggleMonsterButton () {
      if (this.isMonsterInBestiary) {
        return 'Supprimer de mon bestiaire'
      }
      return 'Ajouter à mon bestiaire'
    }
  },

  methods: {
    toggleMonsterInBestiary () {
      if (this.isMonsterInBestiary) {
        this.$store.commit('myMonsters/removeMonster', this.$page)
        this.$store.commit('setSnackbarText', "Le monstre " + this.$page.title + " a été supprimé de votre bestiaire")
        this.$store.commit('setIsOpenSnackbar', true)
      } else {
        this.$store.commit('myMonsters/addMonster', this.$page)
        this.$store.commit('setSnackbarText', "Le monstre " + this.$page.title + " a été ajouté à votre bestiaire")
        this.$store.commit('setIsOpenSnackbar', true)
      }
    }
  },

  mounted () {
    this.$store.commit('setHasRightDrawer', false)
    this.$store.commit('setRightDrawer', false)
    this.$store.commit('setInRightDrawer', null)
  }
}
</script>

<style>
</style>
