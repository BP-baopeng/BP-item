<template>
  <div class="vuegram-post">
    <div class="header">
      <div class="level-left">
        <figure class="image is-32x32">
          <img :src="post.userImage" alt />
        </figure>
        <span class="username">{{ post.username }}</span>
      </div>
      <div
        class="img-container"
        ref="img"
        @dblclick="dblclick"
        :class="post.filter"
        :style="{backgroundImage: 'url('+ post.postImage +')' }"
      ></div>
      <div class="content">
        <div class="heart" @click="clicklike">
          <i class="far fa-heart" :class="{'fas': like}"></i>
        </div>
        <p class="likes" style="marginBottom: 0px">{{ post.likes }} likes</p>
        <p class="caption">
          <span>{{ post.username }}：{{ post.caption }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: Object
  },
  data() {
    return {
      like: false
    };
  },
  methods: {
    dblclick(evt) {
      const db = this.$refs.img;
      db.classList.add("animated", "bounce");
      db.addEventListener("animationend", function() {
        db.classList.remove("animated", "bounce");
      }),
        this.clicklike();
    },
    clicklike() {
      if (this.like) {
        this.like = false;
        this.post.likes--
      }else{
        this.like = true;
        this.post.likes++
      }
    }
  }
};
</script>
<style lang="scss">
.vuegram-post {
  margin-top: 30px;
}
.vuegram-post:first-child {
  margin-top: 0px;
}
.img-container {
  height: 220px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
@media screen {
  .img-container {
    margin-left: -15px;
  }
}
.image {
  border-radius: 50%;
  overflow: hidden;
}
.level-left {
  display: flex;
  margin: 8px 10px;
  .username {
    padding-left: 5px;
  }
}
.content {
  margin: 5px 10px;
}
.heart {
  width: 25px;
  height: 25px;
}
</style>
