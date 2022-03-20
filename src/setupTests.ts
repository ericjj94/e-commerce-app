import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

require("jest-fetch-mock").enableMocks();

Enzyme.configure({ adapter: new Adapter() });
