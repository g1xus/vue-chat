<template>
  <div class="contacts contacts-empty">
    <div class="contacts-empty__title">
      Тут пусто
    </div>
    <div class="contacts-empty__description">
      Вы еще никому не писали
    </div>
  </div>
</template>

<style lang="scss">
@import "../../styles/variables";
.contacts-empty {
  padding: 30px;
  height: 80vh;
  @media all and (max-width: 1280px) {
    padding: 20px;
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
}
</style>