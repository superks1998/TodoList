import React, { Component } from "react";
import { Card, Form, Input, Button, Checkbox } from "antd";
import { login } from "../../actions/auth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class LoginPage extends Component {
    onFinish = (values) => {
        // console.log("Success:", values);
        this.props.login(values);
    };

    onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    render() {
        const { isLoggedIn } = this.props;
        return isLoggedIn ? (
            <Redirect to="/" />
        ) : (
            <Card
                size="small"
                title="Login"
                style={{ width: 600, textAlign: "center", margin: "20px auto" }}
            >
                <Form
                    name="basic"
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 20,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                            {
                                validator: (_, value) => {
                                    if (value && value.length < 3) {
                                        return Promise.reject(
                                            "Name length must bigger than 3!"
                                        );
                                    }
                                    if (value && value.length > 24) {
                                        return Promise.reject(
                                            "Name length must smaller than 24!"
                                        );
                                    }
                                    return Promise.resolve();
                                },
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                            {},
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            span: 24,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <p>{this.props.message}</p>
                    <Form.Item
                        wrapperCol={{
                            span: 24,
                        }}
                    >
                        <Button
                            loading={this.props.loading}
                            type="primary"
                            htmlType="submit"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

function mapStateToProps({ auth }) {
    return {
        isLoggedIn: auth.isLoggedIn,
        message: auth.message,
        loading: auth.loading,
    };
}

export default connect(mapStateToProps, { login })(LoginPage);
