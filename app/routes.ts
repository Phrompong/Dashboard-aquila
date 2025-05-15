import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("./routes/storybook.tsx"),
  route("gas-volume", "./components/tables/GasVolume.tsx"),
  route("demand", "./components/tables/Demand.tsx"),
  route("supply", "./components/tables/Supply.tsx"),
] satisfies RouteConfig;
