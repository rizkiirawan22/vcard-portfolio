import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Web Development',
        id: 'Pengembangan Web',
      },
    },
    {
      id: 2,
      title: {
        en: 'Application',
        id: 'Aplikasi',
      },
    },
    {
      id: 3,
      title: {
        en: 'Web Design',
        id: 'Desain Web',
      },
    },
  ]
})
