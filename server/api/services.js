import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Laravel',
      description: {
        en: 'I build modern and advanced websites and applications with Laravel, the PHP framework.',
        id: 'Saya membangun situs web dan aplikasi modern dan canggih dengan Laravel, framework PHP.',
      },
      icon: 'logo-laravel',
      image: null,
    },
    {
      id: 2,
      title: 'Vue JS',
      description: {
        en: 'I use VueJS, a modern JavaScript framework, while making dynamic and static websites and applications.',
        id: 'Saya menggunakan VueJS, framework JavaScript modern, sambil membuat situs web dan aplikasi yang dinamis dan statis.',
      },
      icon: 'logo-vue',
      image: null,
    },
  ]
})
