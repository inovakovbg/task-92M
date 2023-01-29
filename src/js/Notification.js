import Card from "./Card.js";
import classNames from "classnames";
import EventEmitter from "eventemitter3";
import { formatCurrency } from "./utils.js";


export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");

    this.NDiv = document.querySelector('.notifications')
  }

  empty(){
    this.container.remove()
  }

  render ({type, price }){

    console.log(type);

    this._type=type;
    console.log(this._type);

    let Name= ('notification type-'+classNames(type,{'is-danger': type === 'hawaiian' ? true : false}));
    console.log(Name);

    // let Name = ('notification type'+${type} ${classNames({ "is-danger": type === Card.types.HAWAIIAN })}>
    // console.log(Name);

    

   

            
    const template = `
    <div class='notification type-${type} ${classNames({ "is-danger": type === 'hawaiian'})}'>
    

    
    
    <button class='delete'></button>
    🍕<span class="type"> ${type}</span> (<span class='price'> ${formatCurrency(price)}</span>) has been added to your order!
    </div>`;

    


    this.container.innerHTML = template;
   
    
    this.NDiv.appendChild(this.container);

    let button = this.container.querySelector('.delete')
    button.addEventListener('click', () => this.DeleteN())
   
   
};


DeleteN() {this.NDiv.removeChild(this.container)};

}