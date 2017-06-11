<template>
  <nav class="level is-mobile">
    <div class="level-left">
      <a class="level-item">
        <span class="icon is-small"
              @click="addNote"
              title="Add note">
          <i class="fa fa-sticky-note-o"></i>
        </span>
      </a>
      <a class="level-item">
        <span class="icon is-small"
              @click="onHeartClick"
              :title="`This show has ${show.votes || 0} votes`">
          <i ref="heart" class="fa fa-heart"></i>
        </span>
      </a>
      <div>
        <card-modal @ok="onOk"
                    @cancel="resetUI"
                    @close="resetUI"
                    :visible="showModal"
                    :title="`Add note to ${show.name}`"
                    transition="zoom">
          <div class="content has-text-centered">
            <div class="field">
              <label class="label">Add note</label>
              <p class="control">
                <textarea class="textarea" v-model="note" placeholder="Add note"></textarea>
              </p>
            </div>
          </div>
        </card-modal>
      </div>
    </div>
  </nav>
</template>

<script>
  import { Modal, ImageModal, CardModal } from 'vue-bulma-modal'

  export default {
    name: 'show-social-nav',
    components: {
      Modal,
      ImageModal,
      CardModal
    },
    props: {
      show: {
        type: Object
      }
    },
    data () {
      return {
        showModal: false,
        note: ''
      }
    },
    methods: {
      onHeartClick () {
        this.$refs.heart.classList.add('clicked')
        this.$emit('vote')
      },
      addNote () {
        this.showModal = true
      },
      onOk () {
        this.$emit('addNote', this.note)
      },
      resetUI: function () {
        this.showModal = false
        this.note = ''
      }
    }
  }
</script>

<style lang='scss' src="./ShowSocialNav.scss"></style>
