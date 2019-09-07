<template>
    <div class="phone-body">
        <transition leave-active-class="animated rotateOutDownLeft" enter-active-class="animated rotateInUpRight" mode="out-in">
        <div class="feed" v-if="step === 1"  v-dragscroll :key="1">
            <vuegramPost v-for="(post,index) in posts" :key="index" :post="post"></vuegramPost>
        </div>
        <div v-if="step === 2" :key="2">
            <div class="selected-image" :style="{backgroundImage: 'url('+ image +')'}"
            :class="filter"
            ></div>
            <div class="filter-container"  v-dragscroll>
                <filterType v-for="(filter, index) in filters" 
                :key="index" 
                :filter="filter" 
                :image="image"
                ></filterType>
            </div>
        </div>
        <div v-if="step === 3" :key="3">
            <div class="selected-image" :style="{backgroundImage: 'url('+ image +')'}"
                :class="filter"
            ></div>
            <div class="capton-container">
                <textarea placeholder="Write a caption..." @input="inputText" :value="value"></textarea>
            </div>
        </div>
        </transition>
    </div>
</template>
<script>

import vuegramPost from "./vuegramPost.vue";
import filterType from "./filterType"
export default {
    props: {
        posts: Array,
        step: Number,
        image: String,
        filters: Array,
        filter: String,
        value: String
    },
    components: {
        vuegramPost: vuegramPost,
        filterType: filterType
    },
    methods: {
        inputText(evt){
            this.$emit("input", evt.target.value)
        }
    }
}
</script>
<style lang="scss">
    .phone-body{
        height: 540px;
    }
    .feed{
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        margin-right: -22px;
    }
    .selected-image{
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
        height: 340px;
    }
    .filter-container{
        height: 220px;
        padding: 30px 10px;
        white-space: nowrap;
        overflow-x: scroll;
    }
    .capton-container{
        width: 100%;
        height: 210px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    textarea{
        border: 0;
        font-size: 1rem;
        width: 100%;
        padding: 10px;
        border-bottom: 1px solid #eee;
        background-color: #e4e2e2;
    }
    textarea:focus{
        outline: 0;
    }
    @media screen and (max-width: 500px){
        .phone-body{
            height: 90vh
            }
    }
</style>
