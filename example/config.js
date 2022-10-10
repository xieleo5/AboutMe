module.exports = {
    pathPrefix: '',
    siteUrl: 'https://xieleo5.github.io',
    title: 'xieleo',
    description: 'Personal Website of John Doe',
    author: 'Yuqi Xie',
    authorAlternative: '谢雨齐',
    introduction: [
        'Hi, I am Yuqi Xie, you can also call me Leo. I am a Computer Science student study at [Umich](https://cse.engin.umich.edu/). Before I transferred to Umich, I was majoring in ECE at Shanghai Jiaotong University ([SJTU](https://cse.engin.umich.edu/))',
        'My research interests mainly lines in [foundation models](https://arxiv.org/abs/2108.07258), multimodal learning, robotics and reinforcement learning. I am currently working with [Dr. Jim Fan](https://jimfan.me/) to develop general-purpose AI agents.',
    ],
    avatar: 'avatar.jpg',
    professions: [
        'CSE Student',
    ],
    tocMaxDepth: 2,
    excerptMaxLength: 500,
    birthday: 'May. 5, 2001',
    location: 'Shanghai, China',
    email: 'xieleo@umich.edu',
    language: '中文, English',
    postsForArchivePage: 3,
    defaultLanguage: 'en',
    disqusScript:
        process.env.DISQUS_SCRIPT || 'https://boyanzh.disqus.com/embed.js',
    pages: {
        home: '/',
        posts: 'posts',
        contact: 'contact',
        resume: 'resume',
        tags: 'tags',
        project: 'project',
        wakatime: 'wakatime',
    },
    social: [
        {
            url: '/resume.pdf',
            icon: ['ai', 'cv'],
        },
        {
            url: 'https://github.com/xieleo5',
            icon: ['fab', 'github'],
        },
        {
            url: 'https://www.linkedin.com/in/yuqi-xie-ba87a8223/',
            icon: ['fab', 'linkedin'],
        },
    ],
    // facebook: 'https://www.facebook.com/rolwin.monteiro',
    // instagram: 'https://www.instagram.com/reevan100/',
    // rss: '/rss.xml',
    contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || '',
    googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'UA-XXXXXXXXX-X',
    education: [
        {
            date: 'Sep 2021 - Present',
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
            title: 'Foundation Models',
        }, {
            title: 'General-purpose Agents',
        }, {
            title: 'Multimodal Learning',
        }, {
            title: 'Robotics',
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
                    date: 'Mar 2022 - Present',
                    title: 'Research Assistant',
                    location: 'Remote',
                    description: 'Work in [MineDojo](https://minedojo.org/) team',
                }, {
                    date: 'Feb 2022 - Present',
                    title: 'Research Assistant',
                    location: 'University of Michigan',
                    description: 'Work in [SOCR](https://www.socr.umich.edu/) team with Prof. [Simeone](http://www-personal.umich.edu/~simeonem/) on [Datasifter2](https://socr.umich.edu/HTML5/DataSifter/)',
                },
            ],
        }, {
            title: 'Coursework',
            position: 'right',
            data: [
                {
                    title: 'EECS545 Machine Learning',
                    date: 'Fall',
                    location: 'A',
                }, {
                    title: 'EECS498.008 Deep Learning for Computer Vision',
                    date: 'Winter',
                    location: 'A',
                }, {
                    title: 'EECS482 Introduction to Operating Systems',
                    date: 'Winter',
                    location: 'A',
                }, {
                    title: 'EECS376 Foundations of Computer Science',
                    date: 'Fall',
                    location: 'A',
                }, {
                    title: 'EECS281 Data Structures and Algorithms',
                    date: 'Fall',
                    location: 'A',
                },
            ],
        }, {
            title: 'Student Organization',
            position: 'left',
            data: [
                {
                    date: 'Sep 2019 - Jun 2020',
                    title: 'Minister of Competition Department',
                    location: 'UM-SJTU Joint Institute Student Science, Technology and Innovation Association',
                },
            ],
        },
    ],
    awards: [
        {
            date: 'Aug 2022',
            title: 'Roger King Scholarship',
        }, {
            date: 'Nov 2020',
            title: 'SJTU Undergraduate Excellent Scholarship',
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
