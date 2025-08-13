module.exports = {
  title: 'Douaratil DRS',
  description: 'Document de Référence Système pour le jeu de rôle Douaratil',
  head: [
    ['link', { rel: 'icon', href: '/favicon-32x32.png' }],
    ['link', { rel: 'manifest', crossorigin:"use-credentials", href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '##4D5153' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '##4D5153' }],
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
        hostname: 'https://douaratil.fr'
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
    repository: 'https://github.com/douaratil/douaratil-drs',
    kofi: 'https://ko-fi.com/douaratil',
    //twitter: 'https://twitter.com/douaratil',
    discord: 'https://discord.gg/anJm4ugn',
    primaryColor: '#4D5153', // Hero
    accentColor: '#293E4D', // Dragon
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
            icon: 'mdi-drama-masks',
            path: '/creation-du-personnage/'
          },
          {
            title: "Les ethnies",
            icon: 'mdi-human-male-female',
            path: '/ethnies/',
          },
          {
            title: "Langues",
            icon: 'mdi-account-voice',
            path: '/langues/',
          },
          {
            title: "Personnalité & Historique",
            icon: 'mdi-human-greeting',
            path: '/personnalite-et-historique/',
          },
          {
            title: "Les trois voies",
            icon: 'mdi-axis-arrow',
            path: '/voies/',
          },
          {
            title: "Les Archétypes",
            icon: 'mdi-human-queue',
            //path: '/archetypes',
            children: [
            {
                title: "Présentation",
                icon: 'mdi-drama-masks',
                path: '/archetypes/1-presentation',
              },
            {
                title: "Compagnon animal",
                icon: 'mdi-bird',
                path: '/archetypes/2-compagnon-animal',
              },
          {
              title: "Adoshaï",
              icon: 'mdi-head-snowflake',
              path: '/archetypes/adoshai',
            },
          {
              title: "Alka'him",
              icon: 'mdi-bottle-tonic',
              path: '/archetypes/alkahim',
            },
          {
              title: "Amaznoios",
              icon: 'mdi-bow-arrow',
              path: '/archetypes/amaznoios',
            },
          {
              title: "Ambeanamos",
              icon: 'mdi-auto-fix',
              path: '/archetypes/ambeanamos',
            },
            {
              title: "Assassyrhim",
              icon: 'mdi-knife',
              path: '/archetypes/assassyrhim',
            },
          {
              title: "Astartes",
              icon: 'mdi-sword',
              path: '/archetypes/astartes',
            },
          {
              title: "Bhaner",
              icon: 'mdi-guitar-acoustic',
              path: '/archetypes/bhaner',
            },
          {
              title: "Bhegelm",
              icon: 'mdi-shield-sun',
              path: '/archetypes/bhegelm',
            },
            {
              title: "Consulate",
              icon: 'mdi-barley',
              path: '/archetypes/consulate',
            },
          {
              title: "Dall Dawnser",
              icon: 'mdi-sword',
              path: '/archetypes/dall-dawnser',
            },
            {
                title: "Dorshaïre",
                icon: 'mdi-water',
                path: '/archetypes/dorshaire',
              },
          {
              title: "Drodan",
              icon: 'mdi-shield-sun',
              path: '/archetypes/drodan',
            },
            {
              title: "Eolide",
              icon: 'mdi-lightning-bolt-outline',
              path: '/archetypes/eolide',
            },
          {
              title: "Fürtane",
              icon: 'mdi-sword',
              path: '/archetypes/furtane',
            },
          {
              title: "Gwylwir",
              icon: 'mdi-sword',
              path: '/archetypes/gwylwir',
            },
            {
                title: "Heilari",
                icon: 'mdi-heart-pulse',
                path: '/archetypes/heilari',
              },
          {
              title: "Herredyr",
              icon: 'mdi-paw',
              path: '/archetypes/herredyr',
            },
          {
              title: "Holtseidar",
              icon: 'mdi-shield-sun',
              path: '/archetypes/holtseidar',
            },
          {
              title: "Ior",
              icon: 'mdi-sword',
              path: '/archetypes/ior',
            },
            {
              title: "Houryam",
              icon: 'mdi-feather',
              path: '/archetypes/houryam',
            },
            {
              title: "Huoyanzhanshi",
              icon: 'mdi-fire',
              path: '/archetypes/huoyanzhanshi',
            },
          {
              title: "Jargl",
              icon: 'mdi-sword',
              path: '/archetypes/jargl',
            },
          {
              title: "Jörghal",
              icon: 'mdi-sword',
              path: '/archetypes/jorghal',
            },
            {
              title: "Kaïshan",
              icon: 'mdi-fire',
              path: '/archetypes/kaishan',
            },
          {
              title: "Legatos",
              icon: 'mdi-knife-military',
              path: '/archetypes/legatos',
            },
          {
              title: "Llawenos",
              icon: 'mdi-guitar-acoustic',
              path: '/archetypes/llawenos',
            },
          {
              title: "Magios",
              icon: 'mdi-auto-fix',
              path: '/archetypes/magios',
            },
          {
              title: "Nayane",
              icon: 'mdi-knife-military',
              path: '/archetypes/nayane',
            },
            {
              title: "Otaganha",
              icon: 'mdi-paw-outline',
              path: '/archetypes/otaganha',
            },
            {
              title: "Phýlaxtéphras",
              icon: 'mdi-bottle-tonic-skull-outline',
              path: '/archetypes/phylaxtephras',
            },
          {
              title: "Seibahkami",
              icon: 'mdi-sword',
              path: '/archetypes/seibahkami',
            },
          {
              title: "Sermazloth",
              icon: 'mdi-sword',
              path: '/archetypes/sermazloth',
            },
          {
              title: "Shangharah",
              icon: 'mdi-shield-sun',
              path: '/archetypes/Shangharah',
            },
            {
              title: "Singhara",
              icon: 'mdi-spear',
              path: '/archetypes/Singhara',
            },
          {
              title: "Skell",
              icon: 'mdi-guitar-acoustic',
              path: '/archetypes/skell',
            },
          {
              title: "Sohoten",
              icon: 'mdi-sword',
              path: '/archetypes/sohoten',
            },
          {
              title: "Sorser",
              icon: 'mdi-auto-fix',
              path: '/archetypes/sorser',
            },
            {
                title: "Totsuzenshi",
                icon: 'mdi-shuriken',
                path: '/archetypes/totsuzenshi',
              },
            {
                title: "Vestaline",
                icon: 'mdi-owl',
                path: '/archetypes/vestaline',
              },
            {
              title: "Viator",
              icon: 'mdi-ship-wheel',
              path: '/archetypes/viator',
            },
          {
              title: "Vitnar",
              icon: 'mdi-shield-sun',
              path: '/archetypes/vitnar',
            },
          {
              title: "Zhongdhou",
              icon: 'mdi-bottle-tonic-skull',
              path: '/archetypes/zhongdhou',
            },

          ]
          },
          {
            title: "Equipement",
            icon: 'mdi-gavel',
            // path: '/equipement/',
            children: [
              {
                  title: "Système monétaire",
                  icon: 'mdi-circle-multiple-outline',
                  path: '/equipement/systeme-monetaire',
                },
              {
                  title: "Armures",
                  icon: 'mdi-shield',
                  path: '/equipement/armures',
                },
              {
                  title: "Armes",
                  icon: 'mdi-sword-cross',
                  path: '/equipement/armes',
                },
              {
                  title: "Equipement d'aventurier",
                  icon: 'mdi-gantry-crane',
                  path: '/equipement/equipement-d-aventurier',
                },
              {
                  title: "Outils",
                  icon: 'mdi-hammer-wrench',
                  path: '/equipement/outils',
                },
              {
                  title: "Montures & véhicules",
                  icon: 'mdi-horse-human',
                  path: '/equipement/montures-&-vehicules',
                },
              {
                  title: "Marchandises",
                  icon: 'mdi-barley',
                  path: '/equipement/marchandises',
                },
              {
                  title: "Dépenses courantes",
                  icon: 'mdi-baguette',
                  path: '/equipement/depenses-courantes',
                },
              {
                  title: "Composants magiques",
                  icon: 'mdi-auto-fix',
                  path: '/equipement/composants-magiques',
                },
            ]
          },
          {
            title: 'Utiliser les caractéristiques',
            icon: 'mdi-weight-lifter',
            path: '/utiliser-les-caracteristiques/'
          },
          {
            title: "Partir à l'aventure",
            icon: 'mdi-campfire',
            path: '/partir-a-l-aventure/'
          },
          {
            title: "Combattre",
            icon: 'mdi-sword-cross',
            path: '/combattre/'
          },
          {
            title: "Gérer la santé du personnage",
            icon: 'mdi-account-heart',
            path: '/gerer-la-sante-du-personnage/'
          },
          {
            title: "Coups critiques",
            icon: 'mdi-skull-crossbones',
            path: '/tables-de-degats-et-de-coups-critiques/'
          },
          {
            title: "Maladresse",
            icon: 'mdi-coffin',
            path: '/tables-des-maladresses/'
          },
          {
            title: "Lancer des sorts",
            icon: 'mdi-atom-variant',
            path: '/lancer-des-sorts/'
          },
          {
            title: 'Grimoire',
            icon: 'mdi-firebase',
            path: '/grimoire/'
          },
          {
            title: 'Compagnons',
            icon: 'mdi-account-multiple',
            path: '/Compagnons/'
          },
        ]
      },
      {
        title: 'Pour les meneurs',
        icon: 'mdi-map',
        children: [
          {
            title: "Créatures & oppositions",
            icon: 'mdi-snake',
            children: [
              {
                title: "Comprendre le profil technique des monstres",
                icon: 'mdi-ghost',
                path: '/comprendre-le-profil-technique-des-monstres/'
              },
              {
                title: "Inventer un monstre ou un PNJ",
                icon: 'mdi-ghost-outline',
                path: '/inventer-un-monstre-ou-un-pnj/'
              },
              {
                title: "Construire une rencontre",
                icon: 'mdi-halloween',
                path: '/construire-une-rencontre/'
              },
              {
                title: "Bestiaire & rencontres",
                icon: 'mdi-paw',
                path: '/bestiaire/'
              },
            ]
          },
          {
            title: "Trésors & objets magiques",
            icon: 'mdi-gift-open',
            children: [
              {
                title: "Les trésors",
                icon: 'mdi-gift',
                path: '/les-tresors/'
              },
              {
                title: "Objets magiques",
                icon: 'mdi-star-circle',
                path: '/objets-magiques/'
              },
              {
                title: "Fabrication d'objets magiques",
                icon: 'mdi-auto-fix',
                path: '/fabrication-d-objets-magiques/'
              },
              {
                title: "Liste des objets magiques",
                icon: 'mdi-script-text',
                path: '/liste-objets-magiques/'
              },
            ]
          },
          {
            title: "Pièges & dangers",
            icon: 'mdi-spider',
            children: [
              {
                title: "Les pièges",
                icon: 'mdi-spider-thread',
                path: '/pieges/'
              },
              {
                title: "Les maladies",
                icon: 'mdi-heart-pulse',
                path: '/maladies/'
              },
              {
                title: "La santé mentale (SAM)",
                icon: 'mdi-head-snowflake',
                path: '/sante-mentale/'
              },
              {
                title: "La folie",
                icon: 'mdi-freebsd',
                path: '/folie/'
              },
            ]
          },
          {
            title: "Domaine, famille & destinée",
            icon: 'mdi-castle',
            children: [
              {
                title: "Gestion de la famille et des biens",
                icon: 'mdi-fireplace',
                path: '/intermedes/'
              },
              {
                title: "Gestion du domaine",
                icon: 'mdi-home-flood',
                path: '/domaine/'
              },
              {
                title: "Développer une colonie",
                icon: 'mdi-chess-rook',
                path: '/colonie/'
              }
            ]
          },
          {
            title: "Les aventures",
            icon: 'mdi-treasure-chest',
            path: '/aventures/'
          },
          {
            title: "L'expérience",
            icon: 'mdi-upload',
            path: '/experience/'
           },
          {
            title: "Les batailles",
            icon: 'mdi-shield',
            path: '/batailles/'
          },
          {
            title: "Le commerce",
            icon: 'mdi-sack',
            path: '/commerce'
          },
          {
            title: "La gestion de l'honneur",
            icon: 'mdi-crown',
            path: '/passion-honneur-et-interactions-sociales/'
          },
          {
            title: "Les guildes",
            icon: 'mdi-anvil',
            path: '/guilde'
          },
          {
            title: "Les objets",
            icon: 'mdi-weight',
            path: '/objets-opposition/'
          },
          {
            title: "Les plans",
            icon: 'mdi-soundcloud',
            path: '/les-plans/'
          },
          {
            title: "Les poisons",
            icon: 'mdi-mushroom',
            children:[
              {
                title: "Présentation poisons",
                icon: 'mdi-test-tube',
                path: '/poisons/'
              },
              {
                title: "Intoxicants",
                icon: 'mdi-cannabis',
                path: '/poisons/intoxicants/'
              },
              {
                title: "Circulatoires",
                icon: 'mdi-liquid-spot',
                path: '/poisons/circulatoires/'
              },
              {
                title: "Conversions",
                icon: 'mdi-bacteria',
                path: '/poisons/conversion/'
              },
              {
                title: "Musculaires",
                icon: 'mdi-arm-flex',
                path: '/poisons/musculaires/'
              },
               {
                title: "Nerveux",
                icon: 'mdi-emoticon-sick',
                path: '/poisons/nerveux/'
              },
               {
                title: "Réduction",
                icon: 'mdi mdi-human-cane',
                path: '/poisons/reduction/'
              },
            ]
          },
          {
            title: "La réputation",
            icon: 'mdi-account-switch',
            path: '/reputation/'
          },
          {
            title: "Les traits de caractère",
            icon: 'mdi-head-heart',
            path: '/traits-de-caractere/'
          },
          {
            title: "Les plantes",
            icon: 'mdi-flower',
            children:
            [
              {
                title: "Herboristerie",
                icon: 'mdi-spa',
                path: '/herbier/'
              },
              {
                title: "Antidotes",
                icon: 'mdi-bottle-tonic-skull-outline',
                path: '/herbier/antidotes/'
              },
              {
                title: "Brûlures-Gelures",
                icon: 'mdi-fire',
                path: '/herbier/soins-brulures-gelures/'
              },
              {
                title: "Dynamisants-Excitants",
                icon: 'mdi-heart-flash',
                path: '/herbier/soins-dynamisants-excitants/'
              },
              {
                title: "Etourdissements",
                icon: 'mdi-head-question',
                path: '/herbier/soins-etourdissements/'
              },
              {
                title: "Fractures",
                icon: 'mdi-bone',
                path: '/herbier/soins-fractures/'
              },
              {
                title: "Muscles-Tendons",
                icon: 'mdi-arm-flex',
                path: '/herbier/soins-muscles-tendons/'
              },
              {
                title: "Organes",
                icon: 'mdi-bottle-tonic-plus',
                path: '/herbier/soins-organes/'
              },
              {
                title: "Saignements",
                icon: 'mdi-water',
                path: '/herbier/soins-saignements/'
              },
              {
                title: "Système nerveux",
                icon: 'mdi-brain',
                path: '/herbier/soins-systeme-nerveux/'
              },
              {
                title: "Altérations physiques",
                icon: 'mdi-weight-lifter',
                path: '/herbier/alterations-physiques/'
              },
              {
                title: "Modifications de caractéristiques",
                icon: 'mdi-needle',
                path: '/herbier/modifications-de-caracteristiques/'
              },
              {
                title: "Nourritures spéciales",
                icon: 'mdi-food-croissant',
                path: '/herbier/nourritures-speciales/'
              },
              {
                title: "Utilisations générales",
                icon: 'mdi-medical-bag',
                path: '/herbier/utilisations-generales/'
              },
              {
                title: "Préservation de la vie",
                icon: 'mdi-coffin',
                path: '/herbier/preservation-de-la-vie/'
              }
            ]
          }
        ]
      },
      {
        title: 'Le monde de Douaratil',
        icon: 'mdi-earth',
        children: [
          {
            title: "Chronologie",
            icon: 'mdi-timer-sand',
            path: '/chronologie'
          },
          {
            title: "Dieux, Divinités & autres forces",
            icon: 'mdi-shuriken',
            path: '/dieux-divinites'
          },
          {
            title: "Inspiration musicale",
            icon: 'mdi-music',
            path: '/inspimusic'
          },
          {
            title: "Les peuples",
            icon: 'mdi-script',
            children: [
              {
                title: "Les Alcantes",
                icon: 'mdi-dna',
                path: '/peuples/alcantes'
              },
              {
                title: "Les Khernaës",
                icon: 'mdi-dna',
                path: '/peuples/khernaes'
              },
              {
                title: "Les Oynours",
                icon: 'mdi-dna',
                path: '/peuples/oynours'
              }
              ]
            },
          {title: "Atlas",
          icon: 'mdi-wallpaper',
           children: [
              {
                title: "Carte du monde",
                icon: 'mdi-map-search',
                path:'/atlas-du-monde/carte-du-monde'
              },
              {
                title: "Douaratil",
                icon: 'mdi-brightness-3',
                path:'/atlas-du-monde/douaratil'
              },
              {
                title: "Empire Alcante",
                icon: 'mdi-bank',
                path:'/atlas-du-monde/empire-alcante'
              },
              {
                title: "Royaumes Melgs",
                icon: 'mdi-chess-rook',
                path:'/atlas-du-monde/royaumes-melgs'
              },
              {
                title: "Shahia",
                icon: 'mdi-brightness-5',
                path:'/atlas-du-monde/shahia'
              }
            ]
          },
          {title: "PJ",
          icon: 'mdi-account',
          path:'/PJ'
          },
          {title: "PNJ",
          icon: 'mdi-account-group-outline',
           children: [
              {
                title: "PNJ Alcantes",
                icon: 'mdi-pillar',
                path:'/PNJ/alcantes'
              },
              {
                title: "PNJ Nordiques",
                icon: 'mdi-axe',
                path:'/PNJ/nordiques'
              },
              {
                title: "PNJ Minghours",
                icon: 'mdi-yin-yang',
                path:'/PNJ/minghours'
              },
              {
                title: "PNJ Shahims",
                icon: 'mdi-palm-tree',
                path:'/PNJ/shahims'
              },
              {
                title: "PNJ Sooghaï",
                icon: 'mdi-snake',
                path:'/PNJ/Sooghai'
              }
            ]
          },
          {title: 'Règles simplifiées',
            icon: 'mdi-earth',
            children: [
              {
                title: "Règles simplifiée",
                icon: 'mdi-dice-6-outline',
                path: '/regles-simplifiees'
              },
              ]
            }
            ]
      },
      {type: 'divider'},
      {
        title: "FAQ",
        path: '/FAQ/',
        icon: 'mdi-head-question'
      },
      {
        title: "Licence OGL",
        path: '/licence-ogl/',
        icon: 'mdi-clipboard-text'
      }
    ]
  }
}
