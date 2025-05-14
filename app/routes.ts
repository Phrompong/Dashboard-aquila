import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("story-book", "./routes/storybook.tsx"),
  route("gas-volume", "./components/tables/GasVolume.tsx"),
] satisfies RouteConfig;
