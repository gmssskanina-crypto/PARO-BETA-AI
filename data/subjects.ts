import { SubjectData } from '../types';

type SubjectCollection = {
  [key: string]: SubjectData;
};

export const subjectData: SubjectCollection = {
  physics: {
    id: 'physics',
    name: 'Physics',
    categories: [
      {
        title: 'Chapters',
        chapters: [
          { name: 'Electric Charges and Fields', notesHref: 'https://drive.google.com/file/d/1NA6ugl2z76sq99xytd_TiePu91U1jW_R/view', ncertHref: 'https://ncert.nic.in/textbook/pdf/leph101.pdf' },
          { name: 'Electrostatic Potential and Capacitance', notesHref: 'https://drive.google.com/file/d/1NKSu7xRHupIPLy-VXgmxvukzSzhyQkyR/view', ncertHref: 'https://ncert.nic.in/textbook/pdf/leph102.pdf' },
          { name: 'Current Electricity', notesHref: 'https://drive.google.com/file/d/1NKupP-g2uEZhd6NDhhSVBwUHJmuR2gGP/view', ncertHref: 'https://ncert.nic.in/textbook/pdf/leph103.pdf' },
          { name: 'Moving Charges and Magnetism', notesHref: 'https://drive.google.com/file/d/1_cHr-3kNaldC-k5ZYj3JztrOOl-Fu8Wg/view', ncertHref: 'https://ncert.nic.in/textbook/pdf/leph104.pdf' },
          { name: 'Magnetism and Matter', notesHref: 'https://drive.google.com/file/d/1apCYtkL4jImyKTCCCjlxucDxCwgY2tUT/view', ncertHref: 'https://ncert.nic.in/textbook/pdf/leph105.pdf' },
          { name: 'Electromagnetic Induction', notesHref: 'https://drive.google.com/file/d/1asxnN5V1HXEPrbxKc8Qyf4iY4BvIP3wv/view', ncertHref: 'https://ncert.nic.in/textbook/pdf/leph106.pdf' },
          { name: 'Alternating Current', notesHref: 'https://drive.google.com/file/d/1d7rCvwxC_u6pULtQj_QXw0QF2R_hNyMP/view', ncertHref: 'https://ncert.nic.in/textbook/pdf/leph107.pdf' },
          { name: 'Electromagnetic Waves', notesHref: 'https://drive.google.com/file/d/1dQljUdjc_5vsDdkxhCPswQKf4vDF517E/view', ncertHref: 'https://ncert.nic.in/textbook/pdf/leph108.pdf' },
          { name: 'Ray Optics and Optical Instruments', ncertHref: 'https://ncert.nic.in/textbook/pdf/leph201.pdf' },
          { name: 'Wave Optics', notesHref: 'https://drive.google.com/file/d/1d6qhQnPCfRvtSSjOH5UCTo-q07TShw0M/view', ncertHref: 'https://ncert.nic.in/textbook/pdf/leph202.pdf' },
          { name: 'Dual Nature of Radiation and Matter', notesHref: 'https://drive.google.com/file/d/1dS78KNHXO6I5ZQToBKEbUibYspO3nr5Y/view', ncertHref: 'https://ncert.nic.in/textbook/pdf/leph203.pdf' },
          { name: 'Atoms', notesHref: 'https://drive.google.com/file/d/1dA_fpP95g49ZG8HT_sgogbdVZqxK2Uyt/view', ncertHref: 'https://ncert.nic.in/textbook/pdf/leph204.pdf' },
          { name: 'Nuclei', notesHref: 'https://drive.google.com/file/d/1dLD9Ip9KeERjX_Zk_PNJjPknKnL6cVIX/view', ncertHref: 'https://ncert.nic.in/textbook/pdf/leph205.pdf' },
          { name: 'Semiconductor Electronics', notesHref: 'https://drive.google.com/file/d/1dIo5VbMSzcZSAqPIi2_Dh7i-wJHEI7tD/view', ncertHref: 'https://ncert.nic.in/textbook/pdf/leph206.pdf' },
        ],
      },
    ],
  },
  chemistry: {
    id: 'chemistry',
    name: 'Chemistry',
    categories: [
      {
        title: 'Physical Chemistry',
        chapters: [
          { name: 'Solutions', notesHref: 'https://drive.google.com/file/d/1iLB6hJ-IDdxZfR-mYMbefvD4s11w7wXB/view?usp=drive_link', ncertHref: 'https://ncert.nic.in/textbook/pdf/kech101.pdf' },
          { name: 'Electrochemistry', notesHref: 'https://drive.google.com/file/d/1PkivMWQsjVGjGAdUDfXPh9N3UFnPfPx4/view?usp=drive_link', ncertHref: 'https://ncert.nic.in/textbook/pdf/kech102.pdf' },
          { name: 'Chemical Kinetics', notesHref: 'https://drive.google.com/file/d/1Y3EoC9lNDdjXY_WQiUJshLlL7_45mx7o/view?usp=drive_link', ncertHref: 'https://ncert.nic.in/textbook/pdf/kech103.pdf' },
        ],
      },
      {
        title: 'Inorganic Chemistry',
        chapters: [
          { name: 'The d- and f-Block Elements', notesHref: 'https://drive.google.com/file/d/19aYG-Q5KZswY3LuUt5qwNb-q3v719LFO/view?usp=drive_link', ncertHref: 'https://ncert.nic.in/textbook/pdf/kech104.pdf' },
          { name: 'Coordination Compounds', notesHref: 'https://drive.google.com/file/d/1nFjqjWrRWYpFuV91weiz5iZDDj5f3MIo/view?usp=drive_link', ncertHref: 'https://ncert.nic.in/textbook/pdf/kech105.pdf' },
        ],
      },
      {
        title: 'Organic Chemistry',
        chapters: [
          { name: 'General Organic Chemistry', notesHref: 'https://drive.google.com/file/d/1HZCsIX8TbcZUB_RjSlGWM1XA6n5qdtj1/view?usp=drivesdk', ncertHref: 'https://ncert.nic.in/textbook/pdf/kech101.pdf' },
          { name: 'Haloalkanes and Haloarenes', notesHref: 'https://drive.google.com/file/d/1_qAm3XXnAtl3zI8OW1s28NTXvINbc_8Q/view?usp=drive_link', ncertHref: 'https://ncert.nic.in/textbook/pdf/kech201.pdf' },
          { name: 'Alcohols, Phenols and Ethers', notesHref: 'https://drive.google.com/file/d/1QRnIrtN8Mdbndu47jtkL_lXhL1PdcHBU/view?usp=drive_link', ncertHref: 'https://ncert.nic.in/textbook/pdf/kech202.pdf' },
          { name: 'Aldehydes, Ketones and Carboxylic Acids', notesHref: 'https://drive.google.com/file/d/1xOT-_vtqtq9Ii168tAHeKz1mKnsbLh5s/view?usp=drive_link', ncertHref: 'https://ncert.nic.in/textbook/pdf/kech203.pdf' },
          { name: 'Amines', notesHref: 'https://drive.google.com/file/d/1VgJZNbUlFBkYVjpSJjORrdmaQFU-h2_4/view?usp=drive_link', ncertHref: 'https://ncert.nic.in/textbook/pdf/kech204.pdf' },
          { name: 'Biomolecules', notesHref: 'https://drive.google.com/file/d/1vL65D2Uvv-4xe4ZaFxx8vQXlYSGxGz9v/view?usp=drive_link', ncertHref: 'https://ncert.nic.in/textbook/pdf/kech205.pdf' },
        ],
      },
    ],
  },
   biology: {
    id: 'biology',
    name: 'Biology',
    categories: [
      {
        title: 'Chapters',
        chapters: [
          { name: 'Reproduction in Organisms' },
          { name: 'Sexual Reproduction in Flowering Plants' },
          { name: 'Human Reproduction' },
          { name: 'Reproductive Health' },
          { name: 'Principles of Inheritance and Variation' },
          { name: 'Molecular Basis of Inheritance' },
          { name: 'Evolution' },
          { name: 'Human Health and Disease' },
          { name: 'Strategies for Enhancement in Food Production' },
          { name: 'Microbes in Human Welfare' },
          { name: 'Biotechnology: Principles and Processes' },
          { name: 'Biotechnology and its Applications' },
          { name: 'Organisms and Populations' },
          { name: 'Ecosystem' },
          { name: 'Biodiversity and Conservation' },
          { name: 'Environmental Issues' },
        ],
      },
    ],
  },
  mathematics: {
    id: 'mathematics',
    name: 'Mathematics',
    categories: [
      {
        title: 'Chapters',
        chapters: [
          { name: 'Relations and Functions' },
          { name: 'Inverse Trigonometric Functions' },
          { name: 'Matrices' },
          { name: 'Determinants' },
          { name: 'Continuity and Differentiability' },
          { name: 'Application of Derivatives' },
          { name: 'Integrals' },
          { name: 'Application of Integrals' },
          { name: 'Differential Equations' },
          { name: 'Vector Algebra' },
          { name: 'Three Dimensional Geometry' },
          { name: 'Linear Programming' },
          { name: 'Probability' },
        ],
      },
    ],
  },
  history: {
    id: 'history',
    name: 'History',
    allNotesHref: 'https://www.eklavyastudypoint.com/p/history-chapter-wise-pdf.html',
    categories: [
      {
        title: 'Book 1: Themes in Indian History Part I',
        chapters: [
          { name: 'Bricks, Beads and Bones: The Harappan Civilisation', ncertHref: 'https://ncert.nic.in/textbook/pdf/lehs101.pdf' },
          { name: 'Kings, Farmers and Towns: Early States and Economies', ncertHref: 'https://ncert.nic.in/textbook/pdf/lehs102.pdf' },
          { name: 'Kinship, Caste and Class: Early Societies', ncertHref: 'https://ncert.nic.in/textbook/pdf/lehs103.pdf' },
          { name: 'Thinkers, Beliefs and Buildings: Cultural Developments', ncertHref: 'https://ncert.nic.in/textbook/pdf/lehs104.pdf' },
        ],
      },
      {
        title: 'Book 2: Themes in Indian History Part II',
        chapters: [
          { name: 'Through the Eyes of Travellers: Perceptions of Society', ncertHref: 'https://ncert.nic.in/textbook/pdf/lehs201.pdf' },
          { name: 'Bhakti-Sufi Traditions: Changes in Religious Beliefs and Devotional Texts', ncertHref: 'https://ncert.nic.in/textbook/pdf/lehs202.pdf' },
          { name: 'An Imperial Capital: Vijayanagara', ncertHref: 'https://ncert.nic.in/textbook/pdf/lehs203.pdf' },
        ],
      },
      {
        title: 'Book 3: Themes in Indian History Part III',
        chapters: [
          { name: 'Colonialism and the Countryside: Exploring Official Archives', ncertHref: 'https://ncert.nic.in/textbook/pdf/lehs302.pdf' },
          { name: 'Rebels and the Raj: 1857 Revolt and its Representations', ncertHref: 'https://ncert.nic.in/textbook/pdf/lehs303.pdf' },
          { name: 'Mahatma Gandhi and the Nationalist Movement: Civil Disobedience and Beyond', ncertHref: 'https://ncert.nic.in/textbook/pdf/lehs305.pdf' },
          { name: 'Framing the Constitution: The Beginning of a New Era', ncertHref: 'https://ncert.nic.in/textbook/pdf/lehs307.pdf' },
        ],
      },
    ],
  },
  'political-science': {
    id: 'political-science',
    name: 'Political Science',
    allNotesHref: [
      { label: 'View Notes (Drive)', href: 'https://drive.google.com/file/d/17QM13j-3H9OA6up2vSIEsshtAnIREf-G/view?usp=drivesdk' },
      { label: 'View Notes (Eklavya)', href: 'https://www.eklavyastudypoint.com/p/political-science-chapter-wise-pdf.html' },
    ],
    categories: [
      {
        title: 'Book 1: Contemporary World Politics',
        chapters: [
          { name: 'The Cold War Era', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhps101.pdf' },
          { name: 'The End of Bipolarity', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhps102.pdf' },
          { name: 'US Hegemony in World Politics', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhps103.pdf' },
          { name: 'Alternative Centres of Power', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhps104.pdf' },
          { name: 'Contemporary South Asia', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhps105.pdf' },
        ],
      },
      {
        title: 'Book 2: Politics In India Since Independence',
        chapters: [
          { name: 'Challenges of Nation-Building', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhps201.pdf' },
          { name: 'Era of One-Party Dominance', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhps202.pdf' },
          { name: 'Politics of Planned Development', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhps203.pdf' },
          { name: 'India\'s External Relations', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhps204.pdf' },
          { name: 'Challenges to and Restoration of the Congress System', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhps205.pdf' },
        ],
      },
    ],
  },
  geography: {
    id: 'geography',
    name: 'Geography',
     allNotesHref: [
      { label: 'View Notes (Eklavya)', href: 'https://www.eklavyastudypoint.com/p/geography-chapter-wise-pdf.html' },
      { label: 'View Notes (EduStud)', href: 'https://edustud.nic.in/edu/SupportMaterial202425/12/Class12_Geography_HM_optimize.pdf' },
    ],
    categories: [
        {
            title: 'Book 1: Fundamentals of Human Geography',
            chapters: [
                { name: 'Human Geography: Nature and Scope', ncertHref: 'https://ncert.nic.in/textbook/pdf/legy101.pdf'},
                { name: 'The World Population: Distribution, Density and Growth', ncertHref: 'https://ncert.nic.in/textbook/pdf/legy102.pdf'},
                { name: 'Human Development', ncertHref: 'https://ncert.nic.in/textbook/pdf/legy103.pdf'},
                { name: 'Primary Activities', ncertHref: 'https://ncert.nic.in/textbook/pdf/legy104.pdf'},
                { name: 'Secondary Activities', ncertHref: 'https://ncert.nic.in/textbook/pdf/legy105.pdf'}
            ]
        },
        {
            title: 'Book 2: India - People and Economy',
            chapters: [
                { name: 'Population: Distribution, Density, Growth and Composition', ncertHref: 'https://ncert.nic.in/textbook/pdf/legy201.pdf'},
                { name: 'Human Settlements', ncertHref: 'https://ncert.nic.in/textbook/pdf/legy202.pdf'},
                { name: 'Land Resources and Agriculture', ncertHref: 'https://ncert.nic.in/textbook/pdf/legy203.pdf'},
                { name: 'Water Resources', ncertHref: 'https://ncert.nic.in/textbook/pdf/legy204.pdf'},
                { name: 'Planning and Sustainable Development in Indian Context', ncertHref: 'https://ncert.nic.in/textbook/pdf/legy205.pdf'}
            ]
        }
    ]
  },
  sociology: {
    id: 'sociology',
    name: 'Sociology',
    allNotesHref: [
        { label: 'View Notes (Drive)', href: 'https://drive.google.com/file/d/1aK36VsUDEk3KFhe5hB11EnHeAN_OrVki/view?usp=drivesdk' },
        { label: 'View Notes (Eklavya)', href: 'https://www.eklavyastudypoint.com/p/sociology-chapter-wise-pdf.html' }
    ],
    categories: [
        {
            title: 'Book 1: Indian Society',
            chapters: [
                { name: 'Introducing Indian Society', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhsy101.pdf' },
                { name: 'The Demographic Structure of the Indian Society', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhsy102.pdf' },
                { name: 'Social Institutions: Continuity and Change', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhsy103.pdf' },
                { name: 'The Market as a Social Institution', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhsy104.pdf' }
            ]
        },
        {
            title: 'Book 2: Social Change and Development in India',
            chapters: [
                { name: 'Structural Change', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhsy201.pdf' },
                { name: 'Cultural Change', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhsy202.pdf' },
                { name: 'Change and Development in Rural Society', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhsy204.pdf' },
                { name: 'Social Movements', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhsy208.pdf' }
            ]
        }
    ]
  },
  english: {
    id: 'english',
    name: 'English',
    allNotesHref: 'https://drive.google.com/file/d/1XwawGvCQb2mMuy6vKDDsOhGvlRdP5C8s/view?usp=drivesdk',
    categories: [
      {
        title: 'Flamingo',
        chapters: [
          { name: 'The Last Lesson', ncertHref: 'https://ncert.nic.in/textbook/pdf/lefl101.pdf' },
          { name: 'Lost Spring', ncertHref: 'https://ncert.nic.in/textbook/pdf/lefl102.pdf' },
          { name: 'Deep Water', ncertHref: 'https://ncert.nic.in/textbook/pdf/lefl103.pdf' },
          { name: 'The Rattrap', ncertHref: 'https://ncert.nic.in/textbook/pdf/lefl104.pdf' },
          { name: 'Indigo', ncertHref: 'https://ncert.nic.in/textbook/pdf/lefl105.pdf' },
        ],
      },
      {
        title: 'Vistas',
        chapters: [
          { name: 'The Third Level', ncertHref: 'https://ncert.nic.in/textbook/pdf/levs101.pdf' },
          { name: 'The Tiger King', ncertHref: 'https://ncert.nic.in/textbook/pdf/levs102.pdf' },
          { name: 'Journey to the end of the Earth', ncertHref: 'https://ncert.nic.in/textbook/pdf/levs103.pdf' },
          { name: 'The Enemy', ncertHref: 'https://ncert.nic.in/textbook/pdf/levs104.pdf' },
        ],
      },
    ],
  },
  hindi: {
    id: 'hindi',
    name: 'Hindi',
    allNotesHref: [
        { label: 'View Notes (Eklavya)', href: 'https://www.eklavyastudypoint.com/p/12th-class-hindi-chapter-wise-pdf.html' },
        { label: 'View Notes (EduStud)', href: 'https://edustud.nic.in/edu/SupportMaterial202425/12/Class12_Hindi.pdf' }
    ],
    categories: [
        {
            title: 'Aroh (आरोह)',
            chapters: [
                { name: 'हरिवंश राय बच्चन', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhar101.pdf' },
                { name: 'आलोक धन्वा - पतंग', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhar102.pdf' },
                { name: 'कुँवर नारायण - कविता के बहाने', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhar103.pdf' },
                { name: 'रघुवीर सहाय - कैमरे में बंद अपाहिज', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhar104.pdf' },
                { name: 'गजानन माधव मुक्तिबोध - सहर्ष स्वीकारा है', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhar105.pdf' },
                { name: 'महादेवी वर्मा - भक्तिन', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhar111.pdf' }
            ]
        },
        {
            title: 'Vitan (वितान)',
            chapters: [
                { name: 'सिल्वर वैडिंग', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhvt101.pdf' },
                { name: 'जूझ', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhvt102.pdf' },
                { name: 'अतीत में दबे पाँव', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhvt103.pdf' },
                { name: 'डायरी के पन्ने', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhvt104.pdf' }
            ]
        },
         {
            title: 'Antra (अंतरा)',
            chapters: [
                { name: 'जयशंकर प्रसाद', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhga101.pdf' },
                { name: 'सूर्यकांत त्रिपाठी निराला', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhga102.pdf' },
                { name: 'रामचंद्र शुक्ल', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhga112.pdf' }
            ]
        },
        {
            title: 'Antral (अंतराल)',
            chapters: [
                { name: 'सूरदास की झोंपड़ी', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhan101.pdf' },
                { name: 'आरोहण', ncertHref: 'https://ncert.nic.in/textbook/pdf/lhan102.pdf' }
            ]
        }
    ]
  },
  computerscience: {
    id: 'computerscience',
    name: 'Computer Science',
    allNotesHref: 'https://drive.google.com/file/d/1EKfhgPx9iamqIfveHBNvoyXy3EPeu3hn/view?usp=drivesdk',
    categories: [
      {
        title: 'Chapters',
        chapters: [
          { name: 'Exception Handling in Python', ncertHref: 'https://ncert.nic.in/textbook/pdf/lecs101.pdf' },
          { name: 'File Handling in Python', ncertHref: 'https://ncert.nic.in/textbook/pdf/lecs102.pdf' },
          { name: 'Stack', ncertHref: 'https://ncert.nic.in/textbook/pdf/lecs103.pdf' },
          { name: 'Queue', ncertHref: 'https://ncert.nic.in/textbook/pdf/lecs104.pdf' },
          { name: 'Searching', ncertHref: 'https://ncert.nic.in/textbook/pdf/lecs105.pdf' },
          { name: 'Sorting', ncertHref: 'https://ncert.nic.in/textbook/pdf/lecs106.pdf' },
          { name: 'Understanding Data', ncertHref: 'https://ncert.nic.in/textbook/pdf/lecs107.pdf' },
          { name: 'Database Concepts', ncertHref: 'https://ncert.nic.in/textbook/pdf/lecs108.pdf' },
          { name: 'Structured Query Language (SQL)', ncertHref: 'https://ncert.nic.in/textbook/pdf/lecs109.pdf' },
          { name: 'Computer Networks', ncertHref: 'https://ncert.nic.in/textbook/pdf/lecs110.pdf' },
        ],
      },
    ],
  },
  it: {
    id: 'it',
    name: 'Information Technology',
    allNotesHref: [
        { label: 'View Notes (CBSE Skill)', href: 'https://cbseskilleducation.com/information-technology-class-12/' },
        { label: 'View Notes (Drive)', href: 'https://drive.google.com/file/d/1hx-MiNNTBh90A4pnXUOGT0EkRm39LtsP/view?usp=drive_link' }
    ],
    categories: [
        {
            title: 'Subject Specific Skills',
            chapters: [
                { name: 'Database Concepts – RDBMS Tool' },
                { name: 'Operating Web Based Applications' },
                { name: 'Fundamentals of Java programming' },
                { name: 'Work Integrated Learning IT' }
            ]
        }
    ]
  },
  'fine-arts': {
    id: 'fine-arts',
    name: 'Fine Arts',
    allNotesHref: 'https://drive.google.com/file/d/1dMng-kRdkZzosqjVkg-HFdGGHYoRJviI/view?usp=drivesdk',
    categories: [
        {
            title: 'Chapters',
            chapters: [
                { name: 'The Rajasthani School of Miniature Painting', ncertHref: 'https://ncert.nic.in/textbook/pdf/lefa101.pdf' },
                { name: 'The Mughal School of Miniature Painting', ncertHref: 'https://ncert.nic.in/textbook/pdf/lefa102.pdf' },
                { name: 'The Pahari School of Miniature Painting', ncertHref: 'https://ncert.nic.in/textbook/pdf/lefa103.pdf' },
                { name: 'The Deccan School of Miniature Painting', ncertHref: 'https://ncert.nic.in/textbook/pdf/lefa104.pdf' },
                { name: 'The Bengal School and Cultural Nationalism', ncertHref: 'https://ncert.nic.in/textbook/pdf/lefa105.pdf' },
                { name: 'The Modern Indian Art', ncertHref: 'https://ncert.nic.in/textbook/pdf/lefa105.pdf' }
            ]
        }
    ]
  },
};
