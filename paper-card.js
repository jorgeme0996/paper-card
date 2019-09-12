import { html, LitElement, css } from 'lit-element';

import '@polymer/paper-button'

class PaperCard extends LitElement {
    static get properties() {
        return {
            img: {type: String},
            buttons: {type: Array},
            description: {type: String},
            title: {type: String},
        };
    }

  static get styles() {
    return css`
    :host {
      display: block;
    }
    div.card {
        width: 300px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        text-align: center;
        border-radius: 10px;
    }
    div.header {
        color: white;
        padding: 10px;
        font-size: 40px;
    }
    img{
        height: 100%;
        width: 100%;
    }
    div.container {
        padding: 10px;
    }
    `
  }

    updated(changedProps) {
        if (changedProps.has('buttons')) {

        
        }
    }

    render() {
        return html`
            <div class="card">
                <div class="header">
                    <img src="${this.img}">
                </div>
                <div class="container">
                    <h2>${this.title}</h2>
                    <p>${this.description}</p>
                    ${this.buttons ? html`
                        ${this.buttons.map(button=>html`
                            <paper-button event="${button.detail}" @click="${this.btnClicked}">${button.text}</paper-button>
                        `)}
                    `: ''}
                </div>
            </div>
        `;
    }

    btnClicked(e){
        const eventDetail = e.currentTarget.getAttribute('event');
        let event = new CustomEvent('btn-clicked', {
          detail: eventDetail,
          bubbles: true,
          composed: true 
        });
        this.dispatchEvent(event);
    }
}

window.customElements.define("paper-card", PaperCard);