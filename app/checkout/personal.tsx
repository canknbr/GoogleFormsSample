import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import {
  Button,
  Card,
  TextInput,
  useTheme,
  HelperText,
} from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PersonalInfoSchema,
  PersonalInfo,
} from "../../src/schema/checkout.schema";
import ControlledInput from "../../src/component/ControlledInput";

const PersonalDetails = () => {
  const { control, handleSubmit } = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });

  const router = useRouter();
  const theme = useTheme();
  const nextPage = (data) => {
    console.log(data);
    router.push("/checkout/delivery");
  };
  return (
    <ScrollView
      contentContainerStyle={{
        gap: 15,
        maxWidth: 500,
        width: "100%",
        alignSelf: "center",
      }}
      showsVerticalScrollIndicator={false}>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Personal Information" titleVariant="titleLarge" />
        <Card.Content>
          <ControlledInput
            control={control}
            name="name"
            placeholder="Name"
            label="Name"
          />

          <ControlledInput
            control={control}
            name="email"
            placeholder="hey@gmail.com"
            label="Email"
          />
          <ControlledInput
            control={control}
            name="password"
            label="Password"
            secureTextEntry
          />
          <ControlledInput
            control={control}
            name="confirmPassword"
            label="ConfirmPassword"
            secureTextEntry
          />
        </Card.Content>
      </Card>
      <Button onPress={handleSubmit(nextPage)} mode="contained">
        Next
      </Button>
    </ScrollView>
  );
};

export default PersonalDetails;
