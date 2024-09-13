<template>
    <header>
        <div class="header__logo_container">
            <img src="../assets/Logo_imi_horizontal.png" class="header__logo_img">
        </div>
        <nav class="header__link_container">
            <a class="header__link" @click="goToHome">
                Форма
            </a>
            <a class="header__link" @click="goToPreview">
                Превью
            </a>
        </nav>
    </header>
</template>
<script>
export default {
  name: 'TheHeader',
  methods: {
    goToHome() {
        this.$router.push('/home')
    },
    goToPreview() {
        this.$router.push('/preview')
    }
  }
}
</script>

<style scoped>
header {
    width: 1366px;
    height: 76px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    border-bottom: 1px solid rgba(240, 240, 240, 1);
}

 .header__logo_container {
    width: 175px;
    height: 32px;
    top: 22px;
    left: 51px;
    padding: 2px 41px 1px 41px;
    gap: 0px;
    opacity: 0px;
 }
 .header__logo_img {
    width: 93px;
    height: 29px;
    object-fit: cover;
 }
.header__link_container {
    width: Hug (134px)px;
    height: Hug (70px)px;
    top: 7px;
    left: 658px;
    gap: 24px;
    opacity: 0px;

}
.header__link {
    width: 51px;
    height: 24px;
    gap: 0px;
    opacity: 0px;
    font-family: "Montserrat", "Helvetica";
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: rgba(17, 17, 17, 0.48);
    cursor: pointer;
}
</style>