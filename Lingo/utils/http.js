import axios from "axios";

const baseURL = "http://localhost:8080/";




const api = axios.create({
  baseURL,
});

export const fetchFeed = async ({token}) => {
  try {
    const feed = await api.get("feed/", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return feed.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const postLoginUser = async ({ email, password }) => {
  try {
    const user = await api.post("auth/", { email, password });
    return user.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const getLessonById = async ({ lessonId,token }) => {
  try {
 
    const lesson = await api.get(`lessons/${lessonId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  
   
    return lesson.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const decreceHeartsAsync = async ({email,token}) => {
  try {
    await api.post(`auth/decreaseHears`, { email }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

  } catch (e) {
    console.log(e.message);
  }
};

export const updateDayStackAndPoints = async ({email,points,token}) => {
    try {
      await api.post(`auth/stackAndPoints`, { email,points }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (e) {
      console.log(e.message);
    }
  };
