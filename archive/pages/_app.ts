import type { App } from 'vue'
import { getNavLinks } from '@/utils/nav'

export default function setup({ app }: { app: App }) {
  app.provide('navLinks', getNavLinks())
}
