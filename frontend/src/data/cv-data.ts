import type { Experience, Education } from '@/types'

// Personal Information
export const personalInfo = {
  name: "Maxime Pointet",
  title: {
    fr: "Ingénieur Système Embarqué et Développeur Logiciel",
    en: "Lead Embedded Software Engineer"
  },
  email: "maxime.pointet@outlook.com",
  phone: "+33 6 77 38 04 09",
  location: {
    fr: "44120 Vertou, France",
    en: "44120 Vertou, France"
  },
  age: "31 ans",
  linkedin: "https://linkedin.com/in/maxime-pointet",
  github: "https://github.com/maxime-pointet",
  profilePhoto: "/profile-photo.jpg",
  drivingLicense: true
}

// Professional Experience
export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Lead Ingénieur Logiciel Embarqué',
    company: 'Hestiia',
    period: 'Juin 2023 - Présent',
    location: 'Nantes, France',
    contractType: 'CDI',
    logo: '/logos/hestiia.jpg',
    description: 'Environnement startup — Autonomie complète sur le pôle firmware pendant 14 mois. Responsable du développement firmware dans une startup développant un système embarqué combinant chauffage intelligent et calcul numérique.',
    actions: [
      'Étude approfondie du fonctionnement du minage Bitcoin : SHA-256, Stratum, preuve de travail',
      'Reverse engineering de l\'ASIC BM1397 sans documentation (sources communautaires + exploration interne)',
      'Modification d\'un logiciel open-source de minage (CGMiner), puis réécriture complète en Rust (optimisé pour la régulation thermique et l\'efficacité énergétique)',
      'Développement de drivers Linux Kernel : création, modification, extension, contribution open-source',
      'Drivers Rust (embedded-hal) : I2C/UART/GPIO pour capteurs de température, tension, courant, ADC, GPIO expanders',
      'Système embarqué sous Linux Yocto : Création de layers, targets, patches et recipes. Migration de Yocto 4.0 Kirkstone vers 5.0 Scarthgap',
      'Architecture logicielle & protocoles : Conception et implémentation de l\'architecture firmware. Protocole interne basé sur ZMQ, MQTT et Protobuf',
      'CI/CD & industrialisation : Mise en place de pipelines CI/CD (GitHub Actions, Docker, release-please) pour Rust & C. Conception de bancs de tests hardware',
      'Contribution hardware : Participation active aux choix d\'architecture matérielle (pinout, contraintes système, device tree)'
    ],
    technologies: ['Rust', 'C', 'Python', 'Linux Yocto', 'Git', 'GCC', 'VSCode', 'Ubuntu', 'GitHub Actions', 'Docker', 'Maturin', 'Pyo3', 'ZMQ', 'MQTT', 'Protobuf', 'BLE', 'Tailscale', 'Notion', 'SHA-256', 'Stratum', 'CGMiner', 'Bitcoin', 'ASIC', 'Blockchain']
  },
  {
    id: '2',
    title: 'Ingénieur Software',
    company: 'Kickmaker',
    period: 'Juin 2022 - Juin 2023',
    location: 'Nantes, France',
    contractType: 'CDI',
    logo: '/logos/kickmaker.png',
    description: 'Recruté dans les premiers mois de l\'ouverture de l\'agence de Nantes, j\'ai intégré une équipe projet pour un client basé à Boston (Symbotic), concepteur de systèmes robotiques autonomes pour entrepôts intelligents à grande échelle.',
    actions: [
      'Développement embarqué robotique : Travail sur le robot de transport autonome circulant dans les allées de l\'entrepôt. Linux embarqué, logiciel en C++17, communication via MQTT et RabbitMQ',
      'Fault Injection System : Conception et développement d\'un service hybride intégré au firmware et utilisé dans les outils de validation. Permet l\'injection contrôlée de fautes dans le comportement du robot à des fins de test, simulation et robustesse',
      'Développement en C++ pour la partie embarquée, Python pour l\'outillage externe, avec participation active à l\'architecture logicielle',
      'Communication & CI : Collaboration à distance avec des équipes internationales. Contribution aux processus d\'intégration continue et au tooling autour du projet',
      'Activités internes Kickmaker : Engagement volontaire dans le programme DevOps interne : montée en compétences sur Azure, AWS, GCP, Ansible, Terraform, Vault',
      'Animation d\'une formation sur les IAM (Identity & Access Management) à destination des collaborateurs de l\'entreprise'
    ],
    technologies: ['C++17', 'Python', 'Linux', 'MQTT', 'RabbitMQ', 'Git', 'Docker', 'CI/CD', 'Terraform', 'Ansible', 'Vault', 'GCP', 'AWS', 'Azure']
  },
  {
    id: '3',
    title: 'Ingénieur Système Embarqué et Développeur Logiciel',
    company: 'Ventilairsec',
    period: 'Octobre 2019 - Avril 2022',
    location: 'Couéron, France',
    contractType: 'CDI',
    logo: '/logos/ventilairsec.png',
    description: 'Développement, maintenance et évolution des logiciels embarqués des produits de l\'entreprise.',
    actions: [
      'Mise en place d\'une solution d\'intégration continue',
      'Participation au développement de logiciels embarqués expérimentaux dans le cadre de partenariat de recherche industriel autour de la ventilation',
      'Développement d\'une solution connectée permettant le contrôle, la mise-à-jour et la maintenance avancée des produits à distance et de façon sécurisée, dans le cadre d\'installations expérimentales'
    ],
    technologies: ['C/C++', 'Python', 'Bash', 'Git', 'Eclipse', 'Jenkins', 'CppCheck', 'Linux']
  },
  {
    id: '4',
    title: 'Ingénieur Logiciel Embarqué',
    company: 'Elephant Technologie',
    period: 'Avril 2019 - Octobre 2019',
    location: 'Nantes, France',
    contractType: 'Mission',
    logo: '/logos/elephant-techno.png',
    description: 'Développeur logiciel embarqué en prestation pour Ventilairsec.',
    actions: [
      'Reprise du logiciel embarqué d\'une télécommande suite au remplacement du microcontrôleur',
      'Développement d\'un driver de communication EnOcean en collaboration avec l\'équipe en place',
      'Développement du middleware EnOcean capable de gérer l\'émission et la réception de "telegrams" MSC/VLD/4BS dans un environnement FreeRTOS'
    ],
    technologies: ['C', 'FreeRTOS', 'EnOcean', 'PIC32', 'MSC/VLD/4BS']
  },
  {
    id: '5',
    title: 'Ingénieur Électronique Embarquée',
    company: 'Comap',
    period: 'Janvier 2019 - Avril 2019',
    location: 'Nantes, France',
    contractType: 'CDI',
    logo: '/logos/comap.jpg',
    description: 'Développement logiciels embarqués, mesures, tests et qualifications de composants électroniques.',
    actions: [
      'Développement C de drivers I2C pour des capteurs de température et le pilotage d\'un moteur "pas à pas"',
      'Optimisation et étude de la consommation et de l\'autonomie du produit'
    ],
    technologies: ['C', 'I2C', 'Capteurs température', 'Moteur pas à pas', 'Optimisation énergétique']
  },
  {
    id: '6',
    title: 'Ingénieur d\'étude en informatique industrielle pour Thales ITS',
    company: 'Apside',
    period: 'Décembre 2017 - Décembre 2018',
    location: 'Cholet, France',
    contractType: 'CDI',
    logo: '/logos/apside.jpg',
    description: 'Dans le cadre du projet Européen Galileo, développement et tests d\'une application pour un composant français de réception.',
    actions: [
      'Développement de tests pour un logiciel embarqué d\'ordonnancement sur un ASIC, intégrant un cœur de processeur Leon 4 (Sparc V8)',
      'Développement de correctifs de sécurité HW/SW sur la couche bas-niveau du composant'
    ],
    technologies: ['C', 'ASIC', 'Leon 4', 'Sparc V8', 'Tests embarqués', 'Sécurité HW/SW', 'Galileo']
  },
  {
    id: '7',
    title: 'Stage de fin d\'études',
    company: 'Sopra Steria',
    period: 'Mars 2017 - Août 2017',
    location: 'Carquefou, France',
    contractType: 'Stage',
    logo: '/logos/sopra-steria.png',
    description: 'Développement d\'un outil de qualification logiciel en PHP Symfony et shell sous Linux.',
    actions: [
      'Transformation de données COBOL et développement spécifié d\'outils techniques et fonctionnels'
    ],
    technologies: ['PHP', 'Symfony', 'Shell', 'PostgreSQL', 'Java EE', 'COBOL', 'Linux']
  }
]

