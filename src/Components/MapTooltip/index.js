// import useSWR from "swr";
// import { getter } from "utils/request";
import { StyledPopoverContent } from "./StyledComponents";

const MapPopoverContent = (props) => {
  const { country, population } = props;

  return (
    <StyledPopoverContent>
      <div className="single_row"> country : {country}</div>
      <div className="single_row">
        {" "}
        population : {localStorage.getItem([country]) || population}
      </div>
    </StyledPopoverContent>
  );
};

export default MapPopoverContent;
