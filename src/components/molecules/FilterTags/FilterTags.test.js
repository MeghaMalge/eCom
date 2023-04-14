import { render, screen } from "@testing-library/react";
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import FilterTags from "./FilterTags";

const mockStore = configureStore([thunk]);

describe("filter tag Component", () => {
    let store;
    test("displaying a tag", async () => {
      store = mockStore({
        products: {
          filters: {
            DiscountedPrice: [{category: "discountPercentage", name: "10%"}]
          }
        }
      });
      
      render(
        <Provider store={store}>
          <FilterTags />
        </Provider>);

      setTimeout(()=>{
        const tagsContainer = screen.getByText( "10%" )
        expect( tagsContainer ).toBeInTheDocument()
      }, 2000)

    });

    test("displaying multiple tags", async () => {
      store = mockStore({
        products: {
          filters: {
            DiscountedPrice: [{category: "discountPercentage", name: "10%"}, {category: "discountPercentage", name: "20%"}]
          }
        }
      });
      
      render(
        <Provider store={store}>
          <FilterTags />
        </Provider>);

      setTimeout(()=>{
        const tag1 = screen.getByText( "10%" )
        expect( tag1 ).toBeInTheDocument()

        const tag2 = screen.getByText( "10%" )
        expect( tag2 ).toBeInTheDocument()

        const clearAll = screen.getByText( "Clear All" )
        expect( clearAll ).toBeInTheDocument()
      }, 2000)

    });

});