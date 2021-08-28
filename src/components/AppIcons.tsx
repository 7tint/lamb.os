import React from "react";

import { Text } from "@chakra-ui/react";

type Props = {
  color: string;
};

const AppIcons = ({ color }: Props) => <Text color={color} />;

export default AppIcons;
