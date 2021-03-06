import React from "react"
// import H from './Headings';
// // import Heading from "../heading";
// import Text from './text';
import Code from "./code"
// import Blockquote from './blockquote';
// import Table from './table';
import Pre from "./pre"

import PracticeContainer from "./PracticeContainer"
import Callout, { Warning, Error, Notice, Result } from "./Callout"
import BoxedList from "./BoxedList"
import FlexContainer from "./FlexContainer"
import RenderList from "./RenderList"

/* eslint-disable */
export default {
  // h1: props => <H as="h1" {...props} />,
  // h2: props => <H as="h2" {...props} />,
  // h3: props => <H as="h3" {...props} />,
  // h4: props => <H as="h4" {...props} />,
  // h5: props => <H as="h5" {...props} />,
  // h6: props => <H as="h6" {...props} />,
  // p: props => <Text {...props} />,
  pre: Pre,
  inlineCode: props => <Code {...props} />,
  // table: Table,
  // blockquote: Blockquote,
  PracticeContainer: PracticeContainer,
  Callout: Callout,
  Warning: Warning,
  Error: Error,
  Notice: Notice,
  Result: Result,
  BoxedList: BoxedList,
  FlexContainer: FlexContainer,
  RenderList: RenderList
}
