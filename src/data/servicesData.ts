import { ServiceItem, BeforeAfterItem } from '../types';

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'exterior-wash',
    name: {
      es: 'Lavado Exterior',
      en: 'Exterior Wash'
    },
    shortDesc: {
      es: 'Limpieza exterior móvil minuciosa que devuelve el brillo original a tu carrocería.',
      en: 'Thorough mobile exterior cleaning that restores the original shine to your vehicle body.'
    },
    description: {
      es: 'Limpieza exterior detallada a mano con productos de alta lubricación que protegen la pintura. Incluye limpieza profunda de rines, desengrasado de neumáticos con abrillantador satinado, cristales exteriores impecables y secado cuidadoso con microfibra premium.',
      en: 'Hand-crafted exterior detailing using high-lubricity formulas that preserve your clear coat. Includes deep wheel cleaning, tire dressing, streak-free exterior windows, and scratch-free microfiber towel dry.'
    },
    startingPrice: 50,
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=900&q=80',
    features: {
      es: [
        'Prelavado espumoso activo',
        'Lavado suave a mano de carrocería',
        'Limpieza de rines y llantas',
        'Abrillantador protector de neumáticos',
        'Cristales exteriores sin marcas',
        'Secado técnico con microfibra ultra-absorbente'
      ],
      en: [
        'Active foam pre-soak treatment',
        'Gentle hand wash of vehicle exterior',
        'Deep wheel face and tire rim wash',
        'Satin tire dressing protection',
        'Streak-free exterior glass cleaning',
        'Safe dry with ultra-absorbent microfiber towels'
      ]
    },
    badge: {
      es: 'Popular',
      en: 'Popular'
    }
  },
  {
    id: 'interior-cleaning',
    name: {
      es: 'Limpieza Interior',
      en: 'Interior Cleaning'
    },
    shortDesc: {
      es: 'Aspirado profundo y reacondicionamiento de superficies para un habitáculo fresco y limpio.',
      en: 'Deep vacuuming and surface reconditioning for a spotless, fresh cabin environment.'
    },
    description: {
      es: 'Aspirado exhaustivo de alfombras, tapetes, asientos y maletero. Limpieza meticulosa de tablero, consola central, portavasos y paneles de puertas con cepillos de detalle y limpiadores con protección UV. Cristales interiores libres de marcas y desodorización fresca.',
      en: 'Exhaustive vacuuming of carpets, mats, seats, and trunk. Detailed brush cleaning of dash, center console, cup holders, and door cards with UV-protectant conditioner. Streak-free interior glass and fresh deodorization.'
    },
    startingPrice: 60,
    image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=900&q=80',
    features: {
      es: [
        'Aspirado minucioso de cabina y maletero',
        'Limpieza de tapetes de goma o tela',
        'Detallado de tablero, rejillas y consola',
        'Acondicionado con acabado mate no graso',
        'Cristales y espejos interiores',
        'Aroma fresco y agradable'
      ],
      en: [
        'Detailed cabin & trunk vacuuming',
        'Floor mats sanitized & cleaned',
        'Dashboard, air vents & console detailing',
        'Non-greasy UV surface conditioner',
        'Crystal-clear interior glass & mirrors',
        'Subtle fresh vehicle fragrance'
      ]
    }
  },
  {
    id: 'interior-exterior',
    name: {
      es: 'Interior + Exterior',
      en: 'Interior + Exterior Full'
    },
    shortDesc: {
      es: 'El servicio integral preferido: cuidado completo por dentro y por fuera sin moverte de donde estés.',
      en: 'Our premier all-around service: comprehensive care inside and outside without leaving home.'
    },
    description: {
      es: 'La combinación perfecta de nuestro Lavado Exterior y Limpieza Interior. Una renovación visual completa que deja tu automóvil listo para cualquier ocasión, cuidando cada rincón interior y exterior con atención profesional.',
      en: 'The complete synergy of our Exterior Wash and Interior Cleaning. A total transformation that prepares your vehicle for any occasion, attending to every interior corner and exterior surface.'
    },
    startingPrice: 90,
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=900&q=80',
    features: {
      es: [
        'Todo lo incluido en Lavado Exterior',
        'Todo lo incluido en Limpieza Interior',
        'Limpieza de marcos y bordes de puertas',
        'Limpieza y abrillantado de molduras exteriores',
        'Inspección final de calidad paso a paso'
      ],
      en: [
        'Everything included in Exterior Wash',
        'Everything included in Interior Cleaning',
        'Door jambs and trunk seals cleaned',
        'Exterior trim dressing and restoration',
        'Complete quality inspection guarantee'
      ]
    },
    badge: {
      es: 'Recomendado',
      en: 'Best Value'
    }
  },
  {
    id: 'wax-protection',
    name: {
      es: 'Encerado / Protección',
      en: 'Wax & Paint Protection'
    },
    shortDesc: {
      es: 'Mejora el brillo profundo y crea una barrera hidrofóbica protectora contra el sol de Tampa.',
      en: 'Enhance high-gloss depth and build a hydrophobic shield against harsh Florida sun and rain.'
    },
    description: {
      es: 'Servicio orientado a maximizar el brillo y proteger el barniz contra la radiación UV, lluvia ácida e insectos de Florida. Aplicación de sellador sintético o cera de carnauba premium de alta durabilidad con acabado espejo.',
      en: 'Engineered to maximize gloss and shield paint against Florida UV rays, bug splatter, and water spotting. Precision application of premium synthetic sealant or carnauba wax with mirror finish.'
    },
    startingPrice: 110,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=80',
    features: {
      es: [
        'Lavado y descontaminación superficial ligera',
        'Aplicación a mano de cera o sellador de alta gama',
        'Efecto hidrofóbico repelente al agua',
        'Intensificación del color y reflejo espejo',
        'Protección extendida contra rayos solares UV'
      ],
      en: [
        'Decontamination hand wash prep',
        'Hand application of premium sealant or wax',
        'Water-beading hydrophobic barrier',
        'Rich color depth and mirror reflection',
        'UV barrier against Florida sun wear'
      ]
    }
  },
  {
    id: 'fleet-service',
    name: {
      es: 'Servicio para Flotas',
      en: 'Fleet Services'
    },
    shortDesc: {
      es: 'Atención móvil programada para empresas, vans de trabajo, vehículos comerciales y ejecutivos.',
      en: 'On-site scheduled mobile detailing for companies, work vans, commercial and corporate fleets.'
    },
    description: {
      es: 'Mantenemos la imagen profesional de tu negocio en movimiento. Vamos directamente a las instalaciones de tu empresa en Tampa con horarios flexibles (temprano en la mañana, fines de semana o después de horas de trabajo) para no interrumpir tus operaciones comerciales.',
      en: 'Keep your business looking sharp on the road. We come directly to your company premises across Tampa with flexible scheduling (early mornings, weekends, or after-hours) without disrupting operations.'
    },
    startingPrice: 0, // Quote based
    image: 'https://images.unsplash.com/photo-1558441719-5a5078512532?auto=format&fit=crop&w=900&q=80',
    features: {
      es: [
        'Atención en las instalaciones de tu empresa',
        'Horarios adaptados a tu operación de trabajo',
        'Facturación corporativa clara y transparente',
        'Planes únicos, semanales, quincenales o mensuales',
        'Vans, pick-ups, sedanes y vehículos de entrega'
      ],
      en: [
        'On-site servicing at your commercial lot',
        'Flexible hours built around business shift times',
        'Transparent corporate itemized invoicing',
        'One-time, weekly, bi-weekly, or monthly intervals',
        'Vans, delivery trucks, work pickups and sedans'
      ]
    },
    badge: {
      es: 'Empresarial',
      en: 'Commercial'
    }
  }
];

