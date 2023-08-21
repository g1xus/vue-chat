<template>
  <div class="messages messages-empty">
    <img src="../../assets/no-messages.svg" alt="Чат не выбран" class="messages-empty__img">
    <div class="messages-empty__title">Чат не выбран</div>
    <div class="messages-empty__description">Выберите чат, начните общение!</div>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/variables";
.messages-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__img {
    margin-bottom: 60px;
  }
  &__title {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  &__description {
    color: $secondary;
    font-size: 16px;
    font-weight: 600;
  }
  @media all and (max-width: 650px) {
    display: none;
  }
}
</style>