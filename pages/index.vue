<template>
  <main>
    <div class="container">
      <div id="index-wrapper">
        <div id="index-content">
          <div class="index-section">
            <h1>Государственная регистрация заключения брака</h1>

            <h3>Условия получения услуги на сайте</h3>

            <p>
              Услуга позволяет подать заявление на регистрацию брака за 1-12
              месяцев до бракосочетания. Для подачи онлайн-заявления нужно
              авторизоваться, выполнив вход через учетную запись сайта «Nika
              Online».
            </p>

            <p>
              Если есть вопросы, можете перейти на
              <nuxt-link to="/questions">часто задаваемые вопросы</nuxt-link>
            </p>
          </div>

          <div class="index-section">
            <h1>Useful information</h1>

            <div id="index-information-blocks">
              <div
                class="index-information-block"
                v-for="(block, index) in blocks"
                :key="index"
                @click="toggleBlock"
                :data-block-index="index"
              >
                <h3 class="index-information-block-title">{{ block.title }}</h3>

                <div
                  class="index-information-block-content"
                  :class="block.active ? 'is-active' : null"
                  v-html="block.text"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div id="index-sidebar">
          <div class="index-sidebar-section">
            <div class="index-sidebar-content-buttons">
              <div class="secondary-button index-sidebar-content-button">
                <span>Получить услугу онлайн</span>
              </div>

              <div class="secondary-alt-button index-sidebar-content-button">
                <span>Запись на прием</span>
              </div>
            </div>
          </div>
          <div class="index-sidebar-section">
            <h3>Useful links</h3>
            <div id="index-sidebar-nav">
              <div
                class="index-sidebar-nav-item"
                v-for="(item, index) in sidebarNav"
                :key="index"
              >
                <nuxt-link :to="item.link">{{ item.name }}</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      blocks: [
        {
          title: "Полное название услуги",
          text: "Государственная регистрация заключения брака",
          active: false,
        },
        {
          title: "Кто может обратиться за услугой:",
          text: "Гражданин Российской Федерации с 18 лет.",
          active: false,
        },
        {
          title: "Перечень необходимых сведений:",
          text:
            "<ul>" +
            "<li>Документы, удостоверяющие личности лиц, вступающих в брак;</li>" +
            "<li>Сведения о предыдущем браке, если заявитель ранее состоял (состояла) в браке;</li>" +
            "<li>Сведения об оплате государственной пошлины.</li>" +
            "</ul>",
          active: false,
        },
        {
          title: "Стоимость услуги и порядок оплаты:",
          text: "Госпошлина за регистрацию заключения брака - 350 руб. Если оплата госпошлины осуществляется одновременно с подачей заявления в электронном виде, то действует скидка 30% (согласно требованиям ФЗ 30.11.2016 г. № 402-ФЗ «О внесении изменения в статью 333-35 части второй Налогового кодекса Российской Федерации».",
          active: false,
        },
        {
          title: "Сроки предоставления услуги",
          text: "Подача заявления на регистрацию брака осуществляется в режиме онлайн.",
          active: false,
        },
        {
          title: "Результат оказания услуги",
          text: "Запись на регистрацию бракосочетания.",
          active: false,
        },
      ],
    };
  },

  computed: {
    sidebarNav() {
      return [
        { name: "Нормативные акты", link: "/" },
        { name: "Причины отказа", link: "/" },
        { name: "Порядок обжалования", link: "/" },
        { name: "Нормативные акты", link: "/" },
        { name: "Причины отказа", link: "/" },
        { name: "Порядок обжалования", link: "/" },
      ];
    },
  },

  methods: {
    toggleBlock(event) {
      const parent = event.target;
      const blockIndex = parseInt(parent.dataset.blockIndex);

      const child = parent.querySelector(".index-information-block-content");

      child.style.maxHeight
        ? (child.style.maxHeight = null)
        : (child.style.maxHeight = child.scrollHeight + "px");

      this.blocks[blockIndex].active = !this.blocks[blockIndex].active;
    },
  },
};
</script>
