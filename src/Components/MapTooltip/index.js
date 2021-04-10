// import useSWR from "swr";
// import { getter } from "utils/request";
import { StyledPopoverContent } from "./StyledComponents";
import { BiEditAlt } from "react-icons/bi";
import { Button, Drawer, Form, Input } from "antd";
import { useState } from "react";

const { Item } = Form;

const MapPopoverContent = (props) => {
  const { country, population } = props;
  const [showDrawer, setShowDrawer] = useState(false);
  const [editedInfo, setEditedInfo] = useState();

  //   const { data, error, isValidating, mutate } = useSWR(
  //     `/${props.country}`,
  //     getter
  //   );
  const toggleShowDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  const handleEditedInfo = ({ target: { name, value } }) => {
    setEditedInfo(value);
  };
  const handleLocalStorage = () => {
    toggleShowDrawer();
    localStorage.setItem(`${[country]}`, editedInfo);
  };

  return (
    <>
      <StyledPopoverContent>
        <BiEditAlt className="icon" onClick={toggleShowDrawer} />{" "}
        <div className="single_row"> country : {country}</div>
        <div className="single_row">
          {" "}
          population : {localStorage.getItem([country]) || population}
        </div>
      </StyledPopoverContent>
      {showDrawer && (
        <Drawer
          title="Edit Details"
          placement="right"
          closable={false}
          onClose={toggleShowDrawer}
          zIndex={1500}
          visible={showDrawer}>
          <h1> {country}</h1>
          <Form>
            <Item label="Population">
              <Input
                type="number"
                name={country}
                onChange={(e) => handleEditedInfo(e)}
                defaultValue={population}></Input>
            </Item>
          </Form>
          <Button onClick={handleLocalStorage}> Save</Button>
          <Button onClick={toggleShowDrawer}> Cancel</Button>
        </Drawer>
      )}
    </>
  );
};

export default MapPopoverContent;
