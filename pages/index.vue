<script setup>
import { useI18n } from 'vue-i18n'

useHead({
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

/* Testimonials */
const { data: testimonials } = await useFetch('/api/testimonials')

const testimonialItem = ref({})
const activeModal = ref(false)
const activeOverlay = ref(false)

function showTestimonial(id) {
  testimonialItem.value = testimonials.value.find(item => item.id === id)
  activeModal.value = true
  activeOverlay.value = true
}

function closeTestimonaial() {
  testimonialItem.value = {}
  activeModal.value = false
  activeOverlay.value = false
}
/* Testimonials */

/* Services */
const { data: services } = await useFetch('/api/services')
</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.about') }}
      </h2>
    </header>

    <section v-if="locale === 'en'" class=" about-text">
      <p>
        I am a Web Developer from Ciamis, Jawa Barat. I have always been fascinated with technology and
        how it works. As a result, I decided to pursue a career in web development. I started my journey as a web
        developer a few years ago and have created many useful web applications for clients.
      </p>
      <p>
        As a web developer, I love taking on new challenges. I believe that every challenge is an opportunity to
        learn and grow. When I take on a new project, I always take the time to carefully understand my client's
        needs and make sure that I can provide the best solution for them. Working with clients is a joy for me, and
        I always strive to deliver the best results that meet their needs.
      </p>
    </section>
    <section v-else class=" about-text">
      <p>
        Saya seorang Pengembang Web dari Ciamis, Jawa Barat. Saya selalu terpesona dengan teknologi dan
        bagaimana itu bekerja. Akibatnya, saya memutuskan untuk mengejar karir dalam pengembangan web. Saya memulai
        perjalanan saya sebagai web
        pengembang beberapa tahun yang lalu dan telah membuat banyak aplikasi web yang berguna untuk klien.
      </p>
      <p>
        Sebagai pengembang web, saya suka mengambil tantangan baru. Saya percaya bahwa setiap tantangan adalah kesempatan
        untuk
        belajar dan tumbuh. Ketika saya mengerjakan proyek baru, saya selalu meluangkan waktu untuk memahami klien saya
        dengan cermat
        kebutuhan dan memastikan bahwa saya dapat memberikan solusi terbaik untuk mereka. Bekerja dengan klien adalah
        kesenangan bagi saya, dan
        Saya selalu berusaha untuk memberikan hasil terbaik yang memenuhi kebutuhan mereka.
      </p>
    </section>

    <!-- service -->

    <section class="service">
      <h3 class="h3 service-title">
        {{ locale === 'en' ? `What i'm doing?` : 'Apa yang saya lakukan?' }}
      </h3>

      <ul class="service-list">
        <ServiceItem v-for=" service in services " :key="service.id" :service="service" />
      </ul>
    </section>

    <!-- testimonials -->

    <!-- <section class="testimonials">
      <h3 class="h3 testimonials-title">
        Testimonials
      </h3>

      <ul class="testimonials-list has-scrollbar">
        <li v-for="testimonial in testimonials" :key="testimonial.id" class="testimonials-item" @click="showTestimonial(testimonial.id)">
          <div class="content-card">
            <figure class="testimonials-avatar-box">
              <img :src="testimonial.image" alt="Daniel lewis" width="60">
            </figure>

            <h4 class="h4 testimonials-item-title">
              {{ testimonial.title }}
            </h4>

            <div class="testimonials-text">
              <p>{{ locale === 'en' ? testimonial.content?.en : testimonial.content?.id }}</p>
            </div>
          </div>
        </li>
      </ul>
    </section> -->

    <!-- testimonials modal -->

    <!-- <div class="modal-container" :class="{ active: activeModal }">
      <div v-show="activeModal" class="overlay" :class="{ active: activeOverlay }" />

      <section class="testimonials-modal">
        <button class="modal-close-btn" @click="closeTestimonaial">
          <ion-icon name="close-outline" />
        </button>

        <div class="flex gap-5 mb-5 justify-start items-center">
          <div class="modal-avatar-box">
            <img :src="testimonialItem.image" alt="Daniel lewis" width="80">
          </div>

          <div class="modal-content">
            <h4 class="h3 modal-title">
              {{ testimonialItem.title }}
            </h4>
            <time datetime="2021-06-14">14 June, 2021</time>
          </div>
        </div>

        <div class="flex gap-5 items-start">
          <img class="my-auto hidden md:block" src="/images/icon-quote.svg" alt="quote icon">
          <p class="text-justify text-gray-400 text-sm md:text-md" v-html="locale === 'en' ? testimonialItem.content?.en : testimonialItem.content?.id" />
        </div>
        <div class="mt-2 flex justify-end text-sm text-gray-600 italic">
          Company Co.
        </div>
      </section>
    </div> -->

    <!-- clients -->

    <!-- <section class="clients">
      <h3 class="h3 clients-title">
        Clients
      </h3>

      <ul class="clients-list has-scrollbar">
        <li class="clients-item">
          <a href="#">
            <img src="images/logo-1-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-2-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-3-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-4-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-5-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-6-color.png" alt="client logo">
          </a>
        </li>
      </ul>
    </section> -->
  </article>
</template>
