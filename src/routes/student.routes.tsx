import StudentDashboard from "../pages/students/StudentDashboard";
import OfferedCourse from "../pages/students/OfferedCourse";

export const StudentPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },

  {
    name: "Offered Courses",
    path: "offered-courses",
    element: <OfferedCourse />,
  },
];

// sidebars menus
// // eslint-disable-next-line react-refresh/only-export-components
// export const studentSidebarItems: TSidebarItem[] = StudentPath.reduce(
//   (acc: TSidebarItem[], item) => {
//     if (item.path && item.element) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/student/${item.path}`}>{item.name}</NavLink>,
//       });
//     }
//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/student/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }
//     return acc;
//   },
//   []
// );
// console.log(StudentPath);

// // routes
// export const StudentRoutes = StudentPath.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   // console.log(item.path);

//   if (item.children) {
//     item.children.forEach((child) => {
//       if (child.path && child.element) {
//         acc.push({
//           path: child.path,
//           element: child.element,
//         });
//       }
//     });
//   }

//   return acc;
// }, []);
// console.log(StudentRoutes);
