import { View, Text } from "react-native";
import React from "react";
import { Control, Controller } from "react-hook-form";
import {
  Button,
  Card,
  TextInput,
  useTheme,
  HelperText,
} from "react-native-paper";
type ControlledTypeProps = {
  control: Control;
  name: string;
} & React.ComponentProps<typeof TextInput>;
const ControlledInput = ({
  control,
  name,
  ...textInputProps
}: ControlledTypeProps) => {
  const theme = useTheme();
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error, invalid },
      }) => (
        <View style={{ flex: 1 }}>
          <TextInput
            {...textInputProps}
            style={{ backgroundColor: theme.colors.background }}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={invalid}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <HelperText type="error" visible={invalid}>
            {error?.message}
          </HelperText>
        </View>
      )}
    />
  );
};

export default ControlledInput;
