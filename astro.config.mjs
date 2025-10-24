// @ts-check
import starlight from "@astrojs/starlight";
import mermaid from 'astro-mermaid';
import { defineConfig } from "astro/config";
import starlightImageZoom from 'starlight-image-zoom';
import starlightScrollToTop from 'starlight-scroll-to-top';
import starlightDocSearch from '@astrojs/starlight-docsearch';
//import partytown from '@astrojs/partytown';



// https://astro.build/config
export default defineConfig({
  vite: {
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
  },

  site: "https://www.njuptnavi.top",
  integrations: [
    starlight({
      title: "NJUPT-NAVI",
      lastUpdated: true,
      plugins: [
        starlightScrollToTop(),
        starlightImageZoom(),
        starlightDocSearch({
          clientOptionsModule: './src/config/docsearch.ts',
        }),
      ],
      customCss: [
        // 你的自定义 CSS 文件的相对路径
        '@assets/css/color.css',
      ],
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
        {
          icon: "comment",
          label: "Group",
          href: "https://qm.qq.com/q/FmUTUm6osG",
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
              collapsed: true,
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
              collapsed: true,
              autogenerate: { directory: "life/network" },
            },
            {
              label: "校园活动",
              collapsed: true,
              items: [
                {
                  label: "晨跑", items: [
                    { label: "仙林校区", slug: "life/even/morning_jog/xianlin" },
                  ]
                },
              ],
            },
            {
              label: "快递相关",
              collapsed: true,
              autogenerate: { directory: "life/express" }
            },
            {
              label: "充值相关",
              collapsed: true,
              autogenerate: { directory: "life/charge" }
            },
            {
              label: "校车时间地点",
              collapsed: true,
              autogenerate: { directory: "life/transportation/" },
            },
            {
              label: "学校设施",
              collapsed: true,
              //autogenerate: { directory: "life/aroundschool" },
              items: [
                { label: "学生事务中心", slug: "life/aroundschool/service_center" },
                // 将 campus_introduction 这个目录作为一个组，并改中文标题
                { label: "仙林校区周边设施", slug: "life/aroundschool/xianlin" },


                {
                  label: "学校服务",
                  collapsed: true,
                  autogenerate: { directory: "life/aroundschool/service" },
                },


              ],
            },
          ],
        },
        {
          label: "学习篇",
          items: [
            {
              label: "电脑相关",
              collapsed: true,
              autogenerate: { directory: "learn/computer/" },
            },
            {
              label: "编程语言",
              collapsed: true,
              items: [
                {
                  label: "AI",

                  autogenerate: { directory: "learn/AI" },
                },
                {
                  label: "开发环境",

                  autogenerate: { directory: "learn/program/env/" },
                },
                {
                  label: "C 语言",
                  collapsed: true,
                  autogenerate: { directory: "learn/program/c/" },
                },

              ],
            },
            {
              label: "课程相关",
              collapsed: true,
              items:[

                { label: "课内课程", autogenerate:{ directory: "learn/courses/inside_courses"}},
                { label: "课外课程", autogenerate:{ directory: "learn/courses/extracurricular_courses"}}





              ]
            },
            {
              label: "考试相关",
              collapsed: true,
              autogenerate: { directory: "learn/exams" }
            },
            {
              label: "图书馆篇",
              collapsed: true,
              autogenerate: { directory: "learn/library" },
            },
            {
              label: "体育篇",
              collapsed: true,
              autogenerate: { directory: "learn/fitness/" },
            },
            {
              label: "实用工具",
              collapsed: true,
              items: [
                {
                  label: "课表",
                  collapsed: true,
                  items: [
                    {
                      label: "小爱课表",

                      slug: "learn/useful_tools/curriculum/xiaoai",
                    },
                    {
                      label: "kwgt 固定课表",

                      slug: "learn/useful_tools/curriculum/kwgt",
                    },


                  ],
                },

                { label: "PotPlay 播放器", slug: "learn/useful_tools/potplayer" },
                { label: "Windows 和 Office 激活", slug: "learn/useful_tools/win_acti" },
                { label: "浏览器使用", slug: "learn/useful_tools/stfw" },


              ]
            },
            {
              label: "科研篇",
              collapsed: true,
              autogenerate: { directory: "learn/scientific-research" },
            },
            {
              label: "专业相关",
              collapsed: true,
              autogenerate: { directory: "learn/majors" },
            },
            {
              label: "黄页",
              collapsed: true,
              autogenerate: { directory: "learn/yellow_pages" },
            }
          ],
        },

        {
          label: "娱乐篇",
          collapsed: true,
          items:[
            {
              label: "黄页",
              collapsed: true,
              autogenerate: { directory: "entertainment/yellow_pages" },
            },
          ]
        },
     

        /* {

          label: '如何贡献',
          autogenerate: { directory: 'contribution' },
        }, */
        {
          label: "如何贡献🥳",
          items: [
            { label: "如何为本仓库贡献", slug: "contribution/contribution" },

          ],
        },
        {
          label: "项目贡献约定", slug: "contribution/conventions",
        },
        {
          label: "编写内容更改申请", slug: "contribution/apply",
        },
        {
          label: "快速上手", slug: "contribution/quickstart",
        },
        {
          label: "License",
          autogenerate: { directory: "license/" },
        },
      ],
      components: {
        Pagination: "@components/Pagination.astro",
        Head: "@components/Head.astro", // 全局替换 Head
        EditLink: './src/components/Editor.astro',
        LastUpdated: './src/components/LastUpdated.astro', // 替换 LastUpdated，改中文格式的日期表示
      },
    }),
    mermaid({
      theme: 'forest',
      autoTheme: true
    }),
    /*     partytown({
          config: {
            debug: true
          }
        }), // 启用 Partytown 集成 */
  ],
});
