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
    render() {
        const p = document.createElement('p');
        p.textContent = this.text;
        return p;
    }
}
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