<template>
    <div class="preview-block__wrapper">
        <div class="preview-block__personal_wrapper">
        <label class="preview-block__label_main">Персональные данные</label>
        <label class="preview-block__label_information" v-if="personalObject.personalAge && personalObject.personalName !== undefined ">{{`${personalObject.personalName}, ${personalObject.personalAge} лет`}}</label>
    </div>
    <div class="preview-block__children_items" v-for="item in childrenObject">
        <div class="preview-block__children_wrapper" v-if="childrenObject[item.id - 1].name && childrenObject[item.id - 1].age">
        <label class="preview-block__label_main">Дети</label>
        <div class="preview-block__children_list"> {{ childrenObject[item.id -1].name }}, {{ childrenObject[item.id -1].age }}  лет</div>
    </div>
    </div>

    </div>
    
</template>
<script>
import store from '@/main';
import FormChildrenData from '../forms/FormChildrenData.vue';



export default {
    
    name: "PreviewBlock",
    data() {
        return {
            personalObject: store.state.personalArray ,
            childrenObject: store.state.childrenArray
        }
    },
    props: {
        
    },
    components: {
        FormChildrenData,
    },
    methods: {
        test() {
            
        }
    },
    
    computed: {
        personal: function() {
            this.store.getters.getDataPersonal
        }
    },
    
    
    
}
</script>
<style>
.preview-block__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}
.preview-block__personal_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-top: 30px;
    width: Hug (197px)px;
    height: Hug (68px)px;
    gap: 20px;
    opacity: 0px;

}
.preview-block__label_main {
    font-family: "Montserrat-light";
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: rgba(17, 17, 17, 1);

}
.preview-block__label_information {
    font-family: "Montserrat";
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;

}
.preview-block__children_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-top: 30px;
    width: Hug (197px)px;
    gap: 20px;
    opacity: 0px;
}
.preview-block__children_list {
    width: Hug (143px)px;
    height: Hug (44px)px;
    padding: 10px 20px 10px 20px;
    gap: 10px;
    border-radius: 5px;
    opacity: 0px;
    background-color: rgba(241, 241, 241, 1);
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
}
.preview-block__children_items {
    display: flex;
    flex-direction: column;
}
</style>