export const UPCOMING_SERVICES = [
  {
    id: 'paint-correction',
    name: { es: 'Corrección de Pintura', en: 'Paint Correction' },
    desc: { es: 'Eliminación de micro-rayones (swirls) y marcas para recuperar la claridad óptica.', en: 'Swirl and scratch removal to restore optical clarity.' }
  },
  {
    id: 'ceramic-coating',
    name: { es: 'Ceramic Coating', en: 'Ceramic Coating' },
    desc: { es: 'Protección cerámica nanométrica de alta resistencia y duración prolongada.', en: 'Nano-ceramic protective barrier with extreme longevity.' }
  },
  {
    id: 'headlight-restoration',
    name: { es: 'Restauración de Faros', en: 'Headlight Restoration' },
    desc: { es: 'Eliminación de amarilleo y opacidad con sellador UV para máxima visión nocturna.', en: 'Oxidation removal and UV seal for night driving clarity.' }
  },
  {
    id: 'deep-steam',
    name: { es: 'Desinfección con Vapor Interior', en: 'Interior Steam Sanitization' },
    desc: { es: 'Vapor a alta temperatura para eliminar bacterias y revitalizar fibras.', en: 'High-temperature steam treatment to sanitize fabrics.' }
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'ba-paint',
    category: 'paint',
    title: {
      es: 'Restauración de Brillo en Pintura Negra',
      en: 'Deep Gloss Restoration on Black Finish'
    },
    description: {
      es: 'Pintura opacada por el sol de Florida y marcas de agua restaurada a un acabado cristalino con reflejo espejo.',
      en: 'Sun-dull paint and water spots restored to a crystal mirror reflection.'
    },
    beforeImage: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ba-wheels',
    category: 'wheels',
    title: {
      es: 'Rines con Polvo de Freno Acumulado',
      en: 'Brake Dust Rim Decontamination'
    },
    description: {
      es: 'Desincrustación profunda de polvo de frenos ferrosos, abrillantado y protección hidrofóbica en neumáticos.',
      en: 'Deep chemical iron decontamination of wheels, tire satin dressing and protective seal.'
    },
    beforeImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ba-interior',
    category: 'interior',
    title: {
      es: 'Detallado de Cabina y Consola Central',
      en: 'Cockpit & Center Console Detailing'
    },
    description: {
      es: 'Limpieza de cada ranura, botonera y rejillas con cepillos de precisión y acondicionador mate UV.',
      en: 'Cleaned every crease, switch, and vent with precision brushes and UV matte conditioner.'
    },
    beforeImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ba-upholstery',
    category: 'upholstery',
    title: {
      es: 'Limpieza Profunda de Asientos y Tapicería',
      en: 'Deep Upholstery & Seat Clean'
    },
    description: {
      es: 'Extracción de suciedad y manchas leves en tapicería dejando la textura suave y desodorizada.',
      en: 'Dirt extraction on seating surfaces, leaving textures soft and deodorized.'
    },
    beforeImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ba-exterior',
    category: 'exterior',
    title: {
      es: 'Lavado Exterior Espumoso & Detallado',
      en: 'Foam Hand Wash & Exterior Detail'
    },
    description: {
      es: 'Carrocería con suciedad del camino lavada con espuma densa y secada sin una sola marca.',
      en: 'Road grime safely lifted with thick foam and dried scratch-free to high gloss.'
    },
    beforeImage: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ba-full',
    category: 'full',
    title: {
      es: 'Transformación Completa de SUV Familiar',
      en: 'Complete Family SUV Transformation'
    },
    description: {
      es: 'Servicio combinado interior y exterior completo: de vehículo de uso diario a brillo de exhibición.',
      en: 'Full inside-out service: from daily driver wear to showroom-ready brilliance.'
    },
    beforeImage: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
  }
];

export const TAMPA_AREAS = [
  'Downtown Tampa',
  'South Tampa',
  'Ybor City',
  'Westshore District',
  'Hyde Park',
  'Channelside',
  'Tampa Heights',
  'Carrollwood',
  'Brandon',
  'Riverview',
  'Temple Terrace',
  'Town \'n\' Country',
  'New Tampa',
  'Citrus Park',
  'Lutz',
  'Wesley Chapel (Sur)'
];
