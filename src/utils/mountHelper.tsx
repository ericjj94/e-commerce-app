import React from "react";
import { Provider } from "react-redux";
import { mount as enzymeMount } from "enzyme";

import rootReducers from "../reducers";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter, Route, Routes } from "react-router-dom";

export function mount(component: React.ReactElement) {
  const store = configureStore({ reducer: rootReducers, devTools: true });

  return {
    component: enzymeMount(<Provider store={store}>{component}</Provider>),
  };
}

export function mountWithRoute(
  component: React.ReactElement,
  reduxStore: any,
  { initialRoute = "/", currentPath = "/" }
) {
  const store = configureStore({ reducer: rootReducers, devTools: true });
  return {
    component: enzymeMount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[initialRoute]}>
          <Routes>
            <Route path={currentPath} element={component} />
          </Routes>
        </MemoryRouter>
      </Provider>
    ),
  };
}
