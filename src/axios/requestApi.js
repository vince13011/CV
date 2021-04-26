
import axios from 'axios';

const requestApi = {


  getAsset: async (setelement) => {
    const asset = await axios.get('https://api-cv-vincent.herokuapp.com/v1/assets')
    console.log(asset.data)
    setelement(asset.data);

  },

  getCategories: async (setelement) => {
    const category = await axios.get('https://api-cv-vincent.herokuapp.com/v1/categories');
    console.log('category', category.data)
    setelement(category.data)
  },

  getExperiences: async (setelement) => {
    const experience = await axios.get('https://api-cv-vincent.herokuapp.com/v1/experiences');
    console.log('experience', experience.data)
    setelement(experience.data)
  },

  getQualifications: async (setelement) => {
    const qualification = await axios.get('https://api-cv-vincent.herokuapp.com/v1/qualifications');
    console.log('qualification', qualification.data)
    setelement(qualification.data)
  },

}
export default requestApi;