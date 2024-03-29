import React from "react";
import { Formik, Form } from "formik";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                value={values.username}
                onChange={handleChange}
                id="username"
                placeholder="username"
              />
              {/* <FormErrorMessage></FormErrorMessage> */}
            </FormControl>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
