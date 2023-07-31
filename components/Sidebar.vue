<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/avatar.png" alt="Rizki Irawan" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Rizki Irawan">
          Rizki Irawan
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span>Web Developer</span>
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Email
            </p>

            <a href="mailto:rizkiirawan22998@gmail.com" class="contact-link">rizkiirawan22998@gmail.com</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Github
            </p>

            <a href="https://github.com/rizkiirawan22" class="contact-link" target="_blank">rizkiirawan22</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Linkedin
            </p>

            <a href="https://tr.linkedin.com/in/rizkiirawan22" class="contact-link" target="_blank">Rizki Irawan</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Location
            </p>

            <address>Ciamis, Jawa Barat, Indonesia</address>
          </div>
        </li>
      </ul>

      <div class="separator" />

      <ul class="social-list">
        <li class="social-item">
          <NuxtLink to="https://www.twitter.com/rizkiirawan22" class="social-link" target="_blank">
            <ion-icon name="logo-twitter" />
          </NuxtLink>
        </li>

        <li class="social-item">
          <NuxtLink to="https://www.instagram.com/rizkiirawan___" class="social-link" target="_blank">
            <ion-icon name="logo-instagram" />
          </NuxtLink>
        </li>
        <LangSwitcher2 />
      </ul>
    </div>
  </aside>
</template>
