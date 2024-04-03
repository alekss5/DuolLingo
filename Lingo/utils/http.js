import axios from "axios";

const baseURL = "http://localhost:8080/";




const api = axios.create({
  baseURL,
});

export const fetchFeed = async () => {
  try {
    const feed = await api.get("feed/");
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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

export const getLessonById = async ({ lessonId }) => {
  try {
    const lesson = await api.get(`lessons/${lessonId}`);
    return lesson.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const decreceHeartsAsync = async ({email}) => {
  try {
    await api.post(`auth/decreaseHears`, { email });

  } catch (e) {
    console.log(e.message);
  }
};

export const updateDayStackAndPoints = async ({email,points}) => {
    try {
      await api.post(`auth/stackAndPoints`, { email,points });
    } catch (e) {
      console.log(e.message);
    }
  };
