// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

	vite: {
		define: {
			__APP_VERSION__: JSON.stringify(process.env.npm_package_version)
		}
	},

	site: 'https://njupt-navi.github.io',
	integrations: [
		starlight({
			title: 'My Docs',
			logo: {
				src: './src/assets/logo.jpg',
				replacesTitle: true,
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/NJUPT-NAVI/NJUPT-Survival-Guide' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
	        {
          label: '新生篇',
          items: [
			{ label: '欢迎小柚子', slug: 'freshman/welcome' },
            // 将 campus_introduction 这个目录作为一个组，并改中文标题
            { label: '新生报到', slug: 'freshman/checkin' },

            // 其他页面或分组，按顺序排放
            { label: '联络交通', slug: 'freshman/contact' },
            // 也可以继续添加更多子分组
            // { label: '报到流程', autogenerate: { directory: 'freshman/registration' } },
			{ label: '校区导航', autogenerate: { directory: 'freshman/campus_introduction' } },

			{ label: '多而杂的默认密码', slug: 'freshman/njupt_default_psw' },
          ],
        },
				{
					label: '如何贡献',
					autogenerate: { directory: 'contribution' },
				},
			],
		}),
	],
});
