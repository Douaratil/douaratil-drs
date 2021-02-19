module.exports = {
  title: 'Douaratil DRS',
  description: 'Document de Référence Système pour le jeu de rôle Douaratil',
  head: [
    ['link', { rel: 'icon', href: '/favicon-32x32.png' }],
    ['link', { rel: 'manifest', crossorigin:"use-credentials", href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#5B3C11' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#5B3C11' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/mstile-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }]
  ],
  shouldPrefetch () {
    return false
  },
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // Unique ID of current classification
            id: 'spell',
            // Meta title for spell list page
            title: 'Grimoire',
            // Target directory
            dirname: 'grimoire',
            // Path of the `entry page` (or `list page`)
            path: '/grimoire/',
            layout: 'SpellsLayout',
            itemLayout: 'SpellLayout',
            itemPermalink: '/grimoire/:slug',
            pagination: {
              lengthPerPage: 1000,
              sorter: (prev, next) => {
                return prev.path - next.path
              },
            },
          },
          {
            // Unique ID of current classification
            id: 'monster',
            // Meta title for spell list page
            title: 'Bestiaire',
            // Target directory
            dirname: 'bestiaire',
            // Path of the `entry page` (or `list page`)
            path: '/bestiaire/',
            layout: 'MonstersLayout',
            itemLayout: 'MonsterLayout',
            itemPermalink: '/bestiaire/:slug',
            pagination: {
              lengthPerPage: 1000,
              sorter: (prev, next) => {
                return prev.path - next.path
              },
            },
          },
          {
            // Unique ID of current classification
            id: 'magicitem',
            // Meta title for spell list page
            title: 'Liste des objets magiques',
            // Target directory
            dirname: 'liste-objets-magiques',
            // Path of the `entry page` (or `list page`)
            path: '/liste-objets-magiques/',
            layout: 'MagicItemsLayout',
            itemLayout: 'MagicItemLayout',
            itemPermalink: '/liste-objets-magiques/:slug',
            pagination: {
              lengthPerPage: 1000,
              sorter: (prev, next) => {
                return prev.path - next.path
              },
            },
          },
        ],
      }
    ],
    [
      'check-md', {}
    ],
    [
      'sitemap',
      {
        hostname: 'https://heros-et-dragons.fr'
      }
    ],
    // [
    //   '@vuepress/pwa',
    //   {
    //     serviceWorker: true,
    //     updatePopup: true,
    //     generateSWConfig: {
    //       cacheId: 'hddrs',
    //       globIgnores: ['**/*.js', '**/*.css', '**/*.html']
    //     }
    //   }
    // ],
    [
      'seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: ($page, $site) => $page.title + ' | ' + $site.title,
        description: $page => $page.frontmatter.description,
        // author: (_, $site) => $site.themeConfig.author,
        // tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page => 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        // image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
        image: ($page, $site) => $site.themeConfig.domain + '/social-logo.png',
        // publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        // modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-122478510-1' // UA-00000000-0
      }
    ]
  ],
  dest: process.env.VUEPRESS_DEST,
  extendPageData ($page) {
    $page.rawContent = ($page._strippedContent)
  },
  markdown: {
    extractHeaders: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ],
    anchor: {
      permalinkBefore: false,
      permalinkSymbol: '<i class="v-icon notranslate mdi mdi-link-variant"></i>'
    },
    extendMarkdown: md => {
      md.use(require('markdown-it-div'), {marker: "§"})
      md.use(require('markdown-it-multimd-table'), {
        multiline:  true,
        rowspan:    true,
        headerless: false,
      })
    }
  },
  additionalPages: [
    {
       path: '/mon-grimoire/',
       frontmatter: {
          layout: 'MySpellsLayout'
       }
    },
    {
       path: '/mon-bestiaire/',
       frontmatter: {
          layout: 'MyMonstersLayout'
       }
    },
    {
       path: '/mes-objets-magiques/',
       frontmatter: {
          layout: 'MyMagicItemsLayout'
       }
    },
    {
       path: '/creation-de-sort/',
       frontmatter: {
          layout: 'CreateSpellLayout'
       }
    },
    {
       path: '/creation-de-monstre-pnj/',
       frontmatter: {
          layout: 'CreateMonsterLayout'
       }
    },
    {
       path: '/creation-d-objet-magique/',
       frontmatter: {
          layout: 'CreateMagicItemLayout'
       }
    },
    {
       path: '/calculateur-de-caracteristiques/',
       frontmatter: {
          layout: 'AbilityCalculatorLayout'
       }
    },
    {
       path: '/homebrew/',
       frontmatter: {
          layout: 'HomebrewLayout'
       }
    }
  ],
  themeConfig: {
    domain: 'https://douaratil.fr',
    repository: 'https://github.com/douaratil/heros-et-dragons-drs',
    kofi: 'https://ko-fi.com/douaratil',
    forum: 'https://www.black-book-editions.fr/forums.php?board_id=115',
    discord: 'https://discord.gg/vRXeVwrNvK',
    primaryColor: '#5B3C11', // Hero
    accentColor: '#730800', // Dragon
    searchPlaceholder: 'Recherche',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'À propos', link: '/a-propos/' }
    ],
    sidebarDepth: 1,
    sidebar: [
      {
        title: 'Pour les joueurs',
        icon: 'mdi-book-open-variant',
        children: [
          {
            title: "Création du personnage",
            path: '/creation-du-personnage/'
          },
          {
            title: 'Les ethnies',
            path: '/ethnies/',
          },
          {
            title: "Personnalité & Historique",
            path: '/personnalite-et-historique/',
          },
          {
            title: "Les trois voies",
            path: '/voies/',
          },
          {
            title: "Les Archétypes",
            children: [
          {
              title: "Ambeanamos",
              path: '/archetypes/ambeanamos',
            },
          {
              title: "Astartes",
              path: '/archetypes/astartes',
            },
          {
              title: "Bhaner",
              path: '/archetypes/bhaner',
            },
          {
              title: "Bhegelm",
              path: '/archetypes/bhegelm',
            },
          {
              title: "Dall Dawnser",
              path: '/archetypes/dall-dawnser',
            },
          {
              title: "Drodan",
              path: '/archetypes/drodan',
            },
          {
              title: "Fürtane",
              path: '/archetypes/furtane',
            },
          {
              title: "Gwylwir",
              path: '/archetypes/gwylwir',
            },
          {
              title: "Herredyr",
              path: '/archetypes/herredyr',
            },
          {
              title: "Holtseidar",
              path: '/archetypes/holtseidar',
            },
          {
              title: "Ior",
              path: '/archetypes/ior',
            },
          {
              title: "Jargl",
              path: '/archetypes/jargl',
            },
          {
              title: "Jörghal",
              path: '/archetypes/jorghal',
            },
          {
              title: "Llawenos",
              path: '/archetypes/llawenos',
            },
          {
              title: "Magios",
              path: '/archetypes/magios',
            },
          {
              title: "Nayane",
              path: '/archetypes/nayane',
            },
          {
              title: "Seibahkami",
              path: '/archetypes/seibahkami',
            },
          {
              title: "Sermazloth",
              path: '/archetypes/sermazloth',
            },
          {
              title: "Shangharah",
              path: '/archetypes/Shangharah',
            },
          {
              title: "Skell",
              path: '/archetypes/skell',
            },
          {
              title: "Sorser",
              path: '/archetypes/sorser',
            },
          {
              title: "Vitnar",
              path: '/archetypes/vitnar',
            },

          ]
          },
          {
            title: "Equipement",
            path: '/equipement/',
          },
          {
            title: 'Options de personnalisation',
            path: '/options-de-personnalisation/'
          },
          {
            title: 'Utiliser les caractéristiques',
            path: '/utiliser-les-caracteristiques/'
          },
          {
            title: "Partir à l'aventure",
            path: '/partir-a-l-aventure/'
          },
          {
            title: "Combattre",
            path: '/combattre/'
          },
          {
            title: "Gérer la santé du personnage",
            path: '/gerer-la-sante-du-personnage/'
          },
          {
            title: "Lancer des sorts",
            path: '/lancer-des-sorts/'
          },
          {
            title: 'Grimoire',
            path: '/grimoire/'
          },
        ]
      },
      {
        title: 'Pour les meneurs',
        icon: 'mdi-map',
        children: [
          {
            title: "Créatures & oppositions",
            children: [
              {
                title: "Comprendre le profil technique des monstres",
                path: '/comprendre-le-profil-technique-des-monstres/'
              },
              {
                title: "Inventer un monstre ou un PNJ",
                path: '/inventer-un-monstre-ou-un-pnj/'
              },
              {
                title: "Construire une rencontre",
                path: '/construire-une-rencontre/'
              },
              {
                title: "Bestiaire & rencontres",
                path: '/bestiaire/'
              },
            ]
          },
          {
            title: "Trésors & objets magiques",
            children: [
              {
                title: "Les trésors",
                path: '/les-tresors/'
              },
              {
                title: "Objets magiques",
                path: '/objets-magiques/'
              },
              {
                title: "Liste des objets magiques",
                path: '/liste-objets-magiques/'
              },
            ]
          },
          {
            title: "Pièges & dangers",
            children: [
              {
                title: "Les pièges",
                path: '/pieges/'
              },
              {
                title: "Les maladies",
                path: '/maladies/'
              },
              {
                title: "Les poisons",
                path: '/poisons/'
              },
              {
                title: "La folie",
                path: '/folie/'
              },
            ]
          },
          {
            title: "Fief, famille & destinée",
            children: [
              {
                title: "Passions, honneur & interactions sociales",
                path: '/passion-honneur-et-interactions-sociales/'
              },
              {
                title: "L'expérience",
                path: '/experience/'
              }
            ]
          },
          {
            title: "Les objets",
            path: '/objets-opposition/'
          },
          {
            title: "Les plantes",
            path: '/herbier/'
          }
        ]
      },
      {
        title: 'Le monde de Douaratil',
        icon: 'mdi-map',
        children: [
          {
            title: "Les chroniques",
            children: [
              {
                title: "Miz du 720",
                path: '/chroniques/miz-du-720'
              },
              {
                title: "Miz Kerzu 720",
                path: '/chroniques/miz-kerzu-720'
              },
              {
                title: "Miz Genver 721",
                path: '/chroniques/miz-genver-721'
              },
            ]
          },
          {title: "Atlas",
           children: [{title: "Carte du monde", path:'/atlas-du-monde/carte-du-monde'},
        {title: "Douaratil", path:'/atlas-du-monde/douaratil'}]}
        ]
      },
      {type: 'divider'},
      {
        title: "Licence OGL",
        path: '/licence-ogl/',
        icon: 'mdi-clipboard-text'
      }
    ]
  }
}
