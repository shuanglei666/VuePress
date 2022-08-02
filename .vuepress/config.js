module.exports = {
    title: 'Hello VuePress',
    description: 'Hello, my friend!',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    // base:'/',
    //  需要是github库名
    base: '/vuepress/',
    themeConfig: {
        logo: '/img/timg.jpg',
        nav: [{
                text: 'Home',
                link: '/pages/home.md'
            },
            {
                text: 'Guide',
                link: '/pages/guide.md'
            },
            {
                text: 'Languages',
                items: [{
                        text: 'Chinese',
                        link: '/pages/language/chinese.md',
                        activeMatch: '/pages/language/chinese.md',
                    },
                    {
                        text: 'English',
                        link: '/pages/language/english.md',
                        activeMatch: '/pages/language/english.md',
                    }
                ]
            },
            {
                text: 'External',
                link: 'https://www.baidu.com'
            },
        ],
        sidebar: {
            '/pages/': [{
                title: 'Home',
                sidebarDepth: 1,
                collapsable: true,
                children: [
                    ['/pages/home', 'home'],
                ]
            }],
            '/pages/': [{
                title: 'Guide',
                sidebarDepth: 1,
                collapsable: true,
                children: [
                    ['/pages/guide', 'guide'],
                ]
            }],
            '/pages/language/': [{
                title: '前端技术',
                sidebarDepth: 2,
                collapsable: true,
                children: [
                    ['/pages/language/chinese', 'ES6'],
                    ['/pages/language/english', 'Cesium']
                ]
            }]
        }
    }
}