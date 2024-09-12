<template>
  <div class="footer__wrapper">
    <footer>
      <span>all rights reserved</span>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'TheFooter',
  
}
</script>
<style scoped>
.footer__wrapper {
  display: flex;
  flex-direction: column;
  min-height: 90vh; 
}
  footer {
    width: 1366px;
    height: 76px;
    top: 692px;
    gap: 0px;
    opacity: 0px;
    background-color: rgba(250, 250, 250, 1);
    margin-top: auto;
  }
  span {
    font-family: "Montserrat", "Helvetica";
    font-size: 13px;
    font-weight: 400;
    line-height: 15.85px;
    text-align: left;
    color: rgba(0, 0, 0, 1);
  }
</style>