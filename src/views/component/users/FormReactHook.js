import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import "./FormReactHook.scss";

FormReactHook.propTypes = {
    onSubmit: PropTypes.func,
    addUserState: PropTypes.object,
    updateUserState: PropTypes.object,
    name: PropTypes.string,
    classUser: PropTypes.string,
    work: PropTypes.string,
    level: PropTypes.string,
};

FormReactHook.defaultProps = {
    onSubmit: null,
    addUserState: null,
    updateUserState: null,
    name: "",
    classUser: "",
    work: "",
    level: "",
};

function FormReactHook(props) {
    const {
        onSubmit,
        name,
        classUser,
        work,
        level,
        addUserState,
        updateUserState,
    } = props;

    const messageStatus = addUserState || updateUserState;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            user: {
                name,
                classUser,
                work,
                level,
            },
        },
    });

    return (
        <>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-wrap">
                    <label>
                        <span>Name:</span>
                        <input
                            className="form-input"
                            id="input-name"
                            {...register("user.name", {
                                required: true,
                            })}
                        ></input>
                    </label>
                    {errors.user?.name && <p>This is required</p>}
                </div>
                <div className="form-wrap">
                    <label>
                        <span>Class:</span>
                        <input
                            className="form-input"
                            id="input-class"
                            {...register("user.classUser", {
                                required: true,
                            })}
                        ></input>
                    </label>
                    {errors.user?.classUser && <p>This is required</p>}
                </div>
                <div className="form-wrap">
                    <label>
                        <span>Work:</span>
                        <input
                            className="form-input"
                            id="input-work"
                            {...register("user.work", {
                                required: true,
                                maxLength: 10,
                            })}
                        ></input>
                    </label>
                    {errors.user?.work && <p>This is required</p>}
                </div>
                <div className="form-wrap">
                    <label>
                        <span>Level:</span>
                        <input
                            className="form-input"
                            id="input-level"
                            {...register("user.level", { required: true })}
                        ></input>
                    </label>
                    {errors.user?.level && <p>This is required</p>}
                </div>
                <div>
                    <input
                        className="form-submit"
                        type="submit"
                        value="Submit"
                    ></input>
                    {messageStatus.success ? (
                        <p className="success-message">
                            {messageStatus.message}
                        </p>
                    ) : (
                        <p className="fail-message">{messageStatus.message}</p>
                    )}
                </div>
            </form>
        </>
    );
}

export default FormReactHook;
