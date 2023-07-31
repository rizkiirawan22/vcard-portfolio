<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })

useHead({
  title: locale === 'en' ? 'Resume' : 'Pengalaman',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          {{ locale === 'en' ? 'Education' : 'Pendidikan' }}
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            STMIK Tasikmalaya
          </h4>

          <span>2018 — 2022</span>

          <p class="timeline-text">
            {{ locale === 'en' ? 'Information Technology - Bachelor' : 'Teknologi Informasi - Sarjana' }}
          </p>
        </li>
      </ol>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          {{ locale === 'en' ? 'Experience' : 'Pengalaman' }}
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Velo Technology - Programmer
          </h4>

          <span>2022 — {{ locale === 'en' ? 'Present' : 'Sekarang' }}</span>

          <p class="timeline-text">
            -
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Freelancer - Web Developer
          </h4>

          <span>2021 — {{ locale === 'en' ? 'Present' : 'Sekarang' }}</span>

          <p class="timeline-text">
            {{ locale === 'en' ? 'Build powerfull website based on client needs' : 'Bangun situs web yang kuat berdasarkan kebutuhan klien' }}
          </p>
        </li>
      </ol>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">
        {{ locale === 'en' ? 'My skills' : 'Skill saya' }}
      </h3>

      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              HTML
            </h5>
            <data value="100">100%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 100%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              CSS
            </h5>
            <data value="80">80%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Javascript
            </h5>
            <data value="80">80%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              SQL Databases (MySQL, PostgreSQL)
            </h5>
            <data value="80">80%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              PHP (Laravel)
            </h5>
            <data value="85">85%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 85%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Vue JS
            </h5>
            <data value="80">80%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%;" />
          </div>
        </li>
      </ul>
    </section>
  </article>
</template>