// Education
export const education: Education[] = [
  {
    id: '1',
    degree: 'Spécialisation Systèmes Embarqués Temps Réel',
    school: 'Polytech Nantes',
    period: 'Octobre 2016 - Février 2017',
    description: 'Spécialisation de fin de cycle ingénieur ETN (Électronique et Technologies Numériques). Conception de systèmes Temps Réel, Linux embarqué, conception de circuits ASICs et FPGA, approche système, architecture logiciel et modélisation.'
  },
  {
    id: '2', 
    degree: 'Cycle Ingénieur - Électronique et Technologies Numériques',
    school: 'Polytech Nantes',
    period: 'Septembre 2014 - Mai 2016',
    description: '1ère et 2ème année du cycle ingénieur ETN. Électronique analogique et numérique, traitement du signal, systèmes à microprocesseur ARMv7, électronique hautes fréquences, conception de circuits.'
  },
  {
    id: '3',
    degree: 'L2 MPMC - PEIP (Cycle préparatoire)',
    school: 'Université de Nantes / Polytech Nantes',
    period: 'Septembre 2012 - Juin 2014',
    description: 'Cycle préparatoire aux écoles d\'ingénieur Polytech. L1 Maths Informatique Physique Chimie, L2 Maths, Physique, Mécanique, Chimie.'
  },
  {
    id: '4',
    degree: 'Terminal Scientifique SI',
    school: 'Lycée St Gabriel/St Michel',
    period: 'Septembre 2011 - Juin 2012',
    description: 'Baccalauréat Scientifique spécialité Sciences de l\'Ingénieur et Mathématiques. Option Musique.'
  }
]

