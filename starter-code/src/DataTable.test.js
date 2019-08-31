import React from 'react';
import ReactDOM,{render, unmountComponentAtNode } from 'react-dom';
import pretty from "pretty";
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
            <SearchBoxComponent />
            <DataTable /> 
        </LeProvedore>, container)
        //console.log(container.textContent)
    })
    expect(container.textContent).toMatch(/Name/)
        
})

it("Que le pueda dar click al control del checkbox", ()=>{
  const onChange = jest.fn()
  act(()=>{
    render(<LeProvedore>
      <SearchBoxComponent />
      <DataTable/> 
  </LeProvedore>, container)
  })
  const checkboxButton = document.querySelector("#chkOnStock")
  const dataTable = document.querySelector("#dataTable")
  expect(pretty(container.innerHTML)).toMatchSnapshot();
  expect(checkboxButton.checked).not.toBeTruthy()
  act(()=>{
    checkboxButton.dispatchEvent(new MouseEvent("click"), {bubbles: true})
  })
  expect(checkboxButton.checked).toBeTruthy()
  expect(
    pretty(dataTable.innerHTML)
  ).toMatchSnapshot()
})