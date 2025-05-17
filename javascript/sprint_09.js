"use strict";
class Paragraph_01 {
    text;
    render() {
        const p = document.createElement('p');
        p.textContent = this.text;
        return p;
    }
}
const p_01 = new Paragraph_01();
p_01.text = 'A paragraph is a series of sentences that are organized and coherent.';
document.querySelector('.out-1').append(p_01.render());
class Paragraph_02 {
    text;
    constructor(text) {
        this.text = text;
    }
    render() {
        const p = document.createElement('p');
        p.textContent = this.text;
        return p;
    }
}
const p_02 = new Paragraph_02('В раю без изменений.');
document.querySelector('.out-2').append(p_02.render());
class Paragraph_03 {
    text;
    bold = false;
    constructor(text, bold) {
        this.text = text;
        this.bold = bold;
    }
    render() {
        const p = document.createElement('p');
        if (this.bold) {
            const b = document.createElement('b');
            b.textContent = this.text;
            p.append(b);
        }
        else {
            p.textContent = this.text;
        }
        return p;
    }
}
const p_03 = new Paragraph_03('Земля – это память, за которую стоит бороться.', true);
document.querySelector('.out-3').append(p_03.render());
const p_04 = new Paragraph_03('Земля – это память, за которую стоит бороться.');
document.querySelector('.out-4').append(p_04.render());
class Paragraph_05 {
    text;
    bold = false;
    constructor(text, bold) {
        this.text = text.trim();
        this.bold = bold;
    }
    render() {
        const p = document.createElement('p');
        const capital = this.text.charAt(0).toUpperCase() + this.text.slice(1);
        if (this.bold) {
            const b = document.createElement('b');
            b.textContent = capital;
            p.append(b);
        }
        else {
            p.textContent = capital;
        }
        return p;
    }
}
const p_05 = new Paragraph_05('  и смерти нет почётней той, что ты принять готов за кости пращуров своих, за храм своих богов.  ', true);
document.querySelector('.out-5').append(p_05.render());
class ParagraphExample {
    text;
    wrap;
    constructor({ text, wrap }) {
        this.text = text;
        this.wrap = wrap;
    }
    render() {
        const elem = document.createElement(this.wrap);
        elem.textContent = this.text;
        return elem;
    }
}
const obj_06 = {
    text: 'Если у нас правда есть души, они сотканы из любви...',
    wrap: 'div'
};
const p_06 = new ParagraphExample(obj_06);
console.log(p_06);
document.querySelector('.out-6').append(p_06.render());
class List_07 {
    data;
    constructor(data) {
        this.data = data;
    }
    render() {
        const ul = document.createElement('ul');
        for (let item of this.data) {
            const li = document.createElement('li');
            li.textContent = item;
            ul.append(li);
        }
        return ul;
    }
}
const ul_07 = new List_07(['Нужно работать, а не вспоминать.', 'Даже у оружия нервы не в порядке.']);
console.log(ul_07);
document.querySelector('.out-7').append(ul_07.render());
class List_08 {
    data;
    constructor(data) {
        this.data = data;
    }
    render() {
        const ul = document.createElement('ul');
        for (let item of this.data) {
            const li = document.createElement('li');
            li.textContent = item;
            ul.append(li);
        }
        return ul;
    }
}
//# sourceMappingURL=sprint_09.js.map