// js/Card.js - Класс карты

import { ELEMENTS, CARD_TYPES, GEOMETRY_TYPES } from './constants.js';

export class Card {
    constructor(id, name, cost, elements, attack, health, type, description, effect, geometryType) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.elements = elements; // Объект {fire: 2, air: 1}
        this.attack = attack;
        this.health = health;
        this.currentHealth = health;
        this.type = type;
        this.description = description;
        this.effect = effect;
        this.geometryType = geometryType;
        this.onBoard = false;
        this.canAttack = true;
        this.position = null; // {row, slot}
    }

    getElementCount(element) {
        return this.elements[element] || 0;
    }

    getTotalElementCost() {
        return Object.values(this.elements).reduce((sum, val) => sum + val, 0);
    }

    hasElement(element) {
        return this.elements[element] > 0;
    }

    isDead() {
        return this.currentHealth <= 0;
    }

    damage(amount) {
        this.currentHealth -= amount;
        return this.isDead();
    }

    heal(amount) {
        this.currentHealth = Math.min(this.health, this.currentHealth + amount);
    }

    resetForTurn() {
        this.canAttack = true;
    }

    clone() {
        return new Card(
            this.id,
            this.name,
            this.cost,
            {...this.elements},
            this.attack,
            this.health,
            this.type,
            this.description,
            this.effect,
            this.geometryType
        );
    }
}

// Фабрика для создания карт из базы данных
export class CardFactory {
    static createFromData(cardData) {
        return new Card(
            cardData.id,
            cardData.name,
            cardData.cost,
            cardData.elements,
            cardData.attack,
            cardData.health,
            cardData.type,
            cardData.description,
            cardData.effect,
            cardData.geometryType
        );
    }
}