// Skills by Category
export const skillCategories = [
  {
    name: {
      fr: 'Langages de programmation',
      en: 'Programming Languages'
    },
    skills: ['C', 'Rust', 'C++', 'Python', 'Shell/Bash', 'Assembleur (ARM V7, ARM Cortex)', 'VHDL', 'SystemC', 'Java EE', 'JavaScript', 'PHP', 'C# (Unity 3D)', 'Flutter/Dart']
  },
  {
    name: {
      fr: 'Systèmes embarqués',
      en: 'Embedded Systems'
    },
    skills: ['Linux embarqué', 'Linux Yocto', 'FreeRTOS', 'ARM Cortex M0', 'PIC32', 'ASIC', 'FPGA', 'I2C/UART/GPIO', 'Leon 4 (Sparc V8)', 'EnOcean', 'Device Tree']
  },
  {
    name: {
      fr: 'DevOps & Cloud',
      en: 'DevOps & Cloud'
    },
    skills: ['Docker', 'GitHub Actions', 'Jenkins', 'CI/CD', 'Terraform', 'Ansible', 'Vault', 'AWS', 'GCP', 'Azure', 'Git']
  },
  {
    name: {
      fr: 'Protocoles & Communication',
      en: 'Protocols & Communication'
    },
    skills: ['MQTT', 'RabbitMQ', 'ZMQ', 'Protobuf', 'BLE', 'Stratum', 'EnOcean', 'MSC/VLD/4BS']
  },
  {
    name: {
      fr: 'Outils de développement',
      en: 'Development Tools'
    },
    skills: ['VSCode', 'Eclipse', 'GCC', 'CppCheck', 'Maven', 'Maturin', 'Pyo3', 'Ubuntu', 'Linux']
  },
  {
    name: {
      fr: 'Bases de données',
      en: 'Databases'
    },
    skills: ['PostgreSQL', 'Oracle SQL', 'SQLite']
  },
  {
    name: {
      fr: 'Technologies spécialisées',
      en: 'Specialized Technologies'
    },
    skills: ['Bitcoin Mining', 'SHA-256', 'Blockchain', 'CGMiner', 'BM1397 ASIC', 'Galileo', 'Robotique autonome']
  }
]

// Languages Spoken
export const languages = [
  {
    name: 'Français',
    level: {
      fr: 'Langue maternelle',
      en: 'Native'
    }
  },
  {
    name: 'English',
    level: {
      fr: 'Courant (TOEIC: 875, Certificat Erasmus: C1)',
      en: 'Fluent (TOEIC: 875, Erasmus Certificate: C1)'
    }
  },
  {
    name: 'Español',
    level: {
      fr: 'Intermédiaire',
      en: 'Intermediate'
    }
  }
]

// Certifications
export const certifications = [
  {
    id: '1',
    name: 'TOEIC',
    issuer: 'ETS',
    date: '2014',
    score: '875/990'
  },
  {
    id: '2',
    name: 'Certificat Erasmus',
    issuer: 'Programme Erasmus',
    date: '2016',
    level: 'C1'
  }
]

// Additional sections
export const achievements = [
  'Membre de Mensa France',
  'Participation à la coupe de France de robotique 2018',
  'Responsable communication pour le bureau des étudiants (2015-2016)',
  'Création du club photo de Polytech Nantes (2016)',
  'Reverse engineering ASIC BM1397 sans documentation officielle',
  'Réécriture complète de CGMiner en Rust optimisé',
  'Migration Yocto 4.0 Kirkstone vers 5.0 Scarthgap',
  'Formation entreprise sur IAM (Identity & Access Management)'
]

export const interests = [
  {
    category: {
      fr: 'Musique',
      en: 'Music'
    },
    items: ['Guitare', 'Batterie et Percussion Africaine', 'Piano']
  },
  {
    category: {
      fr: 'Associations & Compétitions',
      en: 'Associations & Competitions'
    },
    items: ['Mensa France', 'Coupe de France de robotique', 'Bureau des étudiants', 'Club photo']
  },
  {
    category: {
      fr: 'Technologies',
      en: 'Technology'
    },
    items: ['Systèmes embarqués', 'Blockchain', 'Reverse engineering', 'Open source']
  }
]