import { NavLink } from "react-router-dom";

export const AdminPath2 = [
    {
        name: "Dashboard",
        path: " dashboard",
        element: '< AdminDashboard / >'
    },
    {
        name: "User Management",
        children: [

            {
                name: "Create Student",
                path: "create-student",
                element: '<CreateStudent />',
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: '<CreateFaculty />',
            },
            {
                name: "Create Admin",
                path: "create-admin",
                element: ' <CreateAdmin/>',
            },
        ],
    },
];

const newArr = AdminPath2.reduce((acc, item) => {
    if (item.path && item.element) {
        acc.push({
            key: item.name,
            labe: 'Hello',
        });
    }
    if (item.children) {
        acc.push({
            key: item.name,
            label: item.element,
            children: item.children.map((child) => ({
                key: child.name,
                label: "NAVLINK"
            }))
        });
    }
    return acc;
}, []);
console.log(JSON.stringify(newArr));
// const newArr = AdminPath2.reduce((acc, item) => {
//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element,
//         });
//     }
//     if (item.children) {
//         item.children.forEach((child) => {
//             if (child.path && child.element) {
//                 acc.push({
//                     path: child.path,
//                     element: child.element,
//                 });
//             }
//         });
//     }

//     return acc;
// }, []);
// console.log(newArr);