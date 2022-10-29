import { Badge, Circle } from "@chakra-ui/react";
import React, { Component } from "react";
class Condition extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      isNew: Boolean,
    };
  }
  render() {
    if (this.setState.isNew) {
      return (
        <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="green.200"
          />
          Open
        </Badge>
      );
    } else {
      return (
        <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
          Closed
        </Badge>
      );
    }
  }
}

export default Condition;
