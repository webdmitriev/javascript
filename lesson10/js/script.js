class options {
    constructor(height = '400px', width = '400px', bg = 'green', fontSize = '20px', textAlign = 'justify') {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        console.log('Создан новый экземпляр options!')
    }
    createDiv(text) {
        let div = document.createElement('div');
        div.style.display = 'inline-block';
        div.style.height = this.height;
        div.style.width = this.width;
        div.style.backgroundColor = this.bg;
        div.style.fontSize = this.fontSize;
        div.style.textAlign = this.textAlign;
        div.textContent= text;
        document.body.appendChild(div);
    }
}
let block = new options('100px', '100px', '#ccc', '25px', 'center');
block.createDiv('Hello world');
console.log(block);
