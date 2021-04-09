import useSWR from "swr";
import { getter } from "utils/request";

const MapPopoverContent = (props) => {
  //   const { data, error, isValidating, mutate } = useSWR(
  //     `/${props.country}`,
  //     getter
  //   );
  return <> tooltip {props.country}</>;
};

export default MapPopoverContent;
