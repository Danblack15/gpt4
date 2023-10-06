export class Parallax {
    constructor(el) {
        this.$element = el;
        this.type = el.dataset.parallax;
        this.x = null;
        this.y = null;
        this.length = 100;
    }
  
    init() {
        document.addEventListener('mousemove', event => {
            this.x = event.clientX / this.length;
            this.y = event.clientY / this.length;
        });

        document.addEventListener('mousemove', () => {
            switch(this.type) {
            case 'mouse':
                this.mouse();
                break;
            case 'mouse-reverse':
                this.mouserReverse();
                break;
            default:
                return;
            }
        });
    }

    mouse() {
        this.$element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    mouserReverse() {
        this.$element.style.transform = `translate(-${this.x}px, -${this.y}px)`;
    }
}
  