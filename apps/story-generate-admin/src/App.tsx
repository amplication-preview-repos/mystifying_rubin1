import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StoryList } from "./story/StoryList";
import { StoryCreate } from "./story/StoryCreate";
import { StoryEdit } from "./story/StoryEdit";
import { StoryShow } from "./story/StoryShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { GenreList } from "./genre/GenreList";
import { GenreCreate } from "./genre/GenreCreate";
import { GenreEdit } from "./genre/GenreEdit";
import { GenreShow } from "./genre/GenreShow";
import { AgeGroupList } from "./ageGroup/AgeGroupList";
import { AgeGroupCreate } from "./ageGroup/AgeGroupCreate";
import { AgeGroupEdit } from "./ageGroup/AgeGroupEdit";
import { AgeGroupShow } from "./ageGroup/AgeGroupShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Story Generate"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Story"
          list={StoryList}
          edit={StoryEdit}
          create={StoryCreate}
          show={StoryShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="Genre"
          list={GenreList}
          edit={GenreEdit}
          create={GenreCreate}
          show={GenreShow}
        />
        <Resource
          name="AgeGroup"
          list={AgeGroupList}
          edit={AgeGroupEdit}
          create={AgeGroupCreate}
          show={AgeGroupShow}
        />
      </Admin>
    </div>
  );
};

export default App;
