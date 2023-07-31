<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })

useHead({
  title: (locale === 'en' ? 'Blog' : 'Artikel'),
})
</script>

<template>
  <article class="blog active" data-page="blog">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.blog') }}
      </h2>
    </header>

    <section class="blog-posts">
      <ul class="blog-posts-list">
        <h3 class="h3">
          {{ locale === 'en' ? 'No Data Found' : 'Data Tidak Ditemukan' }}
        </h3>
        <!-- <li class="blog-post-item">
          <a href="#">

            <figure class="blog-banner-box">
              <img src="/images/blog-1.jpg" alt="Design conferences in 2022" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Design</p>

                <span class="dot" />

                <time datetime="2022-02-23">Fab 23, 2022</time>
              </div>

              <h3 class="h3 blog-item-title">Design conferences in 2022</h3>

              <p class="blog-text">
                Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
              </p>

            </div>

          </a>
        </li> -->
      </ul>
    </section>
  </article>
</template>
