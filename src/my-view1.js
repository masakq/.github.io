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

class MyView1 extends PolymerElement {
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
    <style>
      input[type=text], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
      }
      
      input[type=submit] {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      
      input[type=submit]:hover {
        background-color: #45a049;
      }
      
      div {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
      }
      </style>
      <body>
      
      <h3>Section A</h3>
      
      <div>
        <form action="/action_page.php">
          <label for="fname">User's Name</label>
          <input type="text" id="name" name="name" placeholder="Your name..">
      
          <label for="lname">Email</label>
          <input type="text" id="email" name="email" placeholder="Your email..">
          
          <label for="lname">Phone Number</label>
          <input type="text" id="phonenumber" name="number" placeholder="Your phone number..">
         </select>
        
          <input type="submit" value="Submit">
        </form>

      </div>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
