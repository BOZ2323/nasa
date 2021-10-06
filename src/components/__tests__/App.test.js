// import * as App from "../../App";
import App, { GetDailyData } from "../../App";
import ReactDOM from 'react-dom'
import { act } from "react-dom/test-utils";
import renderer from 'react-test-renderer';

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });


test("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<App />, div)
})

test("matches snapshot", () => {
    const snap = renderer.create(<App />).toJSON();
    expect(snap).toMatchSnapshot();
})
// describe("Button component", () => {
//     test("it shows the expected text when clicked", () => {
//       act(() => {
//         ReactDOM.render(<GetDailyData text="See last weeks pictures" />, container);
//       });
//       // more soon
//     });
//   });

//not permanent solution - this gets rid of the errormessage that getContext is not implemented
HTMLCanvasElement.prototype.getContext = () => { 

};
