import { act } from "react-dom/test-utils";
import { mount, mountWithRoute } from "../../../utils/mountHelper";
import ProductDetails from "../ProductDetails";
import { ReactWrapper } from "enzyme";

const fakeProductDetailsList = {
  id: 1,
  title: "SOME TITLE",
  price: 140,
  description: "SOME DESCRIPTION",
  category: "men's clothing",
  image: "SOME_IMAGE",
  rating: {
    rate: 1,
    count: 123,
  },
};

interface globalObjectInterface {
  fetch: Function;
}
const globalMock = global as globalObjectInterface;

function mockFetchCalls() {
  globalMock.fetch = jest.fn(() => Promise.resolve({ statusText: "OK", json: () => fakeProductDetailsList }));
}

let wrapper: ReactWrapper<any>;

describe("ProductDetails component testing", () => {
  beforeEach(() => {
    mockFetchCalls();
    const { component } = mountWithRoute(<ProductDetails />, {}, { initialRoute: "/", currentPath: "/" });
    wrapper = component;
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("Should return a component", () => {
    expect(wrapper.length).toEqual(1);
  });
  it("Should contain the image ", () => {
    expect(wrapper.find(".product-image").length).toEqual(1);
  });
  it("Should have called the getProducts", () => {
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
