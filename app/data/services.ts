export interface Service {
  id: number
  slug: string
  iconName: string
  title: string
  description: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 1,
    slug: 'web-development',
    iconName: 'code',
    title: 'Веб-разработка',
    description: 'Создаём современные, быстрые и адаптивные веб-сайты',
    features: [
      'Сделаем так, чтобы сайт открывался за секунду и красиво выглядел на телефоне',
      'Сайт-визитка компании',
      'Интернет-магазины',
      'Адаптивный дизайн'
    ]
  },
  {
    id: 2,
    slug: 'mobile-apps',
    iconName: 'smartphone',
    title: 'Мобильные приложения',
    description: 'Разрабатываем нативные и кроссплатформенные приложения',
    features: [
      'iOS и Android приложения',
      'Кроссплатформенная разработка',
      'Интеграция с API',
      'Публикация в сторах'
    ]
  },
  {
    id: 3,
    slug: 'ui-ux-design',
    iconName: 'palette',
    title: 'UI/UX Дизайн',
    description: 'Проектируем удобные и красивые интерфейсы',
    features: [
      'Исследование пользователей',
      'Прототипирование',
      'Визуальный дизайн',
      'Дизайн-системы'
    ]
  },
  {
    id: 4,
    slug: 'seo-marketing',
    iconName: 'trending-up',
    title: 'SEO и Маркетинг',
    description: 'Продвигаем ваш бизнес в поисковых системах',
    features: [
      'Техническая оптимизация',
      'Контент-стратегия',
      'Контекстная реклама',
      'Аналитика и отчётность'
    ]
  },
  {
    id: 5,
    slug: 'technical-support',
    iconName: 'wrench',
    title: 'Техническая поддержка',
    description: 'Обеспечиваем стабильную работу ваших проектов',
    features: [
      'Мониторинг',
      'Обновления и патчи',
      'Резервное копирование',
      'Консультации'
    ]
  },
  {
    id: 6,
    slug: 'consulting',
    iconName: 'lightbulb',
    title: 'Консалтинг',
    description: 'Помогаем выбрать оптимальные технологические решения',
    features: [
      'Аудит текущих систем',
      'Технологический консалтинг',
      'Оптимизация процессов',
      'Обучение команды'
    ]
  }
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}

export function getServicePath(service: Pick<Service, 'slug'>): string {
  return service.slug === 'web-development' ? '/web' : `/services/${service.slug}`
}
