import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import UserProfilePage from "./UserProfilePage";
import { Provider } from "react-redux";
import store from "../../../redux/store";

test("Overview", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <UserProfilePage />
      </BrowserRouter>
    </Provider>
  );
  
  expect(screen.getByText("Overview")).toBeInTheDocument();
  expect(screen.getByText("Personal Details")).toBeInTheDocument();
  expect(screen.getByText("Edit")).toBeInTheDocument();
  expect(screen.getByText("Last Name")).toBeInTheDocument();
  expect(screen.getByText("First Name")).toBeInTheDocument();
  expect(screen.getByText("Date of Birth(YYYY-MM-DD)")).toBeInTheDocument();
  expect(screen.getByText("Mobile")).toBeInTheDocument();
  expect(screen.getByText("Email")).toBeInTheDocument();
  expect(screen.getAllByText("Password")).toHaveLength(2);

});
