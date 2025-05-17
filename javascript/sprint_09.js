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
//# sourceMappingURL=sprint_09.js.map