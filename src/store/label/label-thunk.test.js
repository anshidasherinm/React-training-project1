import "@testing-library/jest-dom";
import store from "store/index";
import { apiService } from "utils";
import fetchMock from "jest-fetch-mock";
const getListResponse = {
  NOqXGK_kreZB5AW_PFG: {
    id: 1463,
    name: "School",
  },
};
// const mockNetworkResponse = () => {
//   const mock = new MockAdapter(apiClient.getClient());
//   mock.onGet(`/labels`).reply(200, getListResponse);
// };

describe("Games redux state tests", () => {
  //   beforeAll(() => {
  //     mockNetworkResponse();
  //   });
  // beforeEach(() => {
  //   fetch.resetMocks();
  // });

  // it("renders if label list is there", async () => {
  //   fetchMock.mockResponseOnce(
  //     JSON.stringify({
  //       result: [],
  //     })
  //   );
  //   const res = await apiService(undefined, "GET", "label");
  //   expect(res).not.toEqual([]);
  //   // expect(fetch.mock.calls.length).toEqual(1);
  // });

  it("Should initially set games to an empty object", () => {
    // const state = store.getState().games;
    console.log(store.getState().label.labels);
    const labelList = store.getState().label.labels;
    // const labels = store.getState();
    expect(labelList).toEqual([]);
  });
});
