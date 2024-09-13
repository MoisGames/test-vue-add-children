<template>
    <div id="app">
    <component 
        v-for="item in items" 
        :key="item.message" 
        :msg="item.message" 
        :is="componentName">
        <div class="two-input">
            <div class="input-container">
                <span class="input-span">Имя</span>
                <input type="text" class="form-children-data__input" placeholder="Имя">
            </div>
            <div class="input-container">
                <span class="input-span">Возраст</span>
                <input type="number" class="form-children-data__input" placeholder="Имя">
            </div>
            <button class="button-delete">
                    Удалить
            </button>
            </div>
    </component>
    <button v-on:click="newComponent">OK</button>
</div>
</template>
<script>
    export default {
    name: "NewItem",
    el: "#app",
    data() {
        return {
            items: [],
            componentName: 'child-component'
        }
    },
    methods: {
        newComponent(){
            this.items.push({message: this.items.length})
        }
    },
}
// export default {
//     name: "NewItem",
// }
</script>
<style scoped>
#app {
    height: 50vh;
    border: 5px solid black;
}
component {
    width: 200px;
    height: 80px;
}
</style>