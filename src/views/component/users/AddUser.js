import { Button, Form, Input, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { get } from "react-hook-form";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addUser, getUser, updateUser } from "../../../actions/users";
import FormReactHook from "./FormReactHook";
import FormUser from "./FormUser";

function AddUser({
    addUser,
    addUserState,
    getUser,
    getUserState,
    updateUser,
    updateUserState,
}) {
    const history = useHistory();
    const params = useParams();
    const isAddMode = !params.id;

    const idUser = Number(params.id);

    const onSubmit = (values) => {
        console.log("values", values);
        if (isAddMode) {
            addUser({
                id: values.user.id,
                name: values.user.name,
                classUser: values.user.classUser,
                tags: [values.user.work, values.user.level],
            });
        } else {
            console.log(params);
            updateUser(params.id, {
                user: {
                    id: values.user.id,
                    name: values.user.name,
                    classUser: values.user.classUser,
                    tags: [values.user.work, values.user.level],
                },
            });
        }

        setTimeout(() => {
            history.push("/user/listusers");
        }, 1000);
    };

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [classUser, setClassuser] = useState("");
    const [work, setWork] = useState("");
    const [level, setLevel] = useState("");

    useEffect(() => {
        if (idUser) {
            getUser(params.id);
        }
    }, []);

    useEffect(() => {
        if (idUser) {
            if (getUserState.success) {
                let { user } = getUserState;
                setId(user.id);
                setName(user.name);
                setClassuser(user.class);
                setWork(user.tags[0]);
                setLevel(user.tags[1]);
            }
        }
    }, [getUserState.success]);

    return (
        <>
            <h3>{!isAddMode ? "Update User" : "Add User"}</h3>
            {/* <FormUser
                initialValues={initialValues}
                onSubmit={onSubmit}
                addUserState={addUserState}
                getUserState={getUserState}
                name={name}
                classUser={classUser}
                work={work}
                level={level}
            /> */}
            {idUser === id ? (
                <FormReactHook
                    onSubmit={onSubmit}
                    name={name}
                    classUser={classUser}
                    work={work}
                    level={level}
                    updateUserState={updateUserState}
                />
            ) : (
                <div>
                    <FormReactHook
                        onSubmit={onSubmit}
                        addUserState={addUserState}
                    />
                </div>
            )}
        </>
    );
}

function mapStateToProps(state) {
    return {
        addUserState: state.users.addUser,
        getUserState: state.users.getUser,
        updateUserState: state.users.updateUser,
    };
}

export default connect(mapStateToProps, { addUser, getUser, updateUser })(
    AddUser
);
