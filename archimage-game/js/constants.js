// js/constants.js - Константы игры

export const ELEMENTS = {
    FIRE: 'fire',
    WATER: 'water',
    EARTH: 'earth',
    AIR: 'air'
};

export const ELEMENT_COLORS = {
    [ELEMENTS.FIRE]: 0xff4500,
    [ELEMENTS.WATER]: 0x1e90ff,
    [ELEMENTS.EARTH]: 0x228b22,
    [ELEMENTS.AIR]: 0x87ceeb
};

export const GAME_CONFIG = {
    MAX_HAND_SIZE: 8,
    MAX_MANA: 10,
    STARTING_MANA: 1,
    MANA_PER_TURN: 1,
    BOARD_ROWS: 2,
    BOARD_SLOTS_PER_ROW: 10,
    INITIAL_CARDS: 4,
    CARDS_PER_TURN: 1
};

export const CARD_TYPES = {
    CREATURE: 'creature',
    SPELL: 'spell',
    ENCHANTMENT: 'enchantment'
};

export const GEOMETRY_TYPES = {
    BOX: 'box',
    SPHERE: 'sphere',
    CYLINDER: 'cylinder',
    CONE: 'cone',
    TORUS: 'torus',
    OCTAHEDRON: 'octahedron'
};
