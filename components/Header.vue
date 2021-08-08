<template>
  <header>
    <div class="container">
      <div id="header">
        <nuxt-link to="/">
          <div id="header-logo">
            <img src="~/assets/images/logos/default-logo.png" alt="" />
          </div>
        </nuxt-link>

        <div id="header-search">
          <input
            type="text"
            id="header-search-input"
            :placeholder="$t('search')"
          />
          <div id="header-search-button">
            <fa-icon :icon="['fas', 'search']" />
          </div>
        </div>

        <div id="header-nav">
          <div class="header-nav-item">
            <nuxt-link to="/blog">{{ $t("blog") }}</nuxt-link>
          </div>
          <div class="header-nav-item">
            <nuxt-link to="/blog">{{ $t("questionsAndAnswers") }}</nuxt-link>
          </div>
          <div class="header-nav-item">
            <nuxt-link to="/parent/login">
              <div class="alt-button">
                <span>{{ $t("sign.in") }}</span>
              </div>
            </nuxt-link>
          </div>

          <div class="header-nav-item">
            <div class="default-button">
              <span>{{ $t("sign.up") }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
