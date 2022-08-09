import LoginForm from "./LoginForm";
import {screen, render, fireEvent} from '@testing-library/react'
import { render, screen } from '@testing-library/react';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate,
 }))
 describe('Post Create', () => {

    it('successful post with redirect', async () => {
        const {container} = render(<LoginForm/>)
      
        const descriptionElement = screen.getByPlaceholderText("Email id")


       
        fireEvent.change(descriptionElement, {target: {value: 'A New description from Testing'}})
       
        
        expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
        
    })

})


// test('renders email id',() => {
//   render(<LoginForm  />);
//   screen.debug()
//   const emailElement = screen.getByPlaceholderText("Enter email");
//   expect(emailElement).toBeInTheDocument();
// });