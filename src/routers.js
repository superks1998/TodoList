import AddUser from "./views/component/users/AddUser";
import ListUser from "./views/component/users/ListUser";

const routers = [
    {
        name: "Option1",
        path: "/option1",
        icon: "",
        component: <h3>Option 1</h3>,
        key: "1",
    },
    {
        name: "Users",
        path: "/users",
        icon: "",
        key: "sub1",
        children: [
            {
                name: "Add user",
                path: "/user/add",
                icon: "",
                component: <AddUser />,
                name: "List Users",
                path: "/user/listusers",
                icon: "",
                component: <ListUser />,
                key: "2",
            },
            {
                name: "Add user",
                path: "/user/add",
                icon: "",
                component: <AddUser />,
                key: "3",
            },
            {
                name: "Update Users",
                path: "/user/edit/:id",
                icon: "",
                component: <AddUser />,
                key: "4",
                hidden: true,
            },
        ],
    },
    {
        name: "Team",
        path: "/team",
        icon: "",
        key: "sub2",
        children: [
            {
                name: "Lol",
                path: "/team/lol",
                icon: "",
                component: "Lol",
                key: "5",
            },
            {
                name: "Csgo",
                path: "/team/csgo",
                icon: "",
                component: "Csgo",
                key: "6",
            },
        ],
    },
];

export default routers;
