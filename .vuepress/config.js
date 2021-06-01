module.exports = {
    title: 'MajorAmari',

    description: 'عندما تعشق الشوكولاته',
    theme: require.resolve('./theme'), // replace it with ==> theme: 'modern-blog' to use this example project as a boilerplate.
    summaryLength: 700,
    themeConfig: {
        translations: {
            read_more: 'اقرأ المزيد!',
            read_this_post: 'اقرأ الان!',
            search_placeholder: 'بحث',
            search_entire_site: 'بحث في كامل الموقع بـ ${query}',
            no_results: 'لا نتائج، جرب كلمات اخرى.',
            latest_posts: '📑 آخر المقالات',
            leave_comment: '❤ Support me',
        },
        // socialShare: false,
        cookies: {
            theme: 'dark-lime',
            buttonText: 'اتفق',
            message: 'الملوخية احسن من الباميا',
        },
        script: [
            { src: 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js' }
        ],

        summary: true,

        nav: [
            {
                text: 'Home',
                link: '/',
                icon: 'el-icon-house',
            },
            {
                text: 'Projects',
                link: '/projects/',
                icon: 'el-icon-folder',
            }
        ],
        // Let's say that we want to add a small message at the beginning or at the
        // end of each post.This is the place!
        // posts: {
        //     prepend: "Hi, I hope you'll <i>enjoy</i> this post!",
        //     append: "Hi, I hope you've <b>enjoyed</b> this post!",
        // },
        disqus: 'disquswebsiteshortname', // if you want to incorporate Disqus for comments replace this value else just get rid of it
        about: {
            fullName: 'مايجر عماري',
            bio: 'احب اتعلم اشياء جديدة :) اعرف ابرمج واصمم وامنتج واحب العب.',
            image: 'https://cdn.discordapp.com/attachments/720764330701881404/849262886248251452/avatar.png',
        },
        footer: {
            contact: [
                {
                    type: 'instagram',
                    link: 'https://instagram.com/major.amari',
                },
                {
                    type: 'discord',
                    link: 'https://onety.net/discord',
                },
                {
                    type: 'ko-fi',
                    link: 'https://ko-fi.com/majoramari',
                },
                {
                    type: 'buymeacoffee',
                    link: 'https://www.buymeacoffee.com/majoramari',
                }
            ],
            copyright: [
                {
                    text: 'Privacy Policy',
                    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                }
            ],
        },
    },
    plugins: [
        'crisp',
        'seo',
        'smooth-scroll',
        'reading-progress',
        '@vuepress/medium-zoom',
        '@vuepress/nprogress',
        '@vuepress/google-analytics',
        '@vuepress/back-to-top',
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true,
            },
        ],
        [
            'sitemap',
            {
                hostname: 'https://majoramari.com',
            },
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'tip',
                defaultTitle: {
                    '/': 'نصيحة',
                },
            },
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'warning',
                defaultTitle: {
                    '/': 'تنبيه',
                },
            },
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'danger',
                defaultTitle: {
                    '/': 'تحذير',
                },
            },
        ]
    ],
}