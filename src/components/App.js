
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
import ExperiencePage from './ExperiencePage';
import getAssetsByCategory from '../selectors/getAssetsByCategory';
//axios
import requestApi from '../axios/requestApi';


const App = () => {

  const [assets, setAssets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [qualifications, setQualifications] = useState([]);

  useEffect(() => {
    return (
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
            experiences={experiences} qualifications={qualifications} />
        </Route>
        <Route path='/cv' component={() => {
          window.location.href = 'https://drive.google.com/file/d/1rCn-w39jgq3CB8ZZhfqbbCecZin8FEtl/view?usp=sharing';
          return null;
        }} />
        <Route
          exact
          path="/categories/experiences">
          <ExperiencePage categories={categories} experiences={experiences} />
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
