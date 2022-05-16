import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils'
import { TodoForm } from "../components/TodoForm";

import { createRoot } from 'react-dom/client'

let container = null

beforeEach(()=>{
    container = document.createElement("div");
    document.body.appendChild(container);

});

afterEach(()=>{
    //unmountComponentAtNode(container);
    container.remove();
    container = null;
})

describe("<TodoForm />", ()=>{
    it("Should have title 'Creating a Todo'", ()=>{
        act(()=>{
            createRoot(container).render(<TodoForm />)
        });
        const create_form_title = document.querySelector("[data-testid = create_form_title]")
        expect(create_form_title.textContent).toBe('Creating a Todo')
    })
})