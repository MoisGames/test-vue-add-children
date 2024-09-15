<template>
    <v-form>
        <span>Персональные данные</span>
        <div class="input-container__personal">
            <span class="input-span">Имя</span>
            <input 
                type="text" 
                class="form-personal-data__input" 
                placeholder="Имя" 
                v-model="listDataPersonal.personalName">
        </div>
        <div class="input-container__personal">
            <span class="input-span">Возраст</span>
            <input 
                type="number" 
                class="form-personal-data__input" 
                placeholder="Возраст"
                v-model="listDataPersonal.personalAge"
                >
        </div>
    <div class="button-add__wrapper">
        <ButtonAddChildren @click="pushItem" v-if="onShowButton"/>
    </div>
    
        <div class="block-children" v-if="shapeSwitch">
            <span class="span-block">Дети (макс.5)</span>
        <div class="array-input" v-for="item in itemsChildren" 
        :key="itemsChildren.id" 
        :is="componentName">
            <div class="two-input">
            <div class="input-container">
                <span class="input-span">Имя</span>
                <input 
                type="text" 
                class="form-children-data__input" 
                placeholder="Имя"
                v-model="listDataChildren[item.id - 1].name"
                >
            </div>
            <div class="input-container">
                <span class="input-span">Возраст</span>
                <input 
                type="number" 
                class="form-children-data__input" 
                placeholder="Возраст"
                v-model="listDataChildren[item.id - 1].age"
                >
            </div>
            <button class="button-delete">
                    Удалить
            </button>
            </div>
        </div>
        </div>
        <div class="button-save__wrapper">
            <ButtonSave @click="saveData" />
        </div>
    </v-form>
</template>
<script>
import ButtonAddChildren from '@/components/buttons/ButtonAddChildren.vue';
import ButtonSave from '../buttons/ButtonSave.vue';


export default {
    name: "FormChildrenData",
    components: {
            ButtonAddChildren,
            ButtonSave,
        },
    data() {
        return {
            itemsChildren: [], // Пустой массив в который мы добавляем элементы
            componentName: 'child-component',
            shapeSwitch: false,
            onShowButton: true,
            listDataPersonal: {
            personalName: '',
            personalAge: '',
            },
            listDataChildren: [
                {id: 1, name: '', age: null,}, //0 индекс массива
                {id: 2, name: '', age: null},  //1
                {id: 3, name: '', age: null},  //2
                {id: 4, name: '', age: null},  //3
                {id: 5, name: '', age: null}, //4
            ],
            count: 1,
        }
    },
    methods: {
        pushItem() {
            this.shapeSwitch = true;
            if (this.itemsChildren.length < 4) {
                this.itemsChildren.push({id: this.count});
                this.count++
            } else if (this.itemsChildren.length = 4) {
                this.itemsChildren.push({id: this.count});
                this.onShowButton = false;
            }
        },
        saveData() {
            this.$store.commit('increment')
            this.$store.state.personalArray = this.listDataPersonal;
            this.$store.state.childrenArray = this.listDataChildren;
        },
    },
    }
</script>
<style scoped>
v-form {
    display: flex;
    flex-direction: column;
    width: Hug (616px)px;
    height: Hug (250px)px;
    top: 106px;
    left: 375px;
    gap: 20px;
    opacity: 0px;
    margin-top: 30px;
}
span {
    font-family: "Montserrat";
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    

}
.form-personal-data__input {
    padding-left: 16px;
    border: none;
    padding-left: 8px;
   
}
.input-container__personal {
    display: flex;
    flex-direction: column;
    width: 700px;
    height: 80px;
    gap: 0px;
    opacity: 0px;
    border-radius: 4px 0px 0px 0px;
    border: 1px solid rgba(241, 241, 241, 1);
    opacity: 0px;
    margin: 20px;
}
.two-input {
    display: flex;
    flex-direction: row;
    width: 700px;
}
.input-container {
    display: flex;
    flex-direction: column;
    width: 260px;
    height: 80px;
    gap: 0px;
    opacity: 0px;
    gap: 0px;
    opacity: 0px;
    border-radius: 4px 0px 0px 0px;
    border: 1px solid rgba(241, 241, 241, 1);
    opacity: 0px;
    margin-right: 16px;
}
.input-span {
    width: 29px;
    height: 16px;
    top: 8px;
    left: 16px;
    gap: 0px;
    opacity: 0px;
    font-family: "Montserrat";
    font-size: 13px;
    font-weight: 400;
    line-height: 15.85px;
    text-align: left;
    border: none;
    color: rgba(17, 17, 17, 0.48);
    padding: 16px 8px;
}
.button-add__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
}
.form-children-data__input {
    border: none;
    padding-left: 8px;
    
}
.block-children {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 20px;
}
.span-block {
    margin-bottom: 30px;
}
.button-delete {
    font-family: "Montserrat";
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: rgba(1, 167, 253, 1);
    background-color: white;
    border: none;
    cursor: pointer;
}
.button-save__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}
button {
    cursor: pointer;
}
</style>
