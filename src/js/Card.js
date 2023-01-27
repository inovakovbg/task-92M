import classNames from "classnames";
import EventEmitter from "eventemitter3";
import Notification from './Notification';


export default class Card extends EventEmitter {
  static get events() {
    return {
      ADD_TO_CART: "add to cart",
    };
  }

  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor({ type, price }) {
    super();

    this._type = type;
    this._price = price;

    this.container = document.createElement("div");
    this.container.classList.add("card-container");
  }

  render() {

    console.log(this._type)

    const template =
      `<div class='card type-${this._type}'>
    <div class='emoji'>🍕</div>
    <span class='type'>${this._type}</span>
    </div>
    `;


    //      `
    // <div class='card type-${this.type}> ${classNames({
    //       "is-danger": this._type === Card.types.HAWAIIAN,
    //     })}'>
    //   <div class="emoji">🍕</div>
    //   <span class="type">${this._type}</span>
    // </div>
    //     `

    ;

    console.log(this._type);

    this.container.innerHTML = template;
    this.container.addEventListener("click", () => {
      this.emit(Card.events.ADD_TO_CART, {
        type: this._type,
        price: this._price,
      });
      console.log(this._type);
    });
    this.addListener(Card.events.ADD_TO_CART,(type,price) => {
    let n=new Notification();
    n.render(type,price);
  })
  }
}
