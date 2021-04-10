import { Popover } from "antd";
import MapPopoverContent from "Components/MapTooltip";
import { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const WorldMap = () => {
  //   const [showPopover, setShowPopover] = useState("");
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo, index) => (
                <Popover
                  key={index}
                  //   visible={geo.properties.NAME === showPopover}
                  content={
                    <MapPopoverContent
                      country={geo.properties.NAME}
                      population={geo.properties.POP_EST}
                    />
                  }>
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      //   const { NAME, POP_EST } = geo.properties;
                      //   setShowPopover(NAME);
                      //   console.log(geo, "country name");
                    }}
                    // onMouseLeave={() => {
                    //   setShowPopover("");
                    // }}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none",
                      },
                    }}
                  />
                </Popover>
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(WorldMap);
