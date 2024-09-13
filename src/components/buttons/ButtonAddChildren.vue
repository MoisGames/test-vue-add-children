<template>
    <v-btn>
        <div class="img-container">
            <img src="../../assets/Union.png">
        </div>
        <span>Добавить ребенка</span>
    </v-btn>
</template>
<script>
export default {
    name: "ButtonAddChildren",
}

</script>
<style scoped>
@font-face {
  font-family: "Montserrat-light"; 
  src: url("../../assets/fonts/Montserrat-Light.ttf") format("truetype"); 
  font-style: normal; 
  font-weight: normal; 
} 
v-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: Hug (204px)px;
    height: Hug (44px)px;
    top: 305px;
    left: 787px;
    padding: 10px 20px 10px 20px;
    gap: 0px;
    border-radius: 100px;
    opacity: 0px;
    border: 2px solid rgba(1, 167, 253, 1);
    color: rgba(1, 167, 253, 1);
    background-color: white;
    cursor: pointer;
    font-family: "Montserrat-light";
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;

}
.img-container {
    width: 24px;
    height: 24px;
    padding: 3.51px;
    gap: 0px;
    opacity: 0px;
}

</style>