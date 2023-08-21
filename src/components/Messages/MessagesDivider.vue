<template>
  <div class="messages-divider">
    Сегодня
  </div>
</template>

<style lang="scss">
.messages-divider {
  color: #fff;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
  @media all and (max-width: 1280px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
}
</style>