import { IconBookmark, IconHeart, IconShare } from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  rem,
} from "@mantine/core";
import classes from "./ArticleCard.module.css";
import { Item } from "../types/types";
import defaultPic from "../../assets/default.jpeg";
import defaultWriter from "../../assets/defaultWriter.jpeg";
import React from "react";
interface ChildProps {
  item: Item | null; // Принимаем data как props
}

export const ArticleCard: React.FC<ChildProps> = ({ item }) => {
  console.log(item?.volumeInfo);
  const linkProps = {
    href: item?.volumeInfo.infoLink,
    target: "_blank",
    rel: "noopener noreferrer",
  };
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <a {...linkProps}>
          <Image
            className={classes.image}
            src={item?.volumeInfo.imageLinks?.thumbnail || defaultPic}
            alt={item?.volumeInfo.title}
            height={180}
          />
        </a>
      </Card.Section>

      <Badge
        className={classes.rating}
        variant="gradient"
        gradient={{ from: "yellow", to: "red" }}
      >
        {item?.volumeInfo.categories?.[0] || "No category"}
      </Badge>

      <Text className={classes.title} fw={500} component="a" {...linkProps}>
        {item?.volumeInfo.title}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4} style={{ height: rem(88) }}>
        {item?.volumeInfo.description}
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Avatar src={defaultWriter} size={24} radius="xl" mr="xs" />
          <Text fz="sm" inline>
            {item?.volumeInfo.authors?.[0]}
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconHeart
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.red[6]}
            />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.yellow[7]}
            />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.blue[6]}
            />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
};
