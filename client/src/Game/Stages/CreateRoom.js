import React, { useContext, useState, useRef } from "react";
import { Formik, ErrorMessage } from "formik";
import { string, object } from "yup";

// relative
import SocketContext from "SocketContext";
import { StoreContext } from "Store";
import { changeStageAction, sendFormAction } from "Game/actions";
import { GAME_STAGES } from "Game/mappings";
import validate from "utils/validate";

import Button from "Components/Button";
import Input, { Form, HelpBlock } from "Components/Input";

const initialValues = {
  username: ""
};

function CreateRoom() {
  const { dispatch } = useContext(StoreContext);
  const socket = useContext(SocketContext);

  function onSubmit(values, { setSubmitting, setErrors }) {
    socket.emit("create_room", {
      username: values.username
    });
    dispatch(sendFormAction(values));
    setSubmitting(false);
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validate(getValidationSchema)}
        onSubmit={onSubmit}
      >
        {CreateRoomForm}
      </Formik>
      <Button
        small
        onClick={() => dispatch(changeStageAction(GAME_STAGES.landing))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </Button>
    </>
  );
}

function CreateRoomForm(props) {
  const { isSubmitting, errors, handleChange, handleSubmit } = props;

  return (
    <Form>
      <Input
        errors={errors.username}
        label="Your username"
        name="username"
        type="username"
        onChange={handleChange}
      />
      <HelpBlock>
        <ErrorMessage name="username" />
      </HelpBlock>
      <Button onClick={handleSubmit} type="submit">
        {isSubmitting ? "Starting a room..." : "Start a room"}
      </Button>
    </Form>
  );
}

function getValidationSchema(values) {
  return object().shape({
    username: string()
      .min(3, `Username has to be longer than ${3} characters!`)
      .required("Username is required!")
  });
}

export default CreateRoom;
