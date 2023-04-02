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
