import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VITALIS - Transform Your Life',
    short_name: 'VITALIS',
    description: 'O melhor app de saúde, fitness e bem-estar do mundo. Transforme sua vida com VITALIS.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#8B6F47',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any maskable'
      }
    ],
    categories: ['health', 'fitness', 'lifestyle'],
    lang: 'pt-BR',
    dir: 'ltr',
    scope: '/',
    prefer_related_applications: false
  }
}
