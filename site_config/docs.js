export default {
    'en-us': {
        sidemenu: [
            {
                children: [
                    {
                        title: 'Quick Start',
                        link: '/en-us/docs/quick-start.html',
                    },
                    {
                        title: 'Spring IoC',
                        opened: true,
                        children: [
                            {
                                title: 'Overview',
                                link: '/en-us/docs/spring-ioc/overview.html',
                            },
                        ],
                    },
                ],
            },
        ],
        barText: 'Documentation',
    },
    'zh-cn': {
        sidemenu: [
            {
                children: [
                    {
                        title: '快速开始',
                        link: '/zh-cn/docs/quick-start.html',
                    },
                    {
                        title: 'Spring IoC',
                        opened: true,
                        children: [
                            {
                                title: '简介',
                                link: '/zh-cn/docs/spring-ioc/overview.html',
                            },
                        ],
                    },
                ],
            },
        ],
        barText: '文档',
    },
};
