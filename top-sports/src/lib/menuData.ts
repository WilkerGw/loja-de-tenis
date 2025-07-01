// src/lib/menuData.ts

// Primeiro, definimos os tipos para nossos itens de menu para aproveitar o TypeScript
export interface MenuItem {
  title: string;
  path: string;
  subItems?: MenuItem[]; // O '?' indica que subItems é opcional
}

// Agora, criamos a estrutura do menu como uma constante
export const menuItems: MenuItem[] = [
  {
    title: 'Esportes',
    path: '/esportes',
    subItems: [
      { title: 'Futebol', path: '/esportes/futebol' },
      { title: 'Basquete', path: '/esportes/basquete' },
      { title: 'Vôlei', path: '/esportes/volei' },
      { title: 'Natação', path: '/esportes/natacao' },
      { title: 'Corrida', path: '/esportes/corrida' },
      { title: 'Ciclismo', path: '/esportes/ciclismo' },
      { title: 'Musculação / Academia', path: '/esportes/academia' },
    ],
  },
  {
    title: 'Roupas',
    path: '/roupas',
    subItems: [
      { title: 'Camisetas', path: '/roupas/camisetas' },
      { title: 'Bermudas', path: '/roupas/bermudas' },
      { title: 'Leggings', path: '/roupas/leggings' },
      { title: 'Jaquetas', path: '/roupas/jaquetas' },
      { title: 'Uniformes Esportivos', path: '/roupas/uniformes' },
    ],
  },
  {
    title: 'Calçados',
    path: '/calcados',
    subItems: [
      { title: 'Tênis de Corrida', path: '/calcados/tenis-corrida' },
      { title: 'Chuteiras', path: '/calcados/chuteiras' },
      { title: 'Sandálias Esportivas', path: '/calcados/sandalias' },
    ],
  },
  {
    title: 'Acessórios',
    path: '/acessorios',
    subItems: [
      { title: 'Mochilas', path: '/acessorios/mochilas' },
      { title: 'Bonés', path: '/acessorios/bones' },
      { title: 'Luvas', path: '/acessorios/luvas' },
      { title: 'Meias', path: '/acessorios/meias' },
      { title: 'Garrafas / Squeezes', path: '/acessorios/garrafas' },
    ],
  },
  {
    title: 'Equipamentos',
    path: '/equipamentos',
    subItems: [
      { title: 'Bolas', path: '/equipamentos/bolas' },
      { title: 'Redes', path: '/equipamentos/redes' },
      { title: 'Pesos e Halteres', path: '/equipamentos/pesos' },
      { title: 'Colchonetes', path: '/equipamentos/colchonetes' },
      { title: 'Óculos de Natação', path: '/equipamentos/oculos-natacao' },
    ],
  },
];