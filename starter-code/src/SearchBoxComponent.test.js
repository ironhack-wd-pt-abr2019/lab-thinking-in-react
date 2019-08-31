import React from 'react';
import ReactDOM,{render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";
import DataTable from './Components/DataTable';
import SearchBoxComponent from './Components/SearchBoxComponent'
import FilterableProductTable from './Components/FilterableProductTable'
import App from './App'
import {LeProvedore, LeContexte } from './Components/dataContext'

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Prueba del componente de DataTable", ()=>{
    act(()=>{
        render(<LeProvedore>
            <SearchBoxComponent/> 
        </LeProvedore>, container)
        console.log(container.textContent)
    })
    expect(container.textContent).toBe("Busca tus artículosOnly show products on stock")
        
})