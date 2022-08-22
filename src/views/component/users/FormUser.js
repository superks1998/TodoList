import { Button, Form, Input, Typography } from "antd";
import PropTypes from "prop-types";
import React from "react";

FormUser.propTypes = {
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func,
    addUserState: PropTypes.object,
    getUserState: PropTypes.object,
    name: PropTypes.string,
    classUser: PropTypes.string,
    work: PropTypes.string,
    level: PropTypes.string,
};

FormUser.defaultProps = {
    initialValues: {},
    onSubmit: null,
    addUserState: {},
    getUserState: {},
};

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 12,
    },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not a valid email!",
        number: "${label} is not a valid number!",
    },
    number: {
        range: "${label} must be between ${min} and ${max}",
    },
};
/* eslint-enable no-template-curly-in-string */

const { Text } = Typography;

function FormUser(props) {
    const {
        initialValues,
        onSubmit,
        addUserState,
        name,
        classUser,
        work,
        level,
    } = props;

    console.log(initialValues);

    const handleForm = (event) => {
        return event.target.value;
    };

    return (
        <>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onSubmit}
                validateMessages={validateMessages}
            >
                {/* <Form.Item
                    name={["user", "id"]}
                    label="Id"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item> */}
                <Form.Item
                    name={["user", "name"]}
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    getValueProps={(value) => name}
                >
                    <Input value={name} onChange={handleForm} />
                </Form.Item>
                <Form.Item
                    name={["user", "classUser"]}
                    label="Class"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    // getValueProps={() => classUser}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={["user", "work"]}
                    label="Work"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    // getValueProps={() => work}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={["user", "level"]}
                    label="Level (Ex: Great)"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    // getValueProps={() => level}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
                    <Button
                        loading={addUserState.loading}
                        type="primary"
                        htmlType="submit"
                    >
                        Submit
                    </Button>
                </Form.Item>
                {addUserState.success ? (
                    <Text type="success">{addUserState.message}</Text>
                ) : (
                    <Text type="danger">{addUserState.message}</Text>
                )}
            </Form>
        </>
    );
}

export default FormUser;
