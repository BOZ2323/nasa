import App from "../../App";
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer';

test("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<App />, div)
})

test("matches snapshot", () => {
    const snap = renderer.create(<App />).toJSON();
    expect(snap).toMatchSnapshot();
})


//not permanent solution - this gets rid of the errormessage that getContext is not implemented
HTMLCanvasElement.prototype.getContext = () => { 

};
