

<template>
    <v-form>
        <span>Персональные данные</span>
        <div class="input-container">
            <span class="input-span">Имя</span>
            <input type="text" class="form-personal-data__input" placeholder="Имя">
        </div>
        <div class="input-container">
            <span class="input-span">Имя</span>
            <input type="text" class="form-personal-data__input" placeholder="Имя">
        </div>
        
    </v-form>
</template>
<script>
export default {
    name: "FormPersonalData",
}
</script>
<style scoped>
v-form {
    display: flex;
    flex-direction: column;
    width: Hug (650px)px;
    height: Hug (200px)px;
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
.input-container {
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
.form-personal-data__input {
    padding-left: 16px;
    border: none;
    padding-left: 8px;
   
}
</style>
