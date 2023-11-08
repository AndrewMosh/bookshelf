import {
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
  rem,
} from "@mantine/core";
import { IconSearch, IconArrowRight } from "@tabler/icons-react";

export function InputWithButton(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <div style={{ maxWidth: rem(700), margin: "35px auto 50px auto" }}>
      <TextInput
        radius="xl"
        size="md"
        placeholder="Что почитаем?"
        rightSectionWidth={42}
        leftSection={
          <IconSearch
            style={{ width: rem(18), height: rem(18) }}
            stroke={1.5}
          />
        }
        rightSection={
          <ActionIcon
            size={32}
            radius="xl"
            color={theme.primaryColor}
            variant="filled"
          >
            <IconArrowRight
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        }
        {...props}
      />
    </div>
  );
}
