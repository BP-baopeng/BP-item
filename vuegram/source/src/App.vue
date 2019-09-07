<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <a class="cancel-cta" v-if="step === 2 || step === 3" @click="goToHome">Cancel</a>
        <p>VueGram</p>
        <a class="next-cta" v-if="step === 2" @click="step = 3">Next</a>
        <a class="next-cta" v-if="step === 3" @click="share">Share</a>
      </div>
      <PhoneBody
        :posts="posts"
        :step="step"
        :image="image"
        :filters="filters"
        :filter="filter"
        v-model="caption"
      ></PhoneBody>
      <div class="phone-footer">
        <div class="home-cta" @click="goToHome">
          <i class="fas fa-home fa-lg"></i>
        </div>
        <input type="file" id="file" name="file" @change="upLoadImage" :disabled="step !== 1" />
        <label for="file">
          <div class="upload-cta">
            <i class="far fa-plus-square fa-lg"></i>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
// import draggable from 'vuedraggable';
import posts from "./data/posts";
import filters from "./data/filters";
import PhoneBody from "./components/PhoneBody.vue";
import EventBus from "./components/event-bus";
export default {
  created() {
    EventBus.$on("selectedFilter", evt => (this.filter = evt));
  },
  data() {
    return {
      posts,
      step: 1,
      image: "",
      filters,
      filter: "",
      caption: ""
    };
  },
  components: {
    PhoneBody: PhoneBody
  },
  methods: {
    upLoadImage(evt) {
      const files = evt.target.files;
      if (!files.length) return;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = evt => {
        this.image = evt.target.result;
      };
      this.step = 2;
    },
    goToHome() {
      this.step = 1;
      this.image = "";
      this.filter = "";
      this.caption = "";
    },
    share() {
      const post = {
        username: "鲍鹏",
        userImage:
          "http://image01.oneplus.cn/user/201902/16/1198/c02e06e846498a03179219a7525e15c6.jpg",
        postImage: this.image,
        likes: 0,
        hasBeenLiked: false,
        caption: this.caption,
        filter: this.filter
      };
      this.posts.unshift(post);
      this.goToHome();
    }
  }
};
</script>

<style lang="scss" >
body {
  background-color: #f5f5f5;
  user-select: none;
}
input[name="file"] {
  visibility: hidden;
}

#app {
  display: flex;
  justify-content: center;
  padding: 40px 0px;
  .app-phone {
    background-color: white;
    height: 620px;
    width: 375px;
    overflow: hidden;
  }
  .phone-header {
    > p {
      max-width: 120px;
      display: block;
      margin: 0px auto;
      text-align: center;
      line-height: 40px;
    }
    .cancel-cta,
    .next-cta {
      position: absolute;
      top: 10px;
      color: #209cee;
      font-weight: bold;
      cursor: pointer;
    }
    .cancel-cta {
      left: 10px;
    }
    .next-cta {
      right: 10px;
    }
  }
  .phone-header {
    align-items: center;
    position: sticky;
    top: 0;
    width: 100%;
    height: 40px;
    background: #e4e2e2;
    border-bottom: 1px solid #ccc;
  }
  .phone-footer {
    position: sticky;
    bottom: 0px;
    width: 100%;
    height: 40px;
    background: #e4e2e2;
    z-index: 99;
    border-top: 1px solid #ccc;
    .home-cta {
      position: absolute;
      left: 10px;
      top: 6px;
      cursor: pointer;
    }
    .upload-cta {
      position: absolute;
      right: 10px;
      top: 6px;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 500px) {
  #app {
    height: 100vh;
    padding: 0;
    .app-phone {
      width: 100%;
      height: 100%;
    }
    .phone-header,
    .phone-footer {
      height: 5vh;
    }
  }
}
</style>
