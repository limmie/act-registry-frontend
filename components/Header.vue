<template>
  <header>
    <div class="container">
      <div id="header">
        <div id="header-logo">
          <img src="" alt="" />
        </div>

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

        <div id="header-panel">
          <div class="default-button">
            <span>{{ $t("sign.in") }}</span>
          </div>
          <div class="alt-button">
            <span>{{ $t("sign.out") }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
