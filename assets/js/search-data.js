// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-yonseistat-hpc-cluster",
    title: "Yonseistat HPC Cluster",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-notice",
          title: "Notice",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-manual",
          title: "Manual",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-slurm-job-configurator",
          title: "Slurm job configurator",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/slurm-job/";
          },
        },{id: "post-tensorflow-실행하기",
      
        title: "Tensorflow 실행하기",
      
      description: "HPC에서 Tensorflow 실행 방법",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/tf/";
        
      },
    },{id: "post-r-실행하기",
      
        title: "R 실행하기",
      
      description: "HPC에서 R 실행 방법",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/r/";
        
      },
    },{id: "post-ssh-접속-및-python-실행하기",
      
        title: "SSH 접속 및 Python 실행하기",
      
      description: "SSH 접속 방법 및 HPC에서 Python 실행 방법",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/ssh-python/";
        
      },
    },{id: "post-introduction",
      
        title: "Introduction",
      
      description: "HPC Cluster와 Slurm job scheduler에 대한 설명 문서",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/introduction/";
        
      },
    },{id: "news-we-are-excited-to-announce-the-launch-of-our-brand-new-high-performance-computing-hpc-cluster-server-this-new-server-will-provide-significantly-improved-computing-power-for-our-students-and-researchers",
          title: 'We are excited to announce the launch of our brand new High-Performance Computing...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
