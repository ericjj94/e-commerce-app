import { mountWithRoute } from "../../../utils/mountHelper";
import PlacedOrder from "../PlacedOrder";

describe("PlacedOrder component", () => {
  it("Should return a component", () => {
    const { component } = mountWithRoute(<PlacedOrder />, {}, { initialRoute: "/", currentPath: "/" });
    expect(component.length).toEqual(1);
  });
});
