// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://xeland314.github.io',
	base: '/catsplash',
	integrations: [
		starlight({
			title: 'Catsplash',
			locales: {
				root: {
					label: 'Espanol',
					lang: 'es',
				},
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/xeland314/catsplash' },
			],
			sidebar: [
				{
					label: 'Guias',
					translations: {
						en: 'Guides',
					},
					items: [
						{ label: 'Introduccion', slug: 'guides/introduccion', translations: { en: 'Introduction' } },
						{ label: 'Instalacion', slug: 'guides/instalacion', translations: { en: 'Installation' } },
						{ label: 'Configuracion', slug: 'guides/configuracion', translations: { en: 'Configuration' } },
						{ label: 'Uso', slug: 'guides/uso', translations: { en: 'Usage' } },
						{ label: 'Arquitectura', slug: 'guides/arquitectura', translations: { en: 'Architecture' } },
						{ label: 'Rendimiento', slug: 'guides/rendimiento', translations: { en: 'Performance' } },
						{ label: 'Red Avanzada', slug: 'guides/red', translations: { en: 'Advanced Network' } },
						{ label: 'Seguridad WiFi', slug: 'guides/seguridad-wifi', translations: { en: 'WiFi Security' } },
						{ label: 'Problemas de Red', slug: 'guides/problemas-red', translations: { en: 'Troubleshooting' } },
					],
				},
				{
					label: 'Referencia',
					translations: {
						en: 'Reference',
					},
					items: [
						{ label: 'CLI catsctl', slug: 'reference/catsctl', translations: { en: 'catsctl CLI' } },
						{ label: 'Configuracion TOML', slug: 'reference/configuracion', translations: { en: 'TOML Configuration' } },
					],
				},
			],
		}),
	],
});
