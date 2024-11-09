import React from 'react'; 
import WebsiteMain from './WebsiteMain.jsx';
import Home from './pages/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GetStarted from './pages/GetStarted.jsx';
import Chatbot from './pages/Chatbot.jsx';
import Tutorial from './pages/Tutorial.jsx';
function App() {


  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <WebsiteMain />,
        children: [
          {
            path: "",
            element: <Home />
          },
           {path: "/getstart",
            element: <GetStarted />
          } , 
          {path: "/chatbot",
            element: <Chatbot />
          } ,

          {path: "/tutorial",
            element: <Tutorial />
          } ,

          // , {
          //   path: "cart",
          //   element: < Cart />
          // }
          // , {
          //   path: "my-profile",
          //   element: < WebMyProfile />
          // }
          // , {
          //   path: "checkout",
          //   element: < Checkout />
          // }
          // , {
          //   path: "thank-you/:order_id",
          //   element: < ThankYou />
          // }
        ]
      // }, {
      //   path: "login",
      //   element: <LoginWeb />
      // },
      // {
      //   path: "sign-up",
      //   element: <SignUp />
      // },
      // {
      //   path: "/admin",
      //   element: <AdminMain />,
      //   children: [
      //     {
      //       path: "",
      //       element: <Dashboard />
      //     },
      //     {
      //       path: "category",
      //       element: <CategoryView />
      //     }
      //     , {
      //       path: "product",
      //       element: <ProductView />
      //     }
      //     , {
      //       path: "product/add",
      //       element: <ProductAdd />
      //     }, {
      //       path: "product/edit/:id",
      //       element: <ProductEdit />
      //     }
      //     , {
      //       path: "color",
      //       element: <ColorView />
      //     }
      //     , {
      //       path: "color/add",
      //       element: <ColorAdd />
      //     }
      //     , {
      //       path: "color/edit/:id",
      //       element: <ColorEdit />
      //     }
      //   ]
      },
    ]
  )
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
