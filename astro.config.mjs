// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightScrollToTop from 'starlight-scroll-to-top';
import starlightImageZoom from 'starlight-image-zoom';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
  vite: {
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
  },

  site: 'https://njuptnavi.netlify.app',
  integrations: [
    starlight({
      title: "My Docs",
      plugins: [starlightScrollToTop(), starlightImageZoom()],
      logo: {
        src: "./src/assets/logo_2.png",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/NJUPT-NAVI/NJUPT-Survival-Guide",
        },
      ],

      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon.ico",
            type: "image/x-icon",
          },
        },
      ],

      sidebar: [
        {
          label: "目录",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "什么是 NAVI", slug: "guides/introduction" },
          ],
        },

        {
          label: "新生篇",
          items: [
            { label: "欢迎小柚子🎉", slug: "freshman/welcome" },
            // 将 campus_introduction 这个目录作为一个组，并改中文标题
            { label: "新生报到", slug: "freshman/checkin" },

            // 其他页面或分组，按顺序排放
            { label: "联络交通", slug: "freshman/contact" },
            // 也可以继续添加更多子分组
            // { label: '报到流程', autogenerate: { directory: 'freshman/registration' } },
            {
              label: "校区导航",
              autogenerate: { directory: "freshman/campus_introduction" },
            },

            { label: "多而杂的默认密码", slug: "freshman/njupt_default_psw" },
          ],
        },
        {
          label: "生活篇",
          items: [
            {
              label: "校园网相关",
              autogenerate: { directory: "life/network" },
            },
            { label: "快递相关", autogenerate: { directory: "life/express" } },
            {
              label: "校车时间地点",
              autogenerate: { directory: "life/transportation/" },
            },
            { label: "学校周边设施", autogenerate: { directory: "life/aroundschool" } },
          ],
        },
        {
          label: "学习篇",
          items: [
            {
              label: "编程语言",
              items: [
                {
                  label: "C 语言",
                  autogenerate: { directory: "learn/program/c/" },
                },
              ],
            },
            { label: "考试相关", autogenerate: { directory: "learn/exams" } },
            { label: "实用工具", autogenerate: { directory: "learn/yellow_pages" } },
          ],
        },

        /* {

					label: '如何贡献',
					autogenerate: { directory: 'contribution' },
				}, */
        {
          label: "如何贡献🥳",
          items: [
            { label: "如何为本仓库贡献", slug: "contribution/contribution" },

            { label: "项目贡献约定", slug: "contribution/conventions" },

            { label: "编写内容更改申请", slug: "contribution/apply" },

            { label: "快速上手", slug: "contribution/quickstart" },
          ],
        },
        {
          label: "License",
          autogenerate: { directory: "license/" },
        },
      ],
      components: {
        Pagination: '@components/Pagination.astro',
      },
    }),
    mermaid({
      theme: 'forest',
      autoTheme: true
    })
  ],
});
