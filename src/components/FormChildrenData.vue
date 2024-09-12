<template>
    <v-form>
        <span>Дети (макс.5)</span>
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
    </v-form>
</template>
<script>
export default {
    name: "FormChildrenData",
    components: {

    }
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
}
span {
    font-family: "Montserrat";
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    

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
.form-children-data__input {
    border: none;
    padding-left: 8px;
    
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
</style>
