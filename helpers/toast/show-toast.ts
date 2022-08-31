import Toast from "react-native-toast-message";

interface Props {
  type: "success" | "error" | "info";
  heading: string;
  body: string | undefined;
}

export const showToast = (props: Props) => {
  const { type, heading, body } = props;

  Toast.show({
    type,
    text1: heading,
    text2: body ?? "",
    visibilityTime: type === "error" ? 4000 : 2000,
  });
};
