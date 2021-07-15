
import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
//styles
import './App.scss';
//component
import Home from './Home';
import CategoryPage from './CategoryPage';
import QualificationPage from './QualificationPage';
import SwitchPage from './SwitchPage';
import getAssetsByCategory from '../selectors/getAssetsByCategory';
//axios
import requestApi from '../axios/requestApi';


const App = () => {

  const [assets, setAssets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [qualifications, setQualifications] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [index, setIndex] = useState(1);
  
  const clickMenu = () => {
      if (!showMenu) {
          setShowMenu(true)
      }
      else {
          setShowMenu(false)
      }
  }
  /*function myFunction() {
     setTimeout(requestApi.getCategories(setCategories), 30000);
  }
  */

  useEffect(() => {
    return(
      //myFunction,
      requestApi.getCategories(setCategories),
      requestApi.getAsset(setAssets),
      requestApi.getExperiences(setExperiences),
      requestApi.getQualifications(setQualifications)
    )
  },
    []);


  return (
    <div className="app">
      <Switch>
        <Route
          exact
          path="/">
          <Home assets={assets} categories={categories}
            experiences={experiences} qualifications={qualifications} clickMenu={clickMenu} index={index} setIndex={setIndex} showMenu={showMenu} />
        </Route>
        <Route
          exact
          path="/switch">
          <SwitchPage categories={categories}  clickMenu={clickMenu} showMenu={showMenu} />
        </Route>

        <Route
          exact
          path="/categories/diplomes">
          <QualificationPage categories={categories} qualifications={qualifications} />
        </Route>

        {categories.map((category) => {
          const filteredAssets = getAssetsByCategory(assets, category);

          return (
            <Route
              key={category.id}
              path={`/categories/${category.name}`}
              exact
            >
              <CategoryPage categories={categories} assets={filteredAssets} category={category} />
            </Route>
          );
        })}

      </Switch>
    </div>
  )
}

// == Export
export default App;
