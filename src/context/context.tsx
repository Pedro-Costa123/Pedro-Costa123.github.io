import React, { useState } from "react";

import Content from "../models/content";

type ContentObj = {
  home: boolean;
  about: boolean;
  education: boolean;
  work: boolean;
  contact: boolean;
  changeContent: (text: string) => void;
};

export const Context = React.createContext<ContentObj>({
  home: true,
  about: false,
  education: false,
  work: false,
  contact: false,
  changeContent: (text: string) => {},
});

type Props = {
  children?: React.ReactNode;
};

/**
 * ContentProvider Component
 *
 * This component provides a context for managing the state of the website's content.
 * It uses the Context API and the useState hook for managing state.
 *
 * The component maintains a state object 'context' to keep track of which page is currently active.
 * The initial state is set to an object where 'home' is true and all other properties are false.
 *
 * The component includes a function 'changeContent' to update the state based on the provided text.
 * This function creates a new state object where all properties are false, then sets the property corresponding to the provided text to true.
 * If the provided text does not match any property, 'home' is set to true.
 *
 * The 'changeContent' function is included in the context value, so it can be called from any component that consumes the context.
 *
 * The component uses the Context.Provider component to provide the context value to its children.
 * The children are passed as props to the component.
 *
 */
const ContentProvider = (props: Props) => {
  const [context, setContext] = useState<Content>({
    home: true,
    about: false,
    education: false,
    work: false,
    contact: false,
  });

  const changeContent = (text: string) => {
    let newContent: Content = {
      home: false,
      about: false,
      education: false,
      work: false,
      contact: false,
    };

    switch (text) {
      case "About":
        newContent.about = true;
        break;
      case "Education":
        newContent.education = true;
        break;
      case "Work":
        newContent.work = true;
        break;
      case "Contact":
        newContent.contact = true;
        break;
      default:
        newContent.home = true;
        break;
    }
    setContext(newContent);
  };

  const contextValue: ContentObj = {
    home: context.home,
    about: context.about,
    education: context.education,
    work: context.work,
    contact: context.contact,
    changeContent: changeContent,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContentProvider;
