module.exports = {
    pathPrefix: '',
    siteUrl: 'https://xieleo5.github.io',
    title: 'xieleo5',
    description: 'Personal Website of Yuqi Xie',
    author: 'Yuqi Xie',
    authorAlternative: '谢雨齐',
    introduction: [
        'Hi! I\'m **Yuqi Xie**, but feel free to call me **Leo**. I\'m currently pursuing a Master\'s in Computer Science at [UT Austin](https://www.cs.utexas.edu/), where I work in the [RPL Lab](https://rpl.cs.utexas.edu/) advised by [Prof. Yuke Zhu](https://yukezhu.me/). I hold a Bachelor\'s degree in Electrical and Computer Engineering (ECE) from Shanghai Jiao Tong University ([SJTU](https://cse.engin.umich.edu/)) and a Bachelor\'s degree in Computer Science from the [University of Michigan](https://cse.engin.umich.edu/).',
        'I\'m a **Research Intern** with [NVIDIA\'s GEAR Lab](https://research.nvidia.com/labs/gear/), where I\'m fortunate to work with [Dr. Jim Fan](https://jimfan.me/). Our team is focused on developing **generalist models for humanoid robots**. If you\'re interested in our team, don\'t hesitate to reach out!',
        '**Fun Facts**: I\'m a big fan of **Pokémon** and love diving into **anime** during my downtime!'

    ],
    avatar: 'avatar.jpg',
    professions: [
        // 'CSE Student',
    ],
    tocMaxDepth: 2,
    excerptMaxLength: 500,
    birthday: 'May. 5, 2001',
    location: 'Austin, TX',
    email: 'xieleo@utexas.edu',
    language: '中文, English',
    postsForArchivePage: 3,
    defaultLanguage: 'en',
    disqusScript:
        process.env.DISQUS_SCRIPT || 'https://boyanzh.disqus.com/embed.js',
    pages: {
        home: '/',
        posts: 'posts',
        // contact: 'contact',
        // resume: 'resume',
        tags: 'tags',
        project: 'project',
        // wakatime: 'wakatime',
    },
    social: [
        {
            url: 'https://scholar.google.com/citations?user=bGB6wacAAAAJ&hl=en',
            icon: ['fab', 'google'],
        },
        {
            url: 'https://github.com/xieleo5',
            icon: ['fab', 'github'],
        },
        {
            url: 'https://www.linkedin.com/in/yuqi-xie-ba87a8223/',
            icon: ['fab', 'linkedin'],
        },
        {
            url: 'https://x.com/yuqi_xie5',
            icon: ['fab', 'x-twitter'],
        }
    ],
    // facebook: 'https://www.facebook.com/rolwin.monteiro',
    // instagram: 'https://www.instagram.com/reevan100/',
    // rss: '/rss.xml',
    contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || '',
    googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'UA-XXXXXXXXX-X',
    education: [
        {
            date: 'Aug 2023 - Present',
            icon: 'university',
            title: 'M.S. in Computer Science',
            location: 'University of Texas at Austin',
        }, {
            date: 'Sep 2021 - May 2023',
            icon: 'university',
            title: 'B.S.E. in Computer Science',
            location: 'University of Michigan',
        }, {
            date: 'Sep 2019 - Jun 2021',
            icon: 'university',
            title: 'B.S.E. in Electrical and Computer Engineering',
            location: 'Joint Institute at Shanghai Jiaotong University',
        }],
    interests: [
        {
            title: 'Humanoid Robots',
        }, {
            title: 'Robotics',
        }, {
            title: 'General-purpose Agents',
        }, {
            title: 'Multimodal Learning',
        }, {
            // icon: 'linux',
            title: 'Reinforcement Learning',
        }],
    experience: [
        {
            title: 'Work',
            position: 'left',
            data: [
                {
                    date: 'Jan 2023 - Present',
                    title: 'Research Intern',
                    location: 'Hybrid',
                    description: 'Work in NVIDIA [GEAR](https://research.nvidia.com/labs/gear/) team.',
                },
                {
                    date: 'Mar 2022 - Present',
                    title: 'Research Assistant',
                    location: 'Remote',
                    description: 'Work in [MineDojo](https://minedojo.org/) team',
                }
                // {
                //     date: 'Feb 2022 - Present',
                //     title: 'Research Assistant',
                //     location: 'University of Michigan',
                //     description: 'Work in [SOCR](https://www.socr.umich.edu/) team with Prof. [Simeone](http://www-personal.umich.edu/~simeonem/) on [Datasifter2](https://socr.umich.edu/HTML5/DataSifter/)',
                // },
            ],
        }, 
        // {
        //     title: 'Coursework',
        //     position: 'right',
        //     data: [
        //         {
        //             title: 'EECS545 Machine Learning',
        //             date: 'Fall',
        //             location: 'A',
        //         }, {
        //             title: 'EECS498.008 Deep Learning for Computer Vision',
        //             date: 'Winter',
        //             location: 'A',
        //         }, {
        //             title: 'EECS482 Introduction to Operating Systems',
        //             date: 'Winter',
        //             location: 'A',
        //         }, {
        //             title: 'EECS376 Foundations of Computer Science',
        //             date: 'Fall',
        //             location: 'A',
        //         }, {
        //             title: 'EECS281 Data Structures and Algorithms',
        //             date: 'Fall',
        //             location: 'A',
        //         },
        //     ],
        // }, {
        //     title: 'Student Organization',
        //     position: 'left',
        //     data: [
        //         {
        //             date: 'Sep 2019 - Jun 2020',
        //             title: 'Minister of Competition Department',
        //             location: 'UM-SJTU Joint Institute Student Science, Technology and Innovation Association',
        //         },
        //     ],
        // },
    ],
    awards: [
        {
            date: 'Jan 2023 - Present',
            title: 'Research Intern In NVIDIA',
            icon: 'briefcase',
        }, {
            date: 'Aug 2022 - Jan 2023',
            title: 'Student Research Assistant In MineDojo Team',
            icon: 'briefcase',
        },
    ],
    tagColors: [
        'magenta',
        'red',
        'volcano',
        'orange',
        'gold',
        'lime',
        'green',
        'cyan',
        'blue',
        'geekblue',
        'purple',
    ],
    tags: [
        {
            id: 'javascript',
            name: 'javascript',
            description:
                'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
            color: '#f0da50',
        },
        {
            id: 'nodejs',
            name: 'Node.js',
            description:
                'Node.js is a tool for executing JavaScript in a variety of environments.',
            color: '#90c53f',
        },
        {
            id: 'rxjs',
            name: 'RxJS',
            description:
                'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
            color: '#eb428e',
        },
        {
            id: 'typescript',
            name: 'typescript',
            description:
                'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
            color: '#257acc',
        },
        {
            id: 'reactjs',
            name: 'reactjs',
            description:
                'React is an open source JavaScript library used for designing user interfaces.',
            color: '#61dbfa',
        },
        {
            id: 'gatsby',
            name: 'Gatsby.js',
            description:
                'A framework built over ReactJS to generate static page web application.  ',
            color: '#6f309f',
        },
        {
            id: 'pokemon',
            name: 'mimikyu',
            description:
                'I love Pokémon.',
            color: '#6f309f',
        },
        {
            id: 'html',
            name: 'HTML',
            description:
                'A markup language that powers the web. All websites use HTML for structuring the content.',
            color: '#dd3431',
        },
        {
            id: 'css',
            name: 'css',
            description:
                'CSS is used to style the HTML element and to give a very fancy look for the web application.',
            color: '#43ace0',
        },
        {
            id: 'python',
            name: 'python',
            description:
                'A general purpose programming language that is widely used for developing various applications.',
            color: '#f9c646',
        },
    ],
};
