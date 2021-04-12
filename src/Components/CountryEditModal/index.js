import { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { BiEditAlt } from "react-icons/bi";

const { Item } = Form;

const CountryEditInfo = (props) => {
  const { country, population, toggleModal, visible } = props;

  const [editState, setEditState] = useState(false);
  const [editedInfo, setEditedInfo] = useState();

  const handleOk = () => {
    localStorage.setItem(`${[country]}`, editedInfo);
    toggleModal();
  };
  const handleEditedInfo = ({ target: { name, value } }) => {
    setEditedInfo(value);
  };
  const toggleEditState = () => {
    setEditState(!editState);
  };

  return (
    <Modal
      visible={visible}
      title={country}
      onOk={handleOk}
      onCancel={toggleModal}
      footer={[
        <Button key="back" onClick={toggleModal}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Save
        </Button>,
      ]}>
      {editState ? (
        <Form>
          <Item label="Population">
            <Input
              type="number"
              name="population"
              onChange={(e) => handleEditedInfo(e)}
              defaultValue={
                localStorage.getItem([country]) || population
              }></Input>
          </Item>
        </Form>
      ) : (
        <>
          <BiEditAlt
            className="icon"
            onClick={toggleEditState}
            style={{ float: "right" }}
          />{" "}
          <div className="single_row">
            {" "}
            population : {localStorage.getItem([country]) || population}
          </div>
        </>
      )}
    </Modal>
  );
};

export default CountryEditInfo;
