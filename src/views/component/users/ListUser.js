import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Tag, Space, Input } from "antd";

import { fetchUsers, deleteUser } from "../../../actions/users";
import { users } from "../../../apis";
import { Link, withRouter } from "react-router-dom";

const { Search } = Input;

class ListUser extends Component {
    constructor() {
        super();
        this.state = {
            columns: [
                {
                    title: "Id",
                    dataIndex: "id",
                    key: "id",
                },
                {
                    title: "Name",
                    dataIndex: "name",
                    key: "name",
                    render: (text) => <a>{text}</a>,
                },
                {
                    title: "Class",
                    dataIndex: "class",
                    key: "age",
                },
                {
                    title: "Tags",
                    key: "tags",
                    dataIndex: "tags",
                    render: (tags) => (
                        <>
                            {tags.map((tag) => {
                                let color =
                                    tag.length > 5 ? "geekblue" : "green";
                                if (tag === "loser") {
                                    color = "volcano";
                                }
                                return (
                                    <Tag color={color} key={tag}>
                                        {tag.toUpperCase()}
                                    </Tag>
                                );
                            })}
                        </>
                    ),
                },
                {
                    title: "Action",
                    key: "action",
                    render: (user) => (
                        <Space size="middle">
                            <a>View</a>
                            <a onClick={() => this.onEditUser(user.id)}>Edit</a>
                            {/* <Link to={`/user/edit/${user.id}`}>Edit</Link> */}
                            <a onClick={() => this.onDeleteUser(user.id)}>
                                Delete
                            </a>
                        </Space>
                    ),
                },
            ],
            key: "",
            current: 1,
            pageSize: 5,
        };
    }

    componentDidMount() {
        const { key, current, pageSize } = this.state;
        this.props.fetchUsers({ key, current, pageSize });
    }

    onFetchUsers = (key, current) => {
        const { pageSize } = this.state;
        this.props.fetchUsers({ key, current, pageSize });
    };

    onPageChange = (current) => {
        this.setState({ current });
        this.onFetchUsers(this.state.key, current);
    };

    onSearch = (key) => {
        this.setState({ key, current: 1 });
        this.onFetchUsers(key, 1);
    };

    onSearchChange = (event) => {
        let key = event.target.value;
        this.onSearch(key);
    };

    onEditUser = (id) => {
        setTimeout(() => {
            this.props.history.push(`/user/edit/${id}`);
        }, 1000);
    };

    onDeleteUser = (id) => {
        const confirmMessage = window.confirm("Chac chan xoa?");

        if (confirmMessage) {
            this.props.deleteUser(id);
            setTimeout(() => {
                this.props.history.go(0);
            }, 500);
        }
    };

    render() {
        const { columns, current, pageSize } = this.state;
        const { list } = this.props;
        return (
            <>
                <Search
                    placeholder="input search text"
                    onSearch={this.onSearch}
                    // onChange={this.onSearch}
                    enterButton
                    style={{ width: 500, margin: "10px 0" }}
                />
                <Table
                    loading={list.loading}
                    columns={columns}
                    dataSource={list.users}
                    pagination={{
                        pageSize,
                        current,
                        total: list.total,
                        onChange: this.onPageChange,
                    }}
                />
            </>
        );
    }
}

function mapStatetoProps({ users }) {
    return {
        list: users.list,
    };
}

export default connect(mapStatetoProps, { fetchUsers, deleteUser })(
    withRouter(ListUser)
);
