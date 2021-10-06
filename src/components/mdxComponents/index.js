import React from "react";
// import H from './Headings';
// // import Heading from "../heading";
// import Text from './text';
import Code from "./code";
// import Blockquote from './blockquote';
// import Table from './table';
import Pre from "./pre";

// import Heading from "./Heading";
import TopicHeading from "./TopicHeading";

import PracticeContainer from "./PracticeContainer";
import Callout, { Output, Failure, Notice, Success } from "./Callout";
import BoxedList from "./BoxedList";
import FlexContainer from "./FlexContainer";
import RenderList from "./RenderList";
import CopyButton from "./CopyButton";
import CodeContainer from "./CodeContainer";

/* eslint-disable */
export default {
  // h1: props => <Heading {...props} />,
  TopicHeading: TopicHeading,
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
  Output: Output,
  Failure: Failure,
  Notice: Notice,
  Success: Success,
  BoxedList: BoxedList,
  FlexContainer: FlexContainer,
  RenderList: RenderList,
  CopyButton: CopyButton,
  CodeContainer: CodeContainer,
};
