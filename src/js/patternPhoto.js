import American from './card/AmericanExpress/americanexpress_82060.png';
import Discover from './card/Discover/discover_payment_method_card_icon_142741.png';
import mastercard from './card/mastercard/mastercard_old_payment_method_card_icon_142735.png';
import Mir from './card/Mir/icons8-mir-48.png';
import viza from './card/viza/visa_icon_133070.png';

export class patternPhoto{
    constructor(parentEl){
        this.parentEl = parentEl;
    }
    static get markup(){
        return `
        <ul>
            <li><img class="American" src=${American}/></li>
            <li><img class="Discover" src=${Discover}/></li>
            <li><img class="mastercard" src=${mastercard}/></li>
            <li><img class="Mir" src=${Mir}/></li>
            <li><img class="viza" src=${viza}/></li>
        </ul>
        <form class="innogrn-form-widget">
        <div class="control">
            <label for="innogrn-input">Карта</label>
            <input type="text" id="innogrn-input" class="input">
        </div>
        <button class="submit">Определить</button>
    </form>
    <button class="submit-reset">Сброс</button>
    `;
    }


    bindToDOM(){

        this.parentEl.innerHTML = patternPhoto.markup;
    }
}

