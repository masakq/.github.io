/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
      <body>
  <body>
    <h1>Section B</h1>
    <style>
      #container {
        width: 400px;
        height: 400px;
        position: relative;
        background: yellow;
      }
      #animate {
        width: 50px;
        height: 50px;
        position: absolute;
        background-color: red;
      }
      </style>
      <body>
      
      <p><button onclick="myMove()">Click Me</button></p> 
      
      <div id ="container">
        <div id ="animate"></div>
      </div>
      
      <script>
      function myMove() {
        let id = null;
        const elem = document.getElementById("animate");   
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 20);
        function frame() {
          if (pos == 350) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.top = pos + "px"; 
            elem.style.left = pos + "px"; 
          }
        }
      }
      </script>
      
  </body>
      </div>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
